// ============================================================
// === KAERI EDTECH QUIZ ENGINE - HYBRID MASTER (v11.9 MERGED) ===
// === Server-Side Access + Local Content + Doc Delivery + KaTeX + Smart TTS + Markdown ===
// === Enhanced with Silent Revalidation, Expiry Display, and Analytics ===
// === NEW: Professional Revision Kit Generator (Branded Covers + Session Metadata) ===
// === ADDITIVE SAFE UPDATES: Subscription guide idempotency + extra plan info helper ===
// === v1.1 PATCH: KAERI_CONFIG + PRICE_MAP consolidation (behavior unchanged) ===
// === v1.2 PATCH: MCQ manifest loader (per-term lazy loading; demo contract unchanged) ===
// === v1.3 PATCH: SYSTEM_CONFIG from getSystemConfig + MCQ wrong-answer pool (no PRICE_MAP live) ===
// === v1.4 PATCH: no hardcoded prices/durations anywhere; race-free plan cards; streak-based MCQ pool + banner ===
// === v1.5 PATCH: reader (voice/speed/pause/replay), pool right/wrong tally + building, ghost functions wired or removed ===
// === v1.6 PATCH: naturalSort applied to unit and sub-topic ordering ===
// === v1.7 PATCH: STRICTLY TWO BACKENDS ONLY (Gatekeeper & AMB-PAY) ===
// ============================================================

// --- CONFIGURATION ---

const KAERI_CONFIG = {
    // Brand
    brandName:          'Kaeri EdTech',
    brandTagline:       'Empowering Learners Through Smart Educational Technology',
    brandShort:         'KAERI EDTECH',
    siteUrl:            'https://kaerikalmar.github.io/KaeriEdTech',

    // ─── THE ONLY TWO ACTIVE BACKENDS ───
    
    // 1. Gatekeeper Backend (Auth, Docs, Analytics)
    gatekeeperUrl:      "https://script.google.com/macros/s/AKfycbyEgfRxU4Z6kdehvNcJloabFmwldB9CExr26G9SNHSGppTVIeGTMKFYAPz-x-eSCXuiVg/exec",
    
    // 2. AMB-PAY Backend (Payments, Config, Bridge)
    ambPayUrl:          "https://script.google.com/macros/s/AKfycbwGp6ripudldEFja6W6K1CuunPMG5h5E5_P_2jO95PirDS0OQYrH2LTPAyOb35gZXOvxQ/exec",

    // Ambassador cross-app.
    ambassadorPortalUrl: "AMB-PORTAL.html", 
    ambassadorApiUrl:    "",                

    // Limits and timers
    demoAttemptLimit:           10,
    revalidationMs:             300000,
    revalidationWarmupMs:       5000,
    courseLoadDelayMs:          100,
    paymentRetries:             3,
    paymentRetryGapMs:          1000,
    paymentTimeoutMs:           30000,
    maxPaymentScreenshotBytes:  5 * 1024 * 1024,
    printPopupBlockDelayMs:     60000
};

// --- LEGACY ALIASES (Mapped to the 2 active URLs) ---
// The rest of this file relies on these specific names. 
// Do NOT add new URLs. Everything below maps strictly to your two backends.
const APPS_SCRIPT_URL       = KAERI_CONFIG.gatekeeperUrl;    // Gatekeeper
const DOCS_SCRIPT_URL       = KAERI_CONFIG.gatekeeperUrl;    // Gatekeeper
const PAYMENT_SCRIPT_URL    = KAERI_CONFIG.ambPayUrl;        // AMB-PAY
const AMBASSADOR_PORTAL_URL = KAERI_CONFIG.ambassadorPortalUrl;
const AMBASSADOR_API_URL    = KAERI_CONFIG.ambassadorApiUrl;

// ============================================================
// === LIVE SYSTEM CONFIG: prices + durations ===
// Single source of truth = AppConfig sheet (via getSystemConfig).
// NOTHING in this file hardcodes a price or a duration. If the live
// config is not available the UI shows "—" instead of guessing.
// ============================================================
let SYSTEM_CONFIG = { inventory: {}, durations: {}, maxDevices: {}, loaded: false, loadedAt: 0, error: '' };
let _configInflight = null;
const CONFIG_FRESH_MS = 60 * 1000;   // reuse a fetched config for 60s, then refresh in the background
let purchaseIntent = null;           // { course, term } requested by a plan card, consumed once by renderPaymentForm()

function _up(v) { return String(v || '').trim().toUpperCase(); }

function _cfgNumber(map, course, term) {
    try {
        const row = map && map[_up(course)];
        if (row && row[_up(term)] != null) {
            const n = Number(row[_up(term)]);
            if (isFinite(n)) return n;
        }
    } catch (e) {}
    return null;
}

/** Live price or null (never a guess). */
function getPriceFor(course, term) {
    const n = _cfgNumber(SYSTEM_CONFIG.inventory, course, term);
    return (n !== null && n >= 0) ? n : null;
}

/** Live duration in days or null (never a guess). */
function getDurationFor(course, term) {
    const n = _cfgNumber(SYSTEM_CONFIG.durations, course, term);
    return (n !== null && n > 0) ? n : null;
}

function getMaxDevicesFor(course, term) {
    const n = _cfgNumber(SYSTEM_CONFIG.maxDevices, course, term);
    return (n !== null && n > 0) ? n : null;
}

function formatPrice(n) {
    if (n === null || n === undefined || !isFinite(n)) return '—';
    return 'K' + (Math.round(n) === n ? n : n.toFixed(2));
}

function formatDays(n) {
    if (n === null || n === undefined || !isFinite(n)) return '';
    return n + (n === 1 ? ' day' : ' days');
}

/** Course/term currently open in the study view (set synchronously by loadCourse). */
function getViewedScope() {
    return {
        course: _up(document.body.getAttribute('data-course')),
        term: _up(document.body.getAttribute('data-term'))
    };
}

function payScopeLabel(course, term) {
    const c = _up(course), t = _up(term);
    if (c === 'ALL' && t === 'ALL') return '🌍 Global Access · all courses';
    if (t === 'ALL') return c + ' · Full Course (all terms)';
    return c + ' ' + t;
}

/** Fetch live inventory/durations/maxDevices. Safe to call often (cached + single-flight). */
function loadSystemConfig(force) {
    if (!force && SYSTEM_CONFIG.loaded && (Date.now() - SYSTEM_CONFIG.loadedAt) < CONFIG_FRESH_MS) {
        return Promise.resolve(SYSTEM_CONFIG);
    }
    if (_configInflight) return _configInflight;
    _configInflight = callPaymentApi('getSystemConfig', {})
        .then(function (res) {
            if (!res || !res.success) throw new Error((res && res.message) || 'Could not load prices.');
            SYSTEM_CONFIG.inventory  = res.inventory  || {};
            SYSTEM_CONFIG.durations  = res.durations  || {};
            SYSTEM_CONFIG.maxDevices = res.maxDevices || {};
            SYSTEM_CONFIG.loaded = true;
            SYSTEM_CONFIG.loadedAt = Date.now();
            SYSTEM_CONFIG.error = '';
            inventory = SYSTEM_CONFIG.inventory;     // the payment form's dropdowns read this
            refreshPriceUI();
            return SYSTEM_CONFIG;
        })
        .catch(function (err) {
            SYSTEM_CONFIG.error = (err && err.message) || 'offline';
            throw err;
        })
        .then(function (v) { _configInflight = null; return v; },
              function (e) { _configInflight = null; throw e; });
    return _configInflight;
}

/** Banner + pricing text inside the course view. Never unhides the banner (full-access users keep it hidden). */
function renderCourseBanner(course, term) {
    const price = getPriceFor(course, term);
    const days = getDurationFor(course, term);
    currentPrice = price;

    let bannerText, valText;
    if (price === null) {
        bannerText = SYSTEM_CONFIG.error && !SYSTEM_CONFIG.loaded ? 'Price unavailable (offline)'
                   : SYSTEM_CONFIG.loaded ? 'Price unavailable' : 'Loading price…';
        valText = '—';
    } else {
        bannerText = formatPrice(price) + (days ? ' · ' + formatDays(days) : '');
        valText = formatPrice(price) + (days ? ' for ' + formatDays(days) : '');
    }
    const banner = document.getElementById('price-banner');
    if (banner) banner.textContent = bannerText;
    const priceVal = document.getElementById('price-val');
    if (priceVal) priceVal.textContent = valText;
    const priceDesc = document.getElementById('price-desc');
    if (priceDesc) priceDesc.textContent = course + ' Term ' + String(term).replace(/^T/i, '');
}

/** Re-render every price/duration surface from the live config. */
function refreshPriceUI() {
    try {
        const v = getViewedScope();
        if (v.course && v.term) renderCourseBanner(v.course, v.term);
        updatePlanCards();
        const modal = document.getElementById('payment-modal');
        if (modal && modal.classList.contains('show')) updatePrice();
    } catch (e) { console.warn('[refreshPriceUI]', e); }
}

function _setPlanCard(kind, price, days, baseText, hasContext) {
    const key = kind === 'full' ? 'full-course' : 'global';
    const card = document.querySelector('[data-plan-card="' + kind + '"]');
    // Hide a card only when we KNOW the plan is not sold (config loaded, context known, no price).
    const unavailable = SYSTEM_CONFIG.loaded && hasContext && price === null;
    if (card) card.style.display = unavailable ? 'none' : '';
    document.querySelectorAll('[data-plan="' + key + '"]').forEach(function (el) {
        el.textContent = formatPrice(price);
    });
    document.querySelectorAll('[data-plan-duration="' + key + '"]').forEach(function (el) {
        el.textContent = baseText + (days ? ' · ' + formatDays(days) : '');
    });
}

/** Full Course + Global cards: live price AND live duration. The Full Course card follows the course in view / selected. */
function updatePlanCards(course) {
    const cs = document.getElementById('courseSelect');
    const selected = cs ? _up(cs.value) : '';
    const c = _up(course) || (selected && selected !== 'ALL' ? selected : '') || getViewedScope().course || _up(currentCourse);
    _setPlanCard('full',
        c ? getPriceFor(c, 'ALL') : null,
        c ? getDurationFor(c, 'ALL') : null,
        c ? 'All terms' : 'Pick a course first',
        !!c);
    _setPlanCard('global', getPriceFor('ALL', 'ALL'), getDurationFor('ALL', 'ALL'), 'Every course', true);
}

/** Which course should the Full Course card buy? Dropdown choice → course in view → last opened. */
function _resolveFullCourse() {
    const cs = document.getElementById('courseSelect');
    const picked = cs ? _up(cs.value) : '';
    if (picked && picked !== 'ALL') return picked;
    return getViewedScope().course || _up(currentCourse) || '';
}

function onFullCourseClick() {
    const course = _resolveFullCourse();
    if (!course) {
        showAppNotification('Choose a course in the form above first, then tap Full Course.', 'info', 3500);
        const cs = document.getElementById('courseSelect');
        if (cs) { try { cs.focus(); } catch (e) {} }
        return;
    }
    if (SYSTEM_CONFIG.loaded && getPriceFor(course, 'ALL') === null) {
        showAppNotification('⚠️ Full Course is not available for ' + course + ' right now.', 'warning', 3500);
        return;
    }
    openPaymentModal({ course: course, term: 'ALL' });
}

function onGlobalClick() {
    if (SYSTEM_CONFIG.loaded && getPriceFor('ALL', 'ALL') === null) {
        showAppNotification('⚠️ Global Access is not available right now.', 'warning', 3500);
        return;
    }
    openPaymentModal({ course: 'ALL', term: 'ALL' });
}


// --- STATE ---

let ttsEnabled = false;
let printContentData = null;
let hasFullAccess = false;
let currentPrice = null; // set by loadCourse from SYSTEM_CONFIG / fallback
let isSubmissionLocked = false; 

// --- User session data (for silent revalidation & analytics) ---
let userEmail = '';
let userCode = '';
let deviceFP = '';

// --- DATA CONTAINERS ---
// NOTE: allMcqData removed — MCQ now loads per-term via the manifest (see Section 1).
let allShortData = [], allEssayData = [], allFlashcards = {};
let currentMcqData = [], currentShortData = [], currentEssayData = [], currentFlashcardTopics = {};

// --- SESSION CONTEXT ---
let currentCourse = null, currentTerm = null, currentTermKey = null;
let currentQuizType = null, currentQuestionIndex = 0, currentScore = 0, currentQuizData = [];
let currentEssay = null, currentStepIndex = 0, essayScore = 0;

// Flashcard Specific Contexts
let currentFlashcardTopic = null, currentFlashcards = [], currentCardIndex = 0, isCardFront = true;
let currentFlashcardMode = 'linear'; // 'linear' or 'srs'
let srsQueue = []; 

// Silent revalidation timer
let revalidationInterval = null;

// ============================================================
// === 0. UNIVERSAL PARSER (Markdown -> HTML) ===
// ============================================================

function parseKaeriMarkdown(text) {
    if (!text) return "";
    let t = text;

    // 1. Headers (# H1, ## H2)
    t = t.replace(/^## (.*$)/gim, "<h3 style='margin:10px 0; color:#72efdd;'>$1</h3>");
    t = t.replace(/^# (.*$)/gim, "<h2 style='margin:15px 0; color:#fff;'>$1</h2>");

    // 2. Blockquotes (> text)
    t = t.replace(/^> (.*$)/gim, "<blockquote style='border-left:4px solid #72efdd; margin:10px 0; padding-left:15px; color:#a0a8b4; font-style:italic;'>$1</blockquote>");

    // 3. Bullet Lists (- item)
    t = t.replace(/^- (.*$)/gim, "<li style='margin-left:20px;'>$1</li>");

    // 4. Bold (**text**)
    t = t.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // 5. Underline (__text__)
    t = t.replace(/__(.*?)__/g, "<u>$1</u>");

    // 6. Italic (*text*) - careful regex to avoid breaking Math symbols
    t = t.replace(/(?<!\\)\*([^\s].*?)(?<!\\)\*/g, "<em>$1</em>");

    // 7. Line Breaks (Convert newlines to HTML breaks)
    t = t.replace(/\n/g, "<br>");

    return t;
}

// ============================================================
// === 1. INITIALIZATION & DATA LOADING ===
// ============================================================

// ── PAYMENT CONFIGURATION & STATE (ADDED) ──
const PAYMENT_API_URL = KAERI_CONFIG.ambPayUrl;  // UPDATED: Points to AMB-PAY backend
let inventory = {};
let isSubmitting = false;
let isChecking = false;

// ────────────────────────────────────────────────────────────
// ── MCQ MANIFEST + PER-TERM LOADER ─────────────────────────
// ────────────────────────────────────────────────────────────
// Term datasets self-register on `window.__MCQ__[termKey]`. The loader injects
// the mapped file once per term, reads back the registered array, filters by
// moderation status, and caches the result.

const MCQ_MANIFEST = {
    "BI110_T1": "assets/mcq/BI110_T1.js",
    "BI110_T2": "assets/mcq/BI110_T2.js",
    "BI110_T3": "assets/mcq/BI110_T3.js",
    "CS110_T1": "assets/mcq/CS110_T1.js",
    "CS110_T2": "assets/mcq/CS110_T2.js",
    "CS110_T3": "assets/mcq/CS110_T3.js",
    "CH110_T1": "assets/mcq/CH110_T1.js",
    "CH110_T2": "assets/mcq/CH110_T2.js",
    "CH110_T3": "assets/mcq/CH110_T3.js",
    "PH110_T1": "assets/mcq/PH110_T1.js",
    "PH110_T2": "assets/mcq/PH110_T2.js",
    "PH110_T3": "assets/mcq/PH110_T3.js",
    "MA110_T1": "assets/mcq/MA110_T1.js",
    "MA110_T2": "assets/mcq/MA110_T2.js",
    "MA110_T3": "assets/mcq/MA110_T3.js",
    "LA111_T1": "assets/mcq/LA111_T1.js",
    "LA111_T2": "assets/mcq/LA111_T2.js",
    "LA111_T3": "assets/mcq/LA111_T3.js"
};

const _mcqCache = {};

function loadMcqForTermKey(termKey) {
    return new Promise(function (resolve) {
        if (_mcqCache[termKey]) { resolve(_mcqCache[termKey]); return; }

        const path = MCQ_MANIFEST[termKey];
        if (!path) { _mcqCache[termKey] = []; resolve([]); return; }

        const existing = document.querySelector('script[data-mcq-term="' + termKey + '"]');
        if (existing) {
            existing.addEventListener('load', function () { resolve(_mcqCache[termKey] || []); });
            return;
        }

        const script = document.createElement('script');
        script.src = path;
        script.setAttribute('data-mcq-term', termKey);
        script.onload = function () {
            window.__MCQ__ = window.__MCQ__ || {};
            const raw = window.__MCQ__[termKey] || [];
            const usable = raw.filter(function (q) {
                return !q.flagged && (q.status === undefined || q.status === 'approved');
            });
            _mcqCache[termKey] = usable;
            resolve(usable);
        };
        script.onerror = function () { _mcqCache[termKey] = []; resolve([]); };
        document.head.appendChild(script);
    });
}

// Disable any term button whose dataset file is not yet in the manifest.
function hideUnavailableTerms() {
    document.querySelectorAll('.term-buttons button').forEach(function (btn) {
        const onclick = btn.getAttribute('onclick') || '';
        const m = onclick.match(/loadCourse\('(\w+)',\s*'(\w+)'/);
        if (!m) return;
        const key = m[1] + '_' + m[2];
        if (!MCQ_MANIFEST[key]) {
            btn.disabled = true;
            btn.title = 'Content coming soon';
            btn.style.opacity = '0.4';
            btn.style.cursor = 'not-allowed';
            if (btn.textContent.indexOf('(soon)') === -1) btn.textContent += ' (soon)';
        }
    });
}

function loadGlobalData() {
    // MCQ is loaded per-term via the manifest (see loadMcqForTermKey).
    // Short Answer, Essay, and Flashcards keep their legacy global arrays.
    allShortData  = typeof shortData  !== 'undefined' ? shortData  : [];
    allEssayData  = typeof essayData  !== 'undefined' ? essayData  : [];
    allFlashcards = typeof flashcards !== 'undefined' ? flashcards : {};
}

async function initializeCourseLogic() {
    loadGlobalData();
    
    // Initialize TTS
    ttsEnabled = ttsSupported && localStorage.getItem("ttsEnabled") === "true";
    const modeButtonsDiv = document.querySelector('.mode-buttons');
    
    if (modeButtonsDiv) {
        // Add TTS Button if missing
        if (!document.getElementById('tts-toggle-button')) {
            const ttsButton = document.createElement('button');
            ttsButton.id = 'tts-toggle-button';
            ttsButton.onclick = toggleTTS;
            modeButtonsDiv.appendChild(ttsButton);
            updateTtsButtonText();
        }
        // Reader settings (voice + speed) next to the toggle
        if (ttsSupported && !document.getElementById('tts-settings-button')) {
            const ttsSettingsBtn = document.createElement('button');
            ttsSettingsBtn.id = 'tts-settings-button';
            ttsSettingsBtn.textContent = '🎛️ Reader Settings';
            ttsSettingsBtn.onclick = openTtsSettings;
            modeButtonsDiv.appendChild(ttsSettingsBtn);
        }
        
        // Add Progress Dashboard Button if missing
        if (!document.getElementById('progress-btn')) {
            const progressBtn = document.createElement('button');
            progressBtn.id = 'progress-btn';
            progressBtn.innerHTML = "\uD83D\uDCCA My Progress";
            progressBtn.style.backgroundColor = "#6f42c1";
            progressBtn.style.color = "white";
            progressBtn.style.border = "none";
            progressBtn.style.padding = "15px 20px";
            progressBtn.style.fontSize = "1.1em";
            progressBtn.style.borderRadius = "8px";
            progressBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
            progressBtn.style.cursor = "pointer";
            progressBtn.onclick = renderProgressDashboard;
            modeButtonsDiv.appendChild(progressBtn);
        }

        // Add Document Button if missing
        if (!document.getElementById('docs-btn')) {
            const docBtn = document.createElement('button');
            docBtn.id = 'docs-btn';
            docBtn.innerHTML = "📂 Course Documents";
            docBtn.style.backgroundColor = "#28a745"; 
            docBtn.style.color = "white";
            docBtn.style.border = "none";
            docBtn.style.padding = "15px 20px";
            docBtn.style.fontSize = "1.1em";
            docBtn.style.borderRadius = "8px";
            docBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
            docBtn.style.cursor = "pointer";
            docBtn.onclick = renderDocuments;

            // Insert as second button
            if (modeButtonsDiv.children.length > 1) {
                modeButtonsDiv.insertBefore(docBtn, modeButtonsDiv.children[1]);
            } else {
                modeButtonsDiv.appendChild(docBtn);
            }
        }
    }

    // Context Setup
    const body = document.body;
    currentCourse = body.getAttribute('data-course');
    currentTerm = body.getAttribute('data-term');
    currentTermKey = `${currentCourse}_${currentTerm}`;

    // Filter Data — MCQ loads per-term from the manifest; the others use legacy globals.
    currentMcqData         = await loadMcqForTermKey(currentTermKey);
    currentShortData       = filterDataByCourseAndTerm(allShortData, currentCourse, currentTerm);
    currentEssayData       = filterDataByCourseAndTerm(allEssayData, currentCourse, currentTerm);
    currentFlashcardTopics = filterFlashcardsByCourseAndTerm(allFlashcards, currentCourse, currentTerm);

    // Inject Viewer HTML if missing
    if (!document.getElementById('smart-doc-viewer')) {
        injectDocViewerHTML();
    }

    // Security Check
    await checkAccessStatus();
}
// ============================================================
// === 2. UNIVERSAL RENDERING ENGINE (KaTeX) ===
// ============================================================

function renderMath(targetId = null) {
    if (typeof renderMathInElement !== 'function') return;

    const renderOptions = {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false},
            {left: "\\[", right: "\\]", display: true}
        ],
        throwOnError: false
    };

    if (targetId) {
        const el = document.getElementById(targetId);
        if (el) renderMathInElement(el, renderOptions);
    } else {
        const form = document.getElementById("quiz-form");
        const result = document.getElementById("result");
        if (form) renderMathInElement(form, renderOptions);
        if (result) renderMathInElement(result, renderOptions);
    }
}

// ============================================================
// === 3. DOCUMENT DELIVERY ENGINE (FROM BASE A - PRESERVED) ===
// === v1.2 PATCH: instant shimmer on tap; verify in background; then load iframe ===
// ============================================================

function injectDocViewerHTML() {
    if (document.getElementById('smart-doc-viewer')) return;
    
    const viewerHTML = `
    <div id="smart-doc-viewer" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); z-index:9999; align-items:center; justify-content:center; backdrop-filter:blur(5px);">
        <div style="background:#1a1a2e; width:95%; height:95%; border-radius:15px; padding:0; display:flex; flex-direction:column; box-shadow:0 10px 40px rgba(0,0,0,0.5); border:2px solid #72efdd; overflow:hidden; position:relative;">
            
            <!-- Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; padding:15px 20px; background:#0d1b2a; border-bottom:1px solid #3e506e; height:50px; box-sizing:border-box;">
                <h3 id="viewer-title" style="color:white; margin:0; font-size:1.1em; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:70%;">Document</h3>
                <button onclick="closeDocViewer()" style="background:#dc3545; color:white; border:none; padding:6px 15px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.9em;">✕ Close</button>
            </div>

            <!-- Loading Skeleton Overlay (Visible initially) -->
            <div id="doc-loader-overlay" class="viewer-loader">
                <div class="viewer-skeleton-box"></div>
                <p id="doc-loader-text" style="color:#72efdd; margin-top:20px; font-size:0.9em;">Verifying access...</p>
            </div>

            <!-- The Iframe -->
            <iframe id="doc-frame" style="flex:1; width:100%; border:none; background:white;" allow="autoplay; fullscreen" allowfullscreen></iframe>
            
            <div style="text-align:center; color:#888; font-size:0.75em; padding:5px; background:#0d1b2a; border-top:1px solid #3e506e;">
                Protected Content - Kaeri EdTech
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', viewerHTML);
}

// ── Stage 1: show the modal + shimmer skeleton IMMEDIATELY (instant feedback on tap) ──
function showDocViewerLoading(title) {
    const viewer = document.getElementById('smart-doc-viewer');
    const iframe = document.getElementById('doc-frame');
    const titleEl = document.getElementById('viewer-title');
    const loader = document.getElementById('doc-loader-overlay');
    const loaderText = document.getElementById('doc-loader-text');
    
    if (!viewer || !iframe) {
        injectDocViewerHTML();
        setTimeout(() => showDocViewerLoading(title), 50);
        return;
    }
    
    titleEl.textContent = title || "Document";
    iframe.src = "";                                      // Clear previous to prevent ghosting
    if (loaderText) loaderText.textContent = 'Verifying access...';
    if (loader) loader.style.display = 'flex';            // Show shimmer right now
    viewer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ── Stage 2: load the iframe (only called AFTER verification succeeds) ──
function loadDocInViewer(fileId, title) {
    const iframe = document.getElementById('doc-frame');
    const loader = document.getElementById('doc-loader-overlay');
    const loaderText = document.getElementById('doc-loader-text');
    if (!iframe) return;

    // Update the shimmer text: verification is done, now the document is loading
    if (loaderText) loaderText.textContent = 'Loading preview...';

    iframe.src = `https://drive.google.com/file/d/${fileId}/preview`;
    iframe.onload = function () {
        // Small buffer to ensure rendering has started
        setTimeout(() => {
            if (loader) loader.style.display = 'none';
        }, 500);
    };

    // Fire-and-forget analytics
    logAnalyticsEvent('document_view', `Viewed: ${title}`);
}

// ── Convenience wrapper (backwards compatible: shows + loads in one shot) ──
function openDocumentViewer(fileId, title) {
    if (!fileId || fileId === 'undefined') {
        showAppNotification("⚠️ Document link unavailable", "error");
        return;
    }
    showDocViewerLoading(title);
    loadDocInViewer(fileId, title);
}

function closeDocViewer() {
    const viewer = document.getElementById('smart-doc-viewer');
    if (viewer) {
        viewer.style.display = 'none';
        const iframe = document.getElementById('doc-frame');
        if (iframe) iframe.src = "";
        document.body.style.overflow = 'auto';
    }
}

// ============================================================
// === NEW: Document Access Control & Quiz Starter Helpers ===
// ============================================================

// Document access bouncer — shows skeleton INSTANTLY, verifies in background,
// then loads the iframe. Fixes the "frozen tap" UX delay.
async function attemptOpenDoc(fileId, title) {
    if (!hasFullAccess) {
        // Free user: show message and payment modal
        showAppNotification("⚠️ Documents are only accessible in Full Access mode.", "warning", 2500);
        setTimeout(() => {
            openPaymentModal();
        }, 1000);
        return;
    }

    // ── 1. INSTANT FEEDBACK: show the viewer + shimmer right now ──
    showDocViewerLoading(title);

    // ── 2. Verify with Gatekeeper in the background ──
    try {
        const res = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
                action: 'verify_document_access',
                file_id: fileId,
                session: { 
                    code: userCode, 
                    email: userEmail 
                }
            })
        });
        
        const data = await res.json();
        
        if (data.success) {
            // ── 3. Verified: load the actual document ──
            loadDocInViewer(fileId, title);
        } else {
            // Denied: close the viewer and tell the student why
            closeDocViewer();
            showAppNotification("❌ Access Denied: " + (data.message || "Unknown error"), "error");
            if (data.code === 'SESSION_INVALID') {
                handleSessionExpired(data.message);
            }
        }
    } catch (e) {
        closeDocViewer();
        showAppNotification("⚠️ Connection error. Could not verify document access.", "error");
    }
}

// Short Answer starter - initializes with specified number of questions
function startActualShortAnswer(limit) {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    document.getElementById("result").innerHTML = "";
    
    let q = shuffle([...currentShortData]).slice(0, limit);
    currentQuizData = q;
    currentQuizType = 'shortAnswer';
    currentQuestionIndex = 0;
    currentScore = 0;
    
    if (q.length === 0) {
        container.innerHTML = "<p>No short answer questions available.</p>";
        updateProgress(0, 0);
        return;
    }
    displayShortAnswerQuestion();
    logAnalyticsEvent('quiz_start', `Short Answer (${limit} questions)`);
}

// Step selector for Short Answer preset buttons
function selectShortAnswerStep(step, label) {
    const totalAvailable = currentShortData.length;
    const finalCount = (step > totalAvailable) ? totalAvailable : step;
    showAppNotification(`🎯 Starting ${finalCount} question practice`, "success", 1500);
    setTimeout(() => startActualShortAnswer(finalCount), 500);
}

// Custom number handler for Short Answer
function startCustomShortAnswer() {
    const input = document.getElementById('custom-sa-count');
    if (!input) return;
    
    let requestedCount = parseInt(input.value);
    const totalAvailable = currentShortData.length;
    
    if (isNaN(requestedCount) || requestedCount < 1) {
        showAppNotification("⚠️ Please enter a valid number", "warning");
        return;
    }
    
    if (requestedCount > totalAvailable) {
        showAppNotification(`ℹ️ Only ${totalAvailable} available. Using all.`, "info", 2000);
        requestedCount = totalAvailable;
    }
    
    startActualShortAnswer(requestedCount);
}

// ============================================================
// === MODIFIED: Document Renderer (RESTORED FROM BASE A) ===
// ============================================================

async function renderDocuments() {
    // IMPORTANT: Uses DOCS_SCRIPT_URL (Gatekeeper) to fetch data
    
    const container = document.getElementById("quiz-form");
    
    // Show skeleton grid while loading
    let skeletonHTML = `
        <h2 style="text-align:center; margin-bottom:20px;">📚 Loading Library...</h2>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:15px; padding:20px 0;">
    `;
    for(let i=0; i<8; i++) {
        skeletonHTML += `<div class="skeleton" style="height:180px; background:linear-gradient(90deg, #2b3a55 25%, #3e506e 50%, #2b3a55 75%); background-size:200% 100%; animation:shimmer 1.5s infinite; border-radius:10px;"></div>`;
    }
    skeletonHTML += `</div>`;
    
    container.innerHTML = skeletonHTML;
    document.getElementById("result").innerHTML = "";
    
    currentQuizType = 'documents'; 
    updateProgress(0, 0);

    try {
        // Flattened payload for Gatekeeper
        const payload = JSON.stringify({
            action: 'GET_STUDENT_DOCS',
            course: currentCourse, 
            term: currentTerm      
        });

        // FETCHING FROM GATEKEEPER URL
        const response = await fetch(DOCS_SCRIPT_URL, {
            method: 'POST',
            redirect: "follow",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: payload
        });
        
        const data = await response.json();
        const documents = data.documents || (data.data && data.data.documents) || [];
        const success = data.success || false;
        
        if (!success || documents.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:30px;"><h3>📂 Library Empty</h3><p>No active documents found.</p><button class="restart-button" onclick="exitQuiz()">Back to Menu</button></div>`;
            return;
        }

        let html = `<h2 style="text-align:center; margin-bottom:20px;">📚 ${currentCourse} Library</h2>`;
        
        // Add status banner for free users
        if (!hasFullAccess) {
            html += `
                <div style="background:#2b3a55; border-left:6px solid #ffc107; padding:15px; border-radius:8px; margin-bottom:20px;">
                    <p style="margin:0; color:#ffc107; font-weight:bold;">🔒 Preview Mode</p>
                    <p style="margin:5px 0 0 0; font-size:0.9em;">Documents are visible but locked. Unlock Full Access to view them.</p>
                </div>`;
        }
        
        html += `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:15px; padding:20px 0;">`;

        documents.forEach(doc => {
    const shortDesc = doc.description ? (doc.description.length > 80 ? doc.description.substring(0, 80) + '...' : doc.description) : '';
    
    // ── Determine fallback icon based on file type ──
    let fallbackIcon = '📄';
    const fileType = (doc.type || '').toLowerCase();
    if (fileType.includes('pdf')) fallbackIcon = '📕';
    else if (fileType.includes('image') || fileType.includes('jpg') || fileType.includes('png')) fallbackIcon = '🖼️';
    else if (fileType.includes('word') || fileType.includes('doc')) fallbackIcon = '📘';
    else if (fileType.includes('excel') || fileType.includes('sheet')) fallbackIcon = '📊';
    
    const lockIcon = hasFullAccess ? "👁️ Open" : "🔒 Locked";
    const lockColor = hasFullAccess ? "#28a745" : "#dc3545";
    const cardOpacity = hasFullAccess ? "1" : "0.75";
    
    html += `
    <div class="doc-card" onclick="attemptOpenDoc('${doc.fileId}', '${doc.title.replace(/'/g, "\\'")}')" 
         style="background:#2b3a55; padding:15px; border-radius:10px; border-left:5px solid ${lockColor}; 
                cursor:pointer; transition:0.3s; box-shadow: 0 4px 8px rgba(0,0,0,0.2); opacity: ${cardOpacity};">

        <!-- ── THUMBNAIL CONTAINER ── -->
        <div style="width:100%; height:140px; background:linear-gradient(135deg, #1b263b, #0d1b2a); border-radius:8px; margin-bottom:12px; overflow:hidden; display:flex; align-items:center; justify-content:center; border:1px solid #3e506e; position:relative;">
            <img src="https://drive.google.com/thumbnail?id=${doc.fileId}&sz=w400" 
                 alt="${doc.title}"
                 loading="lazy"
                 style="width:100%; height:100%; object-fit:cover; transition:0.3s;"
                 onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:48px; opacity:0.5; color:#a0a8b4;\\'>${fallbackIcon}</span>';">
            <div style="position:absolute; bottom:6px; right:8px; background:rgba(0,0,0,0.7); padding:2px 10px; border-radius:12px; font-size:9px; color:#fff; text-transform:uppercase; letter-spacing:0.5px;">
                ${doc.type || 'FILE'}
            </div>
        </div>

        <div style="font-size:0.7em; text-transform:uppercase; color:${lockColor}; font-weight:bold; letter-spacing:1px; margin-bottom:5px;">${doc.topic || 'General'}</div>
        <div style="font-size:1.1em; font-weight:bold; color:white; margin-bottom:8px; line-height:1.3;">${doc.title}</div>
        <div style="font-size:0.85em; color:#a0a8b4; margin-bottom:10px;">${shortDesc}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; border-top:1px solid #3e506e; padding-top:10px;">
            <span style="background:#0d1b2a; padding:2px 8px; border-radius:4px; font-size:0.7em; color:#fff;">${doc.type || 'FILE'} • ${doc.size || 'Unknown'}</span>
            <span style="color:${lockColor}; font-size:0.9em; font-weight:bold;">${lockIcon}</span>
        </div>
    </div>`;
});
        html += `</div>`;
        html += `<div style="text-align:center; margin-top:20px;"><button class="restart-button" onclick="exitQuiz()">⬅ Back to Menu</button></div>`;
        container.innerHTML = html;

    } catch (e) {
        container.innerHTML = `<div style="text-align:center; padding:20px; color:#dc3545;"><h3>⚠️ Connection Error</h3><p>Could not load library.</p><button class="restart-button" onclick="renderDocuments()">Try Again</button></div>`;
    }
}

