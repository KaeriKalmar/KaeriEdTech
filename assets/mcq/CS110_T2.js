// ═══════════════════════════════════════════════════════════════════════
// CS110 | T2 — LIVE DATASET
// Deploy: assets/mcq/CS110_T2.js
// Format: window.__MCQ__["CS110_T2"]
//
// Units 7–10 · 315 items
// QA: no boilerplate, Unit 10 gaps filled, V2.0 option structure
// Source-dependence pass: Class 1 pointers removed (no "the source",
// Listing/Exercise/Appendix references). Self-contained teaching only.
// ═══════════════════════════════════════════════════════════════════════

window.__MCQ__ = window.__MCQ__ || {};
window.__MCQ__["CS110_T2"] = window.__MCQ__["CS110_T2"] || [];
window.__MCQ__["CS110_T2"].push(
  // ═══════════════════════════════════════════════════════
  //  UNIT 7 · THE INTERNET  (89 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T2-U7-7.1-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "A student says the Internet and the World Wide Web are the same thing. Which statement corrects this?",
    options: [
      "The Internet is the physical network; the Web is one service on it",
      "The Internet is a collection of websites; the Web is the cables",
      "The Internet uses HTTP while the Web uses FTP for files",
      "The Web is larger than the Internet because it has more content",
    ],
    optionRationales: [
      null,
      "You have reversed the two. The Web is the collection of websites; the Internet is the physical infrastructure — the cables, routers, and satellites — that carries them.",
      "You have confused protocols with services. HTTP and FTP are both protocols that run over the Internet; neither defines it. The Web uses HTTP, not FTP.",
      "You are comparing scope rather than category. The Internet is a network of networks; the Web is a service. Size cannot determine which is larger when they are different kinds of things.",
    ],
    correct: 0,
    explanation: "## Structure vs. Content\n\nThink of the Internet as the highway system — the physical cables, routers, and satellites that connect computers worldwide. The World Wide Web is just one kind of traffic on that highway: the pages you view in a browser. \n\nEmail, streaming, and online gaming also travel the same highway but are not part of the Web. Infrastructure and service are different categories.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "Which U.S. government agency initiated the networking project that became the Internet?",
    options: [
      "The National Aeronautics and Space Administration",
      "The Advanced Research Projects Agency",
      "The Federal Communications Commission",
      "The National Science Foundation",
    ],
    optionRationales: [
      "NASA also ran early computer networks, but it was not the agency that started ARPANET. NASA's interest was spaceflight support; ARPA's was military communication resilience.",
      null,
      "The FCC regulates communications but does not build networks. It sets rules for how private companies operate; it did not initiate ARPANET. The FCC is a regulator; ARPA was a research funder.",
      "The NSF funded NSFNET, which extended ARPANET in the 1980s, but it did not start the project. NSFNET came later. Both are federal funders of academic networking, but only ARPA's project became the Internet's direct ancestor.",
    ],
    correct: 1,
    explanation: "## History\n\nARPANET was funded by the Advanced Research Projects Agency (ARPA), an arm of the U.S. Department of Defense. Launched in 1969, it was designed so that if one part of the network were destroyed, the rest would keep communicating. \n\nThe NSF later connected universities through NSFNET, but the origin project was ARPA's.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "ARPANET's designers wanted the network to keep working even if one location were destroyed. Which design choice makes that possible?",
    options: [
      "Every node stores a complete copy of each message",
      "Messages can travel through several alternate paths",
      "A central controller reroutes around failed nodes",
      "Every node broadcasts to all others continuously",
    ],
    optionRationales: [
      "This describes replication, not routing. Storage redundancy would preserve data, but it would not help if the node holding the only copies were destroyed.",
      null,
      "This describes a star topology with a central brain. A central controller would itself be a single point of failure — destroy it and the network dies.",
      "This describes flooding, which is wasteful and not how ARPANET worked. Broadcast increases traffic to every node; ARPANET forwarded messages only along selected paths.",
    ],
    correct: 1,
    explanation: "## Survival Strategy\n\nThe defining feature of ARPANET was decentralization. No single node controlled the network, and messages could be routed through any of several paths. \n\nIf one node failed, traffic simply took a different route. This is what made the network survivable. A central controller would have reintroduced the very vulnerability the design was meant to eliminate.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "How many host computers made up the original ARPANET at its launch in 1969?",
    options: [
      "Two",
      "Three",
      "Four",
      "Six",
    ],
    optionRationales: [
      "Two was the number in some early demonstrations, but not in the ARPANET launch. The project connected more sites than that from the start.",
      "Three is close but not exact. The launch involved one more university than three.",
      null,
      "Six overcounts. The network grew quickly after launch, so it is easy to confuse the launch figure with the size a year or two later.",
    ],
    correct: 2,
    explanation: "## Humble Beginnings\n\nIn 1969, ARPANET consisted of four host computers, one each at UCLA, UC Santa Barbara, the Stanford Research Institute, and the University of Utah. \n\nThe entire Internet began with four machines. Today billions of devices are online; the contrast is the point of the fact.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "Which of the following institutions was NOT one of the four original ARPANET hosts?",
    options: [
      "Massachusetts Institute of Technology",
      "Stanford Research Institute",
      "University of California, Los Angeles",
      "University of Utah",
    ],
    optionRationales: [
      null,
      "Stanford Research Institute was one of the four. It hosted the Network Information Center and one of the first ARPANET nodes.",
      "UCLA was one of the four. It hosted the first ARPANET node and the first message ever sent.",
      "The University of Utah was one of the four. It hosted graphics research for ARPANET and remained a key node.",
    ],
    correct: 0,
    explanation: "## The First Four\n\nThe four original ARPANET hosts were UCLA, UC Santa Barbara, the Stanford Research Institute, and the University of Utah. \n\nMIT is a major computing institution today but joined ARPANET later. Being famous in computing does not make an institution an original host.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-006",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "A network link can carry 100 Mbps. A second link can carry 1 Gbps. What does the difference describe?",
    options: [
      "The latency of each link — the delay before data arrives",
      "The bandwidth of each link — the capacity of the channel",
      "The throughput of each link — the number of users online",
      "The protocol of each link — the rules for encoding data",
    ],
    optionRationales: [
      "You are describing latency, not bandwidth. Latency measures how long it takes for a single bit to travel from sender to receiver.",
      null,
      "You have combined two different concepts. Throughput is the actual rate of successful data transfer, which is always at or below bandwidth.",
      "Protocols define how data is formatted and transmitted; they do not describe capacity. Two links running the same protocol can have very different bandwidths.",
    ],
    correct: 1,
    explanation: "## The 'Pipe' Analogy\n\nBandwidth is the capacity of a communication channel — how much data it can carry per unit of time. Think of a water pipe: bandwidth is the width of the pipe, not the speed of the water. \n\nA wider pipe carries more water at the same speed. Mbps and Gbps are units of this capacity.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-007",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "Which of the following best describes net neutrality?",
    options: [
      "The rule that all Internet access must be free",
      "The law that traffic may not be inspected",
      "The principle that all sites have equal priority",
      "The policy that government owns the backbone",
    ],
    optionRationales: [
      "You are describing free access, which is a separate policy debate. Net neutrality is about how traffic is treated after a user is already connected.",
      "You are describing privacy regulation, not neutrality. Providers may inspect some traffic for security or billing.",
      null,
      "You are describing public ownership of infrastructure, which is not net neutrality. The Internet backbone is mostly privately owned in most countries.",
    ],
    correct: 2,
    explanation: "## Fairness Online\n\nNet neutrality is the principle that one website has the same value or priority as any other, resulting in equal and unrestricted access. \n\nUnder net neutrality, an Internet provider may not slow down a small site while giving a large site a fast lane. All traffic is treated the same.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-008",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "Under net neutrality, a small blog and a large streaming service send traffic through the same provider. What must the provider do?",
    options: [
      "Prioritize the streaming service for higher volume",
      "Charge the streaming service for its bandwidth",
      "Block the blog to free up capacity",
      "Treat both traffic streams equally",
    ],
    optionRationales: [
      "You are applying a volume rule, which is what net neutrality prohibits. Traffic volume is not a permitted basis for prioritization.",
      "You are describing usage-based billing, which is a separate arrangement. Net neutrality does not require bandwidth-neutral pricing.",
      "You are describing active discrimination, which net neutrality explicitly forbids. Blocking one service to favor another is the clearest violation of the principle.",
      null,
    ],
    correct: 3,
    explanation: "## The Open Web\n\nNet neutrality requires that an Internet service provider carry all traffic with equal priority regardless of source, destination, or content. \n\nA provider may charge different rates for different bandwidth tiers, but it may not decide that one service's packets travel faster than another's. The provider carries bits; it does not curate the experience.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.1-009",
    mainTopic: "Unit 7: The Internet",
    topic: "7.1 Internet Evolution",
    q: "What is the primary role of an Internet Service Provider (ISP)?",
    options: [
      "To sell Internet access to users",
      "To regulate Internet traffic nationally",
      "To maintain the backbone cables",
      "To develop web browsers",
    ],
    optionRationales: [
      null,
      "You are describing a regulator, not an ISP. Regulators set policy; ISPs sell access. In some countries the two interact closely, but the roles are distinct.",
      "You are describing backbone operators, which overlap with ISPs but are not the definition. A regional ISP may lease backbone capacity rather than own it.",
      "You are describing software vendors. Browser developers (Google, Mozilla, Apple) are not ISPs. An ISP delivers connectivity; a software vendor builds tools that use that connectivity.",
    ],
    correct: 0,
    explanation: "## Your Gateway\n\nAn ISP is a company that sells Internet access to individuals and organizations. In Zambia, examples include MTN, Airtel, and Liquid. \n\nThe ISP is the middleman that connects your device to the global network and, under net neutrality, must provide the same level of service to all websites regardless of content or purpose.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is a web page?",
    options: [
      "A document that can hold text, images, and links",
      "An application that runs inside a system",
      "A group of websites kept on one server",
      "The server that stores and serves content",
    ],
    optionRationales: [
      null,
      "You are describing a program, not a page. A web page is content; a program is code. The browser is a program; the page it displays is a document.",
      "You have reversed the relationship. A website is a collection of web pages, not the other way around.",
      "You are describing a web server, not a web page. The server is hardware and software; the page is the content it delivers.",
    ],
    correct: 0,
    explanation: "## The Document\n\nA web page is a formatted document that can contain text, graphics, sound, video, and links to other pages. It is what the browser renders on screen. \n\nA collection of related pages forms a website, and the pages are stored on a web server. The page is the unit of content a user reads.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "A webpage shows the same welcome message, the same image, and the same links every time it is loaded. Which type of page is it?",
    options: [
      "A dynamic page, because it reloads on request",
      "A responsive page, because it fits the screen",
      "A static page, because its content never changes",
      "A cached page, because the browser stores it",
    ],
    optionRationales: [
      "You are describing the act of loading, not the content. Both static and dynamic pages reload on request; what differs is whether the content changes.",
      "You are describing layout adaptation, which is a separate property. Responsiveness changes how a page appears, not what it contains.",
      null,
      "You are describing caching, which is a delivery optimization, not a content type. Cache determines how fast a page is served, not whether it changes.",
    ],
    correct: 2,
    explanation: "## Living Content\n\nA static page delivers the same content on every visit. A dynamic page regenerates its content each time it is displayed — for example, showing the current time, weather, stock prices, or seat availability. \n\nThe distinction is whether the content changes, not whether the page reloads.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which of the following is a clear example of dynamic web content?",
    options: [
      "A fixed photograph on the About Us page",
      "A privacy policy for site visitors",
      "A contact form for user submissions",
      "Live stock quotes updated in real time",
    ],
    optionRationales: [
      "A fixed photograph does not change between visits. It is static content. The fact that it is an image is not what makes it static; the fact that it is identical every time is.",
      "A privacy policy is legal text that changes rarely. It is static until the company edits it, and the edit is manual, not automatic.",
      "A contact form is a static page element that captures input; what it does with the input is processing, not dynamic display.",
      null,
    ],
    correct: 3,
    explanation: "## Real-Time Data\n\nDynamic content regenerates each time the page is displayed. Anything that must be current to be useful — live stock prices, weather, flight availability, your Facebook feed — is dynamic. \n\nA static page would show the price from the moment the page was saved, which would be useless.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is a hyperlink?",
    options: [
      "A word or graphic you click to open another resource",
      "A security code that encrypts a page in transit",
      "A hidden index that search engines use to rank",
      "A physical cable in the Internet backbone",
    ],
    optionRationales: [
      null,
      "You are describing encryption, not a hyperlink. Encryption protects data as it travels; a hyperlink is a navigation element.",
      "You are describing metadata or search indexing, not a hyperlink. Search engines crawl links, but a link is the destination pointer, not the ranking logic.",
      "You are describing network cabling, which is infrastructure, not navigation. Cables carry data; hyperlinks identify which data to fetch.",
    ],
    correct: 0,
    explanation: "## Navigation\n\nHyperlinks, often shortened to links, are words or graphics that you can click to display a web page or another resource such as a file. \n\nThey are the connectors of the Web — the mechanism that turns a set of isolated documents into a navigable, interconnected structure.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is a website?",
    options: [
      "Software used to browse pages",
      "A set of related web pages and items",
      "A single document shown in a browser",
      "Hardware that stores web content",
    ],
    optionRationales: [
      "You are describing a browser, not a website. The browser is the tool a user opens; the website is the content the tool fetches.",
      null,
      "You are describing one page, not a website. A website contains many pages; a page is one unit within it.",
      "You are describing a web server, not a website. The server is a machine; the website is the content it hosts. One server can host many websites.",
    ],
    correct: 1,
    explanation: "## The Big Picture\n\nA website is a collection of related web pages and associated items — documents, photos, videos — stored on a web server. \n\nThink of a web page as a single page in a book and a website as the entire book. The site is the container; the pages are the contents.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-006",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is the primary function of a web server?",
    options: [
      "To display pages on the user's screen",
      "To write and edit HTML code",
      "To deliver pages to a user's browser",
      "To encrypt data on the user's device",
    ],
    optionRationales: [
      "You are describing the browser's job, not the server's. The server does not have a screen for the user; it delivers content to the user's device, where the browser renders it.",
      "You are describing an editor, not a server. Developers write HTML in a code editor; the server stores and delivers the finished page.",
      null,
      "You are describing disk encryption, not a web server. A web server has no access to the user's device storage.",
    ],
    correct: 2,
    explanation: "## The Librarian\n\nA web server is a computer that delivers requested web pages to a user's browser. \n\nThink of it as a librarian: it sits and waits, and when your browser asks for a page, the server finds the file in its storage and serves it across the Internet. The same server can store many websites.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-007",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "A website has been designed so its layout adjusts to fit both a small phone screen and a large desktop monitor. What is this practice called?",
    options: [
      "Compression, because the layout sends less data",
      "Caching, because the layout is stored locally",
      "Streaming, because the layout arrives gradually",
      "Responsive design, because it fits any screen",
    ],
    optionRationales: [
      "You are describing data compression, not layout adaptation. Compression shrinks file size; responsiveness adjusts layout.",
      "You are describing caching, which is a delivery optimization. Caching makes a page load faster on repeat visits; it does not change the layout between devices.",
      "You are describing progressive delivery, not layout adaptation. Streaming delivers media as it is consumed; responsiveness adapts layout on arrival.",
      null,
    ],
    correct: 3,
    explanation: "## Screen Flexibility\n\nResponsive web design adapts the layout of a website to fit the screen on which it is being displayed. \n\nA responsive site detects whether you are on a phone or a desktop and rearranges its columns, resizes its text, and adjusts its images so the content remains readable without manual zooming.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-008",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is HTML used for in web development?",
    options: [
      "Defining page structure and content elements",
      "Setting colours, fonts, and layout spacing",
      "Managing database queries that fill the page",
      "Encrypting the browser-to-server connection",
    ],
    optionRationales: [
      null,
      "You are describing CSS, not HTML. CSS controls appearance; HTML controls structure. Both are used together, which is why they are confused, but HTML has no color or font attributes in modern usage.",
      "You are describing backend database code (such as SQL), not HTML. HTML is a markup language that runs in the browser; database queries run on the server.",
      "You are describing TLS/SSL, not HTML. Encryption is a transport-layer function; HTML is a content-definition language.",
    ],
    correct: 0,
    explanation: "## The Skeleton\n\nHTML (Hypertext Markup Language) is a set of codes that developers use to specify the headings, paragraphs, images, links, and other content elements of a web page. \n\nIt provides the structure — the skeleton — of the page. It does not control appearance; that is the role of CSS.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-009",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which technology controls the visual appearance — colours, fonts, and layout — of a web page?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "XML",
    ],
    optionRationales: [
      "HTML defines structure, not appearance. It marks up headings, paragraphs, and links. It is a common slip to think HTML controls how a page looks, because early HTML included presentational tags.",
      null,
      "JavaScript controls behavior and interactivity, not appearance. It can change the DOM, but its job is logic — responding to clicks, fetching data, animating.",
      "XML is a general-purpose data format, not a styling language. It is used for configuration files and data interchange. It has nothing to do with how a page looks.",
    ],
    correct: 1,
    explanation: "## The Makeup\n\nCSS (Cascading Style Sheets) is used to specify a page's design and appearance — colours, fonts, spacing, and layout. \n\nIt works alongside HTML: HTML provides the structure, and CSS provides the styling. Think of HTML as the walls and CSS as the paint and decoration.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-010",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is a cookie in web browsing?",
    options: [
      "A cached image that speeds up page loads",
      "A token that verifies your identity",
      "A small file that stores session data",
      "A program that records your keystrokes",
    ],
    optionRationales: [
      "You are describing a cached image, not a cookie. Cached files are resources the browser stores to avoid re-downloading; cookies store data about your session.",
      "You are describing an authentication token, not a cookie. Cookies may hold session identifiers, but a cookie itself is not a security mechanism — it is a storage mechanism.",
      null,
      "You are describing a keylogger or spyware, not a cookie. Cookies are inert text; malware is executable code.",
    ],
    correct: 2,
    explanation: "## The Memory Chip\n\nA cookie is a small text file generated by a web server to store information about your activity — such as the items in your shopping cart. \n\nWhen you return to a site, the site reads the cookie and remembers you. Cookies are simple text, not programs, and they cannot execute code.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-011",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "A trail reading Home > Products > Laptops appears at the top of a page. What is this called?",
    options: [
      "Browsing history listing visited sites",
      "An address bar showing the URL",
      "A navigation menu of site pages",
      "A breadcrumb trail showing your path",
    ],
    optionRationales: [
      "You are describing browsing history, not breadcrumbs. History is a browser feature that lists all visited pages; breadcrumbs are part of the site itself and show the path within that site.",
      "You are describing the address bar, not breadcrumbs. The address bar shows the URL; breadcrumbs show the site's own hierarchical path.",
      "You are describing a navigation menu, not breadcrumbs. A menu lists options going forward; breadcrumbs show the path going back.",
      null,
    ],
    correct: 3,
    explanation: "## Path Tracking\n\nBreadcrumbs show the path you followed to reach a page. Like the trail in the fairy tale, they let you jump back to a higher level of the site. \n\nThey are a navigational aid — a record of how you got where you are, not a menu of where you could go next.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-012",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which two browser buttons let you move backward and forward through your session's history?",
    options: [
      "Back and Forward",
      "Refresh and Home",
      "Save and Print",
      "Stop and Reload",
    ],
    optionRationales: [
      null,
      "Refresh reloads the current page; Home returns you to your start page. Neither moves you through your session history.",
      "Save stores the page to disk; Print sends it to a printer. Neither navigates. Both are file actions on the current page, not history actions.",
      "Stop halts an in-progress load; Reload fetches the current page again. Neither moves you backward or forward.",
    ],
    correct: 0,
    explanation: "## Moving Through Time\n\nThe Back button takes you one step back in your session history. The Forward button moves you one step forward again, if you have already gone back. \n\nTogether they let you retrace and re-advance through the pages you have visited during your current session.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-013",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is the address bar in a browser?",
    options: [
      "A favorites button for bookmarks",
      "The display of the current page's URL",
      "A load indicator showing page state",
      "A search box for querying engines",
    ],
    optionRationales: [
      "You are describing a bookmarks feature, not the address bar. Bookmarks let you save pages for later; the address bar shows the URL of the current page.",
      null,
      "You are describing a load indicator, not the address bar. Load status is often shown by a spinner or progress bar; the address bar shows the URL.",
      "You are describing a search bar, which many modern browsers merge with the address bar. Functionally they differ: the address bar accepts URLs; a search box accepts queries.",
    ],
    correct: 1,
    explanation: "## The Navigator\n\nThe address bar is the part of the browser window that displays the location — the URL — of the current web page. It is also where you type a destination to navigate. \n\nThe padlock icon, when present, appears in the address bar and indicates a secure HTTPS connection.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-014",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which of the following describes an IPv4 address?",
    options: [
      "A domain name such as google.com",
      "A string of letters appended to a protocol",
      "Four numbers from 0 to 255 with dots between",
      "A pair of latitude and longitude coordinates",
    ],
    optionRationales: [
      "You are describing a domain name, not an IP address. Domain names are human-readable labels; IP addresses are numeric.",
      "You are describing part of a URL, not an IP address. URLs include domain names and paths; IP addresses are the numeric layer beneath.",
      null,
      "You are describing geographic coordinates, not an IP address. IP addresses identify a network interface, not a physical location.",
    ],
    correct: 2,
    explanation: "## The ID Number\n\nAn IPv4 address consists of four sets of numbers, each from 0 to 255, separated by periods — for example, 69.32.132.255. \n\nThis is the unique numeric address assigned to every device on the Internet. Computers use IP addresses to locate each other; humans use domain names.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-015",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which two IP addressing schemes are in use on the Internet today?",
    options: [
      "DNS and DHCP",
      "TCP and UDP",
      "HTTP and HTTPS",
      "IPv4 and IPv6",
    ],
    optionRationales: [
      "DNS resolves domain names to IP addresses; DHCP assigns IP addresses to devices. Neither is an addressing scheme itself — both are services that work with IP addresses.",
      "TCP and UDP are transport protocols that govern how data is delivered — connection-oriented versus connectionless. Both run over IP, but neither is an IP addressing scheme.",
      "HTTP and HTTPS are application protocols for fetching web pages, one secure and one not. Both run over IP, but neither is an addressing scheme.",
      null,
    ],
    correct: 3,
    explanation: "## The Upgrade\n\nThe Internet uses two IP addressing schemes: IPv4 and IPv6. IPv4 uses four sets of numbers from 0 to 255 and provides about 4.3 billion addresses, which were exhausted in the 2010s. \n\nIPv6 uses a much longer format and provides enough addresses for trillions of devices. Both are running simultaneously during the transition.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-016",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is the job of the Domain Name System (DNS)?",
    options: [
      "Translating domain names into IP addresses",
      "Encrypting data between browser and server",
      "Keeping a public record of who owns each site",
      "Remembering which pages you have visited",
    ],
    optionRationales: [
      null,
      "You are describing TLS/SSL encryption, not DNS. Encryption protects data in transit; DNS translates names into addresses before any data is sent.",
      "You are describing WHOIS records, not DNS. WHOIS is a lookup service for domain ownership; DNS is a lookup service for domain-to-IP resolution.",
      "You are describing browser history, not DNS. History is stored locally on your device; DNS resolution is a network service.",
    ],
    correct: 0,
    explanation: "## The Phonebook\n\nThe Domain Name System (DNS) is the method the Internet uses to store domain names and their corresponding IP addresses. \n\nWhen you type a domain name into a browser, a DNS server translates it into the numeric IP address so the request can be routed to the correct computer. DNS is the Internet's phonebook.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-017",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "In the URL http://www.example.com/student/index.html, which part is the domain name?",
    options: [
      "http://",
      "www.example.com",
      "/student/index.html",
      "index.html",
    ],
    optionRationales: [
      "You have identified the protocol, not the domain name. The protocol tells the browser how to fetch the resource; the domain name tells it where.",
      null,
      "You have identified the path, not the domain name. The path tells the server which file to deliver once the request arrives.",
      "You have identified the filename at the end of the path, not the domain name. The filename is what the server returns; the domain name is where the request goes.",
    ],
    correct: 1,
    explanation: "## The Hostname\n\nIn a URL, the domain name is the name of the host — the building you are visiting. Here that is www.example.com. \n\nEverything after the domain is the path to a specific resource inside that host: /student/ is a folder, and index.html is the file. The domain identifies the server; the path identifies the resource.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-018",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which browser is the default on Windows and integrates with Cortana and OneDrive?",
    options: [
      "Mozilla Firefox",
      "Google Chrome",
      "Microsoft Edge",
      "Apple Safari",
    ],
    optionRationales: [
      "Firefox is developed by the Mozilla Corporation and runs on Windows, macOS, and Linux, but it is not the Windows default and has no Cortana integration.",
      "Chrome is Google's browser and works on many operating systems, but it is not the Windows default and does not integrate with Cortana or OneDrive.",
      null,
      "Safari is Apple's browser and is the default on macOS, not Windows. It integrates with iCloud and Apple services, not with Cortana or OneDrive.",
    ],
    correct: 2,
    explanation: "## Ecosystem Fit\n\nMicrosoft Edge is the default browser for Windows on most devices. It replaced Internet Explorer and integrates with other Microsoft tools, including the Cortana virtual assistant and the OneDrive cloud storage service. \n\nIt is not compatible with prior versions of Windows.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-019",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which browser, first released in 2004, is known for its extensive library of plug-ins and privacy features?",
    options: [
      "Microsoft Edge",
      "Google Chrome",
      "Apple Safari",
      "Mozilla Firefox",
    ],
    optionRationales: [
      "Edge was released in 2015 as the replacement for Internet Explorer. It is Microsoft's product, not a 2004 independent browser.",
      "Chrome was released in 2008, four years after the browser described. It has an extension library, but its extension model was inspired by the earlier browser's.",
      "Safari was released in 2003 as Apple's default browser and has been the macOS default since then. It is not known for an extensive third-party plug-in library.",
      null,
    ],
    correct: 3,
    explanation: "## Customization King\n\nFirefox was developed by the Mozilla Corporation and first released in 2004. It became popular as an independent browser that allowed users to install thousands of add-ons to change how the browser worked. \n\nIt has enhanced privacy and security features, a spelling checker, tabbed browsing, and a password manager.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-020",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which architectural feature of Google Chrome keeps one crashed tab from bringing down the whole browser?",
    options: [
      "Multi-process tabbed browsing per tab",
      "Private browsing mode for isolated cookies",
      "A built-in VPN that shields each session",
      "An integrated ad blocker for page weight",
    ],
    optionRationales: [
      null,
      "You are describing a privacy feature, not a stability feature. Private mode prevents history from being saved; it does not isolate tabs from each other.",
      "You are describing network isolation, which Chrome does not provide by default. A VPN changes how traffic is routed, not how tabs are managed.",
      "You are describing an ad-blocking feature, which Chrome does not include natively. Ad blockers reduce page weight; they do not isolate processes.",
    ],
    correct: 0,
    explanation: "## Damage Control\n\nChrome runs each tab in its own process. If one tab freezes or crashes, the others keep working because they are separate processes. \n\nYou can close the failed tab and continue. This is called independent multi-process management, and it was one of Chrome's original architectural advantages.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-021",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "You type google.com into your browser and press Enter. What must happen before the browser can contact the server?",
    options: [
      "The browser must download a certificate",
      "The browser must resolve the name via DNS",
      "The browser must request bandwidth from the ISP",
      "The browser must check the local cache first",
    ],
    optionRationales: [
      "You are describing a step that happens after the connection is established, not before. The certificate is exchanged during the TLS handshake, which requires the browser to have already located the server.",
      null,
      "You are describing a capacity negotiation that does not happen on the client. ISPs do not grant per-request bandwidth allowances; connections are established directly.",
      "You are describing a caching check, which is a performance optimization, not a required step. The cache is consulted, but a miss simply means a fresh fetch; the DNS lookup is required regardless.",
    ],
    correct: 1,
    explanation: "## The First Step\n\nThe browser cannot contact google.com by name — computers use numbers. So it first asks a DNS server: 'What is the IP address for google.com?' \n\nOnce the DNS server returns the numeric address, the browser can route a request to the correct machine. DNS resolution is the first step of every page load.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-022",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "What is the function of the protocol in a URL?",
    options: [
      "It specifies the rules for fetching the resource",
      "It specifies the domain name of the server",
      "It specifies the path to the file on the server",
      "It specifies the IP address of the client",
    ],
    optionRationales: [
      null,
      "You are confusing the protocol with the host. The domain name tells the browser which server to contact; the protocol tells it how to speak to that server.",
      "You are confusing the protocol with the path. The path identifies a specific file; the protocol identifies the language used to request it.",
      "You are confusing the protocol with the client's IP address. The client's IP is not part of the URL; it is standard teaching address used when sending the request.",
    ],
    correct: 0,
    explanation: "## The Language\n\nThe protocol (like http:// or https://) is the first part of a URL. It tells the browser the rules for communicating with the server. \n\nHTTP is the standard language for fetching web pages; HTTPS is the secure version of that language. It is like deciding whether to speak English or French when asking a question — the language of the request.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-023",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Which browser has been the default on macOS since 2003?",
    options: [
      "Microsoft Edge",
      "Google Chrome",
      "Apple Safari",
      "Mozilla Firefox",
    ],
    optionRationales: [
      "Edge is a Microsoft product and the default on Windows, not macOS. It was not even released until 2015.",
      "Chrome is Google's browser and works on macOS, but it is not the default. Users must download and install it separately.",
      null,
      "Firefox is a cross-platform browser from Mozilla. It works on macOS but has never been the default there.",
    ],
    correct: 2,
    explanation: "## Apple's Native Browser\n\nApple Safari was released in 2003 and has been the default browser for macOS ever since. It is preinstalled on all Apple computers and devices. \n\nIt features built-in sharing with social networks, fast performance, parental controls, and ease of use. If you use a Mac and want Chrome or Firefox, you have to download them yourself.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-024",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "How does a breadcrumb trail differ from a browser's history?",
    options: [
      "A breadcrumb shows the path within a site; history shows all visited pages",
      "A breadcrumb is stored on the server; history is stored locally",
      "A breadcrumb is secure; history is unencrypted",
      "A breadcrumb is temporary; history is permanent",
    ],
    optionRationales: [
      null,
      "You have reversed the storage locations. A breadcrumb trail is generated by the website and sent as part of the page; browser history is stored locally on your device.",
      "You are describing a security difference that does not exist. Both are text records of page visits; neither is encrypted or decrypted as part of its normal function.",
      "You are describing a persistence difference that is not accurate. Both persist until cleared; a breadcrumb is not inherently temporary, nor is history permanent.",
    ],
    correct: 0,
    explanation: "## Two Kinds of Trails\n\nA breadcrumb trail is generated by the website you are visiting. It shows the path you followed *within that site* (e.g., Home > Products > Laptops) and helps you navigate back up the hierarchy. \n\nBrowser history is a feature of the browser itself. It records *every page you visit*, on every site, and is stored locally on your device. The breadcrumb is the website's memory of you; the history is your browser's memory of everywhere you've been.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.2-025",
    mainTopic: "Unit 7: The Internet",
    topic: "7.2 Using the World Wide Web",
    q: "Who typically operates the DNS server that translates domain names for a home user?",
    options: [
      "The Internet Service Provider",
      "The website owner",
      "The browser manufacturer",
      "The device operating system",
    ],
    optionRationales: [
      null,
      "Website owners register their domain names, but they do not run the DNS servers that resolve those names for visitors. They pay a registrar to list the name in the global DNS database.",
      "Browser manufacturers (Google, Mozilla, Apple) build the software that *asks* the DNS server, but they do not operate the server itself.",
      "The operating system configures the device to use a DNS server, but it does not run the server. It is a client of the DNS system, not the host.",
    ],
    correct: 0,
    explanation: "## The Local Phonebook\n\nA DNS server is usually associated with an Internet Service Provider (ISP). When you connect to your home Wi-Fi, your ISP provides the address of a DNS server it operates. \n\nYour browser asks that server to translate domain names into IP addresses. The ISP runs the phonebook; your browser is the person making the call.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.3-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.3 Connecting to the Internet",
    q: "What is a hot spot?",
    options: [
      "An area where Internet traffic is slow",
      "A wireless device providing local Internet",
      "A location where Wi-Fi is unsafe to use",
      "A wired access point in public buildings",
    ],
    optionRationales: [
      "You are describing congestion, not a hot spot. Congestion is a performance condition; a hot spot is a physical device.",
      null,
      "You are describing a security concern, not a hot spot. Public Wi-Fi may have security risks, but the term hot spot itself does not imply a risk.",
      "You are describing a wired access point, which is the opposite of a hot spot. The defining feature of a hot spot is that it is wireless.",
    ],
    correct: 1,
    explanation: "## Wireless Zone\n\nA hot spot is a wireless network device that provides Internet connections to mobile computers and devices. \n\nThe hot spot creates a small area — usually within about 30 feet — where devices can connect via Wi-Fi. Coffee shops, airports, and hotels commonly provide hot spots for their customers.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.3-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.3 Connecting to the Internet",
    q: "A phone shares its Internet connection with a nearby laptop. Which network does the phone use as its source of Internet?",
    options: [
      "A Wi-Fi router nearby in the room",
      "A satellite link provided by the maker",
      "The cellular network for voice and data",
      "An Ethernet cable in the charging port",
    ],
    optionRationales: [
      "You are describing Wi-Fi tethering to a separate router, not a mobile hot spot. If the phone gets its Internet from a Wi-Fi router, then the laptop could connect to that router directly; the phone adds nothing.",
      "You are describing satellite Internet, which most phones do not use. Satellite connectivity is reserved for specialized devices and remote locations.",
      null,
      "You are describing wired tethering, not a mobile hot spot. Wired tethering uses a cable; a mobile hot spot is wireless.",
    ],
    correct: 2,
    explanation: "## Portable Web\n\nA mobile hot spot enables you to connect a phone, computer, or other device to the Internet through the cellular network. \n\nThe phone uses its mobile data connection — the same signal used for calls — and rebroadcasts it as a private Wi-Fi signal for nearby devices. This works anywhere there is cellular coverage.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.3-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.3 Connecting to the Internet",
    q: "A student uses their phone's mobile hot spot to stream a movie on a laptop. What is the most likely cost consequence?",
    options: [
      "The carrier provides the data for free",
      "The laptop's own data plan is charged",
      "Data use is paused while the hot spot is on",
      "The data counts against the phone's monthly plan",
    ],
    optionRationales: [
      "You are describing a billing exception that does not exist. Carriers charge for data regardless of which device consumes it.",
      "You are assuming the laptop has its own mobile plan, which most laptops do not. The laptop connects to the phone, and the phone uses its plan.",
      "You are describing a feature that does not exist. When the hot spot is active, data is actively transferred and counted.",
      null,
    ],
    correct: 3,
    explanation: "## Watch Your Data\n\nWhen you use your phone as a mobile hot spot, all data transmitted through it counts against your monthly plan. \n\nA laptop uses much more data than a phone — streaming a movie can consume an entire month's allowance in one session. Carriers may also charge an extra hot spot fee on some plans.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.3-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.3 Connecting to the Internet",
    q: "What are wireless networks in public places like hotels and restaurants commonly called?",
    options: [
      "Wi-Fi networks",
      "Bluetooth networks",
      "NFC networks",
      "Cellular networks",
    ],
    optionRationales: [
      null,
      "Bluetooth is a short-range protocol used for pairing devices like headphones, not for public Internet access. Its range is typically under 30 feet and its bandwidth is low.",
      "NFC (Near-Field Communication) operates at a range of a few centimeters and is used for contactless payments, not for Internet access.",
      "Cellular networks provide coverage over wide areas through towers, not through local hot spots.",
    ],
    correct: 0,
    explanation: "## Standard Access\n\nWireless networks in public places such as hotels, restaurants, and coffee shops are known as Wi-Fi networks. \n\nAlmost every public hot spot uses the 802.11 family of standards, allowing any device with a Wi-Fi chip to connect. The name Wi-Fi is used universally for local wireless Internet access.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.3-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.3 Connecting to the Internet",
    q: "Which cellular generation was designed to provide higher-speed data for high-bandwidth content?",
    options: [
      "2G",
      "5G",
      "3G",
      "4G",
    ],
    optionRationales: [
      "2G introduced digital voice and basic data, but its data speeds are too low for video or high-bandwidth content.",
      null,
      "3G made mobile web browsing practical but its speeds are still modest by modern standards. It supports basic video but struggles with high-definition content.",
      "4G is faster than 3G and supports most streaming, but it is not the generation specifically designed for the highest-bandwidth content.",
    ],
    correct: 1,
    explanation: "## Ultra Speed\n\n5G (fifth generation) cellular networks provide higher-speed data transmission, making them appealing for high-bandwidth content such as 4K video and complex online games. \n\n4G remains common and adequate for most tasks; 5G is designed for the workloads that 4G struggles with.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.3-006",
    mainTopic: "Unit 7: The Internet",
    topic: "7.3 Connecting to the Internet",
    q: "What term describes using a smartphone to share its Internet access with another device?",
    options: [
      "Bandwidth sharing",
      "Bridging",
      "Tethering",
      "Repeating",
    ],
    optionRationales: [
      "Bandwidth sharing is a general term for distributing capacity across users, not the specific act of connecting a phone to another device.",
      "Bridging joins two network segments into one, usually at the data-link layer, and is a network configuration concept. It is not the same as sharing a phone's connection with a laptop.",
      null,
      "Repeating extends the range of a wireless signal by relaying it. It does not share a phone's Internet with another device.",
    ],
    correct: 2,
    explanation: "## Wired Sharing\n\nTethering transforms a smartphone or Internet-capable tablet into a portable communications device that shares its Internet access with other computers and devices. \n\nIt can be done wirelessly (a mobile hot spot) or with a cable. The term refers to the sharing, not the medium.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "Which type of website is designed to contain encyclopedias, dictionaries, and library resources?",
    options: [
      "Educational sites",
      "Business sites",
      "Government sites",
      "Informational and research sites",
    ],
    optionRationales: [
      "Educational sites offer formal and informal teaching, such as courses and tutorials. They teach; informational sites reference.",
      "Business sites promote products, provide company background, or sell services. They are commercial in purpose.",
      "Government sites provide civic information such as census data and tax forms. They serve the public, but their content is administrative rather than encyclopedic.",
      null,
    ],
    correct: 3,
    explanation: "## Knowledge Hubs\n\nInformational and research websites contain reference material — libraries, encyclopedias, dictionaries, directories, guides, and similar sources. \n\nTheir purpose is to provide facts and lookups. Wikipedia, Dictionary.com, and library catalogs are typical examples.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "A site designed to let students take online courses and earn certificates is best classified as which type?",
    options: [
      "An educational website",
      "An informational website",
      "A business website",
      "A bookmarking site",
    ],
    optionRationales: [
      null,
      "Informational sites provide facts and reference material for lookup. They do not typically deliver structured courses or award certificates.",
      "Some educational platforms are also businesses, but the site's function — delivering courses — is educational. Categorization is by function, not by how the site is funded.",
      "Bookmarking sites organize and share links to content elsewhere. They do not host courses or award certificates.",
    ],
    correct: 0,
    explanation: "## Formal Learning\n\nEducational websites offer formal and informal teaching and learning. They host courses, lessons, and structured learning experiences. \n\nThey differ from informational sites, which provide lookup material, and from business sites, which exist to promote products. An educational site's purpose is instruction.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "Which of the following is NOT a typical goal of a business website?",
    options: [
      "Increasing brand awareness among customers",
      "Awarding formal academic degrees",
      "Providing information about the company",
      "Promoting or selling products and services",
    ],
    optionRationales: [
      "Brand awareness is a standard goal of business sites. Companies build sites partly to make themselves known.",
      null,
      "Providing company background is a typical business site goal. The About page is a standard feature of corporate websites.",
      "Promotion and sales are the core purpose of most business sites. A business site that does not sell or promote would be unusual.",
    ],
    correct: 1,
    explanation: "## Know the Boundary\n\nBusiness websites aim to increase brand awareness, provide company background, and promote or sell products. \n\nAwarding academic degrees is the function of an educational institution, not a business. A commercial site may sell courses, but accreditation is a regulatory power, not a marketing activity.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What is the primary purpose of a government agency website?",
    options: [
      "Selling advertising space to companies",
      "Providing entertainment and streaming media",
      "Offering official information to citizens",
      "Competing with private banks for customers",
    ],
    optionRationales: [
      "You are describing a commercial site, not a government one. Government sites generally do not sell advertising.",
      "You are describing an entertainment site. Government sites occasionally publish media, but their purpose is not entertainment.",
      null,
      "You are describing a commercial bank, not a government site. Some governments operate banks, but that is separate from the general role of government websites.",
    ],
    correct: 2,
    explanation: "## Civic Service\n\nGovernment agency websites provide citizens with official information such as census data, and assistance such as forms for filing taxes. \n\nTheir purpose is civic service — helping people understand and interact with their government. They are not commercial, not entertainment, and not in competition with private industry.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What is a blog?",
    options: [
      "A library that stores photos and videos",
      "A store where users buy products",
      "A notification service for messages",
      "A journal of time-stamped posts, newest first",
    ],
    optionRationales: [
      "You are describing a media library, not a blog. Media libraries organize files by type or date; a blog publishes articles.",
      "You are describing an e-commerce site, not a blog. E-commerce sites list products for sale; blogs publish articles.",
      "You are describing a messaging or notification system, not a blog. Messaging is direct and private; blogs are public and read-oriented.",
      null,
    ],
    correct: 3,
    explanation: "## Digital Diary\n\nA blog is an informal website consisting of time-stamped articles, or posts, in a diary or journal format. \n\nPosts are usually listed in reverse chronological order — newest at the top. Blogs are used both for personal journals and for professional commentary and news.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-006",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "Which type of website is designed to offer medical, fitness, nutrition, and exercise information to the public?",
    options: [
      "Health and fitness websites",
      "Science websites",
      "Educational websites",
      "Government websites",
    ],
    optionRationales: [
      null,
      "Science websites cover astronomy, physics, earth sciences, and similar fields. They may touch on medical research, but their scope is broader and less focused on personal health guidance.",
      "Educational websites teach general subjects in structured form. A page about healthy eating could be on an educational site, but health and fitness sites exist specifically for that content.",
      "Government sites may publish public health information, but their broader scope is civic information such as taxes and census data.",
    ],
    correct: 0,
    explanation: "## Wellness Resources\n\nHealth and fitness websites provide up-to-date medical, fitness, nutrition, or exercise information for public access. \n\nThey are a distinct category because their content is specialized and their audience is the general public seeking wellness guidance. Examples include hospital portals and public health sites.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-007",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "Which type of website contains information about space exploration, astronomy, and physics?",
    options: [
      "Educational websites",
      "Science websites",
      "Entertainment websites",
      "Health and fitness websites",
    ],
    optionRationales: [
      "Educational sites teach through courses and structured programs. A science topic can appear there, but science websites exist specifically to publish scientific content.",
      null,
      "Entertainment sites offer music, videos, shows, and games. Documentaries about space may be on such sites, but the underlying content of a science site is not for entertainment — it is for information.",
      "Health and fitness sites focus on the human body — medical, nutrition, and exercise content. Physics and astronomy are outside that scope.",
    ],
    correct: 1,
    explanation: "## Scientific Reference\n\nScience websites contain information about space exploration, astronomy, physics, earth sciences, microgravity, robotics, and other branches of science. \n\nThey are distinct from health sites (which focus on the human body) and educational sites (which teach broad curricula). Their defining feature is scientific subject matter.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-008",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "Which type of website offers music, videos, shows, and games in an interactive environment?",
    options: [
      "Educational websites",
      "Business websites",
      "Entertainment websites",
      "Government websites",
    ],
    optionRationales: [
      "Educational sites deliver learning content. Games and videos may be used as teaching tools, but the purpose of an educational site is instruction, not amusement.",
      "Business sites promote products or provide company information. Some entertainment companies have business sites, but the site's content focus is commercial, not entertainment.",
      null,
      "Government sites provide civic information and assistance. Some governments run cultural or entertainment portals, but those are the exception, not the category.",
    ],
    correct: 2,
    explanation: "## Interactive Leisure\n\nEntertainment websites offer music, videos, shows, performances, events, sports, games, and more in an interactive and engaging environment. \n\nTheir purpose is enjoyment rather than instruction or commerce. Streaming platforms, gaming portals, and sports sites all fall into this category.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-009",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What is the purpose of a bookmarking site?",
    options: [
      "To save web pages on the local device",
      "To block advertisements on web pages",
      "To archive pages that no longer exist",
      "To tag and share links with a community",
    ],
    optionRationales: [
      "You are describing browser bookmarks, not a bookmarking site. Browser bookmarks are private and stored locally; bookmarking sites are public and shared.",
      "You are describing an ad blocker, not a bookmarking site. Ad blockers modify how pages render; bookmarking sites organize links.",
      "You are describing a web archive (such as the Wayback Machine), not a bookmarking site. Archives preserve pages; bookmarking sites organize and share links to pages that are still live.",
      null,
    ],
    correct: 3,
    explanation: "## Social Curation\n\nA bookmarking site is a website that enables members to organize, tag, and share links to media and other online content. \n\nUnlike browser bookmarks, which are private, bookmarking sites are social — users vote, tag, and comment on the links they share. Reddit and Digg are examples.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-010",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What is a tag in the context of online content?",
    options: [
      "A label that describes and categorizes content",
      "A hidden cookie that tracks browsing",
      "A signature that proves a document's owner",
      "A price marker on digital products",
    ],
    optionRationales: [
      null,
      "You are describing a tracking cookie, not a tag. Cookies store session data for a site; tags are user-visible labels that organize content.",
      "You are describing a digital certificate or signature, not a tag. Signatures prove authorship; tags describe content.",
      "You are describing a price tag or barcode, not a content tag. Pricing is a commercial attribute; tags are descriptive labels.",
    ],
    correct: 0,
    explanation: "## Descriptive Labels\n\nA tag is descriptive text used to categorize media and invite comments. \n\nYou can assign tags to web pages, photos, videos, blog posts, and messages so they are easier to locate later. Tags are what make a piece of content discoverable by topic rather than by title.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-011",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What does the term social media refer to?",
    options: [
      "News sites that publish daily headlines",
      "Ways people share and interact online",
      "Apps that ship with a phone's operating system",
      "Websites run by one Internet provider",
    ],
    optionRationales: [
      "You are describing news sites, not social media. News sites publish content from journalists; social media platforms enable users to publish content themselves.",
      null,
      "You are describing preinstalled apps, not social media. Many social media platforms are accessed through apps, but the app itself is not the medium — the platform and its community are.",
      "You are describing an ISP's portal or catalog, not social media. Social media is defined by user interaction, not by who runs the network.",
    ],
    correct: 1,
    explanation: "## Interaction\n\nSocial media refers to the many ways individuals and businesses share information and interact using the Internet. \n\nIt is defined by interaction — the ability to post content and receive reactions (likes, comments, shares). Facebook, Instagram, Twitter, and LinkedIn are all examples of platforms where this interaction happens.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-012",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "Which category of service allows users to access their financial records from anywhere with an Internet connection?",
    options: [
      "Social networking services",
      "Educational services",
      "Financial services for banking and trading",
      "Governmental services",
    ],
    optionRationales: [
      "Social networking platforms are for sharing and communicating, not for managing finances. Both are online, but their purposes are unrelated.",
      "Educational platforms deliver teaching and learning. Some teach financial literacy, but they do not hold or manage a user's accounts.",
      null,
      "Government portals provide civic information such as tax forms. They do not provide private account access for financial institutions.",
    ],
    correct: 2,
    explanation: "## Money Management\n\nOnline banking and online trading enable users to access their financial records from anywhere in the world, provided they have an Internet connection. \n\nThey are categorized as financial services because their purpose is managing money and accounts. The key advantage is global access to personal financial data.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-013",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "A student uses Google Docs instead of Microsoft Word. What is the main benefit of this choice?",
    options: [
      "The app provides stronger malware protection",
      "The app works fully offline without a network",
      "The app has more advanced features than Word",
      "The app updates automatically without installing",
    ],
    optionRationales: [
      "You are describing a security advantage that does not automatically follow. Web apps have their own security profile, which includes risks that installed apps do not face.",
      "You are describing an offline capability that web apps do not have by default. Web apps require an Internet connection to function, which is one of their disadvantages.",
      "You are describing a feature advantage that is generally opposite to reality. Web apps usually have fewer features than native desktop apps because the browser imposes limits.",
      null,
    ],
    correct: 3,
    explanation: "## Zero Maintenance\n\nWeb apps are accessed through a browser, and the software lives on the provider's server. \n\nThe provider updates it there, and the next time you open it you are automatically on the newest version. There is nothing to install, no patches to apply, and no version drift across devices.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-014",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What is the main risk of relying on a web app for important files?",
    options: [
      "The user may lose access if the provider shuts down",
      "The user must re-download the app each session",
      "The app updates itself without user consent",
      "The app cannot be opened on mobile devices",
    ],
    optionRationales: [
      null,
      "You are describing a process that does not happen. Web apps are accessed through a browser and do not need re-downloading; that is part of their advantage.",
      "You are describing an inconvenience, not a real risk. Automatic updates are a feature of web apps, not a danger.",
      "You are describing a limitation that is generally false. Most modern web apps work on mobile browsers.",
    ],
    correct: 0,
    explanation: "## Total Dependency\n\nWhen you store files in a web app, they live on the provider's servers. \n\nIf the provider goes out of business or discontinues the service, those files may become inaccessible or be deleted. This is why keeping a local backup of important work is a necessary safeguard.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-015",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What is a primary advantage of using a web app instead of a native desktop app?",
    options: [
      "The user can access it from any device",
      "The user does not need an Internet connection",
      "The app runs faster than native software",
      "The app uses more of the device's storage",
    ],
    optionRationales: [
      null,
      "You are describing a native app advantage, not a web app advantage. Web apps specifically require an Internet connection to function.",
      "You are describing a native app advantage, not a web app advantage. Web apps are often slower because they run in a browser and depend on network speed.",
      "You are describing a disadvantage of web apps. They store files on the provider's servers, so they use less device storage, not more.",
    ],
    correct: 0,
    explanation: "## Anywhere Access\n\nA primary advantage of web apps is that you can access them from any device with a browser and an Internet connection. \n\nYou do not have to install the software on each machine, and your files and settings follow you. Native apps are tied to the specific device on which they are installed.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.4-016",
    mainTopic: "Unit 7: The Internet",
    topic: "7.4 Online Activities and Services",
    q: "What is a primary disadvantage of using a web app for critical work?",
    options: [
      "The user must be online to use it",
      "The files are stored on the local drive",
      "The app requires constant manual updates",
      "The app uses more device storage than native apps",
    ],
    optionRationales: [
      null,
      "You are describing a native app, which stores files on the local drive. Web apps store files on the provider's servers.",
      "You are describing a native app, which often requires manual updates. Web apps update automatically on the server.",
      "You are describing a native app, which uses more device storage because the software is installed locally. Web apps use less storage on the user's device.",
    ],
    correct: 0,
    explanation: "## The Network Dependency\n\nThe main disadvantage of a web app is that you must be online to use it. \n\nIf your Internet connection fails, or the provider has technical problems, you cannot access your work. Native apps can run offline because the software and data are stored locally.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "How does a secure website protect data while it is being transmitted?",
    options: [
      "By storing multiple copies of the data",
      "By scrambling the data in transit",
      "By compressing the data for travel",
      "By caching the data on the client",
    ],
    optionRationales: [
      "You are describing redundancy, not encryption. Redundancy protects against server failure; it does not protect against interception.",
      null,
      "You are describing compression, not encryption. Compression reduces size; encryption scrambles content.",
      "You are describing caching, not encryption. Caching improves performance by storing data on the client; it does not protect data in transit.",
    ],
    correct: 1,
    explanation: "## Scrambling Data\n\nEncryption is a security method that scrambles or codes data as it is transmitted over a network so it is not readable until it is decrypted. \n\nThink of it as putting data in a safe that only the recipient has the key to. If a hacker intercepts the transmission, they see only gibberish.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "Which prefix in a URL indicates an encrypted connection?",
    options: [
      "httpd://",
      "http2://",
      "https://",
      "http+e://",
    ],
    optionRationales: [
      "The prefix httpd refers to the Apache HTTP daemon, a server program, and is not a URL scheme.",
      "HTTP/2 is a version of the HTTP protocol, not a URL scheme. It is faster and more efficient, but it does not itself guarantee encryption.",
      null,
      "This is not a real URL scheme. It resembles a made-up variant that suggests encryption, but no browser recognizes it.",
    ],
    correct: 2,
    explanation: "## The 'S' Rule\n\nThe 's' in https stands for secure. \n\nAn https prefix — often accompanied by a padlock icon — indicates that the connection is encrypted with TLS. Data you send to the site cannot be read by anyone intercepting it. Plain http has no such protection.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "What is the purpose of a digital certificate on a website?",
    options: [
      "Blocking ads from appearing on the page",
      "Speeding up page loads on slow connections",
      "Saving passwords for future sessions",
      "Verifying the site's identity by a third party",
    ],
    optionRationales: [
      "You are describing an ad blocker, not a digital certificate. Ad blockers run in the browser and modify content; certificates are provided by the site and verify its identity.",
      "You are describing a performance optimization, not a certificate. Certificates verify identity; they have no direct effect on load speed.",
      "You are describing a password manager, not a certificate. Password managers store credentials locally; certificates are public documents signed by a certificate authority.",
      null,
    ],
    correct: 3,
    explanation: "## Trust Check\n\nA digital certificate verifies a website's identity. \n\nIt is signed by a trusted third party — a certificate authority — that confirms the site is who it claims to be. When you see the padlock icon, the browser has already validated the certificate. It is a digital passport for the site.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "A student stores all their passwords in their browser's autofill. Which practice is more secure?",
    options: [
      "Using a dedicated encrypted password manager",
      "Storing all passwords in a text file",
      "Reusing one strong password everywhere",
      "Writing passwords in a nearby notebook",
    ],
    optionRationales: [
      null,
      "You are describing an unencrypted file, which is worse than browser autofill, not better. Anyone with access to the machine can read the file.",
      "You are describing password reuse, which is one of the most common security failures. A single breach exposes every account.",
      "You are describing a physical record, which is vulnerable to theft or loss. Any visitor to the room can read it.",
    ],
    correct: 0,
    explanation: "## The Vault\n\nA dedicated password manager stores credentials in a vault protected by a single master password and strong encryption. \n\nUnlike browser autofill, which is tied to the browser and often unencrypted on disk, a password manager adds a second layer of defense. If someone accesses your browser, they do not automatically get your vault.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "What does a phishing filter do?",
    options: [
      "Generating strong passwords for accounts",
      "Warning about fraudulent websites",
      "Blocking email attachments automatically",
      "Scanning files for viruses on open",
    ],
    optionRationales: [
      "You are describing a password generator, not a phishing filter. Both are security tools, but they perform different functions.",
      null,
      "You are describing a spam filter or attachment policy, not a phishing filter. Spam filters act on bulk mail; phishing filters act on deceptive URLs.",
      "You are describing an antivirus scanner, not a phishing filter. Antivirus scans executable content; phishing filters check URLs against a database of known fraudulent sites.",
    ],
    correct: 1,
    explanation: "## Fraud Detection\n\nA phishing filter maintains a list of known fraudulent sites — typically fake login pages that mimic real banks or services. \n\nIf you click a link that leads to one of these sites, the filter displays a warning before you enter any credentials. Many browsers include phishing filters built in.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-006",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "What does a proxy server do for a user's privacy?",
    options: [
      "It speeds up page loads through caching",
      "It encrypts traffic with a private key",
      "It hides the user's real IP address",
      "It scans traffic for malware threats",
    ],
    optionRationales: [
      "You are describing caching, which is a performance function. A proxy may cache, but that is not its privacy benefit.",
      "You are describing a VPN, not a proxy. VPNs encrypt traffic end-to-end; proxies typically forward requests without adding encryption.",
      null,
      "You are describing a security gateway or antivirus proxy, not a privacy proxy. Some proxies do malware scanning, but that is not their privacy function.",
    ],
    correct: 2,
    explanation: "## Hiding Your Identity\n\nA proxy server acts as a middleman. Instead of your device talking directly to a website, you talk to the proxy, and the proxy talks to the website. \n\nThe website sees only the proxy's IP address, keeping yours hidden. This provides a degree of anonymity, though not full end-to-end encryption.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-007",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "A student opens a private browsing window to check their bank account. What does private browsing actually do?",
    options: [
      "Hides activity from the bank and ISP",
      "Prevents the local saving of history and cookies",
      "Routes traffic through an encrypted tunnel",
      "Blocks third-party scripts from loading",
    ],
    optionRationales: [
      "You are describing a capability private browsing does not have. Private mode affects only local storage; your ISP and the sites you visit still see your activity.",
      null,
      "You are describing a VPN, not private browsing. Both offer a form of privacy, but only the VPN encrypts and reroutes traffic.",
      "You are describing a content blocker or tracking prevention setting, not private browsing. Some browsers combine tracking prevention with private mode, but they are separate features.",
    ],
    correct: 1,
    explanation: "## Local Privacy Only\n\nPrivate browsing mode (Incognito in Chrome) prevents the browser from saving your history and cookies locally. \n\nWhen you close the window, the session data is discarded. This protects you from other people using the same computer — not from your ISP, your employer, or the websites you visit.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.5-008",
    mainTopic: "Unit 7: The Internet",
    topic: "7.5 Online Safety",
    q: "A user wants to browse without their history being saved AND without the website seeing their real IP. Which combination is best?",
    options: [
      "A phishing filter and private browsing",
      "Certificate checks and location off",
      "A password manager and pop-up blocker",
      "Private browsing and a proxy server",
    ],
    optionRationales: [
      "You are combining a security tool with a privacy mode, but phishing filters do not hide IP addresses.",
      "You are combining trust verification with location privacy. Neither hides your IP address from the destination.",
      "You are combining credential storage with ad filtering. Neither hides your IP or prevents local history storage.",
      null,
    ],
    correct: 3,
    explanation: "## The Double Guard\n\nPrivacy has two independent dimensions: local (what is stored on your device) and remote (what the site sees about you). \n\nPrivate browsing handles the local side by not saving history and cookies. A proxy or VPN handles the remote side by hiding your IP. Both are needed to cover both.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.6-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.6 Communicating Online",
    q: "Who were the original primary users of email?",
    options: [
      "Business marketers sending bulk email",
      "Scientists and researchers on funded projects",
      "University students communicating with peers",
      "Agents exchanging classified information",
    ],
    optionRationales: [
      "You are describing a later commercial use of email, not its origin. Bulk marketing emerged after email became public in the 1990s.",
      null,
      "Students adopted email widely in the 1980s and 1990s, but the service was created earlier for researchers. Students were a beneficiary, not the original audience.",
      "You are describing a specific use case that existed but was not the primary audience. ARPANET was a defense project, but email was adopted by the researchers using the network, not by classified agencies.",
    ],
    correct: 1,
    explanation: "## Academic Roots\n\nEmail was one of the original services on the Internet. \n\nIt enabled scientists and researchers working on government-sponsored projects to communicate with colleagues at other locations. The service predates public adoption by decades and was originally a research collaboration tool.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.6-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.6 Communicating Online",
    q: "What defines an Internet messaging service?",
    options: [
      "It stores messages for later retrieval",
      "It translates messages between languages",
      "It alerts you when contacts are online",
      "It archives all messages for legal review",
    ],
    optionRationales: [
      "You are describing an email-like archive, not messaging. Messaging is defined by real-time exchange, not storage.",
      "You are describing a translation feature that some services offer but that does not define them. Messaging is defined by real-time interaction, not by translation.",
      null,
      "You are describing archival or compliance retention, not the defining feature of a messaging service. Some services retain history, but the interaction is live.",
    ],
    correct: 2,
    explanation: "## Instant Interaction\n\nInternet messaging services notify you when one or more of your established contacts are online, and then allow you to exchange messages, files, or join a private chat room. \n\nThe defining feature is real-time awareness of presence — knowing who is available right now — and instant exchange.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.6-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.6 Communicating Online",
    q: "Which of the following is a common feature of most messaging apps?",
    options: [
      "Automated translation to every language",
      "Scheduled delivery of future messages",
      "Payment processing for online shopping",
      "Voice-to-text conversion of spoken clips",
    ],
    optionRationales: [
      "You are describing a feature that some apps offer but not all. Translation is not a standard part of the messaging model.",
      "You are describing a scheduling feature that some apps provide but that is not standard. Both scheduling and messaging involve timing, but only one is a core feature.",
      "You are describing a commerce feature that some messaging apps have added recently. It is not a standard messaging feature.",
      null,
    ],
    correct: 3,
    explanation: "## Feature Set\n\nMost messaging apps include several communication types: text messaging, multimedia messaging (photos and videos), voice messaging (recorded audio clips), voice-to-text (also called speech-to-text), and online discussion. \n\nVoice-to-text converts a spoken clip into a typed message, which is useful when the recipient cannot listen.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.7-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.7 Social Networks",
    q: "Wikipedia is an example of which type of social network?",
    options: [
      "A collaborative project where users add articles",
      "A social networking site for personal connection",
      "A blogging platform for individual writers",
      "A media sharing network for photos and videos",
    ],
    optionRationales: [
      null,
      "You are describing platforms like Facebook or LinkedIn, which center on individual profiles and relationships. Wikipedia is not personal — it is a project anyone can contribute to.",
      "You are describing platforms like Twitter or WordPress, where users publish their own journals or short posts. Wikipedia articles are not personal journals; they are collaboratively edited reference entries.",
      "You are describing platforms where users distribute photos and videos. Wikipedia hosts text and citations, not media distribution.",
    ],
    correct: 0,
    explanation: "## Crowdsourcing\n\nA collaborative project network lets users read, add, and discuss articles about topics of interest. \n\nWikipedia, WikiAnswers, and Wikia are examples. The defining feature is crowd editing — no single author owns the content, and the community refines it over time. It is a project rather than a publication.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.7-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.7 Social Networks",
    q: "YouTube is an example of which type of social network?",
    options: [
      "A blogging platform for writers",
      "A media sharing network for video",
      "A collaborative project for editing",
      "A social curation and bookmarking site",
    ],
    optionRationales: [
      "You are describing text-first platforms such as WordPress or Twitter. YouTube's primary content is video, not written posts.",
      null,
      "You are describing Wikipedia-like platforms, where the community collectively edits a written reference. YouTube hosts individual creators' videos without collaborative editing.",
      "You are describing platforms like Reddit or Digg, where users share and vote on links to content elsewhere. YouTube hosts its own content rather than linking to it.",
    ],
    correct: 1,
    explanation: "## Visual Hubs\n\nA media sharing and content sharing network lets users view and distribute pictures, videos, and audio files. \n\nYouTube, Flickr, and Vimeo are examples. They are built to handle the high bandwidth that video and audio require. The defining feature is that the platform hosts the media itself.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.7-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.7 Social Networks",
    q: "Reddit is an example of which type of social network?",
    options: [
      "A social networking site for personal ties",
      "A media sharing network for photos",
      "A curation and social news network",
      "A collaborative project like Wikipedia",
    ],
    optionRationales: [
      "You are describing platforms like Facebook, where the focus is on personal relationships and profiles. Reddit is organized by topic, not by person.",
      "You are describing platforms that host their own photos and videos. Reddit links out to content hosted elsewhere and lets users vote on those links.",
      null,
      "You are describing platforms where the community jointly edits a written reference. Reddit users post and vote on links and comments, but they do not collaboratively author a single article.",
    ],
    correct: 2,
    explanation: "## Social Ranking\n\nA social curation, bookmarking, and social news network lets users tag and search websites, and share articles, news stories, and media. \n\nReddit, Digg, and Delicious are examples. Users do not create the content — they find, share, and rank it. The community votes content up or down.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.7-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.7 Social Networks",
    q: "Dropbox and WeTransfer are examples of which type of social network?",
    options: [
      "Media sharing networks for photos",
      "Social curation and bookmarking sites",
      "Collaborative projects like Wikipedia",
      "File sharing networks for sending files",
    ],
    optionRationales: [
      "You are describing platforms like YouTube and Flickr, which are optimized for viewing media. File sharing services move files of any type — documents, archives, code — and are not primarily for viewing.",
      "You are describing platforms like Reddit and Digg, where the community surfaces content by vote. File sharing does not involve voting or curation.",
      "You are describing platforms where the community jointly edits written content. File sharing platforms do not edit or host collaboratively; they transmit files from one user to another.",
      null,
    ],
    correct: 3,
    explanation: "## File Transfer\n\nA file sharing network lets users send and receive files from others at an Internet location. \n\nDropbox, WeTransfer, ShareFile, and Hightail are examples. The defining feature is moving files between users or devices — often with free or paid storage tiers — rather than publishing media for public viewing.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.7-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.7 Social Networks",
    q: "A social media user wants to reduce privacy risks. Which practice best protects them?",
    options: [
      "Managing the profile and limiting who views it",
      "Accepting every friend request to expand",
      "Posting location and phone number openly",
      "Using the same password across all accounts",
    ],
    optionRationales: [
      null,
      "You are describing a growth tactic that increases exposure. More connections mean more people who can see posts and share information.",
      "You are describing a convenience that creates direct risk. Location and contact details are exactly what attackers seek.",
      "You are describing password reuse, which turns one breach into many. A single compromised account gives an attacker access to all of them.",
    ],
    correct: 0,
    explanation: "## Managed Profile\n\nManaging your profile and controlling who can view your information is the primary way to protect privacy on social networks. \n\nFollow the standard tips: register with caution, manage your profile, choose friends carefully, limit friends, divulge only relevant information, and be leery of urgent requests for help.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "What are spiders and crawlers in the context of search engines?",
    options: [
      "Malware programs that track users",
      "Software that indexes the web for search",
      "Extensions that block ads on pages",
      "Scripts that auto-download server files",
    ],
    optionRationales: [
      "You are describing spyware, not search engine crawlers. Crawlers are legitimate programs run by search engines; spyware is malicious software that hides on a device.",
      null,
      "You are describing ad blockers, not crawlers. Ad blockers run locally in the browser; crawlers run on search engine servers, visiting millions of pages.",
      "You are describing a download automation tool, not a crawler. Downloaders fetch specific files; crawlers follow links across the web.",
    ],
    correct: 1,
    explanation: "## The Web Weavers\n\nSearch engines use programs called spiders or crawlers. \n\nA crawler is software that combs the web to find web pages and add new data about them to the database, thereby building an index. Google's index contains billions of pages, all discovered by crawlers following links from one page to the next.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "What is a query in the context of web search?",
    options: [
      "A database table of indexed pages",
      "A bookmark saved for frequent visits",
      "A search term entered to get results",
      "A hidden tag describing page content",
    ],
    optionRationales: [
      "You are describing an index, not a query. The index is what the search engine searches; the query is what the user searches with.",
      "You are describing a bookmark, not a query. Bookmarks store destinations; queries ask questions.",
      null,
      "You are describing metadata, not a query. Metadata is written by the page author; a query is written by the user.",
    ],
    correct: 2,
    explanation: "## The Search Input\n\nA query is a search term you enter into a search engine to obtain results. \n\nIt is what you type into the search box. The engine matches your query against its index and returns pages that contain the terms. The query is the input; the results are the output.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "What is a web directory?",
    options: [
      "A search engine's database of pages",
      "A guide to subjects or sites by category",
      "A cached copy of a page on disk",
      "A tool that blocks fraudulent sites",
    ],
    optionRationales: [
      "You are describing the engine's index, not a directory. The index is machine-built from crawled pages; a directory is human-curated.",
      null,
      "You are describing a cache, not a directory. Caches store the content of specific pages for speed; a directory is a list of links to many sites.",
      "You are describing a phishing filter, not a web directory. Filters exist to prevent access; directories exist to guide access.",
    ],
    correct: 1,
    explanation: "## Curated Guide\n\nA web directory, also called a subject directory, is an online guide to subjects or websites. \n\nEntries are usually arranged in alphabetical or categorical order, and human editors — not crawlers — decide what to include. Directories predate modern search engines and remain useful for curated browsing.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "A user searches for \"artificial intelligence\" with quotation marks. What does the search engine do?",
    options: [
      "Excludes pages containing the phrase",
      "Broadens the search to related terms",
      "Returns pages matching the exact phrase",
      "Sorts results by relevance rather than date",
    ],
    optionRationales: [
      "You are describing the hyphen operator, not quotation marks. The hyphen excludes a term; quotation marks require an exact phrase.",
      "You are describing a fuzzy or related search, which is the opposite of what quotation marks do. Quotation marks narrow the search by requiring exactness.",
      null,
      "You are describing a sorting preference, not the effect of quotation marks. Sorting changes the order of results; quotation marks change which results appear at all.",
    ],
    correct: 2,
    explanation: "## The Lock\n\nPlacing a search term in quotation marks requires an exact phrase match in that specific order. \n\nWithout quotes, a search for artificial intelligence might return pages containing 'artificial' or 'intelligence' separately. With quotes, only pages containing the exact phrase appear. It is the difference between 'any of these words' and 'this exact phrase'.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "What does the hyphen (-) operator do in a search query?",
    options: [
      "Combines two terms so both must appear",
      "Excludes pages with the specified term",
      "Ranks results by publication date",
      "Marks the term as a wildcard",
    ],
    optionRationales: [
      "You are describing the implicit AND behavior of most search engines, which requires no operator at all. The hyphen does not require both terms; it excludes a term.",
      null,
      "You are describing a sort option, which is set in the interface, not by an operator. The hyphen does not change sort order; it filters the set.",
      "You are describing the asterisk operator, not the hyphen. The asterisk stands in for unknown characters; the hyphen excludes a known term.",
    ],
    correct: 1,
    explanation: "## Filtering Junk\n\nIn a search query, the hyphen acts as a NOT operator. \n\nSearching for 'jaguar -car' tells the engine to find pages about the jaguar animal and hide any page that mentions the word 'car'. This is how you filter out the wrong sense of a word.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-006",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "What does the asterisk (*) do in a web search?",
    options: [
      "Excludes the following term from results",
      "Requires an exact phrase match",
      "Acts as a wildcard for unknown text",
      "Restricts results to numeric ranges",
    ],
    optionRationales: [
      "You are describing the hyphen operator, not the asterisk. The hyphen excludes a term; the asterisk stands in for unknown characters.",
      "You are describing quotation marks, not the asterisk. Quotation marks lock a phrase; the asterisk frees a position.",
      null,
      "You are describing the double-dot range operator (as in 2019..2023), not the asterisk. The range operator filters numbers; the asterisk substitutes for characters.",
    ],
    correct: 2,
    explanation: "## Fill in the Blank\n\nThe asterisk is a wildcard. It stands in for any number of unknown characters. \n\nSearching for 'augment*' returns results for 'augment', 'augmented', 'augmenting', and 'augmentation' all at once. It is useful when you are unsure of a word's exact form.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-007",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "Which search operator lets you find pages published within a specific range of numbers?",
    options: [
      "The colon (:)",
      "The hyphen (-)",
      "The vertical bar (|)",
      "The double dot (..)",
    ],
    optionRationales: [
      "The colon is used in site-specific searches (like site:example.com), not for numeric ranges.",
      "The hyphen is the exclusion operator. It removes terms from results; it does not define a range.",
      "The vertical bar is the OR operator. It broadens the search to either of two terms; it does not define a range.",
      null,
    ],
    correct: 3,
    explanation: "## Number Range\n\nTwo dots between two numbers create a range filter. \n\nSearching for 'augmented reality 2019..2023' returns only pages published in that window. This is the standard way to filter results by date, price, or any numeric attribute across most search engines.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.8-008",
    mainTopic: "Unit 7: The Internet",
    topic: "7.8 Information Literacy and Web Searches",
    q: "What is the CARS checklist used for?",
    options: [
      "Evaluating the credibility of online information",
      "Testing the connection speed of an ISP",
      "Checking the encryption level of a site",
      "Measuring a search engine's effectiveness",
    ],
    optionRationales: [
      null,
      "You are describing a network performance test, not an information literacy tool. Speed tests measure throughput; CARS evaluates content quality.",
      "You are describing a TLS check, not CARS. Encryption verifies the transport; CARS verifies the content.",
      "You are describing search engine evaluation (precision and recall), not CARS. The algorithm evaluates itself; CARS is used by the reader to judge the pages.",
    ],
    correct: 0,
    explanation: "## Digital Literacy\n\nThe CARS checklist evaluates online information across four dimensions: Credibility (is the author an expert?), Accuracy (is the data current and correct?), Reasonableness (is the presentation fair and balanced?), and Supportability (are sources cited?). \n\nIt is a structured way to judge whether a web page is worth trusting.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-001",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "What is a citation?",
    options: [
      "A hyperlink included in a document",
      "A bookmark for frequently used pages",
      "A search filter that limits results",
      "A formal reference crediting the source of information",
    ],
    optionRationales: [
      "You are describing a hyperlink, not a citation. Links can be clicked and followed; citations are formatted references that identify a source.",
      "You are describing a bookmark, not a citation. Bookmarks are private and saved locally; citations appear in published work to credit a source.",
      "You are describing a search filter, not a citation. Filters narrow a search in real time; citations credit sources in finished work.",
      null,
    ],
    correct: 3,
    explanation: "## Academic Credit\n\nA citation is a formal reference to a source, such as a published work. \n\nIt gives credit to the origin of the information you used. In academic writing, citations protect you from plagiarism and let readers verify your sources. Microsoft Word and similar tools can manage citations and produce a bibliography automatically.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-002",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "What are intellectual property rights?",
    options: [
      "Rules that govern how servers store user data",
      "Policies for allocating Internet bandwidth",
      "Procedures for reporting security breaches",
      "Legal rights protecting creators of original work",
    ],
    optionRationales: [
      "You are describing data protection or storage regulation, not intellectual property. Storage rules apply to whoever operates the server; IP rights belong to creators of content.",
      "You are describing telecommunications policy, not IP rights. Bandwidth allocation concerns network capacity; IP rights concern ownership of creative work.",
      "You are describing incident response, not IP rights. Incident response is a technical process; IP rights are a legal concept.",
      null,
    ],
    correct: 3,
    explanation: "## Ownership of Ideas\n\nIntellectual property rights are the legal rights to which creators are entitled for their work. \n\nThey cover photos, art, writing, inventions, and music. Just because you can right-click and save an image does not mean you own it — the creator retains rights, and using their work without permission or citation can violate those rights.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-003",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "What is Digital Rights Management (DRM)?",
    options: [
      "A tool that speeds up media on slow connections",
      "Technologies that prevent unauthorized copying",
      "A tool that translates media into other languages",
      "An algorithm that compresses media files",
    ],
    optionRationales: [
      "You are describing a codec or streaming optimization, not DRM. Performance tools improve delivery; DRM restricts copying.",
      null,
      "You are describing localization, not DRM. Localization changes languages; DRM controls copying.",
      "You are describing compression, not DRM. Compression reduces size; DRM restricts copying.",
    ],
    correct: 1,
    explanation: "## The Digital Lock\n\nDRM is a collection of technologies used by software publishers and trade groups to fight piracy and prevent unauthorized copying of digital content. \n\nIt includes authentication, certificates of authenticity, encryption, and digital watermarks. It is why you cannot freely share a movie rented from an online store.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-004",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "What is public domain content?",
    options: [
      "Content published under a Creative Commons licence",
      "Content that only government agencies may publish",
      "Content not subject to copyright and free to use",
      "Content that is publicly visible but copyrighted",
    ],
    optionRationales: [
      "You are describing Creative Commons content, which retains copyright. Public domain content has no copyright at all.",
      "You are describing a publication restriction, which public domain does not impose. Public domain content can be used by anyone for any purpose.",
      null,
      "You are describing the ordinary state of most online content. Public visibility does not waive copyright — nearly everything you see online is copyrighted.",
    ],
    correct: 2,
    explanation: "## Free for Everyone\n\nPublic domain content is not subject to copyright. \n\nIt enters the public domain when its copyright expires or when the creator waives their rights. Anyone can use it for any purpose — copy, sell, modify — without asking permission. It is the most permissive status content can have.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-005",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "What does Creative Commons allow creators to do?",
    options: [
      "Enforce strict copyright with no exceptions",
      "Abandon all rights to the public domain",
      "Verify users' identities before sharing work",
      "Keep copyright while allowing conditional use",
    ],
    optionRationales: [
      "You are describing full copyright, which is what CC exists to relax. CC gives creators a way to allow certain uses without waiving rights entirely.",
      "You are describing CC0, a specific and unusually permissive option within the Creative Commons framework. Standard CC licences retain copyright while granting specific permissions.",
      "You are describing an identity verification function, which Creative Commons does not perform. CC is a licensing framework, not an identity service.",
      null,
    ],
    correct: 3,
    explanation: "## The Middle Ground\n\nCreative Commons is a nonprofit organization that helps content creators keep copyright to their materials while allowing others to use, copy, or distribute their work under specific conditions. \n\nInstead of the binary of 'all rights reserved' or 'public domain', CC offers a middle ground — for example, 'you may share as long as you credit me and do not sell it.'",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-006",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "According to academic guidelines, when is it acceptable to use another person's ideas in your work?",
    options: [
      "When you paraphrase in your own words",
      "Only when you obtain written permission",
      "Never — ideas must be original",
      "When you provide a proper citation",
    ],
    optionRationales: [
      "You are describing a partial response to plagiarism, not a complete answer. Paraphrasing without citation is still plagiarism if the idea is not yours.",
      "You are describing one possible path, not the general rule. For most academic writing, permission is not required — citation is.",
      "You are describing a rule that does not exist. Academic work is built on prior scholarship; the whole point is to extend others' ideas with proper attribution.",
      null,
    ],
    correct: 3,
    explanation: "## Build on Knowledge\n\nYou can use other people's ideas in your research papers and presentations, provided you cite standard teaching for any information that is not common knowledge. \n\nThis is how academic work progresses: by building on prior ideas with credit given. Ethics is the set of moral principles that governs this behavior.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-007",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "What is a bibliography?",
    options: [
      "A summary of the paper's main argument",
      "A list of citations at the end of a work",
      "A table of contents listing sections",
      "A signature that verifies authorship",
    ],
    optionRationales: [
      "You are describing an abstract, not a bibliography. An abstract is a brief summary at the start; a bibliography is a full list of sources at the end.",
      null,
      "You are describing a table of contents, not a bibliography. Both appear at the front or back of a document, but only one credits sources.",
      "You are describing a digital signature, not a bibliography. Signatures verify authorship; bibliographies credit sources.",
    ],
    correct: 1,
    explanation: "## The Citation List\n\nA bibliography is an alphabetical collection of citations that appears at the end of a work. \n\nIt lists the sources you used and gives readers a way to locate them. Microsoft Word and other tools can build a bibliography automatically from the citations you enter as you write.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-008",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "What is ethics in the context of using online content?",
    options: [
      "Laws that governments enforce",
      "Protocols that govern transmission",
      "Moral principles governing behavior",
      "Pricing for licensing digital content",
    ],
    optionRationales: [
      "You are describing law, not ethics. Laws are enforced by the state with penalties; ethics are principles that guide individual behavior whether or not the law requires them.",
      "You are describing network protocols, not ethics. Protocols define how data moves; ethics guide how people behave.",
      null,
      "You are describing a commercial arrangement, not ethics. Pricing concerns how much a license costs; ethics concerns whether a use is right.",
    ],
    correct: 2,
    explanation: "## Moral Principles\n\nEthics is the set of moral principles that govern people's behavior. \n\nIn the context of online content, it means using material fairly — citing sources, respecting copyright, and not claiming others' work as your own. Ethics often goes beyond what the law requires. It is about what you should do, not just what you can do.",
    status: "approved"
  },

  {
    id: "CS110-T2-U7-7.9-009",
    mainTopic: "Unit 7: The Internet",
    topic: "7.9 Using Online Content Responsibly",
    q: "A student finds an anonymous 2009 article claiming a product 'cures all diseases'. Why should they distrust it?",
    options: [
      "It is outdated but otherwise reasonable",
      "It lacks credibility from no cited sources",
      "It fails on accuracy alone because of its date",
      "It fails every CARS test in four ways",
    ],
    optionRationales: [
      "You are ignoring the other failures. The article fails on credibility (no author), reasonableness (extreme claims), and supportability (no evidence) in addition to accuracy.",
      "You have identified one failure and stopped. The article also fails on accuracy, reasonableness, and supportability.",
      "You have identified one failure and mislabelled it. Old information is not automatically inaccurate; the claim of curing all diseases is what fails reasonableness.",
      null,
    ],
    correct: 3,
    explanation: "## Total Failure\n\nThis article fails on every dimension of the CARS test. No author means no Credibility — you cannot tell whether the writer is an expert. Extreme claims mean no Reasonableness — no legitimate source would claim to cure all diseases. An outdated date means no Accuracy — the field has moved on. And no citations mean no Supportability. All four failures together are the warning.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 8 · OPERATING SYSTEMS AND UTILITIES  (78 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T2-U8-8.1-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "Which of the following is required for a smartphone, computer, or tablet to run at all?",
    options: [
      "An active Internet link to load the OS",
      "A peripheral device such as a keyboard",
      "A program or app with instructions to run",
      "A physical medium such as an external drive",
    ],
    optionRationales: [
      "You are describing a network requirement, not a functional requirement. Many devices run entirely offline; the operating system is stored locally and does not need a connection at boot.",
      "You are describing optional hardware. A keyboard is useful but not required on a touchscreen device; a monitor is not required on a phone.",
      null,
      "You are describing optional storage. Internal storage is standard on every modern device, and external storage is only used when the internal space runs out.",
    ],
    correct: 2,
    explanation: "## The Logic Layer\n\nEvery device needs a program or app to run. Hardware is the body; the program is the instructions that tell the hardware what to do. Without a program, a phone is a very expensive piece of plastic. The terms software, program, and app are used interchangeably for the same thing: the instructions that control the machine.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.1-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "Which of the following correctly lists the four categories of apps?",
    options: [
      "Word, spreadsheet, presentation, and database",
      "Local, portable, native, and web",
      "Free, shareware, open, and public domain",
      "Productivity, graphics, personal, and communications",
    ],
    optionRationales: [
      "You are listing four productivity subtypes, not the four main categories. Word processing and spreadsheets belong under productivity, but productivity, graphics, personal interest, and communications are broader categories that contain many types each.",
      "You are listing installation models, not content categories. Local, portable, native, and web describe how apps are installed and accessed, not what they do.",
      "You are listing distribution and licensing models, not functional categories. Free, shareware, and open source describe how the software is sold or licensed, not what it does.",
      null,
    ],
    correct: 3,
    explanation: "## Purpose-Based Grouping\n\nApps are grouped by purpose into four categories: productivity (business and personal work), graphics and media (creation and playback), personal interest (lifestyle, medical, entertainment, convenience, education, financial), and communications (email, messaging, video conferencing). These are the broadest groupings used throughout the unit.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.1-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "A user installs a program on their laptop's internal hard drive. What type of app is this?",
    options: [
      "A local app, because it lives on the internal drive",
      "A portable app, because it runs from any media",
      "A web app, because it is accessed in a browser",
      "A native app, because it is designed for the OS",
    ],
    optionRationales: [
      null,
      "You are confusing installation with portability. A portable app runs from removable media without being installed on the host computer; a local app is installed on the internal drive.",
      "You are describing a browser-based app. A web app runs on a remote server and is accessed through a browser; a local app is installed on the device and runs from the internal drive.",
      "You are describing a design property, not a storage location. A native app is written for a specific operating system and installed on the device; a local app is defined by being installed on the internal drive.",
    ],
    correct: 0,
    explanation: "## Resident Software\n\nA local app is installed on the computer's internal hard drive. Once installed, it stays on the machine and its basic features are available without an Internet connection. Most desktop software — word processors, photo editors, games — is delivered as a local app.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.1-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "What is a portable app?",
    options: [
      "An app designed only for mobile phones",
      "An app that runs from removable media",
      "An app that syncs data across devices",
      "An app smaller than 100 megabytes",
    ],
    optionRationales: [
      "You are describing a mobile app, not a portable app. Mobile apps are designed for touchscreens and run on phones; portable apps run from removable media on any compatible computer.",
      null,
      "You are describing synchronization, which is a feature of many apps, not a definition. A portable app does not sync by itself — it just runs from external media.",
      "You are describing a size threshold, not a category. Portable apps can be large or small; the defining feature is where they run from, not how much space they take.",
    ],
    correct: 1,
    explanation: "## No Installation Needed\n\nPortable apps run from removable media such as a USB flash drive, an external hard drive, or the cloud. They do not need to be installed on the host computer and leave no files behind when the media is removed. They are useful for travelers who need to use software on borrowed machines.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.1-005",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "What defines a native app?",
    options: [
      "An app preinstalled on every device",
      "An app that runs in a browser only",
      "An app written for one specific OS",
      "An app compatible with all systems",
    ],
    optionRationales: [
      "You are describing bundled or OEM software, not a native app. Many native apps are not preinstalled — users download them from an app store or vendor site.",
      "You are describing a web app, which is the opposite of a native app. Web apps run in a browser; native apps are installed and run on the operating system directly.",
      null,
      "You are describing cross-platform apps, which are the opposite of native. Native apps are built for one OS and will not run on another.",
    ],
    correct: 2,
    explanation: "## Tailor-Made\n\nA native app is written specifically for one operating system and installed on the device. An Android app will not run on an iPhone, and a Windows app will not run on macOS, because each was built in the language of one OS. Native apps run faster and have deeper access to the device's hardware than web apps.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.1-006",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "How does a user access a web app?",
    options: [
      "By downloading it from the app store",
      "By subscribing to a paid vendor plan",
      "By running a file from the local disk",
      "By entering a URL into a browser",
    ],
    optionRationales: [
      "You are describing a native app installation, not web app access. App stores install software on the device; web apps are not installed at all.",
      "You are describing a billing model, not an access method. Some web apps are free; some paid; both are accessed the same way.",
      "You are describing a local app, not a web app. Local apps are installed and launched from the device's disk; web apps run on remote servers.",
      null,
    ],
    correct: 3,
    explanation: "## Browser Based\n\nA web app is accessed via the Internet using a browser. You type a URL, the app loads from the provider's server, and nothing is installed on your device. Gmail, Google Docs, and Facebook are examples. The trade-off is that a web app requires a connection and typically offers fewer features than a native app.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.1-007",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "An app is available both as a native mobile app and as a web app. What is the benefit of using both?",
    options: [
      "Data and settings sync across your devices",
      "The web version is faster on every device",
      "The mobile version uses no data plan",
      "The native version runs only when web is off",
    ],
    optionRationales: [
      null,
      "You are claiming a performance advantage that is generally false. Native apps typically run faster because they are optimized for the OS.",
      "You are describing a network behavior that is not accurate. Both native and web apps use data when communicating with servers; the mobile app is not exempt.",
      "You are describing a constraint that does not exist. Native and web apps are independent; a user can run both at the same time if they wish.",
    ],
    correct: 0,
    explanation: "## Cloud Sync\n\nWhen an app exists in both forms, data and settings synchronize between them. A note you save in the mobile app appears when you open the web app on your laptop, because both are talking to the same backend. Synchronization keeps your life consistent across devices.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.1-008",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.1 How Do You Use Programs and Apps?",
    q: "A user needs to type a long document on a smartphone. Which solution is most appropriate?",
    options: [
      "Using a portable Bluetooth keyboard",
      "Typing with both thumbs on-screen",
      "Sending the work to a friend",
      "Waiting for a desktop to be free",
    ],
    optionRationales: [
      null,
      "You are describing the default input method, which is slow for long documents. Thumb typing works for messages but is inefficient for pages of text.",
      "You are outsourcing the task, not solving it. This adds delay and loses control over the process.",
      "You are postponing the task, not solving it. If the document is due now, waiting defeats the purpose.",
    ],
    correct: 0,
    explanation: "## External Hardware\n\nA phone is a computer. Pairing it with a portable Bluetooth keyboard turns it into a writing station, letting the user type at full speed on a device that fits in a pocket. Many on-screen keyboards also include word prediction and voice-to-text, but for long documents, physical keys remain fastest.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What does Digital Rights Management (DRM) for a program control?",
    options: [
      "The price the user pays for software",
      "The rules on use and distribution",
      "The speed at which the app runs",
      "The updates the vendor releases",
    ],
    optionRationales: [
      "You are describing pricing, not DRM. Pricing is set by the vendor; DRM restricts what you can do after you buy.",
      null,
      "You are describing performance, not DRM. Performance depends on hardware and code quality, not licensing.",
      "You are describing maintenance releases, not DRM. Updates change the software; DRM governs who may use it and how.",
    ],
    correct: 1,
    explanation: "## The Digital Lock\n\nDRM for programs and apps defines restrictions on their use, modification, and distribution. It came out of copyright law and is what stops you from copying a paid program onto ten computers, or modifying its code, or selling copies of it. It is the technical enforcement of the license.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What are access controls in the context of software?",
    options: [
      "Security rules that define who can use an app",
      "Settings that determine app bandwidth use",
      "Mechanisms that update the app automatically",
      "Filters that block content from display",
    ],
    optionRationales: [
      null,
      "You are describing network configuration, not access controls. Bandwidth settings affect performance; access controls affect permission.",
      "You are describing automatic updates, not access controls. Updates change the software; access controls restrict who may use it.",
      "You are describing content filters, not access controls. Filters remove items from view; access controls decide who can view them at all.",
    ],
    correct: 0,
    explanation: "## Gatekeeping\n\nAccess controls are security measures that define who can use a program or app, and what actions they can perform inside it. Examples include passwords, biometrics, and account roles. They are what stop a guest from deleting a system file, or a regular user from changing administrator settings.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What is shareware?",
    options: [
      "Software free with no restrictions",
      "Software free for a trial, then paid",
      "Software users may freely modify",
      "Software with copyright waived",
    ],
    optionRationales: [
      "You are describing public domain software, not shareware. Shareware retains copyright and requires payment after the trial period.",
      null,
      "You are describing open source software, not shareware. Open source is defined by access to the code; shareware is defined by a trial period.",
      "You are describing public domain software, not shareware. Waiving copyright is the opposite of shareware, which retains full copyright and enforces payment.",
    ],
    correct: 1,
    explanation: "## Try Before You Buy\n\nShareware is copyrighted and distributed at no cost for a trial period. Payment is required to continue using it after the trial ends. The model is 'try before you buy' — the developer trusts the user to pay if they keep using the software. WinRAR is a famous example.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What distinguishes freeware from public domain software?",
    options: [
      "Freeware keeps copyright; public domain has none",
      "Freeware can be changed; public domain cannot",
      "Freeware costs a fee; public domain is free",
      "Freeware is open source; public domain is closed",
    ],
    optionRationales: [
      null,
      "You have reversed the relationship. Freeware retains all rights, so it cannot be freely modified; public domain waives copyright, so it can.",
      "You have the price backwards. Freeware is provided at no cost; public domain is also free, but the difference is in rights, not price.",
      "You are mixing unrelated axes. Freeware may be open or closed source; public domain software also may be either.",
    ],
    correct: 0,
    explanation: "## Free but Private\n\nFreeware is copyrighted software provided at no cost — the creator retains all rights, and you cannot modify or sell it. Public domain software has had its copyright waived entirely, so anyone can use, modify, or sell it. The distinction is not price; it is who holds the rights.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-005",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What does open source software allow users to do?",
    options: [
      "Use the software for personal tasks only",
      "Modify and redistribute the code",
      "Read the code but never redistribute",
      "Install the software without any licence",
    ],
    optionRationales: [
      "You are describing a restriction that most open source licenses do not impose. The GNU GPL and similar licenses explicitly allow commercial use.",
      null,
      "You are describing source-available software, not open source. Reading the code is part of open source, but modifying and redistributing are the defining freedoms.",
      "You are describing a use right that is broader than open source requires. Open source licenses still have conditions — most famously, derivative works must remain open source.",
    ],
    correct: 1,
    explanation: "## The Community Code\n\nOpen source programs and apps have no restrictions from the copyright holder regarding modification and redistribution. Users can add functionality and sell or give away their versions to others. Linux, Firefox, and VLC are common examples. Standard teaching code is public, and the community is invited to improve it.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-006",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What does a single-user (end-user) licence agreement typically permit?",
    options: [
      "Unlimited installs on any owned device",
      "One install on one device by one user",
      "Installation on every device in a building",
      "Installs for a set number of users",
    ],
    optionRationales: [
      "You are describing a per-user licence that many modern vendors offer, but it is not what a single-user EULA traditionally grants.",
      null,
      "You are describing a site licence, which is a separate category. A site licence covers an organization's whole location; an EULA covers one installation.",
      "You are describing a multiple-user licence, not a single-user EULA. Multiple-user agreements cover a named set of users; the classic EULA covers one.",
    ],
    correct: 1,
    explanation: "## One-to-One\n\nA single-user or end-user licence agreement (EULA) grants permission for one installation on one device, by one user, under defined terms. Most boxed retail software ships with this model: if you want the program on a second computer, you technically need a second licence.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-007",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What is a site licence?",
    options: [
      "An organization-wide licence for any number of users",
      "A licence for one user on two personal devices",
      "A licence for a single computer in one location",
      "A licence for a set number of named users",
    ],
    optionRationales: [
      null,
      "You are describing a per-user multi-device licence, not a site licence. A site licence scales to the whole organization; a personal multi-device model covers one person.",
      "You are describing a single-user EULA, which is the opposite of a site licence. A site licence exists to cover many installations at once.",
      "You are describing a multiple-user licence, which is narrower than a site licence. Multiple-user agreements name a specific set of users; site licences cover everyone at a location.",
    ],
    correct: 0,
    explanation: "## Corporate Deals\n\nA site licence allows an organization to provide access to as many users as it wants, either by individual installations or by providing network access or Internet passwords. A university might buy a site licence for statistical software so that every enrolled student can use it without tracking individual seats.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-008",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What is a patch?",
    options: [
      "A major new version that costs a fee",
      "A bundle of many updates in one package",
      "An update that addresses one specific issue",
      "A legal notice describing terms of use",
    ],
    optionRationales: [
      "You are describing an upgrade, not a patch. Upgrades add new functionality and often cost money; patches fix small, specific problems and are generally free.",
      "You are describing a service pack, not a patch. A service pack groups many changes into one download; a patch fixes one specific issue.",
      null,
      "You are describing a licence agreement, not a patch. Licences describe permitted use; patches fix technical problems.",
    ],
    correct: 2,
    explanation: "## The 'Quick Fix'\n\nA patch is a single update that addresses one specific issue — usually a bug or a security flaw. It is small, targeted, and typically free. Like a fabric patch covering a hole, it fixes one problem without changing the whole product.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-009",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What is the difference between an update and an upgrade?",
    options: [
      "An update is a minor fix; an upgrade is a major release",
      "An update costs money; an upgrade is always free",
      "An update changes versions; an upgrade does not",
      "An update is automatic; an upgrade is always manual",
    ],
    optionRationales: [
      null,
      "You have the pricing backwards. Updates are generally free bug fixes; upgrades typically cost money because they add substantial new features.",
      "You have this inverted. Upgrades change the major version number (from Windows 10 to Windows 11, for example); updates change only the minor version.",
      "You are describing delivery mechanisms, not the underlying difference. Both can be automatic or manual depending on settings.",
    ],
    correct: 0,
    explanation: "## The Next Level\n\nAn update is a minor release that fixes problems, patches security holes, or adds small features — usually free. An upgrade is a major new version with substantial changes, and often requires a fee. Windows 10 to Windows 11 is an upgrade; a monthly security patch is an update.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-010",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What does an uninstaller do?",
    options: [
      "Disables an app without removing its files",
      "Deletes only the shortcut on the desktop",
      "Removes the program and its system entries",
      "Hides an app from search without deleting",
    ],
    optionRationales: [
      "You are describing disabling or suspending an app, not uninstalling. Disabling leaves files in place; uninstalling removes them.",
      "You are describing deleting a shortcut, which leaves the underlying program installed. Removing the icon does not free significant storage.",
      null,
      "You are describing hiding or removing from view, not uninstalling. Hiding leaves the app fully present on disk and only changes its visibility.",
    ],
    correct: 2,
    explanation: "## Clean Removal\n\nAn uninstaller removes the program files as well as any associated entries in the system files. Simply deleting the folder leaves behind registry entries and configuration files. Using the proper uninstaller keeps the system clean and reclaims storage.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-011",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What is software piracy?",
    options: [
      "Copying an open source app for a friend",
      "Installing on the licensed number of devices",
      "Using trial software past the trial without paying",
      "Illegally copying or using copyrighted material",
    ],
    optionRationales: [
      "You are describing legal distribution, which open source licences explicitly allow. Piracy is about violating copyright; open source has granted permission to copy.",
      "You are describing compliant use. Installing on the licensed number of devices is exactly what the licence permits.",
      "You are describing one specific form of piracy, but not the full definition. Piracy also includes copying commercial software without permission, distributing cracked versions, and selling pirated copies.",
      null,
    ],
    correct: 3,
    explanation: "## Digital Theft\n\nPiracy is the illegal copying, sharing, or use of copyrighted digital material. It is common with software because the files are digital and easy to duplicate. Buying or selling pirated software is a crime that can lead to fines and legal consequences. It is the digital equivalent of stealing a physical product.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.2-012",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.2 Acquiring Programs and Apps Responsibly",
    q: "What is a service pack?",
    options: [
      "A single patch for one security flaw",
      "A collection of updates in one package",
      "A new version with a new licence fee",
      "A tool that uninstalls a program cleanly",
    ],
    optionRationales: [
      "You are describing a patch, not a service pack. A patch fixes one issue; a service pack bundles many fixes together.",
      null,
      "You are describing an upgrade, not a service pack. An upgrade adds major new features and usually costs money.",
      "You are describing an uninstaller, not a service pack. Uninstallers remove software; service packs update it.",
    ],
    correct: 1,
    explanation: "## The Bundle\n\nA service pack is a collection of updates, fixes, and enhancements bundled into one package. It is more convenient than installing each patch one by one. Microsoft historically released service packs for Windows to roll up months of security fixes into a single download.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What are productivity apps designed to help users do?",
    options: [
      "Play media files such as music",
      "Create documents and stay organized",
      "Protect the computer from malware",
      "Chat with friends on social media",
    ],
    optionRationales: [
      "You are describing media player apps, which are a different category. Media players consume content; productivity apps create it.",
      null,
      "You are describing security tools, which are a separate category. Security apps defend the system; productivity apps help you produce work.",
      "You are describing communications apps, which are their own category. Social and messaging apps are for interaction; productivity apps are for output.",
    ],
    correct: 1,
    explanation: "## Professional Output\n\nProductivity apps are applications for personal use that you may use to create documents, develop presentations, track appointments, or stay organized. They include word processing, spreadsheets, presentations, databases, productivity suites, and enterprise computing. Their purpose is to produce work and manage information.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "When you save a project, what physically happens?",
    options: [
      "The project moves from memory to storage",
      "The project is deleted from memory",
      "The project is sent to a remote server",
      "The project is printed to physical paper",
    ],
    optionRationales: [
      null,
      "You are describing closing or discarding, not saving. Saving does not remove the project from memory; it copies it to disk while leaving the working copy in RAM.",
      "You are describing cloud sync, not local saving. Saving to local storage keeps the file on your device; sync is a separate operation.",
      "You are describing a hard copy, not a save. Printing creates a physical version; saving stores the digital version.",
    ],
    correct: 0,
    explanation: "## Persistence\n\nWhen you save a project, the computer transfers it from memory (RAM) to a local storage medium (hard drive, SSD). RAM is volatile — its contents are lost when power is cut — so saving writes the work to persistent storage. This is why unsaved work is at risk during a power failure.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What is a hard copy?",
    options: [
      "A file stored on the internal disk drive",
      "A password-protected file",
      "Information printed on a physical medium",
      "A backup kept separately",
    ],
    optionRationales: [
      "You are describing a soft copy, despite the word 'hard' in the term. In this context, 'hard copy' means physical, not stored on a hard disk.",
      "You are describing file permissions, not a hard copy. A hard copy is defined by its physical form, not its digital security.",
      null,
      "You are describing redundancy, not a hard copy. Backups are typically digital, stored on separate drives.",
    ],
    correct: 2,
    explanation: "## Real and Physical\n\nA hard copy is information that exists on a physical medium, such as paper. If you can hold it in your hand, it is a hard copy. If you can only see it on a screen, it is a soft copy. The distinction is the medium, not the location or the content.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "In a spreadsheet, what is a cell?",
    options: [
      "A formula that calculates a value",
      "The intersection of a column and row",
      "The entire grid of columns and rows",
      "A set of related worksheets in a file",
    ],
    optionRationales: [
      "You are describing a formula, not a cell. A formula lives inside a cell but is not the cell itself.",
      null,
      "You are describing the worksheet, not a cell. The worksheet contains thousands of cells; one cell is the smallest unit.",
      "You are describing a workbook, not a cell. A workbook contains multiple worksheets, and each worksheet contains many cells.",
    ],
    correct: 1,
    explanation: "## The Target Box\n\nA cell is the location formed by the intersection of a column and a row. If you are in column B and row 4, you are in cell B4. Cells are the fundamental building blocks of a worksheet — every piece of data is entered into one. Formulas and values live inside cells.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-005",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "In spreadsheet terminology, what is a workbook?",
    options: [
      "A single page of cells for data",
      "A saved file of related worksheets",
      "A chart built from a range of cells",
      "A formula applied to a range",
    ],
    optionRationales: [
      "You are describing a worksheet, not a workbook. One worksheet is a single grid; a workbook is the entire file containing many worksheets.",
      null,
      "You are describing a chart, not a workbook. Charts are visual outputs created from data; a workbook is the file that stores the data and the chart.",
      "You are describing a formula, not a workbook. Formulas calculate values; the workbook stores the formulas and their results.",
    ],
    correct: 1,
    explanation: "## The Big Picture\n\nA workbook is the entire spreadsheet file — the container that holds all related worksheets. Think of a real book: each worksheet is a page, and the workbook is the book that binds them together. When you save a spreadsheet, you save the workbook, with all its worksheets inside.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-006",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What is a slide master in presentation software?",
    options: [
      "The first slide with the presentation title",
      "A transition effect between two slides",
      "The template defining every slide's style",
      "A single slide holding speaking notes",
    ],
    optionRationales: [
      "You are describing the title slide, not the slide master. The title slide is one instance; the master controls every slide's design.",
      "You are describing a transition, not a slide master. Transitions animate the change between slides; the master defines formatting.",
      null,
      "You are describing a speaker notes slide, not a slide master. Notes are private to the presenter; the master affects the visual style of every slide shown to the audience.",
    ],
    correct: 2,
    explanation: "## Master Control\n\nA slide master is an overall template for a presentation — it defines the theme, title fonts, text fonts, backgrounds, and layout for every slide. If you want your logo on every page, you edit the master once and it applies everywhere. It is the blueprint for the whole deck.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-007",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What is a database?",
    options: [
      "A document with a long list of items",
      "A spreadsheet with formulas inside",
      "A slide deck for presenting data",
      "A collection of data organized for reporting",
    ],
    optionRationales: [
      "You are describing a list in a document, which is not a database. Lists in documents are flat text; databases are structured for query and retrieval.",
      "You are describing a spreadsheet, which has some database-like features but is not a database. Spreadsheets are cells and formulas; databases are tables and queries.",
      "You are describing a presentation, not a database. Presentations display information for an audience; databases store and query it.",
      null,
    ],
    correct: 3,
    explanation: "## Organized Info\n\nA database is a collection of data organized in a manner that allows access, retrieval, and reporting. Large enterprises use databases to store vast quantities of data — customer records, inventory, transactions — and to search that data efficiently. Amazon's product catalog is a database.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-008",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What is a relational database (RDBMS)?",
    options: [
      "A group of tables linked by common fields",
      "A single flat table with all records inside",
      "A set of unrelated spreadsheets in a folder",
      "A file of images and media used in reports",
    ],
    optionRationales: [
      null,
      "You are describing a flat file, which is the opposite of relational. Flat files duplicate data across rows; relational databases link tables to avoid duplication.",
      "You are describing a folder of files, not a database. Files in a folder have no shared structure; relational tables are linked by design.",
      "You are describing a media library, not a database. Media files are typically stored separately and referenced by path; databases store structured text, numbers, and dates.",
    ],
    correct: 0,
    explanation: "## Connecting Data\n\nA relational database management system (RDBMS) is a database that consists of a collection of tables, where items are organized in columns and rows. Tables are linked by common fields — a customer ID in one table and the same ID in another. This lets the database relate information without duplicating it.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-009",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What is a productivity suite?",
    options: [
      "A single app that replaces all others",
      "A set of related apps sold together",
      "A cloud service for syncing files",
      "A security package with antivirus",
    ],
    optionRationales: [
      "You are describing a hypothetical all-in-one, not a suite. A suite is a collection of separate apps sold together; it does not replace them with one.",
      null,
      "You are describing cloud storage, not a suite. Cloud storage holds files; a suite produces them.",
      "You are describing a security suite, which is a different category. Security suites protect the system; productivity suites help you produce work.",
    ],
    correct: 1,
    explanation: "## The Bundle\n\nA productivity suite is a collection of individual, related applications available together as a unit. Microsoft Office is the classic example — Word, Excel, PowerPoint, Access, and Outlook bundled and designed to work with each other. Suites save money compared with buying each app separately and improve integration.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-010",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What types of documents can a word processor create?",
    options: [
      "Spreadsheets with formulas and charts",
      "Slide shows with transitions",
      "Reports, brochures, newsletters, and resumes",
      "Databases with tables and records",
    ],
    optionRationales: [
      "You are describing spreadsheet software, not a word processor. Spreadsheets calculate numbers; word processors format text.",
      "You are describing presentation software, not a word processor. Presentations are built slide by slide; word processors build flowing documents.",
      null,
      "You are describing database software, not a word processor. Databases store structured records; word processors create formatted text.",
    ],
    correct: 2,
    explanation: "## Versatility\n\nA word processor is used to create documents and reports, mailing labels, flyers, brochures, newsletters, resumes, letters, and more. Word processing is the most widely used productivity app because almost every professional and academic task involves writing.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-011",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "In a presentation app, what is a transition?",
    options: [
      "A visual effect moving between slides",
      "A built-in template for new slides",
      "A bulleted list of key points",
      "A speaker note attached to a slide",
    ],
    optionRationales: [
      null,
      "You are describing the slide master or a template, not a transition. Templates define the layout; transitions animate the change from one slide to the next.",
      "You are describing slide content, not a transition. Bulleted lists are what you put on a slide; transitions are how you move between them.",
      "You are describing speaker notes, not a transition. Notes are private reminders for the presenter; transitions are visual effects for the audience.",
    ],
    correct: 0,
    explanation: "## The Bridge\n\nA transition is a visual effect that plays when you move from one slide to the next. It can be a simple fade, a push, or a more elaborate animation. Transitions smooth the flow of a presentation and keep the audience engaged between topics.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-012",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "In a presentation app, what is an animation?",
    options: [
      "A visual effect on objects within a slide",
      "A transition between two slides",
      "A template applied to the whole deck",
      "A speaker note attached to a slide",
    ],
    optionRationales: [
      null,
      "You are describing a transition, not an animation. Transitions happen between slides; animations happen on objects inside a single slide.",
      "You are describing a theme or template, not an animation. Templates define the look; animations add motion to specific elements.",
      "You are describing speaker notes, not an animation. Notes are for the presenter; animations are for the audience's viewing experience.",
    ],
    correct: 0,
    explanation: "## Motion Within\n\nAn animation is a visual effect applied to an object *inside* a slide — making a bullet point fly in, making an image spin, or making text type itself out. Unlike a transition, which moves from one slide to the next, an animation controls how elements appear and behave on a single slide.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-013",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "What is the purpose of a dialog box in an operating system or app?",
    options: [
      "To display a list of every file on the device",
      "To gather the input needed to finish a task",
      "To permanently delete selected files",
      "To replace the main menu after an error",
    ],
    optionRationales: [
      "You are describing a file manager, not a dialog box. File managers browse storage; dialog boxes collect a specific piece of information.",
      null,
      "You are describing file deletion, not a dialog box. Deletion is one possible action; a dialog box is the window that may confirm or configure it.",
      "You are describing an error state, not a dialog box. Dialog boxes often appear during normal operation; they are not a replacement for menus.",
    ],
    correct: 1,
    explanation: "## The Conversation\n\nA dialog box is a box with controls that lets you tell the operating system how you want to complete a command. When the computer says 'I am ready to print, but which pages? How many copies?', the dialog box is the window where you provide those final details. It is the OS asking for input before it acts.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-014",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "Which type of dialog box control presents a round button for choosing one option?",
    options: [
      "Option button (radio button)",
      "Check box",
      "List box",
      "Text box",
    ],
    optionRationales: [
      null,
      "You are describing a check box, which is a square box for yes/no choices. Option buttons are round and present mutually exclusive choices.",
      "You are describing a list box, which shows a list of options from which you can select. Option buttons are individual round controls.",
      "You are describing a text box, which accepts typed input. Option buttons are predefined choices, not free-form input.",
    ],
    correct: 0,
    explanation: "## Round and Exclusive\n\nOption buttons, also called radio buttons, are round controls that present one choice among several mutually exclusive options. They are named after old car radios: when you pressed one preset button, the others popped out. You can only pick one.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-015",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "Which type of dialog box control presents a square box for a yes/no choice?",
    options: [
      "Option button (radio button)",
      "Check box",
      "List box",
      "Text box",
    ],
    optionRationales: [
      "You are describing an option button, which is round and exclusive. Check boxes are square and allow multiple independent choices.",
      null,
      "You are describing a list box, which shows a scrollable list of options. Check boxes are individual square controls.",
      "You are describing a text box, which accepts typed input. Check boxes are toggled on or off.",
    ],
    correct: 1,
    explanation: "## Square and Independent\n\nA check box is a square control that presents a yes/no choice, displaying a check mark or an X when selected. Unlike option buttons, check boxes are independent — you can select as many as you want at the same time. They are used for settings you can turn on or off individually.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.3-016",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.3 Productivity Apps",
    q: "Which type of dialog box control presents a list of options that appears when you click an arrow?",
    options: [
      "Option button (radio button)",
      "Check box",
      "List box",
      "Text box",
    ],
    optionRationales: [
      "You are describing an option button, which is round and exclusive. List boxes are scrollable lists of options.",
      "You are describing a check box, which is square and independent. List boxes display multiple options in a list format.",
      null,
      "You are describing a text box, which accepts typed input. List boxes present predefined options in a drop-down or scrollable list.",
    ],
    correct: 2,
    explanation: "## The Drop-Down\n\nA list box displays a list of options that appears when you click an arrow in a dialog box. Some list boxes allow you to make multiple selections; others allow only one. It is a space-saving way to present many choices without cluttering the window.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is the difference between bitmap and vector graphics?",
    options: [
      "Bitmaps store pixels; vectors use formulas",
      "Bitmaps use formulas; vectors store pixels",
      "Bitmaps are for logos; vectors for photos",
      "Bitmaps are lossless; vectors are lossy",
    ],
    optionRationales: [
      null,
      "You have reversed the two. Bitmaps are pixel grids; vectors are math. The names hint at the distinction: bitmap refers to a map of bits (pixels), and vector refers to direction and magnitude (mathematical lines).",
      "You have the use cases backwards. Bitmaps are photos — they capture the detail of a real scene. Vectors are logos and icons — they need to scale cleanly to any size.",
      "You are mixing compression concepts with graphic types. Lossless and lossy describe how compression changes data, not how images are stored.",
    ],
    correct: 0,
    explanation: "## Scale vs Detail\n\nBitmap (raster) graphics assign colors to the smallest picture elements, called pixels. Vector graphics consist of shapes, curves, lines, and text created by mathematical formulas. Bitmaps look pixelated when enlarged; vectors remain sharp at any size, because the formula is recalculated for the new dimensions.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is the process of converting analog sound waves into digital data called?",
    options: [
      "Encryption",
      "Compression",
      "Digitizing, or sampling",
      "Rendering",
    ],
    optionRationales: [
      "You are describing a security process, not conversion. Encryption scrambles data so it cannot be read without a key; digitizing converts analog signals into digital form.",
      "You are describing size reduction, not conversion. Compression shrinks a digital file; digitizing creates the digital file in the first place.",
      null,
      "You are describing 3D visualization, not audio conversion. Rendering produces a final image from a 3D model; digitizing converts analog sound into numbers.",
    ],
    correct: 2,
    explanation: "## Analog to Digital\n\nConverting analog data to digital data is called digitizing. A process called sampling converts the analog sound waves into digital sound. The recorder takes thousands of snapshots per second of the wave's amplitude and stores each as a number. This is why a digitized sound file is just a long sequence of numbers.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What does resolution refer to in digital photography?",
    options: [
      "The clarity of an image, measured in pixels",
      "The number of colors in the image",
      "The file size on disk in megabytes",
      "The compression applied when saving",
    ],
    optionRationales: [
      null,
      "You are describing color depth, not resolution. Color depth determines the palette; resolution determines the detail.",
      "You are describing storage footprint, not resolution. File size is a consequence of resolution, color depth, and compression together.",
      "You are describing a compression setting, not resolution. Compression reduces file size after the image is captured; resolution is set at capture time.",
    ],
    correct: 0,
    explanation: "## Quality Level\n\nResolution refers to the clarity or sharpness of an image. The higher the resolution, the sharper the image and the larger the file size. On a digital camera, resolution is typically measured in megapixels — millions of pixels. More pixels means more detail captured and preserved.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What does compression do to a digital media file?",
    options: [
      "Increases resolution by upsampling pixels",
      "Converts analog data into digital data",
      "Makes the file smaller by reducing data",
      "Adds metadata describing the creator",
    ],
    optionRationales: [
      "You are describing upscaling, which is the opposite of compression. Upscaling tries to add detail that is not there; compression reduces the data in the file.",
      "You are describing digitizing, not compression. Digitizing happens at capture time; compression happens after.",
      null,
      "You are describing metadata insertion, not compression. Metadata adds information to a file; compression removes data to shrink it.",
    ],
    correct: 2,
    explanation: "## Saving Space\n\nCompression makes digital media files smaller by reducing the amount of data in them. Some formats use lossy compression, which discards data that the human eye or ear is unlikely to notice. Others use lossless compression, which preserves all data. JPEG is lossy; PNG and GIF are lossless.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-005",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "Which graphics format is best for simple web animations and is limited to 256 colors?",
    options: [
      "JPEG",
      "GIF",
      "PNG",
      "TIFF",
    ],
    optionRationales: [
      "JPEG does not support animation and uses millions of colors. It is designed for photographs, not simple web graphics.",
      null,
      "PNG supports transparency and millions of colors, but it does not support animation in its basic form.",
      "TIFF is designed for professional printing and has very large file sizes. It is the opposite of a web graphics format.",
    ],
    correct: 1,
    explanation: "## Short Loops\n\nGIF (Graphics Interchange Format) is limited to 256 colors but supports simple animations with small file sizes. It is the traditional choice for short looping animations on the web. The color limitation is a trade-off that keeps GIF files small and easy to load.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-006",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "Which format is the standard for high-quality photographs on the web?",
    options: [
      "GIF",
      "PNG",
      "JPEG",
      "BMP",
    ],
    optionRationales: [
      "GIF is limited to 256 colors, which is far too few for photographic work. Photographs need millions of colors to look natural.",
      "PNG is excellent for logos and illustrations, but it produces larger files than JPEG for photographs.",
      null,
      "BMP is an uncompressed bitmap format that produces very large files. It is unsuitable for the web because it has no compression.",
    ],
    correct: 2,
    explanation: "## Photo Precision\n\nJPEG (Joint Photographic Experts Group) is the standard format for photographs on the web. It shows millions of colors and uses lossy compression to keep file sizes small enough to load quickly. The small loss of quality is usually imperceptible, and the gain in size is substantial.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-007",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "Which graphics format supports transparency and is best for logos and icons?",
    options: [
      "GIF",
      "JPEG",
      "TIFF",
      "PNG",
    ],
    optionRationales: [
      "GIF supports transparency, but only one color can be fully transparent. That works for simple graphics but not for anti-aliased logos with soft edges.",
      "JPEG does not support transparency at all. It is designed for photographs, where every pixel is part of the image.",
      "TIFF can support transparency but is designed for print, not the web. Its large file sizes make it unsuitable for a site logo.",
      null,
    ],
    correct: 3,
    explanation: "## Invisible Backgrounds\n\nPNG (Portable Network Graphics) supports alpha transparency, meaning parts of the image can be fully or partially see-through. This lets a logo sit on any background color without a visible box. PNG also supports millions of colors and lossless compression, which makes it ideal for logos and illustrations.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-008",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "Which graphics format is designed for professional printing with very large file sizes?",
    options: [
      "GIF",
      "JPEG",
      "PNG",
      "TIFF",
    ],
    optionRationales: [
      "GIF is designed for the web, not print. Its 256-color limit is far below what professional printing requires.",
      "JPEG is often used in printing, but its lossy compression makes it suboptimal for professional work. Printers prefer formats that preserve every detail.",
      "PNG is used for web graphics, not professional printing. Its compression and 8-bit design make it unsuited for press work.",
      null,
    ],
    correct: 3,
    explanation: "## High-End Quality\n\nTIFF (Tagged Image File Format) is the format of choice for professional printing. It supports uncompressed data, keeping every bit of detail, at the cost of very large file sizes. Photographers and book publishers use TIFF because they value quality over file size. It is the highest-fidelity common format.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-009",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "Which format is the standard for illustrations and icons on the web because it scales without losing quality?",
    options: [
      "SVG",
      "JPEG",
      "GIF",
      "TIFF",
    ],
    optionRationales: [
      null,
      "JPEG is a bitmap format, so it pixelates when enlarged. It is designed for photographs, not scalable icons.",
      "GIF is a bitmap format with a 256-color limit. It is used for simple animations but not for illustrations that need to scale.",
      "TIFF is a print-oriented bitmap format with very large files. It does not scale cleanly and is unsuitable for web use.",
    ],
    correct: 0,
    explanation: "## Scalable Graphics\n\nSVG (Scalable Vector Graphics) is the standard vector format for web illustrations. Because it is defined by mathematical formulas rather than pixels, an SVG file stays perfectly sharp at any size — from a favicon to a billboard. SVG files are also small and can be animated interactively.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-010",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "Which common audio format uses lossy compression and plays on almost every device?",
    options: [
      "WAV",
      "AIFF",
      "MP3",
      "WMA",
    ],
    optionRationales: [
      "WAV is an uncompressed format, which makes it very large. It offers excellent quality but is impractical for portable music players.",
      "AIFF is uncompressed, similar to WAV. It preserves sound quality but produces very large files.",
      null,
      "WMA is a Microsoft format that is playable mainly on Windows systems. It is not as universal as the format that plays on every device.",
    ],
    correct: 2,
    explanation: "## The Music Standard\n\nMP3 (MPEG Audio Layer III) uses lossy compression and plays on almost every digital audio device ever made. By removing sounds that the human ear cannot easily perceive, MP3 shrinks a song to a fraction of its original size while sounding very close to the original. It changed how music is distributed.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-011",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is a sound card?",
    options: [
      "A microphone used for voice recording",
      "A circuit board that processes sound",
      "Software used to edit and mix audio",
      "An external speaker attached to the PC",
    ],
    optionRationales: [
      "You are describing an input device, not a sound card. Microphones capture sound and convert it to a signal; a sound card processes the signal inside the computer.",
      null,
      "You are describing a DAW or audio editor, not a sound card. Software runs on the CPU; a sound card is physical hardware.",
      "You are describing an output device, not a sound card. Speakers play sound that the sound card produces; they do not generate the signal themselves.",
    ],
    correct: 1,
    explanation: "## Audio Processing\n\nA sound card is a circuit board that a computer uses to process sound. It takes digital data from the CPU and converts it into an analog electrical signal that speakers can turn into sound. It also converts incoming analog signals from a microphone into digital data the computer can store.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-012",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is synthesized music?",
    options: [
      "Music created digitally using electronic instruments",
      "Music downloaded from a store and played locally",
      "Music recorded live at a concert with microphones",
      "Music compressed for streaming with lossy codecs",
    ],
    optionRationales: [
      null,
      "You are describing digital distribution, not synthesis. Downloads are recordings of existing performances; synthesis creates the sound itself.",
      "You are describing live recording, which captures acoustic performance. Synthesis produces sound from electronics with no acoustic source.",
      "You are describing a distribution format, not the music's origin. Compression is applied after the music exists; synthesis creates the music.",
    ],
    correct: 0,
    explanation: "## Pure Electronic\n\nSynthesized music is created as a digital file from the start using electronic instruments called synthesizers. No acoustic performance is captured; the sound is generated electronically by pressing keys on a synthesizer keyboard, which sends electrical signals that become tones. Synthesizers can mimic acoustic instruments or produce sounds that no physical instrument can make.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-013",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is the difference between voice recognition and speech recognition?",
    options: [
      "Voice identifies who is speaking; speech identifies what",
      "Voice translates languages; speech records audio",
      "Voice works on phones; speech works on desktops",
      "Voice is for dictation; speech is for security",
    ],
    optionRationales: [
      null,
      "You are describing translation and recording, which are unrelated to the distinction. Both translation and recording treat speech as data, but they do not address identity or content transcription.",
      "You are describing a hardware difference that does not exist. Both technologies run on both platforms.",
      "You have the two reversed. Voice recognition is used as a security measure to identify a person; speech recognition converts spoken words into text.",
    ],
    correct: 0,
    explanation: "## Identity vs. Content\n\nVoice recognition software is used as a security measure to allow access only to authorized people the software recognizes by voice — it works like a vocal fingerprint, confirming who is speaking. Speech recognition software translates spoken words into text — it transcribes what is said. One verifies identity; the other captures content.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-014",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What does a text-to-speech app do?",
    options: [
      "Converts written text into spoken words",
      "Converts spoken words into written text",
      "Records a user's voice for playback",
      "Translates speech into other languages",
    ],
    optionRationales: [
      null,
      "You are describing speech recognition, not text-to-speech. These two technologies are mirror images: speech recognition goes from voice to text, text-to-speech goes from text to voice.",
      "You are describing a voice recorder, not text-to-speech. Recording stores the original audio; text-to-speech generates new audio from text.",
      "You are describing translation, not text-to-speech. Translation changes the language; text-to-speech changes the medium (text to audio).",
    ],
    correct: 0,
    explanation: "## Reading for You\n\nA text-to-speech app converts written text into synthesized spoken words. It breaks words into individual sound units called phonemes and strings them together to produce speech. It is used for accessibility — reading a screen aloud for a blind user, or reading a book while driving.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-015",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What are the two parts of a digital video file?",
    options: [
      "A codec that compresses and a container that bundles",
      "A header that names and a footer that stores",
      "A thumbnail image and a text description",
      "A resolution field and a frame rate",
    ],
    optionRationales: [
      null,
      "You are describing file metadata, not the structural parts of a video. Header and footer are bookkeeping fields; the actual video is stored in the codec and container.",
      "You are describing preview information, not the substantive parts. Thumbnails are for the user's benefit; they are not what makes a video playable.",
      "You are describing playback parameters, not structural parts. Resolution and frame rate describe the video but do not constitute it.",
    ],
    correct: 0,
    explanation: "## The Package\n\nDigital video files have two parts. A codec encodes and usually compresses the data for storage, then decompresses it for playback. A container bundles the video, audio, codec, and other parts into a single package. The .mp4 file you see is the container; inside it, the codec does its work.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-016",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is rendering in 3D animation?",
    options: [
      "Drawing the wireframe lines of a 3D object",
      "Applying light and shadow to a 3D image",
      "Exporting the animation to a video file",
      "Adding a soundtrack to an animated scene",
    ],
    optionRationales: [
      "You are describing wireframe modeling, not rendering. Wireframes are the skeleton before lighting; rendering applies light and shadow to make the object look solid.",
      null,
      "You are describing encoding or export, not rendering. Rendering produces the images; encoding packages them into a video file.",
      "You are describing audio integration, not rendering. Audio is added during post-production, often after rendering.",
    ],
    correct: 1,
    explanation: "## The Final Polish\n\nRendering is the process of applying highlights and shadows to a 3D model — a wireframe drawing — to produce a final solid image. Think of a 3D model as a clay statue and rendering as the computer deciding how light bounces off it to make it look real. It is computationally intensive and often the slowest part of 3D production.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-017",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is stop motion animation?",
    options: [
      "Animators move real objects and capture one frame at a time",
      "Animators draw every frame by hand on paper",
      "Animators use 3D software to build wireframe models",
      "Animators record live actors and add digital effects",
    ],
    optionRationales: [
      null,
      "You are describing traditional 2D cell animation, not stop motion. Cell animation draws each frame; stop motion photographs physical objects.",
      "You are describing 3D computer animation, not stop motion. 3D uses wireframes and rendering; stop motion uses physical puppets or objects.",
      "You are describing live-action filmmaking with visual effects, not stop motion. Live action captures real actors in real time; stop motion captures still frames one at a time.",
    ],
    correct: 0,
    explanation: "## Frame by Frame\n\nStop motion animation is a technique in which animators move real-life objects through a sequence of poses and capture the movements one frame at a time. When the frames are played back rapidly, the objects appear to move on their own. Classic films like Wallace and Gromit use this technique.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-018",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is a simulation in the context of digital animation?",
    options: [
      "A simple web animation for entertainment",
      "A static image used in presentations",
      "A type of video compression codec",
      "A sophisticated animation used for training and teaching",
    ],
    optionRationales: [
      "You are describing a simple web animation, not a simulation. Simulations are complex and accurate enough to be used for professional training.",
      "You are describing a still image, not a simulation. Simulations are animated and interactive; static images are not.",
      "You are describing a codec, not a simulation. Codecs compress video files; simulations are applications of animation.",
      null,
    ],
    correct: 3,
    explanation: "## Training Realities\n\nA simulation is a sophisticated computer animation that is useful for training and teaching in many fields, particularly in areas where learning can be dangerous or difficult. Flight simulators are a classic example — pilots train on them because crashing a real plane is not an option. Simulations allow learners to practice high-stakes tasks safely.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-019",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is the difference between on-demand streaming and live streaming?",
    options: [
      "On-demand requires a subscription; live is always free",
      "On-demand uses no data; live uses unlimited data",
      "On-demand is only for audio; live is only for video",
      "On-demand is stored for later; live is sent as it happens",
    ],
    optionRationales: [
      "You are describing a billing difference, not a technical one. Both can be free or paid; the distinction is in how the content is delivered.",
      "You are describing data usage, which is not the distinguishing feature. Both consume data; the timing of the delivery is what differs.",
      "You are describing media types, which is not the distinction. Both can carry audio and video; the delivery method is the difference.",
      null,
    ],
    correct: 3,
    explanation: "## Timing Matters\n\nOn-demand content is stored on the media distributor's server and can be watched or listened to at any time. A television show on Netflix is on-demand. Live streaming is sent out in real time as the event happens, and is available only once. A live sports match is the classic example — you have to watch it when it happens.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-020",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "What is an action camcorder designed for?",
    options: [
      "Studio-quality film production",
      "High-resolution still photography only",
      "Audio recording for podcasts",
      "Compact, waterproof, weather-resistant recording",
    ],
    optionRationales: [
      "You are describing a professional cinema camera, not an action camcorder. Action camcorders trade studio quality for portability and durability.",
      "You are describing a DSLR or mirrorless camera, not an action camcorder. Action camcorders capture video, not primarily stills.",
      "You are describing an audio recorder, not an action camcorder. Action camcorders are for video, not audio.",
      null,
    ],
    correct: 3,
    explanation: "## Rough and Ready\n\nAction camcorders are compact, waterproof, and weather-resistant. They are designed to be mounted on helmets, handlebars, or surfboards to capture action footage in extreme conditions. GoPro is the most famous brand. They sacrifice some image quality for durability and portability.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.4-021",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.4 Graphics and Media Applications",
    q: "Which video resolution category includes 4K and 8K standards?",
    options: [
      "Standard Definition (SD)",
      "High Definition (HD)",
      "Ultra High Definition (UHD)",
      "Low Definition (LD)",
    ],
    optionRationales: [
      "You are describing SD, which includes resolutions like 640x360 and 720x480. 4K and 8K are far higher.",
      "You are describing HD, which includes 1280x720 and 1920x1080. 4K and 8K are much higher than HD.",
      null,
      "Low Definition is not a standard category for video resolutions in this context.",
    ],
    correct: 2,
    explanation: "## Beyond HD\n\nUltra High Definition (UHD) is the highest category of video resolution. The 4K standard provides 3840x2160 pixels, while the 8K standard provides 7680x4320 pixels. This is four to sixteen times the pixel count of Full HD, delivering much greater detail and clarity on large screens.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.6-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.6 Virtual and Augmented Reality and AI",
    q: "What is virtual reality (VR)?",
    options: [
      "Digital content laid over the real world",
      "A two-dimensional game on a screen",
      "A platform for sharing virtual avatars",
      "A simulated 3D world you can explore",
    ],
    optionRationales: [
      "You are describing augmented reality, not virtual reality. AR adds to reality; VR replaces it.",
      "You are describing traditional 2D gaming, not VR. VR requires a headset that fills the user's field of view; 2D games play on flat screens.",
      "You are describing an online social platform, not VR. Social platforms may use VR as an interface, but the platform itself is a service, not the technology.",
      null,
    ],
    correct: 3,
    explanation: "## Immersive Worlds\n\nVirtual reality is a computer-simulated 3D environment that a user can explore and manipulate. Wearing a headset that covers the eyes, the user is immersed in a digital world where they can look around and interact with objects. VR attempts to remove the barrier between the viewer and the media.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.6-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.6 Virtual and Augmented Reality and AI",
    q: "What is augmented reality (AR)?",
    options: [
      "A fully simulated world that replaces the real",
      "Digital content overlaid on physical objects",
      "A text interface for querying a database",
      "A virtual assistant that answers voice commands",
    ],
    optionRationales: [
      "You are describing virtual reality, not augmented reality. VR replaces the world; AR adds to it.",
      null,
      "You are describing a command-line interface, not augmented reality. Text interfaces do not overlay content on the physical world.",
      "You are describing a digital assistant, not AR. Assistants respond to voice; AR superimposes visuals.",
    ],
    correct: 1,
    explanation: "## Mixed Reality\n\nAugmented reality apps overlay information and digital content on top of physical objects or locations. When you point a phone at the street and see directions on the screen, or hold it up in front of furniture to see how it would look in your room, you are using AR. You still see the real world, but with added digital layers.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.6-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.6 Virtual and Augmented Reality and AI",
    q: "What is artificial intelligence (AI)?",
    options: [
      "A programming language for smart apps",
      "A type of autonomous computer virus",
      "A genre of strategic video games",
      "Logic and experience used to mimic intelligence",
    ],
    optionRationales: [
      "You are describing a coding language, not AI. Languages like Python are used to build AI, but the language itself is not intelligent.",
      "You are describing malware, not AI. Malware is a security threat; AI is a computational approach.",
      "You are describing a game genre, not AI. Games use AI to control opponents, but the game itself is a different thing.",
      null,
    ],
    correct: 3,
    explanation: "## Machines That 'Think'\n\nArtificial intelligence is the technological use of logic and prior experience to simulate human intelligence. AI systems solve problems, recognize faces, recommend content, and make decisions by learning from past data. Practical uses include strategic gaming, statistical prediction, self-driving cars, and fingerprint or facial recognition.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.6-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.6 Virtual and Augmented Reality and AI",
    q: "What is machine learning?",
    options: [
      "Manually programming every rule for a computer",
      "A hardware chip that stores training data",
      "A database for querying large datasets",
      "Training machines to learn and improve from data",
    ],
    optionRationales: [
      "You are describing traditional programming, which is the opposite of machine learning. Traditional code follows rules a human wrote; ML lets the machine find the rules itself.",
      "You are describing a storage device, not machine learning. Storage holds data; machine learning is the process of using that data to build a model.",
      "You are describing a database, not machine learning. Databases store and retrieve data; ML learns patterns from it.",
      null,
    ],
    correct: 3,
    explanation: "## Self-Education\n\nMachine learning is a branch of AI that trains machines to learn from data, identify patterns, and make decisions to progressively improve their performance without much human intervention. Instead of coding every rule, the engineer gives the system millions of examples, and the system finds its own rules.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.6-005",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.6 Virtual and Augmented Reality and AI",
    q: "What is natural language processing?",
    options: [
      "Encrypting spoken words for transmission",
      "Compressing audio files for storage",
      "A computer interpreting and digitizing spoken language",
      "Translating programming languages to machine code",
    ],
    optionRationales: [
      "You are describing voice encryption, not NLP. Encryption is a security operation; NLP is about understanding meaning.",
      "You are describing audio compression, not NLP. Compression shrinks files; NLP interprets meaning.",
      null,
      "You are describing a compiler, not NLP. Compilers translate code; NLP interprets human language.",
    ],
    correct: 2,
    explanation: "## Understanding Humans\n\nNatural language processing is a form of data input in which computers interpret and digitize spoken words or commands. Digital assistants like Siri and Alexa use NLP to understand what you mean when you speak, including slang and accents. It is what makes voice interfaces feel natural rather than scripted.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.6-006",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.6 Virtual and Augmented Reality and AI",
    q: "What is the advantage of robotic surgery compared to traditional open surgery?",
    options: [
      "Longer healing due to greater tissue damage",
      "Larger incisions for a wider view of the site",
      "Faster healing and less risk of infection",
      "Precision gained at the cost of much longer time",
    ],
    optionRationales: [
      "You are describing the opposite of the actual advantage. Robotic surgery uses smaller incisions, which reduces healing time rather than lengthening it.",
      "You are describing open surgery, not robotic surgery. Robotic surgery is specifically designed to avoid large incisions.",
      null,
      "You are mixing a benefit with a cost that does not generally hold. Robotic surgery is more precise, and it often takes similar or shorter time than open surgery.",
    ],
    correct: 2,
    explanation: "## Precision Health\n\nRobotic arms can be more precise and flexible than a human hand. Because they can operate through much smaller incisions — sometimes just a keyhole — patients heal faster and have a lower risk of infection than with traditional open surgery. The robot's precision is what makes the smaller incisions possible.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.7-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.7 Personal Interest Applications",
    q: "Which category of personal interest apps focuses on physical health and medical records?",
    options: [
      "Lifestyle apps",
      "Medical apps",
      "Entertainment apps",
      "Convenience apps",
    ],
    optionRationales: [
      "You are describing lifestyle apps, which cover areas like fitness, travel, and hobbies. Medical apps specifically relate to health records and clinical information.",
      null,
      "You are describing entertainment apps, which provide games, media, and amusement. Medical apps are focused on health.",
      "You are describing convenience apps, which help with everyday tasks like weather and maps. Medical apps focus on health records and clinical needs.",
    ],
    correct: 1,
    explanation: "## Health Focused\n\nMedical apps allow users to manage their health records, track symptoms, look up drug information, and communicate with healthcare providers. They are a distinct category from lifestyle apps (which focus on fitness and hobbies) and from entertainment apps (which focus on amusement). Their defining feature is medical relevance.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.7-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.7 Personal Interest Applications",
    q: "Which type of personal interest app helps users manage their bank accounts and make payments?",
    options: [
      "Medical apps",
      "Entertainment apps",
      "Convenience apps",
      "Financial apps",
    ],
    optionRationales: [
      "You are describing medical apps, which focus on health records and clinical information. Financial apps are for money management.",
      "You are describing entertainment apps, which provide games, media, and amusement. Financial apps are for managing money.",
      "You are describing convenience apps, which help with everyday tasks like weather and maps. Financial apps specifically handle banking and payments.",
      null,
    ],
    correct: 3,
    explanation: "## Money Management\n\nFinancial apps allow users to manage bank accounts, pay bills, deposit checks, transfer money, and make payments. Examples include your bank's mobile app, Venmo, and PayPal. They are a subcategory of personal interest apps because they help users with a personal life task.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.7-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.7 Personal Interest Applications",
    q: "Which type of mobile app helps users track workouts and review fitness statistics?",
    options: [
      "Banking and payment apps",
      "Fitness apps",
      "Messaging apps",
      "Travel apps",
    ],
    optionRationales: [
      "You are describing banking and payment apps, which manage money. Fitness apps track physical activity.",
      null,
      "You are describing messaging apps, which handle communication. Fitness apps track workouts and health metrics.",
      "You are describing travel apps, which help with reservations and navigation. Fitness apps are for exercise and health.",
    ],
    correct: 1,
    explanation: "## Fit Tech\n\nFitness apps track workouts, set weight-loss goals, and review stats from fitness tracking devices. They connect to wearables and smartphones to monitor heart rate, steps, and calories. Examples include Fitbit, MyFitnessPal, and Apple Fitness.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.7-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.7 Personal Interest Applications",
    q: "Which type of mobile app helps users make airline, hotel, and restaurant reservations?",
    options: [
      "News apps",
      "Shopping apps",
      "Personal assistant apps",
      "Travel apps",
    ],
    optionRationales: [
      "You are describing news and information apps, which keep users up to date on current affairs.",
      "You are describing shopping apps, which facilitate online retail purchases. Travel apps focus on bookings and trip planning.",
      "You are describing personal assistant apps, which respond to voice commands. Travel apps focus on making reservations.",
      null,
    ],
    correct: 3,
    explanation: "## Trip Planning\n\nTravel apps help users make airline, hotel, and restaurant reservations, read and post reviews, and navigate unfamiliar places. Airbnb, Kayak, Priceline, Yelp, and TripAdvisor are examples. They consolidate the logistics of travel into a single tool.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.7-005",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.7 Personal Interest Applications",
    q: "Which type of mobile app searches the Internet and sets timers in response to voice commands?",
    options: [
      "Fitness apps",
      "Personal assistant apps",
      "Travel apps",
      "Shopping apps",
    ],
    optionRationales: [
      "You are describing fitness apps, which track workouts and health metrics. Personal assistant apps respond to voice commands.",
      null,
      "You are describing travel apps, which handle reservations and navigation. Personal assistant apps handle general tasks by voice.",
      "You are describing shopping apps, which facilitate retail purchases. Personal assistant apps handle tasks like searches and timers.",
    ],
    correct: 1,
    explanation: "## Voice Control\n\nPersonal assistant apps search the Internet, set timers, add appointments to your calendar, and make hands-free calls in response to spoken commands. Siri, Cortana, Google Assistant, and Amazon Alexa are examples. They use natural language processing to understand and execute your requests.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.8-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.8 Security Tools",
    q: "What is a personal firewall?",
    options: [
      "An antivirus that removes malware",
      "A backup utility that copies files",
      "A manager that stores passwords",
      "A barrier that blocks unauthorized intrusions",
    ],
    optionRationales: [
      "You are describing antivirus software, not a firewall. Antivirus scans files for known malware; a firewall blocks network intrusions before they reach the system.",
      "You are describing a backup program, not a firewall. Backups preserve data for recovery; firewalls prevent unauthorized access.",
      "You are describing credential storage, not a firewall. Password managers protect your own secrets; firewalls control incoming and outgoing network traffic.",
      null,
    ],
    correct: 3,
    explanation: "## The Digital Security Guard\n\nA firewall is a protective barrier between a computer or network and others on the Internet. A personal firewall detects and protects a personal computer and its data from unauthorized intrusions. It examines incoming and outgoing traffic and blocks anything that looks suspicious, based on rules it has been given.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.8-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.8 Security Tools",
    q: "What is the primary job of an antivirus program?",
    options: [
      "Blocking emails that contain attachments",
      "Encrypting files so they cannot be read",
      "Identifying and removing viruses in memory and storage",
      "Backing up files regularly for later restore",
    ],
    optionRationales: [
      "You are describing an email attachment policy, not antivirus. Blocking all attachments would also block legitimate files.",
      "You are describing file encryption, not antivirus. Encryption protects data at rest; antivirus removes malware.",
      null,
      "You are describing a backup utility, not antivirus. Backups provide recovery; antivirus prevents infection in the first place.",
    ],
    correct: 2,
    explanation: "## The Doctor\n\nAn antivirus program protects a computer against viruses by identifying and removing them. It scans memory, storage media, and incoming files for known virus signatures. When it finds one, it attempts to remove the infection. If removal fails, it often quarantines the file.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.8-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.8 Security Tools",
    q: "What is spyware?",
    options: [
      "A program that displays unwanted ads",
      "A program that blocks access for payment",
      "A program that secretly collects user data",
      "A program that hides for remote control",
    ],
    optionRationales: [
      "You are describing adware, not spyware. Adware displays ads; spyware secretly collects information.",
      "You are describing ransomware, not spyware. Ransomware holds data hostage; spyware quietly observes.",
      null,
      "You are describing a rootkit, not spyware. Rootkits hide and enable remote control; spyware collects and transmits information.",
    ],
    correct: 2,
    explanation: "## The Secret Spy\n\nSpyware is a type of program placed on a computer or mobile device without the user's knowledge that secretly collects information about the user and communicates it to an outside source. It can enter through installing a new program, clicking a graphic on a web page, or through other malware. It is the digital equivalent of a hidden observer.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.8-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.8 Security Tools",
    q: "What is a quarantine in antivirus software?",
    options: [
      "Permanent deletion of an infected file",
      "A separate area that holds an infected file",
      "A repair process that fixes the file in place",
      "A backup of the file made before removal",
    ],
    optionRationales: [
      "You are describing deletion, not quarantine. Quarantine isolates the file but keeps it recoverable; deletion removes it entirely.",
      null,
      "You are describing file cleaning, not quarantine. Cleaning attempts to remove the infection from a file and keep it usable; quarantine removes the file from use.",
      "You are describing backup, not quarantine. Backups preserve data for recovery; quarantine isolates a threat.",
    ],
    correct: 1,
    explanation: "## The Jail Cell\n\nA quarantine is a separate isolated area of a hard drive that holds an infected file until the infection can be removed. The file cannot run from quarantine, so the malware cannot spread. The user can later decide to clean it, delete it, or restore it if the detection was a false positive.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.8-005",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.8 Security Tools",
    q: "What is a phishing filter?",
    options: [
      "A tool that generates strong passwords",
      "A program that blocks email attachments",
      "A scanner that checks files for viruses",
      "A browser feature that warns about fraudulent sites",
    ],
    optionRationales: [
      "You are describing a password generator, not a phishing filter. Password generators create credentials; phishing filters warn about fraudulent sites.",
      "You are describing an email security policy, not a phishing filter. Phishing filters act on websites, not just email.",
      "You are describing an antivirus scanner, not a phishing filter. Antivirus examines file contents; phishing filters check the site you are visiting.",
      null,
    ],
    correct: 3,
    explanation: "## Fraud Detection\n\nA phishing filter maintains a blacklist of known fraudulent websites — typically fake login pages that mimic banks or services — and warns you before you enter credentials. Many browsers include phishing filters built in, and they are one of the five commonly used Internet filters alongside anti-spam, web filters, pop-up blockers, and ransomware blockers.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.8-006",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.8 Security Tools",
    q: "What is ransomware?",
    options: [
      "A program that displays ads in windows",
      "A program that secretly observes users",
      "A program that locks files until payment",
      "A program that hides for remote control",
    ],
    optionRationales: [
      "You are describing adware, not ransomware. Adware annoys the user with ads; ransomware locks the user out of their files.",
      "You are describing spyware, not ransomware. Spyware collects information quietly; ransomware announces itself and demands money.",
      null,
      "You are describing a rootkit, not ransomware. Rootkits hide and give an attacker access; ransomware announces its presence and withholds access.",
    ],
    correct: 2,
    explanation: "## The Digital Threat\n\nRansomware is a type of attack that affects files and personal data. Some variants encrypt the data and demand payment for the decryption key; others threaten to publish confidential files unless paid. The name captures the model: the attacker holds your data hostage until you pay.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.9-001",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.9 System Management Tools",
    q: "What is a crash in computing?",
    options: [
      "When the power supply is interrupted",
      "When the network connection drops",
      "When the hard disk runs out of space",
      "When a program stops working from an error",
    ],
    optionRationales: [
      "You are describing a power failure, not a crash. A power cut shuts the machine down completely; a crash is when the software stops working while the machine is still powered on.",
      "You are describing a network outage, not a crash. A network drop affects connectivity; a crash affects program execution.",
      "You are describing a disk-full condition, not a crash. Running out of space causes errors, but the program does not necessarily stop working.",
      null,
    ],
    correct: 3,
    explanation: "## The Freeze\n\nA crash occurs when a program or app stops functioning correctly. It can be caused by a hardware fault, a software bug, a virus, or invalid data or commands. The application may freeze, disappear, or take the whole operating system with it. Troubleshooting is the process of finding and fixing the cause.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.9-002",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.9 System Management Tools",
    q: "What is troubleshooting?",
    options: [
      "Restarting the computer when it slows",
      "Making backups so nothing is lost",
      "Reinstalling the OS after any error",
      "Steps taken to identify and solve a problem",
    ],
    optionRationales: [
      "You are describing a common first response, not troubleshooting. Restarting may temporarily resolve symptoms without identifying the cause.",
      "You are describing a preventive practice, not troubleshooting. Backups prepare for loss; troubleshooting addresses the cause.",
      "You are describing a drastic recovery measure, not troubleshooting. Reinstalling wipes the system; troubleshooting identifies the specific problem.",
      null,
    ],
    correct: 3,
    explanation: "## Finding the Cure\n\nTroubleshooting refers to the systematic steps you take to identify and solve a problem, such as a crash. It is like detective work: you read error messages, try different solutions, and narrow down the cause until you find the fix. It is a process, not a single action.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.9-003",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.9 System Management Tools",
    q: "What does a file manager do?",
    options: [
      "Removes temporary files to free space",
      "Encrypts files against unauthorized reading",
      "Displays, organizes, and moves files",
      "Backs up files to a remote cloud server",
    ],
    optionRationales: [
      "You are describing disk cleanup, not a file manager. Disk cleanup removes unnecessary files automatically; a file manager lets the user organize files by hand.",
      "You are describing file encryption, not a file manager. Encryption protects content; a file manager organizes and moves files.",
      null,
      "You are describing a backup service, not a file manager. Backups copy files off-site; a file manager handles them locally.",
    ],
    correct: 2,
    explanation: "## The Digital Cabinet\n\nA file manager performs functions such as displaying a list of files on a storage medium; organizing files in folders; and copying, renaming, deleting, moving, and sorting files. On Windows, the file manager is called File Explorer; on macOS, it is Finder. It is your window into the computer's storage.",
    status: "approved"
  },

  {
    id: "CS110-T2-U8-8.9-004",
    mainTopic: "Unit 8: Programs and Apps",
    topic: "8.9 System Management Tools",
    q: "What is the purpose of a search tool?",
    options: [
      "Performing maintenance tasks on the OS",
      "Compressing files for storage or transfer",
      "Scanning files for malicious code",
      "Locating files, contacts, and other stored items",
    ],
    optionRationales: [
      "You are describing a maintenance utility, not a search tool. Maintenance tools fix problems; search tools find items.",
      "You are describing file compression, not a search tool. Compression reduces size; search locates items.",
      "You are describing antivirus software, not a search tool. Antivirus examines content for threats; search locates items by name or metadata.",
      null,
    ],
    correct: 3,
    explanation: "## The Finder\n\nA search tool allows you to locate a file, contact, calendar event, app, or any other item stored on your computer or mobile device. Modern search tools index the contents of files and messages, not just their names. This is why you can find a document by typing a phrase that appears inside it.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 9 · DIGITAL SECURITY THREATS  (57 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T2-U9-9.1-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "What is the primary role of an operating system?",
    options: [
      "Coordinating all hardware and software",
      "Displaying web pages on the screen",
      "Running entertainment apps and games",
      "Storing files on the internal drive",
    ],
    optionRationales: [
      null,
      "You are describing a browser, not an operating system. The browser is one app that runs on top of the OS; the OS is the layer underneath that manages the hardware.",
      "You are describing application software. Games and music players are programs the user runs; the OS manages the resources those programs use.",
      "You are describing storage, not the OS. Files are stored on disks; the OS decides where to write them and how to retrieve them.",
    ],
    correct: 0,
    explanation: "## The Manager\n\nAn operating system is a set of programs that coordinates all the activities among computer or mobile device hardware. It does not do the laundry or cook the food — the apps do that. The OS makes sure the rooms are assigned, the electricity is running, and every program gets the resources it needs.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "What is a Graphical User Interface (GUI)?",
    options: [
      "A prompt where users type commands as text",
      "The ways users interact with a device",
      "A protocol for sharing files on a network",
      "A chip that renders graphics on a display",
    ],
    optionRationales: [
      "You are describing a command-line interface, not a GUI. Command lines require users to type instructions; a GUI lets users point, tap, and click.",
      null,
      "You are describing a network protocol, not a GUI. Protocols govern how data moves between machines; a GUI governs how a human interacts with one machine.",
      "You are describing a graphics card or GPU, not a GUI. Hardware renders the visuals; the GUI is the design of the icons, menus, and buttons the user sees.",
    ],
    correct: 1,
    explanation: "## Visual Interaction\n\nA graphical user interface is a collective term for all the ways you interact with the device. It controls how you interact with menus, programs and apps, and visual images such as icons, by touching, pointing, tapping, or clicking buttons and other objects to issue commands. It is what makes modern computers usable without code.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-003",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "In a GUI, what is an icon?",
    options: [
      "A text command typed into a search bar",
      "A hidden setting users rarely see",
      "A small picture representing a program or file",
      "An error message displayed on screen",
    ],
    optionRationales: [
      "You are describing a search query, not an icon. Search queries are typed; icons are clicked.",
      "You are describing a system setting, not an icon. Settings are configuration options; icons are visual representations.",
      null,
      "You are describing an error message, not an icon. Error messages convey problems; icons represent objects.",
    ],
    correct: 2,
    explanation: "## Visual Shortcuts\n\nAn icon is a small picture that represents a program, file, or hardware device. Instead of reading a list of filenames, you see a small 'W' and instantly know it is a Word document. Clicking the icon tells the OS to run the specific resource it represents.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-004",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "In a GUI, what is a button?",
    options: [
      "A file storing user settings for an app",
      "A small picture representing a folder",
      "A list of options shown when clicked",
      "A graphic clicked to run a command",
    ],
    optionRationales: [
      "You are describing a configuration file, not a button. Config files are data; buttons are interactive controls.",
      "You are describing an icon, not a button. Icons represent things; buttons perform tasks.",
      "You are describing a shortcut or context menu, not a button. Menus list choices; buttons trigger a single action.",
      null,
    ],
    correct: 3,
    explanation: "## Triggering Actions\n\nA button is a graphic that you click to execute commands you need to work with an app, such as on a toolbar, taskbar, or the ribbon. Unlike icons, which represent things, buttons usually represent tasks. Clicking a button gives the OS a direct order to do something right now.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-005",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "In an operating system, what is a menu?",
    options: [
      "A list of related items and commands",
      "A single graphic filling the screen",
      "A hardware chip inside the motherboard",
      "A protected area of the OS for admins",
    ],
    optionRationales: [
      null,
      "You are describing a full-screen window, not a menu. Full-screen windows display content; menus list options.",
      "You are describing a hardware component, not a menu. Menus are software; hardware components are physical.",
      "You are describing a secured area, not a menu. Secured areas restrict access; menus organize choices.",
    ],
    correct: 0,
    explanation: "## Organized Options\n\nA menu is a list of related items, including folders, applications, and commands. Menus prevent the screen from getting cluttered: instead of having fifty buttons on screen, the OS hides them in a menu. You click the header — like 'File' — and a list drops down with all the related options.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-006",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "What is a shortcut menu (or context menu)?",
    options: [
      "A list of commands shown when right-clicking an object",
      "A menu opened only with a keyboard combination",
      "A list of settings shown on the desktop background",
      "A submenu reached by hovering over a main menu",
    ],
    optionRationales: [
      null,
      "You are describing a keyboard-accessible menu, not a shortcut menu. Both can be opened without a mouse, but the shortcut menu is specifically activated by right-clicking.",
      "You are describing desktop settings, not a shortcut menu. Desktop settings apply to the workspace; a shortcut menu applies to one specific object.",
      "You are describing a submenu, not a shortcut menu. Submenus live inside a parent menu; shortcut menus appear next to the object they act on.",
    ],
    correct: 0,
    explanation: "## Context is Key\n\nA shortcut menu is a list of frequently used commands that relate to an object. These are called 'context menus' because they change depending on what you clicked. If you right-click a photo, you see 'Edit Image'; if you right-click a folder, you see 'Open Folder.' It gives you the most relevant commands for that specific object.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-007",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "What is the purpose of a dialog box?",
    options: [
      "To display a list of every file on the device",
      "To gather the input the OS needs to finish a task",
      "To permanently delete selected files",
      "To replace the main menu after an error",
    ],
    optionRationales: [
      "You are describing a file manager, not a dialog box. File managers browse storage; dialog boxes collect a specific piece of information.",
      null,
      "You are describing file deletion, not a dialog box. Deletion is one possible action; a dialog box is the window that may confirm or configure it.",
      "You are describing an error state, not a dialog box. Dialog boxes often appear during normal operation; they are not a replacement for menus.",
    ],
    correct: 1,
    explanation: "## The Conversation\n\nA dialog box is a box with controls that lets you tell the operating system how you want to complete a command. When the computer says 'I am ready to print, but which pages? How many copies?', the dialog box is the window where you provide those final details. It is the OS asking for input before it acts.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-008",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "Which dialog box control presents round buttons for choosing one exclusive option?",
    options: [
      "Option buttons (radio buttons)",
      "Check boxes",
      "List boxes",
      "Text boxes",
    ],
    optionRationales: [
      null,
      "You are describing check boxes, which are square and allow multiple independent choices. Option buttons are round and mutually exclusive.",
      "You are describing list boxes, which show a scrollable list of options. Option buttons are individual round controls.",
      "You are describing text boxes, which accept typed input. Option buttons are predefined choices, not free-form input.",
    ],
    correct: 0,
    explanation: "## Round and Exclusive\n\nOption buttons, also called radio buttons, are round controls that present one choice among several mutually exclusive options. They are named after old car radios: when you pressed one preset button, the others popped out. You can only pick one.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-009",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "Which dialog box control presents a square box for a yes/no choice?",
    options: [
      "Option buttons (radio buttons)",
      "Check boxes",
      "List boxes",
      "Text boxes",
    ],
    optionRationales: [
      "You are describing option buttons, which are round and exclusive. Check boxes are square and allow multiple independent choices.",
      null,
      "You are describing list boxes, which show a scrollable list of options. Check boxes are individual square controls.",
      "You are describing text boxes, which accept typed input. Check boxes are toggled on or off.",
    ],
    correct: 1,
    explanation: "## Square and Independent\n\nA check box is a square control that presents a yes/no choice, displaying a check mark or an X when selected. Unlike option buttons, check boxes are independent — you can select as many as you want at the same time. They are used for settings you can turn on or off individually.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.1-010",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.1 Operating Systems",
    q: "Which dialog box control shows a list of options when you click an arrow?",
    options: [
      "Option buttons (radio buttons)",
      "Check boxes",
      "List boxes",
      "Text boxes",
    ],
    optionRationales: [
      "You are describing option buttons, which are round and exclusive. List boxes are scrollable lists of options.",
      "You are describing check boxes, which are square and independent. List boxes display multiple options in a list format.",
      null,
      "You are describing text boxes, which accept typed input. List boxes present predefined options in a drop-down or scrollable list.",
    ],
    correct: 2,
    explanation: "## The Drop-Down\n\nA list box displays a list of options that appears when you click an arrow in a dialog box. Some list boxes allow you to make multiple selections; others allow only one. It is a space-saving way to present many choices without cluttering the window.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "Where does the operating system temporarily store the apps and documents that are currently open?",
    options: [
      "On the hard disk drive as backup",
      "In the cloud for remote sync",
      "In RAM for active tasks",
      "In the ROM chip of the board",
    ],
    optionRationales: [
      "You are describing backup, not active storage. Backups are copies for recovery; active data lives in RAM.",
      "You are describing cloud sync, not local memory. Sync moves copies to remote servers; RAM holds the live working state.",
      null,
      "You are describing ROM, not RAM. ROM holds permanent start-up firmware; RAM holds the changing state of running apps.",
    ],
    correct: 2,
    explanation: "## The Active Desk\n\nEverything you see on your screen right now is sitting in RAM. RAM is ultra-fast but volatile, meaning it needs power to remember. If the power goes out, everything in RAM is wiped clean, which is why saving to a disk is so important. RAM is the desk where the current work sits; the disk is the filing cabinet.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "What is virtual memory?",
    options: [
      "Disk space the OS uses as extra RAM",
      "A fast cache inside the processor",
      "A cloud service replacing the local drive",
      "A USB drive for external storage",
    ],
    optionRationales: [
      null,
      "You are describing CPU cache, not virtual memory. Cache is small, fast memory inside the chip that holds recently used instructions; virtual memory is disk space used as overflow RAM.",
      "You are describing cloud storage, not virtual memory. Cloud storage lives on remote servers; virtual memory is on the same machine.",
      "You are describing a USB drive, not virtual memory. External drives are removable; virtual memory is an internal OS-managed area.",
    ],
    correct: 0,
    explanation: "## The Overflow Trick\n\nWhen your RAM fills up, the OS does not crash. Instead, it borrows some empty space from the hard disk to use as extra memory. This is virtual memory. It is much slower than real RAM, so heavy use of it makes the system feel sluggish, but it keeps the computer running when physical memory runs out.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-003",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "What is paging in an operating system?",
    options: [
      "Printing a document one page at a time",
      "Swapping data between RAM and virtual memory",
      "Sorting files alphabetically in a list",
      "Dividing a hard drive into partitions",
    ],
    optionRationales: [
      "You are describing print spooling, not paging. Print spooling queues pages for the printer; paging swaps memory.",
      null,
      "You are describing sorting, not paging. Sorting orders items in a list; paging moves memory between RAM and disk.",
      "You are describing partitioning, not paging. Partitioning divides a physical disk into logical sections; paging swaps memory to disk.",
    ],
    correct: 1,
    explanation: "## Moving Data\n\nWhen the OS moves a page of data from the fast RAM to the slower hard disk to make room for a new app, the process is called paging. If your computer is doing this too much, it will feel very laggy — this is often called thrashing. Paging is a trade-off: it keeps the system running, but at a cost in speed.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-004",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "A printer receives data much more slowly than the CPU produces it. Where does the operating system hold the waiting data?",
    options: [
      "In a buffer, memory for data bound for a device",
      "In a cache, high-speed memory near the CPU",
      "In virtual memory on the disk when RAM is full",
      "In a register inside the processor core",
    ],
    optionRationales: [
      null,
      "You are describing cache. Cache also holds data temporarily, but its purpose is to reduce CPU access time, not to absorb a speed mismatch between the CPU and a slow device.",
      "You are describing virtual memory. Virtual memory also holds data temporarily, but its trigger is that RAM is full, not that a device is slow.",
      "You are describing a register. Registers also hold data temporarily, but they are part of the CPU itself and hold values for arithmetic and instruction execution.",
    ],
    correct: 0,
    explanation: "## The Waiting Room\n\nA buffer is an area of memory that stores data and information waiting to be sent to an input or output device. The CPU is much faster than a printer, so it dumps the whole document into a buffer and goes back to work while the printer slowly drains the buffer one page at a time. This decouples the two rates.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-005",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "What is a single-tasking operating system?",
    options: [
      "A system that runs one program at a time",
      "A system designed for a single user",
      "A system that uses only one processor core",
      "A system that uses one password for all",
    ],
    optionRationales: [
      null,
      "You are describing a single-user system, not a single-tasking one. Single-user describes how many people can use the machine; single-tasking describes how many programs can run at once.",
      "You are describing single-core hardware, not a single-tasking OS. The number of cores affects performance; the number of tasks affects whether the OS can run programs simultaneously.",
      "You are describing shared credentials, not a single-tasking OS. Credentials are about security; tasks are about running programs.",
    ],
    correct: 0,
    explanation: "## One at a Time\n\nA single-tasking operating system allows only one program or app to run at a time. Before multitasking was common, if you wanted to switch tasks, you had to close one program before opening another. Modern OSs are almost all multitasking; single-tasking is now mostly historical.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-006",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "What defines a multitasking operating system?",
    options: [
      "It runs only one program to save resources",
      "It needs two or more physical processors",
      "It allows multiple programs in memory at once",
      "It works only on mobile touch devices",
    ],
    optionRationales: [
      "You are describing a single-tasking OS, which is the opposite of multitasking. The whole point of multitasking is to keep several programs active.",
      "You are describing a hardware requirement that does not exist. Multitasking works on single-core processors by rapid switching; multiple cores make it faster but are not required.",
      null,
      "You are describing mobile-specific features. Multitasking runs on desktops, laptops, servers, and phones. Touch screens are unrelated to scheduling.",
    ],
    correct: 2,
    explanation: "## Juggling Jobs\n\nAlmost all modern operating systems are multitasking. This lets you listen to music on Spotify while typing a paper in Word and having twenty tabs open in Chrome. The OS rapidly switches between apps so quickly that it feels like they are all running at the same time. Under the surface, the processor handles one instruction at a time per core.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-007",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "In a multitasking environment, what is the foreground program?",
    options: [
      "A program using the least memory",
      "A program updating itself quietly",
      "A program that has frozen silently",
      "The active program on top of the screen",
    ],
    optionRationales: [
      "You are describing a memory-efficient program, not the foreground. Memory use is unrelated to which program has focus.",
      "You are describing a background updater, not the foreground. Background programs are by definition not in front.",
      "You are describing a hung or frozen program, not the foreground. A frozen program may still be in front, but the term foreground describes focus, not responsiveness.",
      null,
    ],
    correct: 3,
    explanation: "## The Active Window\n\nThe foreground program is the one that has your attention. It is the window on top of all the others, and it receives your typing and mouse clicks. Everything else is running in the background, partially or completely hidden behind the foreground window.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-008",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "What is a multiuser operating system?",
    options: [
      "One that lets two or more users run programs at once",
      "One installed on many computers with one licence",
      "One that needs multiple monitors per user",
      "One that stores files for many people",
    ],
    optionRationales: [
      null,
      "You are describing a licence model, not a multiuser OS. Licences govern installation; multiuser is about runtime.",
      "You are describing a hardware configuration, not a multiuser OS. Monitors are output devices; multiuser is about concurrent sessions.",
      "You are describing shared storage, not a multiuser OS. Storing files for many people does not require multiuser capability.",
    ],
    correct: 0,
    explanation: "## Shared Compute\n\nA multiuser operating system enables two or more users to run programs simultaneously. Server operating systems are typically multiuser because they need to support many people at once — each logged into their own session, each running their own programs. This is why server OSs are built to be more powerful than desktop OSs.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-009",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "Which of the following is NOT a form in which instructions for processing data arrive?",
    options: [
      "A program or app the user launched",
      "A command typed at a prompt",
      "A user response to a system message",
      "A cached file saved from a prior session",
    ],
    optionRationales: [
      "Programs and apps are one of the three standard input types for processing instructions. They provide the sequence of steps the CPU executes.",
      "Commands typed at a prompt are a standard input type. They tell the OS exactly what to do without a GUI.",
      "User responses are the third standard input type. They occur when the system prompts the user and waits for a reply.",
      null,
    ],
    correct: 3,
    explanation: "## Input Trio\n\nInstructions used for processing data can be in the form of a program or app, commands, or user responses. Cached files are stored data, not instructions. The cache holds results from previous sessions; it does not tell the CPU what to do. Storage and instruction are different categories.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.2-010",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.2 How an Operating System Works",
    q: "What is spooling in the context of an operating system?",
    options: [
      "Placing data into a buffer for a device",
      "Encrypting files for secure storage",
      "Deleting temporary files to free space",
      "Moving a file between two folders",
    ],
    optionRationales: [
      null,
      "You are describing encryption, not spooling. Encryption protects data; spooling queues data for a device.",
      "You are describing disk cleanup, not spooling. Cleanup removes files; spooling holds data temporarily.",
      "You are describing file management, not spooling. Moving files changes their location; spooling holds them in a queue.",
    ],
    correct: 0,
    explanation: "## The Print Queue\n\nSpooling is the process of placing data into a buffer. When you print a document, the OS spools the print job into a buffer so the CPU can move on to other tasks while the printer works through the queue. The term comes from the acronym SPOOL, which stands for Simultaneous Peripheral Operations On-Line.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "What are the three basic categories of operating systems?",
    options: [
      "Windows, macOS, and Linux",
      "Desktop, server, and mobile",
      "Free, paid, and trial",
      "Single-core, dual-core, multi-core",
    ],
    optionRationales: [
      "You are listing example products, not categories. Windows, macOS, and Linux are all desktop or server OSs.",
      null,
      "You are describing pricing models, not OS categories. An OS can be free or paid and still be desktop, server, or mobile.",
      "You are describing processor architectures, not OS categories. Core count is hardware; category is the OS's intended device.",
    ],
    correct: 1,
    explanation: "## Form Follows Function\n\nOperating systems are grouped by the device they serve. Desktop OSs are for PCs and laptops; server OSs are for network hosting; mobile OSs are for phones and tablets. These three categories cover the range of environments an OS might run in. Windows, macOS, and Linux are all desktop OSs — not categories themselves.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "Which of the following is an example of a desktop operating system?",
    options: [
      "Android",
      "iOS",
      "Windows, macOS, or Linux",
      "Windows Server",
    ],
    optionRationales: [
      "Android is a mobile OS, not a desktop OS. It is designed for touchscreens and runs on phones and tablets.",
      "iOS is a mobile OS, not a desktop OS. It runs exclusively on Apple's mobile devices.",
      null,
      "Windows Server is a server OS, not a desktop OS. It is designed for centralized network hosting.",
    ],
    correct: 2,
    explanation: "## Stand-Alone Systems\n\nDesktop operating systems are also called stand-alone or client operating systems. They are built to be used by a single person at a time on a laptop or desktop computer. Examples include Windows, macOS, UNIX, Linux, and Chrome OS. They include everything a user needs to manage personal files and apps.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-003",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "What is the defining characteristic of a server operating system?",
    options: [
      "It runs on mobile devices with small screens",
      "It works with a single user at a time",
      "It requires constant reboots to stay stable",
      "It supports many users on a network",
    ],
    optionRationales: [
      "You are describing a mobile OS, not a server OS. Mobile OSs are for phones; server OSs run in data centres.",
      "You are describing a single-user system, which is the opposite of a server OS. Servers exist to support many simultaneous users.",
      "You are describing an unstable system, not a server OS. Servers are specifically designed for high uptime and reliability.",
      null,
    ],
    correct: 3,
    explanation: "## The Service Hub\n\nA server operating system is a multiuser OS because it controls a single, centralized server computer that supports many users on networked computers. It manages logins, hosts shared files, and runs services. A server OS would not need power-saving features because it stays plugged in and running around the clock.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-004",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "What is UNIX?",
    options: [
      "A mobile-only OS released by Google",
      "An OS from the 1970s that underlies many systems",
      "A closed-source product from Microsoft",
      "A web browser used to access server files",
    ],
    optionRationales: [
      "You are describing Android, not UNIX. Android came from Google decades later.",
      null,
      "You are describing Windows, not UNIX. Windows is Microsoft's proprietary OS line; UNIX was developed at Bell Labs by AT&T.",
      "You are describing a web browser, not an OS. Browsers run on top of an OS; UNIX is the layer underneath.",
    ],
    correct: 1,
    explanation: "## The Ancestor\n\nUNIX is a multitasking operating system developed in the early 1970s by scientists at Bell Laboratories. It was built for power and stability, and it became the basis for many modern systems. Today macOS and Linux are both derived from or inspired by UNIX. Because it is so reliable, it is still used on many of the giant servers that run the internet.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-005",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "What defines Linux as an operating system?",
    options: [
      "It is closed-source and owned by one company",
      "It runs only on Apple hardware",
      "It is open source and freely modifiable",
      "It is a mobile OS released by Google",
    ],
    optionRationales: [
      "You are describing closed-source software, which is the opposite of Linux. Linux is open source; anyone can inspect, modify, and redistribute the code.",
      "You are describing macOS, not Linux. macOS is Apple's OS and runs on Apple hardware; Linux runs on almost any hardware.",
      null,
      "You are describing Android, which is based on Linux but is a separate product. Android is a mobile OS; Linux itself runs on desktops, servers, and embedded devices.",
    ],
    correct: 2,
    explanation: "## Freedom in Code\n\nLinux was introduced in 1991 as a popular multitasking UNIX-based operating system. It is distributed under a General Public License, which allows users to copy the OS for their own use, give it to others, or sell it. It was not built by one company but by thousands of contributors. It runs on everything from supercomputers to smart refrigerators.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-006",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "What is the primary focus of Chrome OS?",
    options: [
      "Running legacy Windows apps at speed",
      "Editing high-resolution video locally",
      "Hosting databases in data centres",
      "Working with web apps and cloud files",
    ],
    optionRationales: [
      "You are describing Windows compatibility, which Chrome OS does not offer natively. Chrome OS is built around web apps, not legacy Windows programs.",
      "You are describing a video editing workstation, not Chrome OS. Chrome OS is lightweight and cloud-centric; heavy local editing is not its purpose.",
      "You are describing a server OS, not Chrome OS. Chrome OS is for personal laptops called Chromebooks, not data centre machines.",
      null,
    ],
    correct: 3,
    explanation: "## Cloud First\n\nChrome OS, introduced by Google, is a Linux-based operating system designed to work primarily with web apps. It assumes you will be doing almost everything in a browser. Most of your files are not on the laptop — they are saved in the cloud on Google Drive. Apps come from the Chrome Web Store, and the whole system is lightweight enough for inexpensive hardware.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-007",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "Which operating system is developed by Google and based on Linux?",
    options: [
      "Android",
      "iOS",
      "Windows Mobile",
      "macOS",
    ],
    optionRationales: [
      null,
      "iOS is Apple's mobile OS, derived from macOS. It is not based on Linux and is not developed by Google.",
      "Windows Mobile was Microsoft's mobile OS line, now discontinued. It is not based on Linux and is not developed by Google.",
      "macOS is Apple's desktop OS, which is based on UNIX, not Linux. It is not developed by Google.",
    ],
    correct: 0,
    explanation: "## Open Mobile\n\nAndroid is a mobile operating system introduced by Google and designed to run on many types of smartphones and tablets. Because it is based on Linux and is free for manufacturers to use, it is found on thousands of device models from companies like Samsung, Huawei, and Sony. Google develops it, but anyone can install it.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-008",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "What is the key difference between Android and iOS regarding availability?",
    options: [
      "Android runs only on Samsung; iOS on all phones",
      "iOS is open source; Android is proprietary",
      "Android supports many brands; iOS runs only on Apple",
      "Android has no touch; iOS is touchscreen only",
    ],
    optionRationales: [
      "You are describing a false constraint on Android. Android runs on many brands — Samsung, Huawei, Sony, and more. iOS also runs only on Apple hardware.",
      "You have reversed the two. Android is open source (based on Linux); iOS is proprietary and closed.",
      null,
      "You are describing a hardware capability that both systems have. Both Android and iOS are designed for touchscreens.",
    ],
    correct: 2,
    explanation: "## Ecosystem Lock\n\niOS is proprietary. Apple builds the hardware and the software together and does not let anyone else run iOS on their devices. Android is the opposite — Google allows almost any manufacturer to install it on their phones. The result is that iPhones are the only option for iOS, but Android phones come in dozens of brands and price ranges.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.3-009",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.3 Types of Operating Systems",
    q: "What is a multipurpose operating system?",
    options: [
      "One that functions as both desktop and server",
      "One that runs only on mobile devices",
      "One that supports only one user at a time",
      "One that works only in the cloud",
    ],
    optionRationales: [
      null,
      "You are describing a mobile OS, not a multipurpose OS. Mobile OSs are one category; multipurpose OSs span multiple categories.",
      "You are describing a single-user OS, which is a limitation rather than a capability. Multipurpose OSs support the needs of servers, which are typically multiuser.",
      "You are describing cloud-only operation, which is not what multipurpose means. Multipurpose OSs run locally and remotely.",
    ],
    correct: 0,
    explanation: "## Bridging Categories\n\nOperating systems such as UNIX and Linux that function as both desktop and server operating systems are sometimes called multipurpose operating systems. They can run on a user's laptop and on a data-centre machine without modification. This flexibility is why UNIX-lineage systems have remained relevant for over fifty years.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.4-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.4 Licensing an Operating System",
    q: "What is the difference between an OS update and an OS upgrade?",
    options: [
      "An update fixes small issues; an upgrade is a major new version",
      "An update costs money; an upgrade is free",
      "An update replaces the OS; an upgrade patches bugs",
      "An update needs a new licence; an upgrade reuses it",
    ],
    optionRationales: [
      null,
      "You have the pricing backwards. Updates are generally free bug fixes and security patches; upgrades often require a fee because they add substantial new features.",
      "You have the scope reversed. An update is a small, targeted fix; an upgrade is a major new version.",
      "You are describing a licence difference that does not exist. Both updates and upgrades usually use the same licence; the difference is in scope, not in legal terms.",
    ],
    correct: 0,
    explanation: "## The Next Level\n\nAn OS update is a minor release that fixes problems, patches security holes, or adds small features. An OS upgrade is a major new version — for example, moving from Windows 10 to Windows 11. Upgrades typically require a fee because the vendor spent years building new functionality; updates are usually free because they are maintenance.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.4-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.4 Licensing an Operating System",
    q: "What is the benefit of enabling automatic updates on an operating system?",
    options: [
      "The OS runs faster because updates run in background",
      "The user gets the latest security fixes automatically",
      "Updates reduce the storage space used by the OS",
      "The user is exempt from future licence fees",
    ],
    optionRationales: [
      "You are describing a performance benefit that is not guaranteed. Updates sometimes slow down older hardware or briefly use CPU during installation.",
      null,
      "You are describing a storage reduction, which updates do not usually deliver. Updates may add features or files, increasing storage use slightly.",
      "You are describing a licence benefit that does not exist. Automatic updates do not affect licence terms.",
    ],
    correct: 1,
    explanation: "## Continuous Protection\n\nAn operating system's automatic update feature can be configured to alert users when an update is available, or to download and install the update without user action. The benefit is that security patches reach the device quickly, closing vulnerabilities before attackers can exploit them. Users get the latest fixes without having to remember to check.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What is a file, in the context of an operating system?",
    options: [
      "A single program running in the foreground",
      "A physical drive attached to the computer",
      "A special folder for organizing images",
      "A collection of information on a computer",
    ],
    optionRationales: [
      "You are describing a running process, not a file. Processes execute; files are stored.",
      "You are describing a physical drive, not a file. Drives hold files; files live on drives.",
      "You are describing one special folder type, not the general concept. Image folders are one way to organize files, not a definition of files themselves.",
      null,
    ],
    correct: 3,
    explanation: "## The Unit of Content\n\nA file is a collection of information stored on your computer, such as a text document, spreadsheet, photo, or song. Every document you create, every image you save, every video you download is a file. Files are the fundamental units of storage — everything else on the drive is either a file or a container for files.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What does the file format of a file determine?",
    options: [
      "The physical size of the drive it lives on",
      "The programs that can open it",
      "The colour of its icon in the manager",
      "The password needed to decrypt it",
    ],
    optionRationales: [
      "You are describing storage capacity, not format. The drive determines how much can be stored; the format determines how the content is organized.",
      null,
      "You are describing a display setting, not format. Icon appearance is cosmetic; format determines compatibility.",
      "You are describing encryption, not format. Encryption is a security layer; format is how data is encoded.",
    ],
    correct: 1,
    explanation: "## Compatibility Rule\n\nThe file format determines the type or types of programs and apps that you can use to open and display or work with a file. A .docx file needs a word processor; a .jpg needs an image viewer. This is why the format matters: an incompatible program cannot read the content correctly, even if it opens the file.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-003",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What is a file extension?",
    options: [
      "A backup copy of a file in another folder",
      "A compressed version of a file for email",
      "A tag the OS adds for sorting files",
      "A code at the end of a filename showing its type",
    ],
    optionRationales: [
      "You are describing a backup, not an extension. Backups are copies; extensions are part of the original filename.",
      "You are describing compression, not an extension. Compression reduces size; extensions identify type.",
      "You are describing metadata, not an extension. Metadata is data about the file; an extension is part of its name.",
      null,
    ],
    correct: 3,
    explanation: "## Identifying Data\n\nA file extension is a three- or four-letter sequence, preceded by a period, at the end of a file name. It identifies the file as a particular type of document: .docx is a Microsoft Word document, .jpg is a graphic file, .xlsx is a spreadsheet. The extension tells the OS which program to use to open the file.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-004",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "Which file extension is used for a standard Microsoft Word document?",
    options: [
      ".xlsx",
      ".pptx",
      ".docx",
      ".txt",
    ],
    optionRationales: [
      ".xlsx is the extension for Microsoft Excel spreadsheets, not Word documents.",
      ".pptx is the extension for Microsoft PowerPoint presentations, not Word documents.",
      null,
      ".txt is the extension for plain text files, which contain no formatting. Word documents use a different extension that preserves fonts, styles, and images.",
    ],
    correct: 2,
    explanation: "## Office Formats\n\nModern Microsoft Word files use the .docx extension. The 'x' at the end stands for XML, a modern way of packing document data so it is smaller and safer from corruption than older formats. Excel files use .xlsx, and PowerPoint files use .pptx — the same pattern with different middle letters.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-005",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What is metadata in the context of a computer file?",
    options: [
      "The main content the user typed or saved",
      "The password needed to open the file",
      "A backup copy stored by the system",
      "Information about the file, like date and author",
    ],
    optionRationales: [
      "You are describing the file's content, not its metadata. Content is what the user created; metadata describes the file.",
      "You are describing encryption credentials, not metadata. Credentials protect the file; metadata describes it.",
      "You are describing a backup, not metadata. Backups are duplicate files; metadata describes the original.",
      null,
    ],
    correct: 3,
    explanation: "## Data About Data\n\nEven an empty file has metadata. The OS tracks when you made the file, who owns it, and when you last looked at it. This is how you can sort your Downloads folder by date — you are sorting by metadata. Properties like size, type, and location are also metadata, stored automatically by the system.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-006",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What is the name of the file manager application in Windows?",
    options: [
      "Finder",
      "File Explorer",
      "Windows Browser",
      "Control Panel",
    ],
    optionRationales: [
      "Finder is the file manager on macOS, not Windows. Both do the same job, but only one is Apple's.",
      null,
      "There is no such application as Windows Browser. Windows uses Microsoft Edge for web browsing, but that is not a file manager.",
      "Control Panel is a settings tool, not a file manager. It changes system configuration rather than organizing files.",
    ],
    correct: 1,
    explanation: "## Windows Navigation\n\nFile Explorer is the app you use every day to look at your Documents or Pictures folders. In the very old days it was called Windows Explorer, but modern versions use the name File Explorer. It shows your drives, folders, and files, and lets you open, copy, move, and delete them.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-007",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What is a library in the context of file management?",
    options: [
      "A physical building that stores backups",
      "A special folder that gathers files from anywhere",
      "A compressed archive containing many files",
      "A locked folder only admins can open",
    ],
    optionRationales: [
      "You are describing physical storage, not a digital library. Off-site backups are a real practice, but the library in file management is a virtual grouping.",
      null,
      "You are describing an archive, not a library. Archives bundle files together; libraries reference them across locations.",
      "You are describing a restricted folder, not a library. Access restrictions control who can open files; libraries control how files are organized for the user.",
    ],
    correct: 1,
    explanation: "## Virtual Shelves\n\nA library is a special folder that catalogues specific files and folders in a central location, regardless of where the items are actually stored on your device. Libraries are helpful for finding all files of a certain type — for example, all your pictures, no matter which folders they live in. The files stay where they are; the library just shows them together.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-008",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What is the Clipboard in a file manager used for?",
    options: [
      "Scanning files for viruses before opening",
      "Permanently archiving rarely used files",
      "Temporarily storing a file being moved",
      "Displaying a list of deleted files for review",
    ],
    optionRationales: [
      "You are describing antivirus scanning, not the Clipboard. Scanners check for threats; the Clipboard holds temporary data for pasting.",
      "You are describing archiving, not the Clipboard. Archives preserve files long-term; the Clipboard holds them briefly during a copy or move.",
      null,
      "You are describing the Recycle Bin or Trash, not the Clipboard. Deleted files sit there; the Clipboard holds files that are about to be pasted somewhere.",
    ],
    correct: 2,
    explanation: "## The Middle Step\n\nOne method of copying or moving files in Windows is to use the Clipboard, which saves the file or folder from standard teaching until you paste it into the destination. The Clipboard is invisible but essential — it is what allows you to cut a file from one folder and paste it into another. Its contents are replaced when you copy something new.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-009",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "Which character is prohibited in macOS file names?",
    options: [
      "The colon (:)",
      "The hyphen (-)",
      "The underscore (_)",
      "The period (.)",
    ],
    optionRationales: [
      null,
      "The hyphen is a valid character in macOS file names. It is used as a separator in many filenames.",
      "The underscore is a valid character in macOS file names. It is commonly used instead of spaces.",
      "The period is valid and is used to separate the file name from the extension.",
    ],
    correct: 0,
    explanation: "## The Forbidden Character\n\nWhile most operating systems allow a wide variety of characters in file names, macOS prohibits the colon (:). This is because macOS historically used the colon as a path separator, and changing that convention would break older software. If you try to type a colon in a macOS file name, the system will usually replace it with a hyphen.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.5-010",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.5 Manage Files and Folders",
    q: "What is the primary rule for choosing a file name?",
    options: [
      "Use only uppercase letters for readability",
      "Choose a name that identifies the content",
      "Keep the name under five characters",
      "Include the date and time at the start",
    ],
    optionRationales: [
      "You are describing a style preference, not the primary rule. Uppercase is not required and can make names harder to read.",
      null,
      "You are describing a length constraint that does not exist. File names can be much longer than five characters.",
      "You are describing one possible convention, not the rule. Dates are useful but not required in every file name.",
    ],
    correct: 1,
    explanation: "## Content First\n\nA file name should identify the content and purpose of the file, as well as any other information, such as whether the file is a draft or final. A well-named file saves you from opening dozens of documents to find the right one. You can also add version information, dates, or initials to distinguish different versions of the same file.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.6-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.6 Operating System Management Utilities",
    q: "What can you do with a Task Manager utility?",
    options: [
      "Change the desktop wallpaper and theme",
      "View running apps and end frozen programs",
      "Install new drivers for printers and mice",
      "Encrypt all files with a single password",
    ],
    optionRationales: [
      "You are describing personalization settings, not the Task Manager. Personalization changes appearance; the Task Manager monitors running processes.",
      null,
      "You are describing Device Manager or driver installation, not Task Manager. Driver tools manage hardware; Task Manager manages software processes.",
      "You are describing full-disk encryption, not the Task Manager. Encryption protects data at rest; Task Manager monitors active processes.",
    ],
    correct: 1,
    explanation: "## Emergency Control\n\nIf a program freezes and will not close, you use the Task Manager. It shows you how much CPU and memory each app is using, and it lets you force-close anything that is causing trouble. You can also use it to see which apps are consuming resources and end the ones you do not need.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.6-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.6 Operating System Management Utilities",
    q: "What is the function of Disk Cleanup?",
    options: [
      "Reorganizing files on the disk for faster access",
      "Copying every file on the drive for backup",
      "Scanning the drive for malware and threats",
      "Removing temporary files to free up space",
    ],
    optionRationales: [
      "You are describing defragmentation, not Disk Cleanup. Defrag rearranges files on disk; cleanup removes them.",
      "You are describing backup software, not Disk Cleanup. Backup copies files for recovery; cleanup deletes files to free space.",
      "You are describing antivirus software, not Disk Cleanup. Antivirus scans for threats; cleanup removes safe but unnecessary files.",
      null,
    ],
    correct: 3,
    explanation: "## Digital Housekeeping\n\nAs you use the web, the OS saves thousands of temporary files that you do not need once you close the site. Disk Cleanup finds this digital trash and deletes it, giving you more space for your own photos and music. It is a safe operation because it only removes files that are not part of your documents, photos, or programs.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.6-003",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.6 Operating System Management Utilities",
    q: "What is the purpose of a performance monitor?",
    options: [
      "To display the time and system notification icons",
      "To manage which apps start when the computer boots",
      "To install and update device drivers",
      "To report how much of the system's resources are in use",
    ],
    optionRationales: [
      "You are describing the notification area, not a performance monitor. The notification area shows time and icons; the performance monitor reports resource usage.",
      "You are describing startup management, not performance monitoring. Startup tools control which apps launch at boot; performance monitors observe resource use.",
      "You are describing driver management, not performance monitoring. Drivers enable hardware; monitors measure how the hardware is being used.",
      null,
    ],
    correct: 3,
    explanation: "## The Diagnostic Gauge\n\nOperating systems typically include a performance monitor, a program that assesses and reports information about various computer resources and devices. If a computer is running extremely slowly, the performance monitor may reveal that the memory is being used to its maximum, or that one app is consuming most of the CPU. It shows you where the bottleneck is.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.6-004",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.6 Operating System Management Utilities",
    q: "What is the difference between a program window and a folder window?",
    options: [
      "A program window is always bigger",
      "A program window needs a password",
      "A program window is only on mobile",
      "A program window runs an app; a folder shows files",
    ],
    optionRationales: [
      "You are describing a size difference that does not exist. Both types of window can be resized freely.",
      "You are describing a security difference that is not standard. Windows do not require passwords by default.",
      "You are describing a platform difference that is not real. Both window types exist on desktop OSs.",
      null,
    ],
    correct: 3,
    explanation: "## Two Window Types\n\nA program window displays a running program — like Word or a web browser. A folder window displays the contents of a folder, drive, or device. Both are rectangular work areas on the desktop, but they serve different purposes: one shows what a program is doing, the other shows what a folder holds.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.6-005",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.6 Operating System Management Utilities",
    q: "What is the purpose of the title bar on a window?",
    options: [
      "It shortcuts to the operating system's help menu",
      "It displays the name of the app or file shown",
      "It shows how much memory the app is using",
      "It lists the actions the user recently performed",
    ],
    optionRationales: [
      "You are describing a Help menu, not the title bar. Help menus appear when clicked; the title bar always shows the name.",
      null,
      "You are describing the Task Manager or performance monitor, not the title bar. Those tools report resource use; the title bar names the content.",
      "You are describing an undo history, not the title bar. Undo history tracks actions; the title bar identifies the window.",
    ],
    correct: 1,
    explanation: "## The Name Tag\n\nThe title bar at the top of a window displays the name of the app, file, or folder shown in that window. It is how you tell two similar windows apart — two Word documents on the same topic will show different filenames in their title bars. On most systems the title bar also contains the buttons to minimize, maximize, and close the window.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.7-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.7 Securing an Operating System",
    q: "What is an Administrator account?",
    options: [
      "A temporary account with no file access",
      "An account with only read-only access",
      "One that only works when the network is off",
      "One with full control over all files and settings",
    ],
    optionRationales: [
      "You are describing a guest account, not an Administrator. Guest accounts restrict access; Administrator accounts grant it.",
      "You are describing a standard or restricted account, not an Administrator. Standard accounts cannot install software or change system settings.",
      "You are describing a network condition, not an account type. Administrator accounts work online and offline.",
      null,
    ],
    correct: 3,
    explanation: "## Total Power\n\nAn Administrator account enables the user to access all files and programs, install programs, and specify settings that affect all users on a computer, mobile device, or network. Only an Administrator can install new software or change system security. For daily work, it is safer to use a Standard account, so a virus cannot accidentally gain Administrator power.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.7-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.7 Securing an Operating System",
    q: "What is a Standard user account designed for?",
    options: [
      "Managing network security policy across many PCs",
      "Everyday work without changing system settings",
      "Running administrative scripts to install software",
      "Granting temporary access to visitors or guests",
    ],
    optionRationales: [
      "You are describing an Administrator's job, not a Standard account. Standard accounts cannot set policy.",
      null,
      "You are describing an Administrator account, not a Standard account. Installing software requires elevated permissions.",
      "You are describing a Guest account, not a Standard account. Guest accounts are temporary and more restricted.",
    ],
    correct: 1,
    explanation: "## Everyday Safety\n\nA Standard user account is designed for the everyday user who will be using the computer or device for work or recreation. It lets you run programs, create files, and browse the web, but it does not let you install new software or change system-level settings. This is a safety feature: if something goes wrong, the damage is limited to your own files.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.7-003",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.7 Securing an Operating System",
    q: "What do permissions define in an operating system?",
    options: [
      "The disk space available to a user",
      "The speed at which a program runs",
      "Who can access which resources and when",
      "The encryption used on network traffic",
    ],
    optionRationales: [
      "You are describing storage quota, not permissions. Quotas limit how much disk space a user can use; permissions control access.",
      "You are describing performance, not permissions. Performance is a property of hardware and code; permissions are a property of user identity.",
      null,
      "You are describing a network protocol, not permissions. Encryption protects data in transit; permissions control data access.",
    ],
    correct: 2,
    explanation: "## Access Rights\n\nPermissions define who can access certain resources and when they can access them. You can set a folder so that a family member can read your homework but cannot delete or edit it. Permissions are how an OS lets people share a machine without sharing everything. They are the technical enforcement of user accounts.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.7-004",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.7 Securing an Operating System",
    q: "What does a user account typically include?",
    options: [
      "A serial number and a warranty code",
      "A username and a password or PIN",
      "A list of every file the user opened",
      "A firewall that blocks network traffic",
    ],
    optionRationales: [
      "You are describing a hardware warranty, not a user account. Warranties are tied to devices; accounts are tied to people.",
      null,
      "You are describing file history, not a user account. History is a record of activity; an account is the identity that produces that activity.",
      "You are describing a firewall, not a user account. Firewalls block network traffic; accounts identify users.",
    ],
    correct: 1,
    explanation: "## Sign-In Identity\n\nEach user account typically consists of a username and a password or PIN, but other methods such as facial recognition, fingerprints, or a physical security key can be required for enhanced security. The account identifies who is using the device and determines what they are allowed to do once they are signed in.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.7-005",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.7 Securing an Operating System",
    q: "What is an audit trail in the context of operating system security?",
    options: [
      "A backup of every file changed today",
      "A summary of the user's recent searches",
      "A record of every sign-in attempt",
      "A list of programs never opened",
    ],
    optionRationales: [
      "You are describing a backup log, not an audit trail. Backups preserve files for recovery; audit trails record access attempts.",
      "You are describing search history, not an audit trail. Search history is generated by the user's activity; audit trails are generated by the OS's security subsystem.",
      null,
      "You are describing unused programs, not an audit trail. Unused programs are a usage statistic; audit trails are a security log.",
    ],
    correct: 2,
    explanation: "## The Security Log\n\nThe operating system records successful and unsuccessful sign-in attempts in a file. Administrators review these to see who is using or attempting to use the computer, and to spot suspicious patterns such as many failed password attempts. The audit trail is a core OS security feature — it lets the administrator see what happened without being present.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.7-006",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.7 Securing an Operating System",
    q: "What is a Guest account used for?",
    options: [
      "Running administrator tasks on a shared PC",
      "Installing software for other users",
      "Providing temporary access to basic functions",
      "Managing backups of important system files",
    ],
    optionRationales: [
      "You are describing Administrator privileges, not a Guest account. Guest accounts have very limited permissions, specifically to prevent administrative actions.",
      "You are describing a user with install rights, not a Guest. Guests cannot install software; that is a protected action.",
      null,
      "You are describing a backup utility, not a Guest account. Backups preserve data; Guest accounts provide temporary access.",
    ],
    correct: 2,
    explanation: "## Temporary Access\n\nIf you want to provide someone temporary access to your computer, you can create a Guest account that gives access only to basic functions. The Guest cannot change settings, install software, or see other users' files. Once the visit is over, the account can be disabled without affecting the main user's data.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.8-001",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.8 Virtual Machines",
    q: "What is a virtual machine (VM)?",
    options: [
      "A backup copy of an OS on a drive",
      "A remote server accessed by browser",
      "A physical PC built for VR displays",
      "A program running a second OS inside another",
    ],
    optionRationales: [
      "You are describing a system image or backup, not a VM. Backups are inert copies; a VM is a running environment.",
      "You are describing a remote server, not a VM. Remote servers live in data centres; VMs run on your own machine.",
      "You are describing a VR-ready PC, not a virtual machine. VR headsets use powerful hardware to display 3D scenes; a VM is software that emulates a computer.",
      null,
    ],
    correct: 3,
    explanation: "## Computer Inside a Computer\n\nA virtual machine enables a computer or device to run another operating system in addition to the one installed. A program called a hypervisor pretends to be hardware, so the guest OS thinks it is running on a real machine. This lets you run Windows inside a window on your Mac, or test software safely without affecting your main system.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.8-002",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.8 Virtual Machines",
    q: "What is a disk partition?",
    options: [
      "A folder containing only system files",
      "A cloud backup of the user's files",
      "A file that stores the OS passwords",
      "A section of a hard drive acting as its own drive",
    ],
    optionRationales: [
      "You are describing a system folder, not a partition. Folders organize files within a drive; partitions divide the drive itself.",
      "You are describing cloud backup, not a partition. Cloud backups are off-site copies; partitions are on-disk regions.",
      "You are describing a password file, not a partition. Password files store credentials; partitions store everything.",
      null,
    ],
    correct: 3,
    explanation: "## Dividing the Disk\n\nA partition, also called a volume, is a section of a hard drive that functions like a separate drive. You can have one partition for your Windows files and another for your movies. If Windows crashes, the data in the other partition is usually safer. Partitioning is how a single physical disk can host multiple logical drives.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.8-003",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.8 Virtual Machines",
    q: "What is the benefit of using a virtual machine for testing software?",
    options: [
      "The software cannot be copied by attackers",
      "The software runs faster than on the host",
      "The virtual machine protects the host from harm",
      "The virtual machine uses less disk space",
    ],
    optionRationales: [
      "You are describing a security benefit that is not guaranteed. VMs can be infected, though the infection is contained.",
      "You are describing a performance benefit that is generally false. VMs are usually slower because they emulate hardware.",
      null,
      "You are describing a storage benefit that is not accurate. VMs consume additional disk space for the guest OS and apps.",
    ],
    correct: 2,
    explanation: "## The Sandbox\n\nA virtual machine acts as a sandbox. If you are testing a suspicious program or a new operating system, you can run it inside a VM. If the program crashes or gets infected, the damage is contained inside the VM. You can simply delete the VM and start over, leaving your main computer untouched. This isolation is the key benefit.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.8-004",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.8 Virtual Machines",
    q: "What is a hypervisor in the context of virtual machines?",
    options: [
      "A program that creates and runs virtual machines",
      "A hardware chip that speeds up graphics",
      "A cloud service that backs up VMs",
      "A type of network cable for servers",
    ],
    optionRationales: [
      null,
      "You are describing a GPU, not a hypervisor. A GPU processes graphics; a hypervisor manages VMs.",
      "You are describing a cloud backup service, not a hypervisor. Backup services preserve data; hypervisors run VMs.",
      "You are describing a physical cable, not a hypervisor. Cables carry signals; hypervisors manage software environments.",
    ],
    correct: 0,
    explanation: "## The Manager\n\nA hypervisor is the program that creates and runs virtual machines. It sits between the physical hardware and the guest operating systems, allocating resources like CPU, memory, and storage to each VM. It is the technology that makes it possible to run multiple operating systems on a single physical machine.",
    status: "approved"
  },

  {
    id: "CS110-T2-U9-9.8-005",
    mainTopic: "Unit 9: Operating Systems",
    topic: "9.8 Virtual Machines",
    q: "What does a partition do on a hard drive?",
    options: [
      "It speeds up the drive's read and write",
      "It encrypts the entire drive for security",
      "It divides the drive into separate sections",
      "It copies the drive to a cloud server",
    ],
    optionRationales: [
      "You are describing a performance optimization, not partitioning. Partitioning does not inherently speed up the drive.",
      "You are describing encryption, not partitioning. Encryption scrambles data; partitioning divides space.",
      null,
      "You are describing backup, not partitioning. Backup copies data; partitioning organizes space.",
    ],
    correct: 2,
    explanation: "## Logical Drives\n\nA partition divides a physical hard drive into separate logical sections, each functioning like its own drive. The operating system treats each partition as a separate volume. This is why your computer might show a C: drive and a D: drive even though there is only one physical disk inside. Partitioning is a way to organize storage and isolate data.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 10 · DIGITAL SECURITY, ETHICS, AND PRIVACY  (91 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T2-U10-10.1-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is a digital security risk?",
    options: [
      "Any event that damages hardware, software, or data",
      "Only the theft of a physical laptop or phone",
      "A temporary slowdown of a network during peak hours",
      "The cost of upgrading antivirus software each year",
    ],
    optionRationales: [
      null,
      "Hardware theft is one type of risk, but the definition is broader. It also covers malware, data loss, and processing disruption.",
      "Network congestion is a performance issue, not a security risk as defined in the unit.",
      "Upgrade cost is a budget item, not a security risk event.",
    ],
    correct: 0,
    explanation: "## The Broad Threat\n\nA **digital security risk** is any event or action that could cause loss of or damage to computer or mobile device hardware, software, data, information, or processing capability. It is not just about a stolen laptop. It is also a virus corrupting your files, a hacker stealing your data, or a power surge frying your motherboard.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is cybercrime?",
    options: [
      "Any illegal act involving the use of a computer",
      "Only crimes committed by professional hackers",
      "Legal testing of a network with permission",
      "Sharing a password with a family member",
    ],
    optionRationales: [
      null,
      "Professionals for hire are one type of threat actor, but cybercrime includes many illegal acts, not only paid hacking.",
      "Authorized testing is ethical hacking or penetration testing, not cybercrime.",
      "Sharing a home password may be unwise but is not by itself the definition of cybercrime.",
    ],
    correct: 0,
    explanation: "## The Legal Definition\n\n**Cybercrime** is any illegal act involving the use of a computer or related devices. The software used by cybercriminals is often called **crimeware**. Cybersecurity is the practice of protecting systems, networks, and data from digital attacks.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is social engineering in the context of security attacks?",
    options: [
      "An attack that tricks victims into giving information",
      "A method of encrypting email so only the recipient reads it",
      "A firewall rule that blocks unknown IP addresses",
      "A backup strategy that copies only changed files",
    ],
    optionRationales: [
      null,
      "Encryption protects data; it is not social engineering.",
      "Firewall rules are technical controls, not social engineering.",
      "Backup strategies protect availability; they are not attacks.",
    ],
    correct: 0,
    explanation: "## The Human Hack\n\n**Social engineering** is a category of attack that attempts to trick the victim into giving personal or confidential information that can be used for criminal purposes. It exploits trust and human behavior rather than only technical flaws. Phishing and hoaxes are classic examples.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "Which term describes a person who accesses a computer illegally with intent to destroy data or steal information?",
    options: [
      "Cracker",
      "Script kiddie",
      "Digital forensics examiner",
      "System administrator",
    ],
    optionRationales: [
      null,
      "Script kiddies want to attack systems but typically use existing scripts rather than original expertise; the unit distinguishes them from crackers with clear malicious intent.",
      "A digital forensics examiner works on the defensive/investigative side, not as the attacker.",
      "A system administrator manages systems with permission; that is not illegal access.",
    ],
    correct: 0,
    explanation: "## Hackers and Crackers\n\nA **hacker** intends to access a system without permission. A **cracker** accesses a computer or network illegally with the intent of destroying data, stealing information, or other malicious purpose. **Script kiddies** use pre-written tools without deep expertise.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is a cyber extortionist?",
    options: [
      "Someone who threatens to expose information unless paid",
      "Someone who only defaces websites for political reasons",
      "A vendor who sells antivirus software online",
      "An employee who forgets to lock their workstation",
    ],
    optionRationales: [
      null,
      "Politically motivated website defacement is closer to hacktivism than extortion.",
      "Selling security software is a legitimate business, not extortion.",
      "A careless employee is a risk factor, not a cyber extortionist.",
    ],
    correct: 0,
    explanation: "## The Digital Threat\n\nA **cyber extortionist** threatens to expose confidential information, exploit a system vulnerability, or launch an attack unless the victim pays money or meets another demand. Ransomware attacks are a common form of this pressure.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is the dark web?",
    options: [
      "A part of the web accessed with software for anonymity",
      "The public searchable web indexed by Google",
      "Any website that uses a dark color theme",
      "The internal intranet of a government agency",
    ],
    optionRationales: [
      null,
      "The public indexed web is the surface web, not the dark web.",
      "Color theme has nothing to do with the dark web.",
      "An intranet is a private network, not the dark web.",
    ],
    correct: 0,
    explanation: "## The Hidden Web\n\nThe **dark web** is a part of the web that requires specialized software to access and where users and site operators can remain anonymous. It is distinct from the ordinary surface web that search engines index.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-007",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is a state-sponsored attacker?",
    options: [
      "An attacker employed by a government",
      "A hacker who works alone for profit",
      "A script kiddie using stolen tools",
      "A company defending its own network",
    ],
    optionRationales: [
      null,
      "Hackers working alone for profit are independent criminals, not state-sponsored.",
      "Script kiddies lack the resources and direction of a nation-state.",
      "A company defending its own network is a defender, not an attacker.",
    ],
    correct: 0,
    explanation: "## Nation-State Actors\n\n**State-sponsored attackers** are employed by a government to launch computer attacks against their enemies through nation-state actors. Their goals range from disabling a government's computer network to crippling a country. This is called **cyberwarfare**.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-008",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is cyberwarfare?",
    options: [
      "An attack aimed at crippling a country's network",
      "A hacking contest between two companies",
      "A legal dispute over domain name ownership",
      "A phishing email sent to a single user",
    ],
    optionRationales: [
      null,
      "A hacking contest is a game or competition, not a nation-state attack.",
      "A legal dispute over domain names is a civil matter, not cyberwarfare.",
      "A phishing email is a single act of social engineering, not a coordinated war effort.",
    ],
    correct: 0,
    explanation: "## Digital Warfare\n\n**Cyberwarfare** describes an attack whose goal ranges from disabling a government's computer network to crippling a country. It is carried out by state-sponsored attackers and targets critical infrastructure such as power grids, financial systems, and military networks.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-009",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is data mining in the context of security attacks?",
    options: [
      "Sifting through Big Data to find valuable information",
      "Extracting physical minerals from a data center",
      "Encrypting data to protect it from attackers",
      "Storing data in a secure cloud environment",
    ],
    optionRationales: [
      null,
      "Mining physical minerals is a literal interpretation of the word, not what data mining means.",
      "Encryption protects data; data mining is about analyzing it.",
      "Storing data is a storage function, not data mining.",
    ],
    correct: 0,
    explanation: "## Finding the Needle\n\nIn the context of attacks, **data mining** is the process of sifting through Big Data to find the important questions that will yield fruitful results. Attackers use data mining to steal and then use your credit card numbers, online financial account information, or Social Security numbers.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-010",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What are hacktivists motivated by?",
    options: [
      "Strong principles or beliefs",
      "Financial gain from stolen data",
      "A desire to improve security",
      "A contract with a government",
    ],
    optionRationales: [
      null,
      "Financial gain is the motive of a cybercriminal, not a hacktivist.",
      "Improving security is the goal of a white-hat hacker, not a hacktivist.",
      "Government contracts are associated with state-sponsored attackers, not hacktivists.",
    ],
    correct: 0,
    explanation: "## The Activist Hacker\n\n**Hacktivists** are attackers who are strongly motivated by principles or beliefs. They attack to make a political or social statement, rather than for personal profit. Their targets are often government websites or corporations they disagree with.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-011",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is a cyberterrorist?",
    options: [
      "An attacker who targets nations to cause panic",
      "A hacker who steals money from banks",
      "A company that spies on its competitors",
      "A user who posts offensive comments online",
    ],
    optionRationales: [
      null,
      "Stealing money from banks is financial crime, not terrorism. Terrorists aim to cause panic, not just profit.",
      "Corporate espionage is a form of competitive intelligence, not terrorism.",
      "Offensive comments are a social media policy issue, not cyberterrorism.",
    ],
    correct: 0,
    explanation: "## Causing Panic\n\n**Cyberterrorists** attack a nation's computer networks, like the electrical power grid, to cause disruption and panic among citizens. Their goal is to undermine public confidence and cause widespread chaos, rather than to achieve a specific financial or political outcome.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-012",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "Which social engineering principle involves impersonating an authority figure?",
    options: [
      "Authority",
      "Intimidation",
      "Consensus",
      "Scarcity",
    ],
    optionRationales: [
      null,
      "Intimidation uses threats, not impersonation. Authority relies on the victim's deference to a figure of power.",
      "Consensus uses the influence of what others do, not impersonating an authority figure.",
      "Scarcity uses the fear of missing out, not impersonation of authority.",
    ],
    correct: 0,
    explanation: "## The Authority Figure\n\nIn the social engineering framework, **Authority** is the principle of impersonating an authority figure or falsely citing their authority. For example, an attacker might call and say 'I'm the CEO calling,' which pressures the victim to comply without question.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-013",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "Which social engineering principle relies on creating a sense of immediate action?",
    options: [
      "Urgency",
      "Familiarity",
      "Trust",
      "Consensus",
    ],
    optionRationales: [
      null,
      "Familiarity exploits a known relationship, not the pressure of immediate action.",
      "Trust exploits a helping relationship, not the pressure of immediate action.",
      "Consensus exploits what others do, not the pressure of immediate action.",
    ],
    correct: 0,
    explanation: "## Time Pressure\n\n**Urgency** is the social engineering principle that creates the feeling that immediate action is needed. For example, 'My meeting with the board starts in five minutes.' The attacker pressures the victim to bypass normal security checks because there is no time to waste.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-014",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "Which social engineering principle is based on exploiting a known relationship?",
    options: [
      "Familiarity",
      "Authority",
      "Scarcity",
      "Intimidation",
    ],
    optionRationales: [
      null,
      "Authority relies on impersonating a figure of power, not on a known relationship.",
      "Scarcity relies on the fear of missing out, not on a known relationship.",
      "Intimidation uses threats, not familiarity.",
    ],
    correct: 0,
    explanation: "## The Known Quantity\n\n**Familiarity** is the social engineering principle that the victim is well-known and well-received. For example, an attacker might say, 'I remember reading a good evaluation on you,' to lower the victim's guard and make them feel comfortable.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.1-015",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.1 Digital Security Risks",
    q: "What is digital forensics?",
    options: [
      "The discovery and analysis of evidence on computers",
      "The design of faster graphics cards",
      "The marketing of mobile apps to teenagers",
      "The installation of office productivity suites",
    ],
    optionRationales: [
      null,
      "Graphics hardware design is engineering, not forensics.",
      "App marketing is commercial activity, not evidence analysis.",
      "Installing office software is administration, not forensics.",
    ],
    correct: 0,
    explanation: "## Following the Trail\n\n**Digital forensics** (cyber forensics) is the discovery, collection, and analysis of evidence found on computers and networks. A digital forensics examiner must have knowledge of the law, technical experience with hardware and software, and a knack for problem-solving.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is malware?",
    options: [
      "Malicious software that can deliver a harmful payload",
      "Any free app downloaded from an official store",
      "A hardware fault that causes random reboots",
      "A strong password policy enforced by the OS",
    ],
    optionRationales: [
      null,
      "Official-store apps are not malware by definition, though malicious apps can occasionally slip through.",
      "Hardware faults are not software and are not malware.",
      "Password policy is a safeguard, not malware.",
    ],
    correct: 0,
    explanation: "## Malicious Software\n\n**Malware** is short for **malicious software**. It consists of programs that act without the user's knowledge and can deliberately harm a computer or mobile device. Malware can deliver a **payload** — a destructive event or prank — when triggered.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "Which type of malware blocks access to a device until the user pays?",
    options: [
      "Ransomware",
      "Spyware",
      "Adware",
      "Worm",
    ],
    optionRationales: [
      null,
      "Spyware secretly collects information; it does not primarily lock the device for payment.",
      "Adware delivers advertisements; it is not defined by locking files for ransom.",
      "A worm spreads copies of itself across networks; locking for payment defines ransomware.",
    ],
    correct: 0,
    explanation: "## The Digital Hostage\n\n**Ransomware** blocks or limits access to a computer, phone, or file until the user pays a specified amount. Unlike a simple scare message, it actively withholds access to data or the system until the demand is met.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What does spyware do?",
    options: [
      "It secretly collects and transmits user information",
      "It encrypts the entire disk for backup",
      "It displays a legitimate login screen",
      "It only removes temporary Internet files",
    ],
    optionRationales: [
      null,
      "Consentful full-disk encryption is a security control, not spyware.",
      "A legitimate login screen is normal software, not spyware.",
      "Disk cleanup removes temporary files; that is maintenance, not spyware.",
    ],
    correct: 0,
    explanation: "## The Secret Observer\n\n**Spyware** is a program placed on a computer or mobile device without the user's knowledge that secretly collects information about the user and communicates it to an outside source. It can enter through installing a new program or clicking a graphic on a web page.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "How does a Trojan horse differ from a virus or worm?",
    options: [
      "It hides in a legitimate program and does not replicate",
      "It always spreads automatically to every contact",
      "It only affects printers and cannot run on phones",
      "It is always installed intentionally by the administrator",
    ],
    optionRationales: [
      null,
      "Automatic mass spreading is characteristic of worms or email viruses, not the defining trait of a Trojan.",
      "Trojans can target many device types, including phones.",
      "Administrators do not intentionally install Trojans as a standard practice; Trojans rely on deception.",
    ],
    correct: 0,
    explanation: "## The Disguise\n\nA **Trojan horse** is a program that hides within or looks like a legitimate program. Unlike a virus or worm, a Trojan horse does not replicate itself to other computers or devices in the same way. Users often install it because it appears useful or harmless.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is a virus in the malware sense?",
    options: [
      "A program that alters how a device works",
      "A bacterial infection that spreads through keyboards",
      "Any app update from the vendor",
      "A temporary spike in CPU use during video calls",
    ],
    optionRationales: [
      null,
      "Biological viruses are unrelated to malware terminology here.",
      "Vendor updates are legitimate software maintenance.",
      "High CPU during video calls is performance load, not a virus by definition.",
    ],
    correct: 0,
    explanation: "## The Infector\n\nA **virus** is a potentially damaging program that affects, or infects, a computer or mobile device negatively by altering the way the device works. Viruses often spread by attaching to host files or programs and activating when those hosts run.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is the primary behavior of a worm?",
    options: [
      "It copies itself repeatedly to use up resources",
      "It disguises itself as a useful application",
      "It blocks files until a payment is made",
      "It secretly records keystrokes",
    ],
    optionRationales: [
      null,
      "Disguising itself as a useful application is the behavior of a Trojan horse.",
      "Blocking files for payment is ransomware behavior.",
      "Secretly recording keystrokes is spyware behavior.",
    ],
    correct: 0,
    explanation: "## The Self-Replicator\n\nA **worm** is a program that copies itself repeatedly, for example, in memory or on a network, using up resources and possibly shutting down the computer, device, or network. Unlike a virus, a worm does not need a host file to spread.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-007",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is a rootkit?",
    options: [
      "A program that copies itself across networks",
      "A program that hides and allows remote control",
      "A program that displays unwanted advertisements",
      "A program that encrypts files for ransom",
    ],
    optionRationales: [
      "Copying itself across networks is worm behavior.",
      null,
      "Displaying ads is adware behavior, not a rootkit.",
      "Encrypting files for ransom is ransomware behavior.",
    ],
    correct: 1,
    explanation: "## Deep Cover\n\nA **rootkit** is a program that hides in a computer or mobile device and allows someone from a remote location to take full control of the computer or device. Rootkits are difficult to detect because they hide deep in the operating system.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-008",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is adware?",
    options: [
      "A program that locks files for payment",
      "A program that hides for remote control",
      "A program that displays online advertisements",
      "A program that secretly collects user data",
    ],
    optionRationales: [
      "Locking files for payment is ransomware.",
      "Hiding for remote control is a rootkit.",
      null,
      "Secretly collecting data is spyware, not adware.",
    ],
    correct: 2,
    explanation: "## The Unwanted Ads\n\n**Adware** is a program that displays an online advertisement in a banner, pop-up window, or pop-under window on web pages, email messages, or other Internet services. It is often bundled with free software and generates revenue for the developer.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-009",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is a botnet?",
    options: [
      "A network of legitimate business servers",
      "A type of software for managing passwords",
      "A wireless protocol for smart home devices",
      "A group of compromised computers used to attack",
    ],
    optionRationales: [
      "Legitimate business servers are not compromised, nor are they used for attacks.",
      "Password managers are security tools, not botnets.",
      "Wireless protocols are network standards, not malicious networks.",
      null,
    ],
    correct: 3,
    explanation: "## The Zombie Army\n\nA **botnet**, or zombie army, is a group of compromised computers or mobile devices connected to a network that are used to attack other networks, usually for nefarious purposes. Cybercriminals install malicious bots on unprotected computers to create botnets.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-010",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is a zombie in the context of network attacks?",
    options: [
      "A server that hosts illegal websites",
      "A compromised computer controlled remotely",
      "A computer that has been completely destroyed",
      "A virus that targets only mobile phones",
    ],
    optionRationales: [
      "Hosting illegal websites is a crime, but it does not define a zombie.",
      null,
      "A destroyed computer cannot be controlled; a zombie is very much alive and under remote control.",
      "Zombies can be any type of compromised device, not just mobile phones.",
    ],
    correct: 1,
    explanation: "## The Remote-Controlled Host\n\nA **zombie** is a compromised computer or device whose owner is unaware that the computer or device is being controlled remotely by an outsider. The attacker can use the zombie to send spam, launch attacks, or spread malware without the owner's knowledge.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-011",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is a DoS attack?",
    options: [
      "An attack that encrypts files for ransom",
      "An attack that hides within a legitimate file",
      "An attack that overloads a server with traffic",
      "An attack that steals a user's password",
    ],
    optionRationales: [
      "Encrypting files for ransom is ransomware.",
      "Hiding within a legitimate file is a Trojan horse.",
      null,
      "Stealing a password is a credential attack, not a DoS.",
    ],
    correct: 2,
    explanation: "## Bringing It Down\n\nA **DoS attack** (denial of service) is a type of attack, usually on a server, that is meant to overload the server with network traffic so that it cannot provide necessary services, such as the web or email. The goal is to make the service unavailable to legitimate users.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-012",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "How does a DDoS attack differ from a DoS attack?",
    options: [
      "A DDoS only targets mobile devices",
      "A DDoS requires physical access to the server",
      "A DDoS is legal when done by security researchers",
      "A DDoS uses multiple computers to attack one target",
    ],
    optionRationales: [
      "DDoS attacks can target any type of server or network resource, not just mobile devices.",
      "DDoS attacks are launched remotely over the internet, not through physical access.",
      "DDoS attacks are illegal regardless of who launches them; authorized testing is a different matter.",
      null,
    ],
    correct: 3,
    explanation: "## The Distributed Attack\n\nA **distributed DoS (DDoS)** attack uses multiple computers, such as a zombie army, to attack a server or other network resource. Because the attack comes from many sources, it is much harder to block than a simple DoS attack from a single computer. The damage caused by a DDoS attack is usually extensive.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-013",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is a back door in a computer system?",
    options: [
      "A backup path for network cables",
      "A set of instructions that bypasses security controls",
      "The physical door of a server room",
      "A type of firewall that blocks all traffic",
    ],
    optionRationales: [
      "A backup cable path is a network redundancy measure, not a software back door.",
      null,
      "A physical door is the literal meaning, but the term 'back door' in computing refers to software.",
      "A firewall blocks traffic; a back door allows it to bypass security.",
    ],
    correct: 1,
    explanation: "## The Secret Entrance\n\nA **back door** is a program or set of instructions in a program that allows users to bypass security controls when accessing a program, computer, or network. Some worms leave back doors, which have been used to spread other worms or to distribute spam from the unsuspecting victim's computers.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-014",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is spoofing?",
    options: [
      "Backing up data to a remote server",
      "Scanning a network for open ports",
      "Making a transmission appear to come from a trusted source",
      "Encrypting data so it cannot be read",
    ],
    optionRationales: [
      "Backing up data is a preservation measure, not an attack.",
      "Scanning for open ports is reconnaissance, not spoofing.",
      null,
      "Encryption is a protective measure, not a deceptive one.",
    ],
    correct: 2,
    explanation: "## The Impostor\n\n**Spoofing** is a technique intruders use to make their network or Internet transmission appear legitimate to a victim's computer or network. Two common types are IP spoofing and address spoofing.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-015",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is IP spoofing?",
    options: [
      "Altering the sender's email address in a header",
      "Sending an email with a fake attachment",
      "Encrypting an email to hide its contents",
      "Tricking a network into trusting a false IP address",
    ],
    optionRationales: [
      "Altering the email address is address spoofing, not IP spoofing.",
      "Sending a fake attachment is a phishing technique, not IP spoofing.",
      "Encrypting an email is a security measure, not an attack.",
      null,
    ],
    correct: 3,
    explanation: "## Faking the Source\n\n**IP spoofing** occurs when an intruder computer tricks a network into believing its IP address is associated with a trusted source. This allows the attacker to bypass IP-based authentication and gain access to the network.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.2-016",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.2 Malware and Internet Attacks",
    q: "What is address spoofing in an email context?",
    options: [
      "Blocking the recipient from replying",
      "Altering the sender's email address or header",
      "Tricking a network into trusting a false IP address",
      "Encrypting the email message body",
    ],
    optionRationales: [
      "Blocking replies is a spam tactic, not address spoofing.",
      null,
      "Tricking a network into trusting an IP is IP spoofing, not address spoofing.",
      "Encrypting the body is a security measure, not spoofing.",
    ],
    correct: 1,
    explanation: "## The Fake Sender\n\n**Address spoofing** occurs when the sender's email address or other components of an email header are altered. This makes the email appear to come from a different sender, which is a key component of phishing attacks. Spoofers alter the components and header of an email message so that it appears the message originated from a different sender.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is unauthorized access?",
    options: [
      "Installing updates approved by the organization",
      "Reading a public webpage without an account",
      "Using a computer or network without permission",
      "Signing in with your own account on your laptop",
    ],
    optionRationales: [
      "Approved updates are authorized system maintenance.",
      "Public webpages are meant to be read without special permission.",
      null,
      "Using your own account on your own device is authorized use.",
    ],
    correct: 2,
    explanation: "## Crossing the Line\n\n**Unauthorized access** is the use of a computer or network without permission. **Unauthorized use** is the use of a computer or its data for unapproved activities. Access controls, passwords, and account types help prevent both.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is an audit trail in OS security?",
    options: [
      "A full copy of every user file for disaster recovery",
      "A list of desktop wallpaper choices",
      "A chart of Wi-Fi signal strength by room",
      "A record of successful and unsuccessful sign-in attempts",
    ],
    optionRationales: [
      "A full file copy is a backup, not an audit trail.",
      "Wallpaper choices are personalization, not security logs.",
      "Signal strength is a network performance metric, not an access log.",
      null,
    ],
    correct: 3,
    explanation: "## The Security Log\n\nAn **audit trail** records successful and unsuccessful sign-in attempts (and often other security events). Administrators review it to see who used or tried to use the system and to spot patterns such as repeated failed passwords.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "Why is a Standard user account safer for everyday work than an Administrator account?",
    options: [
      "It runs programs twice as fast as an Administrator",
      "It limits malware damage by restricting system changes",
      "It disables the Internet connection automatically",
      "It makes all files visible to every other user",
    ],
    optionRationales: [
      "Account type does not double program speed.",
      null,
      "Standard accounts still allow Internet use.",
      "Standard accounts do not expose all files to everyone; permissions still apply.",
    ],
    correct: 1,
    explanation: "## Least Privilege\n\nA **Standard** account is for everyday work: run programs, create files, browse. It cannot install software or change system-level settings. That limit is intentional — if malware runs under a Standard account, it is less likely to take over the whole machine than if it runs as Administrator.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is an Acceptable Use Policy (AUP)?",
    options: [
      "A backup strategy for critical company data",
      "A software license for installing office apps",
      "A document specifying acceptable technology use by employees",
      "A firewall rule that blocks all incoming traffic",
    ],
    optionRationales: [
      "A backup strategy is a data protection measure, not an AUP.",
      "A software license governs legal use, not the broader AUP.",
      null,
      "A firewall rule is a technical control, not a policy document.",
    ],
    correct: 2,
    explanation: "## The Rulebook\n\nAn organization's **Acceptable Use Policy (AUP)** specifies the acceptable use of technology by employees for personal reasons. It also specifies the personal activities, if any, that are allowed on company time. The AUP should be documented and explained to employees.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is an IT code of conduct?",
    options: [
      "A list of approved hardware vendors",
      "A schedule for software updates",
      "A map of network cable locations",
      "A written guideline for ethical technology use",
    ],
    optionRationales: [
      "A vendor list is procurement information, not a code of conduct.",
      "An update schedule is a maintenance task, not a code of conduct.",
      "A cable map is infrastructure documentation, not a code of conduct.",
      null,
    ],
    correct: 3,
    explanation: "## Ethical Guidelines\n\nAn **IT code of conduct** is a written guideline that focuses on the acceptable use of technology. It helps determine whether a specification is ethical, unethical, allowed, or not allowed. A sample code might include rules like 'Technology may not be used to harm other people' and 'Employees may not use others' intellectual property as their own.'",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is employee monitoring?",
    options: [
      "Allowing employees to work from home",
      "Using devices or cameras to observe an employee's technology use",
      "Paying employees for overtime hours worked",
      "Providing training on new software tools",
    ],
    optionRationales: [
      "Remote work is a work arrangement, not monitoring.",
      null,
      "Paying for overtime is a payroll function, not monitoring.",
      "Training is an educational activity, not monitoring.",
    ],
    correct: 1,
    explanation: "## The Watchful Employer\n\n**Employee monitoring** involves the use of computers, mobile devices, or cameras to observe, record, and review an employee's use of technology, including communications such as email messages, keyboard activity (used to measure productivity), and websites visited. If a company does not have a formal email policy, it can read email messages without employee notification.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-007",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is content filtering in an organization?",
    options: [
      "Encrypting email before sending it",
      "Backing up data to a remote cloud server",
      "Restricting access to certain materials or websites",
      "Compressing files to save server storage",
    ],
    optionRationales: [
      "Encryption is a security measure, not content filtering.",
      "Backup is a data protection measure, not content filtering.",
      null,
      "Compression is a storage optimization, not content filtering.",
    ],
    correct: 2,
    explanation: "## The Gatekeeper\n\n**Content filtering** is the process of restricting access to certain materials. Many businesses use content filtering to limit employees' web access. **Web filtering software** are programs that restrict access to specified websites; some also filter websites that use specific words.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-PWM-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is the main benefit of a password manager?",
    options: [
      "It blocks all phishing emails before they arrive",
      "It encrypts the entire hard drive automatically",
      "It replaces the need for any user authentication",
      "It stores strong unique passwords securely for many sites",
    ],
    optionRationales: [
      "Phishing filters and email gateways address phishing; a password manager stores credentials.",
      "Full-disk encryption is a separate control; password managers focus on login secrets.",
      "Authentication is still required; the manager helps you use better passwords, not skip login.",
      null,
    ],
    correct: 3,
    explanation: "## One Vault, Many Strong Secrets\n\nA **password manager** stores encrypted passwords and can generate long, unique ones for each site. You remember one master password; the manager fills the rest.\n\nThat reduces password reuse — a major cause of account takeover after a single breach. It does not replace firewalls, disk encryption, or phishing awareness; it strengthens the “something you know” factor.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.3-SC-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.3 Unauthorized Access and Use",
    q: "What is a possessed object in authentication?",
    options: [
      "A list of security questions about the user",
      "A physical item the user must present to prove identity",
      "A secret phrase only the user should know",
      "A fingerprint or face scan of the user",
    ],
    optionRationales: [
      "Security questions are knowledge-based, not a physical object you carry.",
      null,
      "A secret phrase is “something you know,” not a possessed object.",
      "A fingerprint or face is “something you are” (biometric), not a possessed object.",
    ],
    correct: 1,
    explanation: "## Something You Have\n\nA **possessed object** is a physical token you must present — a smart card, security key, or badge. Authentication factors are often grouped as something you know, something you have, and something you are.\n\nSmart cards and hardware keys are classic “something you have.” They pair well with a password (two-factor) because stealing only the password is not enough.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.4-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.4 Wireless Security",
    q: "Which precaution is recommended when using public Wi-Fi?",
    options: [
      "Disable encryption so pages load faster",
      "Share the network password on social media",
      "Turn off the firewall only while in the café",
      "Avoid online banking and sending confidential information",
    ],
    optionRationales: [
      "Disabling encryption increases exposure; it does not safely speed pages.",
      "Publishing passwords invites unauthorized use.",
      "Turning off the firewall removes a layer of protection when you need it most.",
      null,
    ],
    correct: 3,
    explanation: "## Public Wi-Fi Risks\n\nOn public Wi-Fi, attackers may read wireless transmissions or inject malware. Limit activity to simple browsing when possible. **Avoid online banking and confidential transactions** on public networks. Prefer known, approved network names and keep device firewalls on.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.4-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.4 Wireless Security",
    q: "What should you do with the default SSID on a home wireless router?",
    options: [
      "Leave it default so guests can find the network easily",
      "Change it to a value that does not reveal the owner",
      "Remove the password entirely for maximum speed",
      "Print the default SSID on the router and leave it visible",
    ],
    optionRationales: [
      "Default SSIDs are a known attack surface.",
      null,
      "Removing the password leaves the network open.",
      "Visible default SSIDs help attackers, not only guests.",
    ],
    correct: 1,
    explanation: "## Hiding the Name\n\nThe **SSID** is the name of the local wireless network. You should change this from the default setting to a value that does not reveal the identity of the owner or the location of the network. A default SSID like 'Linksys' or 'Netgear' tells an attacker exactly what equipment you are using and what vulnerabilities to try.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.4-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.4 Wireless Security",
    q: "What is a VPN?",
    options: [
      "A firewall that blocks all incoming traffic",
      "A cloud service for storing backups",
      "A private secure path across a public network",
      "A physical cable that connects two offices",
    ],
    optionRationales: [
      "A firewall blocks traffic; a VPN encrypts and routes it.",
      "A cloud backup service stores data; a VPN transmits it securely.",
      null,
      "A physical cable is a dedicated line, not a VPN. A VPN creates a secure path over existing public infrastructure.",
    ],
    correct: 2,
    explanation: "## The Secure Tunnel\n\nA **VPN** (Virtual Private Network) is a private, secure path across a public network that allows authorized users to secure access to a company or other network. It provides the mobile user with a secure connection to the company's network server as if the user has a private line. VPNs encrypt data as it transmits from a laptop, smartphone, or other mobile device.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.4-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.4 Wireless Security",
    q: "What is a proxy server?",
    options: [
      "A server that stores backup copies of all files",
      "A server that assigns IP addresses to devices",
      "A server that hosts the company website",
      "A server that controls communications in and out of a network",
    ],
    optionRationales: [
      "Storing backups is a backup server's job, not a proxy's.",
      "Assigning IP addresses is a DHCP server's job.",
      "Hosting the website is a web server's job.",
      null,
    ],
    correct: 3,
    explanation: "## The Middleman\n\nA **proxy server** is a server outside the organization's network that controls which communications pass in and out of the organization's network. It acts as a gatekeeper, filtering requests and providing anonymity for internal users. Both Windows and Mac operating systems include firewall capabilities, but a proxy server adds an additional layer of control.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.4-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.4 Wireless Security",
    q: "What is a business risk of using cloud computing?",
    options: [
      "Cloud storage is always more expensive than local",
      "Ownership and security must be defined in contracts",
      "The cloud provider always owns your data",
      "International laws never apply to cloud data",
    ],
    optionRationales: [
      "Cloud storage is often cheaper than local storage, not always more expensive.",
      null,
      "Cloud providers usually do not claim ownership of your data, but the contract must clarify this.",
      "International laws and industry regulations do protect sensitive and personal data.",
    ],
    correct: 1,
    explanation: "## Business Risks\n\nTwo types of risks arise from cloud computing: personal risks and business risks. For businesses, the ownership and security of data should be included in any contract between the business and a cloud storage provider. International laws and industry regulations protect sensitive and personal data, so the contract must specify where the data is stored and who can access it.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.4-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.4 Wireless Security",
    q: "What does WPA2 do for a wireless network?",
    options: [
      "Blocks all advertisements on web pages",
      "Assigns IP addresses to connected devices",
      "Encrypts transmissions and limits who can access",
      "Speeds up the network by compressing data",
    ],
    optionRationales: [
      "Blocking ads is an ad blocker's job, not WPA2's.",
      "Assigning IP addresses is DHCP's job, not WPA2's.",
      null,
      "Compressing data is a performance optimization, not WPA2's function.",
    ],
    correct: 2,
    explanation: "## The Security Standard\n\n**WPA2** (Wi-Fi Protected Access 2) Personal encrypts the wireless data transmissions and also limits who can access the Wi-Fi network. To use it, you turn on WPA2 and set a strong pre-shared key, which must also be entered once on each mobile device. It is the current standard for securing home and small business wireless networks.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a digital footprint?",
    options: [
      "The physical size of your smartphone",
      "A single password stored in a browser",
      "The amount of disk space used by photos",
      "The record of everything you do online",
    ],
    optionRationales: [
      "Physical device size is unrelated to digital footprint.",
      "One stored password is a credential, not the whole footprint.",
      "Disk usage measures storage, not online activity history.",
      null,
    ],
    correct: 3,
    explanation: "## The Digital Trail\n\nYour **digital footprint** is the record of everything you do online. It can be nearly impossible to erase completely. Posts, uploads, location tags, and account activity all contribute to it. Firewalls and access controls protect data on your devices, but your digital footprint is about the trail you leave behind on the internet.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is information privacy?",
    options: [
      "The speed at which data travels on fiber links",
      "The right to restrict collection and use of personal info",
      "The brand name of a firewall product",
      "The legal requirement that all data must be public",
    ],
    optionRationales: [
      "Transmission speed is a performance topic, not privacy.",
      null,
      "Product names are not the definition of information privacy.",
      "Privacy is about control and limits, not mandatory full publicity of all data.",
    ],
    correct: 1,
    explanation: "## The Right to Control\n\n**Information privacy** refers to the right of individuals and companies to deny or restrict the collection and use of information about them. Privacy issues arise around cookies, tracking, employee monitoring, and how organizations store personal data.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a cookie in a web context?",
    options: [
      "A type of firewall that blocks all ads",
      "A malware program that encrypts the Documents folder",
      "A small text file a web server stores on your computer",
      "A physical security token used only for ATMs",
    ],
    optionRationales: [
      "Firewalls filter traffic; they are not cookies.",
      "Encrypting Documents for ransom is ransomware behavior, not a cookie.",
      null,
      "ATM tokens are hardware authentication devices, not browser cookies.",
    ],
    correct: 2,
    explanation: "## The Memory Chip\n\nA **cookie** is a small text file that a web server stores on your computer. Sites use cookies to remember preferences, login sessions, and tracking data. Not every cookie is malicious, but they raise privacy questions because they record behavior across visits.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is authentication?",
    options: [
      "Encrypting data so it cannot be read",
      "Backing up files to a secure location",
      "Blocking unauthorized network traffic",
      "Ensuring the person requesting access is authentic",
    ],
    optionRationales: [
      "Encryption is a data protection measure, not authentication.",
      "Backup is a preservation measure, not authentication.",
      "Blocking traffic is a firewall's job, not authentication.",
      null,
    ],
    correct: 3,
    explanation: "## Proving Identity\n\n**Authentication** is the process of ensuring that the person requesting access to a computer or other resources is authentic and not an imposter. Different methods of authentication include passwords, biometrics, 2FA, CAPTCHA, and encryption.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a passphrase?",
    options: [
      "A physical badge used to enter a building",
      "A longer sequence of words used for authentication",
      "A single complex character used for encryption",
      "A numeric password used only for ATMs",
    ],
    optionRationales: [
      "A physical badge is a possessed object, not a passphrase.",
      null,
      "A single complex character is not a passphrase; a passphrase is a sequence of words.",
      "A numeric password is a PIN, not a passphrase.",
    ],
    correct: 1,
    explanation: "## The Long Key\n\nSome organizations use **passphrases** to authenticate users. A passphrase is a longer sequence of words — like 'correct horse battery staple' — that is easier to remember than a random string of characters but much harder for a computer to crack.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a PIN?",
    options: [
      "A type of biometric authentication",
      "A wireless encryption standard",
      "A numeric password for additional security",
      "A physical key for a server room",
    ],
    optionRationales: [
      "A PIN is a numeric password, not a biometric.",
      "A wireless encryption standard is WPA2, not a PIN.",
      null,
      "A physical key is a possessed object, not a PIN.",
    ],
    correct: 2,
    explanation: "## The Numbers\n\nA **PIN** (personal identification number), sometimes called a pass code, is a numeric password. PINs provide an additional level of security. They are commonly used with bank cards and mobile devices because they are quick to enter and easy to remember.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-007",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a possessed object in authentication?",
    options: [
      "A unique physical characteristic",
      "A secret combination of letters",
      "A code sent to your phone",
      "An item you must carry to gain access",
    ],
    optionRationales: [
      "A unique physical characteristic is a biometric, not a possessed object.",
      "A secret combination of letters is a password, not a possessed object.",
      "A code sent to a phone is a second factor, not a possessed object by itself.",
      null,
    ],
    correct: 3,
    explanation: "## Something You Have\n\nA **possessed object** is any item that you must possess, or carry with you, to gain access to a computer or computer facility. Examples include badges, cards, smart cards, and keys. The card you use in an ATM is a possessed object that allows access to your bank account.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-008",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What does biometric security use to authenticate a user?",
    options: [
      "A physical badge carried by the user",
      "Unique physical characteristics like face or fingerprints",
      "A password stored in a secure vault",
      "A code sent to a registered phone number",
    ],
    optionRationales: [
      "A physical badge is a possessed object, not a biometric.",
      null,
      "A password is something you know, not a biometric.",
      "A code sent to a phone is something you have, not a biometric.",
    ],
    correct: 1,
    explanation: "## Something You Are\n\n**Biometric security** uses the unique characteristics of your face, hands, or eyes to authenticate you. Some of the different types of biometrics include retina, fingerprint, voice, face, iris, hand, and signature. Because these traits are unique to each person, they are very difficult to forge.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-009",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is two-factor authentication (2FA)?",
    options: [
      "Running two antivirus programs at once",
      "Connecting to two networks simultaneously",
      "Combining two different types of authentication",
      "Using two passwords to log in",
    ],
    optionRationales: [
      "Two antivirus programs can conflict; that is not authentication.",
      "Connecting to two networks is a network configuration, not authentication.",
      null,
      "Using two passwords is not 2FA; it is just two things you know.",
    ],
    correct: 2,
    explanation: "## Double Security\n\n**Two-factor authentication (2FA)** is multiple types of authentication. The most common authentication elements that are combined are passwords and codes sent to a cell phone using a text message. It makes authentication stronger because an attacker needs both factors to gain access.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-010",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a CAPTCHA?",
    options: [
      "A type of firewall that blocks bots",
      "A password manager for multiple accounts",
      "A biometric scanner for fingerprints",
      "A program that verifies user input is from a human",
    ],
    optionRationales: [
      "A firewall filters network traffic; CAPTCHA verifies user input.",
      "A password manager stores credentials; CAPTCHA verifies humanity.",
      "A biometric scanner is a physical device; CAPTCHA is a software challenge.",
      null,
    ],
    correct: 3,
    explanation: "## Proving You're Human\n\n**CAPTCHA** stands for 'Completely Automated Public Turing test to tell Computers and Humans Apart.' A CAPTCHA is a program that displays an image containing a series of distorted characters to verify that user input is from humans. It prevents automated bots from submitting forms or creating fake accounts.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-011",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is encryption in the context of privacy?",
    options: [
      "Monitoring network traffic for suspicious activity",
      "Scrambling information so it cannot be read without a key",
      "Backing up data to a secure cloud server",
      "Deleting files permanently from the hard drive",
    ],
    optionRationales: [
      "Monitoring observes traffic; encryption protects data.",
      null,
      "Backup preserves data; encryption protects it from being read.",
      "Deleting files removes them; encryption keeps them but hides them.",
    ],
    correct: 1,
    explanation: "## The Secret Code\n\n**Encryption** is the process of scrambling information in such a way that it cannot be read unless the user possesses the key to unlock it (decryption). It is one of the most powerful tools for protecting privacy, both in transit and at rest.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-012",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a digital signature?",
    options: [
      "A password used to encrypt email",
      "A biometric scan of a fingerprint",
      "An electronic encrypted stamp of authentication",
      "A scanned image of a handwritten signature",
    ],
    optionRationales: [
      "A password is a secret, not a signature.",
      "A biometric scan is a physical measurement, not a digital signature.",
      null,
      "A scanned image is a graphic, not a cryptographic digital signature.",
    ],
    correct: 2,
    explanation: "## The Digital Stamp\n\nA **digital signature** is an electronic, encrypted, and secure stamp of authentication on a document issued by a CA (Certificate Authority) organization. It verifies that the document originated from the claimed sender and has not been altered in transit.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-013",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What does COPPA protect?",
    options: [
      "Health information of all citizens",
      "Copyrighted material on the internet",
      "Government records from public access",
      "Personal information of children under 13",
    ],
    optionRationales: [
      "Health information is protected by HIPAA, not COPPA.",
      "Copyright is protected by the DMCA, not COPPA.",
      "Government records are addressed by FOIA, not COPPA.",
      null,
    ],
    correct: 3,
    explanation: "## Protecting Children\n\nThe **Children's Online Privacy Protection Act (COPPA)** requires websites to protect personal information of children under 13 years of age. It gives parents control over what information websites can collect from their children. It is one of several U.S. privacy laws designed to protect specific types of data.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-014",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What does HIPAA protect?",
    options: [
      "Consumers from fraud and identity theft",
      "Individuals against wrongful disclosure of health info",
      "Children from inappropriate online content",
      "Copyrighted software from being copied",
    ],
    optionRationales: [
      "Consumer fraud protection is FACTA's goal, not HIPAA's.",
      null,
      "Protecting children is COPPA's goal, not HIPAA's.",
      "Copyright protection is the DMCA's goal, not HIPAA's.",
    ],
    correct: 1,
    explanation: "## Health Privacy\n\nThe **Health Insurance Portability and Accountability Act (HIPAA)** protects individuals against the wrongful disclosure of their health information. It sets strict rules for how healthcare providers, insurers, and their business associates can handle medical records and personal health data.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-015",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a credit freeze?",
    options: [
      "Closing all bank accounts permanently",
      "Transferring credit to a different person",
      "Locking credit info so it cannot be accessed",
      "Paying off all credit card debt at once",
    ],
    optionRationales: [
      "Closing accounts is a financial decision, not a credit freeze.",
      "Transferring credit is not a standard practice and not a credit freeze.",
      null,
      "Paying off debt is a financial action, not a credit freeze.",
    ],
    correct: 2,
    explanation: "## Locking the Vault\n\nA **credit freeze** locks your credit information so that it cannot be accessed without your explicit permission. It is a powerful tool against identity theft because it prevents attackers from opening new accounts in your name. You can also request a thaw to temporarily allow access. Both actions are free.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-DMCA-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What does the Digital Millennium Copyright Act (DMCA) primarily address?",
    options: [
      "Protection of copyrighted digital content online",
      "Privacy of children under thirteen online",
      "Public access to government records",
      "Accuracy of consumer credit reports",
    ],
    optionRationales: [
      null,
      "Children’s online privacy is the focus of COPPA, not the DMCA.",
      "Public access to government records is addressed by FOIA, not the DMCA.",
      "Credit report accuracy is the focus of FACTA, not the DMCA.",
    ],
    correct: 0,
    explanation: "## Digital Copyright\n\nThe **Digital Millennium Copyright Act (DMCA)** is U.S. law that strengthens protection for copyrighted material in digital form. It makes it illegal to circumvent copy-protection technology and sets rules for how online services handle copyright complaints.\n\nIt is why streaming platforms and sites take down material when a rights holder files a valid notice. COPPA, FOIA, and FACTA protect different interests — children, government transparency, and credit accuracy — not digital copyright enforcement.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-FACTA-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What is a main purpose of the Fair and Accurate Credit Transactions Act (FACTA)?",
    options: [
      "Banning all employee email monitoring by employers",
      "Helping consumers fight identity theft and credit fraud",
      "Requiring parental consent for data from children under 13",
      "Forcing websites to use ENERGY STAR certified servers",
    ],
    optionRationales: [
      "FACTA does not ban workplace email monitoring; that is a separate employment-policy area.",
      null,
      "Parental consent for children’s data is COPPA, not FACTA.",
      "ENERGY STAR is a green computing program, not a credit law.",
    ],
    correct: 1,
    explanation: "## Credit and Identity\n\n**FACTA** is U.S. legislation aimed at reducing identity theft and improving the accuracy of consumer credit information. It includes rules such as consumers’ rights to fraud alerts and free annual credit reports.\n\nIt sits beside other privacy-related laws but targets credit and fraud specifically — not children’s online data (COPPA), government records (FOIA), or digital copyright (DMCA).",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-FOIA-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What does the Freedom of Information Act (FOIA) allow?",
    options: [
      "Public requests for many government records",
      "Parents to block all ads shown to children",
      "Companies to monitor employee keystrokes freely",
      "Websites to ignore copyright takedown notices",
    ],
    optionRationales: [
      null,
      "Parental control over children’s data collection is COPPA territory, not FOIA.",
      "Employee monitoring is a workplace policy issue, not what FOIA authorizes.",
      "Copyright takedown rules are under the DMCA, not FOIA.",
    ],
    correct: 0,
    explanation: "## Open Records\n\nThe **Freedom of Information Act (FOIA)** gives the public a legal path to request access to many records held by federal agencies. The goal is transparency: citizens can see how government works unless a specific exemption applies (for example, classified national security material).\n\nFOIA is about government openness. It is not a privacy law for children (COPPA), a copyright tool (DMCA), or a credit-report rule (FACTA).",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.5-PATRIOT-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.5 Information Privacy",
    q: "What was a controversial effect of the USA PATRIOT Act on digital privacy?",
    options: [
      "It banned the use of cookies in commercial browsers",
      "It forced all schools to teach green computing only",
      "It expanded government powers to monitor communications",
      "It required every website to use two-factor authentication",
    ],
    optionRationales: [
      "Cookie rules are browser and privacy-policy issues, not the core PATRIOT Act controversy.",
      "Green computing curriculum is unrelated to that statute.",
      null,
      "Two-factor authentication is a security practice, not a mandate created by that act for every site.",
    ],
    correct: 2,
    explanation: "## Expanded Surveillance Powers\n\nThe **USA PATRIOT Act**, passed after the September 11 attacks, expanded law-enforcement and intelligence tools for investigating terrorism. Critics argued that some provisions reduced privacy by making it easier to monitor communications and obtain records.\n\nIn a security unit, the point is the trade-off: stronger investigative power versus individual privacy. It is not a cookie ban, a 2FA mandate, or an education policy.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is intellectual property?",
    options: [
      "Only physical inventions registered with a patent",
      "Any file saved on a public computer lab PC",
      "Government-owned network cables",
      "Unique and original works like art and inventions",
    ],
    optionRationales: [
      "IP includes more than patented physical inventions; software, music, and writing are also IP.",
      "Mere storage location does not define intellectual property.",
      "Infrastructure ownership is not the definition of IP.",
      null,
    ],
    correct: 3,
    explanation: "## Ownership of Ideas\n\n**Intellectual property (IP)** refers to unique and original works — ideas, inventions, literary and artistic works, symbols, names, images, and designs. Copyright, trademarks, and patents are legal tools that protect IP. Just because you can right-click and save an image does not mean you own it.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is copyright?",
    options: [
      "A virus that targets music files",
      "Legal protection granting exclusive rights to creators",
      "A network protocol for file transfer",
      "A free license that allows anyone to modify software",
    ],
    optionRationales: [
      "Copyright is a legal concept, not malware.",
      null,
      "File transfer protocols move data; they are not copyright.",
      "Open licenses exist, but copyright itself is exclusive rights — not a free-for-all license.",
    ],
    correct: 1,
    explanation: "## The Creator's Rights\n\n**Copyright** gives authors and artists exclusive rights to duplicate, publish, and sell their works. Copying or distributing copyrighted material without permission can violate the law, even when it is easy to do digitally. It is the legal foundation for protecting creative work.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is green computing?",
    options: [
      "Printing every email for paper filing",
      "Using only green desktop wallpaper",
      "Practices that reduce electricity and environmental waste",
      "Mining cryptocurrency at maximum power",
    ],
    optionRationales: [
      "Printing everything increases paper waste.",
      "Wallpaper color does not define green computing.",
      null,
      "Maximum-power mining increases energy use; it works against green computing.",
    ],
    correct: 2,
    explanation: "## Environmentally Friendly\n\n**Green computing** involves reducing the electricity and environmental waste produced when using computers and related devices. Examples include energy-saving settings, responsible recycling, and turning off equipment when idle. Organizations can implement measures to reduce electrical waste, such as consolidating servers and using high-efficiency equipment.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What does Creative Commons allow creators to do?",
    options: [
      "Enforce strict copyright with no exceptions",
      "Abandon all rights to the public domain",
      "Verify users' identities before sharing work",
      "Keep copyright while allowing conditional use",
    ],
    optionRationales: [
      "Enforcing strict copyright with no exceptions is what CC exists to relax.",
      "Abandoning rights is CC0, a specific and unusually permissive option, not standard CC.",
      "Identity verification is not a function of Creative Commons.",
      null,
    ],
    correct: 3,
    explanation: "## The Middle Ground\n\n**Creative Commons** is a nonprofit organization that helps content creators keep the copyright to their materials while allowing others to use, copy, or distribute their work under specific conditions. It is a middle ground between 'all rights reserved' and 'public domain.'",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is public domain content?",
    options: [
      "Content that is publicly visible but copyrighted",
      "Content not subject to copyright and free to use",
      "Content published under a Creative Commons licence",
      "Content that only government agencies may publish",
    ],
    optionRationales: [
      "Public visibility does not waive copyright; nearly everything online is copyrighted.",
      null,
      "Creative Commons content retains copyright; public domain has none.",
      "Government publication does not automatically make content public domain.",
    ],
    correct: 1,
    explanation: "## Free for Everyone\n\n**Public domain** content is not subject to copyright. It enters the public domain when its copyright expires or when the creator waives their rights. Anyone can use it for any purpose — copy, sell, modify — without asking permission. It is the most permissive status content can have.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is a citation?",
    options: [
      "A bookmark for frequently used pages",
      "A search filter that limits results",
      "A formal reference crediting the source of information",
      "A hyperlink included in a document",
    ],
    optionRationales: [
      "A bookmark is private and local; a citation is public and academic.",
      "A search filter narrows a search; a citation credits a source.",
      null,
      "A hyperlink is clickable; a citation is a formatted reference.",
    ],
    correct: 2,
    explanation: "## Academic Credit\n\nA **citation** is a formal reference to a source, such as a published work. It gives credit to the origin of the information you used. In academic writing, citations protect you from plagiarism and let readers verify your sources.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-007",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is a bibliography?",
    options: [
      "A summary of the paper's main argument",
      "A table of contents listing sections",
      "A signature that verifies authorship",
      "An alphabetical list of citations at the end of a work",
    ],
    optionRationales: [
      "A summary is an abstract, not a bibliography.",
      "A table of contents is a navigation aid, not a bibliography.",
      "A signature verifies authorship, not sources.",
      null,
    ],
    correct: 3,
    explanation: "## The Citation List\n\nA **bibliography** is an alphabetical collection of citations that appears at the end of a work. It lists the sources you used and gives readers a way to locate them. Microsoft Word and other tools can build a bibliography automatically from the citations you enter as you write.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-008",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is the purpose of a disaster recovery plan?",
    options: [
      "To design the layout of a new office building",
      "To describe steps to restore computer operations after a disaster",
      "To market the company's products to new customers",
      "To schedule regular software updates for employees",
    ],
    optionRationales: [
      "Office layout is facility design, not disaster recovery.",
      null,
      "Marketing is a business function, not disaster recovery.",
      "Software updates are maintenance, not disaster recovery.",
    ],
    correct: 1,
    explanation: "## The Recovery Blueprint\n\nA **disaster recovery plan** is a written plan that describes the steps an organization would take to restore its computer operations in the event of a disaster. Each company and each department within an organization usually has its own. It typically contains four components: Emergency plan, Backup plan, Recovery plan, and Test plan.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-009",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What does the emergency plan in a disaster recovery plan specify?",
    options: [
      "Actions to restore full computer operations",
      "Simulations of various levels of disasters",
      "Steps organized by type of disaster",
      "The location of backup data and equipment",
    ],
    optionRationales: [
      "Restoring full operations is the recovery plan, not the emergency plan.",
      "Simulating disasters is the test plan, not the emergency plan.",
      null,
      "The location of backup data is part of the backup plan, not the emergency plan.",
    ],
    correct: 2,
    explanation: "## The First Response\n\nThe **emergency plan** specifies the steps to take immediately after a disaster and is organized by type of disaster. It includes names and phone numbers of people and organizations to notify, computer equipment procedures and employee evacuation procedures, and return procedures (who can enter the facility and what actions they are to perform).",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-010",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What does the test plan in a disaster recovery plan include?",
    options: [
      "The location of backup data and supplies",
      "The names and phone numbers of people to notify",
      "The actions to restore full computer operations",
      "Simulating disasters and recording recovery ability",
    ],
    optionRationales: [
      "The location of backup data is part of the backup plan.",
      "Contact information is part of the emergency plan.",
      "Restoring full operations is the recovery plan.",
      null,
    ],
    correct: 3,
    explanation: "## Practice Makes Perfect\n\nThe **test plan** includes simulating various levels of disasters and recording the ability to recover. It is the only way to know whether the disaster recovery plan actually works. Without testing, an organization might discover flaws in its plan only when a real disaster strikes.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-ES-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "What is the ENERGY STAR program associated with?",
    options: [
      "Auditing companies for copyright infringement",
      "Certifying energy-efficient computers and appliances",
      "Encrypting email between government agencies",
      "Blocking children’s access to social networks",
    ],
    optionRationales: [
      "Copyright audits relate to IP enforcement, not the energy program.",
      null,
      "Email encryption is a security control, not what ENERGY STAR certifies.",
      "Children’s access rules relate to COPPA and parental controls, not ENERGY STAR.",
    ],
    correct: 1,
    explanation: "## Efficient Hardware\n\n**ENERGY STAR** is a program that certifies products meeting energy-efficiency guidelines. Computers, monitors, and other office gear can carry the label when they waste less power in use and in standby.\n\nIn green computing, choosing ENERGY STAR equipment is a practical step alongside power management and responsible disposal.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.6-TC-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.6 Ethics and Intellectual Property",
    q: "How can telecommuting support green computing goals?",
    options: [
      "It removes the need for any password on remote systems",
      "It forces every company to publish its source code",
      "It can reduce commuting fuel use and office energy demand",
      "It automatically encrypts every file on a home laptop",
    ],
    optionRationales: [
      "Remote work still requires strong authentication; it does not remove passwords.",
      "Open source policy is separate from telecommuting or green computing.",
      null,
      "Encryption is a security control; telecommuting does not enable it by itself.",
    ],
    correct: 2,
    explanation: "## Less Travel, Less Waste\n\n**Telecommuting** (working remotely) can cut daily commuting and reduce the energy used to heat, cool, and light large offices. That links directly to green computing’s aim: lower the environmental cost of getting work done.\n\nIt is not a security feature and does not replace passwords, VPNs, or backups. Its green benefit is about travel and facilities, not cryptography.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.7-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.7 Backup and Recovery",
    q: "Why is backup required as a security practice?",
    options: [
      "So firewalls can be turned off safely",
      "So files can be restored after theft or system failure",
      "So the computer boots twice as fast",
      "So passwords never need to be changed",
    ],
    optionRationales: [
      "Backups do not replace the need for firewalls.",
      null,
      "Backups do not primarily exist to double boot speed.",
      "Password hygiene remains necessary regardless of backups.",
    ],
    correct: 1,
    explanation: "## The Safety Net\n\nA **backup** is a copy of files that can be restored after loss. System failure, ransomware, theft, or accidental deletion all make backups essential. Online and cloud backup services can monitor changed files and store copies off-site. Without a backup, data loss is permanent.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.7-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.7 Backup and Recovery",
    q: "What does a full backup copy?",
    options: [
      "Only files changed since yesterday",
      "Only the operating system registry",
      "All of the files on the selected drive",
      "Only email already deleted from the inbox",
    ],
    optionRationales: [
      "Only changed files describes incremental or differential strategies, not a full backup.",
      "Registry-only copies are partial and not a full backup.",
      null,
      "Deleted email is not what a full backup is defined to copy.",
    ],
    correct: 2,
    explanation: "## The Complete Copy\n\nA **full backup** copies all of the files in the selected set. It takes longer and uses more space than incremental or differential backups, but recovery can be simpler because one set contains everything needed. It is the most straightforward and reliable backup method.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.7-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.7 Backup and Recovery",
    q: "What is a differential backup?",
    options: [
      "A printout of all passwords in the organization",
      "A live video stream of the server room",
      "A mirror of another company's entire data center",
      "A copy of files changed since the last full backup",
    ],
    optionRationales: [
      "Printing passwords is a security failure, not a backup type.",
      "Video of a server room is surveillance, not file backup.",
      "Mirroring another company's data center is not the definition of differential backup.",
      null,
    ],
    correct: 3,
    explanation: "## The Middle Ground\n\nA **differential backup** copies files that have changed since the last full backup. Recovery uses the last full backup plus the latest differential. It balances storage use and restore time compared with always doing full backups. It is faster than a full backup and requires less storage space.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.7-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.7 Backup and Recovery",
    q: "What is an incremental backup?",
    options: [
      "A printout of all user activity logs",
      "A copy of files changed since the last backup of any type",
      "A full copy of every file on the entire drive",
      "A copy of only the operating system files",
    ],
    optionRationales: [
      "Printing activity logs is auditing, not backup.",
      null,
      "A full copy is a full backup, not an incremental one.",
      "Copying only the OS is a partial backup, not incremental.",
    ],
    correct: 1,
    explanation: "## The Speed Champion\n\nAn **incremental backup** copies only the files that have changed since the last full or incremental backup. It is the fastest backup method and requires minimal storage space, saving only the most recent changes. However, recovery is the most time-consuming because you need the last full backup and all incremental backups since the last full backup.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.7-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.7 Backup and Recovery",
    q: "What is a selective backup?",
    options: [
      "The system copies only files opened today",
      "The system copies files based on file extension",
      "Users choose which folders and files to include",
      "The system copies every file on the drive",
    ],
    optionRationales: [
      "Copying only files opened today is a form of incremental backup, not selective.",
      "Copying by extension is a type of filtering, not selective backup.",
      null,
      "Copying every file is a full backup, not selective.",
    ],
    correct: 2,
    explanation: "## You Choose\n\nA **selective backup** lets users choose which folders and files to include in a backup. It is a fast backup method that provides great flexibility, but it is difficult to manage individual file backups and is the least manageable of all the backup methods. It is useful for backing up specific projects rather than whole systems.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.7-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.7 Backup and Recovery",
    q: "What is continuous data protection?",
    options: [
      "Data is backed up once a week on a schedule",
      "Data is backed up only when the user remembers",
      "Data is backed up only when the system shuts down",
      "Data is backed up whenever a change is made",
    ],
    optionRationales: [
      "Weekly backups are scheduled backups, not continuous protection.",
      "User-triggered backups are manual, not continuous.",
      "Shutdown backups are event-driven, not continuous.",
      null,
    ],
    correct: 3,
    explanation: "## Real-Time Backup\n\n**Continuous data protection** backs up all data whenever a change is made. It is the only real-time backup method and offers very fast recovery of data, but it is very expensive and requires a great amount of storage. It is used in environments where data loss of even a few minutes is unacceptable.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "What is the purpose of a firewall?",
    options: [
      "To permanently delete all cookies every second",
      "To protect network resources by filtering traffic",
      "To increase the clock speed of the CPU",
      "To replace the need for passwords",
    ],
    optionRationales: [
      "Aggressive cookie deletion is a browser setting, not the firewall's defining role.",
      null,
      "Firewalls do not overclock CPUs.",
      "Firewalls complement passwords; they do not replace authentication.",
    ],
    correct: 1,
    explanation: "## The Barrier\n\nA **firewall** protects network resources from intrusion by monitoring and filtering traffic. It also restricts employees' access to sensitive data, such as payroll or personnel records. Many operating systems include firewall capabilities, and hardware firewalls often sit between a local network and the Internet.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-002",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "What is two-factor authentication (2FA)?",
    options: [
      "Using the same password on two websites",
      "Encrypting a file twice with the same key",
      "A sign-in method requiring two kinds of evidence",
      "Running two antivirus products at once",
    ],
    optionRationales: [
      "Reusing one password on two sites weakens security; it is not 2FA.",
      "Double encryption with one key is not authentication.",
      null,
      "Two antivirus tools can conflict and are not the definition of 2FA.",
    ],
    correct: 2,
    explanation: "## Double Verification\n\n**Two-factor authentication (2FA)** requires two different forms of identity evidence — typically something you know (password) plus something you have (phone or token) or something you are (biometric). It makes stolen passwords alone insufficient. It is one of the most effective safeguards against unauthorized access.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-003",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "What is a digital detox?",
    options: [
      "A mandatory factory reset of every phone",
      "A type of ransomware payment",
      "A disk utility that overwrites free space",
      "A period of refraining from using technology",
    ],
    optionRationales: [
      "Factory resets are technical procedures, not the definition of detox.",
      "Ransomware payments are extortion responses, not detox.",
      "Disk wiping is a data-sanitization technique, not a digital detox.",
      null,
    ],
    correct: 3,
    explanation: "## Unplugging\n\nA **digital detox** is a period of time during which an individual refrains from using technology. It is discussed alongside wellbeing and the social effects of constant connectivity. It is separate from technical malware removal or security practices.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-004",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "What is digital forensics?",
    options: [
      "The installation of office productivity suites",
      "The discovery and analysis of evidence on computers",
      "The design of faster graphics cards",
      "The marketing of mobile apps to teenagers",
    ],
    optionRationales: [
      "Installing office software is administration, not forensics.",
      null,
      "Graphics hardware design is engineering, not forensics.",
      "App marketing is commercial activity, not evidence analysis.",
    ],
    correct: 1,
    explanation: "## Following the Trail\n\n**Digital forensics** (cyber forensics) is the discovery, collection, and analysis of evidence found on computers and networks. A digital forensics examiner must have knowledge of the law, technical experience with many types of hardware and software products, superior communication skills, familiarity with corporate structures, and a knack for problem-solving.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-005",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "Why does digital inclusion matter in a security context?",
    options: [
      "Firewalls only work for users who speak one language",
      "Encryption is illegal in some classrooms",
      "People need fair access to technology and skills",
      "Backups are only required for administrators",
    ],
    optionRationales: [
      "Firewall function is not limited by language in the way this option claims.",
      "Classroom encryption rules vary; this is not the reason inclusivity is taught.",
      null,
      "Backups are important for users and organizations, not only administrators.",
    ],
    correct: 2,
    explanation: "## Fair Access\n\n**Digital inclusion** is the movement to ensure that all users, regardless of economic or geographic constraints, have access to the devices, data, and infrastructure required to receive high-speed, accurate, reliable information. The goal is to ensure that everyone has access to all the online resources, including education, government participation, employment listings, and health care.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-006",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "What is a barrier to digital inclusion?",
    options: [
      "Too many free Wi-Fi hot spots in cities",
      "Excessive government investment in fiber cables",
      "Overabundance of affordable devices in stores",
      "Geographic areas that lack reliable Internet access",
    ],
    optionRationales: [
      "Free Wi-Fi hot spots improve access; they are not a barrier.",
      "Government investment in fiber improves access; it is not a barrier.",
      "Affordable devices improve access; they are not a barrier.",
      null,
    ],
    correct: 3,
    explanation: "## The Barriers\n\nSome barriers to digital inclusion include geographic areas that lack the infrastructure necessary to provide reliable Internet access, government restrictions or censorship, unaffordable devices or connections, lack of education, and lack of understanding of the value of technology. Identifying these barriers is the first step toward removing them.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-BR-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "Which browser setting helps block unwanted floating advertisement windows?",
    options: [
      "A disk defragmenter",
      "A full backup schedule",
      "A pop-up blocker",
      "A password manager",
    ],
    optionRationales: [
      "Defragmenters reorganize disk layout; they do not control browser windows.",
      "Backups protect data recovery; they do not stop pop-up ads.",
      null,
      "Password managers store credentials; they do not block advertisement windows.",
    ],
    correct: 2,
    explanation: "## Closing the Extra Windows\n\nA **pop-up blocker** stops sites from opening extra windows or tabs that often carry ads or traps. Browsers also let users control cookies, scripting, and plug-ins — each setting reduces a different risk surface.\n\nPop-up control is one piece of browser hygiene alongside avoiding unknown plug-ins and reviewing cookie permissions.",
    status: "approved"
  },

  {
    id: "CS110-T2-U10-10.8-CK-001",
    mainTopic: "Unit 10: Digital Security, Ethics, and Privacy",
    topic: "10.8 Safeguards and Organizational Protection",
    q: "Why do privacy-conscious users review cookie settings in the browser?",
    options: [
      "Cookies permanently delete the operating system",
      "Cookies replace the need for HTTPS on a site",
      "Cookies force the computer to install malware",
      "Cookies can track activity across sites over time",
    ],
    optionRationales: [
      "Cookies do not wipe the operating system; they are small text files stored by the browser.",
      "HTTPS is transport encryption; cookies do not substitute for it.",
      "Cookies themselves are not malware, though they can be used in tracking ecosystems users may dislike.",
      null,
    ],
    correct: 3,
    explanation: "## Remembered Visits\n\nA **cookie** is a small text file a site stores in the browser. Some cookies keep you logged in; others help advertisers recognize you across sites.\n\nReviewing cookie settings is a privacy control: you decide how much cross-site memory third parties may keep. It is separate from antivirus, HTTPS, or firewalls.",
    status: "approved"
  }
);

// END — 315 items | positions {0: 80, 1: 81, 2: 78, 3: 76}
// Verify: node --check assets/mcq/CS110_T2.js