// ============================================================
// === 4. SECURITY & AUTHENTICATION (GATEKEEPER) ===
// === v1.1 PATCH: three-reason session check + days_remaining tiers ===
// === All calls route to APPS_SCRIPT_URL → Gatekeeper backend ===
// ============================================================

async function checkAccessStatus() {
    const storedToken = localStorage.getItem(`token_${currentTermKey}`);
    const storedExpiry = localStorage.getItem(`expiry_${currentTermKey}`);
    const storedEmail = localStorage.getItem(`email_${currentTermKey}`);
    const storedCode = localStorage.getItem(`code_${currentTermKey}`);
    
    if (storedToken && storedExpiry && Date.now() < parseInt(storedExpiry) && storedEmail && storedCode) {
        userEmail = storedEmail;
        userCode = storedCode;
        enableFullAccessUI();
        // After enabling UI, fetch session status to update banner
        checkSessionStatus();
        // Start silent revalidation
        startSilentRevalidation();
        return;
    }
    enableDemoUI();
}

async function verifyCodeFromModal() {
    const userCodeInput = document.getElementById('access-code-input').value.trim();
    if (!userCodeInput) return alert("Please enter a code.");
    const userEmailInput = prompt("Enter the Email you used to pay:"); 
    if (!userEmailInput) return alert("Email required for verification.");

    // Generate or retrieve device fingerprint
    deviceFP = localStorage.getItem('device_fp');
    if (!deviceFP) {
        deviceFP = navigator.userAgent + "_" + Math.random().toString(36).substring(7);
        localStorage.setItem('device_fp', deviceFP);
    }

    showAppNotification("🔍 Verifying with Server...", "info");

    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            redirect: "follow",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
                action: 'validate_access_code',   // Gatekeeper action
                code: userCodeInput,
                email: userEmailInput,
                device_fp: deviceFP,
                course: currentCourse,
                term: currentTerm
            })
        });

        const result = await response.json();

        if (result.success) {
            // Store session data
            const expiryTimestamp = result.data.expiry_timestamp;
            const sessionToken = result.data.session_token;
            localStorage.setItem(`token_${currentTermKey}`, sessionToken || "VALID");
            localStorage.setItem(`expiry_${currentTermKey}`, expiryTimestamp);
            localStorage.setItem(`email_${currentTermKey}`, userEmailInput);
            localStorage.setItem(`code_${currentTermKey}`, userCodeInput);
            
            userEmail = userEmailInput;
            userCode = userCodeInput;
            
            closePaymentModal();
            enableFullAccessUI();
            
            // Fetch session status and start silent revalidation
            checkSessionStatus();
            startSilentRevalidation();
            
            showAppNotification("✅ " + result.message, "success");
        } else {
            showAppNotification("❌ " + result.message, "error");
        }
    } catch (e) {
        showAppNotification("⚠️ Connection Error. Check internet.", "error");
    }
}

// ============================================================
// === NEW: Silent Revalidation & Session Status (GATEKEEPER) ===
// ============================================================

async function silentRevalidation() {
    if (!hasFullAccess || !userEmail || !userCode) return;
    
    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
                action: 'silent_revalidation',   // Gatekeeper action
                email: userEmail,
                code: userCode,
                session_token: localStorage.getItem(`token_${currentTermKey}`) || ''
            })
        });
        const result = await response.json();
        if (!result.success) {
            // Session invalid – log out
            handleSessionExpired(result.message);
        }
    } catch (e) {
        // Network error – ignore, but could optionally show a warning after several failures
        console.warn('Silent revalidation failed', e);
    }
}

async function checkSessionStatus() {
    if (!hasFullAccess || !userEmail || !userCode) return;
    
    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
                action: 'check_session_status',   // Gatekeeper action
                email: userEmail,
                code: userCode
            })
        });
        const result = await response.json();
        
        if (!result.success) {
            // Session invalid — generic reason from server
            handleSessionExpired(result.message);
            return;
        }
        
        const data = result.data;
        
        // ── three specific reasons for invalidity, each with its own message ──
        if (data.email_match === false) {
            handleSessionExpired('This code belongs to a different account.');
            return;
        }
        if (data.is_active === false) {
            handleSessionExpired('Your access has been revoked.');
            return;
        }
        if (data.is_expired === true) {
            handleSessionExpired('Your subscription has expired.');
            return;
        }
        
        // Update banner with expiry date
        if (data.expiry_date) {
            const expiryDate = new Date(data.expiry_date);
            updateModeBanner(`✅ FULL ACCESS (expires ${expiryDate.toLocaleDateString()})`);
            
            // Show notification with days remaining
            if (data.days_remaining !== null && data.days_remaining !== undefined) {
                const days = data.days_remaining;
                if (days > 0) {
                    showAppNotification(`ℹ️ Your license expires in ${days} day(s).`, 'info', 5000);
                } else if (days === 0) {
                    showAppNotification(`⚠️ Your license expires today!`, 'warning', 7000);
                }
            }
        }
    } catch (e) {
        console.warn('Session status check failed', e);
    }
}

function handleSessionExpired(message) {
    // Clear all stored session data
    localStorage.removeItem(`token_${currentTermKey}`);
    localStorage.removeItem(`expiry_${currentTermKey}`);
    localStorage.removeItem(`email_${currentTermKey}`);
    localStorage.removeItem(`code_${currentTermKey}`);
    hasFullAccess = false;
    userEmail = '';
    userCode = '';
    if (revalidationInterval) {
        clearInterval(revalidationInterval);
        revalidationInterval = null;
    }
    enableDemoUI();
    showAppNotification(`⏳ ${message || 'Session expired. Please log in again.'}`, 'warning');
}

function startSilentRevalidation() {
    if (revalidationInterval) clearInterval(revalidationInterval);
    // Run every 5 minutes
    revalidationInterval = setInterval(silentRevalidation, KAERI_CONFIG.revalidationMs);
    // Also run once immediately after a short delay
    setTimeout(silentRevalidation, KAERI_CONFIG.revalidationWarmupMs);
}

// ============================================================
// === NEW: Silent Analytics Logging (GATEKEEPER) ===
// ============================================================

function logAnalyticsEvent(actionType, details) {
    // Fire and forget – user never sees this
    fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
            action: 'log_system_event',   // Gatekeeper action
            email: userEmail || (hasFullAccess ? 'full_access' : 'demo'),
            actionType: actionType,
            course: currentCourse,
            term: currentTerm,
            details: details,
            device_fp: deviceFP || localStorage.getItem('device_fp') || 'unknown'
        })
    }).catch(() => {}); // Silent failure
}

// ============================================================
// === MODIFIED: Demo Limit Function (Documents bypass) ===
// ============================================================

function blockDemo(type) {
    // Documents are always visible (just locked), so don't count attempts
    if (type === 'documents') return false;
    
    if (hasFullAccess) return false;
    
    const key = `demo_${type}_used_${currentTermKey}`;
    let attempts = parseInt(localStorage.getItem(key) || "0");
    const maxAttempts = KAERI_CONFIG.demoAttemptLimit;
    const attemptsLeft = maxAttempts - attempts;
    
    if (attempts < maxAttempts) {
        showAppNotification(`Demo Mode: ${attemptsLeft} attempts remaining.`, "info", 2000);
    }
    
    if (attempts >= maxAttempts) {
        showAppNotification(`Demo limit reached. Unlock Full Access!`, "warning");
        openPaymentModal(); 
        return true;
    }
    
    localStorage.setItem(key, attempts + 1);
    return false;
}

// ── Peek: has this term's demo budget for `type` any charges left? ──
// Does NOT modify storage, does NOT notify.
function canUseDemo(type) {
    if (type === 'documents') return true;
    if (hasFullAccess) return true;
    const key = `demo_${type}_used_${currentTermKey}`;
    const attempts = parseInt(localStorage.getItem(key) || "0");
    return attempts < KAERI_CONFIG.demoAttemptLimit;
}

// ── Charge: consume one attempt and notify the user. ──
// Callers must check canUseDemo() first if they want to gate the action.
function consumeDemoAttempt(type) {
    if (type === 'documents') return;
    if (hasFullAccess) return;

    const key = `demo_${type}_used_${currentTermKey}`;
    const attempts = parseInt(localStorage.getItem(key) || "0");
    const maxAttempts = KAERI_CONFIG.demoAttemptLimit;
    const attemptsLeft = maxAttempts - attempts;

    if (attemptsLeft > 0) {
        showAppNotification(`Demo Mode: ${attemptsLeft} attempts remaining.`, "info", 2000);
    }
    localStorage.setItem(key, attempts + 1);
}
// ============================================================
// === 5. PROGRESS TRACKING ENGINE (localStorage only) ===
// ============================================================

const PROGRESS_KEY_PREFIX = 'kaeri_progress_v1_';

function _progressKey() {
    return `${PROGRESS_KEY_PREFIX}${currentTermKey}`;
}

function _loadProgress() {
    try {
        return JSON.parse(localStorage.getItem(_progressKey()) || 'null') || {
            sessions: [],
            streak: { count: 0, lastDate: null },
            totalQuestions: 0,
            totalCorrect: 0,
            flashcardSessions: 0,
            mcqBest: 0,
            saBest: 0,
            essayBest: 0
        };
    } catch(e) {
        return {
            sessions: [],
            streak: { count: 0, lastDate: null },
            totalQuestions: 0,
            totalCorrect: 0,
            flashcardSessions: 0,
            mcqBest: 0,
            saBest: 0,
            essayBest: 0
        };
    }
}

function _saveProgress(data) {
    try {
        if (data.sessions.length > 60) {
            data.sessions = data.sessions.slice(-60);
        }
        localStorage.setItem(_progressKey(), JSON.stringify(data));
    } catch(e) {}
}

function _updateStreak(data) {
    const today = new Date().toISOString().slice(0, 10);
    const last  = data.streak.lastDate;
    if (last === today) return;
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    if (last === yesterday) {
        data.streak.count += 1;
    } else {
        data.streak.count = 1;
    }
    data.streak.lastDate = today;
}

function recordProgressSession(type, score, total, label) {
    if (!currentTermKey) return;
    const data    = _loadProgress();
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    data.sessions.push({ type, score, total, percent, ts: Date.now(), label: label || type });
    if (type !== 'flashcard') {
        data.totalQuestions += total;
        data.totalCorrect   += score;
    }
    if (type === 'mcq')         data.mcqBest          = Math.max(data.mcqBest,   percent);
    if (type === 'shortAnswer') data.saBest            = Math.max(data.saBest,    percent);
    if (type === 'essay')       data.essayBest         = Math.max(data.essayBest, percent);
    if (type === 'flashcard')   data.flashcardSessions += 1;
    _updateStreak(data);
    _saveProgress(data);
}

function _timeAgo(ts) {
    const diff  = Date.now() - ts;
    const mins  = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days  = Math.floor(diff / 864e5);
    if (mins  < 1)   return 'just now';
    if (mins  < 60)  return `${mins}m ago`;
    if (hours < 24)  return `${hours}h ago`;
    if (days  === 1) return 'yesterday';
    return `${days}d ago`;
}

function _confirmResetProgress() {
    const m = document.getElementById('reset-modal');
    if (m) m.classList.add('show');
}

function renderProgressDashboard() {
    const container = document.getElementById('quiz-form');
    container.innerHTML = '';
    document.getElementById('result').innerHTML = '';
    currentQuizType = 'dashboard';
    updateProgress(0, 0);

    if (!currentTermKey) {
        container.innerHTML = '<p style="text-align:center;color:#a0a8b4;">Load a course first.</p>';
        return;
    }

    const data     = _loadProgress();
    const sessions = data.sessions;

    const overallPct = data.totalQuestions > 0
        ? Math.round((data.totalCorrect / data.totalQuestions) * 100) : 0;

    const last7  = sessions.filter(s => Date.now() - s.ts < 7  * 864e5);
    const last30 = sessions.filter(s => Date.now() - s.ts < 30 * 864e5);
    const recent = sessions.slice(-10);

    function modeAvg(type) {
        const s = sessions.filter(x => x.type === type && x.total > 0);
        if (!s.length) return null;
        return Math.round(s.reduce((a, b) => a + b.percent, 0) / s.length);
    }
    const mcqAvg = modeAvg('mcq');
    const saAvg  = modeAvg('shortAnswer');
    const esAvg  = modeAvg('essay');

    const streakCount = data.streak.count || 0;
    const streakColor = streakCount >= 7 ? '#ffc107' : streakCount >= 3 ? '#72efdd' : '#a0a8b4';

    function bar(pct, color) {
        if (pct === null) return '<span style="color:#555;font-size:0.85em;">No data yet</span>';
        const fill = Math.max(0, Math.min(100, pct));
        return `<div style="display:flex;align-items:center;gap:8px;">
            <div style="flex:1;height:8px;background:#2b3a55;border-radius:4px;overflow:hidden;">
                <div style="width:${fill}%;height:100%;background:${color};border-radius:4px;"></div>
            </div>
            <span style="font-size:0.85em;color:white;font-weight:700;min-width:36px;text-align:right;">${pct}%</span>
        </div>`;
    }

    function sparkline(pts) {
        if (!pts.length) return '<span style="color:#555;font-size:0.8em;">No sessions yet</span>';
        const W = 200, H = 40, pad = 4;
        const maxV = Math.max(...pts.map(p => p.percent), 1);
        const xs = pts.map((_, i) => pad + i * ((W - pad*2) / Math.max(pts.length - 1, 1)));
        const ys = pts.map(p => H - pad - (p.percent / 100) * (H - pad*2));
        const poly = xs.map((x, i) => `${x},${ys[i]}`).join(' ');
        const dots = pts.map((p, i) => {
            const c = p.percent >= 70 ? '#72efdd' : p.percent >= 50 ? '#ffc107' : '#ef4444';
            return `<circle cx="${xs[i]}" cy="${ys[i]}" r="3" fill="${c}"/>`;
        }).join('');
        return `<svg width="${W}" height="${H}" style="overflow:visible;display:block;">
            <polyline points="${poly}" fill="none" stroke="#3e506e" stroke-width="1.5" stroke-linejoin="round"/>
            ${dots}
        </svg>`;
    }

    function sessionList() {
        const rev = [...sessions].reverse().slice(0, 5);
        if (!rev.length) return '<p style="color:#555;font-size:0.85em;text-align:center;">No sessions yet.</p>';
        const icon = { mcq:'\uD83D\uDCDD', shortAnswer:'\u270D\uFE0F', essay:'\uD83D\uDCC4', flashcard:'\uD83C\uDCCF' };
        return rev.map(s => {
            const color = s.percent >= 70 ? '#72efdd' : s.percent >= 50 ? '#ffc107' : '#ef4444';
            const lbl   = s.type === 'flashcard'
                ? `${icon[s.type]||'\uD83D\uDCDA'} ${s.label} \u2014 ${s.total} cards`
                : `${icon[s.type]||'\uD83D\uDCDA'} ${s.label} \u2014 ${s.score}/${s.total} (${s.percent}%)`;
            return `<div style="display:flex;justify-content:space-between;align-items:center;
                        padding:9px 12px;border-radius:8px;background:#0d1b2a;
                        border-left:3px solid ${color};margin-bottom:6px;">
                <span style="font-size:0.88em;color:white;">${lbl}</span>
                <span style="font-size:0.75em;color:#555;white-space:nowrap;margin-left:8px;">${_timeAgo(s.ts)}</span>
            </div>`;
        }).join('');
    }

    container.innerHTML = `
    <div style="max-width:520px;margin:0 auto;padding:4px;">

        <div style="text-align:center;margin-bottom:20px;">
            <h2 style="color:white;margin:0 0 4px 0;">\uD83D\uDCCA My Progress</h2>
            <p style="color:#a0a8b4;font-size:0.85em;margin:0;">${currentCourse} ${currentTerm}</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:18px;">
            <div style="background:#1e2a3a;border-radius:10px;padding:14px 10px;text-align:center;border:1px solid #2b3a55;">
                <div style="font-size:1.6em;font-weight:900;color:#72efdd;">${overallPct}%</div>
                <div style="font-size:0.72em;color:#a0a8b4;margin-top:3px;">Overall Accuracy</div>
            </div>
            <div style="background:#1e2a3a;border-radius:10px;padding:14px 10px;text-align:center;border:1px solid #2b3a55;">
                <div style="font-size:1.6em;font-weight:900;color:${streakColor};">${streakCount}\uD83D\uDD25</div>
                <div style="font-size:0.72em;color:#a0a8b4;margin-top:3px;">Day Streak</div>
            </div>
            <div style="background:#1e2a3a;border-radius:10px;padding:14px 10px;text-align:center;border:1px solid #2b3a55;">
                <div style="font-size:1.6em;font-weight:900;color:white;">${sessions.length}</div>
                <div style="font-size:0.72em;color:#a0a8b4;margin-top:3px;">Total Sessions</div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px;">
            <div style="background:#1e2a3a;border-radius:10px;padding:12px;border:1px solid #2b3a55;">
                <div style="font-size:0.72em;color:#a0a8b4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Questions Answered</div>
                <div style="font-size:1.3em;font-weight:700;color:white;">${data.totalQuestions.toLocaleString()}</div>
                <div style="font-size:0.75em;color:#72efdd;">${data.totalCorrect.toLocaleString()} correct</div>
            </div>
            <div style="background:#1e2a3a;border-radius:10px;padding:12px;border:1px solid #2b3a55;">
                <div style="font-size:0.72em;color:#a0a8b4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Activity</div>
                <div style="font-size:0.85em;color:white;">Last 7 days: <strong style="color:#72efdd;">${last7.length}</strong></div>
                <div style="font-size:0.85em;color:white;">Last 30 days: <strong style="color:#72efdd;">${last30.length}</strong></div>
            </div>
        </div>

        <div style="background:#1e2a3a;border-radius:10px;padding:16px;border:1px solid #2b3a55;margin-bottom:18px;">
            <div style="font-size:0.78em;color:#a0a8b4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">Performance by Mode</div>
            <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                    <span style="font-size:0.85em;color:white;">\uD83D\uDCDD MCQ</span>
                    <span style="font-size:0.75em;color:#a0a8b4;">Best: ${data.mcqBest}%</span>
                </div>
                ${bar(mcqAvg, '#72efdd')}
            </div>
            <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                    <span style="font-size:0.85em;color:white;">\u270D\uFE0F Short Answer</span>
                    <span style="font-size:0.75em;color:#a0a8b4;">Best: ${data.saBest}%</span>
                </div>
                ${bar(saAvg, '#ffc107')}
            </div>
            <div style="margin-bottom:2px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                    <span style="font-size:0.85em;color:white;">\uD83D\uDCC4 Essay Sim</span>
                    <span style="font-size:0.75em;color:#a0a8b4;">Best: ${data.essayBest}%</span>
                </div>
                ${bar(esAvg, '#e67e00')}
            </div>
            <div style="margin-top:12px;padding-top:10px;border-top:1px solid #2b3a55;">
                <span style="font-size:0.85em;color:white;">\uD83C\uDCCF Flashcard Sessions</span>
                <span style="float:right;font-size:0.85em;color:#a78bfa;font-weight:700;">${data.flashcardSessions}</span>
            </div>
        </div>

        <div style="background:#1e2a3a;border-radius:10px;padding:16px;border:1px solid #2b3a55;margin-bottom:18px;">
            <div style="font-size:0.78em;color:#a0a8b4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;">Score Trend (last ${recent.filter(s=>s.type!=='flashcard').length} quiz sessions)</div>
            <div style="overflow-x:auto;">${sparkline(recent.filter(s => s.type !== 'flashcard'))}</div>
            <div style="margin-top:8px;display:flex;gap:14px;font-size:0.72em;color:#a0a8b4;">
                <span><span style="color:#72efdd;">●</span> \u226570%</span>
                <span><span style="color:#ffc107;">●</span> 50\u201369%</span>
                <span><span style="color:#ef4444;">●</span> &lt;50%</span>
            </div>
        </div>

        <div style="background:#1e2a3a;border-radius:10px;padding:16px;border:1px solid #2b3a55;margin-bottom:20px;">
            <div style="font-size:0.78em;color:#a0a8b4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;">Recent Sessions</div>
            ${sessionList()}
        </div>

        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-bottom:10px;">
            <button onclick="exitQuiz()" class="back-button" style="margin:0;">\u2B05\uFE0F Back to Course</button>
            <button onclick="_confirmResetProgress()"
                style="background:transparent;color:#ef4444;border:1px solid #ef4444;
                       padding:10px 16px;border-radius:8px;cursor:pointer;font-size:0.85em;">
                \uD83D\uDDD1\uFE0F Reset Progress
            </button>
        </div>
    </div>`;
}

// ============================================================
// === 5b. UI & NAVIGATION ===
// === v1.1 PATCH: + overlay manager, shell actions, focus utilities ===
// ============================================================

// --- Overlay manager (stack-based) ---
// Later rounds refactor existing modals (payment, print preview, doc viewer)
// to push/pop through these; for now they're a utility available to callers.
const overlayStack = [];

function openOverlay(el, trigger) {
    if (!el) return;
    overlayStack.push({
        el: el,
        trigger: trigger || document.activeElement,
        prevFocus: document.activeElement
    });
    el.classList.add('show');
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    syncBodyScroll();
    const autofocus = el.querySelector('[data-autofocus]') || el;
    setTimeout(function () { focusAndReveal(autofocus); }, 50);
}

function closeOverlay(el) {
    if (!el) return;
    const i = overlayStack.findIndex(function (o) { return o.el === el; });
    if (i === -1) {
        el.classList.remove('show');
        syncBodyScroll();
        return;
    }
    const entry = overlayStack.splice(i, 1)[0];
    el.classList.remove('show');
    syncBodyScroll();
    if (entry.prevFocus && document.contains(entry.prevFocus)) {
        focusAndReveal(entry.prevFocus, { behavior: 'auto' });
    }
}

function syncBodyScroll() {
    document.body.style.overflow = overlayStack.length > 0 ? 'hidden' : '';
}

// --- Focus utilities (reduced-motion aware) ---
function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

function focusAndReveal(el, opts) {
    if (!el) return;
    opts = opts || {};
    try { el.focus({ preventScroll: true }); } catch (e) { try { el.focus(); } catch (e2) {} }
    try {
        el.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
            behavior: opts.behavior || (prefersReducedMotion() ? 'auto' : 'smooth')
        });
    } catch (e) {}
}

function mountScreen(el) {
    // Accessibility only: screen readers land on the new screen. Scrolling is handled by _focusScreen().
    if (!el) return;
    el.setAttribute('tabindex', '-1');
    try { el.focus({ preventScroll: true }); } catch (e) {}
}

// --- Shell action bar ---
// Renders the mode's footer buttons + an automatic "Back to Courses" chip
// whenever a course is loaded. All existing modes keep their current buttons;
// this is a new helper that later rounds route them through.
function setShellActions(buttons) {
    const bar = document.querySelector('.shell-actions');
    if (!bar) return;
    bar.innerHTML = '';

    if (currentCourse && currentTerm) {
        const backChip = document.createElement('button');
        backChip.className = 'back-button';
        backChip.innerHTML = '📚 Back to Courses';
        backChip.onclick = function () { backToMenu(); };
        backChip.style.background = '#2b3a55';
        backChip.style.color = '#72efdd';
        backChip.style.border = '1px solid #3e506e';
        backChip.style.fontWeight = '600';
        backChip.style.flexShrink = '0';
        bar.appendChild(backChip);
    }

    (buttons || []).forEach(function (btn) {
        if (!btn) return;
        btn.style.marginTop = '0';
        bar.appendChild(btn);
    });
}

// --- Existing UI state handlers (unchanged) ---

function enableFullAccessUI() {
    hasFullAccess = true;
    updateModeBanner("✅ FULL ACCESS"); // Will be updated with expiry by checkSessionStatus
    const banner = document.getElementById('mode-banner');
    if(banner) {
        banner.className = 'full-access-banner';
        banner.classList.remove('demo-mode-banner');
    }
    const unlockBtn = document.getElementById('unlock-btn');
    if(unlockBtn) unlockBtn.style.display = 'none';
    const priceChip = document.getElementById('price-banner');
    if(priceChip) priceChip.style.display = 'none';
    clearDemoLocks();
}

function enableDemoUI() {
    hasFullAccess = false;
    updateModeBanner("🔒 Demo Mode");
    const banner = document.getElementById('mode-banner');
    if(banner) {
        banner.className = 'demo-mode-banner';
        banner.classList.remove('full-access-banner');
    }
    const unlockBtn = document.getElementById('unlock-btn');
    if(unlockBtn) unlockBtn.style.display = 'block';
    const priceChip = document.getElementById('price-banner');
    if(priceChip) priceChip.style.display = 'block';
}

function loadCourse(course, term) {
    document.body.setAttribute('data-course', course);
    document.body.setAttribute('data-term', term);

    // Prices and durations are never passed in; they always come from the live config.
    const termLabel = String(term).replace(/^T/i, '');
    const titleEl = document.getElementById('course-title');
    if (titleEl) titleEl.textContent = course + ' Term ' + termLabel + ' Study Materials';

    renderCourseBanner(course, term);
    const banner = document.getElementById('price-banner');
    if (banner) banner.style.display = 'block';
    try { updatePlanCards(course); } catch (e) {}
    // Deep links / slow networks: config may not be here yet. Fetch (or refresh a stale copy) and re-render.
    loadSystemConfig().catch(function () { refreshPriceUI(); });
    navigate({ course: course, term: term });   // Back button returns to the previous screen

    const landing = document.getElementById('landing-view');
    if (landing) landing.style.display = 'none';
    const landH = document.getElementById('landing-header');
    if (landH) landH.style.display = 'none';
    const courseView = document.getElementById('course-view');
    if (courseView) courseView.style.display = 'block';
    const fixedH = document.getElementById('fixed-header');
    if (fixedH) fixedH.style.display = 'block';
    document.body.classList.add('view-course');
    window.scrollTo(0, 0);

    setTimeout(function () {
        const qf = document.getElementById('quiz-form');
        const rs = document.getElementById('result');
        if (qf) qf.innerHTML = '';
        if (rs) rs.innerHTML = '';
        updateProgress(0, 0);
        initializeCourseLogic();
    }, KAERI_CONFIG.courseLoadDelayMs);
}

function backToMenu() {
    document.getElementById('landing-view').style.display = 'block';
    document.getElementById('landing-header').style.display = 'block'; 
    document.getElementById('course-view').style.display = 'none';
    document.getElementById('fixed-header').style.display = 'none';
    document.getElementById('price-banner').style.display = 'none';
    document.body.classList.remove('view-course');
    document.body.classList.remove('quiz-running');
    document.body.classList.remove('in-mode');
    document.body.classList.remove('final-screen');
    showCourses(true);

    document.getElementById('quiz-form').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.body.removeAttribute('data-course');
    document.body.removeAttribute('data-term');
    stopReading(); 
    closeDocViewer();
    window.scrollTo(0,0);
    
    // Stop revalidation when leaving course
    if (revalidationInterval) {
        clearInterval(revalidationInterval);
        revalidationInterval = null;
    }
}

function toggleTerms(courseId) {
    const termButtons = document.getElementById(courseId + '-terms');
    const courseButton = termButtons.previousElementSibling;
    if (termButtons.style.display === 'flex') {
        termButtons.style.display = 'none';
        courseButton.classList.remove('active');
    } else {
        document.querySelectorAll('.term-buttons').forEach(section => {
            if (section.id !== courseId + '-terms') {
                section.style.display = 'none';
                section.previousElementSibling.classList.remove('active');
            }
        });
        termButtons.style.display = 'flex';
        courseButton.classList.add('active');
    }
}

// ============================================================
// === REPLACED: openPaymentModal (with auto-load) ===
// ============================================================
function openPaymentModal(intent) {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.classList.add('show');

    // A plan card passes { course, term }; every other caller passes nothing.
    purchaseIntent = (intent && typeof intent.course === 'string' && typeof intent.term === 'string')
        ? { course: _up(intent.course), term: _up(intent.term) }
        : null;

    const v = getViewedScope();
    const c = purchaseIntent ? purchaseIntent.course : (v.course || _up(currentCourse));
    const t = purchaseIntent ? purchaseIntent.term   : (v.term   || _up(currentTerm));
    const termName = document.getElementById('pay-term-name');
    if (termName) termName.textContent = (c && t) ? payScopeLabel(c, t) : 'Choose what to unlock';
    _showPayHeader(c, t);

    // ─── LIPILA: reset all views and initialize state ───
    window._lipilaCtx = {
        course: c,
        term: t,
        saleId: null, email: null, timer: null, countdown: null,
        amount: null,
        lipilaEnabled: false,
        pollIntervalMs: 5000,
        abandonTimeoutMinutes: 15
    };
    ['payMethodSelector','lipilaFormView','lipilaPinWaiting','lipilaSuccess','lipilaFailed','lipilaHeld','lipilaExpired'].forEach(function(id){
        var el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    var payViewEl = document.getElementById('pay-view');
    var statusViewEl = document.getElementById('status-view');
    var tabsEl = document.querySelector('.tabs');
    if (payViewEl) payViewEl.classList.add('hidden');
    if (statusViewEl) statusViewEl.classList.add('hidden');
    if (tabsEl) tabsEl.style.display = 'none';

    // Ask backend whether Lipila is available; decide which view to show
    callPaymentApi('getPaymentOptions', {}).then(function(res){
        window._lipilaCtx.lipilaEnabled = !!(res && res.lipilaEnabled);
        window._lipilaCtx.pollIntervalMs = (res && res.pollIntervalMs) || 5000;
        window._lipilaCtx.abandonTimeoutMinutes = (res && res.abandonTimeoutMinutes) || 15;

        // Try to resume an in-flight Lipila payment for the same course/term
        var pendingId = sessionStorage.getItem('lipila_pending_saleId');
        var pendingEmail = sessionStorage.getItem('lipila_pending_email');
        var pendingCourse = sessionStorage.getItem('lipila_pending_course');
        var pendingTerm = sessionStorage.getItem('lipila_pending_term');

        // A payment already in flight always wins over the current selection (prevents double charges).
        if (pendingId && pendingEmail) {
            window._lipilaCtx.saleId = pendingId;
            window._lipilaCtx.email = pendingEmail;
            if (pendingCourse) window._lipilaCtx.course = pendingCourse;
            if (pendingTerm) window._lipilaCtx.term = pendingTerm;
            document.getElementById('lipilaPinWaiting').classList.remove('hidden');
            document.getElementById('lipilaPhoneMasked').textContent =
                '••• ••• ' + (sessionStorage.getItem('lipila_pending_phone') || '').slice(-4);
            document.getElementById('lipilaAmountConfirm').textContent =
                'K' + (sessionStorage.getItem('lipila_pending_amount') || '0.00');
            startLipilaPolling(parseInt(sessionStorage.getItem('lipila_pending_started') || '0', 10) || 0);
            return;
        }

        // Normal flow
        if (window._lipilaCtx.lipilaEnabled) {
            document.getElementById('payMethodSelector').classList.remove('hidden');
        } else {
            if (tabsEl) tabsEl.style.display = '';
            if (payViewEl) payViewEl.classList.remove('hidden');
            var form = document.getElementById('paymentForm');
            if (form) form.classList.remove('hidden');
        }
    }).catch(function(){
        // If getPaymentOptions fails, fall back to manual only
        if (tabsEl) tabsEl.style.display = '';
        if (payViewEl) payViewEl.classList.remove('hidden');
        var form = document.getElementById('paymentForm');
        if (form) form.classList.remove('hidden');
    });

    // Loads (or reuses) live prices, fills the dropdowns and applies purchaseIntent.
    loadCourses();

    // Focus the code input after a short delay
    setTimeout(() => {
        const input = document.getElementById('access-code-input');
        if(input) input.focus();
    }, 400);
}


// ============================================================
// === REPLACED: closePaymentModal with idempotency reset ===
// ============================================================
function closePaymentModal() {
    // Stop any in-flight Lipila polling
    stopLipilaTimers();

    const modal = document.getElementById('payment-modal');
    if (modal) modal.classList.remove('show');

    // Reset the subscription guide (idempotency)
    const guide = document.getElementById('subscription-guide');
    if (guide) guide.removeAttribute('open');
}

function updateModeBanner(message) {
    const banner = document.getElementById("mode-banner");
    if (banner) banner.textContent = message;
}

function showAppNotification(message, type = 'info', duration = 5000) {
    const el = document.getElementById('app-notification');
    if (!el) return alert(message);
    
    const msgSpan = el.querySelector('.notification-message');
    if (msgSpan) msgSpan.textContent = message;
    else el.innerText = message;

    el.className = ''; 
    void el.offsetWidth; 
    el.className = 'show ' + type;

    if (el.timeoutId) clearTimeout(el.timeoutId);
    el.timeoutId = setTimeout(() => {
        el.classList.remove('show');
    }, duration);

    const closeBtn = el.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            el.classList.remove('show');
            clearTimeout(el.timeoutId);
        };
    }
}

function updateProgress(current, total) {
    const fill = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");
    const percent = total === 0 ? 0 : (current / total) * 100;
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.textContent = `Progress: ${current} of ${total}`;
    const wrap = document.getElementById("progress-wrap");
    if (wrap) wrap.classList.toggle('on', total > 0);
    _syncQuizStrip(current, total, percent);
}

function clearDemoLocks() {
    ["mcq", "shortAnswer", "essay", "flashcard", "documents"].forEach(
        m => localStorage.removeItem(`demo_${m}_used_${currentTermKey}`)
    );
}

// ============================================================
// === NEW: PAYMENT API FUNCTIONS (SERVER 3) ===
// ============================================================

function callPaymentApi(action, payload = {}, retries = 2) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), KAERI_CONFIG.paymentTimeoutMs);

    return fetch(PAYMENT_API_URL, {
        method: 'POST',
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action, ...payload }),
        signal: controller.signal
    })
    .then(res => {
        clearTimeout(timeout);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    })
    .catch(err => {
        clearTimeout(timeout);
        if (retries > 0) {
            return new Promise(resolve => setTimeout(resolve, KAERI_CONFIG.paymentRetryGapMs))
                .then(() => callPaymentApi(action, payload, retries - 1));
        }
        throw err;
    });
}

function showAlert(icon, title, text) {
    return Swal.fire({
        icon, title, text,
        background: '#1b263b',
        color: '#e0e6ed',
        confirmButtonColor: '#007bff',
        confirmButtonText: 'OK',
        backdrop: 'rgba(13,27,42,0.85)'
    });
}

/** Amount + duration shown in the modal header. Live values only. */
function _showPayHeader(course, term) {
    const price = (course && term) ? getPriceFor(course, term) : null;
    const days  = (course && term) ? getDurationFor(course, term) : null;
    const amountEl = document.getElementById('pay-amount');
    if (amountEl) amountEl.textContent = price === null ? '—' : 'K' + price.toFixed(2);
    const durEl = document.getElementById('pay-duration');
    if (durEl) durEl.textContent = (price !== null && days) ? formatDays(days) + ' of access' : '';
}

function _hasOption(select, value) {
    return !!select && Array.prototype.some.call(select.options, function (o) { return o.value === value; });
}

/** Select a course + term in the form, synchronously (no timers, no races). */
function selectPurchase(course, term) {
    const cs = document.getElementById('courseSelect');
    const ts = document.getElementById('termSelect');
    if (!cs || !ts) return false;
    const c = _up(course), t = _up(term);
    if (!c || !_hasOption(cs, c)) { updatePrice(); return false; }
    cs.value = c;
    updateTerms();                              // rebuilds term options synchronously
    if (t && _hasOption(ts, t)) ts.value = t;
    updatePrice();
    return true;
}

/** Rebuilds the form from the live config and restores what the student wants selected. */
function renderPaymentForm() {
    const form = document.getElementById('paymentForm');
    if (form) form.classList.remove('hidden');
    const cs = document.getElementById('courseSelect');
    const ts = document.getElementById('termSelect');

    // Priority: card the student just tapped → what they already picked → the course they are studying.
    let want = null;
    if (purchaseIntent) {
        want = purchaseIntent;
        purchaseIntent = null;
    } else if (cs && cs.value) {
        want = { course: cs.value, term: ts ? ts.value : '' };
    } else {
        const v = getViewedScope();
        const c = v.course || _up(currentCourse);
        const t = v.term || _up(currentTerm);
        if (c) want = { course: c, term: t };
    }

    populateCourseDropdown();
    if (want) selectPurchase(want.course, want.term);
    updatePlanCards();
}

function loadCourses() {
    const loader = document.getElementById('init-loader');
    const form = document.getElementById('paymentForm');
    if (!loader || !form) return Promise.resolve();

    const hadCache = SYSTEM_CONFIG.loaded;
    if (hadCache) {
        // Instant: render from the cached config, refresh quietly behind it.
        loader.classList.add('hidden');
        renderPaymentForm();
    } else {
        loader.classList.remove('hidden');
        form.classList.add('hidden');
    }

    return loadSystemConfig()
        .then(function () {
            loader.classList.add('hidden');
            renderPaymentForm();
        })
        .catch(function (err) {
            loader.classList.add('hidden');
            if (!hadCache) {
                showAlert('error', 'Connection Error', (err && err.message && err.message !== 'Failed to fetch')
                    ? err.message : 'Could not reach the server. Check your connection and try again.');
            }
        });
}

function _courseOrder(keys) {
    // Real courses alphabetically, the Global entry (ALL) last.
    return keys.slice().sort(function (a, b) {
        if (a === 'ALL') return 1;
        if (b === 'ALL') return -1;
        return a < b ? -1 : (a > b ? 1 : 0);
    });
}

function populateCourseDropdown() {
    const courseSelect = document.getElementById('courseSelect');
    if (!courseSelect) return;
    courseSelect.innerHTML = '<option value="" disabled selected>Select Course...</option>';
    _courseOrder(Object.keys(inventory || {})).forEach(code => {
        const opt = document.createElement('option');
        opt.value = code;
        opt.textContent = code === 'ALL' ? 'Global Access (all courses)' : code;
        courseSelect.appendChild(opt);
    });
    const termSelect = document.getElementById('termSelect');
    if (termSelect) {
        termSelect.innerHTML = '<option value="" disabled selected>Select Course First</option>';
        termSelect.disabled = true;
    }
    updatePrice();
}

function updateTerms() {
    const course = document.getElementById('courseSelect')?.value;
    const terms = (inventory && inventory[course]) || {};
    const termSelect = document.getElementById('termSelect');
    if (!termSelect) return;
    termSelect.innerHTML = '<option value="" disabled selected>Select Term...</option>';
    termSelect.disabled = true;
    const termKeys = _courseOrder(Object.keys(terms));
    if (termKeys.length === 0) {
        termSelect.innerHTML = '<option value="" disabled selected>No terms</option>';
        updatePrice();
        return;
    }
    termKeys.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = (t === 'ALL') ? (course === 'ALL' ? 'All courses & terms' : 'All terms (Full Course)') : t;
        termSelect.appendChild(opt);
    });
    termSelect.disabled = false;
    if (termKeys.length === 1) termSelect.value = termKeys[0];   // e.g. Global Access has only one choice
    updatePrice();
}

/** One function renders every price/duration line in the modal. Live values only. */
function updatePrice() {
    const course = document.getElementById('courseSelect')?.value;
    const term = document.getElementById('termSelect')?.value;
    const display = document.getElementById('priceDisplay');
    const durDisplay = document.getElementById('durationDisplay');

    const ready = !!(course && term);
    const price = ready ? getPriceFor(course, term) : null;
    const days  = ready ? getDurationFor(course, term) : null;

    if (display) display.textContent = price !== null ? 'K' + price.toFixed(2) : 'K0.00';
    if (durDisplay) durDisplay.textContent = (price !== null && days) ? formatDays(days) + ' (starts on first use)' : '—';
    const devices = ready ? getMaxDevicesFor(course, term) : null;
    const devRow = document.getElementById('devicesRow');
    const devEl = document.getElementById('devicesDisplay');
    if (devRow) devRow.style.display = (price !== null && devices) ? 'flex' : 'none';
    if (devEl) devEl.textContent = devices ? devices + (devices === 1 ? ' device' : ' devices') : '—';

    if (ready) {
        const termName = document.getElementById('pay-term-name');
        if (termName) termName.textContent = payScopeLabel(course, term);
        _showPayHeader(course, term);
    } else {
        _showPayHeader('', '');
    }
    updatePlanCards();
    lipilaSyncFromForm();
}


// ═══════════════════════════════════════════════════════════
// ═══ LIPILA FRONTEND FUNCTIONS ═══
// ═══════════════════════════════════════════════════════════

/** Local shims — safe even if toast / isValidZambianMobile don't exist elsewhere */
function _lipilaToast(msg, type) {
    return showAppNotification(String(msg || ''), type || 'info');
}
function _lipilaValidPhone(p) {
    return /^(\+260|0)(9[5-7]|7[5-7])\d{7}$/.test(String(p || '').replace(/[\s-]/g, ''));
}

function selectPaymentMethod(method) {
    var payViewEl = document.getElementById('pay-view');
    var tabsEl = document.querySelector('.tabs');
    var form = document.getElementById('paymentForm');

    document.getElementById('payMethodSelector').classList.add('hidden');

    if (method === 'lipila') {
        if (payViewEl) payViewEl.classList.add('hidden');
        if (tabsEl) tabsEl.style.display = 'none';
        document.getElementById('lipilaFormView').classList.remove('hidden');

        // Prefill what we know (never overwrite what the student already typed)
        var em = document.getElementById('lipilaEmail');
        var knownEmail = localStorage.getItem('student_email') || sessionStorage.getItem('student_email') || '';
        var manualEmail = form && form.querySelector('input[name="email"]');
        if (em && !em.value) em.value = knownEmail || (manualEmail && manualEmail.value) || '';
        var nm = document.getElementById('lipilaFullName');
        var manualName = form && form.querySelector('input[name="fullName"]');
        if (nm && !nm.value && manualName && manualName.value) nm.value = manualName.value;

        lipilaSyncFromForm();
        lipilaFetchPrice();
    } else {
        // Manual path — restore tabs and show the manual form (selection is shared, so it is already in place)
        document.getElementById('lipilaFormView').classList.add('hidden');
        if (tabsEl) tabsEl.style.display = '';
        if (payViewEl) payViewEl.classList.remove('hidden');
        if (form) form.classList.remove('hidden');
        // Carry details typed in the Lipila form over to the screenshot form
        var le = document.getElementById('lipilaEmail'), ln = document.getElementById('lipilaFullName');
        if (form && le && le.value) { var me = form.querySelector('input[name="email"]'); if (me && !me.value) me.value = le.value; }
        if (form && ln && ln.value) { var mn = form.querySelector('input[name="fullName"]'); if (mn && !mn.value) mn.value = ln.value; }
    }
}

function backToMethodSelector() {
    document.getElementById('lipilaFormView').classList.add('hidden');
    document.getElementById('payMethodSelector').classList.remove('hidden');
}

/* ── Course / Term for BOTH payment methods ──────────────────────────────
   The screenshot form's #courseSelect / #termSelect are the single source of
   truth. The Lipila selects are a live mirror of them: changing either pair
   updates the other, the header, the plan cards and the price boxes.        */

function _lipilaPriceNote(msg) {
    var n = document.getElementById('lipilaPriceNote');
    if (!n) return;
    n.textContent = msg || '';
    n.style.display = msg ? 'block' : 'none';
}

function _lipilaPayBtnRender() {
    var btn = document.getElementById('lipilaPayBtn');
    if (!btn) return;
    var ctx = window._lipilaCtx || {};
    var ready = !!(ctx.course && ctx.term);
    if (!ready) { btn.disabled = true; btn.textContent = 'Select course & term'; return; }
    if (typeof ctx.amount === 'number') { btn.disabled = false; btn.textContent = 'Pay K' + ctx.amount.toFixed(2); return; }
    btn.disabled = true;
    btn.textContent = ctx.priceError ? 'Price unavailable' : 'Checking price…';
}

function lipilaSyncFromForm() {
    var cs = document.getElementById('courseSelect'), ts = document.getElementById('termSelect');
    var lcs = document.getElementById('lipilaCourseSelect'), lts = document.getElementById('lipilaTermSelect');
    if (!cs || !ts || !lcs || !lts || !window._lipilaCtx) return;
    var ctx = window._lipilaCtx;

    if (lcs.innerHTML !== cs.innerHTML) lcs.innerHTML = cs.innerHTML;
    lcs.value = cs.value || '';
    if (lts.innerHTML !== ts.innerHTML) lts.innerHTML = ts.innerHTML;
    lts.disabled = ts.disabled;
    lts.value = ts.value || '';

    var course = cs.value || '', term = ts.value || '';
    var changed = (ctx.course !== course || ctx.term !== term);
    ctx.course = course; ctx.term = term;
    if (changed) { ctx.amount = null; ctx.priceError = false; }

    var ready = !!(course && term);
    var price = ready ? getPriceFor(course, term) : null;
    var days = ready ? getDurationFor(course, term) : null;
    var devices = ready ? getMaxDevicesFor(course, term) : null;
    var amtEl = document.getElementById('lipilaAmount');
    if (amtEl) amtEl.textContent = price !== null ? 'K' + price.toFixed(2) : 'K—';
    var durEl = document.getElementById('lipilaDuration');
    if (durEl) durEl.textContent = (price !== null && days) ? formatDays(days) + ' (starts on first use)' : '—';
    var devRow = document.getElementById('lipilaDevicesRow'), devEl = document.getElementById('lipilaDevices');
    if (devRow) devRow.style.display = (price !== null && devices) ? 'flex' : 'none';
    if (devEl) devEl.textContent = devices ? devices + (devices === 1 ? ' device' : ' devices') : '—';
    if (ready && price === null && SYSTEM_CONFIG.loaded) _lipilaPriceNote('This plan is not available right now. Choose another option.');
    else if (!ctx.priceError) _lipilaPriceNote('');

    _lipilaPayBtnRender();

    // Re-confirm the authoritative price whenever the choice changes while the Lipila form is on screen.
    var view = document.getElementById('lipilaFormView');
    if (changed && ready && ctx.lipilaEnabled && view && !view.classList.contains('hidden')) lipilaFetchPrice();
}

function lipilaCourseChanged() {
    var v = document.getElementById('lipilaCourseSelect').value;
    var cs = document.getElementById('courseSelect');
    if (!cs || !v) return;
    cs.value = v;
    updateTerms();            // rebuilds terms, calls updatePrice → mirrors back here
}

function lipilaTermChanged() {
    var v = document.getElementById('lipilaTermSelect').value;
    var ts = document.getElementById('termSelect');
    if (!ts || !v) return;
    ts.value = v;
    updatePrice();
}

var _lipilaPriceTimer = null, _lipilaPriceSeq = 0;
function lipilaFetchPrice() {
    var ctx = window._lipilaCtx;
    if (!ctx) return;
    clearTimeout(_lipilaPriceTimer);
    if (!ctx.course || !ctx.term) { _lipilaPayBtnRender(); return; }
    var seq = ++_lipilaPriceSeq, course = ctx.course, term = ctx.term;
    ctx.amount = null; ctx.priceError = false;
    _lipilaPayBtnRender();
    _lipilaPriceTimer = setTimeout(function () {
        callPaymentApi('getLipilaPrice', { course: course, term: term }, 2)
            .then(function (res) {
                if (seq !== _lipilaPriceSeq) return;            // a newer choice superseded this answer
                if (res && res.success && typeof res.amount === 'number') {
                    ctx.amount = res.amount; ctx.priceError = false;
                    var amtEl = document.getElementById('lipilaAmount');
                    if (amtEl) amtEl.textContent = 'K' + res.amount.toFixed(2);
                    _lipilaPriceNote('');
                } else {
                    ctx.priceError = true;
                    _lipilaPriceNote((res && res.message) || 'Instant payment is not available for this plan. Choose another, or pay by screenshot.');
                }
                _lipilaPayBtnRender();
            })
            .catch(function () {
                if (seq !== _lipilaPriceSeq) return;
                ctx.priceError = true;
                _lipilaPriceNote('Could not confirm the price. Check your connection and re-select the term to retry.');
                _lipilaPayBtnRender();
            });
    }, 200);
}

function _lipilaAskPriceChange(oldAmt, newAmt, msg) {
    var text = msg || ('The price is now K' + newAmt.toFixed(2) + (typeof oldAmt === 'number' ? ' (was K' + oldAmt.toFixed(2) + ')' : '') + '. Continue?');
    if (typeof Swal === 'undefined') return Promise.resolve(window.confirm(text));
    return Swal.fire({
        icon: 'question', title: 'Price updated', text: text,
        showCancelButton: true, confirmButtonText: 'Pay K' + newAmt.toFixed(2), cancelButtonText: 'Cancel',
        background: '#1b263b', color: '#e0e6ed', confirmButtonColor: '#007bff',
        backdrop: 'rgba(13,27,42,0.85)'
    }).then(function (r) { return !!r.isConfirmed; });
}

function initiateLipila(confirmedAmount) {
    var ctx = window._lipilaCtx;
    var name = (document.getElementById('lipilaFullName').value || '').trim();
    var email = (document.getElementById('lipilaEmail').value || '').trim().toLowerCase();
    var phone = (document.getElementById('lipilaPhone').value || '').trim();
    if (!ctx.course) return _lipilaToast('Select a course', 'warning');
    if (!ctx.term) return _lipilaToast('Select a term', 'warning');
    if (!name) return _lipilaToast('Enter your full name', 'warning');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return _lipilaToast('Enter a valid email', 'warning');
    if (!_lipilaValidPhone(phone)) return _lipilaToast('Enter a valid Zambian mobile number', 'warning');
    if (typeof ctx.amount !== 'number') return _lipilaToast('Still confirming the price — try again in a moment', 'info');

    var course = ctx.course, term = ctx.term, sentAmount = ctx.amount;
    var btn = document.getElementById('lipilaPayBtn');
    if (btn.dataset.busy === '1') return;
    btn.dataset.busy = '1';
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>Starting…';
    var release = function () { btn.dataset.busy = '0'; _lipilaPayBtnRender(); };

    callPaymentApi('initiateLipilaPayment', {
        fullName: name, email: email, course: course, term: term,
        phone: phone, expectedAmount: sentAmount
    }, 3).then(function(res){
        if (res && res.success) {
            btn.dataset.busy = '0';
            ctx.saleId = res.saleId;
            ctx.email = email;
            var started = Date.now();
            try {
                sessionStorage.setItem('lipila_pending_saleId', res.saleId);
                sessionStorage.setItem('lipila_pending_email', email);
                sessionStorage.setItem('lipila_pending_course', course);
                sessionStorage.setItem('lipila_pending_term', term);
                sessionStorage.setItem('lipila_pending_phone', phone);
                sessionStorage.setItem('lipila_pending_amount', Number(res.amount).toFixed(2));
                sessionStorage.setItem('lipila_pending_started', String(started));
                sessionStorage.setItem('student_email', email);
                localStorage.setItem('student_email', email);
            } catch (e) {}
            if (res.pollIntervalMs) ctx.pollIntervalMs = res.pollIntervalMs;
            if (res.abandonTimeoutMinutes) ctx.abandonTimeoutMinutes = res.abandonTimeoutMinutes;

            document.getElementById('lipilaFormView').classList.add('hidden');
            document.getElementById('lipilaPinWaiting').classList.remove('hidden');
            document.getElementById('lipilaPhoneMasked').textContent =
                res.phoneMasked || ('••• ••• ' + phone.slice(-4));
            document.getElementById('lipilaAmountConfirm').textContent = 'K' + Number(res.amount).toFixed(2);
            if (res.reused) _lipilaToast('You already had a payment request open for this plan — resuming it.', 'info');
            startLipilaPolling(started);
            return;
        }
        if (res && res.code === 'PRICE_CHANGED' && typeof res.newAmount === 'number') {
            release();
            _lipilaAskPriceChange(sentAmount, res.newAmount, res.message).then(function (ok) {
                if (ok) { ctx.amount = res.newAmount; var a = document.getElementById('lipilaAmount'); if (a) a.textContent = 'K' + res.newAmount.toFixed(2); _lipilaPayBtnRender(); initiateLipila(); }
                else { lipilaFetchPrice(); }
            });
            return;
        }
        if (res && (res.code === 'LIPILA_UNAVAILABLE' || res.code === 'LIPILA_DOWN' || res.fallbackToManual)) {
            release();
            _lipilaToast(res.message || 'Instant payment is unavailable right now — switching to the screenshot option', 'warning');
            setTimeout(function(){ selectPaymentMethod('manual'); }, 1200);
            return;
        }
        release();
        _lipilaToast((res && res.message) || 'Could not start payment', 'error');
    }).catch(function(){
        release();
        _lipilaToast('Connection error. Please try again.', 'error');
    });
}

function startLipilaPolling(startedAt) {
    var ctx = window._lipilaCtx;
    stopLipilaTimers();                 // bumps ctx._gen so any older poll chain dies

    // Countdown from a wall-clock deadline (accurate even when the tab was throttled in the background)
    var total = (ctx.abandonTimeoutMinutes || 15) * 60;
    var started = startedAt || Date.now();
    var left = function () { return Math.max(0, total - Math.floor((Date.now() - started) / 1000)); };
    updateLipilaCountdown(left());
    ctx.countdown = setInterval(function(){ updateLipilaCountdown(left()); }, 1000);

    var transient = 0, inFlight = false, saleId = ctx.saleId, gen = ctx._gen;
    var ind = function (on) {
        var el = document.getElementById('lipilaTransientIndicator');
        if (el) el.classList.toggle('hidden', !on);
    };
    function schedule() {
        if (ctx.saleId !== saleId || ctx._gen !== gen) return;
        // Back off after repeated hiccups; stay slow while the tab is hidden.
        var base = ctx.pollIntervalMs || 5000;
        var delay = transient >= 3 ? Math.max(base * 3, 15000) : (document.hidden ? Math.max(base * 3, 15000) : base);
        ctx.timer = setTimeout(poll, delay);
    }
    function poll() {
        if (ctx.saleId !== saleId || ctx._gen !== gen || inFlight) return;
        inFlight = true;
        callPaymentApi('checkLipilaPayment', { saleId: saleId, email: ctx.email }, 1)
            .then(function(res){
                inFlight = false;
                if (ctx.saleId !== saleId) return;
                if (!res || res.transient) { transient++; ind(true); return schedule(); }
                transient = 0; ind(false);
                if (res.status === 'completed') return showLipilaSuccess(res);
                if (res.status === 'failed') return showLipilaFailed(res);
                if (res.status === 'held') return showLipilaHeld(res);
                if (res.status === 'expired') return showLipilaExpired(res);
                schedule();                                   // 'pending' → keep polling
            })
            .catch(function(){
                inFlight = false;
                if (ctx.saleId !== saleId) return;
                transient++; ind(true); schedule();
            });
    }
    ctx._poll = poll;
    poll();
}

// Check straight away when the student returns to the tab after approving on their phone.
document.addEventListener('visibilitychange', function () {
    var ctx = window._lipilaCtx;
    if (!document.hidden && ctx && ctx.saleId && ctx.timer && typeof ctx._poll === 'function') {
        clearTimeout(ctx.timer);
        ctx._poll();
    }
});

function updateLipilaCountdown(seconds) {
    var el = document.getElementById('lipilaCountdown');
    if (!el) return;
    if (seconds <= 0) { el.textContent = 'Finalising — this can take a moment…'; return; }
    var m = Math.floor(seconds / 60), s = seconds % 60;
    el.textContent = 'Expires in ' + m + ':' + (s < 10 ? '0' : '') + s;
}

function stopLipilaTimers() {
    if (window._lipilaCtx) {
        window._lipilaCtx._gen = (window._lipilaCtx._gen || 0) + 1;
        if (window._lipilaCtx.timer) { clearTimeout(window._lipilaCtx.timer); window._lipilaCtx.timer = null; }
        if (window._lipilaCtx.countdown) { clearInterval(window._lipilaCtx.countdown); window._lipilaCtx.countdown = null; }
    }
}

function clearLipilaSession() {
    sessionStorage.removeItem('lipila_pending_saleId');
    sessionStorage.removeItem('lipila_pending_email');
    sessionStorage.removeItem('lipila_pending_course');
    sessionStorage.removeItem('lipila_pending_term');
    sessionStorage.removeItem('lipila_pending_phone');
    sessionStorage.removeItem('lipila_pending_amount');
    sessionStorage.removeItem('lipila_pending_started');
}

function showLipilaSuccess(res) {
    stopLipilaTimers();
    clearLipilaSession();
    document.getElementById('lipilaPinWaiting').classList.add('hidden');
    document.getElementById('lipilaSuccess').classList.remove('hidden');
    document.getElementById('lipilaSuccessCode').textContent = res.code || '—';
    document.getElementById('lipilaSuccessScope').textContent =
        (typeof res.amount === 'number' ? 'K' + res.amount.toFixed(2) + ' · ' : '') +
        (res.course ? payScopeLabel(_up(res.course), _up(res.term)) : '');
    document.getElementById('lipilaSuccessEmail').textContent = window._lipilaCtx.email || '';
}

function showLipilaFailed(res) {
    stopLipilaTimers();
    clearLipilaSession();
    document.getElementById('lipilaPinWaiting').classList.add('hidden');
    document.getElementById('lipilaFailed').classList.remove('hidden');
    document.getElementById('lipilaFailedReason').textContent =
        res.message || 'No money was taken. Please try again or use the screenshot option.';
}

function showLipilaHeld(res) {
    stopLipilaTimers();
    clearLipilaSession();
    document.getElementById('lipilaPinWaiting').classList.add('hidden');
    document.getElementById('lipilaHeld').classList.remove('hidden');
}

function showLipilaExpired(res) {
    stopLipilaTimers();
    clearLipilaSession();
    document.getElementById('lipilaPinWaiting').classList.add('hidden');
    document.getElementById('lipilaExpired').classList.remove('hidden');
}

function copyLipilaCode(btn) {
    var code = document.getElementById('lipilaSuccessCode').textContent;
    if (!code || code === '—') return;
    navigator.clipboard.writeText(code).then(function(){
        btn.textContent = '✓ Copied';
        setTimeout(function(){ btn.textContent = 'Copy'; }, 2000);
    }).catch(function(){
        var ta = document.createElement('textarea');
        ta.value = code; document.body.appendChild(ta); ta.select();
        try {
            document.execCommand('copy');
            btn.textContent = '✓ Copied';
            setTimeout(function(){ btn.textContent = 'Copy'; }, 2000);
        } catch(e) {}
        document.body.removeChild(ta);
    });
}

function useLipilaCodeNow() {
    var code = document.getElementById('lipilaSuccessCode').textContent;
    closePaymentModal();
    setTimeout(function(){
        var input = document.getElementById('access-code-input');
        if (input) { input.value = code; input.focus(); }
    }, 300);
}

function retryLipila() {
    document.getElementById('lipilaFailed').classList.add('hidden');
    document.getElementById('lipilaExpired').classList.add('hidden');
    document.getElementById('lipilaHeld').classList.add('hidden');
    document.getElementById('lipilaFormView').classList.remove('hidden');
    var payViewEl = document.getElementById('pay-view');
    var tabsEl = document.querySelector('.tabs');
    if (payViewEl) payViewEl.classList.add('hidden');
    if (tabsEl) tabsEl.style.display = 'none';
    window._lipilaCtx.saleId = null;
    lipilaSyncFromForm();
    lipilaFetchPrice();
}

function fallbackToManual() {
    document.getElementById('lipilaFailed').classList.add('hidden');
    document.getElementById('lipilaExpired').classList.add('hidden');
    document.getElementById('lipilaHeld').classList.add('hidden');
    document.getElementById('lipilaFormView').classList.add('hidden');
    var payViewEl = document.getElementById('pay-view');
    var tabsEl = document.querySelector('.tabs');
    var form = document.getElementById('paymentForm');
    if (payViewEl) payViewEl.classList.remove('hidden');
    if (tabsEl) tabsEl.style.display = '';
    if (form) form.classList.remove('hidden');
}


function handleFile(input) {
    const fileName = document.getElementById('fileName');
    const dropZone = document.getElementById('dropZone');
    if (!fileName || !dropZone) return;

    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const maxSize = KAERI_CONFIG.maxPaymentScreenshotBytes;
        if (file.size > maxSize) {
            showAlert('warning', 'File Too Large', 'Please upload an image smaller than 5MB.');
            input.value = '';
            fileName.textContent = 'Tap to upload screenshot';
            dropZone.classList.remove('has-file');
            return;
        }
        if (!file.type.startsWith('image/')) {
            showAlert('warning', 'Invalid File', 'Please upload an image file (PNG, JPG, WEBP).');
            input.value = '';
            fileName.textContent = 'Tap to upload screenshot';
            dropZone.classList.remove('has-file');
            return;
        }
        fileName.innerHTML = `<span style="color:#72efdd;">${file.name}</span>`;
        dropZone.classList.add('has-file');
    } else {
        fileName.textContent = 'Tap to upload screenshot';
        dropZone.classList.remove('has-file');
    }
}

function handleSubmit() {
    if (isSubmitting) return;

    const form = document.getElementById('paymentForm');
    const fileInput = document.getElementById('fileInput');
    const file = fileInput?.files[0];

    const fullName = form?.querySelector('input[name="fullName"]')?.value.trim();
    const email = form?.querySelector('input[name="email"]')?.value.trim();
    const course = document.getElementById('courseSelect')?.value;
    const term = document.getElementById('termSelect')?.value;
    const momoNumber = form?.querySelector('input[name="momoNumber"]')?.value.trim();
    const transRef = form?.querySelector('input[name="transRef"]')?.value.trim();

    if (!fullName) return showAlert('warning', 'Missing Field', 'Please enter your full name.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showAlert('warning', 'Invalid Email', 'Please enter a valid email address.');
    if (!course) return showAlert('warning', 'Missing Course', 'Please select a course.');
    if (!term) return showAlert('warning', 'Missing Term', 'Please select a term.');
    if (!momoNumber || momoNumber.length < 9) return showAlert('warning', 'Invalid Phone', 'Please enter a valid Mobile Money number.');
    if (!transRef) return showAlert('warning', 'Missing Reference', 'Please enter your transaction reference.');
    if (!file) return showAlert('warning', 'Proof Required', 'Please upload a screenshot of your payment.');

    isSubmitting = true;
    const submitBtn = document.getElementById('paySubmitBtn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
    }

    const reader = new FileReader();
    reader.onload = function(evt) {
        const payload = {
            fullName, email, course, term,
            phone: momoNumber,
            txnRef: transRef,
            screenshotBase64: evt.target.result
        };

        callPaymentApi('submitPayment', { payload }, KAERI_CONFIG.paymentRetries)
            .then(res => {
                if (res.success) {
                    showAlert('success', 'Submitted!', res.message || 'Payment submitted successfully! Verification takes ~24 hours.')
                        .then(() => {
                            form?.reset();
                            const fn = document.getElementById('fileName');
                            const dz = document.getElementById('dropZone');
                            if (fn) fn.textContent = 'Tap to upload screenshot';
                            if (dz) dz.classList.remove('has-file');
                            updatePrice();
                            closePaymentModal();
                        });
                } else {
                    showAlert('error', 'Submission Failed', res.message || 'An error occurred. Please try again.');
                }
            })
            .catch(() => {
                showAlert('error', 'Network Error', 'Could not reach the server. Please check your connection.');
            })
            .finally(() => {
                isSubmitting = false;
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '✅ Submit Payment';
                }
            });
    };

    reader.onerror = function() {
        showAlert('error', 'File Error', 'Failed to read the image file. Please try again.');
        isSubmitting = false;
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '✅ Submit Payment';
        }
    };

    reader.readAsDataURL(file);
}

function checkHistory() {
    if (isChecking) return;
    const email = document.getElementById('checkEmail')?.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return showAlert('warning', 'Invalid Email', 'Please enter a valid email address.');
    }

    isChecking = true;
    const historyList = document.getElementById('historyList');
    if (historyList) {
        historyList.innerHTML = '<div class="skeleton" style="height:60px;"></div><div class="skeleton" style="height:60px;"></div>';
    }

    callPaymentApi('getStudentPurchaseHistory', { email }, 2)
        .then(res => {
            if (!historyList) return;
            historyList.innerHTML = '';
            if (!res.success) {
                historyList.innerHTML = `<p style="text-align:center;color:#8899a6;padding:20px;">${res.message || 'Could not fetch history.'}</p>`;
                return;
            }
            const data = res.data || [];
            if (data.length === 0) {
                historyList.innerHTML = '<p style="text-align:center;color:#8899a6;padding:20px;">No records found for this email.</p>';
                return;
            }
            data.forEach(item => {
                const st = String(item.status || '');
                const badgeClass = st === 'Completed' ? 'badge-success' :
                                   (st === 'Failed' || st === 'Abandoned' || st === 'Timed_Out_Unconfirmed') ? 'badge-danger' : 'badge-warning';
                const statusLabel = ({
                    'Pending_Lipila': 'Processing', 'Paid_Pending_Review': 'Under review', 'Paid_Code_Failed': 'Under review',
                    'Disputed': 'Under review', 'Timed_Out_Unconfirmed': 'Expired', 'Abandoned': 'Expired'
                })[st] || st;
                const methodLabel = item.paymentMethod === 'LIPILA' || item.paymentMethod === 'Lipila' || item.saleId ? '💳 Lipila' : '📱 Screenshot';
                let contentHtml = '';
                if (item.status === 'Completed' && item.accessCode) {
                    contentHtml = `
                        <div class="code-with-copy">
                            <span class="code-text">${escapeHtml(item.accessCode)}</span>
                            <button class="copy-btn" onclick="copyCode('${escapeHtml(item.accessCode)}', this)">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                    `;
                } else if (item.status === 'Failed') {
                    contentHtml = `<div style="color:#8899a6;font-size:0.85rem;margin-top:5px;">${escapeHtml(item.verificationNotes || 'Failed')}</div>`;
                } else if (st === 'Pending_Lipila') {
                    contentHtml = `<div style="color:#8899a6;font-size:0.85rem;margin-top:5px;">Waiting for your PIN confirmation on your phone. Your code will appear here once paid.</div>
                        <button class="btn btn-inline btn-secondary" style="width:auto;padding:6px 14px;margin-top:8px;" onclick="checkHistory()">↻ Refresh status</button>`;
                } else if (statusLabel === 'Under review') {
                    contentHtml = `<div style="color:#8899a6;font-size:0.85rem;margin-top:5px;">${escapeHtml(item.verificationNotes || 'Payment received — our team is confirming it. You will get your code by email.')}</div>`;
                } else {
                    contentHtml = `<div style="color:#8899a6;font-size:0.85rem;margin-top:5px;">${escapeHtml(item.verificationNotes || 'Pending...')}</div>`;
                }

                historyList.innerHTML += `
                    <div class="history-item">
                        <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
                            <span style="font-weight:700">${escapeHtml(item.course)} ${escapeHtml(item.term)}</span>
                            <span class="badge ${badgeClass}">${escapeHtml(statusLabel)}</span>
                        </div>
                        <div style="color:#8899a6;font-size:0.85rem;">${escapeHtml(item.date)} • ${methodLabel} • Ref: ${escapeHtml(item.transactionRef || item.saleId || '-')}</div>
                        ${contentHtml}
                    </div>
                `;
            });
        })
        .catch(() => {
            if (historyList) {
                historyList.innerHTML = `<p style="text-align:center;color:#8899a6;padding:20px;">Network error. Please try again later.</p>`;
            }
        })
        .finally(() => {
            isChecking = false;
        });
}

function copyCode(text, btnElement) {
    if (!text) return;
    const original = btnElement.innerHTML;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                btnElement.innerHTML = '✅ Copied!';
                btnElement.classList.add('copied');
                setTimeout(() => {
                    btnElement.innerHTML = original;
                    btnElement.classList.remove('copied');
                }, 2500);
            })
            .catch(() => fallbackCopy(text, btnElement));
    } else {
        fallbackCopy(text, btnElement);
    }
}

function fallbackCopy(text, btnElement) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        btnElement.innerHTML = '✅ Copied!';
        btnElement.classList.add('copied');
        setTimeout(() => {
            btnElement.innerHTML = '<i class="fas fa-copy"></i> Copy';
            btnElement.classList.remove('copied');
        }, 2500);
    } catch (e) {
        showAlert('warning', 'Copy Failed', 'Could not copy. Please select and copy manually.');
    }
    document.body.removeChild(textarea);
}

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function switchPayTab(tab) {
    const payView = document.getElementById('pay-view');
    const statusView = document.getElementById('status-view');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabsContainer = document.querySelector('.tabs');

    // Hide any visible Lipila screens when switching to a tab view
    ['payMethodSelector','lipilaFormView','lipilaPinWaiting','lipilaSuccess','lipilaFailed','lipilaHeld','lipilaExpired'].forEach(function(id){
        var el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // Show the tabs container (may have been hidden by the Lipila method selector)
    if (tabsContainer) tabsContainer.style.display = '';

    tabButtons.forEach(b => b.classList.remove('active'));
    if (payView) payView.classList.add('hidden');
    if (statusView) statusView.classList.add('hidden');

    if (tab === 'pay') {
        tabButtons[0]?.classList.add('active');
        if (payView) payView.classList.remove('hidden');
    } else {
        tabButtons[1]?.classList.add('active');
        if (statusView) statusView.classList.remove('hidden');
    }
}


// ═══════════════════════════════════════════════════════════
// ═══ LIPILA VISIBILITY HANDLER (Patch 3.4) ═══
// ═══════════════════════════════════════════════════════════
document.addEventListener('visibilitychange', function(){
    if (document.hidden && window._lipilaCtx && window._lipilaCtx.timer) {
        clearInterval(window._lipilaCtx.timer);
        window._lipilaCtx.timer = null;
    } else if (!document.hidden && window._lipilaCtx && window._lipilaCtx.saleId && !window._lipilaCtx.timer) {
        var pinWaiting = document.getElementById('lipilaPinWaiting');
        if (pinWaiting && !pinWaiting.classList.contains('hidden')) {
            startLipilaPolling();
        }
    }
});
// ============================================================
// === 6. QUIZ ENGINE with Tiered Access ===
// === v1.1 PATCH: paid MCQ wizard (3 screens) — demo contract untouched ===
// === v1.3 PATCH: demo MCQ bulk-select picker (multi-select sub-topics),
//                 fixed 10 questions/run, shuffle forced ON ===
// === v1.6 PATCH: naturalSort applied to unit and sub-topic ordering ===
// ============================================================

// ────────────────────────────────────────────────────────────
// ── MCQ wizard state (paid only; demo never touches it) ────
// ────────────────────────────────────────────────────────────
const mcqSetupState = {
    selectedUnits:  new Set(),
    selectedSubs:   {},          // { unitName: Set<subName> }
    orderedUnits:   [],          // sequence of units to walk through
    subScreenIndex: 0,
    count:          10,
    shuffleQs:      true,
    shuffleOpts:    true,
    groupByTopic:   false
};

// ────────────────────────────────────────────────────────────
// ── Demo MCQ picker state (bulk-select, resets on course change)
// ────────────────────────────────────────────────────────────
const _demoMcqState = {
    step:               'unit',              // 'unit' | 'sub'
    selectedUnit:       null,                // single unit context when in 'sub' step
    selectedSubsByUnit: {}                   // { unitName: Set<subName> } — persists across unit switches
};

function resetMcqWizardState() {
    mcqSetupState.selectedUnits.clear();
    mcqSetupState.selectedSubs   = {};
    mcqSetupState.orderedUnits   = [];
    mcqSetupState.subScreenIndex = 0;
    mcqSetupState.count          = 10;
    mcqSetupState.shuffleQs      = true;
    mcqSetupState.shuffleOpts    = true;
    mcqSetupState.groupByTopic   = false;

    _demoMcqState.step               = 'unit';
    _demoMcqState.selectedUnit       = null;
    _demoMcqState.selectedSubsByUnit = {};
}

// ────────────────────────────────────────────────────────────
// ── Topic index — group questions by mainTopic + topic ─────
// ────────────────────────────────────────────────────────────
function buildMcqTopicIndex(questions) {
    const index = {};
    for (const q of questions) {
        const unit = q.mainTopic || 'Ungrouped';
        const sub  = q.topic     || 'General';
        if (!index[unit]) index[unit] = {};
        if (!index[unit][sub]) index[unit][sub] = [];
        index[unit][sub].push(q);
    }
    return index;
}

// Escape a string for inline onclick use (only \\ and ')
function _escInline(s) {
    return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Read how many demo attempts remain for this term.
function _demoAttemptsLeft() {
    const key = 'demo_mcq_used_' + currentTermKey;
    const used = parseInt(localStorage.getItem(key) || '0');
    return Math.max(0, KAERI_CONFIG.demoAttemptLimit - used);
}

// ────────────────────────────────────────────────────────────
// ── Entry point (unchanged name — HTML depends on it) ──────
// ────────────────────────────────────────────────────────────
function renderQuiz() {
    // FREE USER: peek only — do NOT consume. Consumption happens on Start.
    if (!hasFullAccess) {
        if (!canUseDemo('mcq')) {
            showAppNotification('Demo limit reached. Unlock Full Access!', 'warning');
            openPaymentModal();
            return;
        }
        renderDemoMcqPicker();
        return;
    }

    // PAID USER: three-screen wizard.
    renderMcqMenu();
}

// ────────────────────────────────────────────────────────────
// ── Demo picker router — chooses which step to render ──────
// ────────────────────────────────────────────────────────────
function renderDemoMcqPicker() {
    if (!currentMcqData || currentMcqData.length === 0) {
        const container = document.getElementById('quiz-form');
        container.innerHTML = '<div style="text-align:center;padding:40px 20px;">'
            + '<h3>📭 No questions yet</h3>'
            + '<p style="color:#a0a8b4;">No MCQ content for ' + currentCourse + ' ' + currentTerm + '.</p>'
            + '</div>';
        return;
    }

    const tree  = buildMcqTopicIndex(currentMcqData);
    const units = Object.keys(tree).sort(naturalSort);

    // Reset step context only — keep selectedSubsByUnit so Try Again / unit switches persist picks.
    _demoMcqState.selectedUnit = null;

    // If the term has only one unit, skip the unit step.
    if (units.length === 1) {
        _demoMcqState.selectedUnit = units[0];
        _demoMcqState.step         = 'sub';
        renderDemoSubPicker(units[0]);
        return;
    }

    _demoMcqState.step = 'unit';
    renderDemoUnitPicker();
}

// ────────────────────────────────────────────────────────────
// ── Demo step 1 — unit picker (only if term has > 1 unit) ──
// ────────────────────────────────────────────────────────────
function renderDemoUnitPicker() {
    const container = document.getElementById('quiz-form');
    container.innerHTML = '';
    document.getElementById('result').innerHTML = '';
    currentQuizType = 'mcqDemoUnit';
    updateProgress(0, 0);

    const tree  = buildMcqTopicIndex(currentMcqData);
    const units = Object.keys(tree).sort(naturalSort);
    const attemptsLeft = _demoAttemptsLeft();

    let html = '<div style="max-width:560px;margin:0 auto;">'
        + _mcqPoolBannerHtml()
        + '<div style="text-align:center;margin-bottom:22px;">'
        + '<h2 style="color:white;margin:0 0 4px 0;">📚 Choose a Unit</h2>'
        + '<p style="color:#a0a8b4;font-size:0.85em;margin:0;">'
        + currentCourse + ' ' + currentTerm + ' · ' + units.length + ' units · ' + currentMcqData.length + ' questions'
        + '</p></div>'
        + '<div style="text-align:center;margin-bottom:16px;color:#ffc107;font-size:0.82em;'
        + 'background:#0d1b2a;border:1px solid #3e506e;border-radius:6px;padding:8px;">'
        + '🔒 Demo Mode: <strong>' + attemptsLeft + ' attempt' + (attemptsLeft === 1 ? '' : 's') + '</strong> remaining'
        + '</div>'
        + '<div>';

    units.forEach(function (u) {
        const subs = Object.keys(tree[u]);
        const qCount = subs.reduce(function (s, k) { return s + tree[u][k].length; }, 0);
        const safeU = _escInline(u);

        // Badge: how many sub-topics ticked in this unit
        const pickedSet = _demoMcqState.selectedSubsByUnit[u];
        const pickedCount = pickedSet ? pickedSet.size : 0;
        const badge = pickedCount > 0
            ? '<div style="font-size:0.72em;color:#72efdd;font-weight:700;'
              + 'background:#0d1b2a;padding:2px 8px;border-radius:10px;display:inline-block;margin-top:4px;">'
              + '● ' + pickedCount + ' selected</div>'
            : '';

        html += '<div class="demo-mcq-unit-row" '
            + 'onclick="demoSelectUnit(\'' + safeU + '\')" '
            + 'style="background:#1e2a3a;border:2px solid ' + (pickedCount > 0 ? '#28a745' : '#2b3a55') + ';'
            + 'border-radius:10px;padding:16px;margin-bottom:10px;cursor:pointer;transition:0.2s;">'
            + '<div style="display:flex;align-items:center;gap:12px;">'
            + '<div style="flex:1;">'
            + '<div style="color:white;font-size:1em;font-weight:600;line-height:1.3;">' + u + '</div>'
            + '<div style="color:#a0a8b4;font-size:0.78em;margin-top:3px;">'
            + subs.length + ' sub-topics · ' + qCount + ' questions</div>'
            + badge
            + '</div>'
            + '<div style="color:#72efdd;font-size:1.2em;font-weight:700;">→</div>'
            + '</div></div>';
    });

    html += '</div>'
        + '<button type="button" onclick="exitQuiz()" class="back-button" '
        + 'style="width:100%;margin:16px 0 0 0;">⬅️ Back to Menu</button>'
        + '</div>';

    container.innerHTML = html;
}

function demoSelectUnit(unit) {
    _demoMcqState.selectedUnit = unit;
    _demoMcqState.step         = 'sub';

    // Do NOT reset subs for this unit — keep any prior selections.
    if (!_demoMcqState.selectedSubsByUnit[unit]) {
        _demoMcqState.selectedSubsByUnit[unit] = new Set();
    }

    renderDemoSubPicker(unit);
}

// ────────────────────────────────────────────────────────────
// ── Demo step 2 — bulk-select sub-topic picker ─────────────
// ────────────────────────────────────────────────────────────
// UX: checkboxes instead of radios. User can pick any combination.
// Run length is fixed at 10 (or fewer if the pool is smaller).
// Shuffle is forced ON as an operator default.
function renderDemoSubPicker(unit) {
    const container = document.getElementById('quiz-form');
    container.innerHTML = '';
    document.getElementById('result').innerHTML = '';
    currentQuizType = 'mcqDemoSub';
    updateProgress(0, 0);

    const tree  = buildMcqTopicIndex(currentMcqData);
    const subs  = Object.keys(tree[unit] || {}).sort(naturalSort);
    const units = Object.keys(tree).sort(naturalSort);
    const multiUnit = units.length > 1;
    const attemptsLeft = _demoAttemptsLeft();
    const safeU = _escInline(unit);

    // Read this unit's persistent selection (defaults to empty Set)
    const selectedSubs = _demoMcqState.selectedSubsByUnit[unit] || new Set();

    let html = '<div style="max-width:560px;margin:0 auto;">'
        + (multiUnit ? '' : _mcqPoolBannerHtml())
        + '<div style="text-align:center;margin-bottom:20px;">';

    if (multiUnit) {
        html += '<div style="color:#a0a8b4;font-size:0.8em;letter-spacing:1px;'
            + 'text-transform:uppercase;margin-bottom:6px;">'
            + '<span onclick="renderDemoUnitPicker()" style="cursor:pointer;color:#72efdd;">← All units</span>'
            + '</div>';
    }

    html += '<h2 style="color:white;margin:0 0 4px 0;">📖 ' + unit + '</h2>'
        + '<p style="color:#a0a8b4;font-size:0.85em;margin:0;">'
        + subs.length + ' sub-topics · pick any combination'
        + '</p></div>'
        + '<div style="text-align:center;margin-bottom:16px;color:#ffc107;font-size:0.82em;'
        + 'background:#0d1b2a;border:1px solid #3e506e;border-radius:6px;padding:8px;">'
        + '🔒 Demo Mode: <strong>' + attemptsLeft + ' attempt' + (attemptsLeft === 1 ? '' : 's') + '</strong> remaining'
        + '</div>'
        + '<div id="demo-mcq-sub-list">';

    subs.forEach(function (sub) {
        const qCount = tree[unit][sub].length;
        const isSelected = selectedSubs.has(sub);
        const safeS = _escInline(sub);
        html += '<div class="demo-mcq-sub-row" data-unit="' + safeU + '" data-sub="' + safeS + '" '
            + 'onclick="demoToggleSub(\'' + safeS + '\')" '
            + 'style="background:#1e2a3a;border:2px solid ' + (isSelected ? '#28a745' : '#2b3a55') + ';'
            + 'border-radius:10px;padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:14px;cursor:pointer;">'
            + '<div class="demo-mcq-cb" style="width:18px;height:18px;border-radius:4px;border:2px solid '
                + (isSelected ? '#28a745' : '#3e506e') + ';background:'
                + (isSelected ? '#28a745' : 'transparent') + ';flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:0.75em;color:white;font-weight:900;">'
                + (isSelected ? '✓' : '')
            + '</div>'
            + '<div style="flex:1;">'
            + '<div style="color:white;font-size:0.95em;font-weight:600;">' + sub + '</div>'
            + '<div style="color:#a0a8b4;font-size:0.75em;margin-top:2px;">' + qCount + ' question' + (qCount === 1 ? '' : 's') + '</div>'
            + '</div>'
            + '</div>';
    });

    html += '</div>'
        + '<div style="display:flex;gap:8px;margin:14px 0;">'
        + '<button type="button" onclick="demoSelectAllSubs(true)" style="flex:1;background:#2b3a55;color:#72efdd;border:1px solid #3e506e;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;margin:0;">✓ All</button>'
        + '<button type="button" onclick="demoSelectAllSubs(false)" style="flex:1;background:#2b3a55;color:#a0a8b4;border:1px solid #3e506e;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;margin:0;">✗ None</button>'
        + '</div>'
        + '<div id="demo-mcq-summary" style="background:#0d1b2a;border:1px solid #3e506e;'
            + 'border-radius:8px;padding:12px;text-align:center;color:#a0a8b4;font-size:0.88em;'
            + 'margin:16px 0;"></div>'
        + '<button type="button" id="demo-mcq-start" onclick="startDemoSubTopicMcq()" '
            + 'style="width:100%;background:#28a745;color:white;border:none;padding:14px;'
            + 'border-radius:8px;font-weight:700;font-size:1em;margin:0 0 12px 0;'
            + 'opacity:0.5;cursor:not-allowed;" disabled>'
            + '▶️ Select sub-topics above</button>'
        + '<div style="background:#0d1b2a;border:1px dashed #ffc107;border-radius:8px;'
            + 'padding:12px 14px;text-align:center;font-size:0.82em;color:#a0a8b4;line-height:1.5;">'
            + '<span style="color:#ffc107;font-weight:700;">🔓 Unlock to set question counts, '
            + 'control shuffling, and group by sub-topic</span>'
            + '</div>'
        + '<button type="button" onclick="exitQuiz()" class="back-button" '
            + 'style="width:100%;margin:12px 0 0 0;">⬅️ Back to Menu</button>'
        + '</div>';

    container.innerHTML = html;
    _updateDemoMcqSummary();
}

function demoToggleSub(sub) {
    const unit = _demoMcqState.selectedUnit;
    if (!_demoMcqState.selectedSubsByUnit[unit]) {
        _demoMcqState.selectedSubsByUnit[unit] = new Set();
    }
    const set = _demoMcqState.selectedSubsByUnit[unit];

    if (set.has(sub)) set.delete(sub);
    else              set.add(sub);

    document.querySelectorAll('.demo-mcq-sub-row').forEach(function (row) {
        const isSelected = set.has(row.dataset.sub);
        row.style.border = isSelected ? '2px solid #28a745' : '2px solid #2b3a55';
        const cb = row.querySelector('.demo-mcq-cb');
        if (cb) {
            cb.style.border     = isSelected ? '2px solid #28a745' : '2px solid #3e506e';
            cb.style.background = isSelected ? '#28a745' : 'transparent';
            cb.textContent      = isSelected ? '✓' : '';
        }
    });
    _updateDemoMcqSummary();
}

function demoSelectAllSubs(selectAll) {
    const tree = buildMcqTopicIndex(currentMcqData);
    const unit = _demoMcqState.selectedUnit;
    const subs = Object.keys(tree[unit] || {});

    _demoMcqState.selectedSubsByUnit[unit] = selectAll ? new Set(subs) : new Set();
    const set = _demoMcqState.selectedSubsByUnit[unit];

    document.querySelectorAll('.demo-mcq-sub-row').forEach(function (row) {
        const isSelected = set.has(row.dataset.sub);
        row.style.border = isSelected ? '2px solid #28a745' : '2px solid #2b3a55';
        const cb = row.querySelector('.demo-mcq-cb');
        if (cb) {
            cb.style.border     = isSelected ? '2px solid #28a745' : '2px solid #3e506e';
            cb.style.background = isSelected ? '#28a745' : 'transparent';
            cb.textContent      = isSelected ? '✓' : '';
        }
    });
    _updateDemoMcqSummary();
}

// Honest summary — real pool count, real run count, operator-fixed 10.
function _updateDemoMcqSummary() {
    const el  = document.getElementById('demo-mcq-summary');
    const btn = document.getElementById('demo-mcq-start');
    if (!el || !btn) return;

    const unit = _demoMcqState.selectedUnit;
    const set  = _demoMcqState.selectedSubsByUnit[unit] || new Set();

    if (!unit || set.size === 0) {
        el.innerHTML = 'Select one or more sub-topics to begin';
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
        btn.textContent = '▶️ Select sub-topics above';
        return;
    }

    const tree = buildMcqTopicIndex(currentMcqData);
    let poolSize = 0;
    set.forEach(function (sub) {
        poolSize += ((tree[unit] && tree[unit][sub]) || []).length;
    });

    const runCount = Math.min(10, poolSize);

    el.innerHTML = '<strong style="color:#72efdd;">' + runCount + '</strong> question'
        + (runCount === 1 ? '' : 's')
        + ' from <strong style="color:#72efdd;">' + set.size + '</strong> sub-topic'
        + (set.size === 1 ? '' : 's')
        + ' <span style="color:#a0a8b4;">(of ' + poolSize + ' available)</span>';

    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
    btn.textContent = '▶️ Start ' + runCount + '-question quiz';
}

function startDemoSubTopicMcq() {
    const unit = _demoMcqState.selectedUnit;
    const set  = unit ? _demoMcqState.selectedSubsByUnit[unit] : null;

    if (!unit || !set || set.size === 0) {
        showAppNotification('⚠️ Select at least one sub-topic', 'warning');
        return;
    }

    // ── CHARGE POINT — the moment of no return. ──
    if (!hasFullAccess) {
        if (!canUseDemo('mcq')) {
            showAppNotification('Demo limit reached. Unlock Full Access!', 'warning');
            openPaymentModal();
            return;
        }
        consumeDemoAttempt('mcq');
    }

    const tree = buildMcqTopicIndex(currentMcqData);
    const demoState = {
        selectedUnits: new Set([unit]),
        selectedSubs:  { [unit]: new Set(set) },
        count:         10,
        shuffleQs:     true,
        shuffleOpts:   true,
        groupByTopic:  false
    };
    const opts = { shuffleQs: true, shuffleOpts: true, groupByTopic: false };

    const questions = buildMcqQuiz(tree, demoState, opts);
    if (questions.length === 0) {
        showAppNotification('⚠️ Could not build quiz', 'warning');
        return;
    }

    currentQuizData      = questions;
    currentQuizType      = 'mcq';
    currentQuestionIndex = 0;
    currentScore         = 0;
    isSubmissionLocked   = false;

    logAnalyticsEvent('quiz_start',
        'MCQ DEMO · ' + set.size + ' sub-topics · ' + questions.length + 'Q');

    document.getElementById('result').innerHTML = '';
    displayMcqQuestion();
}

// ────────────────────────────────────────────────────────────
// ── Paid wizard screen 1: main topics ──────────────────────
// ────────────────────────────────────────────────────────────
function renderMcqMenu() {
    const container = document.getElementById('quiz-form');
    container.innerHTML = '';
    document.getElementById('result').innerHTML = '';
    currentQuizType = 'mcqMenu';
    updateProgress(0, 0);

    if (!currentMcqData || currentMcqData.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px 20px;">'
            + '<h3>📭 No questions yet</h3>'
            + '<p style="color:#a0a8b4;">No MCQ content for ' + currentCourse + ' ' + currentTerm + '.</p>'
            + '</div>';
        return;
    }

    const tree  = buildMcqTopicIndex(currentMcqData);
    const units = Object.keys(tree).sort(naturalSort);

    if (mcqSetupState.selectedUnits.size === 0 && mcqSetupState.orderedUnits.length === 0) {
        units.forEach(function (u) {
            mcqSetupState.selectedUnits.add(u);
            mcqSetupState.selectedSubs[u] = new Set(Object.keys(tree[u]));
        });
        mcqSetupState.orderedUnits = units.slice();
    } else {
        Array.from(mcqSetupState.selectedUnits).forEach(function (u) {
            if (!tree[u]) {
                mcqSetupState.selectedUnits.delete(u);
                delete mcqSetupState.selectedSubs[u];
            }
        });
        Object.keys(mcqSetupState.selectedSubs).forEach(function (u) {
            if (!tree[u]) { delete mcqSetupState.selectedSubs[u]; return; }
            const validSubs = new Set(Object.keys(tree[u]));
            const current = mcqSetupState.selectedSubs[u];
            if (!current) return;
            Array.from(current).forEach(function (s) { if (!validSubs.has(s)) current.delete(s); });
        });
    }

    let html = '<div style="max-width:560px;margin:0 auto;">'
        + _mcqPoolBannerHtml()
        + '<div style="text-align:center;margin-bottom:22px;">'
        + '<h2 style="color:white;margin:0 0 4px 0;">📚 Select Main Topic</h2>'
        + '<p style="color:#a0a8b4;font-size:0.85em;margin:0;">'
        + currentCourse + ' ' + currentTerm + ' · ' + currentMcqData.length + ' questions · ' + units.length + ' units'
        + '</p></div><div id="mcq-unit-list">';

    units.forEach(function (u) {
        const subs = Object.keys(tree[u]);
        const qCount = subs.reduce(function (s, k) { return s + tree[u][k].length; }, 0);
        const checked = mcqSetupState.selectedUnits.has(u);
        const ratio = mcqSetupState.selectedSubs[u] ? mcqSetupState.selectedSubs[u].size / subs.length : 0;
        const cbState = (!checked || ratio === 0) ? 'unchecked' : (ratio === 1) ? 'checked' : 'partial';
        const safeU = _escInline(u);

        html += '<div class="mcq-unit-row" style="background:#1e2a3a;border:2px solid ' + (cbState === 'unchecked' ? '#2b3a55' : '#28a745') + ';border-radius:10px;padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:14px;cursor:pointer;">'
            + '<input type="checkbox" class="mcq-unit-cb" data-unit="' + safeU + '" ' + (cbState === 'checked' ? 'checked' : '') + (cbState === 'partial' ? ' data-partial="1"' : '') + ' onclick="event.stopPropagation(); mcqMenuToggleUnit(\'' + safeU + '\', this.checked)" style="transform:scale(1.3);accent-color:#72efdd;cursor:pointer;flex-shrink:0;">'
            + '<div style="flex:1;" onclick="mcqMenuDrillUnit(\'' + safeU + '\')">'
            + '<div style="color:white;font-size:1em;font-weight:600;line-height:1.3;">' + u + '</div>'
            + '<div style="color:#a0a8b4;font-size:0.78em;margin-top:3px;">' + subs.length + ' sub-topics · ' + qCount + ' questions</div>'
            + '</div>'
            + '<div style="color:#72efdd;font-size:1.2em;font-weight:700;" onclick="mcqMenuDrillUnit(\'' + safeU + '\')">→</div>'
            + '</div>';
    });

    html += '</div>'
        + '<div style="display:flex;gap:8px;margin:18px 0;">'
        + '<button type="button" onclick="mcqMenuSelectAllUnits(true)" style="flex:1;background:#2b3a55;color:#72efdd;border:1px solid #3e506e;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;margin:0;">✓ All</button>'
        + '<button type="button" onclick="mcqMenuSelectAllUnits(false)" style="flex:1;background:#2b3a55;color:#a0a8b4;border:1px solid #3e506e;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;margin:0;">✗ None</button>'
        + '</div>'
        + '<div id="mcq-menu-summary" style="background:#0d1b2a;border:1px solid #3e506e;border-radius:8px;padding:12px;text-align:center;color:#a0a8b4;font-size:0.88em;margin-bottom:16px;"></div>'
        + '<button type="button" onclick="mcqMenuContinue()" style="width:100%;background:#28a745;color:white;border:none;padding:14px;border-radius:8px;font-weight:700;font-size:1em;cursor:pointer;margin:0 0 8px 0;">Continue →</button>'
        + '<button type="button" onclick="exitQuiz()" class="back-button" style="width:100%;margin:0;">⬅️ Back to Menu</button>'
        + '</div>';

    container.innerHTML = html;
    mcqMenuUpdateSummary(tree);
}

function mcqMenuToggleUnit(unit, checked) {
    const tree = buildMcqTopicIndex(currentMcqData);
    if (checked) {
        mcqSetupState.selectedUnits.add(unit);
        if (!mcqSetupState.selectedSubs[unit]) {
            mcqSetupState.selectedSubs[unit] = new Set(Object.keys(tree[unit] || {}));
        }
    } else {
        mcqSetupState.selectedUnits.delete(unit);
        delete mcqSetupState.selectedSubs[unit];
    }
    renderMcqMenu();
}

function mcqMenuSelectAllUnits(checked) {
    const tree = buildMcqTopicIndex(currentMcqData);
    if (checked) {
        Object.keys(tree).forEach(function (u) {
            mcqSetupState.selectedUnits.add(u);
            mcqSetupState.selectedSubs[u] = new Set(Object.keys(tree[u]));
        });
    } else {
        mcqSetupState.selectedUnits.clear();
        mcqSetupState.selectedSubs = {};
    }
    renderMcqMenu();
}

function mcqMenuUpdateSummary(tree) {
    const el = document.getElementById('mcq-menu-summary');
    if (!el) return;
    let subCount = 0;
    let qCount = 0;
    mcqSetupState.selectedUnits.forEach(function (u) {
        const subs = mcqSetupState.selectedSubs[u];
        if (!subs) return;
        subCount += subs.size;
        subs.forEach(function (s) { qCount += ((tree[u] && tree[u][s]) || []).length; });
    });
    if (mcqSetupState.selectedUnits.size === 0) {
        el.innerHTML = 'No units selected';
    } else {
        el.innerHTML = '<strong style="color:#72efdd;">' + mcqSetupState.selectedUnits.size + '</strong> units · '
            + '<strong style="color:#72efdd;">' + subCount + '</strong> sub-topics · '
            + '<strong style="color:#72efdd;">' + qCount + '</strong> questions';
    }
}

function mcqMenuDrillUnit(unit) {
    const tree = buildMcqTopicIndex(currentMcqData);
    const subs = Object.keys(tree[unit] || {}).sort(naturalSort);
    if (subs.length === 0) {
        showAppNotification("No sub-topics in this unit.", "info");
        return;
    }
    if (!mcqSetupState.selectedUnits.has(unit)) {
        mcqSetupState.selectedUnits.add(unit);
        mcqSetupState.selectedSubs[unit] = new Set(subs);
    }
    mcqSetupState.orderedUnits = [unit].concat(
        Array.from(mcqSetupState.selectedUnits).filter(function (u) { return u !== unit; })
    );
    mcqSetupState.subScreenIndex = 0;
    renderMcqSubTopicMenu();
}

function mcqMenuContinue() {
    if (mcqSetupState.selectedUnits.size === 0) {
        showAppNotification("⚠️ Select at least one unit", "warning");
        return;
    }
    mcqSetupState.orderedUnits = Array.from(mcqSetupState.selectedUnits).sort(naturalSort);
    mcqSetupState.subScreenIndex = 0;
    renderMcqSubTopicMenu();
}

// ────────────────────────────────────────────────────────────
// ── Paid wizard screen 2: sub-topics per unit ──────────────
// ────────────────────────────────────────────────────────────
function renderMcqSubTopicMenu() {
    const container = document.getElementById('quiz-form');
    container.innerHTML = '';
    document.getElementById('result').innerHTML = '';
    currentQuizType = 'mcqSubMenu';
    updateProgress(0, 0);

    const tree = buildMcqTopicIndex(currentMcqData);
    const unit = mcqSetupState.orderedUnits[mcqSetupState.subScreenIndex];
    if (!unit) { renderMcqSetupScreen(); return; }

    const subs = Object.keys(tree[unit] || {}).sort(naturalSort);
    const selectedSubs = mcqSetupState.selectedSubs[unit] || new Set();
    const totalInUnit  = subs.reduce(function (s, k) { return s + tree[unit][k].length; }, 0);
    const totalSteps   = mcqSetupState.orderedUnits.length;
    const safeU        = _escInline(unit);

    let html = '<div style="max-width:560px;margin:0 auto;">'
        + '<div style="text-align:center;margin-bottom:22px;">'
        + '<div style="color:#a0a8b4;font-size:0.8em;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;">Unit ' + (mcqSetupState.subScreenIndex + 1) + ' of ' + totalSteps + '</div>'
        + '<h2 style="color:white;margin:0 0 4px 0;">📖 ' + unit + '</h2>'
        + '<p style="color:#a0a8b4;font-size:0.85em;margin:0;">Choose sub-topics · ' + subs.length + ' available · ' + totalInUnit + ' questions</p>'
        + '</div><div id="mcq-sub-list">';

    subs.forEach(function (sub) {
        const qCount = tree[unit][sub].length;
        const checked = selectedSubs.has(sub);
        const safeS = _escInline(sub);
        html += '<div class="mcq-sub-row" style="background:#1e2a3a;border:2px solid ' + (checked ? '#28a745' : '#2b3a55') + ';border-radius:10px;padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:14px;cursor:pointer;">'
            + '<input type="checkbox" class="mcq-sub-cb" data-unit="' + safeU + '" data-sub="' + safeS + '" data-count="' + qCount + '" ' + (checked ? 'checked' : '') + ' onclick="event.stopPropagation(); mcqSubToggle(\'' + safeU + '\', \'' + safeS + '\', this.checked)" style="transform:scale(1.3);accent-color:#72efdd;cursor:pointer;flex-shrink:0;">'
            + '<div style="flex:1;" onclick="mcqSubToggle(\'' + safeU + '\', \'' + safeS + '\', !this.parentElement.querySelector(\'input\').checked)">'
            + '<div style="color:white;font-size:0.95em;font-weight:600;">' + sub + '</div>'
            + '<div style="color:#a0a8b4;font-size:0.75em;margin-top:2px;">' + qCount + ' questions</div>'
            + '</div></div>';
    });

    html += '</div>'
        + '<div style="display:flex;gap:8px;margin:18px 0;">'
        + '<button type="button" onclick="mcqSubSelectAll(\'' + safeU + '\', true)" style="flex:1;background:#2b3a55;color:#72efdd;border:1px solid #3e506e;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;margin:0;">✓ All</button>'
        + '<button type="button" onclick="mcqSubSelectAll(\'' + safeU + '\', false)" style="flex:1;background:#2b3a55;color:#a0a8b4;border:1px solid #3e506e;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;margin:0;">✗ None</button>'
        + '</div>'
        + '<div id="mcq-sub-summary" style="background:#0d1b2a;border:1px solid #3e506e;border-radius:8px;padding:12px;text-align:center;color:#a0a8b4;font-size:0.88em;margin-bottom:16px;"></div>'
        + '<div style="display:flex;gap:8px;">'
        + '<button type="button" onclick="mcqSubBack()" style="flex:1;background:#2b3a55;color:white;border:1px solid #3e506e;padding:14px;border-radius:8px;font-weight:700;cursor:pointer;margin:0;">← Back</button>'
        + '<button type="button" onclick="mcqSubContinue()" style="flex:2;background:#28a745;color:white;border:none;padding:14px;border-radius:8px;font-weight:700;cursor:pointer;margin:0;">Continue →</button>'
        + '</div>'
        + '</div>';

    container.innerHTML = html;
    mcqSubUpdateSummary(unit);
}

function mcqSubToggle(unit, sub, checked) {
    if (!mcqSetupState.selectedSubs[unit]) mcqSetupState.selectedSubs[unit] = new Set();
    if (checked) mcqSetupState.selectedSubs[unit].add(sub);
    else mcqSetupState.selectedSubs[unit].delete(sub);
    document.querySelectorAll('.mcq-sub-row').forEach(function (row) {
        const cb = row.querySelector('input');
        if (!cb) return;
        row.style.border = cb.checked ? '2px solid #28a745' : '2px solid #2b3a55';
    });
    mcqSubUpdateSummary(unit);
}

function mcqSubSelectAll(unit, checked) {
    const tree = buildMcqTopicIndex(currentMcqData);
    if (checked) mcqSetupState.selectedSubs[unit] = new Set(Object.keys(tree[unit]));
    else mcqSetupState.selectedSubs[unit] = new Set();
    renderMcqSubTopicMenu();
}

function mcqSubUpdateSummary(unit) {
    const el = document.getElementById('mcq-sub-summary');
    if (!el) return;
    const tree = buildMcqTopicIndex(currentMcqData);
    const subs = mcqSetupState.selectedSubs[unit] || new Set();
    let qCount = 0;
    subs.forEach(function (s) { qCount += ((tree[unit] && tree[unit][s]) || []).length; });
    if (subs.size === 0) {
        el.innerHTML = 'No sub-topics selected in this unit';
    } else {
        el.innerHTML = '<strong style="color:#72efdd;">' + subs.size + '</strong> of '
            + Object.keys(tree[unit]).length + ' sub-topics · '
            + '<strong style="color:#72efdd;">' + qCount + '</strong> questions';
    }
}

function mcqSubBack() {
    if (mcqSetupState.subScreenIndex > 0) {
        mcqSetupState.subScreenIndex--;
        renderMcqSubTopicMenu();
    } else {
        renderMcqMenu();
    }
}

function mcqSubContinue() {
    const unit = mcqSetupState.orderedUnits[mcqSetupState.subScreenIndex];
    const subs = mcqSetupState.selectedSubs[unit];

    if (!subs || subs.size === 0) {
        const proceed = confirm('No sub-topics selected in ' + unit + '.\n\nSkip this unit?');
        if (!proceed) return;
        mcqSetupState.selectedUnits.delete(unit);
        const idx = mcqSetupState.orderedUnits.indexOf(unit);
        if (idx > -1) mcqSetupState.orderedUnits.splice(idx, 1);
        if (mcqSetupState.subScreenIndex >= mcqSetupState.orderedUnits.length) {
            renderMcqSetupScreen();
        } else {
            renderMcqSubTopicMenu();
        }
        return;
    }

    mcqSetupState.subScreenIndex++;
    if (mcqSetupState.subScreenIndex >= mcqSetupState.orderedUnits.length) {
        renderMcqSetupScreen();
    } else {
        renderMcqSubTopicMenu();
    }
}

// ────────────────────────────────────────────────────────────
// ── Paid wizard screen 3: count + shuffle options ──────────
// ────────────────────────────────────────────────────────────
function renderMcqSetupScreen() {
    const container = document.getElementById('quiz-form');
    container.innerHTML = '';
    document.getElementById('result').innerHTML = '';
    currentQuizType = 'mcqSetup';
    updateProgress(0, 0);

    const tree = buildMcqTopicIndex(currentMcqData);

    let poolSize = 0;
    mcqSetupState.selectedUnits.forEach(function (u) {
        const subs = mcqSetupState.selectedSubs[u];
        if (!subs) return;
        subs.forEach(function (s) { poolSize += ((tree[u] && tree[u][s]) || []).length; });
    });

    if (poolSize === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px 20px;">'
            + '<h3>⚠️ No questions selected</h3>'
            + '<p style="color:#a0a8b4;">Nothing to quiz on with the current selection.</p>'
            + '<button class="restart-button" onclick="renderMcqMenu()" style="margin-top:12px;">← Back to topics</button>'
            + '</div>';
        return;
    }

    if (mcqSetupState.count > poolSize) mcqSetupState.count = poolSize;
    if (mcqSetupState.count < 1) mcqSetupState.count = Math.min(10, poolSize);

    const presets = [5, 10, 20, 30, 50].filter(function (n) { return n <= poolSize; });

    let html = '<div style="max-width:560px;margin:0 auto;">'
        + '<div style="text-align:center;margin-bottom:22px;">'
        + '<h2 style="color:white;margin:0 0 4px 0;">⚙️ Quiz Setup</h2>'
        + '<p style="color:#a0a8b4;font-size:0.85em;margin:0;">' + mcqSetupState.selectedUnits.size + ' units · ' + poolSize + ' questions available</p>'
        + '</div>'
        + '<div style="background:#1e2a3a;border:1px solid #2b3a55;border-radius:10px;padding:16px;margin-bottom:16px;">'
        + '<div style="font-size:0.78em;color:#a0a8b4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;">Number of Questions</div>'
        + '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:12px;">'
        + presets.map(function (n) {
            return '<button type="button" onclick="mcqSetCount(' + n + ')" data-preset="' + n + '" style="flex:1;min-width:52px;background:' + (n === mcqSetupState.count ? '#28a745' : '#2b3a55') + ';color:white;border:none;padding:10px 8px;border-radius:8px;font-weight:700;cursor:pointer;margin:0;font-size:0.9em;">' + n + '</button>';
        }).join('')
        + '<button type="button" onclick="mcqSetCount(' + poolSize + ')" data-preset="' + poolSize + '" style="flex:1;min-width:52px;background:' + (poolSize === mcqSetupState.count ? '#28a745' : '#2b3a55') + ';color:' + (poolSize === mcqSetupState.count ? 'white' : '#ffc107') + ';border:none;padding:10px 8px;border-radius:8px;font-weight:700;cursor:pointer;margin:0;font-size:0.9em;">ALL</button>'
        + '</div>'
        + '<input type="number" id="mcq-count-input" value="' + mcqSetupState.count + '" min="1" max="' + poolSize + '" oninput="mcqOnCustomCount(this.value)" style="width:100%;padding:10px;border-radius:8px;border:1px solid #3e506e;background:#0d1b2a;color:white;box-sizing:border-box;text-align:center;font-size:0.95em;">'
        + '</div>'
        + '<div style="background:#1e2a3a;border:1px solid #2b3a55;border-radius:10px;padding:16px;margin-bottom:20px;">'
        + '<div style="font-size:0.78em;color:#a0a8b4;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:10px;">Shuffling</div>'
        + '<label style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;cursor:pointer;">'
        + '<span style="color:#e0e6ed;font-size:0.9em;">🔀 Shuffle question order</span>'
        + '<input type="checkbox" ' + (mcqSetupState.shuffleQs ? 'checked' : '') + ' onchange="mcqSetupState.shuffleQs = this.checked" style="transform:scale(1.2);accent-color:#72efdd;"></label>'
        + '<label style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-top:1px solid #2b3a55;cursor:pointer;">'
        + '<span style="color:#e0e6ed;font-size:0.9em;">🔀 Shuffle answer choices</span>'
        + '<input type="checkbox" ' + (mcqSetupState.shuffleOpts ? 'checked' : '') + ' onchange="mcqSetupState.shuffleOpts = this.checked" style="transform:scale(1.2);accent-color:#72efdd;"></label>'
        + '<label style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-top:1px solid #2b3a55;cursor:pointer;">'
        + '<span style="color:#e0e6ed;font-size:0.9em;">🌱 Keep questions grouped by sub-topic</span>'
        + '<input type="checkbox" ' + (mcqSetupState.groupByTopic ? 'checked' : '') + ' onchange="mcqSetupState.groupByTopic = this.checked" style="transform:scale(1.2);accent-color:#72efdd;"></label>'
        + '</div>'
        + '<div style="display:flex;gap:8px;">'
        + '<button type="button" onclick="mcqSubBack()" style="flex:1;background:#2b3a55;color:white;border:1px solid #3e506e;padding:14px;border-radius:8px;font-weight:700;cursor:pointer;margin:0;">⬅ Back</button>'
        + '<button type="button" onclick="startSelectedMcq()" style="flex:2;background:#28a745;color:white;border:none;padding:14px;border-radius:8px;font-weight:700;cursor:pointer;margin:0;">🚀 Start Quiz</button>'
        + '</div>'
        + '</div>';

    container.innerHTML = html;
}

function mcqSetCount(n) {
    mcqSetupState.count = n;
    const input = document.getElementById('mcq-count-input');
    if (input) input.value = n;
    document.querySelectorAll('#quiz-form button[data-preset]').forEach(function (b) {
        const isActive = parseInt(b.dataset.preset) === n;
        const isAll = b.textContent.trim() === 'ALL';
        b.style.background = isActive ? '#28a745' : '#2b3a55';
        b.style.color = isActive ? 'white' : (isAll ? '#ffc107' : 'white');
    });
}

function mcqOnCustomCount(value) {
    const n = parseInt(value);
    if (!isNaN(n) && n > 0) mcqSetupState.count = n;
    document.querySelectorAll('#quiz-form button[data-preset]').forEach(function (b) {
        b.style.background = '#2b3a55';
        b.style.color = b.textContent.trim() === 'ALL' ? '#ffc107' : 'white';
    });
}

// ────────────────────────────────────────────────────────────
// ── Pure question picker ───────────────────────────────────
// ────────────────────────────────────────────────────────────
function buildMcqQuiz(tree, state, opts) {
    const shuffleQs = opts.shuffleQs;
    const shuffleOpts = opts.shuffleOpts;
    const groupByTopic = opts.groupByTopic;

    let pool = [];
    state.selectedUnits.forEach(function (unit) {
        const subs = state.selectedSubs[unit];
        if (!subs) return;
        subs.forEach(function (sub) {
            const bucket = (tree[unit] && tree[unit][sub]) || [];
            pool.push.apply(pool, bucket);
        });
    });
    if (pool.length === 0) return [];

    if (groupByTopic) {
        const groups = {};
        const groupKeys = [];
        pool.forEach(function (q) {
            const k = (q.mainTopic || 'Ungrouped') + '::' + (q.topic || 'General');
            if (!groups[k]) { groups[k] = []; groupKeys.push(k); }
            groups[k].push(q);
        });
        const orderedGroups = groupKeys.map(function (k) { return groups[k]; });
        if (shuffleQs) orderedGroups.forEach(function (g) { shuffle(g); });

        const targetCount = Math.max(1, parseInt(state.count) || 10);
        pool = [];
        let i = 0;
        while (pool.length < targetCount) {
            let added = false;
            for (const g of orderedGroups) {
                if (i < g.length) {
                    pool.push(g[i]);
                    added = true;
                    if (pool.length >= targetCount) break;
                }
            }
            if (!added) break;
            i++;
        }
    } else if (shuffleQs) {
        shuffle(pool);
    }

    let count = parseInt(state.count) || 10;
    if (count > pool.length) count = pool.length;
    if (count < 1) count = 1;

    let picked = pool.slice(0, count);

    picked = picked.map(function (q) {
        return shuffleOpts ? shuffleQuestionOptions(q) : Object.assign({}, q);
    });

    return picked;
}

function startSelectedMcq() {
    const tree = buildMcqTopicIndex(currentMcqData);
    const opts = {
        shuffleQs:    mcqSetupState.shuffleQs,
        shuffleOpts:  mcqSetupState.shuffleOpts,
        groupByTopic: mcqSetupState.groupByTopic
    };

    let poolSize = 0;
    mcqSetupState.selectedUnits.forEach(function (u) {
        const subs = mcqSetupState.selectedSubs[u];
        if (!subs) return;
        subs.forEach(function (s) { poolSize += ((tree[u] && tree[u][s]) || []).length; });
    });

    const requested = parseInt(mcqSetupState.count) || 10;
    if (requested > poolSize) {
        showAppNotification('ℹ️ Only ' + poolSize + ' available. Using all.', "info", 2000);
    }

    const questions = buildMcqQuiz(tree, mcqSetupState, opts);
    if (questions.length === 0) {
        showAppNotification("⚠️ No questions match your selection", "warning");
        return;
    }

    currentQuizData      = questions;
    currentQuizType      = 'mcq';
    currentQuestionIndex = 0;
    currentScore         = 0;
    isSubmissionLocked   = false;

    logAnalyticsEvent('quiz_start',
        'MCQ · ' + mcqSetupState.selectedUnits.size + ' units · ' + questions.length + 'Q');

    document.getElementById("result").innerHTML = "";
    displayMcqQuestion();
}

// ────────────────────────────────────────────────────────────
// ── Short Answer entry (demo contract unchanged) ────────────
// ────────────────────────────────────────────────────────────
function renderShortAnswers() {
    if (!hasFullAccess) {
        if (blockDemo('shortAnswer')) return;
        startActualShortAnswer(10);
        return;
    }

    const totalAvailable = currentShortData.length;

    if (totalAvailable <= 5) {
        startActualShortAnswer(totalAvailable);
        return;
    }

    const container = document.getElementById("quiz-form");
    const steps = [5, 10, 20, 30, 40, 50, totalAvailable];
    const stepLabels = ['5', '10', '20', '30', '40', '50', 'ALL'];

    container.innerHTML = `
        <div style="background:#1e2a3a; padding:30px; border-radius:15px; border:2px solid #ffc107; text-align:center; max-width:450px; margin:20px auto;">
            <h2 style="color:white; margin-bottom:10px;">✍️ Premium Short Answer Setup</h2>
            <p style="color:#a0a8b4; margin-bottom:20px;">Choose your practice size</p>

            <div style="margin:30px 0;">
                <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin:20px 0;">
                    ${steps.map((step, index) => `
                        <button onclick="selectShortAnswerStep(${step}, '${stepLabels[index]}')"
                            style="flex:1; min-width:45px; background:${step === 10 ? '#28a745' : '#2b3a55'};
                                   color:white; border:none; padding:12px 8px; border-radius:8px;
                                   font-weight:bold; cursor:pointer;">
                            ${stepLabels[index]}
                        </button>
                    `).join('')}
                </div>

                <div style="margin-top:25px; padding-top:20px; border-top:1px solid #3e506e;">
                    <p style="color:#a0a8b4; margin-bottom:10px;">Custom number:</p>
                    <div style="display:flex; gap:10px;">
                        <input type="number" id="custom-sa-count" min="1" max="${totalAvailable}" value="10"
                               style="flex:2; padding:12px; border-radius:8px; border:1px solid #3e506e;
                                      background:#0d1b2a; color:white;">
                        <button onclick="startCustomShortAnswer()"
                                style="flex:1; background:#007bff; color:white; border:none;
                                       padding:12px; border-radius:8px; font-weight:bold; cursor:pointer;">
                            Go
                        </button>
                    </div>
                </div>

                <div style="margin-top:20px; color:#ffc107; background:#0d1b2a; padding:10px; border-radius:6px;">
                    📚 ${totalAvailable} questions available
                </div>
            </div>

            <div style="margin-top:20px;">
                <button onclick="exitQuiz()" class="back-button" style="margin-top:0;">⬅️ Back</button>
            </div>
        </div>
    `;
}

function displayMcqQuestion() {
    isSubmissionLocked = false; 
    const container = document.getElementById("quiz-form");
    const q = currentQuizData[currentQuestionIndex];
    updateProgress(currentQuestionIndex + 1, currentQuizData.length);
    
    if (!q) return showFinalMcqScore();
    
    let html = `
        <div class="question-header"><h3>MCQ ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3></div>
        <div class="question-box">${parseKaeriMarkdown(q.q)}<div class="options">
    `;
    
    if (q.options) {
        q.options.forEach((opt, i) => {
            html += `<label><input type="radio" name="mcq" value="${i}"/> ${String.fromCharCode(65 + i)}. ${parseKaeriMarkdown(opt)}</label>`;
        });
    }
    
    html += `</div><button id="mcq-submit-btn" onclick="checkMcqAnswer()">✅ Submit</button></div>`;
    container.innerHTML = html;
    
    renderMath();
    document.getElementById("result").innerHTML = "";
    _focusScreen();
    readCurrentQuestion();
}

function checkMcqAnswer() {
    if (isSubmissionLocked) return;
    const selected = document.querySelector('input[name="mcq"]:checked');
    if (!selected) return showAppNotification("Select an option!", "warning");

    isSubmissionLocked = true;
    const submitBtn = document.getElementById("mcq-submit-btn");
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
        submitBtn.style.backgroundColor = "#6c757d"; 
    }
    document.querySelectorAll('input[name="mcq"]').forEach(input => input.disabled = true);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    const q = currentQuizData[currentQuestionIndex];
    const userAnswer = parseInt(selected.value);
    let feedbackText = "";
    
    if (userAnswer === q.correct) {
        currentScore++;
        resultDiv.innerHTML = "<p>✔️ Correct!</p>";
        feedbackText = "Correct!";
        try { recordMcqAnswer(q, true); } catch (e) {}
    } else {
        resultDiv.innerHTML = `<p>❌ Correct: ${String.fromCharCode(65 + q.correct)}. ${parseKaeriMarkdown(q.options[q.correct])}</p>`;
        feedbackText = `Wrong. The correct answer is option ${String.fromCharCode(65 + q.correct)}.`;
        try { recordMcqAnswer(q, false); } catch (e) {}
    }
    
    const explanationBox = `<div class="explanation-box">${parseKaeriMarkdown(q.explanation || '')}</div>`;
    resultDiv.innerHTML += explanationBox;
    feedbackText += ` Explanation: ${humanizeLaTeX(q.explanation || '')}`;
    
    currentQuestionIndex++;

    const isLastMcq = currentQuestionIndex >= currentQuizData.length;
    const nextBtn = document.createElement("button");
    nextBtn.innerText = isLastMcq ? "Finish Quiz" : "Next ➡️";
    nextBtn.onclick = isLastMcq
        ? () => { document.getElementById("result").innerHTML = ""; showFinalMcqScore(); }
        : displayMcqQuestion;
    resultDiv.appendChild(nextBtn);

    renderMath();
    readText(feedbackText); 
}

function showFinalMcqScore() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    updateProgress(currentQuizData.length, currentQuizData.length);
    const percent = Math.round((currentScore / currentQuizData.length) * 100);
    let comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
    
    container.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p><p><em>${comment}</em></p>`;
    
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "🔍 Try Again";
    restartBtn.className = "restart-button";
    restartBtn.style.marginRight = "10px";
    restartBtn.onclick = renderQuiz;
    container.appendChild(restartBtn);

    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(currentScore, currentQuizData.length, "MCQ");
    container.appendChild(challengeBtn);

    try {
        const poolN = getMcqWrongPool().length;
        if (poolN > 0) {
            const poolBtn = document.createElement("button");
            poolBtn.type = "button";
            poolBtn.innerText = "🔁 Practice " + poolN + " to fix";
            poolBtn.style.backgroundColor = "#6610f2";
            poolBtn.style.color = "white";
            poolBtn.style.marginLeft = "10px";
            poolBtn.onclick = startMcqWrongPoolPractice;
            container.appendChild(poolBtn);
        }
    } catch (e) {}

    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);

    const switchDiv = document.createElement("div");
    switchDiv.style.cssText = "margin-top:30px; padding:18px; background:#0d1b2a; border-radius:12px; border:1px solid #3e506e; text-align:center;";
    switchDiv.innerHTML = `
        <p style="color:#a0a8b4; margin:0 0 12px 0; font-size:0.9em;">🔄 <strong style="color:#72efdd;">Switch Learning Mode</strong></p>
        <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center;">
            <button onclick="renderShortAnswers()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">✍️ Short Answer</button>
            <button onclick="renderEssaySimulation()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📄 Essay Sim</button>
            <button onclick="renderFlashcardTopics()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">🃏 Flashcards</button>
        </div>
    `;
    container.appendChild(switchDiv);

    recordProgressSession('mcq', currentScore, currentQuizData.length, `${currentCourse} ${currentTerm} MCQ`);
    logAnalyticsEvent('quiz_complete', `MCQ score: ${currentScore}/${currentQuizData.length} (${percent}%)`);
}

function displayShortAnswerQuestion() {
    isSubmissionLocked = false;
    const container = document.getElementById("quiz-form");
    const q = currentQuizData[currentQuestionIndex];
    updateProgress(currentQuestionIndex + 1, currentQuizData.length);
    if (!q) return showFinalShortAnswerScore();
    
    container.innerHTML = `<h3>Short Answer ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3><div class="question-box">${parseKaeriMarkdown(q.q)}</div><textarea id="short-answer-input"></textarea><button id="sa-submit-btn" onclick="checkShortAnswer()">✅ Submit</button>`;
    
    renderMath();
    document.getElementById("result").innerHTML = "";
    _focusScreen();
    readCurrentQuestion();
}

function checkShortAnswer() {
    if (isSubmissionLocked) return;
    const inputEl = document.getElementById("short-answer-input");
    const ans = inputEl.value.trim().toLowerCase();
    
    if (!ans) return showAppNotification("Please type your answer!", "warning");
    isSubmissionLocked = true;

    const submitBtn = document.getElementById("sa-submit-btn");
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Checked ✓";
        submitBtn.style.backgroundColor = "#6c757d";
    }
    inputEl.disabled = true;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    const q = currentQuizData[currentQuestionIndex];
    const matched = q.keywords.some(k => ans.includes(k.toLowerCase()));
    let feedbackText = "";
    
    if (matched) {
        currentScore++;
        resultDiv.innerHTML = "<p>✔️ Correct!</p>";
        feedbackText = "Correct!";
    } else {
        resultDiv.innerHTML = `<p>❌ Keywords: ${q.keywords.join(', ')}</p>`;
        feedbackText = `Wrong. The required keywords are: ${q.keywords.join(', ')}.`;
    }
    
    const explanationBox = `<div class="explanation-box">${parseKaeriMarkdown(q.explanation || '')}</div>`;
    resultDiv.innerHTML += explanationBox;
    feedbackText += ` Explanation: ${humanizeLaTeX(q.explanation || '')}`;
    
    currentQuestionIndex++;

    const isLastSA = currentQuestionIndex >= currentQuizData.length;
    const nextBtn = document.createElement("button");
    nextBtn.innerText = isLastSA ? "Finish" : "Next ➡️";
    nextBtn.onclick = isLastSA
        ? () => { document.getElementById("result").innerHTML = ""; showFinalShortAnswerScore(); }
        : displayShortAnswerQuestion;
    resultDiv.appendChild(nextBtn);

    renderMath();
    readText(feedbackText); 
}

function showFinalShortAnswerScore() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    updateProgress(currentQuizData.length, currentQuizData.length);
    const percent = Math.round((currentScore / currentQuizData.length) * 100);
    let comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
    
    container.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p><p><em>${comment}</em></p>`;
    
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "🔁 Try Again";
    restartBtn.className = "restart-button";
    restartBtn.style.marginRight = "10px";
    restartBtn.onclick = renderShortAnswers;
    container.appendChild(restartBtn);

    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(currentScore, currentQuizData.length, "Short Answer");
    container.appendChild(challengeBtn);

    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);

    const switchDiv = document.createElement("div");
    switchDiv.style.cssText = "margin-top:30px; padding:18px; background:#0d1b2a; border-radius:12px; border:1px solid #3e506e; text-align:center;";
    switchDiv.innerHTML = `
        <p style="color:#a0a8b4; margin:0 0 12px 0; font-size:0.9em;">🔄 <strong style="color:#72efdd;">Switch Learning Mode</strong></p>
        <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center;">
            <button onclick="renderQuiz()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📝 MCQ</button>
            <button onclick="renderEssaySimulation()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📄 Essay Sim</button>
            <button onclick="renderFlashcardTopics()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">🃏 Flashcards</button>
        </div>
    `;
    container.appendChild(switchDiv);

    recordProgressSession('shortAnswer', currentScore, currentQuizData.length, `${currentCourse} ${currentTerm} Short Answer`);
    logAnalyticsEvent('quiz_complete', `Short Answer score: ${currentScore}/${currentQuizData.length} (${percent}%)`);
}

function renderEssaySimulation() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    document.getElementById("result").innerHTML = "";

    currentQuizData = currentEssayData; 
    if (currentQuizData.length === 0) {
        container.innerHTML = "<p>No essay simulations available for this term yet.</p>";
        updateProgress(0, 0);
        return;
    }

    currentQuizType = 'essay'; 
    updateProgress(0, 0);

    const header = document.createElement("h2");
    header.innerText = "Select Essay Topic";
    header.style.textAlign = "center"; 
    header.style.marginBottom = "25px";
    container.appendChild(header);

    const listDiv = document.createElement('div');
    listDiv.className = 'flashcard-topic-buttons'; 

    currentQuizData.forEach((essay, index) => {
        const btn = document.createElement("button");
        btn.textContent = essay.title; 
        btn.onclick = () => attemptStartEssay(index); 
        listDiv.appendChild(btn);
    });

    container.appendChild(listDiv);
}

function attemptStartEssay(index) {
    if (blockDemo('essay')) return; 
    startSpecificEssay(index);
}

function startSpecificEssay(index) {
    currentEssay = currentQuizData[index];
    currentStepIndex = 0;
    essayScore = 0;
    document.getElementById("result").innerHTML = "";
    showEssayStep(0);
    logAnalyticsEvent('essay_start', currentEssay.title);
}

function showEssayStep(index) {
    isSubmissionLocked = false;
    const container = document.getElementById("quiz-form");
    const essay = currentEssay;
    const step = essay.steps[index];
    updateProgress(index + 1, essay.steps.length);
    if (!step) return showFinalEssayScore();
    
    let html = `
        <div class="question-header"><h3>📄 ${essay.title} — Step ${index + 1} of ${essay.steps.length}</h3><p>Topic: ${essay.topic} | ${essay.year}</p></div>
        <div class="question-box"><p><strong>Q:</strong> ${parseKaeriMarkdown(step.q)}</p><div class="options">
    `;
    step.options.forEach((opt, i) => {
        html += `<label class="option"><input type="radio" name="step-option" value="${i}" /> <span>${String.fromCharCode(65 + i)}. ${parseKaeriMarkdown(opt)}</span></label>`;
    });
    
    html += `</div><button id="essay-submit-btn" onclick="checkEssayStep()">✅ Submit Step</button></div>`;
    container.innerHTML = html;
    
    renderMath();
    document.getElementById("result").innerHTML = "";
    _focusScreen();
    readCurrentQuestion();
}

function checkEssayStep() {
    if (isSubmissionLocked) return;
    const selectedOption = document.querySelector('input[name="step-option"]:checked');
    if (!selectedOption) return showAppNotification("Please select an option!", "warning");

    isSubmissionLocked = true;
    const submitBtn = document.getElementById("essay-submit-btn");
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
        submitBtn.style.backgroundColor = "#6c757d";
    }
    document.querySelectorAll('input[name="step-option"]').forEach(input => input.disabled = true);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    const essay = currentEssay;
    const step = essay.steps[currentStepIndex];
    const userAnswer = parseInt(selectedOption.value);
    const correct = userAnswer === step.correct;
    let feedbackText = "";
    
    if (correct) {
        essayScore++;
        resultDiv.innerHTML = "<p>✔️ Correct!</p>";
        feedbackText = "Correct!";
    } else {
        resultDiv.innerHTML = `<p>❌ Correct: ${String.fromCharCode(65 + step.correct)}. ${parseKaeriMarkdown(step.options[step.correct])}</p>`;
        feedbackText = `Wrong. The correct option is ${String.fromCharCode(65 + step.correct)}.`;
    }
    
    const explanationBox = `<div class="explanation-box">${parseKaeriMarkdown(step.explanation || '')}</div>`;
    resultDiv.innerHTML += explanationBox;
    feedbackText += ` Explanation: ${humanizeLaTeX(step.explanation || '')}`;

    const isLastStep = currentStepIndex >= essay.steps.length - 1;
    const nextBtn = document.createElement("button");
    nextBtn.innerText = isLastStep ? "Finish" : "Next ➡️";
    nextBtn.onclick = () => {
        if (!isLastStep) {
            currentStepIndex++;
            showEssayStep(currentStepIndex);
        } else {
            document.getElementById("result").innerHTML = "";
            showFinalEssayScore();
        }
    };
    resultDiv.appendChild(nextBtn);

    renderMath();
    readText(feedbackText); 
}

function showFinalEssayScore() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    updateProgress(currentEssay.steps.length, currentEssay.steps.length);
    
    const percent = Math.round((essayScore / currentEssay.steps.length) * 100);
    let comment = percent >= 90 ? "🎉 Excellent process understanding!" : percent >= 70 ? "✅ Good step-by-step grasp!" : percent >= 50 ? "⚠️ Some steps need revision." : "❌ Keep improving!";
    
    container.innerHTML = `<h2>Simulation Complete!</h2><p>Your Score: ${essayScore} / ${currentEssay.steps.length} (${percent}%)</p><p><em>${comment}</em></p>`;
    
    const retryBtn = document.createElement("button");
    retryBtn.innerText = "🔁 Retry This Essay";
    retryBtn.className = "restart-button";
    retryBtn.style.marginRight = "10px";
    retryBtn.onclick = () => attemptStartEssay(currentQuizData.indexOf(currentEssay));
    container.appendChild(retryBtn);

    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(essayScore, currentEssay.steps.length, "Essay Simulation");
    container.appendChild(challengeBtn);

    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);

    const backBtn = document.createElement("button");
    backBtn.innerText = "⬅️ Back to Topics";
    backBtn.className = "back-button"; 
    backBtn.onclick = renderEssaySimulation;
    container.appendChild(backBtn);

    const switchDiv = document.createElement("div");
    switchDiv.style.cssText = "margin-top:30px; padding:18px; background:#0d1b2a; border-radius:12px; border:1px solid #3e506e; text-align:center;";
    switchDiv.innerHTML = `
        <p style="color:#a0a8b4; margin:0 0 12px 0; font-size:0.9em;">🔄 <strong style="color:#72efdd;">Switch Learning Mode</strong></p>
        <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center;">
            <button onclick="renderQuiz()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📝 MCQ</button>
            <button onclick="renderShortAnswers()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">✍️ Short Answer</button>
            <button onclick="renderFlashcardTopics()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">🃏 Flashcards</button>
        </div>
    `;
    container.appendChild(switchDiv);

    recordProgressSession('essay', essayScore, currentEssay.steps.length, currentEssay.title);
    logAnalyticsEvent('essay_complete', `${currentEssay.title} score: ${essayScore}/${currentEssay.steps.length} (${percent}%)`);
}


// ============================================================
// === 7. SRS ENGINE (SPACED REPETITION - SM-2 ALGORITHM) ===
// ============================================================

const SRS_KEY_PREFIX = "kaeri_srs_v1_";

// 1. Get SRS Data for a specific card
function getCardSRS(topic, cardIndex) {
    const key = `${SRS_KEY_PREFIX}${currentTermKey}`;
    const allData = JSON.parse(localStorage.getItem(key) || "{}");
    if (!allData[topic]) allData[topic] = {};
    return allData[topic][cardIndex] || { 
        interval: 0, repetition: 0, efactor: 2.5, dueDate: 0, isNew: true
    };
}

// 2. Save SRS Data
function saveCardSRS(topic, cardIndex, srsData) {
    const key = `${SRS_KEY_PREFIX}${currentTermKey}`;
    const allData = JSON.parse(localStorage.getItem(key) || "{}");
    if (!allData[topic]) allData[topic] = {};
    allData[topic][cardIndex] = srsData;
    localStorage.setItem(key, JSON.stringify(allData));
}

// 3. The Algorithm (Calculate next review date)
function calculateNextReview(topic, cardIndex, quality) {
    let card = getCardSRS(topic, cardIndex);
    
    if (quality < 3) {
        card.repetition = 0;
        card.interval = 1; 
    } else {
        if (card.repetition === 0) {
            switch(quality) {
                case 3: card.interval = 2; break; 
                case 4: card.interval = 4; break; 
                case 5: card.interval = 7; break; 
                default: card.interval = 1;
            }
        } else if (card.repetition === 1) {
            card.interval = (card.interval >= 6) ? Math.round(card.interval * card.efactor) : 6;
        } else {
            card.interval = Math.round(card.interval * card.efactor);
        }
        card.repetition += 1;
    }

    card.efactor = card.efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (card.efactor < 1.3) card.efactor = 1.3;

    const now = new Date();
    card.dueDate = now.setDate(now.getDate() + card.interval);
    card.isNew = false;

    saveCardSRS(topic, cardIndex, card);
    return card;
}


// ============================================================
// === 7b. MCQ WRONG-ANSWER POOL (replaces MCQ SRS) ===
// ============================================================
// Flashcards keep SM-2 (Section 7). MCQs use an honest pool:
//   • a question enters "to fix" when answered wrong
//   • it leaves after MCQ_MASTERY_STREAK correct answers in a row
//   • answered right but not yet mastered (and never missed) = "building"
//   • never answered = "new"
// Right and wrong answers are both counted, so correct work shows up immediately.
// Records are small ({w,s,c,a,t}) and keyed by a hash of the question, per term:
//   w = times wrong, s = current right-in-a-row, c = times right, a = attempts, t = last seen

const MCQ_MASTERY_STREAK = 3;

function _mcqPoolKey() {
    return 'kaeri_pool_v1_' + (currentTermKey || 'global');
}

function _hashStr(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(36);
}

/** Stable id for a question (works for shuffled copies too). */
function _mcqItemId(q) {
    if (!q) return '';
    const base = (q.id != null && String(q.id) !== '')
        ? 'id:' + q.id
        : (q.mainTopic || '') + '#' + (q.topic || '') + '#' + String(q.q || q.question || '');
    return base ? _hashStr(base) : '';
}

function _loadMcqPool() {
    let store = null;
    try {
        const raw = localStorage.getItem(_mcqPoolKey());
        if (raw) store = JSON.parse(raw);
    } catch (e) { store = null; }
    if (store && typeof store === 'object' && !Array.isArray(store)) return store;

    // First run for this term: carry over the previous "missed questions" list, if any.
    store = {};
    try {
        const legacyKey = 'kaeri_mcq_wrong_' + (currentTermKey || 'global');
        const raw = localStorage.getItem(legacyKey);
        if (raw) {
            const legacy = JSON.parse(raw);
            if (Array.isArray(legacy)) {
                legacy.forEach(function (lq) {
                    const id = _mcqItemId(lq);
                    if (id) store[id] = { w: 1, s: 0, c: 0, a: 1, t: Date.now() };
                });
            }
            localStorage.removeItem(legacyKey);
            _saveMcqPool(store);
        }
    } catch (e) {}
    return store;
}

function _saveMcqPool(store) {
    try { localStorage.setItem(_mcqPoolKey(), JSON.stringify(store || {})); } catch (e) { /* quota */ }
}

/** Call once per answered MCQ. */
function recordMcqAnswer(q, wasCorrect) {
    const id = _mcqItemId(q);
    if (!id) return;
    const store = _loadMcqPool();
    const rec = store[id] || { w: 0, s: 0, c: 0, a: 0, t: 0 };
    const prevC = (rec.c != null) ? rec.c : (rec.s || 0);   // older records: streak is the best count we have
    rec.t = Date.now();
    rec.a = (rec.a || 0) + 1;
    if (wasCorrect) {
        rec.s = (rec.s || 0) + 1;
        rec.c = prevC + 1;
    } else {
        rec.w = (rec.w || 0) + 1;
        rec.s = 0;
        rec.c = prevC;
    }
    store[id] = rec;
    _saveMcqPool(store);
}

function _isToFix(rec) { return !!rec && (rec.w || 0) > 0 && (rec.s || 0) < MCQ_MASTERY_STREAK; }

/**
 * Honest numbers for the current term.
 * toFix + building + mastered + fresh = total questions.
 * right / wrong = answers recorded so far (so correct work is visible, not only mistakes).
 */
function computeMcqPoolCounts() {
    const store = _loadMcqPool();
    let toFix = 0, building = 0, mastered = 0, fresh = 0, right = 0, wrong = 0;
    (currentMcqData || []).forEach(function (q) {
        const rec = store[_mcqItemId(q)];
        if (!rec) { fresh++; return; }
        const w = rec.w || 0, s = rec.s || 0;
        const c = (rec.c != null) ? rec.c : s;
        right += c; wrong += w;
        if (s >= MCQ_MASTERY_STREAK) mastered++;
        else if (w > 0) toFix++;
        else if (c > 0) building++;
        else fresh++;
    });
    return { toFix: toFix, building: building, mastered: mastered, fresh: fresh, right: right, wrong: wrong, attempts: right + wrong };
}

/** Questions currently in the pool (array of question objects). */
function getMcqWrongPool() {
    const store = _loadMcqPool();
    return (currentMcqData || []).filter(function (q) { return _isToFix(store[_mcqItemId(q)]); });
}

/** Wipes the tracking for this term (called after the student confirms in the reset dialog). */
function clearMcqWrongPool() {
    try {
        localStorage.removeItem(_mcqPoolKey());
        localStorage.removeItem('kaeri_mcq_wrong_' + (currentTermKey || 'global'));
    } catch (e) {}
}

function startWrongPoolQuiz() {
    const pool = getMcqWrongPool();
    if (!pool.length) {
        showAppNotification('🎉 Nothing to fix. Try new questions!', 'success', 2500);
        return;
    }
    // Free users: a pool session uses a demo attempt, same as any other MCQ run.
    if (!hasFullAccess) {
        if (!canUseDemo('mcq')) {
            showAppNotification('Demo limit reached. Unlock Full Access!', 'warning');
            openPaymentModal();
            return;
        }
        consumeDemoAttempt('mcq');
    }
    const container = document.getElementById('quiz-form');
    if (container) container.innerHTML = '';
    const result = document.getElementById('result');
    if (result) result.innerHTML = '';

    currentQuizData = shuffle(pool.map(shuffleQuestionOptions));
    currentQuizType = 'mcq';
    currentQuestionIndex = 0;
    currentScore = 0;
    isSubmissionLocked = false;
    logAnalyticsEvent('quiz_start', 'MCQ POOL · ' + currentQuizData.length + 'Q');
    displayMcqQuestion();
}
function startMcqWrongPoolPractice() { startWrongPoolQuiz(); }

/** Banner shown at the top of the MCQ menus. */
function _mcqPoolBannerHtml() {
    if (!currentMcqData || currentMcqData.length === 0) return '';
    let c;
    try { c = computeMcqPoolCounts(); } catch (e) { return ''; }
    const num = function (n, color) { return '<strong style="color:' + color + ';">' + n + '</strong>'; };
    const allDone = c.toFix === 0 && c.building === 0 && c.fresh === 0;
    const pct = c.attempts > 0 ? Math.round((c.right / c.attempts) * 100) : 0;

    return '<div id="mcq-pool-banner" style="background:#1e2a3a;border:1px solid #2b3a55;border-radius:10px;padding:14px;margin-bottom:16px;">'
        + '<div style="text-align:center;color:#e0e6ed;font-size:0.95em;">'
        + (allDone
            ? '🏆 All ' + num(c.mastered, '#28a745') + ' questions mastered!'
            : '<div style="display:flex;flex-wrap:wrap;gap:4px 14px;justify-content:center;">'
              + '<span>🎯 ' + num(c.toFix, '#ef4444') + ' to fix</span>'
              + '<span>📈 ' + num(c.building, '#ffc107') + ' building</span>'
              + '<span>✅ ' + num(c.mastered, '#28a745') + ' mastered</span>'
              + '<span>✨ ' + num(c.fresh, '#72efdd') + ' new</span>'
              + '</div>')
        + '</div>'
        + (c.attempts > 0
            ? '<div style="text-align:center;color:#a0a8b4;font-size:0.82em;margin-top:8px;">'
              + '✔ ' + num(c.right, '#28a745') + ' right · ✖ ' + num(c.wrong, '#ef4444') + ' wrong · ' + pct + '% accuracy</div>'
            : '')
        + ((c.toFix > 0 || c.building > 0)
            ? '<div style="text-align:center;color:#6c7a90;font-size:0.74em;margin-top:6px;">Get a question right ' + MCQ_MASTERY_STREAK + ' times in a row to master it.</div>'
            : '')
        + (c.toFix > 0
            ? '<button type="button" onclick="startWrongPoolQuiz()" style="width:100%;margin-top:10px;background:#dc3545;color:#fff;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;">Practice ' + c.toFix + ' to fix</button>'
            : '')
        + (c.attempts > 0
            ? '<div style="text-align:center;margin-top:8px;"><button type="button" onclick="askResetPool()" style="background:none;border:none;color:#8892b0;font-size:0.78em;text-decoration:underline;cursor:pointer;padding:6px;">Reset tracking</button></div>'
            : '')
        + '</div>';
}

/** Re-draws the banner in place (after a reset). */
function refreshMcqPoolBanner() {
    const el = document.getElementById('mcq-pool-banner');
    if (!el) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = _mcqPoolBannerHtml();
    if (tmp.firstElementChild) el.replaceWith(tmp.firstElementChild); else el.remove();
}

// ---------- Reset tracking (in-app confirm, not a browser popup) ----------
function askResetPool() { openOverlay(document.getElementById('pool-reset-modal')); }
function closePoolResetModal() { closeOverlay(document.getElementById('pool-reset-modal')); }
function confirmResetPool() {
    closePoolResetModal();
    clearMcqWrongPool();
    showAppNotification('🎯 Question tracking reset.', 'info', 2000);
    refreshMcqPoolBanner();
}

/** One-time cleanup of the retired MCQ spaced-repetition data. */
function _cleanupRetiredMcqSrs() {
    try {
        if (localStorage.getItem('pool_migrated_v1')) return;
        Object.keys(localStorage)
            .filter(function (k) { return k.indexOf('kaeri_mcq_srs_v1_') === 0; })
            .forEach(function (k) { localStorage.removeItem(k); });
        localStorage.setItem('pool_migrated_v1', '1');
    } catch (e) {}
}


// ============================================================
// === 8. FLASHCARD ENGINE - HYBRID MASTER (LINEAR + SRS) ===
// ============================================================

// --- TOPIC SELECTION & MODE CHOICE ---
function renderFlashcardTopics() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    document.getElementById("result").innerHTML = "";
    currentQuizType = 'flashcard';
    updateProgress(0, 0);

    if (Object.keys(currentFlashcardTopics).length === 0) {
        container.innerHTML = "<p>No flashcards available for this term.</p>";
        return;
    }

    const header = document.createElement("h2");
    header.innerText = "Select Flashcard Topic";
    header.style.textAlign = "center";
    header.style.marginBottom = "25px";
    container.appendChild(header);

    const listDiv = document.createElement('div');
    listDiv.className = 'flashcard-topic-buttons';
    
    for (const topic in currentFlashcardTopics) {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => attemptStartFlashcard(topic);
        listDiv.appendChild(btn);
    }
    container.appendChild(listDiv);
}

function attemptStartFlashcard(topic) {
    if (blockDemo('flashcard')) return;
    showFlashcardModeSelection(topic);
}

function showFlashcardModeSelection(topic) {
    const container = document.getElementById("quiz-form");
    const totalCards = currentFlashcardTopics[topic].length;
    
    // Calculate SRS Due Count
    const now = Date.now();
    let dueCount = 0;
    currentFlashcardTopics[topic].forEach((card, index) => {
        const srs = getCardSRS(topic, index);
        if (srs.isNew || srs.dueDate <= now) dueCount++;
    });

    // Render Choice Menu
    container.innerHTML = `
        <div style="text-align: center; animation: fadeIn 0.3s;">
            <h2 style="margin-bottom: 10px; color: white;">🗂️ ${topic}</h2>
            <p style="color: #a0a8b4; margin-bottom: 25px;">Choose your study method:</p>

            <div style="display: flex; flex-direction: column; gap: 15px; max-width: 450px; margin: 0 auto;">
                
                <!-- OPTION 1: LINEAR (Review All) -->
                <button onclick="startFlashcards('${topic}', 'linear')" 
                    style="background: #1e2a3a; border: 2px solid #72efdd; padding: 20px; border-radius: 12px; text-align: left; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <span style="font-size: 2em;">📖</span>
                        <div>
                            <div style="font-size: 1.2em; color: white; font-weight: bold;">Standard Review</div>
                            <div style="font-size: 0.9em; color: #a0a8b4; margin-top: 5px;">Review all <strong>${totalCards}</strong> cards in order. Perfect for cramming before a test.</div>
                        </div>
                    </div>
                </button>

                <!-- OPTION 2: SRS (Smart) -->
                <button onclick="startFlashcards('${topic}', 'srs')" 
                    style="background: #1e2a3a; border: 2px solid #ffc107; padding: 20px; border-radius: 12px; text-align: left; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <span style="font-size: 2em;">🧠</span>
                        <div style="flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 1.2em; color: white; font-weight: bold;">Smart SRS Mode</span>
                                <span style="background: ${dueCount > 0 ? '#ffc107' : '#28a745'}; color: #000; padding: 3px 10px; border-radius: 20px; font-size: 0.8em; font-weight: bold;">${dueCount} Due</span>
                            </div>
                            <div style="font-size: 0.9em; color: #a0a8b4; margin-top: 5px;">Algorithm-based. Focus only on what you are about to forget.</div>
                        </div>
                    </div>
                </button>

            </div>
            
            <button class="back-button" style="margin-top: 30px; background: transparent; color: #888; border: 1px solid #3e506e; padding: 10px 20px; border-radius: 20px;" onclick="renderFlashcardTopics()">Cancel</button>
        </div>
    `;
}

// --- INITIALIZATION LOGIC ---
function startFlashcards(topic, mode) {
    currentFlashcardTopic = topic;
    currentFlashcardMode = mode; // Store mode
    currentCardIndex = 0;
    isCardFront = true;
    
    const allCards = currentFlashcardTopics[topic];

    if (mode === 'srs') {
        // --- SRS PATH: Filter & Sort ---
        srsQueue = [];
        const now = Date.now();
        allCards.forEach((card, originalIndex) => {
            const srs = getCardSRS(topic, originalIndex);
            if (srs.isNew || srs.dueDate <= now) {
                srsQueue.push({
                    ...card,
                    originalIndex: originalIndex,
                    srsData: srs
                });
            }
        });

        // If no cards due
        if (srsQueue.length === 0) {
            const container = document.getElementById("quiz-form");
            container.innerHTML = `
            <div style="text-align: center; animation: fadeIn 0.5s;">
                <h2 style="font-size: 3em; margin-bottom: 10px;">🎉</h2>
                <h2 style="color: #28a745;">You're Caught Up!</h2>
                <p style="color: #a0a8b4; max-width: 400px; margin: 10px auto;">You have no cards due for review right now in SRS mode.</p>
                <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px; align-items: center;">
                    <button class="restart-button" onclick="startFlashcards('${topic}', 'linear')">📖 Switch to Standard Review</button>
                    <button class="back-button" onclick="renderFlashcardTopics()">⬅ Back to Topics</button>
                </div>
            </div>`;
            return;
        }

        srsQueue.sort((a, b) => a.srsData.dueDate - b.srsData.dueDate);
        currentFlashcards = srsQueue;

    } else {
        // --- LINEAR PATH: Load All ---
        currentFlashcards = allCards.map((card, index) => ({
            ...card,
            originalIndex: index
        }));
    }

    displayFlashcard();
    logAnalyticsEvent('flashcard_start', `${topic} (${mode} mode)`);
}

// --- DISPLAY ENGINE (HYBRID UI + SMART LAYOUT) ---
function displayFlashcard() {
    const container = document.getElementById("quiz-form");
    
    // Check completion
    if (currentCardIndex >= currentFlashcards.length) {
        return showFlashcardCompletion();
    }

    const cardObj = currentFlashcards[currentCardIndex]; 
    updateProgress(currentCardIndex + 1, currentFlashcards.length);
    
    // === SMART LAYOUT ANALYZER (STEM & SCROLL FIX) ===
    function getLayoutClass(text) {
        // 1. Detect Block Math ($$ ... $$) - Needs space & horizontal scroll
        const hasBlockMath = /\$\$|\\\[/.test(text);
        
        // 2. Detect SPECIFIC Chemistry & Physics Signals
        const hasScience = /(\\ce\{|\\pu\{|\\vec\{|\\int|\\sum|\\frac\{|\\sqrt\{)/.test(text);
    
        // 3. Detect Lists (Bullet points)
        const hasList = /^- /m.test(text) || /<ul>|<ol>|<li>/.test(parseKaeriMarkdown(text));
    
        // 4. Detect Text Length (lowered to 60 for mobile safety)
        const isLong = text.length > 60;
    
        // 5. Detect Newlines (3 or more lines)
        const hasBreaks = (text.match(/\n/g) || []).length > 2;
    
        // IF ANY of these are true, force Top Alignment
        if (hasBlockMath || hasScience || hasList || isLong || hasBreaks) {
            return "layout-detailed";
        }
        
        // Otherwise, center it nicely
        return "layout-center";
    }

    const frontLayout = getLayoutClass(cardObj.front);
    const backLayout = getLayoutClass(cardObj.back);
    const modeLabel = currentFlashcardMode === 'srs' ? "🧠 SRS Study" : "📖 Standard Review";

    // RENDER CARD HTML
    let html = `
        <h3 style="color: #a0a8b4; font-size: 0.9em; letter-spacing: 1px; text-transform: uppercase;">
            ${modeLabel}: ${currentFlashcardTopic} <span style="color: white;">(${currentCardIndex + 1} / ${currentFlashcards.length})</span>
        </h3>
        
        <div class="flashcard-wrapper">
            <div class="flashcard ${isCardFront ? '' : 'back-active'}" onclick="flipCard()">
                
                <!-- FRONT FACE -->
                <div class="card-face card-front ${frontLayout}">
                    ${parseKaeriMarkdown(cardObj.front)}
                    <div style="margin-top:20px; font-size:0.75em; color:#8892b0; font-style:italic; opacity:0.8;">(Tap to flip)</div>
                </div>

                <!-- BACK FACE -->
                <div class="card-face card-back ${backLayout}">
                    ${parseKaeriMarkdown(cardObj.back)}
                </div>

            </div>
        </div>
    `;

    // --- CONTROLS SECTION (THE HYBRID PART) ---
    html += `<div class="flashcard-nav-buttons" style="margin-top: 25px;">`;

    if (currentFlashcardMode === 'linear') {
        // === LINEAR CONTROLS (Prev / Flip / Next) ===
        const isLast = currentCardIndex === currentFlashcards.length - 1;
        html += `
            <button onclick="prevFlashcard()" ${currentCardIndex === 0 ? 'disabled' : ''} 
                style="background: #3e506e; border-radius: 8px; font-weight: bold;">⬅️ Prev</button>
            
            <button onclick="flipCard()" 
                style="background: #007bff; flex: 2; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 0 #0056b3;">🔄 Flip Card</button>
            
            <button onclick="nextFlashcard()" 
                style="background: ${isLast ? '#28a745' : '#3e506e'}; border-radius: 8px; font-weight: bold;">
                ${isLast ? 'Finish 🏁' : 'Next ➡️'}
            </button>
        `;
    } else {
        // === SRS CONTROLS (Show / Rate) ===
        if (isCardFront) {
            html += `<button onclick="flipCard()" style="width:100%; background:#007bff; padding: 15px; border-radius: 8px; font-weight: bold; color:white; box-shadow: 0 4px 0 #0056b3;">🔄 Show Answer</button>`;
        } else {
            html += `
                <div style="display:grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap:10px; width:100%;">
                    <button onclick="rateCard(0)" style="background:#dc3545; color: white; font-size:0.8em; padding:12px 2px; border-radius:8px;">❌ Again<br><small style="opacity:0.8">1d</small></button>
                    <button onclick="rateCard(3)" style="background:#ffc107; color: #333; font-size:0.8em; padding:12px 2px; border-radius:8px;">😬 Hard<br><small style="opacity:0.8">2d</small></button>
                    <button onclick="rateCard(4)" style="background:#28a745; color: white; font-size:0.8em; padding:12px 2px; border-radius:8px;">✅ Good<br><small style="opacity:0.8">4d</small></button>
                    <button onclick="rateCard(5)" style="background:#17a2b8; color: white; font-size:0.8em; padding:12px 2px; border-radius:8px;">🚀 Easy<br><small style="opacity:0.8">7d</small></button>
                </div>
            `;
        }
    }
    
    html += `</div>`;
    html += `<button class="back-to-topics-button" style="margin-top: 20px; background: transparent; color: #888;" onclick="renderFlashcardTopics()">⬅️ Back to Topics</button>`;

    container.innerHTML = html;
    
    renderMath(); // KaTeX
    _focusScreen();
    readFlashcard(); // Smart TTS
}

// --- NAVIGATION HELPERS ---
function flipCard() { 
    isCardFront = !isCardFront; 
    displayFlashcard(); 
}

function prevFlashcard() { 
    if (currentFlashcardMode !== 'linear') return; // Safety
    if (currentCardIndex > 0) { 
        currentCardIndex--; 
        isCardFront = true; 
        displayFlashcard(); 
    } 
}

function nextFlashcard() { 
    if (currentFlashcardMode !== 'linear') return; // Safety
    if (currentCardIndex < currentFlashcards.length - 1) { 
        currentCardIndex++; 
        isCardFront = true; 
        displayFlashcard(); 
    } else { 
        showFlashcardCompletion(); 
    } 
}

function rateCard(quality) {
    if (currentFlashcardMode !== 'srs') return; // Safety
    const cardObj = currentFlashcards[currentCardIndex];
    // Calculate new date
    const result = calculateNextReview(currentFlashcardTopic, cardObj.originalIndex, quality);
    
    // Feedback Toast
    const days = Math.round(result.interval);
    const msg = days === 1 ? "Review tomorrow" : `Review in ${days} days`;
    showAppNotification(`📅 ${msg}`, "info", 1500);
    
    currentCardIndex++;
    isCardFront = true;
    displayFlashcard();
}

function showFlashcardCompletion() {
    const container = document.getElementById("quiz-form");
    const msg = currentFlashcardMode === 'srs' 
        ? "You have reviewed all due cards for today." 
        : "You have reviewed all cards in this topic.";

    container.innerHTML = `
        <div style="text-align: center; animation: fadeIn 0.5s;">
            <h2>Session Complete!</h2>
            <p>${msg}</p>
        </div>
    `;
    updateProgress(currentFlashcards.length, currentFlashcards.length);

    // Dynamic buttons based on mode
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "🔁 Review Again";
    restartBtn.className = "restart-button";
    restartBtn.style.marginRight = "10px";
    restartBtn.onclick = () => attemptStartFlashcard(currentFlashcardTopic); // Go back to choice
    container.appendChild(restartBtn);

    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(currentFlashcards.length, 0, "Flashcards");
    container.appendChild(challengeBtn);

    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);

    const backBtn = document.createElement("button");
    backBtn.innerText = "⬅️ Back to Topics";
    backBtn.className = "back-button";
    backBtn.onclick = renderFlashcardTopics;
    container.appendChild(backBtn);

    // ── CHANGE 2: Switch learning modality panel ──
    const switchDiv = document.createElement("div");
    switchDiv.style.cssText = "margin-top:30px; padding:18px; background:#0d1b2a; border-radius:12px; border:1px solid #3e506e; text-align:center;";
    switchDiv.innerHTML = `
        <p style="color:#a0a8b4; margin:0 0 12px 0; font-size:0.9em;">🔄 <strong style="color:#72efdd;">Switch Learning Mode</strong></p>
        <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center;">
            <button onclick="renderQuiz()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📝 MCQ</button>
            <button onclick="renderShortAnswers()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">✍️ Short Answer</button>
            <button onclick="renderEssaySimulation()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📄 Essay Sim</button>
        </div>
    `;
    container.appendChild(switchDiv);

    recordProgressSession('flashcard', currentFlashcards.length, currentFlashcards.length, `${currentFlashcardTopic} Flashcards`);
    logAnalyticsEvent('flashcard_complete', `${currentFlashcardTopic} (${currentFlashcardMode} mode)`);
}

// ============================================================
// === 9. SMART FEATURES & PRINT ===
// ============================================================

function challengeFriend(score, total, modeName) {
    const link = "https://kaerikalmar.github.io/KaeriEdTech";
    let message = "";
    
    if (modeName === "Flashcards") {
        message = `I mastered the ${score} Flashcard Deck on Kaeri EdTech! I Challenge you to beat me! 👇\n${link}`;
    } else {
        const percent = Math.round((score / total) * 100);
        message = `I scored ${percent}% (${score}/${total}) in ${currentCourse} ${currentTerm} (${modeName})! Challenge you to beat my score! 👇\n${link}`;
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
}

// ── BRAND CONSTANTS (unchanged) ─────────────────────────────────────────
const COURSE_IDENTITY = {
    'CS110': { accent: '#00bcd4', name: 'Introduction to Computing' },
    'MA110': { accent: '#42a5f5', name: 'Mathematics' },
    'PH110': { accent: '#ab47bc', name: 'Physics' },
    'CH110': { accent: '#ef5350', name: 'Chemistry' },
    'BI110': { accent: '#7cb342', name: 'Biology' },
    'LA111': { accent: '#ffa726', name: 'Communication Skills' },
    'MT221': { accent: '#26a69a', name: 'Mineral Processing' },
};

const SECTION_PALETTE = [
    { bg: '#f1f8e9', acc: '#7cb342' },
    { bg: '#e0f7fa', acc: '#00bcd4' },
    { bg: '#ffebee', acc: '#ef5350' },
    { bg: '#e3f2fd', acc: '#42a5f5' },
    { bg: '#f3e5f5', acc: '#ab47bc' },
    { bg: '#fff3e0', acc: '#ffa726' },
    { bg: '#e0f2f1', acc: '#26a69a' },
    { bg: '#fce4ec', acc: '#ec407a' },
    { bg: '#f9fbe7', acc: '#c0ca33' },
];

const SESSION_LABELS = {
    mcq:         { title: 'Multiple Choice',    icon: '📋' },
    shortAnswer: { title: 'Short Answer',       icon: '✍️'  },
    essay:       { title: 'Essay Simulation',   icon: '📄' },
    flashcard:   { title: 'Flashcard Glossary', icon: '🃏' },
};

function _courseIdentity(course) {
    return COURSE_IDENTITY[course] || { accent: '#111435', name: course };
}
function _termLabel(term) {
    return term ? 'Term ' + term.replace('T', '') : '';
}

function _buildSectionsFromSession() {
    const type = currentQuizType;
    const sections = [];

    if (type === 'mcq' || type === 'shortAnswer') {
        const groups = {}, order = [];
        currentQuizData.forEach((q) => {
            const topic = q.topic || q.section || 'General';
            if (!groups[topic]) { groups[topic] = []; order.push(topic); }
            groups[topic].push(q);
        });
        order.forEach((topic, i) => {
            sections.push({
                num:   i + 1,
                name:  topic,
                pal:   SECTION_PALETTE[i % SECTION_PALETTE.length],
                items: groups[topic],
            });
        });
    } else if (type === 'essay' && currentEssay) {
        sections.push({
            num:   1,
            name:  currentEssay.title,
            pal:   SECTION_PALETTE[0],
            items: currentEssay.steps,
        });
    } else if (type === 'flashcard') {
        sections.push({
            num:   1,
            name:  currentFlashcardTopic,
            pal:   SECTION_PALETTE[3],
            items: currentFlashcards,
        });
    }
    return sections;
}

function _itemCardHTML(item, sectionName, type, idx, pal) {
    const acc = pal.acc;
    let labelText = '', qHTML = '', aHTML = '', eHTML = '';

    function md(t) { return t ? parseKaeriMarkdown(t) : ''; }

    if (type === 'mcq') {
        labelText = 'Q' + (idx + 1);
        qHTML = md(item.q);

        // Full options list — highlight correct choice for revision-kit self-test
        let optionsHTML = '<div style="margin:8px 0 10px 0;">';
        (item.options || []).forEach(function (opt, i) {
            const letter    = String.fromCharCode(65 + i);
            const isCorrect = (i === item.correct);
            if (isCorrect) {
                optionsHTML += '<div style="padding:5px 10px;margin:3px 0;'
                    + 'background:#e8f5e9;border-left:4px solid #28a745;'
                    + 'border-radius:0 4px 4px 0;font-weight:700;color:#1e3a2f;">'
                    + letter + '. ' + md(opt) + ' <span style="color:#28a745;">✓</span>'
                    + '</div>';
            } else {
                optionsHTML += '<div style="padding:5px 10px;margin:3px 0;color:#444;">'
                    + letter + '. ' + md(opt)
                    + '</div>';
            }
        });
        optionsHTML += '</div>';

        qHTML += optionsHTML;
        aHTML = '<strong>Answer:</strong> ' + String.fromCharCode(65 + item.correct);
        eHTML = md(item.explanation || 'No additional explanation.');
    } else if (type === 'shortAnswer') {
        labelText = 'Q' + (idx + 1);
        qHTML = md(item.q);
        aHTML = '<strong>Keywords:</strong> ' + (item.keywords || []).join(', ');
        eHTML = md(item.explanation || 'No additional explanation.');
    } else if (type === 'essay') {
        labelText = 'Step ' + (idx + 1);
        qHTML = md(item.q);
        const opt = (item.options && item.options[item.correct] !== undefined)
            ? String.fromCharCode(65 + item.correct) + '. ' + md(item.options[item.correct]) : '—';
        aHTML = '<strong>Correct:</strong> ' + opt;
        eHTML = md(item.explanation || 'No additional explanation.');
    } else if (type === 'flashcard') {
        labelText = 'Card ' + (idx + 1);
        qHTML = md(item.front);
        aHTML = md(item.back);
        eHTML = '';
    }

    return `
    <div style="border:1px solid #ddd;border-left:5px solid ${acc};border-radius:6px;background:#fff;
                padding:13px 15px;box-shadow:0 2px 5px rgba(0,0,0,0.05);
                page-break-inside:avoid;break-inside:avoid;margin-bottom:0;">
        <div style="font-size:10px;font-weight:800;color:${acc};letter-spacing:0.5px;margin-bottom:3px;text-transform:uppercase;">${labelText}</div>
        <div style="font-size:9px;font-weight:600;color:${acc};text-transform:uppercase;letter-spacing:0.3px;margin-bottom:5px;">${sectionName}</div>
        <div style="font-size:13px;font-weight:700;color:#111435;margin-bottom:9px;line-height:1.4;">${qHTML}</div>
        <div style="font-size:12px;font-weight:500;color:#1e3a2f;background:#f0faf4;padding:6px 10px;border-radius:4px;margin-bottom:6px;">${aHTML}</div>
        ${eHTML ? `<div style="background:#f9f9f9;padding:6px 10px;font-size:11px;color:#333;line-height:1.45;border-left:4px solid ${acc};border-radius:0 4px 4px 0;">
            <span style="font-weight:800;color:${acc};text-transform:uppercase;font-size:10px;margin-right:4px;">EXPLANATION</span>${eHTML}</div>` : ''}
    </div>`;
}

// ── IN-APP PREVIEW (unchanged) ─────────────────────────────────────────────
function generatePrintPreview() {
    const sections = _buildSectionsFromSession();
    const date     = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });
    const sessInfo = SESSION_LABELS[currentQuizType] || { title: currentQuizType, icon: '📄' };
    const identity = _courseIdentity(currentCourse);
    const termLbl  = _termLabel(currentTerm);

    let totalItems = 0;
    sections.forEach(s => { totalItems += s.items.length; });

    let previewHTML = `
    <div style="font-family:Arial,sans-serif;color:#1a1a1a;font-size:10pt;">
        <div style="border-bottom:3px solid #111435;padding-bottom:10px;margin-bottom:18px;">
            <div style="margin-bottom:8px;">${_brandLogoImg(40, 8)}</div>
            <div style="font-size:9px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                ${currentCourse} · ${identity.name} · ${termLbl}
            </div>
            <h2 style="font-size:16pt;margin:0 0 4px 0;color:#111435;">${sessInfo.icon} ${sessInfo.title}</h2>
            <div style="font-size:8pt;color:#555;">Generated: ${date} &nbsp;|&nbsp; ${totalItems} items across ${sections.length} section${sections.length !== 1 ? 's' : ''}</div>
            <div style="font-size:7.5pt;color:#888;margin-top:3px;border-top:1px solid #eee;padding-top:3px;">
                Kaeri EdTech Study Systems &nbsp;|&nbsp; 📞 096-100-5406 &nbsp;|&nbsp; 096-431-2504
            </div>
        </div>`;

    sections.forEach(s => {
        previewHTML += `
        <div style="background:${s.pal.bg};color:${s.pal.acc};padding:7px 12px;
                    border-left:5px solid ${s.pal.acc};font-weight:700;font-size:11px;
                    margin-bottom:8px;border-radius:3px;">
            SECTION ${s.num} · ${s.name.toUpperCase()}
        </div>`;
        s.items.forEach((item, idx) => {
            previewHTML += `<div style="margin-bottom:8px;">${_itemCardHTML(item, s.name, currentQuizType, idx, s.pal)}</div>`;
        });
    });

    previewHTML += `
        <div style="margin-top:18px;padding-top:10px;border-top:1px solid #ddd;text-align:center;font-size:7.5pt;color:#888;">
            Study smarter with Kaeri EdTech &mdash; 📞 096-100-5406 &nbsp;|&nbsp; 096-431-2504
        </div>
    </div>`;

    printContentData = {
        sections,
        date,
        course:      currentCourse,
        term:        currentTerm,
        sessionType: currentQuizType,
    };

    const previewContent = document.getElementById('print-preview-content');
    if (previewContent) {
        previewContent.innerHTML = previewHTML;
        if (typeof renderMath === 'function') renderMath('print-preview-content');
    }

    document.getElementById('print-preview-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ── PROCEED TO PRINT (with access guard, analytics, modal behaviour) ──
function proceedToPrint() {
    // Free users: close preview, notify, open payment modal, log attempt
    if (!hasFullAccess) {
        closePrintPreview();
        showAppNotification("🔒 Unlock Full Access To Print The Revision Kits", "warning", 5000);
        openPaymentModal();
        logAnalyticsEvent('print_attempt_blocked', `${currentCourse} ${currentTerm} - ${currentQuizType}`);
        return;
    }

    // Paid users: proceed
    if (!printContentData) return;
    closePrintPreview();

    const { sections, date, course, term, sessionType } = printContentData;
    const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);
    
    // Log successful print generation
    logAnalyticsEvent('print_pdf_generated', `${course} ${term} | ${sessionType} | ${totalItems} items`);

    const fullHTML = _buildFullPrintDocument(course, term, sessionType, sections, date);

    const printWin = window.open('', '_blank');
    if (!printWin) {
        showAppNotification('⚠️ Pop-up blocked. Allow pop-ups for this site, then tap Print again.', 'warning', 5000);
        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 60000);
        return;
    }

    printWin.document.open();
    printWin.document.write(fullHTML);
    printWin.document.close();
}

function closePrintPreview() {
    const modal = document.getElementById('print-preview-modal');
    if (modal) modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ── FULL BRANDED A4 PRINT DOCUMENT (GENERIC DESIGN + ALL IMPROVEMENTS) ──
function _buildFullPrintDocument(course, term, sessionType, sections, date) {
    const identity  = _courseIdentity(course);
    const termLabel = _termLabel(term);
    const sessInfo  = SESSION_LABELS[sessionType] || { title: sessionType, icon: '📄' };
    
    // ✅ QR code points to Kaeri EdTech revision platform
// ✅ Updated URL + vertical-line-style QR rendering attempt
const platformUrl = 'https://kaerikalmar.github.io/KaeriEdTech';
const qrUrl = 'https://quickchart.io/qr?text=' + encodeURIComponent(platformUrl) + '&dark=111435&size=300&margin=2';

    let totalItems = 0;
    sections.forEach(s => { totalItems += s.items.length; });

    // Build TOC rows
    let tocRows = '';
    sections.forEach(s => {
        const typePrefix = sessionType === 'flashcard' ? 'Card' : sessionType === 'essay' ? 'Step' : 'Q';
        tocRows += `
        <div style="display:flex;align-items:center;padding:11px 18px;border-radius:4px;
                    font-size:12px;font-weight:500;background:${s.pal.bg};margin-bottom:6px;
                    page-break-inside:avoid;break-inside:avoid;">
            <span style="font-weight:800;color:${s.pal.acc};margin-right:18px;min-width:22px;">${String(s.num).padStart(2, '0')}</span>
            <span style="flex-grow:1;color:#222;">${s.name}</span>
            <span style="color:#666;margin-right:14px;font-size:10px;">${typePrefix}1 – ${typePrefix}${s.items.length}</span>
            <span style="font-weight:700;color:${s.pal.acc};">${s.items.length} items</span>
        </div>`;
    });

    const sectionsJSON = JSON.stringify(sections);
    const currentYear = new Date().getFullYear();

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kaeri EdTech · ${course} ${termLabel} · ${sessInfo.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<!-- KaTeX CSS + JS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/mhchem.min.js"></script>
<style>
    :root { --primary:#111435; --yellow:#fccb00; }
    *, *::before, *::after { box-sizing:border-box; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
    body { margin:0; padding:0; background:#e6e6e6; font-family:'Inter',Arial,sans-serif; }
    @page { size:A4; margin:0; }
    .sheet { width:210mm; height:297mm; background:white; margin:20px auto; position:relative; overflow:hidden; page-break-after:always; box-shadow:0 0 15px rgba(0,0,0,0.25); }
    @media print { body { background:none; } .sheet { margin:0; box-shadow:none; } }
    .pg-header { position:absolute; top:13mm; left:14mm; right:14mm; height:14mm; border-bottom:2px solid var(--primary); display:flex; justify-content:space-between; align-items:flex-end; padding-bottom:5px; color:var(--primary); }
    .pg-footer { position:absolute; bottom:13mm; left:14mm; right:14mm; height:10mm; border-top:1px solid #ccc; display:flex; justify-content:space-between; align-items:center; font-size:9px; color:#888; padding-top:4px; }
    .pg-content { position:absolute; top:32mm; bottom:27mm; left:14mm; right:14mm; overflow:hidden; display:flex; flex-direction:column; }
    :root { --brand-logo: url('${_brandLogoURI()}'); }
    .brand-mark { display:inline-block; flex:none; background-image:var(--brand-logo); background-size:contain; background-repeat:no-repeat; background-position:center; }
    .brand-mark.hd { width:9mm; height:9mm; border-radius:2mm; }
    .brand-mark.cv { width:22mm; height:22mm; border-radius:4mm; }
    .brand-mark.bk { width:30mm; height:30mm; border-radius:5mm; }
    .brand { display:inline-flex; align-items:center; gap:7px; font-weight:800; font-size:13px; letter-spacing:0.5px; text-transform:uppercase; color:var(--primary); }
    .meta { font-size:9px; font-weight:600; color:#666; text-transform:uppercase; }
    .pg-num { font-weight:700; color:var(--primary); }
    .sheet.cover { background:var(--primary); color:white; display:flex; flex-direction:column; justify-content:center; padding:18mm; }
    .cover-graphics { position:absolute; inset:0; overflow:hidden; pointer-events:none; }
    .diag { position:absolute; top:-50%; right:-20%; width:150%; height:150%; background:linear-gradient(135deg,transparent 45%,rgba(252,203,0,0.13) 45%,rgba(252,203,0,0.13) 55%,transparent 55%); transform:rotate(25deg); }
    .circ { position:absolute; bottom:-150px; left:-150px; width:400px; height:400px; border-radius:50%; background:rgba(26,32,85,0.75); }
    .cover-inner { position:relative; z-index:2; height:100%; display:flex; flex-direction:column; justify-content:center; }
    .stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin:36px 0; max-width:72%; }
    .stat-num { font-size:40px; font-weight:800; color:var(--yellow); display:block; line-height:1; }
    .stat-lbl { font-size:10px; text-transform:uppercase; color:#ddd; letter-spacing:1px; }
    .cover-rule { border-top:1px solid var(--yellow); padding-top:18px; margin-top:auto; }
    .sec-title { font-size:13px; font-weight:800; color:var(--primary); border-bottom:3px solid var(--yellow); padding-bottom:8px; margin-bottom:14px; }
    #kaeri-loading { position:fixed; inset:0; background:rgba(17,20,53,0.92); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:9999; color:white; font-family:'Inter',Arial,sans-serif; gap:18px; }
    .kaeri-spinner { width:48px; height:48px; border:4px solid rgba(252,203,0,0.2); border-top-color:#fccb00; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    #kaeri-loading p { font-size:14px; color:#fccb00; font-weight:600; margin:0; }
    .how-to-box { background:#e8eaf6; border-left:5px solid #1a237e; padding:12px 16px; border-radius:0 8px 8px 0; margin:15px 0; }
    .how-to-step { display:flex; gap:10px; margin-bottom:7px; }
    .step-num { width:20px; height:20px; border-radius:50%; background:#1a237e; color:white; font-size:10px; font-weight:800; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .toc-item { display:flex; align-items:center; padding:10px 16px; border-radius:5px; font-size:12px; font-weight:500; margin-bottom:5px; background:#f4f4fa; }
    .toc-num { font-weight:800; margin-right:16px; width:22px; }
    .q-card { border:1px solid #c0c0e0; padding:12px 14px; border-radius:7px; background:white; margin-bottom:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05); }
    .q-head { font-size:10.5px; font-weight:800; margin-bottom:4px; }
    .q-text { font-size:14px; font-weight:700; color:var(--primary); margin-bottom:8px; line-height:1.4; }
    .ans { font-size:12px; font-weight:500; background:#f0faf4; padding:7px 11px; border-radius:6px; margin-bottom:7px; border-left:4px solid var(--acc); }
    .expl { background:#f4f4fa; padding:6px 10px; font-size:11px; border-left:3px solid var(--acc); border-radius:0 5px 5px 0; }
    .topic-banner { background:var(--bg); color:var(--acc); padding:8px 13px; border-left:6px solid var(--acc); font-weight:700; margin-bottom:12px; }
    .katex-display { overflow-x: auto; overflow-y: hidden; padding-bottom: 5px; }
</style>
</head>
<body>

<div id="kaeri-loading">
    <div class="kaeri-spinner"></div>
    <p>Building your revision kit…</p>
    <small>Print dialog will open automatically</small>
</div>

<!-- FRONT COVER -->
<div class="sheet cover">
    <div class="cover-graphics"><div class="diag"></div><div class="circ"></div></div>
    <div class="cover-inner">
        <div style="color:var(--yellow);font-weight:700;font-size:11px;letter-spacing:2px;margin-bottom:18px;">
            ${course} · ${identity.name.toUpperCase()}
        </div>
        <h1 style="font-size:46px;font-weight:800;line-height:1.1;margin:0 0 16px 0;">
            ${termLabel}<br>${sessInfo.icon} ${sessInfo.title}
        </h1>
        <p style="font-size:16px;font-weight:300;color:#ddd;line-height:1.5;margin:0;">
            Complete Study Kit &mdash; ${totalItems} Items
        </p>
        <div class="stats-grid">
            <div><span class="stat-num">${totalItems}</span><span class="stat-lbl">ITEMS</span></div>
            <div><span class="stat-num">${sections.length}</span><span class="stat-lbl">SECTIONS</span></div>
            <div><span class="stat-num" style="font-size:22px;">${course}</span><span class="stat-lbl">COURSE</span></div>
            <div><span class="stat-num">A4</span><span class="stat-lbl">FORMAT</span></div>
        </div>
        <div class="cover-rule">
            <div style="margin-bottom:10px;"><i class="brand-mark cv"></i></div>
            <h3 style="color:var(--yellow);margin:0;">KAERI EDTECH</h3>
            <p style="font-size:10px;opacity:0.75;margin-top:4px;">${identity.name} · ${termLabel} · ${date}</p>
        </div>
    </div>
</div>

<!-- TABLE OF CONTENTS -->
<div class="sheet">
    <div class="pg-header"><span class="brand"><i class="brand-mark hd"></i>KAERI EDTECH</span><span class="meta">${course} · ${termLabel}</span></div>
    <div class="pg-footer"><span>© ${currentYear} Kaeri EdTech</span><span class="pg-num">Page 2</span></div>
    <div class="pg-content">
        <div class="sec-title">Table of Contents &mdash; ${sections.length} Section${sections.length !== 1 ? 's' : ''}</div>
        ${tocRows}
        <div class="how-to-box">
            <div class="how-to-step"><div class="step-num">1</div><div><strong>Study the Question.</strong> Read each as a learning objective.</div></div>
            <div class="how-to-step"><div class="step-num">2</div><div><strong>Memorize the Answer.</strong> These are the direct facts for the exam.</div></div>
            <div class="how-to-step"><div class="step-num">3</div><div><strong>Internalize the Explanation.</strong> This is the standalone teaching.</div></div>
        </div>
    </div>
</div>

<div id="dynamic-content"></div>

<!-- BACK COVER (with QR code pointing to REVISION PLATFORM) -->
<div class="sheet cover" style="justify-content:flex-start;">
    <div class="cover-graphics"><div class="diag" style="background:linear-gradient(135deg,transparent 45%,rgba(252,203,0,0.08) 45%,rgba(252,203,0,0.08) 55%,transparent 55%);"></div></div>
    <div class="cover-inner" style="justify-content:space-between;">
        <div>
            <div style="margin-bottom:14px;"><i class="brand-mark bk"></i></div>
            <h1 style="color:white;font-size:44px;margin-bottom:8px;">KAERI EDTECH</h1>
            <p style="color:#ddd;font-weight:300;font-size:16px;">Empowering Learners Through Smart Educational Technology</p>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-left:5px solid var(--yellow);padding:22px;border-radius:8px;">
            <div style="display:flex;align-items:center;gap:28px;flex-wrap:wrap;">
                <div style="flex:1;">
                    <div style="font-size:10px;font-weight:800;color:var(--yellow);letter-spacing:1px;margin-bottom:8px;">CALL / WHATSAPP</div>
                    <div style="font-size:22px;font-weight:800;color:white;margin-bottom:3px;">096-100-5406</div>
                    <div style="font-size:22px;font-weight:800;color:white;margin-bottom:18px;">096-431-2504</div>
                    <div style="font-size:10px;font-weight:800;color:var(--yellow);letter-spacing:1px;margin-bottom:4px;">ACCESS OUR REVISION PLATFORM</div>
                    <div style="font-size:11px;color:#aaa;">Scan to access the official Kaeri EdTech revision site for ${course} resources, past papers, and more.</div>
                </div>
                <img src="${qrUrl}" width="110" height="110" style="border:2px solid white;border-radius:8px;">
            </div>
        </div>
        <div style="font-size:10px;color:#aaa;line-height:1.7;border-top:1px solid #333;padding-top:16px;">
            <strong>Document:</strong> ${course} · ${identity.name} · ${termLabel} · ${sessInfo.title}<br>
            <strong>Generated:</strong> ${date} &nbsp;&nbsp;
            <strong>© ${currentYear} Kaeri EdTech. All rights reserved.</strong>
        </div>
    </div>
</div>

<script>
(function() {
    'use strict';
    const sectionsData = ${sectionsJSON};
    const sessionType = '${sessionType}';
    const courseName = '${course}';
    const termLabel = '${termLabel}';
    const sessTitle = '${sessInfo.title}';

    // Full Markdown parser (same as main engine)
    function parseKaeriMarkdown(text) {
        if (!text) return "";
        let t = text;
        t = t.replace(/^## (.*$)/gim, "<h3 style='margin:10px 0; color:#72efdd;'>$1</h3>");
        t = t.replace(/^# (.*$)/gim, "<h2 style='margin:15px 0; color:#fff;'>$1</h2>");
        t = t.replace(/^> (.*$)/gim, "<blockquote style='border-left:4px solid #72efdd; margin:10px 0; padding-left:15px; color:#a0a8b4; font-style:italic;'>$1</blockquote>");
        t = t.replace(/^- (.*$)/gim, "<li style='margin-left:20px;'>$1</li>");
        t = t.replace(/\\*\\*(.*?)\\*\\*/g, "<strong>$1</strong>");
        t = t.replace(/__(.*?)__/g, "<u>$1</u>");
        t = t.replace(/(?<!\\\\)\\*([^\\s].*?)(?<!\\\\)\\*/g, "<em>$1</em>");
        t = t.replace(/\\n/g, "<br>");
        return t;
    }

    // Pagination setup
    const MM = 3.7795275591;
    const PAGE_H = 297 * MM;
    const TOP = 32 * MM;
    const BOT = 27 * MM;
    const CONT_H = PAGE_H - TOP - BOT - 22;
    const CONT_W = (210 - 28) * MM;
    const GAP = 10;

    const root = document.getElementById('dynamic-content');
    const sb = document.createElement('div');
    sb.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:' + CONT_W + 'px;visibility:hidden;pointer-events:none;font-family:Inter,Arial,sans-serif;';
    document.body.appendChild(sb);

    let pageCount = 2; // cover=1, TOC=2
    function newPage() {
        pageCount++;
        const sheet = document.createElement('div');
        sheet.className = 'sheet';
        sheet.innerHTML = '<div class="pg-header"><span class="brand"><i class="brand-mark hd"></i>KAERI EDTECH</span><span class="meta">' + courseName + ' · ' + termLabel + ' · ' + sessTitle + '</span></div>' +
                          '<div class="pg-footer"><span>© ${currentYear} Kaeri EdTech. All rights reserved.</span><span class="pg-num">Page ' + pageCount + '</span></div>' +
                          '<div class="pg-content" id="pg-' + pageCount + '"></div>';
        root.appendChild(sheet);
        return { el: sheet.querySelector('#pg-' + pageCount), used: 0 };
    }

    function measure(el) {
        sb.innerHTML = '';
        const clone = el.cloneNode(true);
        clone.style.width = '100%';
        sb.appendChild(clone);
        return clone.offsetHeight + 5;
    }

    function place(el, state, gap = GAP) {
        const h = measure(el);
        const g = state.used > 0 ? gap : 0;
        if (state.used + h + g > CONT_H) state = newPage();
        if (state.used > 0) {
            const spacer = document.createElement('div');
            spacer.style.height = gap + 'px';
            state.el.appendChild(spacer);
        }
        state.el.appendChild(el);
        state.used += h + (state.used > 0 ? gap : 0);
        return state;
    }

    function createCard(item, secName, idx, pal) {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.style.setProperty('--acc', pal.acc);
        card.style.setProperty('--bg', pal.bg);

        let qText = '', ansHtml = '', explHtml = '';
        if (sessionType === 'mcq') {
            qText = parseKaeriMarkdown(item.q || '');
            var opts = item.options || [];
            var optsHtml = '<div style="margin:8px 0 10px 0;">';
            for (var i = 0; i < opts.length; i++) {
                var letter = String.fromCharCode(65 + i);
                var isCorrect = (i === item.correct);
                if (isCorrect) {
                    optsHtml += '<div style="padding:5px 10px;margin:3px 0;background:#e8f5e9;border-left:4px solid #28a745;border-radius:0 4px 4px 0;font-weight:700;color:#1e3a2f;">'
                        + letter + '. ' + parseKaeriMarkdown(opts[i])
                        + ' <span style="color:#28a745;">✓</span></div>';
                } else {
                    optsHtml += '<div style="padding:5px 10px;margin:3px 0;color:#444;">'
                        + letter + '. ' + parseKaeriMarkdown(opts[i]) + '</div>';
                }
            }
            optsHtml += '</div>';
            qText += optsHtml;
            ansHtml = '<strong>Answer:</strong> ' + String.fromCharCode(65 + item.correct);
            explHtml = parseKaeriMarkdown(item.explanation || 'No additional explanation.');
        } else if (sessionType === 'shortAnswer') {
            qText = parseKaeriMarkdown(item.q || '');
            ansHtml = '<strong>Keywords:</strong> ' + (item.keywords || []).join(', ');
            explHtml = parseKaeriMarkdown(item.explanation || 'No additional explanation.');
        } else if (sessionType === 'essay') {
            qText = parseKaeriMarkdown(item.q || '');
            const correctOpt = (item.options && item.options[item.correct]) ? item.options[item.correct] : '—';
            ansHtml = '<strong>Correct:</strong> ' + parseKaeriMarkdown(correctOpt);
            explHtml = parseKaeriMarkdown(item.explanation || 'No additional explanation.');
        } else { // flashcard
            qText = parseKaeriMarkdown(item.front || '');
            ansHtml = parseKaeriMarkdown(item.back || '');
            explHtml = '';
        }

        card.innerHTML = \`
            <div class="q-head" style="color:\${pal.acc}">\${secName} · Item \${idx+1}</div>
            <div class="q-text">\${qText}</div>
            <div class="ans" style="border-left-color:\${pal.acc}">\${ansHtml}</div>
            \${explHtml ? '<div class="expl" style="border-left-color:\${pal.acc}"><span class="expl-label" style="color:\${pal.acc}">📖 Explanation</span> ' + explHtml + '</div>' : ''}
        \`;
        return card;
    }

    function build() {
        let state = newPage();
        for (let sec of sectionsData) {
            const banner = document.createElement('div');
            banner.className = 'topic-banner';
            banner.style.backgroundColor = sec.pal.bg;
            banner.style.color = sec.pal.acc;
            banner.style.borderLeftColor = sec.pal.acc;
            banner.innerHTML = '<div class="banner-text">SECTION ' + sec.num + ': ' + sec.name.toUpperCase() + '</div>';
            state = place(banner, state, 0);
            sec.items.forEach((item, idx) => {
                const card = createCard(item, sec.name, idx, sec.pal);
                state = place(card, state, 10);
            });
        }
    }

    function renderMathAndPrint() {
        if (typeof renderMathInElement !== 'undefined') {
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\\\(', right: '\\\\)', display: false},
                    {left: '\\\\[', right: '\\\\]', display: true}
                ],
                throwOnError: false
            });
        }
        setTimeout(() => {
            const loading = document.getElementById('kaeri-loading');
            if (loading) loading.style.display = 'none';
            if (sb.parentNode) sb.parentNode.removeChild(sb);
            requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
        }, 200);
    }

    let timeoutId = setTimeout(() => {
        console.warn('Font loading timeout – forcing print');
        renderMathAndPrint();
    }, 3000);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            clearTimeout(timeoutId);
            build();
            renderMathAndPrint();
        }).catch(err => {
            console.warn(err);
            clearTimeout(timeoutId);
            build();
            renderMathAndPrint();
        });
    } else {
        window.addEventListener('load', () => {
            clearTimeout(timeoutId);
            build();
            renderMathAndPrint();
        });
    }
})();
</script>
</body>
</html>`;
}

    // ============================================================
// === 10. UTILITIES ===
// === v1.1 PATCH: + _escAttr (JS-string escape) + shuffleQuestionOptions (orderMatters) ===
// === v1.6 PATCH: + naturalSort for correct numeric unit/sub-topic ordering ===
// ============================================================

function filterDataByCourseAndTerm(data, course, term) {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item.course === course && item.term === term);
}

function filterFlashcardsByCourseAndTerm(all, course, term) {
    const filtered = {};
    for (const topic in all) {
        if (all.hasOwnProperty(topic)) {
            const cards = all[topic].filter(card => card.course === course && card.term === term);
            if (cards.length > 0) filtered[topic] = cards;
        }
    }
    return filtered;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Escape for JS-string context (inline onclick attributes).
// Distinct from escapeHtml() which is for HTML-entity context.
function _escAttr(s) {
    return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Natural sort helper: Fixes the "Unit 10" appearing before "Unit 6" issue.
// Compares strings numerically so 2 comes before 10.
function naturalSort(a, b) {
    return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
}

// Shuffle a question's answer options, honouring the question's authorial intent.
//   orderMatters === 'sequential'               → keep options in author order
//   orderMatters === 'all-of-the-above'         → shuffle distractors, keep last option last
//   orderMatters === 'both-a-and-b'             → same as above
//   (default)                                    → shuffle all, remap `correct`
function shuffleQuestionOptions(q) {
    if (!Array.isArray(q.options) || q.options.length < 2) return Object.assign({}, q);
    if (q.orderMatters === 'sequential') return Object.assign({}, q);

    if (q.orderMatters === 'all-of-the-above' || q.orderMatters === 'both-a-and-b') {
        const distractors = q.options.slice(0, -1);
        const last        = q.options[q.options.length - 1];
        shuffle(distractors);
        const newOptions  = distractors.concat([last]);
        return Object.assign({}, q, {
            options: newOptions,
            correct: newOptions.indexOf(q.options[q.correct])
        });
    }

    const order = q.options.map(function (_, i) { return i; });
    shuffle(order);
    return Object.assign({}, q, {
        options: order.map(function (i) { return q.options[i]; }),
        correct: order.indexOf(q.correct)
    });
}
// ============================================================
// === 11. TEXT-TO-SPEECH (SMART HUMAN ENGINE) ===
// === v1.5: fixed math reading order, chunked speech (no 15s cut-off),
// ===       voice + speed settings, pause/resume, replay, support checks ===
// ============================================================

const ttsSupported = (typeof window !== 'undefined')
    && ('speechSynthesis' in window)
    && (typeof SpeechSynthesisUtterance !== 'undefined');

// Word commands use (?![A-Za-z]) so "\int" is never caught by "\in", "\to" by "\top", etc.
const ttsMap = [
    // Greek letters / symbols
    { r: /\\infty(?![A-Za-z])/g, s: " infinity " },
    { r: /\\alpha(?![A-Za-z])/g, s: "alpha" }, { r: /\\beta(?![A-Za-z])/g, s: "beta" }, { r: /\\gamma(?![A-Za-z])/g, s: "gamma" },
    { r: /\\theta(?![A-Za-z])/g, s: "theta" }, { r: /\\lambda(?![A-Za-z])/g, s: "lambda" }, { r: /\\pi(?![A-Za-z])/g, s: "pi" },
    { r: /\\Delta(?![A-Za-z])/g, s: "Delta" }, { r: /\\delta(?![A-Za-z])/g, s: "delta" }, { r: /\\mu(?![A-Za-z])/g, s: "mew" },
    { r: /\\sigma(?![A-Za-z])/g, s: "sigma" }, { r: /\\omega(?![A-Za-z])/g, s: "omega" }, { r: /\\Omega(?![A-Za-z])/g, s: "Omega" },
    // Logic / sets  (\int MUST come before \in)
    { r: /\\therefore(?![A-Za-z])/g, s: "therefore" }, { r: /\\exists(?![A-Za-z])/g, s: "there exists" },
    { r: /\\forall(?![A-Za-z])/g, s: "for all" },
    { r: /\\int(?![A-Za-z])/g, s: "the integral of" },
    { r: /\\in(?![A-Za-z])/g, s: "is an element of" },
    { r: /\\cup(?![A-Za-z])/g, s: "union" }, { r: /\\cap(?![A-Za-z])/g, s: "intersection" },
    // Functions / calculus
    { r: /\\sin(?![A-Za-z])/g, s: "sine" }, { r: /\\cos(?![A-Za-z])/g, s: "cosine" }, { r: /\\tan(?![A-Za-z])/g, s: "tangent" },
    { r: /\\ln(?![A-Za-z])/g, s: "natural log" }, { r: /\\log(?![A-Za-z])/g, s: "log" },
    { r: /\\sum(?![A-Za-z])/g, s: "the sum of" },
    { r: /dy\/dx/g, s: "d y d x" }, { r: /\\lim(?![A-Za-z])/g, s: "the limit" },
    { r: /\\rightarrow(?![A-Za-z])/g, s: "approaches" }, { r: /\\to(?![A-Za-z])/g, s: "approaches" },
    { r: /\\Rightarrow(?![A-Za-z])/g, s: "implies" }, { r: /\\leftrightarrow(?![A-Za-z])/g, s: "if and only if" },
    // Fractions / powers / roots
    { r: /\\frac\{1\}\{2\}/g, s: "one half" },
    { r: /\\frac\{(.+?)\}\{(.+?)\}/g, s: "$1 over $2" },
    { r: /\^2(?![0-9])/g, s: " squared" }, { r: /\^3(?![0-9])/g, s: " cubed" },
    { r: /\^\{(.+?)\}/g, s: " to the power of $1" },
    { r: /\\sqrt\{(.+?)\}/g, s: "the square root of $1" },
    { r: /\\vec\{(.+?)\}/g, s: "vector $1" },
    // Comparisons / operators
    { r: /\\approx(?![A-Za-z])/g, s: "is approximately" }, { r: /\\neq(?![A-Za-z])/g, s: "is not equal to" },
    { r: /\\leq?(?![A-Za-z])/g, s: "less than or equal to" }, { r: /\\geq?(?![A-Za-z])/g, s: "greater than or equal to" },
    { r: /\\times(?![A-Za-z])/g, s: "times" }, { r: /\\div(?![A-Za-z])/g, s: "divided by" }, { r: /\\cdot(?![A-Za-z])/g, s: "dot" },
    { r: /\\pm(?![A-Za-z])/g, s: "plus or minus" }, { r: /\\circ(?![A-Za-z])/g, s: " degrees" },
    // Chemistry / text wrappers
    { r: /\\ce\{(.+?)\}/g, s: "$1" }, { r: /->/g, s: " yields " },
    { r: /\\text\{(.+?)\}/g, s: "$1" }, { r: /\\mathrm\{(.+?)\}/g, s: "$1" },
    // Markdown clean-up
    { r: /\*\*/g, s: "" }, { r: /__/g, s: "" }, { r: /^#+\s*/gm, s: "" }, { r: /^>\s?/gm, s: "" },
    // Subscripts (after "__" is removed)
    { r: /_\{(.+?)\}/g, s: " sub $1" }, { r: /_([A-Za-z0-9])/g, s: " sub $1" },
    // Plain-text maths symbols
    { r: /\s>\s/g, s: " is greater than " }, { r: /\s<\s/g, s: " is less than " },
    { r: /≤/g, s: " less than or equal to " }, { r: /≥/g, s: " greater than or equal to " },
    { r: /≠/g, s: " is not equal to " }, { r: /≈/g, s: " is approximately " },
    { r: /×/g, s: " times " }, { r: /÷/g, s: " divided by " }, { r: /→/g, s: " yields " },
    { r: /±/g, s: " plus or minus " }, { r: /√/g, s: " square root of " }, { r: /∞/g, s: " infinity " },
    { r: /°C/g, s: " degrees Celsius" }, { r: /°/g, s: " degrees" }, { r: /%/g, s: " percent" },
    // Whatever LaTeX is left
    { r: /\$\$/g, s: "" }, { r: /\$/g, s: "" }, { r: /\\/g, s: "" }
];

function humanizeLaTeX(text) {
    let cleanText = String(text == null ? '' : text)
        // Paragraph/line breaks become real newlines first, so markdown headings ("## Title") are still
        // recognised by the clean-up rules in ttsMap. They turn into spoken pauses further below.
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/(p|h[1-6])\s*>/gi, '\n')
        .replace(/<\/?[a-zA-Z][^>]*>/g, ' ')          // Other HTML tags
        .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
    ttsMap.forEach(map => { cleanText = cleanText.replace(map.r, map.s); });
    return cleanText
        // Each break (single or repeated) becomes ONE full stop, unless the line already ends in punctuation.
        // A paragraph break (blank line / double <br>, e.g. after a heading) also adds a hidden \u00b6 marker
        // that _speakNext turns into a longer pause. The marker is stripped before anything is spoken.
        .replace(/([.!?\u2026:;,])?[ \t]*\n\s*/g, function (m, p) {
            if ((m.match(/\n/g) || []).length >= 2) return (p && /[.!?\u2026]/.test(p) ? p : '.') + '\u00b6 ';
            return p ? p + ' ' : '. ';
        })
        // Never leave doubled sentence punctuation behind (". .", "?.", etc.)
        .replace(/([.!?\u2026])(?:\s*[.!?\u2026])+/g, '$1')
        .replace(/\s+/g, ' ').trim();
}

// ---------- Reader state ----------
let ttsRate = (function () {
    const v = parseFloat(localStorage.getItem('kaeri_tts_rate'));
    return (isFinite(v) && v >= 0.5 && v <= 2) ? v : 1;
})();
let ttsVoiceURI = localStorage.getItem('kaeri_tts_voice') || '';
let ttsVoices = [];
let ttsSession = 0;          // bumped on every stop so stale callbacks do nothing
let ttsQueue = [];           // chunks still to speak
let ttsCurrentChunk = '';
let ttsSpeaking = false;
let ttsPaused = false;
let ttsLastText = '';
let utterance = null;

function _loadVoices() {
    if (!ttsSupported) return;
    try { ttsVoices = window.speechSynthesis.getVoices() || []; } catch (e) { ttsVoices = []; }
}
if (ttsSupported) {
    _loadVoices();
    try {
        window.speechSynthesis.addEventListener('voiceschanged', function () {
            _loadVoices();
            _fillTtsVoiceList();
        });
    } catch (e) {}
} else {
    document.documentElement.classList.add('no-tts');
}

/** Saved voice, else the best English voice on the device (Zambian > South African > British > US > any English). */
function ttsPickVoice() {
    if (!ttsVoices.length) return null;
    if (ttsVoiceURI) {
        const saved = ttsVoices.find(v => v.voiceURI === ttsVoiceURI);
        if (saved) return saved;
    }
    const norm = v => String(v.lang || '').replace('_', '-').toLowerCase();
    const order = ['en-zm', 'en-za', 'en-gb', 'en-us'];
    for (let i = 0; i < order.length; i++) {
        const hit = ttsVoices.find(v => norm(v) === order[i]);
        if (hit) return hit;
    }
    return ttsVoices.find(v => /^en/.test(norm(v))) || null;
}

/** Break text into short, natural chunks. Chrome silently stops utterances that run past ~15 seconds. */
function splitForSpeech(text) {
    const MAX = 200;
    const pieces = String(text).match(/[^.!?…]+[.!?…]*\s*/g) || [String(text)];
    const chunks = [];
    let cur = '';
    const push = s => { s = s.trim(); if (s) chunks.push(s); };
    pieces.forEach(p => {
        if (p.length > MAX) {
            push(cur); cur = '';
            let rest = p;
            while (rest.length > MAX) {
                let cut = rest.lastIndexOf(',', MAX);
                if (cut < 60) cut = rest.lastIndexOf(' ', MAX);
                if (cut < 20) cut = MAX;
                push(rest.slice(0, cut + 1));
                rest = rest.slice(cut + 1);
            }
            cur = rest;
        } else if ((cur + p).length > MAX) {
            push(cur); cur = p;
        } else {
            cur += p;
        }
    });
    push(cur);
    return chunks;
}

function _speakNext(session) {
    if (session !== ttsSession) return;
    if (!ttsQueue.length) {
        ttsSpeaking = false; ttsCurrentChunk = ''; utterance = null;
        _syncStripTts();
        return;
    }

    // Queue chunks can hold several sentences. Speak one sentence at a time so the pause
    // after each full stop / question mark actually happens; the rest go back to the queue front.
    let chunk = ttsQueue.shift();
    const parts = chunk.match(/.+?(?:[.!?\u2026]+\u00b6?(?=\s|$)|$)/g);
    if (parts && parts.length > 1) {
        const sentences = parts.map(function (x) { return x.trim(); }).filter(Boolean);
        if (sentences.length > 1) {
            chunk = sentences.shift();
            ttsQueue = sentences.concat(ttsQueue);
        }
    }
    // \u00b6 = paragraph/heading boundary marker from humanizeLaTeX: remember it, never speak it
    const paraBreak = chunk.indexOf('\u00b6') !== -1;
    chunk = chunk.replace(/\u00b6/g, '').trim();
    if (!chunk) { _speakNext(session); return; }
    ttsCurrentChunk = chunk;

    const u = new SpeechSynthesisUtterance(chunk);
    const v = ttsPickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-GB'; }

    // --- AUTO-ADJUSTING RHYTHM & TONE ---
    let rateMultiplier = 1.0;
    let pitchMultiplier = 1.0;

    // 1. Math-heavy? Only real operators / spoken-math words count, never plain numbers, hyphens or "and/or".
    const isMath = /\d\s*[=+*^\u00d7\u00f7]\s*[\d(A-Za-z]|[A-Za-z)]\s*=\s*[\d(A-Za-z-]|\d\s+-\s+\d|\d\/\d|\b(squared|cubed|square root|to the power of|the integral of|the sum of)\b|\bsub [A-Za-z0-9]\b|\\(frac|sqrt|times|div)/.test(chunk);
    if (isMath) {
        rateMultiplier = 0.8;    // 20% slower
        pitchMultiplier = 0.95;  // slightly deeper
    }

    // 2. Question (ends in ?)
    if (/\?\s*$/.test(chunk)) {
        rateMultiplier *= 0.95;
        pitchMultiplier = 1.05;
    }

    // 3. ALL-CAPS emphasis
    if (/\b[A-Z]{4,}\b/.test(chunk)) {
        pitchMultiplier = 1.1;
        rateMultiplier *= 0.9;
    }

    u.rate = Math.min(10, Math.max(0.1, ttsRate * rateMultiplier));
    u.pitch = pitchMultiplier;

    // --- NATURAL PAUSING (one advance per utterance, even if both onend and onerror fire) ---
    let advanced = false;
    function advance(pauseTime) {
        if (advanced) return;
        advanced = true;
        ttsCurrentChunk = '';   // finished: pausing during the gap must not replay this chunk
        if (!ttsQueue.length) { _speakNext(session); return; }   // nothing left: finish straight away
        setTimeout(function () { _speakNext(session); }, pauseTime);
    }

    u.onend = function () {
        if (session !== ttsSession) return;
        const lastChar = chunk.trim().slice(-1);
        let pauseTime = 100;
        if (isMath) {
            pauseTime = 700;     // let the maths sink in
        } else if (/[.!?\u2026]/.test(lastChar)) {
            pauseTime = 500;     // full-stop breathing room
        } else if (/[,;:]/.test(lastChar)) {
            pauseTime = 250;     // quick breath
        }
        if (paraBreak) pauseTime = Math.max(pauseTime, 900);   // heading -> body, paragraph -> paragraph
        advance(pauseTime);
    };
    u.onerror = function (e) {
        if (e && (e.error === 'canceled' || e.error === 'interrupted')) return;
        if (session !== ttsSession) return;
        advance(100);
    };

    utterance = u;
    ttsSpeaking = true;
    _syncStripTts();
    try { window.speechSynthesis.speak(u); } catch (e) { ttsSpeaking = false; _syncStripTts(); }
}

function stopReading() {
    ttsSession++;
    ttsQueue = [];
    ttsCurrentChunk = '';
    ttsSpeaking = false;
    ttsPaused = false;
    utterance = null;
    if (ttsSupported) { try { window.speechSynthesis.cancel(); } catch (e) {} }
    _syncStripTts();
}

/** Speak text. opts.force = speak even if the reader is switched off (explicit Replay / Test taps). */
function readText(text, opts) {
    opts = opts || {};
    if (!ttsSupported) return;
    if (!ttsEnabled && !opts.force) return;
    const clean = humanizeLaTeX(text);
    if (!clean) return;
    stopReading();
    ttsLastText = clean;
    ttsQueue = splitForSpeech(clean);
    const session = ttsSession;
    // Small gap after cancel(): some Android builds drop speech started in the same tick.
    setTimeout(function () { _speakNext(session); }, 60);
}

/** Pause/resume that works on every browser (Android's native pause() is unreliable): stop, remember, continue later. */
function toggleReadPause() {
    if (!ttsSupported) return;
    if (ttsPaused) {
        ttsPaused = false;
        const resume = ttsQueue.slice();
        ttsSession++;
        ttsQueue = resume;
        const session = ttsSession;
        _syncStripTts();
        _speakNext(session);
        return;
    }
    if (ttsSpeaking) {
        const remaining = [ttsCurrentChunk].concat(ttsQueue).filter(Boolean);
        ttsSession++;
        try { window.speechSynthesis.cancel(); } catch (e) {}
        ttsQueue = remaining;
        ttsSpeaking = false;
        ttsPaused = true;
        _syncStripTts();
        return;
    }
    replayReading();
}

function updateTtsButtonText() {
    const ttsButton = document.getElementById('tts-toggle-button');
    if (ttsButton) ttsButton.textContent = ttsEnabled ? '🔊 Turn Reader Off' : '🔇 Turn Reader On';
}

function toggleTTS() {
    if (!ttsSupported) {
        showAppNotification("🔇 This browser can't read aloud. Try Chrome or Safari.", "warning", 3500);
        return;
    }
    ttsEnabled = !ttsEnabled;
    localStorage.setItem("ttsEnabled", ttsEnabled);
    stopReading();
    updateTtsButtonText();
    showAppNotification(ttsEnabled ? "🔊 Reader is now ON." : "🔇 Reader is now OFF.");
    logAnalyticsEvent('tts_toggle', ttsEnabled ? 'ON' : 'OFF');
    // Speaking right after the tap also unlocks audio on iPhones.
    if (ttsEnabled) readText('Reader is on.', { force: true });
}

/** The text for whatever is on screen right now (question, essay step or flashcard). '' if nothing. */
function buildCurrentReadText() {
    let textToRead = "";
    if ((currentQuizType === 'mcq' || currentQuizType === 'shortAnswer') && currentQuizData && currentQuizData[currentQuestionIndex]) {
        const qData = currentQuizData[currentQuestionIndex];
        textToRead += "Question " + (currentQuestionIndex + 1) + ". " + humanizeLaTeX(qData.q) + ". ";
        if (qData.options) {
            textToRead += "Here are the options. ";
            qData.options.forEach((opt, i) => {
                // "Option A: text." keeps the letter attached to its answer and ends every option on a full stop (500ms gap)
                textToRead += "Option " + String.fromCharCode(65 + i) + ": " + humanizeLaTeX(opt) + ". ";
            });
        }
    } else if (currentQuizType === 'essay' && currentEssay && currentEssay.steps && currentEssay.steps[currentStepIndex]) {
        const step = currentEssay.steps[currentStepIndex];
        textToRead += "Step " + (currentStepIndex + 1) + ". " + humanizeLaTeX(step.q) + ". ";
        (step.options || []).forEach((opt, i) => {
            textToRead += "Option " + String.fromCharCode(65 + i) + ": " + humanizeLaTeX(opt) + ". ";
        });
    } else if (currentQuizType === 'flashcard' && currentFlashcards && currentFlashcards[currentCardIndex]) {
        const card = currentFlashcards[currentCardIndex];
        textToRead = isCardFront ? "Front: " + humanizeLaTeX(card.front) : "Back: " + humanizeLaTeX(card.back);
    }
    return textToRead;
}

function readCurrentQuestion() {
    if (!ttsEnabled) return;
    const t = buildCurrentReadText();
    if (t) readText(t);
}

function readFlashcard() {
    if (!ttsEnabled) return;
    const card = currentFlashcards[currentCardIndex];
    if (!card) return;
    readText(isCardFront ? "Front: " + humanizeLaTeX(card.front) : "Back: " + humanizeLaTeX(card.back));
}

/** 🔁 Replay: re-reads the current question/card, even when the reader is switched off. */
function replayReading() {
    if (!ttsSupported) {
        showAppNotification("🔇 This browser can't read aloud. Try Chrome or Safari.", "warning", 3500);
        return;
    }
    const t = buildCurrentReadText() || ttsLastText;
    if (!t) { showAppNotification('Nothing to read yet. Open a question first.', 'info', 2200); return; }
    readText(t, { force: true });
}

// ---------- Reader settings (voice + speed) ----------
function _fillTtsVoiceList() {
    const sel = document.getElementById('tts-voice');
    if (!sel) return;
    sel.innerHTML = '';
    const auto = document.createElement('option');
    auto.value = ''; auto.textContent = 'Automatic (best English voice)';
    sel.appendChild(auto);
    const norm = v => String(v.lang || '').replace('_', '-');
    const english = ttsVoices.filter(v => /^en/i.test(norm(v)));
    (english.length ? english : ttsVoices).forEach(v => {
        const o = document.createElement('option');
        o.value = v.voiceURI;
        o.textContent = v.name + ' (' + norm(v) + ')';
        sel.appendChild(o);
    });
    sel.value = ttsVoiceURI && Array.prototype.some.call(sel.options, o => o.value === ttsVoiceURI) ? ttsVoiceURI : '';
}

function _syncTtsSettings() {
    const r = document.getElementById('tts-rate');
    if (r) r.value = ttsRate;
    const l = document.getElementById('tts-rate-label');
    if (l) l.textContent = ttsRate.toFixed(1).replace(/\.0$/, '') + '×';
    const on = document.getElementById('tts-on');
    if (on) on.checked = !!ttsEnabled;
}

function openTtsSettings() {
    if (!ttsSupported) {
        showAppNotification("🔇 This browser can't read aloud. Try Chrome or Safari.", "warning", 3500);
        return;
    }
    _loadVoices();
    _fillTtsVoiceList();
    _syncTtsSettings();
    openOverlay(document.getElementById('tts-modal'));
}

function closeTtsSettings() {
    closeOverlay(document.getElementById('tts-modal'));
    stopReading();
}

function setTtsRate(v) {
    const n = parseFloat(v);
    if (!isFinite(n)) return;
    ttsRate = Math.min(2, Math.max(0.5, n));
    localStorage.setItem('kaeri_tts_rate', String(ttsRate));
    _syncTtsSettings();
}

function setTtsVoice(uri) {
    ttsVoiceURI = uri || '';
    localStorage.setItem('kaeri_tts_voice', ttsVoiceURI);
}

function testTtsVoice() {
    readText('Hello! This is how the reader will sound while you study.', { force: true });
}

// Never keep talking after the student leaves the tab or page.
document.addEventListener('visibilitychange', function () { if (document.hidden) stopReading(); });
window.addEventListener('pagehide', function () { stopReading(); });


// ============================================================
// === 12. GLOBAL EVENT HANDLERS & STUDENT BOARD ===
// === v1.1 PATCH: + beforeunload guard; keyboard "next" prefers shell bar ===
// === v1.2 PATCH: + call hideUnavailableTerms() at boot ===
// ============================================================

function renderStudentBoard() {
    const board = document.getElementById('student-board');
    const annContainer = document.getElementById('board-announcements');
    const motContainer = document.getElementById('board-motivation');
    
    if (!board || !annContainer || !motContainer) return;

    const today = new Date();
    let validAnnouncements = (typeof announcements !== 'undefined' ? announcements : []).filter(item => {
        return item.active && (!item.expiry || new Date(item.expiry) >= today);
    });
    let validMotivation = typeof motivation !== 'undefined' ? motivation : [];

    const hasNews = validAnnouncements.length > 0;
    const hasQuote = validMotivation.length > 0;

    if (!hasNews && !hasQuote) {
        board.style.display = 'none';
        return;
    }

    board.style.display = 'grid';
    board.classList.remove('layout-full-width');

    if (hasNews) {
        const item = validAnnouncements[0];
        annContainer.style.display = 'flex';
        annContainer.className = `board-section type-${item.type || 'info'}`;
        
        let icon = '📢';
        if (item.type === 'warning') icon = '⚠️';
        if (item.type === 'critical') icon = '🔴';
        if (item.type === 'success') icon = '🎉';

        annContainer.innerHTML = `
            <div class="board-announcement-title">
                <span>${icon}</span> ${item.title}
            </div>
            <div class="board-announcement-body">${parseKaeriMarkdown(item.body)}</div>
        `;
    } else {
        annContainer.style.display = 'none';
    }

    if (hasQuote) {
        const randomQuote = validMotivation[Math.floor(Math.random() * validMotivation.length)];
        motContainer.style.display = 'flex';
        motContainer.className = 'board-section board-motivation-box';
        motContainer.innerHTML = `
            <div class="quote-wrapper">
                <span class="quote-icon">💡</span>
                <span class="quote-content">"${randomQuote}"</span>
            </div>
        `;
    } else {
        motContainer.style.display = 'none';
    }

    if ((hasNews && !hasQuote) || (!hasNews && hasQuote)) {
        board.classList.add('layout-full-width');
    }
}

document.addEventListener("keydown", (e) => {
    if ((e.key === 'u' || e.key === 'U') && currentCourse && !hasFullAccess) {
        e.preventDefault();
        openPaymentModal();
        return; 
    }
    
    if (!currentQuizType) return;
    
    if (currentQuizType === "mcq" || currentQuizType === "essay") {
        const options = document.querySelectorAll('input[type="radio"]');
        const selected = document.querySelector('input[type="radio"]:checked');
        let index = Array.from(options).indexOf(selected);
        switch (e.key) {
            case "ArrowDown": case "ArrowRight":
                if (options.length) { index = (index + 1) % options.length; options[index].checked = true; } break;
            case "ArrowUp": case "ArrowLeft":
                if (options.length) { index = (index - 1 + options.length) % options.length; options[index].checked = true; } break;
            case "1": case "a": case "A": if (options[0]) options[0].checked = true; break;
            case "2": case "b": case "B": if (options[1]) options[1].checked = true; break;
            case "3": case "c": case "C": if (options[2]) options[2].checked = true; break;
            case "4": case "d": case "D": if (options[3]) options[3].checked = true; break;
            case "Enter":
                if (currentQuizType === "mcq") checkMcqAnswer();
                if (currentQuizType === "essay") checkEssayStep();
                break;
            case " ": case "n": case "N": {
                // Prefer the shell action bar's last button if it exists (new pattern),
                // otherwise fall back to the legacy "#result button" (original pattern).
                const shellBtns = document.querySelectorAll(".shell-actions button");
                const nextBtn = shellBtns.length
                    ? shellBtns[shellBtns.length - 1]
                    : document.querySelector("#result button");
                if (nextBtn) nextBtn.click();
                break;
            }
        }
    }
    
    if (currentQuizType === "shortAnswer" && e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); 
        checkShortAnswer();
    }
    
    if (currentQuizType === "flashcard") {
        if (e.key === " " || e.key === "Enter") {
             e.preventDefault(); // Stop scrolling
             if (isCardFront) flipCard();
             else if (currentFlashcardMode === 'linear') flipCard(); // Allow flip back in linear
        }

        if (currentFlashcardMode === 'linear') {
            // Linear Shortcuts
            if (e.key === "ArrowLeft") prevFlashcard();
            if (e.key === "ArrowRight") nextFlashcard();
        } else {
            // SRS Shortcuts (Only when answer shown)
            if (!isCardFront) {
                if (e.key === "1") rateCard(0);
                if (e.key === "2") rateCard(3);
                if (e.key === "3") rateCard(4);
                if (e.key === "4") rateCard(5);
            }
        }
    }
    
    if (e.key === "Escape") {
        closePaymentModal();
        closePrintPreview();
        closeDocViewer();
    }
});

// Guard against accidental refresh while a quiz is in progress.
// Scoped to MCQ / SA / Essay (flashcards don't hold unsaved progress).
window.addEventListener('beforeunload', function (e) {
    const active = ['mcq', 'shortAnswer', 'essay'].includes(currentQuizType)
        && currentQuizData.length > 0
        && currentQuestionIndex < currentQuizData.length;
    if (active) {
        e.preventDefault();
        e.returnValue = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Disable term buttons whose dataset file isn't yet in the manifest.
    hideUnavailableTerms();

    const closeBtn = document.querySelector('.close-print-preview');
    if(closeBtn) closeBtn.addEventListener('click', closePrintPreview);
    
    const modal = document.getElementById('print-preview-modal');
    if(modal) modal.addEventListener('click', function(e) {
        if (e.target === this) closePrintPreview();
    });
    
    const paymentModal = document.getElementById('payment-modal');
    if(paymentModal) paymentModal.addEventListener('click', function(e) {
        if (e.target === this) closePaymentModal();
    });
    
    setTimeout(renderStudentBoard, 100);

    // ============================================================
    // --- NEW: PAYMENT FORM EVENT BINDINGS & GLOBAL EXPORTS ---
    // ============================================================

    // 1. Bind Submit button
    const payBtn = document.getElementById('paySubmitBtn');
    if (payBtn) payBtn.addEventListener('click', handleSubmit);

    // 2. Bind File input change
    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.addEventListener('change', function() { handleFile(this); });

    // 3. Bind Course & Term dropdowns
    const courseSelect = document.getElementById('courseSelect');
    const termSelect = document.getElementById('termSelect');
    if (courseSelect) courseSelect.addEventListener('change', updateTerms);
    if (termSelect) termSelect.addEventListener('change', updatePrice);

    // 4. Expose new functions globally so inline onclick attributes work
    window.switchPayTab = switchPayTab;
    window.checkHistory = checkHistory;
    window.copyCode = copyCode;
    window.handleSubmit = handleSubmit;
    window.handleFile = handleFile;
    window.loadCourses = loadCourses;
    window.showAlert = showAlert;
    window.openPaymentModal = openPaymentModal;
    window.closePaymentModal = closePaymentModal;
    window.lipilaCourseChanged = lipilaCourseChanged;
    window.lipilaTermChanged = lipilaTermChanged;

    // 5. CRITICAL: Expose the existing verifyCodeFromModal() so the "Activate Code" button works
    window.verifyCodeFromModal = verifyCodeFromModal;
});

// ============================================================
// === 13. ADDITIONAL CSS FOR PROFESSIONAL VIEWER & SKELETON ===
// ============================================================
(function addStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .viewer-loader {
            position: absolute;
            top: 50px; /* below header */
            left: 0;
            width: 100%;
            height: calc(100% - 100px); /* accounting for header + footer */
            background: #1a1a2e;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10;
        }

        .viewer-skeleton-box {
            width: 80%;
            height: 60%;
            background: linear-gradient(90deg, #2b3a55 25%, #3e506e 50%, #2b3a55 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 8px;
        }

        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .skeleton {
            height: 180px;
            background: linear-gradient(90deg, #2b3a55 25%, #3e506e 50%, #2b3a55 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 10px;
        }

        /* ── Print modal preview item styles ── */
        .print-item {
            margin-bottom: 14px;
            padding: 12px 14px;
            border: 1px solid #dde3ea;
            border-left: 5px solid #1a73e8;
            border-radius: 5px;
            background: #ffffff;
            page-break-inside: avoid;
        }
        .print-item.essay  { border-left-color: #e67e00; }
        .print-item.sa     { border-left-color: #b5830f; }
        .print-item.flash  { border-left-color: #6f42c1; }
        .item-label {
            font-size: 0.72em; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.8px;
            color: #1a73e8; margin-bottom: 5px;
        }
        .print-item.essay .item-label { color: #e67e00; }
        .print-item.sa    .item-label { color: #b5830f; }
        .print-item.flash .item-label { color: #6f42c1; }
        .item-q   { font-size: 0.95em; color: #1a1a1a; line-height: 1.5; margin-bottom: 6px; }
        .item-ans { font-size: 0.9em; color: #145a32; background: #eafaf1; padding: 5px 8px; border-radius: 3px; margin-bottom: 5px; font-weight: 600; }
        .item-exp { font-size: 0.87em; color: #444; background: #f7f8fa; padding: 5px 8px; border-radius: 3px; line-height: 1.45; }

        /* ── Fallback: hide app UI if user presses Ctrl+P directly ── */
        @media print {
            body > *:not(#printable-summary) { display: none !important; }
            #printable-summary { display: block !important; }
        }
    `;
    document.head.appendChild(style);
})();

// ============================================================
// === REORGANISATION LAYER (navigation, quiz strip, referral) ===
// === v1.1 PATCH: + URL routing + deep-link restore + backToMenu wrapper ===
// ============================================================

// ---------- URL routing (course + term in query string) ----------
// Sets up deep-linking: ?course=CS110&term=T1 restores the course on load,
// and the browser back button works without needing a UI back handler.
let _suppressNextNavigate = false;

function buildURL(route) {
    const p = new URLSearchParams();
    if (route.course) p.set('course', route.course);
    if (route.term)   p.set('term', route.term);
    const qs = p.toString();
    return qs ? location.pathname + '?' + qs : location.pathname;
}

function parseURL() {
    const p = new URLSearchParams(location.search);
    return {
        course: p.get('course'),
        term:   p.get('term')
    };
}

function navigate(route, opts) {
    opts = opts || {};
    if (_suppressNextNavigate) { _suppressNextNavigate = false; return; }
    const next = Object.assign({}, route);
    try {
        if (opts.replace) history.replaceState(next, '', buildURL(next));
        else             history.pushState(next, '', buildURL(next));
    } catch (e) {}
}

function applyRoute(route) {
    // Topmost overlay absorbs Escape/Back first.
    if (typeof overlayStack !== 'undefined' && overlayStack.length > 0) {
        closeOverlay(overlayStack[overlayStack.length - 1].el);
        return;
    }

    if (!route.course || !route.term) {
        if (getViewedScope().course || currentCourse) { _suppressNextNavigate = true; backToMenu(); }
        return;
    }

    const key = (route.course + '_' + route.term).toUpperCase();
    const viewed = getViewedScope();
    const viewedKey = (viewed.course && viewed.term) ? viewed.course + '_' + viewed.term : '';
    if (key !== viewedKey) {
        _suppressNextNavigate = true;
        loadCourse(route.course, route.term);
    }
}

window.addEventListener('popstate', function (e) {
    const route = e.state || parseURL();
    applyRoute(route);
});

// Wrap backToMenu so every exit clears the MCQ wizard state.
// (loadCourse already suppresses an extra history push via _suppressNextNavigate.)
(function () {
    const orig = window.backToMenu;
    if (typeof orig !== 'function') return;
    window.backToMenu = function () {
        try { resetMcqWizardState(); } catch (e) {}
        const out = orig.apply(this, arguments);
        try { navigate({}); } catch (e) {}
        return out;
    };
})();

// ---------- Welcome <-> Courses ----------
function _reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function collapseAllTerms() {
    document.querySelectorAll('.term-buttons').forEach(s => {
        s.style.display = 'none';
        if (s.previousElementSibling) s.previousElementSibling.classList.remove('active');
    });
}

function _swapViews(outEl, inEl, instant) {
    if (!outEl || !inEl) return;
    outEl.style.transition = '';
    inEl.style.transition = '';
    if (instant || _reducedMotion()) {
        outEl.style.display = 'none';
        inEl.style.display = 'block';
        outEl.style.opacity = '';
        inEl.style.opacity = '';
    } else {
        outEl.style.transition = 'opacity 0.25s ease';
        outEl.style.opacity = '0';
        setTimeout(() => {
            outEl.style.display = 'none';
            outEl.style.opacity = '';
            inEl.style.opacity = '0';
            inEl.style.display = inEl.dataset.display || 'block';
            inEl.style.transition = 'opacity 0.35s ease';
            requestAnimationFrame(() => { inEl.style.opacity = '1'; });
        }, 250);
    }
    window.scrollTo(0, 0);
}

function showCourses(instant) {
    _swapViews(document.getElementById('welcome-view'), document.getElementById('courses-view'), instant);
}

function hideCourses() {
    collapseAllTerms();
    _swapViews(document.getElementById('courses-view'), document.getElementById('welcome-view'), false);
}

// ---------- Quiz strip ----------
let _stripState = { current: 0, total: 0 };

// Focus mode: whenever a mode screen is open (anything inside #quiz-form / #result),
// the course shell is hidden by CSS (body.in-mode) and the top strip is the navigation.
function _syncFocusMode() {
    const qf = document.getElementById('quiz-form');
    const rs = document.getElementById('result');
    const inCourse = !!document.body.getAttribute('data-course');
    const open = inCourse && ((qf && qf.childNodes.length > 0) || (rs && rs.childNodes.length > 0));
    const was = document.body.classList.contains('in-mode');
    document.body.classList.toggle('in-mode', !!open);
    document.body.classList.toggle('final-screen', !!open && !!document.getElementById('final-anchor'));
    if (!!open !== was) window.scrollTo(0, 0);
    // Setup / list / dashboard screens (no running quiz): strip shows the course + term
    if (open && !document.body.classList.contains('quiz-running')) {
        const c = document.getElementById('qs-count');
        const f = document.getElementById('qs-fill');
        const t = String(currentTerm || '').replace('T', '');
        if (c) c.textContent = `${currentCourse || ''} · Term ${t}`;
        if (f) f.style.width = '0%';
        _syncStripTts();
    }
}
(function () {
    const mo = new MutationObserver(_syncFocusMode);
    ['quiz-form', 'result'].forEach(id => {
        const el = document.getElementById(id);
        if (el) mo.observe(el, { childList: true });
    });
})();

function _syncStripTts() {
    const b = document.getElementById('qs-tts');
    if (b) b.textContent = ttsEnabled ? '🔊' : '🔇';
    const p = document.getElementById('qs-pause');
    if (p) p.textContent = ttsPaused ? '▶️' : '⏸';
    document.body.classList.toggle('tts-active', !!(ttsSpeaking || ttsPaused));
    const on = document.getElementById('tts-on');
    if (on) on.checked = !!ttsEnabled;
}

function _syncQuizStrip(current, total, percent) {
    _stripState = { current, total };
    const running = total > 0 && !!document.body.getAttribute('data-course');
    document.body.classList.toggle('quiz-running', running);
    if (!running) { _syncFocusMode(); return; }
    _syncFocusMode();
    const prefix = { mcq: 'Q', shortAnswer: 'S', essay: 'E', flashcard: 'C' }[currentQuizType] || 'Q';
    const c = document.getElementById('qs-count');
    const f = document.getElementById('qs-fill');
    if (c) c.textContent = `${prefix} ${current} / ${total}`;
    if (f) f.style.width = `${percent}%`;
    _syncStripTts();
}

function _leaveQuiz() {
    stopReading();
    document.getElementById('quiz-form').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    updateProgress(0, 0);
    window.scrollTo(0, 0);
}

function exitQuiz() {
    const inProgress = _stripState.total > 0 && _stripState.current < _stripState.total && currentQuizType !== 'dashboard';
    if (inProgress) {
        const m = document.getElementById('exit-modal');
        if (m) { m.classList.add('show'); return; }
    }
    _leaveQuiz();
}
function closeExitModal() {
    const m = document.getElementById('exit-modal');
    if (m) m.classList.remove('show');
}
function confirmExitQuiz() {
    closeExitModal();
    _leaveQuiz();
}

// Keep the strip's TTS icon in sync with the existing reader toggle
(function () {
    const orig = window.updateTtsButtonText;
    if (typeof orig === 'function') {
        window.updateTtsButtonText = function () { orig.apply(this, arguments); _syncStripTts(); };
    }
})();

// Setup screens always start from "no quiz running" (hides the strip), then run the original
['renderQuiz', 'renderShortAnswers', 'renderEssaySimulation', 'renderFlashcardTopics'].forEach(name => {
    const orig = window[name];
    if (typeof orig !== 'function') return;
    window[name] = function () { updateProgress(0, 0); const out = orig.apply(this, arguments); _focusScreen(); return out; };
});

// Soft ambassador pitch on completion screens
function _addSoftPitch() {
    const r = document.getElementById('result');
    const host = (r && r.children.length) ? r : document.getElementById('quiz-form');
    if (!host || host.querySelector('.soft-pitch')) return;
    const d = document.createElement('div');
    d.className = 'soft-pitch';
    d.innerHTML = `Enjoying the quiz? <a href="${AMBASSADOR_PORTAL_URL}" target="_blank" rel="noopener">🚀 Become an Ambassador →</a>`;
    host.appendChild(d);
}
['showFinalMcqScore', 'showFinalShortAnswerScore', 'showFinalEssayScore', 'showFlashcardCompletion'].forEach(name => {
    const orig = window[name];
    if (typeof orig !== 'function') return;
    window[name] = function () { const out = orig.apply(this, arguments); setTimeout(_addSoftPitch, 0); return out; };
});

// ---------- Progress dashboard: empty state ----------
(function () {
    const orig = window.renderProgressDashboard;
    if (typeof orig !== 'function') return;
    window.renderProgressDashboard = function () {
        const out = orig.apply(this, arguments);
        try {
            const d = _loadProgress();
            if (currentTermKey && (!d.sessions || d.sessions.length === 0)) {
                document.getElementById('quiz-form').innerHTML = `
                    <div class="empty-progress">
                        <div style="font-size:2.6rem;">📊</div>
                        <h3 style="margin:8px 0;">No Progress Yet</h3>
                        <p style="color:#a0a8b4; margin:0;">Finish a quiz or review some flashcards and your stats will show up here.</p>
                        <div class="ep-actions">
                            <button type="button" onclick="renderQuiz()" style="background:#007bff;color:#fff;border:none;padding:12px 18px;border-radius:8px;">Start MCQ Quiz</button>
                            <button type="button" onclick="renderFlashcardTopics()" style="background:#6f42c1;color:#fff;border:none;padding:12px 18px;border-radius:8px;">Study Flashcards</button>
                        </div>
                        <button type="button" onclick="exitQuiz()" class="back-button">⬅️ Back to Course</button>
                    </div>`;
            }
        } catch (e) { /* keep the original dashboard */ }
        return out;
    };
})();

// ============================================================
// === FOCUS SCROLLER (auto-scroll into focus) ===
// ============================================================
function _stripOffset() {
    const st = document.getElementById('quiz-strip');
    const h = st && st.offsetHeight ? st.offsetHeight : 44;
    return h + 8;
}
function _scrollBehavior() { return _reducedMotion() ? 'auto' : 'smooth'; }

// Put the top of `el` just under the top strip
function _scrollToTop(el) {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - _stripOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: _scrollBehavior() });
}

// Scroll the minimum needed so `el` (feedback + Next button) is on screen
function _ensureVisible(el) {
    if (!el || !el.childNodes.length) return;
    const top = _stripOffset(), vh = window.innerHeight, pad = 16;
    const r = el.getBoundingClientRect();
    let dy = 0;
    if (r.height > vh - top - pad) dy = r.top - top;            // taller than screen: start at its top
    else if (r.bottom > vh - pad) dy = r.bottom - (vh - pad);   // bring the Next/Finish button into view
    else if (r.top < top) dy = r.top - top;
    if (Math.abs(dy) > 2) window.scrollBy({ top: dy, behavior: _scrollBehavior() });
}

// New screen (setup, question, card, list): align it under the strip
function _focusScreen() {
    _syncFocusMode();
    const qf = document.getElementById('quiz-form');
    if (!qf || !qf.childNodes.length) return;
    mountScreen(qf);
    const delta = qf.getBoundingClientRect().top - _stripOffset();
    if (Math.abs(delta) > 6) _scrollToTop(qf);
}

// After answering: bring the verdict, explanation and Next button into focus
(function () {
    const rs = document.getElementById('result');
    if (!rs) return;
    new MutationObserver(() => {
        if (!rs.childNodes.length || document.getElementById('final-anchor')) return;
        requestAnimationFrame(() => _ensureVisible(rs));
        setTimeout(() => { if (rs.childNodes.length) _ensureVisible(rs); }, 350); // after KaTeX/images settle
    }).observe(rs, { childList: true });
})();

// Final screen: show only the score card, fixed, and scroll the score into focus
function _enterFinalScreen() {
    const qf = document.getElementById('quiz-form');
    const rs = document.getElementById('result');
    if (!qf) return;
    if (rs) rs.innerHTML = '';
    if (!document.getElementById('final-anchor')) {
        const a = document.createElement('span');
        a.id = 'final-anchor';
        a.setAttribute('aria-hidden', 'true');
        qf.insertBefore(a, qf.firstChild);
    }
    _syncFocusMode();
    const c = document.getElementById('qs-count');
    const f = document.getElementById('qs-fill');
    if (c) c.textContent = '🏁 Results';
    if (f) f.style.width = '100%';
    _scrollToTop(qf);
    setTimeout(() => { if (document.getElementById('final-anchor')) _scrollToTop(qf); }, 300);
}
['showFinalMcqScore', 'showFinalShortAnswerScore', 'showFinalEssayScore', 'showFlashcardCompletion'].forEach(name => {
    const orig = window[name];
    if (typeof orig !== 'function') return;
    window[name] = function () { const out = orig.apply(this, arguments); _enterFinalScreen(); return out; };
});

// Other screens that replace the content in place: align them too
['showFlashcardModeSelection', 'renderProgressDashboard'].forEach(name => {
    const orig = window[name];
    if (typeof orig !== 'function') return;
    window[name] = function () { const out = orig.apply(this, arguments); _focusScreen(); return out; };
});

// ---------- Reset modal ----------
function closeResetModal() {
    const m = document.getElementById('reset-modal');
    if (m) m.classList.remove('show');
}
function confirmResetProgress() {
    closeResetModal();
    try { localStorage.removeItem(_progressKey()); } catch (e) {}
    showAppNotification('\u{1F5D1}\uFE0F Progress reset.', 'info', 2000);
    setTimeout(renderProgressDashboard, 300);
}

// ---------- Draggable WhatsApp (position saved; double-click or long-press resets) ----------
function initDraggableWhatsApp() {
    const el = document.getElementById('draggable-wa');
    if (!el) return;
    const KEY = 'wa_position_v1';
    let dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0, pressTimer = null, longPressed = false;

    const clamp = (x, y) => ({
        x: Math.min(Math.max(8, x), window.innerWidth - el.offsetWidth - 8),
        y: Math.min(Math.max(8, y), window.innerHeight - el.offsetHeight - 8)
    });
    const place = (x, y) => {
        const p = clamp(x, y);
        el.style.left = p.x + 'px'; el.style.top = p.y + 'px';
        el.style.right = 'auto'; el.style.bottom = 'auto';
    };
    const reset = () => {
        el.style.left = el.style.top = el.style.right = el.style.bottom = '';
        try { localStorage.removeItem(KEY); } catch (e) {}
    };

    try {
        const s = JSON.parse(localStorage.getItem(KEY) || 'null');
        if (s && isFinite(s.x) && isFinite(s.y)) place(s.x, s.y);
    } catch (e) {}
    window.addEventListener('resize', () => { if (el.style.left) place(parseFloat(el.style.left), parseFloat(el.style.top)); });

    el.addEventListener('pointerdown', e => {
        dragging = true; moved = false; longPressed = false;
        sx = e.clientX; sy = e.clientY;
        const r = el.getBoundingClientRect(); ox = r.left; oy = r.top;
        try { el.setPointerCapture(e.pointerId); } catch (_) {}
        pressTimer = setTimeout(() => {
            if (!moved) { longPressed = true; reset(); showAppNotification('WhatsApp button reset to default position.', 'info', 2000); }
        }, 700);
    });
    el.addEventListener('pointermove', e => {
        if (!dragging) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        if (!moved && Math.hypot(dx, dy) < 8) return;
        moved = true; clearTimeout(pressTimer);
        place(ox + dx, oy + dy);
    });
    el.addEventListener('pointerup', () => {
        if (!dragging) return;
        dragging = false; clearTimeout(pressTimer);
        if (moved) {
            const r = el.getBoundingClientRect();
            try { localStorage.setItem(KEY, JSON.stringify({ x: r.left, y: r.top })); } catch (e) {}
        }
    });
    el.addEventListener('pointercancel', () => { dragging = false; clearTimeout(pressTimer); });
    el.addEventListener('click', e => { if (moved || longPressed) { e.preventDefault(); moved = false; longPressed = false; } });
    el.addEventListener('dblclick', e => { e.preventDefault(); reset(); });
}

// ---------- Ambassador referral capture (?ref=) ----------
let _pendingRef = null;
const _REF_FLAG = 'kaeri_amb_tracked';

function _validRef(r) { return typeof r === 'string' && /^[A-Za-z0-9_-]{1,64}$/.test(r); }

function checkForReferral() {
    if (!AMBASSADOR_API_URL) return;
    const ref = new URLSearchParams(window.location.search).get('ref');
    if (!_validRef(ref)) return;
    try { if (localStorage.getItem(_REF_FLAG) === ref) return; } catch (e) {}
    _pendingRef = ref;
    const m = document.getElementById('referral-modal');
    if (m) m.classList.add('show');
}

function _closeReferral(markDone) {
    const m = document.getElementById('referral-modal');
    if (m) m.classList.remove('show');
    if (markDone && _pendingRef) { try { localStorage.setItem(_REF_FLAG, _pendingRef); } catch (e) {} }
}

function skipAmbassadorTracking() { _closeReferral(true); }

function submitAmbassadorReferral() {
    const input = document.getElementById('referral-email');
    const err = document.getElementById('referral-error');
    const btn = document.getElementById('referral-submit');
    const email = (input.value || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'Please enter a valid email address.'; return; }
    err.textContent = '';
    btn.disabled = true; btn.textContent = 'Sending...';

    let fp = localStorage.getItem('device_fp');
    if (!fp) { fp = navigator.userAgent + '_' + Math.random().toString(36).substring(7); localStorage.setItem('device_fp', fp); }

    fetch(AMBASSADOR_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'logReferral', ref: _pendingRef, visitorEmail: email, ip: '', deviceFingerprint: fp })
    })
    .then(res => res.text())
    .then(t => {
        let data = null;
        try { data = JSON.parse(t); } catch (e) { throw new Error('bad-response'); }
        if (data && data.success === false) throw new Error(data.message || 'failed');
        _closeReferral(true);
        showAppNotification('✅ Thanks! Your friend has been credited.', 'success', 3000);
    })
    .catch(() => {
        err.textContent = 'Could not send right now. Check your connection and try again.';
    })
    .finally(() => { btn.disabled = false; btn.textContent = 'Continue'; });
}

// ---------- Boot ----------
document.addEventListener('DOMContentLoaded', function () {
    // Live prices/durations from PAY-AMB (non-blocking if offline)
    try {
        loadSystemConfig().catch(function (err) {
            console.warn('[config] live prices unavailable:', err && err.message);
            refreshPriceUI();
        });
    } catch (e) {}
    try { _cleanupRetiredMcqSrs(); } catch (e) {}
    initDraggableWhatsApp();
    document.querySelectorAll('[data-amb-link]').forEach(a => { a.href = AMBASSADOR_PORTAL_URL; });
    checkForReferral();

    // Deep link: ?view=courses (unknown values fall back to Welcome)
    const view = new URLSearchParams(window.location.search).get('view');
    if (view === 'courses') showCourses(true);

    // Deep link: ?course=X&term=Y restores the course directly
    const initialRoute = parseURL();
    if (initialRoute.course && initialRoute.term) {
        setTimeout(function () {
            const key = initialRoute.course + '_' + initialRoute.term;
            _suppressNextNavigate = true; // URL already reflects the route
            loadCourse(initialRoute.course, initialRoute.term);
        }, 200);
    }

    // Escape / backdrop close for the custom modals
    function _closeCustomModal(m) {
        if (m.id === 'reset-modal') closeResetModal();
        else if (m.id === 'exit-modal') closeExitModal();
        else if (m.id === 'referral-modal') skipAmbassadorTracking();
        else if (m.id === 'tts-modal') closeTtsSettings();
        else if (m.id === 'pool-reset-modal') closePoolResetModal();
    }
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        document.querySelectorAll('.r-modal.show').forEach(_closeCustomModal);
    });
    document.querySelectorAll('.r-modal').forEach(m => m.addEventListener('click', e => {
        if (e.target === m) _closeCustomModal(m);
    }));

    // body.modal-open: lock scroll + hide floating WhatsApp whenever ANY modal is open
    function syncModalOpen() {
        const doc = document.getElementById('smart-doc-viewer');
        const open = ['payment-modal', 'print-preview-modal'].some(id => {
            const el = document.getElementById(id); return el && el.classList.contains('show');
        }) || !!document.querySelector('.r-modal.show')
          || !!(doc && doc.style.display && doc.style.display !== 'none');
        document.body.classList.toggle('modal-open', open);
    }
    const mo = new MutationObserver(syncModalOpen);
    ['payment-modal', 'print-preview-modal'].forEach(id => {
        const el = document.getElementById(id);
        if (el) mo.observe(el, { attributes: true, attributeFilter: ['class'] });
    });
    document.querySelectorAll('.r-modal').forEach(el => mo.observe(el, { attributes: true, attributeFilter: ['class'] }));

    // Initial sync — catches the rare case where the browser restores
    // a page from back-forward cache with a modal already open.
    syncModalOpen();

    // the document viewer is injected on demand
    const _inject = window.injectDocViewerHTML;
    if (typeof _inject === 'function') {
        window.injectDocViewerHTML = function () {
            const out = _inject.apply(this, arguments);
            const dv = document.getElementById('smart-doc-viewer');
            if (dv) mo.observe(dv, { attributes: true, attributeFilter: ['style'] });
            return out;
        };
    }
});

// ---------- Brand logo: one source (--brand-logo in index.html) ----------
function _brandLogoURI() {
    try {
        const v = getComputedStyle(document.documentElement).getPropertyValue('--brand-logo') || '';
        const m = v.match(/url\(\s*['"]?(data:[^'")]+)['"]?\s*\)/);
        return m ? m[1] : '';
    } catch (e) { return ''; }
}
function _brandLogoImg(px, radius) {
    const u = _brandLogoURI();
    return u ? `<img src="${u}" alt="Kaeri EdTech" style="width:${px}px;height:${px}px;border-radius:${radius}px;object-fit:contain;display:block;">` : '';
}
(function () {
    function applyFavicon() {
        const u = _brandLogoURI();
        if (!u) return;
        let l = document.querySelector('link[rel="icon"]');
        if (!l) {
            l = document.createElement('link');
            l.rel = 'icon';
            document.head.appendChild(l);
        }
        if (l.href !== u) l.href = u;
    }
    applyFavicon();
    // Retry on window load in case the stylesheet resolved after this
    // script parsed. Cheap insurance, runs once.
    window.addEventListener('load', applyFavicon);
})(); 