// ═══════════════════════════════════════════════════════════════════════
// CS110 | T1 — LIVE DATASET
// Deploy: assets/mcq/CS110_T1.js
// Format: window.__MCQ__["CS110_T1"]
//
// Units 1–6 · 447 items
// QA: position balance, rationale nulls, KaTeX normalized, factual fixes
// Source-dependence pass: Class 1 pointers removed (no "the source",
// Listing/Exercise/Appendix references). Self-contained teaching only.
// ═══════════════════════════════════════════════════════════════════════

window.__MCQ__ = window.__MCQ__ || {};
window.__MCQ__["CS110_T1"] = window.__MCQ__["CS110_T1"] || [];
window.__MCQ__["CS110_T1"].push(
  // ═══════════════════════════════════════════════════════
  //  UNIT 1 · BEING A DIGITAL CITIZEN  (40 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T1-U1-1.1-001",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "Which of the following is one of the four actions a computer performs on data?",
    options: [
      "Processing data according to a specified set of rules",
      "Transmitting data to another computer over a network",
      "Encrypting a file so that only its owner can open it",
      "Compressing a file to reduce the space it occupies",
    ],
    optionRationales: [
      null,
      "Transmission feels central because almost every modern computer is networked. But transmission is a communication capability, not one of the four core actions. The four actions describe what happens to data inside the machine, not how it leaves.",
      "Encryption feels like a core action because it appears everywhere in modern computing. But encryption is software running on top of the computer — it is not one of the four actions the machine itself performs. The four actions describe what happens to every piece of data, not what some applications choose to do with it.",
      "Compression feels fundamental because computers use it constantly to save space. But compression is a technique built on top of storage, not one of the four actions. The four actions are the lifecycle every piece of data goes through, regardless of what software is running.",
    ],
    correct: 0,
    explanation: "## Four Actions, One Cycle\n\nEvery computer, from a pocket calculator to a data-centre server, performs the same four actions on data: **input**, **process**, **output**, and **storage**. Data enters as input, the processor transforms it according to rules, the result is presented as output, and the result is held for later use as storage.\n\nA calculator is the simplest example. Typing 100 × 48 is input. Multiplying is processing. Seeing 4800 is output. Keeping 4800 available for the next calculation is storage.\n\nThe four actions are not optional features. They are the definition of what a computer is — every application is built by combining these four actions in different ways.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-002",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "What is the difference between data and information?",
    options: [
      "Data is stored on disk; information is stored in memory",
      "Data is what a user types; information is what a program shows",
      "Data is always numeric; information is always textual",
      "Data is raw and unprocessed; information is the processed result",
    ],
    optionRationales: [
      "This feels right because storage feels permanent and memory feels active. But the data/information distinction has nothing to do with where the values live. Both data and information can be stored or held in memory — the difference is whether the value has been processed.",
      "This feels right because users typically see data as input and information as output. But a program can display raw data (a table of unprocessed numbers) and can store processed information (a summary report). The distinction is about processing, not about who is looking.",
      "This feels right because numbers are the first thing people think of as data. But data includes text, images, audio, and video, and information can be numeric — a sales total is information. The distinction is about processing, not about the type of content.",
      null,
    ],
    correct: 3,
    explanation: "## Raw and Refined\n\n**Data** is a collection of unprocessed items — text, numbers, images, audio, video. **Information** is what comes out after the computer processes data according to rules. A spreadsheet full of sales figures is data. A chart showing the monthly total is information.\n\nThe distinction matters because the two have different value. Data alone does not answer questions; information does. When a report is described as 'data-driven,' what is usually meant is that raw data has been processed into information a decision-maker can act on.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-003",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "Why is software required for a computer to do useful work?",
    options: [
      "It increases the physical storage capacity of the drive",
      "It connects the computer to the Internet",
      "It contains the instructions the processor executes",
      "It provides electrical power to the processor",
    ],
    optionRationales: [
      "Software feels tied to capacity because installing more programs fills the drive. But the drive's physical size is fixed by its hardware. Software consumes capacity, but it cannot create it.",
      "Software feels tied to connectivity because many programs use the Internet. But a computer can run software without any network connection — a spreadsheet or a word processor works offline. Connectivity is optional; instructions are not.",
      null,
      "Software feels electrical because code is often described in terms of speed and efficiency. But power comes from the supply, not the program. Software cannot make a computer run without electricity — the two are independent.",
    ],
    correct: 2,
    explanation: "## The Instructions\n\nHardware alone does nothing. A processor is a piece of silicon with no purpose until it has instructions telling it what to compute. **Software** is the set of coded instructions that tell the processor what tasks to perform.\n\nThe same hardware behaves completely differently depending on which software is loaded. A laptop running a word processor is a writing tool. The same laptop running a video editor is a film studio. The hardware did not change — the instructions did.\n\nThis is why the phrase 'software, program, and app' are used interchangeably. Each names the same thing: a set of instructions organized for a common purpose.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-004",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "Which of the following best describes a computer?",
    options: [
      "A machine that stores files without processing them",
      "A device that executes instructions held in memory",
      "A network that links devices to share resources",
      "A program that organizes data for later retrieval",
    ],
    optionRationales: [
      "Storage feels like the defining feature because files persist on a computer and are what most people interact with. But storage alone does not compute — a filing cabinet stores files without processing them. What makes a computer a computer is that it acts on data, not that it retains it.",
      null,
      "A network feels like a computer when you are working across connected machines — the whole system responds to you. But a network is what links computers together, not what a single computer is. The two are related but not the same.",
      "Software feels like the whole computer when you are using it — the interface, the menus, the windows are all you see. But software is a set of instructions; the computer is the hardware that runs them. The hardware and the software are distinct even when they work together seamlessly.",
    ],
    correct: 1,
    explanation: "## What Makes a Computer\n\nA computer is an electronic device that operates under the control of instructions stored in its memory. It accepts data, processes it, produces information, and can store both the data and the results. Those four actions — input, process, output, storage — are what separate a computer from every other machine.\n\nThe phrase 'held in memory' matters. If the instructions were not in memory, the processor would have nothing to read. A printer is a machine that has no such instructions — it repeats a fixed mechanical action. A computer's behaviour changes because its instructions change.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-005",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "In the definition of a computer, what is memory?",
    options: [
      "The hardware that stores files on disk",
      "The hardware that links computers to networks",
      "The hardware that holds data and instructions",
      "The software that organizes files into folders",
    ],
    optionRationales: [
      "Storage and memory feel identical because both hold data, and everyday language often blurs them. But storage keeps files across sessions; memory holds instructions and data only while the processor is working. The dividing line is what happens when power is removed — storage retains, memory does not.",
      "Networks feel like memory when the computer is fetching data from the cloud. But a network connection is a channel; memory is a location. Data that lives on a remote server is not in the computer's memory until it is downloaded.",
      null,
      "A file manager feels like memory when you can see everything in one place. But software organizes; memory holds. The file manager is a program that reads and writes memory — it is not itself the memory.",
    ],
    correct: 2,
    explanation: "## Where the Processor Reads\n\n**Memory** is the electronic components that hold instructions waiting to be executed, the data those instructions need, and the results of processing. It is the workspace the processor reads from and writes to in real time.\n\nMemory is fast and volatile. Fast, because the processor accesses it directly. Volatile, because the contents disappear the moment power is removed. That is why unsaved work is lost when a computer crashes — the memory holding it is cleared the instant electricity stops flowing.\n\nEverything the computer is currently doing — the operating system, every open app, the document you are typing — lives in memory. Everything else lives in storage until it is opened.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-006",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "What is the Internet?",
    options: [
      "A program that displays web pages",
      "A protocol that encrypts network data",
      "A network that links computers worldwide",
      "A server that stores every website",
    ],
    optionRationales: [
      "This feels right because browsing the web is what most people do online. But the web is one service that runs on the Internet; the Internet itself carries email, video calls, file transfers, and much else. The web is smaller than the Internet.",
      "This feels right because encryption is everywhere on the Internet — the lock icon in the address bar is familiar. But encryption secures some traffic; the Internet carries traffic whether it is encrypted or not. Encryption is a feature, not the network.",
      null,
      "This feels right because when a website is slow, it feels like one overloaded machine is struggling. But the Internet has no single machine — it is a network of networks, each contributing resources. No one owns it and no one server holds it.",
    ],
    correct: 2,
    explanation: "## The Network of Networks\n\nThe Internet is a global collection of millions of computers linked together to share information. Each network on the Internet contributes its own resources — servers, cables, and connections — which is why no single owner controls it.\n\nThe word 'Internet' comes from *interconnected networks*. Each participating network is independent; the Internet is the agreement that lets them exchange data. When you load a page hosted in another country, the request passes through many networks before it arrives.\n\nThe scale is what makes the Internet different from any earlier communication system. Phone networks connect people; the Internet connects every participating computer to every other, and the number keeps growing.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-007",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "What is a network?",
    options: [
      "A group of computers sharing resources",
      "A cable that connects two computers",
      "A program that manages file transfers",
      "A server storing backups for users",
    ],
    optionRationales: [
      null,
      "A cable feels like the network itself because cables are what you see. But the cable is only one way to connect computers — the network is the connection, whether it uses cables, radio waves, or fibre. The medium is part of the network; it is not the whole network.",
      "Transfer software feels like the network because it is what you interact with when moving files. But software runs on connected computers; the network is what connects them. The tool and the infrastructure are different things.",
      "A server feels like the network when everyone in the office shares the same files. But the server is one computer; the network is the collection of computers it serves. The server is a member of the network, not the network itself.",
    ],
    correct: 0,
    explanation: "## Two or More, Sharing\n\nA **network** is a collection of two or more computers connected to share resources. The connection can be wired, wireless, or a mix. The purpose is sharing — files, printers, an Internet connection, or processing power.\n\nEven two laptops joined by a single cable form a network. The definition has no minimum size beyond two, because the concept is about the relationship, not the scale.\n\nNetworks matter because resources become more useful when shared. A single printer serves a whole office. A single Internet connection serves every device in a home. The value of the network is what it lets its members do together that they cannot do alone.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-008",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "What is Wi-Fi?",
    options: [
      "A protocol that encrypts email messages",
      "A service that stores files online",
      "A network that connects devices wirelessly",
      "A cable that connects devices physically",
    ],
    optionRationales: [
      "Encryption feels tied to Wi-Fi because Wi-Fi networks are protected by passwords. But the password protects the wireless link; encryption of messages is a separate layer that runs on top of the connection. A secure email sent over an insecure Wi-Fi network is still secure.",
      "Cloud storage feels tied to Wi-Fi because most people use cloud services over wireless. But cloud storage is a service that runs on the Internet; Wi-Fi is only one way to reach it. The same cloud service works over a wired connection.",
      null,
      "Ethernet and Wi-Fi feel like the same thing to most users because both deliver an Internet connection. But Ethernet uses physical cables and Wi-Fi uses radio waves. The two are alternatives, not synonyms — the medium is the difference.",
    ],
    correct: 2,
    explanation: "## Wireless Fidelity\n\nWi-Fi is a wireless data network technology that provides high-speed connections without cables. It works by transmitting data over radio waves between a device and a wireless access point.\n\nWi-Fi is not attached to any single device. The same Wi-Fi network serves phones, laptops, tablets, printers, and smart-home devices. This is what makes Wi-Fi different from Bluetooth — Bluetooth pairs two specific devices, while Wi-Fi broadcasts to every device that has the key.\n\nThe name is short for *wireless fidelity*, and it identifies any network built on the IEEE 802.11 family of standards. Every device that supports 802.11 can join a Wi-Fi network, regardless of manufacturer.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-009",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "What is the primary role of a server?",
    options: [
      "Supplying electrical power to network devices",
      "Managing the layout of physical server racks",
      "Filtering incoming traffic for security risks",
      "Storing files and making them available to clients",
    ],
    optionRationales: [
      "Power equipment feels central because every server needs electricity. But power distribution is a facility function; the server is the computer. A building full of power supplies with no servers is not a data centre.",
      "Racks feel central because they are what you see in a data-centre photo. But racks are furniture that holds servers; the server is the computing machine. The container and the contents are different things.",
      "A firewall feels central because both guard the network. But a firewall inspects traffic; a server stores and serves content. The two often sit side by side in a data centre, but they perform different jobs.",
      null,
    ],
    correct: 3,
    explanation: "## The File Keeper\n\nA **server** is a powerful, high-capacity computer that stores files and makes them available to other computers on request. It runs continuously so that clients — desktop computers, phones, tablets — can access its resources at any time.\n\nThe word 'serve' is the point. A desktop computer runs software for one user. A server runs software for many users at once, and the design choices that make it powerful — redundant power supplies, fast network cards, large storage arrays — exist to support that role.\n\nMost servers live in data centres, buildings that provide power, cooling, and connectivity at industrial scale. When a company says its service is 'in the cloud,' what it means is that the service is running on servers in one of these buildings.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-010",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "What is an online social network?",
    options: [
      "A website that sells products to buyers",
      "A community where registered users share content",
      "A database that stores user login data",
      "A service that encrypts private messages",
    ],
    optionRationales: [
      "E-commerce and social networks feel similar because both are online platforms with users and content. But e-commerce exists to sell products; social networks exist to connect people. The distinction is the purpose, not the platform.",
      null,
      "An authentication system feels like the whole social network when you are logging in. But authentication is a gate; the network is what lies behind it. The login and the community are separate layers.",
      "Encrypted messaging feels like a social network because many platforms include both. But messaging is one-to-one, and social networks are many-to-many. The two features often coexist inside one app, but they are different communication models.",
    ],
    correct: 1,
    explanation: "## Registered Community\n\nAn **online social network** is a community where registered users share interests, ideas, stories, photos, music, and videos with one another. Facebook, Instagram, and Twitter are examples.\n\nRegistration is the gate. A public website can be read by anyone; a social network requires you to create an account and choose what to share. That requirement is what defines the category — it is why the community forms around identities rather than around documents.\n\nThe word 'social' in the name matters. The value of a social network is not the content alone but the connections between the people who post it. A blog and a social network can hold identical posts, but only the social network makes the relationships between posters part of the product.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.1-011",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.1 How Technology Impacts You",
    q: "What is a data centre?",
    options: [
      "A service that translates file formats",
      "A secure location where many servers reside",
      "A program that organizes data by topic",
      "A network used inside public buildings",
    ],
    optionRationales: [
      "A file converter feels like infrastructure when it processes requests. But a converter is software running on a server; the data centre is where that server lives. The service and the facility are separate layers.",
      null,
      "A database feels like a data centre because both organize data. But a database is software running on a server; the data centre is the building where the server sits. Program and place are different things.",
      "A public Wi-Fi network feels like infrastructure, and it is — but a data centre is a private facility with industrial power and cooling, not a public access point. Both are infrastructure, but only one houses servers at scale.",
    ],
    correct: 1,
    explanation: "## Where the Servers Live\n\nA **data centre** is the physical facility where servers are grouped together. It provides the power, cooling, and network connectivity that servers need to run without interruption.\n\nThe design problem a data centre solves is scale. A single server can run in an office, but a thousand servers running at once generate heat that will melt ordinary air conditioning and draw electricity that will trip ordinary circuits. Data centres exist to solve these problems with industrial-grade infrastructure.\n\nThe phrase 'in the cloud' hides this reality. When a service is described as cloud-based, the servers are still physical machines, sitting in buildings, drawing power from the same grid as everything else. The cloud is a convenience name for a very physical facility.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-001",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "Which electronic component replaced the vacuum tube in the second generation of computers?",
    options: [
      "The transistor",
      "The integrated circuit",
      "The microprocessor",
      "The magnetic core",
    ],
    optionRationales: [
      null,
      "Integrated circuits came in the third generation. They combined many transistors on a single chip, which made computers smaller and cheaper — but the transistor itself came first, and the IC is built from transistors.",
      "The microprocessor came decades later, in the fourth generation. It placed an entire processor on a single chip, which is a further refinement of the integrated circuit, not a replacement for the vacuum tube.",
      "Magnetic core memory was a storage technology, not a switching element. It stored bits as magnetized rings, but it did not replace the vacuum tube — it coexisted with transistors in early machines.",
    ],
    correct: 0,
    explanation: "## Smaller, Cooler, Faster\n\nThe second generation of computers replaced **vacuum tubes** with **transistors**. A vacuum tube is a glass cylinder that controls electron flow by heating a filament; a transistor does the same job in a piece of solid semiconductor material with no filament to burn out.\n\nThe practical consequences were enormous. Transistors were smaller, cooler, and more reliable. A machine that had filled a room could now fit in a cabinet. The failure rate dropped because there was no filament to burn through.\n\nThe transistor is the reason computing could scale. Every processor made today contains billions of them. The vacuum tube was the technology of the first generation; the transistor is the technology that made every subsequent generation possible.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-002",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What technology defined the third generation of computers?",
    options: [
      "Liquid crystal displays",
      "Vacuum tubes",
      "Integrated circuits",
      "Magnetic tape",
    ],
    optionRationales: [
      "Liquid crystal displays are a display technology that became common much later, in portable devices. They are not a computer generation marker — they describe how output is shown, not how the machine computes.",
      "Vacuum tubes were the first generation. By the time integrated circuits appeared, the tube had been obsolete for years. Both are early computing technologies, but only one defined the third generation.",
      null,
      "Magnetic tape was a storage medium, not a switching technology. It was used to hold data across generations, but it did not define any single generation of computer design.",
    ],
    correct: 2,
    explanation: "## Many Transistors, One Chip\n\nThe third generation of computers was defined by the **integrated circuit** — a complete circuit etched onto a single piece of silicon. Instead of wiring thousands of separate transistors by hand, engineers could place them all on one chip.\n\nThe change was not just miniaturisation. When components are built together on the same chip, they are faster to signal between and cheaper to manufacture at scale. A computer that once required a room of hand-soldered wiring could now be assembled from a handful of chips.\n\nThe integrated circuit is what made personal computing possible. Without it, the cost and size of a computer would never have fallen far enough to place one on a desk.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-003",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "Which generation of computers introduced the microprocessor?",
    options: [
      "First generation",
      "Second generation",
      "Third generation",
      "Fourth generation",
    ],
    optionRationales: [
      "The first generation used vacuum tubes. A microprocessor would have been inconceivable — the tube alone was larger than an entire modern processor.",
      "The second generation used transistors. A processor of that era was built from many separate transistors wired together, not from a single chip.",
      "The third generation used integrated circuits, which combined many transistors on one chip. The microprocessor is the next step — placing an entire processor on a single chip.",
      null,
    ],
    correct: 3,
    explanation: "## A Processor on a Chip\n\nThe **fourth generation** of computers introduced the **microprocessor** — a complete central processing unit on a single chip. Where earlier processors spread across circuit boards, the microprocessor was one piece of silicon.\n\nThe shift was not just technical; it was cultural. A single chip that could handle all the processing meant computers could be built by anyone with basic assembly skills. The result was the personal computer, and later the smartphone, the game console, and the embedded processors in cars and appliances.\n\nEvery computer you use today is a descendant of the microprocessor. The chip that was a novelty in the fourth generation is now the default form of the processor — a machine with no microprocessor is the exception rather than the rule.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-004",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What technology did the first generation of electronic computers use to control electron flow?",
    options: [
      "Integrated circuits assembled onto circuit boards",
      "Microscopic transistors printed on silicon chips",
      "Cylindrical glass vacuum tubes controlling electrons",
      "Magnetic tape reels storing binary data",
    ],
    optionRationales: [
      "Integrated circuits came later, in the third generation. They combined many transistors onto one chip — but the transistor itself was the second-generation replacement for the tube, and the IC was the third-generation replacement for discrete transistors.",
      "Transistors feel primitive because they are older than integrated circuits. But transistors did not exist at the dawn of electronic computing — the transistor was invented in 1947, after the first generation was built.",
      null,
      "Magnetic tape is a storage medium, not a switching element. Tape holds data across sessions, but it does not control the flow of electrons inside the processor. Both belong to early computing, but only one is the technology that defined the first generation.",
    ],
    correct: 2,
    explanation: "## Hot Glass\n\nThe first generation of electronic computers used **vacuum tubes** — cylindrical glass tubes that controlled the flow of electrons by heating a filament. ENIAC and UNIVAC are the famous machines of this era.\n\nThe design had four consequences that limited every machine of this generation: the tubes were large, they consumed enormous power, they generated substantial heat, and they burned out quickly. A machine with thousands of tubes could fail multiple times a day, and each failure meant locating the dead tube and swapping it out.\n\nThe vacuum tube era ended because the transistor solved all four problems at once. But the first generation is still the era that proved electronic computing was possible — ENIAC demonstrated that a machine could perform calculations no human team could match.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-005",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What does the acronym ENIAC stand for?",
    options: [
      "Electronic Numerical Integrator and Computer",
      "Extended Networked Integrated Analog Computer",
      "Electromechanical Number Input and Calculation",
      "Electronic Numeric Integrated and Automatic Computer",
    ],
    optionRationales: [
      null,
      "This expansion sounds plausible because it contains real computing words. But ENIAC was not an analog machine — it was one of the first electronic *digital* computers, which was the breakthrough that made it different from the analog machines that preceded it.",
      "This expansion sounds plausible because electromechanical machines existed before ENIAC. But ENIAC was designed to replace electromechanical computing, not to be described by it. The word 'electromechanical' belongs to an earlier era, not to ENIAC itself.",
      "This expansion sounds plausible because it contains real computing words. But ENIAC's actual name does not include 'integrated' — the integrated circuit did not exist at the time ENIAC was built. A fabricated expansion is not made true by sounding technical.",
    ],
    correct: 0,
    explanation: "## The Giant Brain\n\n**ENIAC** stands for **Electronic Numerical Integrator and Computer**. It was one of the first electronic digital computers, built with thousands of vacuum tubes, and it filled an entire room.\n\nThe word *integrator* in the name refers to the machine's original purpose — calculating artillery firing tables for the US Army. The word *electronic* marks the real innovation: ENIAC did its work with tubes rather than with mechanical relays, which made it roughly a thousand times faster than the electromechanical machines that preceded it.\n\nIts ability to be reprogrammed — to load a new set of instructions and solve a different problem — is what makes ENIAC a milestone. Before ENIAC, computing machines were built to solve one problem. After ENIAC, the machine was general and the instructions were the specific part.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-006",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What does the acronym UNIVAC stand for?",
    options: [
      "United National Industry and Variable Analytics Computer",
      "Universal Automatic Computer",
      "Unified Numerical Integrated Variable Analog Computer",
      "Universal Network Interface and Voice Access Console",
    ],
    optionRationales: [
      "This expansion invents a connection to industry and analytics that does not exist in the historical name. UNIVAC was named for its universality, not for its users.",
      null,
      "This expansion contains plausible-sounding but invented terms. UNIVAC's name is shorter and simpler than this. The word 'analog' is particularly wrong — UNIVAC was a digital machine.",
      "This expansion borrows modern words like 'network' and 'console' that did not exist in 1951, when UNIVAC was introduced. A historical name is unlikely to contain terms from the future.",
    ],
    correct: 1,
    explanation: "## The First Commercial\n\n**UNIVAC** stands for **Universal Automatic Computer**. It was one of the first commercial computers available in the United States, sold to government and business for data processing rather than to research institutions for experimentation.\n\nThe word *universal* in the name captures the key idea. Previous machines were built for specific tasks. UNIVAC was designed to run many kinds of applications — payroll, inventory, accounting — by loading different programs. This is the same design philosophy every general-purpose computer follows today.\n\nUNIVAC used vacuum tubes, like ENIAC. But its significance is not the technology; it is the business model. UNIVAC proved that computers were products a company could buy and use, not machines only a government could afford to build.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-007",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "Which of the following was NOT one of the limiting factors of first-generation computers?",
    options: [
      "Their large size that filled entire rooms",
      "Their dependence on the Internet to function",
      "The large amount of power they consumed",
      "The heat they generated during operation",
    ],
    optionRationales: [
      "Large size was a real limitation. First-generation machines filled rooms and required special facilities to house them. This is not the excluded item.",
      null,
      "High power consumption was a real limitation. Vacuum-tube machines drew enormous electricity. This is not the excluded item.",
      "Heat generation was a real limitation. Vacuum tubes ran hot and required cooling. This is not the excluded item.",
    ],
    correct: 1,
    explanation: "## Before the Network\n\nFirst-generation computers were limited by four things: their size, their power consumption, their heat output, and their tendency to wear out quickly.\n\nThey did not depend on the Internet, because the Internet did not exist. The ARPANET, the direct ancestor of the Internet, was not built until 1969 — nearly two decades after UNIVAC. A first-generation computer would have had no network to depend on even if it had been designed to use one.\n\nThe reason this matters is not trivia. The absence of networking changed how these machines were used. Data had to be carried in on punched cards or tape, and results had to be carried out the same way. The idea of sending a file across a network is a second-generation concept, not a first-generation one.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-008",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What did Steve Jobs and Steve Wozniak introduce in 1978 through Apple Computer Corporation?",
    options: [
      "The Apple II, a preassembled computer",
      "The UNIX system for personal computers",
      "The first spreadsheet for business users",
      "The first mobile phone for consumers",
    ],
    optionRationales: [
      null,
      "UNIX came from Bell Labs and was not associated with Apple. It is a widely influential operating system, but it was not the Apple II and was not created by Jobs or Wozniak.",
      "VisiCalc was the first spreadsheet, and it ran on the Apple II — but VisiCalc was developed by Dan Bricklin and Bob Frankston at a different company. Software and hardware are separate products even when they ship together.",
      "Apple did not produce a mobile phone until 2007, nearly thirty years later. Jobs was involved in both eras, but the two products are decades apart and are not the same announcement.",
    ],
    correct: 0,
    explanation: "## The Popular Machine\n\nIn 1978, Steve Jobs and Steve Wozniak introduced the **Apple II**, a preassembled personal computer with colour graphics and a spreadsheet application called VisiCalc.\n\nThe word *preassembled* is the reason the Apple II mattered. Earlier personal computers, like the Altair 8800, were sold as kits that hobbyists had to solder together themselves. The Apple II came ready to plug in and use, which opened computing to people who wanted a tool rather than a project.\n\nThe Apple II is a landmark not because it was the most powerful computer of its time — it was not — but because it was the first widely successful personal computer that ordinary buyers could use without engineering skills. That shift is what turned computing into a consumer product.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-009",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What is the Internet of Things (IoT)?",
    options: [
      "A program for tracking Internet usage patterns",
      "A world where everyday objects have network chips",
      "A group of cloud servers storing media files",
      "A network of web pages linked by hyperlinks",
    ],
    optionRationales: [
      "Usage tracking feels like IoT because both deal with connected devices. But tracking software observes what users do; IoT embeds processors in the things themselves. Observation is passive; IoT is embedded.",
      null,
      "Cloud storage feels like IoT because both are described as 'in the cloud.' But cloud storage holds files; IoT generates data from physical sensors. Storage is passive infrastructure; IoT is active sensing.",
      "The World Wide Web and IoT both involve networks, and the two names sound similar. But the Web links documents; IoT links physical objects. A webpage is not a thing — it is content that lives on a thing.",
    ],
    correct: 1,
    explanation: "## Things That Think\n\nThe **Internet of Things** is an environment in which processors are embedded in ordinary products — thermostats, watches, cars, washing machines — and those products communicate with one another over the Internet or a wireless network.\n\nThe word *things* is doing real work in the name. The IoT is not about people browsing the Web or reading email. It is about physical objects that have their own network connections, their own processors, and their own reason for existing — which is often unrelated to computing at all.\n\nIoT devices are usually described as *smart* because they do three things ordinary objects cannot: they **communicate** with other devices or with a user, they **locate** themselves in space and time, and they **predict** what will happen next. A smart thermostat communicates with your phone, knows where you are, and predicts when you will want heat. Each of those three abilities is what makes it more than a thermostat.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-010",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "Why are IoT-enabled devices often called smart devices?",
    options: [
      "Because they can communicate, locate, and predict",
      "Because they run faster than traditional computers",
      "Because they operate without any electrical power",
      "Because they have human-level artificial intelligence",
    ],
    optionRationales: [
      null,
      "Speed feels like a reasonable measure of smartness because fast devices feel responsive. But a fast device without connectivity is still not an IoT device. The 'smart' label is about what the device can do on a network, not how quickly it processes.",
      "Power-free operation feels like a feature people want, but no electronic device runs without power. Batteries and wall current are both electricity. Even the smallest IoT sensor draws power from somewhere.",
      "Human-level AI feels like what 'smart' should mean, but the intelligence in IoT devices is narrow and purpose-built. A smart lightbulb does not reason; it follows rules. The word 'smart' in the IoT sense describes specific capabilities, not general intelligence.",
    ],
    correct: 0,
    explanation: "## Three Abilities\n\nIoT devices are called *smart* because of three capabilities: they can **communicate** (with other devices, with apps, with the user), they can **locate** (know where they are in space and time), and they can **predict** (anticipate what the user or the environment will need).\n\nA smart thermostat is the classic example. It communicates with your phone. It locates your position, so it knows whether you are home. It predicts when you will want the house warm, based on your past behaviour. Each capability depends on the others — prediction requires location, location requires sensing, sensing requires communication.\n\nThe three abilities are what separate an IoT device from a *connected* device. A washing machine with Wi-Fi that only reports what it is doing is connected, but not smart. A washing machine that starts itself when energy prices drop is smart, because all three abilities are in play.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-011",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What is an embedded computer?",
    options: [
      "A desktop used by professional developers",
      "A server that stores files for a network",
      "A handheld device that fits in the palm",
      "A computer built into a larger product",
    ],
    optionRationales: [
      "Developer workstations feel like embedded computers because they are powerful and specialized. But a workstation is a general-purpose machine; an embedded computer serves one function inside a larger product. The two are the opposite ends of the same spectrum.",
      "Servers feel like embedded computers because both are hidden from the user. But a server exists to serve other computers; an embedded computer exists to make its host product work. Their purpose is different even if both are invisible.",
      "Handheld devices feel embedded because they are small. But small size is not the defining feature of an embedded computer. The defining feature is that the computer is one component of a larger product, not a standalone device.",
      null,
    ],
    correct: 3,
    explanation: "## Hidden Inside\n\nAn **embedded computer** is a computer that functions as one component in a larger product. It has a specific purpose and it exists to make its host product work — not to compute in general.\n\nYour car contains dozens of embedded computers. The fuel-injection controller, the anti-lock brake controller, the airbag trigger, and the radio are all separate computers with their own processors. Each one is programmed to do one job, and none of them are usable outside the product they were built into.\n\nThe word *embedded* is literal. These computers are embedded in the objects around us — microwaves, washing machines, thermostats, thermometers, toys, medical devices. They are the most common kind of computer in the world. Every general-purpose laptop you have ever used is outnumbered by the embedded computers in the room around you.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-012",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What is a kiosk in the context of IoT?",
    options: [
      "A service that stores medical records",
      "A program for managing online accounts",
      "A network used inside shopping malls",
      "A booth placed in a public area",
    ],
    optionRationales: [
      "Medical records feel like a kiosk because patient information flows through hospital check-in systems. But records are data; the kiosk is the machine you use to access them. The data and the interface are separate.",
      "Account software feels like a kiosk when the interface on the screen is what you see. But the app runs on the kiosk; the kiosk is the physical structure. The software and the machine are different layers.",
      "Wi-Fi feels like a kiosk when the network is what connects you to the service. But the network is invisible; a kiosk is a physical object in a specific place. The two cooperate but are not the same.",
      null,
    ],
    correct: 3,
    explanation: "## On the Street\n\nA **kiosk** is a freestanding booth placed in a public area. Automated teller machines (ATMs) are the most familiar example, but the category includes self-checkout stations, ticketing machines, and information points at airports and malls.\n\nA kiosk combines three things: an embedded computer, a network connection, and a fixed physical location. The computer lets the machine do a specific job. The network lets it reach a central system. The location makes it available to a specific public — the customers of a bank, the passengers at a station.\n\nKiosks were among the earliest successful IoT deployments because they solved a specific problem. An ATM is not a general-purpose computer; it is a machine that does two things — dispenses cash and accepts deposits — and it does them in public places where a human teller cannot be present at every hour. The design is narrow on purpose.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-013",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "Which of the following is an example of IoT used to manage a home remotely?",
    options: [
      "Editing a spreadsheet at the office",
      "Reading an ebook on a tablet while travelling",
      "Sending an email about a work project",
      "Starting the washing machine from a phone",
    ],
    optionRationales: [
      "Editing a spreadsheet feels like remote productivity, but the file lives in software and produces no physical effect. IoT is about affecting the world outside the screen.",
      "Reading a book feels like remote use because the tablet is portable. But the activity is one-way — the tablet shows content to the user and does not act on the physical world. IoT is defined by remote control of physical devices.",
      "Email feels like a remote action because the message travels to a distant device. But the result is a message, not a change to a physical object. IoT actions change the state of real-world things.",
      null,
    ],
    correct: 3,
    explanation: "## Home from Anywhere\n\nOne of the most direct IoT use cases is managing a home remotely. Starting the washing machine from a phone is the classic example, because the action changes the state of a physical appliance from a distance.\n\nThe same pattern covers every home device that can be controlled over a network: adjusting the thermostat, viewing a security camera, locking a door, turning off a light. In each case, a command travels from a phone to a device in the house, and the device acts on the physical world.\n\nWhat separates these from ordinary app use is the *loop closure*. The phone does not just display information — it triggers something that happens in the real world and confirms the result. That is what makes a home IoT and not just a home with Wi-Fi.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-014",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "What is the digital divide?",
    options: [
      "The gap between users and data centres",
      "The gap between technology haves and have-nots",
      "The gap between personal and workplace devices",
      "The gap between wired and wireless networks",
    ],
    optionRationales: [
      "Users and data centres are at opposite ends of a service chain, not on opposite sides of a divide. The digital divide is about people, not about layers of infrastructure.",
      null,
      "A personal/workplace split feels like a divide because the two use different devices and rules. But the digital divide is not about which category of device someone uses — it is about whether they have access at all. The distinction is between inclusion and exclusion.",
      "Wired/wireless is a technical difference, not a social one. Both kinds of network provide access; the divide concerns who is on either side of the connection, not which technology they use.",
    ],
    correct: 1,
    explanation: "## Who Gets Access\n\nThe **digital divide** is the gap between people who have access to technology and the resources it provides and people who do not. It is usually discussed in terms of Internet access, because the Internet is where the modern economy increasingly operates.\n\nThe word *divide* matters more than the word *digital*. This is a social gap that happens to run along technological lines. The factors that push people to one side or the other — age, income, location, education — are the same factors that shape economic opportunity in general.\n\nThe divide is not one problem but many. A retired person in a city with money and no computer faces a different barrier from a rural student with a phone but no reliable signal. Both are on the wrong side of the divide, but the interventions that would help them are different.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-015",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "Which factors contribute to the digital divide?",
    options: [
      "The speed of a person's Wi-Fi router",
      "The brand of computer a person prefers",
      "The operating system on a device",
      "A person's age and where they live",
    ],
    optionRationales: [
      "Router speed measures the quality of a connection that already exists. The digital divide concerns whether a connection exists. A fast router is a symptom of access, not a factor in it.",
      "Brand preference is a choice among options that are already available. The digital divide concerns who has options in the first place. Preference matters only to people who are already on the right side of the divide.",
      "Operating system choice is a decision made by someone who already owns a device. It reflects what is available to a user, not whether anything is available at all.",
      null,
    ],
    correct: 3,
    explanation: "## Structural Causes\n\nFour factors contribute most to the digital divide: **age**, **income**, **location**, and **education**. These are the same factors that shape access to almost every resource in a modern economy, which is why the divide is usually described as a structural problem rather than a matter of individual choice.\n\nThe factors compound. An older person in a rural area with limited income and no formal education faces four barriers at once. Each barrier reduces the impact of the others; fixing one does not fix the rest. This is what makes the divide resistant to simple interventions like distributing devices.\n\nUnderstanding the causes matters because the fixes depend on them. Programs that assume the divide is a matter of preference — 'why don't people just buy computers?' — fail because they do not address any of the four underlying factors. Programs that address income, or location, or training, or the needs of older users are the ones that move the needle.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.2-016",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.2 How Technology Impacts Society",
    q: "Which of the following is an IoT application in healthcare?",
    options: [
      "A printed handbook given out at admission",
      "A paper prescription written out by hand",
      "A wearable monitor linked to a provider",
      "A handwritten note in a filing cabinet",
    ],
    optionRationales: [
      "Printed handbooks convey information in one direction and are static once issued. IoT devices transmit data continuously and in both directions.",
      "Paper prescriptions travel physically from clinic to pharmacy. IoT-connected prescribing sends the update over a network in seconds. Only one of these uses the digital infrastructure that IoT describes.",
      null,
      "Paper records are the opposite of IoT — offline, physical, and inaccessible to any network. The contrast is useful, but paper is the thing IoT replaces, not an example of it.",
    ],
    correct: 2,
    explanation: "## Connected Care\n\nA wearable monitor linked to a healthcare provider is a direct IoT application. The device measures a vital sign — blood pressure, heart rate, glucose — and transmits the reading to the care team over a network, without the patient having to be in the same building.\n\nThe value is in the loop. The monitor is not just a measurement device; it is a communication device. When a reading is unusual, the care team knows within minutes. When a trend develops over weeks, the record is already stored and searchable. Neither of these was possible with paper records or periodic visits.\n\nThe same pattern covers prescription updates sent to a pharmacy, appointment reminders sent to a phone, and data from monitors stored for follow-up care. Each application uses the same three IoT capabilities — communicate, locate, predict — to move healthcare from a series of episodic visits into a continuous relationship.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-001",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "What is personal data?",
    options: [
      "Any information that can be linked to a specific person",
      "Any file that is stored on a personal computer",
      "Any data entered by a user into a program",
      "Any content posted on a private social network",
    ],
    optionRationales: [
      null,
      "Location of storage does not define personal data. A file on a personal laptop may be a public report; a file on a corporate server may contain personal information. What matters is what the data refers to, not where it is kept.",
      "Entry method does not define personal data. Data entered by a user may be anonymous — a survey answer with no identifying information — and data the user never entered (browsing history, location logs) may still be personal. The defining property is the link to a person, not standard teaching.",
      "Privacy settings do not define personal data. Information posted publicly is still personal data if it can be linked to a person — that is precisely why its exposure matters. The setting controls who sees it; the data itself is personal regardless.",
    ],
    correct: 0,
    explanation: "## Anything That Points to a Person\n\n**Personal data** is any information that can be linked to a specific individual. It includes obvious identifiers — name, address, phone number, social security number — and it includes data that becomes identifying when combined with other data, such as a birth date plus a postal code.\n\nThe second category is the one most people miss. A birth date alone is not usually identifying. A postal code alone is not usually identifying. Together, they can narrow a population enough to identify a specific person in many contexts. This is why data protection laws treat *combinations* of data as personal, not just named fields.\n\nThe definition is functional, not moral. Personal data is not 'data that should be private' — it is data that points to a person, whether or not the person wants it known. That is what makes it worth protecting and what makes its exposure meaningful.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-002",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "Why do companies collect personal data from their users?",
    options: [
      "To store it as a public record",
      "To build advertising and product profiles",
      "To share it with governments automatically",
      "To make their servers run more efficiently",
    ],
    optionRationales: [
      "Public storage is the opposite of what companies do with personal data. Firms treat it as a private asset, not a public good. This distractor is easy to eliminate — no company has an interest in publishing the data it paid to collect.",
      null,
      "Automatic sharing with governments is not the typical model. Some legal obligations exist in specific cases, but the primary motive for collection is commercial. Companies collect data because it is valuable to them, not because they are legally required to hold it.",
      "Server efficiency depends on hardware and software, not on user data. Storing more data makes servers run less efficiently, not more. Efficiency is not the reason collection happens.",
    ],
    correct: 1,
    explanation: "## The Data Business\n\nCompanies collect personal data because it lets them build detailed profiles of their users. Those profiles serve two purposes: **advertising** (targeting users with products they are likely to want) and **product decisions** (understanding how people use a service so it can be improved or repackaged).\n\nThe commercial logic is straightforward. A company that knows a user's age, location, purchase history, and browsing habits can sell an advertiser a specific audience instead of a broad one. Advertisers pay a premium for narrow targeting, which is why the collection infrastructure exists.\n\nThe user does not pay with money for most online services. They pay with data. That transaction is legitimate in principle, but its terms are usually not visible to the user — which is why privacy laws increasingly require companies to disclose what they collect and what they do with it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-003",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "Which of the following best describes privacy?",
    options: [
      "The state of being free from public attention",
      "The legal duty of companies to protect data",
      "The right to encrypt files and prevent access",
      "The right to remain anonymous when online",
    ],
    optionRationales: [
      null,
      "A legal duty is one consequence of privacy — it is what the law imposes when privacy matters. But the duty is not the condition it protects. Privacy is the state; the duty is the response to its value.",
      "Encryption is a tool that can protect privacy, not the privacy itself. A user who encrypts files is using a technique; privacy is what they are trying to preserve. The method and the condition are separate.",
      "Anonymity is one specific form of privacy, not the whole category. You can be private without being anonymous — a private conversation between two known people is still private. Anonymity is a subset.",
    ],
    correct: 0,
    explanation: "## Left Alone\n\n**Privacy** is the state of being free from public attention to the degree that you determine. It is not a fixed line but a level of exposure each person controls for themselves.\n\nThe phrase *to the degree that you determine* is the operative one. Two people can both be private even if one shares more than the other, because privacy is not about what is shared — it is about who decides. A person who chooses to publish their address has not lost privacy; a person whose address is exposed without consent has, even if the exposure is small.\n\nThis is why privacy is usually discussed alongside consent. Privacy is not secrecy; it is the ability to control the boundary between the public and the private. That boundary is personal, which is why the law treats privacy as a right of the individual rather than a fixed standard.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-004",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "What is identity theft?",
    options: [
      "Impersonating a bank to steal credentials",
      "Creating a fake profile to hide your name",
      "Using someone's data to commit fraud",
      "Copying software without paying the licence",
    ],
    optionRationales: [
      "Phishing is one *method* used to commit identity theft, but the phishing event is not the crime itself. The theft is what happens with the credentials after phishing succeeds. Method and crime are different things.",
      "Anonymity feels like identity theft because both involve false identity. But anonymity hides the user; identity theft impersonates the victim. The direction of deception is opposite — one avoids being known, the other pretends to be someone else.",
      null,
      "Software piracy feels like identity theft because both are crimes. But piracy takes product; identity theft takes a person's identity to commit further crimes. Piracy ends with the copy; identity theft creates damage that can last years.",
    ],
    correct: 2,
    explanation: "## Stolen Identity\n\n**Identity theft** is the use of someone else's personal information — name, Social Security number, credit card number — to commit financial fraud. Theft in the legal sense; the victim is not physically robbed, but the consequences are financial and lasting.\n\nThe word *identity* is the point. The attacker does not steal money directly; they steal the ability to act as the victim. With a Social Security number and a name, an attacker can open credit accounts, file tax returns, and take out loans — all in the victim's name.\n\nThe damage continues long after the theft is discovered. A fraudulent loan on a credit report can take years to remove, during which time the victim may be denied a mortgage, a car loan, or a job. This is why preventing identity theft — rather than repairing it after the fact — is the focus of most privacy advice.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-005",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "What are the typical consequences of identity theft for the victim?",
    options: [
      "They must pay a fine for data loss",
      "Their computer is disabled by malware",
      "Their accounts are closed by platforms",
      "Their credit is harmed by fraud charges",
    ],
    optionRationales: [
      "Fines are imposed on wrongdoers, not on victims. Identity theft victims may face costs, but those costs are the fraud charges themselves, not a penalty imposed by any authority.",
      "Malware damage is a different crime. Identity theft does not require the victim's computer to be infected — the attacker works with information stolen from elsewhere. The two harms are unrelated.",
      "Account closure is not a consequence of identity theft; it is sometimes a remedy. Platforms close fraudulent accounts, not victims' accounts. This distractor reverses the relationship.",
      null,
    ],
    correct: 3,
    explanation: "## Two Kinds of Damage\n\nIdentity theft does two kinds of harm. The first is **immediate**: fraudulent charges appear on the victim's credit card or bank account. These are visible and, if caught early, usually refundable.\n\nThe second is **delayed and lasting**: the victim's credit history is damaged. A fraudulent loan appears as unpaid debt. A fraudulent credit account appears as maxed out. These entries can persist for years and can lead to denials when the victim applies for a mortgage, a car loan, or an apartment.\n\nThe delayed damage is why the consequences of identity theft are usually described as out of proportion to the immediate charge. An attacker who spends a few thousand dollars on the victim's card can cost the victim far more in future loan rejections and higher interest rates. The size of the theft is not the size of the harm.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-006",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "Which sequence describes how your data is typically exploited by third parties?",
    options: [
      "Compress, upload, archive",
      "Register, verify, authenticate",
      "Encrypt, transmit, decrypt",
      "Access, collect, sell",
    ],
    optionRationales: [
      "Compression and archiving are storage operations. They describe how data is packed and preserved, not how it is exploited. The pipeline is about who handles data and for what purpose.",
      "Registration and authentication are identity processes. They are how a user gains access to a service, not how the service monetises the user. The two happen at different points in the relationship.",
      "Encryption is a protection against exploitation, not the exploitation itself. The three-step commercial pipeline moves in the opposite direction — it exposes data rather than shielding it.",
      null,
    ],
    correct: 3,
    explanation: "## The Data Pipeline\n\nData moves through three stages in the commercial ecosystem: **access**, **collect**, and **sell**.\n\n*Access* is where the data originates. Social media posts, browsing history, purchase records, credit card statements — every interaction leaves a trail. *Collect* is where the trail becomes a profile: name, address, phone, income, education, occupation, and interests, gathered into a single record. *Sell* is where the profile becomes a product: sold to advertisers, shared with fraud-detection services, supplied to lenders, or provided to government agencies when the law requires.\n\nEach stage involves different actors and different rules. The user has the most influence at the *access* stage — they can choose what to post and what to leave unsaid. By the *sell* stage, the data has left the user's hands and the user's choices have little effect.\n\nThis is why the pipeline is usually described as one-directional. Once data has been collected and sold, it is not retrievable. The only way to control the outcome is to control what enters the pipeline in the first place.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-007",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "What is dumpster diving in the context of identity theft?",
    options: [
      "Guessing passwords using personal facts",
      "Searching a computer's recycle bin for files",
      "Retrieving personal data from the trash",
      "Scanning networks for unsecured access points",
    ],
    optionRationales: [
      "Password guessing uses knowledge the attacker has gathered. Dumpster diving uses documents the victim threw away. Both can feed into identity theft, but only one requires physical presence at the victim's location.",
      "Digital file recovery feels like the same crime because both involve recovering something discarded. But file recovery happens on a computer; dumpster diving happens in the physical world. Only one requires access to a trash bin.",
      null,
      "Network scanning is a digital attack. It looks for open ports and weak configurations on live systems, not for discarded documents. The methods and the artefacts are entirely different.",
    ],
    correct: 2,
    explanation: "## Paper Still Matters\n\n**Dumpster diving** in the identity theft sense means retrieving personal data from discarded paper — credit card statements, bank statements, pre-approved credit offers, receipts, and anything else that carries a name, address, or account number.\n\nThe threat persists because paper has not gone away. Statements still arrive by mail, receipts still print, and documents still get discarded. A determined attacker will sift through a household's trash looking for anything with identifying information.\n\nThe defence is simple and old-fashioned: **shred any document that contains personal information before throwing it away**. This is one of the few privacy safeguards that has not changed since the pre-digital era, because the mechanism it defends against has not changed. The trash is not private, and it never has been.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-008",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "What does the identity theft technique of phishing involve?",
    options: [
      "Deceiving users into revealing personal data",
      "Stealing a wallet or purse with information",
      "Using a false address to divert the victim's mail",
      "Pretending to be a research firm",
    ],
    optionRationales: [
      null,
      "Physical theft takes objects. Phishing takes information without the victim ever knowing it left. The two are on different planes — one attacks the body, the other attacks the inbox.",
      "Change of address fraud redirects physical mail. Phishing does not involve postal services — it uses email and websites. Both are identity theft methods, but only one uses the mail system.",
      "Pretexting is a related technique that uses a false identity in a conversation. Phishing is the sibling: it uses fake messages and links instead of fake phone calls. The two are close, but only one depends on email and web pages.",
    ],
    correct: 0,
    explanation: "## The Fake Message\n\n**Phishing** is the technique of tricking a user into revealing personal information by sending a message or linking to a website that pretends to be a trusted organization. The email may look like it comes from a bank, a delivery service, a government agency, or an employer.\n\nThe disguise is what makes phishing work. The message usually warns of an urgent problem — an unusual charge, a missed payment, a locked account — and provides a link to a page where the user is asked to 'confirm' their information. The page is fake, and the credentials go to the attacker.\n\nThe defence is a rule, not a technology. **Never provide personal information over the phone or through email** unless you initiated the contact and can verify the recipient. A bank will not ask you to enter your password over email. A delivery company will not ask for your card number. If a message pressures you to act quickly, that pressure is itself the red flag.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-009",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "How does the change of address form scam work?",
    options: [
      "The attacker recovers data from discarded mail",
      "The attacker guesses passwords using pet names",
      "The attacker files a change of address form",
      "The attacker calls pretending to be an official",
    ],
    optionRationales: [
      "Dumpster diving recovers discarded mail; the address scam redirects new mail. Both involve postal mail, but only one requires physical presence at the victim's address.",
      "Password guessing uses personal knowledge; the address scam uses a formal request. Both can lead to identity theft, but the mechanism is different.",
      null,
      "Fake calls are pretexting, not the address scam. The address scam does not require speaking to the victim — it exploits a form the postal service offers freely.",
    ],
    correct: 2,
    explanation: "## Redirect the Mail\n\nIn the change of address scam, the attacker files a standard change of address form with the postal service, diverting the victim's mail to an address the attacker controls.\n\nThe attack exploits a legitimate service. A change of address form is a normal, unauthenticated request that the postal service processes as a convenience for people who move. An attacker uses the same form to intercept the victim's mail without the victim's knowledge.\n\nThe consequence is delayed discovery. The victim keeps going about their day, unaware that their statements — bank, credit card, insurance — are arriving at a different address. Fraudulent charges accumulate for months before the victim notices something is wrong, by which time the damage is much harder to undo. The defence is to review statements as soon as they arrive, which is also why a missing statement is itself a warning sign.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-010",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "What is pretexting?",
    options: [
      "Pretending to be a legitimate firm",
      "Using personal questions to guess passwords",
      "Encrypting data with a pre-shared key",
      "Sorting trash for discarded documents",
    ],
    optionRationales: [
      null,
      "Password guessing uses facts the attacker already has; pretexting obtains facts the victim has not given up. The two are sequential stages of the same campaign, not the same technique.",
      "Encryption is a technique for protecting data. Pretexting is a technique for extracting it. The two operate in opposite directions, and the shared prefix 'pre-' is the only thing that connects them.",
      "Dumpster diving uses discarded paper; pretexting uses a conversation. Both gather information, but only one requires an audience with the victim.",
    ],
    correct: 0,
    explanation: "## The Friendly Researcher\n\n**Pretexting** is the technique of impersonating a legitimate organization or authority figure to convince a victim to reveal personal information. The *pretext* is the fake reason for the contact.\n\nA typical pretext is a phone call from someone claiming to be conducting a survey, verifying account details, or updating a customer record. The caller asks a few innocuous questions, then a few more, and gradually assembles enough information to answer account recovery questions or open a new account in the victim's name.\n\nThe technique relies on social norms. People are polite to strangers who seem professional, and they answer questions from someone who presents a plausible reason for asking. Pretexting exploits the assumption of good faith. The defence is to verify independently — hang up, look up the organization's official number, and call back. A legitimate caller will not object to that.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-011",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "How is data mining used as an identity theft technique?",
    options: [
      "By scanning social media to build a profile",
      "By compressing databases to make them easier to steal",
      "By intercepting traffic to capture unencrypted logins",
      "By prompting victims to reveal password clues",
    ],
    optionRationales: [
      "Social media profiling is commercial, not criminal. Advertisers build profiles to target ads; attackers use the same technique for a different purpose. What distinguishes the two is what happens next, not what is collected.",
      "Compression reduces size but does not make databases easier to steal — a compressed database is just as protected. The technique here has nothing to do with the size of the data.",
      "Traffic interception is packet sniffing. Data mining asks the victim directly; sniffing captures passively. Both are digital attacks, but only one requires the victim to answer a question.",
      null,
    ],
    correct: 3,
    explanation: "## Mining for Answers\n\nData mining as an attack is the technique of getting a victim to reveal facts that help guess a password or answer a security question. The attacker asks seemingly harmless questions — 'what is your pet's name?', 'what street did you grow up on?' — and collects the answers.\n\nThe technique works because security questions use the same facts that people share casually on social media. A pet's name is not secret; it is often in a photograph caption. The attacker does not need to hack into anything — the victim volunteers the information.\n\nThe defence is to treat security questions as passwords, not as trivia. The answer to 'what was your first car?' does not have to be truthful — it has to be consistent. A user can answer with a fake but memorable fact and be more secure than one who answers honestly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-012",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "Which of the following is a recommended safeguard for protecting your privacy?",
    options: [
      "Sharing access codes with trusted family members",
      "Avoiding carrying passwords or writing them on checks",
      "Carrying passwords in your wallet for safety",
      "Writing access codes on a check for reference",
    ],
    optionRationales: [
      "Sharing codes with family members feels safe because the family is trusted. But trust does not prevent accidents — a family member's device can be compromised, and a shared code becomes a point of failure with no way to detect the problem.",
      null,
      "Carrying passwords feels safe because the wallet feels controlled. But a lost wallet hands every account to whoever finds it. The wallet is one of the least secure places a password can be — it travels with the user, and the user is exactly who loses it.",
      "Writing codes on a check exposes them to anyone who sees the check — merchants, bank clerks, and eventually anyone who finds the cancelled check. A check is designed to be seen by others.",
    ],
    correct: 1,
    explanation: "## Keep Them Separate\n\nOne of the standard safeguards is to **not carry passwords or access codes in a wallet and not write them on a check**. The rule looks old-fashioned, but it targets the right problem.\n\nThe safeguard is about separation. A password and the object it protects should not travel together. If the password lives in a memory or in a password manager, losing the wallet does not compromise the accounts. If the password lives in the wallet, losing the wallet compromises everything at once.\n\nThe same logic applies to writing codes on checks and to sharing them with family. Every additional copy of a password creates another point of failure. The safeguard is not about remembering passwords — it is about reducing the number of places they can be lost from.",
    status: "approved"
  },

  {
    id: "CS110-T1-U1-1.3-013",
    mainTopic: "Unit 1: Being a Digital Citizen",
    topic: "1.3 Protect Your Privacy",
    q: "Why should you carefully review financial and billing statements each month?",
    options: [
      "To calculate your annual tax liability before April",
      "To detect unauthorized charges and stop identity theft",
      "To verify that your address is up to date",
      "To compare the cost of different service providers",
    ],
    optionRationales: [
      "Tax preparation uses annual summaries, not monthly statements. Monthly review is a detection practice; tax review is a filing exercise. Both involve financial records, but on different schedules.",
      null,
      "Address verification happens once when you move, not monthly. Monthly review is a continuing practice; address updates are occasional. Both involve statements, but only one detects fraud.",
      "Comparison shopping happens when choosing a service, not when reading a statement. Statements record what you already pay, not what you could pay elsewhere. The two tasks use the same document for different purposes.",
    ],
    correct: 1,
    explanation: "## Catch It Early\n\nReviewing financial and billing statements as soon as they arrive is one of the standard privacy safeguards. The purpose is to **detect unauthorized charges before they compound**.\n\nThe monthly cadence is the point. Identity thieves rely on victims not checking. Each month a fraudulent charge goes unnoticed is a month the damage grows — the attacker charges again, opens another account, or extends credit further. By the time the victim notices, the damage is often much larger than the initial charge.\n\nThe safeguard is also a defensive habit against the change of address scam. If a statement fails to arrive, that itself is a warning. Victims who notice a missing statement can act before the attacker has had months to work. Regular review makes every anomaly visible.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 2 · HARDWARE AND SAFETY  (97 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T1-U2-2.1-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "What does the term hardware refer to in computing?",
    options: [
      "The device itself and its physical components",
      "The instructions that tell a device what to do",
      "The data a user creates and stores",
      "The cables that link devices to the Internet",
    ],
    optionRationales: [
      null,
      "Software feels like the whole system when you are using a computer, because the interface is all you see. But software is the instructions; hardware is the physical equipment that runs them. The two are separate categories even when they ship together.",
      "User data feels like part of the computer because it is what the user cares about. But data is content; hardware is the machine that stores it. The data can be moved to another machine; the machine cannot.",
      "Cables feel like the obvious hardware because they are physical. But cables are one part of the category, not the whole category. Hardware includes the case, the processor, memory, storage, and every other physical component.",
    ],
    correct: 0,
    explanation: "## The Physical Machine\n\n**Hardware** refers to the device itself and every physical part it contains — wires, cases, switches, electronic circuits, and the components soldered onto them. If you can touch it, it is hardware.\n\nA computer's hardware falls into five broad categories: the processor that executes instructions, the memory that holds current work, the storage that retains data across sessions, the input and output devices that connect the machine to the user, and the communication devices that connect it to other machines.\n\nThe distinction matters because hardware alone does nothing. A processor with no instructions is a piece of silicon. The value of the hardware is what software tells it to do — and every hardware component in a modern computer exists to support some piece of software.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "Which of the following best describes a processor core?",
    options: [
      "The memory that stores data during processing",
      "The cooling device that keeps the processor running",
      "The casing that protects the processor from heat",
      "The unit on the processor that executes instructions",
    ],
    optionRationales: [
      "Memory feels central because the processor cannot work without data. But memory holds data; the core processes it. Both are essential, but only one is the location where instructions are actually executed.",
      "Cooling feels like part of the processor because heat is what limits processor speed. But the cooler dissipates heat; the core generates and uses it. The two work together, but only one is a computing unit.",
      "A casing feels like part of the processor because it sits physically next to it. But the casing protects; the core computes. Both are part of the package, but only one does the work.",
      null,
    ],
    correct: 3,
    explanation: "## The Executing Unit\n\nA **processor core** is a unit on the processor chip that contains the circuitry necessary to execute instructions. When a core receives an instruction, it does the work of interpreting and carrying it out.\n\nA modern processor usually contains multiple cores. A **multi-core processor** can execute multiple instructions simultaneously, which is why processors with more cores perform better for workloads that can be split into independent tasks. A dual-core processor has two cores; a quad-core has four; high-end chips today carry dozens.\n\nMore cores is not the same as a faster single core. A four-core processor running four tasks at once is faster than a single-core processor doing the same work sequentially, but a four-core processor running one task is only as fast as its slowest core. This is why comparing processors requires knowing both the core count and the clock speed.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "Why does a computer need more RAM when more applications are running?",
    options: [
      "Each application must be re-downloaded before it can run",
      "Each application requires its own dedicated network connection",
      "Each application needs space in memory for its data and instructions",
      "Each application draws more electricity from the power supply",
    ],
    optionRationales: [
      "Re-downloading feels required if an app crashes, but a running app does not need to be reinstalled. Once loaded, it stays in memory until it is closed. The claim describes a failure mode, not normal operation.",
      "Network connections feel like a per-app requirement because many modern apps talk to the Internet. But a network connection is not memory; a single computer can share its connection across dozens of apps. The two resources are unrelated.",
      null,
      "Power draw is real — more apps do consume more electricity — but power is not memory. A system can have plenty of power and still run out of RAM. The two limits are separate.",
    ],
    correct: 2,
    explanation: "## Space for Work\n\nEvery running application occupies memory. Its instructions must be in RAM so the processor can read them, and the data it is currently working on must also be in RAM so it can be manipulated.\n\nWhen one app is open, the operating system may allocate a few hundred megabytes. When twenty apps are open, the same system needs several gigabytes, because each app keeps its own instructions and data in memory at the same time. The operating system also uses RAM to manage the switching between them.\n\nWhen RAM fills up, the operating system has a problem: something has to leave. That is where virtual memory comes in — the OS temporarily moves the least-recently-used data to disk to free up RAM for what is actually active. The system keeps working, but it slows down, because the disk is much slower than RAM.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "What is a swap file used for on a computer?",
    options: [
      "It provides a faster type of memory than RAM",
      "It encrypts data before it is written to disk",
      "It holds data that cannot currently fit in RAM",
      "It stores a copy of every file the user deletes",
    ],
    optionRationales: [
      "Faster-than-RAM memory is a real concept (cache), but it is not a swap file. A swap file is much slower than RAM, because it lives on disk. The purpose of a swap file is capacity, not speed.",
      "Encryption can happen before data is written, but that is a security feature, not the swap file's role. The swap file exists to extend memory capacity; encryption is a separate layer.",
      null,
      "A recycle bin holds deleted files, and both terms sound similar. But a swap file holds active data, not deleted data. The two are unrelated — one preserves old files, the other manages live memory.",
    ],
    correct: 2,
    explanation: "## Overflow Space\n\nA **swap file** (also called a paging file) is a region of the hard drive that the operating system uses as overflow space when RAM is full. When the OS needs memory for something new, it writes the least-recently-used data from RAM into the swap file, freeing up space in RAM for the current task.\n\nWhen the user returns to the swapped-out task, the OS reverses the process — it reads the data back from the swap file into RAM. This is what the *swap* in the name means: data is swapped between the two storage tiers as needed.\n\nThe trade-off is speed. RAM is fast because it has no moving parts and the processor can access it directly. The swap file sits on disk, which is much slower. A system that relies heavily on the swap file feels sluggish even though it technically keeps working. This is why adding more RAM is the standard fix for a system that has started to lag.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "Which of the following is a key difference between RAM and ROM?",
    options: [
      "RAM stores the BIOS while ROM stores user data",
      "RAM is measured in bytes while ROM is measured in bits",
      "RAM is volatile and ROM is nonvolatile",
      "RAM is cheaper per gigabyte than ROM",
    ],
    optionRationales: [
      "This reverses the roles. The BIOS — the start-up instructions — lives in ROM, not RAM. User data lives in RAM while it is being worked on. Reversing them would make a computer unable to start.",
      "Both RAM and ROM capacities are usually described in bytes. The unit of measure is not what separates them.",
      null,
      "Cost differences exist, but they are not the defining distinction. The categories are distinguished by behaviour under power, not by price. A price difference alone would not tell you which memory type to use for what task.",
    ],
    correct: 2,
    explanation: "## Power Matters\n\nThe fundamental difference between **RAM** and **ROM** is what happens when power is removed.\n\n**RAM** is *volatile*: its contents disappear the moment electricity stops flowing. This is why unsaved work is lost when a computer crashes or loses power. RAM holds what the processor is actively using, and it is emptied by design when the machine turns off.\n\n**ROM** is *nonvolatile*: its contents persist without power. The BIOS — the start-up instructions that tell the computer how to load its operating system — lives in ROM, because the computer needs those instructions available immediately when it powers on.\n\nBoth are memory, but they serve opposite purposes. RAM holds what is happening now; ROM holds what must survive a power cycle. Every general-purpose computer has both.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "Which type of RAM uses magnetic charges to retain its contents when power is removed?",
    options: [
      "Magneto-resistive RAM (MRAM)",
      "Synchronous DRAM (SDRAM)",
      "Dynamic RAM (DRAM)",
      "Static RAM (SRAM)",
    ],
    optionRationales: [
      null,
      "SDRAM is a faster variant of DRAM, still volatile. The 'synchronous' in the name refers to how it times its operations, not to how it stores data. It is a refinement of DRAM, not a different storage mechanism.",
      "DRAM is the most common type of memory in modern computers, which makes it feel like the standard. But DRAM is volatile — it needs constant recharging to hold its contents. The name 'dynamic' reflects this constant refresh.",
      "SRAM is faster than DRAM, which makes it feel like the premium option. But SRAM is still volatile — it holds data longer without recharging, but not forever. Speed and volatility are different properties.",
    ],
    correct: 0,
    explanation: "## Magnetic Memory\n\n**Magneto-resistive RAM (MRAM)** stores bits as magnetic states rather than as electrical charges. Because magnetism persists without power, MRAM retains its contents when the machine is turned off — it is **nonvolatile**.\n\nThis places MRAM in a small category of memory types that behave more like storage than like traditional RAM. DRAM, SRAM, and their synchronous variants are all volatile. Only MRAM and flash memory (the type used in SSDs and USB drives) retain data without power.\n\nMRAM has historically been expensive and difficult to manufacture at scale, which is why it has not replaced DRAM for main memory. Its role is usually in specialized applications that need fast, persistent memory — for instance, systems that must recover immediately after an unexpected power loss.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "What is the motherboard?",
    options: [
      "A circuit board that holds the CPU, memory, and other components",
      "A cooling fan that keeps the processor within temperature limits",
      "A cloud service that backs up the operating system",
      "A type of software that manages device drivers",
    ],
    optionRationales: [
      null,
      "Cooling is essential, and the fan sits physically next to the motherboard. But the fan is a separate component that plugs into the motherboard. It is not the board itself.",
      "Backup is important, but the motherboard is a physical object. Cloud services do not live inside the case, and they cannot be touched.",
      "Drivers are software that run on the motherboard, not part of the board itself. The board is hardware; drivers are programs that live on the storage device and are loaded into memory.",
    ],
    correct: 0,
    explanation: "## The Central Board\n\nThe **motherboard** is the main circuit board inside a computer. It holds the microprocessor, the memory chips, and the connections to every other component — storage drives, expansion cards, USB ports, and network interfaces.\n\nEvery part of a computer either plugs into the motherboard or is built into it. The processor sits in a dedicated socket. Memory chips sit in slots. Storage and peripherals connect through ports and cables. The board itself provides the wiring that lets all these parts communicate.\n\nWhen a computer is upgraded, the motherboard is usually what limits the possibilities. The processor socket determines which chips can be used. The memory slots determine the maximum RAM. The expansion slots determine which add-in cards can be installed. Replacing a motherboard is expensive because it usually means replacing the processor and memory along with it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "What is firmware?",
    options: [
      "Instructions stored on a ROM chip that can be updated",
      "A program the user installs on the hard drive",
      "A connector that links peripherals to the motherboard",
      "A cloud service that keeps the operating system current",
    ],
    optionRationales: [
      null,
      "Installed software lives on the hard drive and is loaded into RAM when used. Firmware lives on the ROM chip on the motherboard and runs before the operating system has even loaded. The two exist at different layers of the system.",
      "Connectors are physical; firmware is a set of instructions. Both are inside the computer, but only one contains data the processor reads.",
      "Cloud services require an Internet connection and a running operating system. Firmware runs before either exists. It is what makes the machine capable of reaching the operating system in the first place.",
    ],
    correct: 0,
    explanation: "## Between Hardware and Software\n\n**Firmware** is a set of instructions stored on a ROM chip. It sits between hardware and software — programmed into the chip at manufacture, but updateable by flashing a new version.\n\nThe classic example is the **BIOS**, the Basic Input/Output System that runs when a computer powers on. The BIOS checks the hardware, locates a bootable device, and loads the operating system. Without it, the computer would not know where to look for the OS.\n\nFirmware is unusual because it is *persistent* like hardware but *changeable* like software. Manufacturer updates can fix bugs in firmware, add support for new hardware, or close security vulnerabilities. Once written, firmware survives power cycles, but it can be rewritten when the manufacturer ships a new version.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-009",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "Which type of memory is nonvolatile and typically less expensive than other types of RAM?",
    options: [
      "Static RAM",
      "Magneto-resistive RAM",
      "Flash memory",
      "Dynamic RAM",
    ],
    optionRationales: [
      "SRAM is faster than DRAM and more expensive. It is volatile as well. Speed and cost are not the properties being asked about.",
      "MRAM is nonvolatile, but it is the most expensive of these four. It is used in specialized applications where its persistence justifies the price.",
      null,
      "DRAM is cheaper than SRAM, but it is volatile. It loses its contents when power is removed, which is what makes it unsuitable for storage.",
    ],
    correct: 2,
    explanation: "## Fast and Lasting\n\n**Flash memory** is a nonvolatile memory type that can be erased electronically and rewritten. It retains its contents without power, unlike RAM, but it can be written to repeatedly, unlike ROM.\n\nFlash memory is the technology behind solid-state drives (SSDs), USB flash drives, memory cards, and the storage inside smartphones and tablets. It is faster than magnetic storage and much more durable, because it has no moving parts. It also typically costs less per gigabyte than other nonvolatile RAM types such as MRAM.\n\nThe combination of nonvolatility and rewritability is what makes flash so useful. It behaves like storage because it survives power loss. It behaves like memory because it can be updated repeatedly. That combination is why flash has replaced magnetic storage in most portable devices and is increasingly the primary drive in laptops and desktops.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-010",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "What does the clock speed of a processor measure?",
    options: [
      "The amount of heat the processor generates",
      "How many cores the processor contains",
      "How much memory the processor can address",
      "The speed at which the processor executes instructions",
    ],
    optionRationales: [
      "Heat and speed are related — a faster processor generates more heat — but they are not the same measurement. Heat is a consequence of speed, not a definition of it.",
      "Core count and clock speed are often listed together on specification sheets, which makes them feel interchangeable. But core count is a separate figure, and a processor with four cores at 2 GHz behaves differently from one with two cores at 4 GHz.",
      "Memory addressing is determined by the processor's architecture, not by its speed. A 32-bit processor can address about 4 GB regardless of how fast its clock runs.",
      null,
    ],
    correct: 3,
    explanation: "## Cycles per Second\n\nThe **clock speed** of a processor measures how many instruction cycles it can complete per second. A cycle is the smallest unit of time a processor can measure; within one cycle, the processor performs one step of a computation.\n\nClock speed is measured in gigahertz (GHz), where 1 GHz is one billion cycles per second. A 3 GHz processor completes three billion cycles per second. Higher clock speed usually means faster processing, but the relationship is not linear.\n\nEfficiency per cycle matters too. Two processors running at the same clock speed can perform differently if their architectures differ in how many instructions they complete per cycle. This is why modern processor benchmarks are more informative than raw clock speed — a faster clock is only useful if each cycle does more work.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-011",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "What does the bus width of a processor determine?",
    options: [
      "The physical size of the processor chip",
      "The maximum clock speed the processor can reach",
      "The number of memory slots on the motherboard",
      "The size of the data path, also called the word size",
    ],
    optionRationales: [
      "Chip size and bus width are both measured in numbers, which makes them feel related. But physical size is a manufacturing property, and bus width is a data-handling property. They vary independently.",
      "Clock speed is set by the processor's design and thermal limits, not by the bus. A wider bus does not raise the clock — it moves more data per clock.",
      "Memory slot count is a property of the motherboard, not the processor. A processor with a wide bus can address more memory, but the number of physical slots is decided by the board.",
      null,
    ],
    correct: 3,
    explanation: "## How Wide the Path\n\nThe **bus width** of a processor determines how many bits of data it can move at once, and it is also called the **word size**. A 32-bit processor moves 32 bits per cycle; a 64-bit processor moves 64.\n\nA wider bus means more data reaches the processor in each cycle, which translates into faster processing for workloads that need to move a lot of data — image processing, video editing, and scientific computing are common examples. It also determines how much memory the processor can address: a 32-bit processor is limited to about 4 GB, while a 64-bit processor can address vastly more.\n\nThe shift from 32-bit to 64-bit was one of the most consequential changes in personal computing. It did not make individual operations faster; it removed a ceiling on how much memory a program could use. That ceiling had become a real limit for applications working with large files.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.1-012",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.1 Considering Computer Systems",
    q: "What is a benchmark in the context of computer hardware?",
    options: [
      "A mark on the motherboard showing when it was manufactured",
      "A warranty standard set by the manufacturer",
      "A test run to measure processor speed and other performance",
      "A security scan for unauthorized hardware changes",
    ],
    optionRationales: [
      "A manufacturing mark and a benchmark both carry information, but the mark is a physical label and the benchmark is a measurement. One tells you when a device was made; the other tells you how fast it runs.",
      "Warranties are legal promises; benchmarks are technical measurements. Both are supplied by manufacturers, but only one is a number you can compare across products.",
      null,
      "Security scans detect tampering; benchmarks measure performance. Both are tests, but they answer different questions. A benchmark does not care whether the hardware has been changed — only how well it performs.",
    ],
    correct: 2,
    explanation: "## Measured Against a Standard\n\nA **benchmark** is a test run by a laboratory or other organization to determine processor speed and other performance characteristics. It produces a number that can be compared across machines.\n\nThe purpose of a benchmark is to reduce the ambiguity of raw specifications. Two processors might both claim 3 GHz, but if their architectures differ, the same clock speed produces different real-world results. A benchmark runs the same workload on both and reports how long each takes.\n\nBenchmarks are used in two ways. Buyers use them to compare machines before purchase. Manufacturers use them to demonstrate that one product is faster than another. Neither use is perfect — benchmarks measure specific workloads, and a machine that wins on one benchmark may lose on another — but they are more informative than any single specification.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "Which factor should be considered first when choosing a computer if you use specialized software?",
    options: [
      "The number of USB ports on the machine",
      "The brand reputation of the manufacturer",
      "The platform compatibility of the software",
      "The physical colour of the computer case",
    ],
    optionRationales: [
      "Port count matters if you have many peripherals, but it is a secondary consideration. If the software will not run on the machine, the number of ports is irrelevant.",
      "Brand is a proxy for reliability, but it does not determine compatibility. Two machines from different brands may run the same software if they support the same platform.",
      null,
      "Case colour is a preference, not a requirement. It is easy to confuse preference with necessity when shopping, because sales materials emphasize visual design. But colour does not determine what the machine can run.",
    ],
    correct: 2,
    explanation: "## Compatibility Before Preference\n\nWhen choosing a computer, **platform compatibility** comes first if you use specialized software. The question to ask is whether the software you need will run on the machine you are considering.\n\nTwo questions define this consideration. First, does the software require a specific platform — Windows, macOS, Linux, or something else? Second, if you already own other devices, does the new machine need to work with them? A user with an iPhone who buys an Android phone may lose access to previously purchased apps. A user with Windows-only software cannot switch to a Mac without replacement costs.\n\nThe platform decision often eliminates whole categories of devices before other considerations come into play. It is efficient to answer it first, because it saves time on machines that cannot meet your actual needs regardless of other qualities.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "When two programs have different memory requirements, which approach determines the computer to buy?",
    options: [
      "Choose the lower requirement to keep the cost down",
      "Meet or exceed the higher of the two requirements",
      "Buy the machine with the largest available memory",
      "Average the two requirements and buy a matching machine",
    ],
    optionRationales: [
      "Meeting the lower requirement saves money but leaves the higher program unusable. This is the most common purchasing error in computing — buying for the cheapest program rather than the most demanding one.",
      null,
      "Buying the largest available memory always works, but it ignores cost. The method should match the requirement, not exceed it by an arbitrary margin. Oversizing is not the recommended approach; matching the requirement is.",
      "Averaging sounds balanced, but it fails when one program needs more than the average. An averaged machine may run both programs poorly — one too slow, the other unable to launch at all.",
    ],
    correct: 1,
    explanation: "## The Higher Bar\n\nWhen two programs have different memory requirements, the correct approach is to **identify the more demanding program and select a computer that meets or exceeds that requirement**.\n\nThe logic is straightforward: memory must accommodate the largest program you plan to run, not the average of all programs. If one program needs 8 GB and another needs 4 GB, a machine with 4 GB cannot run the first program. A machine with 8 GB runs both.\n\nFor context, 4 GB of RAM handles basic web browsing and very light productivity. 8 GB is comfortable for typical office work and moderate multitasking. 16 GB is standard for serious productivity. 32 GB is used for virtual reality, high-end gaming, video editing, and other intensive workloads. Selecting the right size depends entirely on what you intend to run, not on what feels impressive.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "How should a buyer determine the storage capacity needed for a new computer?",
    options: [
      "Add up the requirements and exceed the sum",
      "Choose the largest capacity available on the market",
      "Match the storage of the single largest program",
      "Average the storage needs of every program",
    ],
    optionRationales: [
      null,
      "Buying the largest capacity always works in the sense that nothing runs out, but it ignores cost. Storage is the most commonly oversized component, and oversizing wastes money that could be spent on other improvements.",
      "The single largest program is one input, not the answer. If five programs each need 10 GB, matching one of them leaves 40 GB needed but unaccounted for.",
      "Averages hide the problem. If one program needs 40 GB and four need 5 GB, the average is 12 GB, but 12 GB of storage cannot hold the largest program.",
    ],
    correct: 0,
    explanation: "## Sum, Then Exceed\n\nTo determine storage capacity, **add up the storage requirements of every program you plan to install, then select a computer that exceeds the sum**.\n\nThe extra margin matters because the initial install size is not the final size. Operating systems and applications generate caches, temporary files, and user data as they are used. Game installations routinely grow by 20–50% after a few months of play. Photo and video libraries grow continuously. Buying exactly the sum leaves no room for growth, and the machine fills up within weeks.\n\nThe recommendation is *exceed* the sum, not multiply it. Doubling or tripling the sum is common in practice but not necessary. A margin of 30–50% above the initial requirement is enough to cover typical growth without wasting significant capacity.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "Which question does the form factor consideration answer when choosing a computer?",
    options: [
      "Which operating system does the computer use?",
      "Which additional peripherals will the user need?",
      "Will the computer be used in one location or on the move?",
      "How much processor speed does the user require?",
    ],
    optionRationales: [
      "Operating system is a platform question, not a form factor question. Both are important during purchase, but they answer different questions. Form factor concerns physical shape, not software compatibility.",
      "Peripherals are an add-on device question. The form factor determines whether add-ons are possible — a laptop has fewer ports than a desktop — but the form factor itself is about shape and size.",
      null,
      "Processor speed is a hardware specification question. Form factor does not determine processor speed; a powerful processor can be installed in either a desktop or a laptop chassis, within thermal limits.",
    ],
    correct: 2,
    explanation: "## Shape and Mobility\n\n**Form factor** is the shape and size of the computer, and the question it answers is whether the machine will stay in one place or travel with the user.\n\nDesktops and all-in-ones assume a fixed location — a desk, a study, an office. They can be more powerful because they do not need to fit into a bag or run on a battery. Laptops, tablets, and mobile devices trade some of that power for portability.\n\nThe choice of form factor often determines other considerations automatically. A user who needs to work in cafés, on trains, and at client sites cannot choose a desktop. A user who edits video for hours at a fixed desk benefits from a desktop's thermal headroom. Answering the form factor question first narrows the field significantly before hardware specifications are compared.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "What does the add-on devices consideration cover when buying a computer?",
    options: [
      "The accessories included in the box",
      "The software pre-installed by the manufacturer",
      "The additional hardware needed to do your tasks",
      "The warranty that comes with the machine",
    ],
    optionRationales: [
      "Included accessories are what ships with the machine, not add-ons. Add-ons are purchased after the fact to extend what the machine can do.",
      "Pre-installed software is a feature of the machine, not an add-on. Add-ons are hardware the user purchases separately to extend the computer's capabilities.",
      null,
      "Warranty coverage is a service, not a device. Both are part of the purchase decision, but only one is about physical extensions to the computer.",
    ],
    correct: 2,
    explanation: "## Beyond the Box\n\nThe **add-on devices consideration** asks what additional hardware you will need to perform your intended tasks. The computer alone is rarely enough.\n\nA student might need a printer, a scanner, or an external monitor. A designer might need a drawing tablet and a colour-calibrated display. A gamer might need a headset, a controller, and a mechanical keyboard. Each of these devices connects to the computer through ports, and the availability of those ports becomes part of the buying decision.\n\nThis consideration is often overlooked because buyers focus on the computer and forget everything that attaches to it. A laptop with only two USB-C ports may be a fine machine, but it becomes inconvenient if you need to connect a mouse, a printer, and an external drive at the same time. Knowing your add-on needs in advance is what lets you check that the machine can support them.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "When comparing processor requirements between two programs, what is the recommended approach?",
    options: [
      "Choose the machine with the highest available processor",
      "Match the processor of the more demanding program",
      "Match the processor of the less demanding program",
      "Select a processor based on price rather than need",
    ],
    optionRationales: [
      "The highest available processor is a way to avoid thinking about requirements, but it costs significantly more than necessary. Most users never approach the limits of a top-tier processor.",
      null,
      "Matching the less demanding program is a common mistake. It saves money, but the more demanding program will not run properly. The result is a machine that needs replacing in a year.",
      "Price-first selection is the reverse of requirement-first selection. It is the approach a buyer falls into when they do not know their requirements — which is why the previous step of identifying the requirements matters.",
    ],
    correct: 1,
    explanation: "## Match the Demanding Program\n\nWhen comparing processor requirements between two programs, the recommendation is to **identify the program with the greater requirement and select a processor that meets or exceeds it**.\n\nThe same logic applies to memory and storage: match the more demanding item, not the average and not the less demanding one. The reason is that the computer must be able to run every program you intend to use. If one program requires a quad-core processor and another requires a dual-core, a dual-core machine runs one and struggles with the other.\n\nProcessor requirements scale differently from memory requirements. More memory is easy to add in many machines; processors are usually soldered into the motherboard and cannot be upgraded. That makes the processor decision more consequential than the memory decision — a mistake here is usually permanent for the life of the machine.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "Why should a buyer identify hardware specifications before choosing a computer model?",
    options: [
      "Because specifications determine which software can run",
      "Because specifications determine the price of the machine",
      "Because specifications determine the warranty period",
      "Because specifications determine the physical size",
    ],
    optionRationales: [
      null,
      "Price is affected by specifications, but that is a consequence, not the reason to check them. Checking specifications only to estimate price would miss the point of the check.",
      "Warranty length is set by the manufacturer, not by specifications. A high-spec machine and a low-spec machine from the same brand usually carry the same warranty.",
      "Physical size is a form factor property, not a specification property. Specifications describe performance, not dimensions.",
    ],
    correct: 0,
    explanation: "## The Software Contract\n\nThe **hardware specifications** consideration exists because every program declares a minimum set of specifications it requires to run. If the machine does not meet those minimums, the software will not work — regardless of how much the machine cost or how new it is.\n\nThe specifications in question include processor type and speed, memory capacity, storage space, and graphics capability. Some programs need only modest specifications; others need substantial ones. Video editing software requires a more powerful processor and more memory than a word processor.\n\nChecking specifications before buying is a form of contract verification. The program's requirements are the terms; the machine's specifications are what it offers. The purchase decision is about matching the two, not about buying the most impressive numbers on the specification sheet.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.2-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.2 Which Type of Computer Is Right For You?",
    q: "A user needs to run one program requiring 8 GB of memory and another requiring 16 GB. What is the minimum appropriate memory?",
    options: [
      "12 GB",
      "16 GB",
      "4 GB",
      "8 GB",
    ],
    optionRationales: [
      "12 GB is an average that does not exist as a standard configuration on most machines. More importantly, it still falls short of the higher program's requirement.",
      null,
      "4 GB cannot run either program at their stated requirement. This would be a machine sized for basic use, not for the user's actual tasks.",
      "8 GB matches the lower program but not the higher one. It is the common mistake of meeting the requirement of the easier program and hoping the harder one will still run.",
    ],
    correct: 1,
    explanation: "## Meet the Higher Requirement\n\nThe correct minimum is **16 GB**, because the more demanding program requires 16 GB and the machine must be able to run both programs.\n\nThe logic that leads buyers to 8 GB or 12 GB is intuitive but wrong. It feels wasteful to pay for memory the less demanding program will never use. But the goal is not to run each program at its most efficient; the goal is to run every program the user needs. A machine that runs one program and fails on the other is not a solution.\n\nThe same principle applies at a larger scale. A user with one program requiring 32 GB and several requiring 4 GB still needs 32 GB. The requirements add up, but the machine only needs to meet the highest one, because programs are not usually running at their maximum simultaneously. The peak requirement is the target.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "What is a desktop computer?",
    options: [
      "A portable computer with a battery and hinged screen",
      "A device that runs only on cloud-based software",
      "A computer worn on the body during use",
      "A personal computer designed to stay in one location",
    ],
    optionRationales: [
      "A portable computer with a battery is a laptop. Desktops use wall power because they are not designed to travel. Both are personal computers, but only one assumes mobility.",
      "Cloud-only devices are a different category, sometimes called thin clients or Chromebooks. A desktop computer is a general-purpose machine that can run software locally or in the cloud.",
      "A wearable is a different category. A desktop computer sits on or under a desk; it is not worn on the body.",
      null,
    ],
    correct: 3,
    explanation: "## In One Place\n\nA **desktop computer** is a personal computer designed for a stationary location. Its components — the system unit, monitor, keyboard, and mouse — sit on or under a desk and stay there.\n\nThe stationary design is a trade-off. Desktops can be more powerful for the same price because they do not have to fit into a portable chassis. They are easier to repair and upgrade because the case opens to expose every component. And they are usually cheaper to fix because standard parts fit standard slots.\n\nThe cost is mobility. A desktop cannot be taken to a café, on a plane, or between home and office. For users whose work happens in one place, that is not a limit. For users who move, it is disqualifying. This is why the form factor question comes before the specification question when buying.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "What is the defining feature of an all-in-one computer?",
    options: [
      "It combines the monitor and the system unit in one case",
      "It runs only from battery power",
      "It contains no internal storage of its own",
      "It runs the same software on any operating system",
    ],
    optionRationales: [
      null,
      "Battery-only operation describes a laptop or tablet. All-in-ones plug into wall power, because their large screens draw more electricity than a battery can reasonably supply.",
      "All-in-ones contain the same internal storage as comparable desktops. The case is unified, but the components inside are standard.",
      "Cross-platform software is a software property, not a hardware property. All-in-one computers run the same operating systems as other computers of the same class.",
    ],
    correct: 0,
    explanation: "## No Tower\n\nAn **all-in-one computer** houses the monitor and the system unit in a single case. Instead of a separate box under the desk and a cable running to the screen, everything sits behind the display.\n\nThe design produces a cleaner workspace — fewer cables, fewer boxes, less dust collected on the floor. The iMac is the best-known example; many manufacturers offer similar designs.\n\nThe trade-off is upgradability. In a traditional desktop, opening the case exposes every component, and any of them can be swapped. In an all-in-one, most parts are hidden behind the screen, and replacing them requires specialized tools and expertise. Buyers who anticipate upgrading should usually choose a tower desktop instead.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "What is a laptop?",
    options: [
      "A phone with a keyboard attachment",
      "A tablet without a touch screen",
      "A desktop computer with a larger screen",
      "A mobile computer with an attached keyboard and screen",
    ],
    optionRationales: [
      "A phone with a keyboard is still a phone. A laptop has a different form factor, a different operating system, and a different set of internal components. The keyboard attachment does not make the two equivalent.",
      "A tablet without a touch screen would have no way to interact with it. Laptops are distinguished from tablets by having a physical keyboard, not by lacking a touch screen.",
      "Desktop and laptop are opposites in form factor. The desktop is stationary; the laptop is portable. A larger screen does not make a desktop a laptop.",
      null,
    ],
    correct: 3,
    explanation: "## The Clamshell\n\nA **laptop** is a mobile computer with a screen on its lid and a keyboard on its base. The two halves fold together for transport, which is where the clamshell name comes from. The word *notebook* is used interchangeably.\n\nThe design bundles four things into one portable unit: the display, the keyboard, the pointing device (usually a touchpad), and the battery that allows operation away from a wall outlet. Most modern laptops also include a webcam, speakers, and microphones. This bundling is what allows the laptop to be used anywhere.\n\nThe cost of the design is upgradability. A desktop can be opened and its parts replaced individually. A laptop is assembled around a compact chassis, and most components cannot be swapped without specialized tools. Memory and storage are the usual exceptions; processors and graphics chips almost never are.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "What is a distinguishing feature of an ultrathin laptop?",
    options: [
      "It costs less than a standard laptop",
      "It is more powerful than a standard laptop",
      "It runs a different operating system than other laptops",
      "It is thin, light, and has longer battery life",
    ],
    optionRationales: [
      "Ultrathins are usually more expensive, not cheaper. The miniaturization requires more precise manufacturing, and buyers pay a premium for portability.",
      "Ultrathins are typically less powerful than standard laptops for the same price, because thinner chassis leave less room for cooling and larger batteries.",
      "Ultrathins run the same operating systems as other laptops. The thinness is a physical design choice, not a software change.",
      null,
    ],
    correct: 3,
    explanation: "## Thin and Light\n\nAn **ultrathin laptop** is a laptop designed for maximum portability. It has a thinner profile, weighs less, and delivers longer battery life than a standard laptop of the same screen size.\n\nThe design is achieved by making trade-offs. The chassis has less room for cooling, so ultrathins typically use processors designed to run cooler and slower than the fastest laptop chips. They often have fewer ports, because ports take up space. And they usually cost more, because miniaturization requires more precise engineering.\n\nThe trade-off is deliberate. A user who carries a laptop all day cares more about weight and battery life than about raw processing power. A user who leaves a laptop on a desk cares about the opposite. Ultrathins are the right choice for one; they are the wrong choice for the other.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "Which of the following is a defining feature of a slate tablet?",
    options: [
      "It runs a desktop operating system",
      "It weighs more than a laptop",
      "It cannot connect to the Internet",
      "It has no attached physical keyboard",
    ],
    optionRationales: [
      "Slate tablets run mobile operating systems such as iOS and Android, not desktop operating systems. The distinction matters because it determines which software can run.",
      "Slate tablets weigh less than laptops, not more. That is part of their appeal — a tablet can be held in one hand for long periods, which a laptop cannot.",
      "Slate tablets connect to the Internet through Wi-Fi and often through cellular data as well. The form factor does not restrict connectivity.",
      null,
    ],
    correct: 3,
    explanation: "## Like a Pad\n\nA **slate tablet** resembles a letter-sized pad and has no attached physical keyboard. All typing happens on the on-screen keyboard, or through an optional external keyboard that connects separately.\n\nThe name comes from the slate form factor — a flat, solid surface with no moving parts. The iPad is the most familiar example. The screen occupies nearly the entire front surface, and there is no hinge to open or close.\n\nThe trade-off is productivity. Without a physical keyboard, typing on a slate is slower and less comfortable than on a laptop. Reading, browsing, and light note-taking are comfortable; writing a long document is not. This is why the convertible tablet exists — see the next item.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "What is a convertible tablet?",
    options: [
      "A tablet that runs two operating systems at once",
      "A tablet with a screen and a detachable keyboard base",
      "A tablet that can only be used in one orientation",
      "A tablet with no keyboard at all",
    ],
    optionRationales: [
      "Dual-boot tablets exist but are uncommon, and they are not what 'convertible' refers to. The word describes physical transformation, not software flexibility.",
      null,
      "Convertible tablets can be used in multiple orientations — as a slate with the keyboard detached, as a laptop with it attached, and sometimes as a stand. Single orientation would defeat the purpose.",
      "A tablet with no keyboard is a slate tablet, not a convertible. The convertible's defining feature is the presence of the keyboard attachment.",
    ],
    correct: 1,
    explanation: "## Two Devices in One\n\nA **convertible tablet** has a screen on its lid and a keyboard on its base. The two halves attach and detach, so the device can be used as either a tablet or a laptop depending on the task.\n\nThe design solves the productivity problem of the slate form factor. When reading or sketching, the user detaches the keyboard and holds the screen alone. When writing, the user reattaches the keyboard and uses the device like a laptop. The same hardware covers both use cases.\n\nConvertible tablets are not perfect substitutes for laptops. The keyboard base is usually thinner than a laptop's, with less key travel and often no trackpad. The processor is typically a mobile chip optimized for battery life rather than raw performance. But for users whose work is a mix of consumption and light productivity, the convertible offers both in one purchase.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "Which of the following is a mobile device?",
    options: [
      "A smartwatch with cellular connectivity",
      "A network switch in a server room",
      "A desktop tower attached to a wall outlet",
      "A server running in a data centre",
    ],
    optionRationales: [
      null,
      "A network switch is infrastructure, not a personal device. It connects other devices; it does not travel with a user.",
      "A desktop tower is stationary and powered by an outlet. The word 'attached' in this option makes the mismatch clear — mobile devices are designed to work without a fixed power source.",
      "Servers exist to serve other computers. They are housed in controlled facilities and are not designed for personal mobility.",
    ],
    correct: 0,
    explanation: "## In Your Hand\n\nA **mobile device** is a portable or handheld computing device. The category includes smartphones, tablets, e-readers, wearables, and any other computer designed to travel with its user.\n\nThe defining feature is not size but *assumption of movement*. A mobile device is designed to be used without a wired connection to power or network. It has a battery, it connects wirelessly, and it is built to survive being carried.\n\nA smartwatch is a clear example. It has a processor, memory, storage, a screen, wireless connectivity, and a battery, and it is worn on the wrist. It performs the same basic operations as any other computer — it accepts input, processes data, produces output, and stores information — but its form factor and design priorities are shaped entirely by the fact that it is meant to be on the body at all times.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "How does a laptop differ from a tablet?",
    options: [
      "A laptop can print; a tablet cannot",
      "A laptop has an attached physical keyboard; a tablet does not",
      "A laptop runs only offline software; a tablet is online-only",
      "A laptop has no battery; a tablet uses only battery power",
    ],
    optionRationales: [
      "Both laptops and tablets can print, given a compatible printer and the right software. Printing is a capability, not a form factor distinction.",
      null,
      "Both laptops and tablets can run software offline and online. Connectivity is a capability both share, not a distinguishing feature.",
      "Both laptops and tablets run on batteries. The difference is not the power source, which both share, but the physical design of the input method.",
    ],
    correct: 1,
    explanation: "## Attached or Detached\n\nThe distinction between a laptop and a tablet is the **attached physical keyboard**. A laptop has one built into its base; a tablet does not.\n\nThis single difference cascades into everything else. Because the keyboard is attached, a laptop opens and closes like a clamshell. Because the keyboard is absent, a tablet is a flat slab and typing happens on the screen. The two devices may run the same apps and connect to the same services, but they are used differently.\n\nSome devices blur the line. A convertible tablet has a detachable keyboard, which makes it both a tablet and a laptop depending on how it is configured. The category boundary is defined by the primary design intent, not by the presence or absence of a keyboard that can be attached or removed.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.3-009",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.3 Types of Computers",
    q: "Which type of computer typically offers the greatest upgradability?",
    options: [
      "A tablet with a sealed case",
      "A convertible laptop with a glued battery",
      "A tower desktop with a standard case",
      "An all-in-one computer with a curved display",
    ],
    optionRationales: [
      "Tablets have sealed cases by design. The trade-off is that components cannot be replaced individually, so repairs and upgrades require replacing the entire device.",
      "Glued batteries are a specific design choice that makes service harder. It is common in ultrathin laptops and convertibles, both of which are less upgradable than a tower desktop.",
      null,
      "All-in-ones look upgradable because the case is large, but the components are tightly integrated and most cannot be swapped without specialized tools.",
    ],
    correct: 2,
    explanation: "## Open Case, Replaceable Parts\n\nA **tower desktop** is the most upgradable form factor. The case opens to expose the motherboard, and every major component — processor, memory, storage, graphics card, power supply — sits in a standard slot or socket that can be replaced with a compatible part.\n\nUpgradability matters over the life of a computer. A machine that can be upgraded can be extended as needs grow: more memory when multitasking slows down, a faster graphics card when games demand it, a larger drive when storage fills up. A machine that cannot be upgraded has to be replaced whole when any component becomes the limiting factor.\n\nThe order of upgradability runs from tower desktops (most upgradable) through standard laptops to convertibles and ultrathins, with tablets and smartphones at the least upgradable end. This is not a defect — sealed devices are smaller, lighter, and more durable. But it is a trade-off a buyer should understand before purchase.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What is the role of an input device in a computer system?",
    options: [
      "It stores files permanently between computing sessions",
      "It accepts data and instructions from the user or environment",
      "It processes data according to the rules stored in memory",
      "It converts the computer's output into a form the user can perceive",
    ],
    optionRationales: [
      "Permanent storage is a memory or storage device role. Storage holds data across sessions; input devices bring data in for processing. Both involve data, but only one is at the boundary between user and machine.",
      null,
      "Processing data is the job of the processor. Input devices feed the processor; they do not execute instructions themselves. Both are part of the machine, but only one computes.",
      "Converting output for the user is the job of an output device, not an input device. The two work at opposite ends of the same pipeline, and the confusion is common because both are described as 'human-facing.' The dividing line is the direction of data flow.",
    ],
    correct: 1,
    explanation: "## The Front Door\n\nAn **input device** is any hardware that accepts data and instructions from a user or from the environment and sends them into the computer for processing. Keyboards, mice, touchscreens, scanners, microphones, and cameras are all input devices.\n\nThe term covers two directions that feel different but work the same way. User input is what the person provides; environmental input is what the machine senses. A temperature sensor in a weather station and a keyboard on a laptop are both input devices, because both bring external information into the system.\n\nInput devices exist because the processor cannot act on data it does not have. The whole point of the input layer is to convert the world — a keystroke, a photograph, a voice — into signals the processor can work with. Without input, the processor has nothing to do.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What is the role of an output device?",
    options: [
      "It accepts instructions from the user",
      "It processes data into information",
      "It presents processed information in a form the user can perceive",
      "It stores data for retrieval in future sessions",
    ],
    optionRationales: [
      "Accepting instructions from the user is the job of an input device. The two are mirror images of the same pipeline.",
      "Processing is the processor's job. Output devices present the result of processing; they do not perform it.",
      null,
      "Permanent storage preserves data across sessions. Output devices present data now — the two are different layers, and a stored file has to be opened before any output device can show it.",
    ],
    correct: 2,
    explanation: "## The Back Door\n\nAn **output device** presents the results of processing in a form the user can perceive. Monitors, speakers, printers, and projectors are output devices. Some devices, like touchscreens and multifunction printers, combine input and output roles in one unit.\n\nThe word *perceive* matters. Output is not just data leaving the computer — it is data made legible to a human sense. A monitor converts electrical signals into visible pixels. A speaker converts them into sound waves. A printer converts them into marks on paper. Each of these is a translation from machine form into human form.\n\nOutput closes the loop that input opens. A user types a request, the processor acts on it, and an output device shows what happened. Without output, the user would have no way to know whether anything worked.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What does a scanner do?",
    options: [
      "It converts a paper image into an electronic file",
      "It reads a book aloud for visually impaired users",
      "It copies files between two storage drives",
      "It prints a digital document onto paper",
    ],
    optionRationales: [
      null,
      "Reading a book aloud is done by a screen reader or text-to-speech tool. Those tools operate on files that already exist; a scanner creates the file in the first place.",
      "Copying files between drives is a file-management operation. Scanners do not interact with existing files — they create new ones from physical documents.",
      "Printing moves data in the opposite direction. A printer takes digital content and puts it onto paper; a scanner takes paper content and puts it into a computer. Both are paper-related, but only one moves outward.",
    ],
    correct: 0,
    explanation: "## Paper to Pixels\n\nA **scanner** is an input device that converts an existing physical image — a printed page, a photograph, a receipt — into an electronic file the computer can open and work with.\n\nThe process works by reflecting light off the document and capturing the pattern of reflections with an array of sensors. Bright areas reflect more light; dark areas reflect less. The pattern of light and dark becomes a digital image, which can then be stored, edited, or transmitted like any other file.\n\nThe most common use is making a paper document editable. A student scans a printed handout and the OCR software inside the scanner recognizes the letters, producing a file that can be modified. A different category, the 3-D scanner, extends the same idea to physical objects rather than flat pages.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "How does an inkjet printer create an image on paper?",
    options: [
      "By transferring coloured dye onto specially coated paper",
      "By spraying tiny drops of liquid ink onto the paper",
      "By using a laser beam to charge a drum and fuse toner",
      "By pushing heated pins against heat-sensitive paper",
    ],
    optionRationales: [
      "Dye transfer is how dye-sublimation printers work. Those printers are used in professional photo labs; inkjets are the standard consumer printers.",
      null,
      "Charging a drum and fusing toner is how a laser printer works. Both printers put marks on paper, but the inkjet uses liquid, not powder, and has no drum.",
      "Heated pins are how thermal printers work — the kind used for receipts and shipping labels. Inkjet printers use liquid ink at room temperature, not heat-activated paper.",
    ],
    correct: 1,
    explanation: "## Tiny Drops of Ink\n\nAn **inkjet printer** creates images by spraying microscopic drops of liquid ink onto paper. The print head contains cartridges, and each cartridge holds 50 to several hundred tiny nozzles.\n\nThe mechanical principle is thermal. A small resistor inside each nozzle heats the ink until it forms a vapour bubble. The bubble expands and pushes a droplet out of the nozzle onto the paper. This is why inkjet technology is sometimes called *bubble jet* — the bubble is doing the work.\n\nThe trade-off with inkjets is cost per page. Inkjet printers are cheap to buy because the manufacturer often sells them near cost and recovers profit on cartridges. A cartridge that costs as much as a third of the printer's purchase price covers only a few hundred pages. This is why high-volume offices use laser printers instead, even though lasers cost more up front.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "How does a laser printer differ from an inkjet printer?",
    options: [
      "A laser printer prints more slowly than an inkjet",
      "A laser printer uses a laser beam and powdered toner",
      "A laser printer uses liquid ink cartridges",
      "A laser printer prints only in black and white",
    ],
    optionRationales: [
      "Lasers are usually faster than inkjets, not slower. Their speed is one of the reasons they dominate high-volume printing environments.",
      null,
      "Liquid ink cartridges are what an inkjet uses. The two printers use different substances — inkjets use ink, lasers use toner.",
      "Colour laser printers exist and are common in offices. The colour capability is not what separates the two technologies.",
    ],
    correct: 1,
    explanation: "## Beam and Toner\n\nA **laser printer** creates images with a laser beam and powdered toner. The beam draws a pattern on a rotating drum, toner particles stick to the charged areas, and heated rollers fuse the toner permanently onto the paper.\n\nThe result is a different kind of output than an inkjet produces. Laser text is crisp and smudge-resistant because the toner is bonded into the paper fibres. Inkjet output is slightly softer and can smudge if it gets wet. For documents that need to look sharp — legal contracts, financial statements, business reports — lasers are the standard choice.\n\nThe economics are different too. Laser printers cost more to buy, but the toner cartridges last much longer and cost less per page. For a user who prints hundreds of pages a month, the total cost of ownership is lower with a laser, despite the higher purchase price.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What is the defining feature of a multifunction device?",
    options: [
      "It requires no ink or toner to operate",
      "It prints in more colours than other printers",
      "It combines printing, scanning, and copying in one unit",
      "It connects to the Internet without cables",
    ],
    optionRationales: [
      "No printer operates without ink or toner. Multifunction devices use the same consumables as single-function printers, just in a larger case.",
      "Colour capability is a specification, not a category. Multifunction devices can be colour or monochrome; what defines them is the functions they combine.",
      null,
      "Wireless connectivity is a feature many printers have, including single-function ones. It does not define the multifunction category.",
    ],
    correct: 2,
    explanation: "## One Device, Many Jobs\n\nA **multifunction device** — also called an all-in-one printer — combines the functions of a printer, scanner, and copy machine in a single unit. Some models add fax capability as well.\n\nThe value is in the consolidation. A small office that would otherwise need three separate devices gets one machine that occupies one space on the desk, uses one power cable, and shares one cartridge system. For a home office, the savings in space and complexity are the main reason to buy one.\n\nThe trade-off is single-point failure. If the printer component breaks, the scanner and copier become unusable until the whole unit is repaired, because they share the same paper path and control electronics. A buyer who values resilience over convenience might still choose three separate devices.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What is a plotter used for?",
    options: [
      "Scanning three-dimensional objects",
      "Producing large technical drawings",
      "Printing receipts at a point-of-sale terminal",
      "Printing photographs on glossy paper",
    ],
    optionRationales: [
      "3-D scanners capture physical objects. Plotters create output; they do not capture input.",
      null,
      "Receipt printers are small thermal devices. Plotters are large-format machines that work on rolls of paper measured in metres.",
      "Photo printers exist, but they are a different category. Plotters produce line drawings at large scale, not photographic prints.",
    ],
    correct: 1,
    explanation: "## Big Drawings\n\nA **plotter** is a large-format printer that produces high-quality technical drawings — blueprints, architectural plans, engineering schematics, and maps. The output is measured in metres, not inches.\n\nPlotters differ from regular printers in how they draw. Where an inkjet or laser printer composes an image from dots, a plotter draws continuous lines. Traditional plotters used pens that moved across the paper; modern plotters use charged wires or ink heads but preserve the same line-drawing output, which is what technical drawings need.\n\nThe audience is specialised. Architects need full-size blueprints to check dimensions by hand. Engineers need large schematics that show every connection clearly. The output size is the requirement, and no standard printer can meet it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What does a voice synthesizer do?",
    options: [
      "It records the user's voice for later playback",
      "It translates between spoken languages in real time",
      "It amplifies the user's voice for a large room",
      "It converts text into spoken speech",
    ],
    optionRationales: [
      "A voice recorder preserves the original voice. A synthesizer creates a new voice from text — one copies, the other generates.",
      "Translation changes the language of speech. Voice synthesis does not translate; it produces audio for text that may already be in the listener's language.",
      "Amplification makes an existing voice louder. Synthesis produces a voice that did not exist before — for example, reading a document that was never spoken aloud.",
      null,
    ],
    correct: 3,
    explanation: "## Text Made Audible\n\nA **voice synthesizer** converts text into spoken speech. It is the output counterpart of voice input: where a speech recognition system turns sound into text, a synthesizer turns text into sound.\n\nSynthesizers exist on every major operating system. They are used when reading documents aloud is more convenient than reading visually — while driving, exercising, or managing a screen-intensive task. They are also a core accessibility tool, allowing blind and low-vision users to consume written content by listening.\n\nThe technology has improved substantially. Early synthesizers produced robotic, word-by-word speech. Modern systems use recorded samples and machine learning to produce voices that sound natural, with appropriate pacing, intonation, and emphasis. This has made synthesized speech practical for long-form content such as books and articles.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-009",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What is the purpose of a data projector?",
    options: [
      "It amplifies the audio output of a computer",
      "It displays a computer's screen on a wall or large surface",
      "It converts printed documents into electronic files",
      "It captures images of objects in three dimensions",
    ],
    optionRationales: [
      "Amplifying audio is the job of a speaker system. Projectors handle the visual channel, though some models include small built-in speakers as an add-on.",
      null,
      "Converting printed documents is what a scanner does. Projectors display existing digital content; they do not create it from paper.",
      "Capturing three-dimensional objects is the job of a 3-D scanner. Projectors produce visual output, not capture input.",
    ],
    correct: 1,
    explanation: "## Big Screen Output\n\nA **data projector** takes the image from a computer's display and projects it onto a large surface — a wall, a whiteboard, or a dedicated screen. It produces an exact replica of what is on the monitor, only much larger.\n\nThe connection can be wired or wireless. In a classroom, a projector is usually mounted to the ceiling and connected by a cable running to the instructor's computer. In a meeting room, a wireless connection lets any participant share their screen without plugging in.\n\nProjectors exist because screens have a maximum practical size. A monitor above 80 inches is expensive and impractical. A projector can produce a 120-inch image at a fraction of the cost. For any situation where an audience needs to see the same content at once — a lecture, a presentation, a family movie — the projector is the standard solution.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.4-010",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.4 Input and Output Devices",
    q: "What is a mobile printer designed for?",
    options: [
      "Printing from a laptop or phone while travelling",
      "Printing on fabric rather than on paper",
      "Printing only in colour for marketing materials",
      "Printing at industrial scale in a factory",
    ],
    optionRationales: [
      null,
      "Fabric printing is a specialised use case, not a category of printer. Mobile printers are defined by their size and portability, not the material they print on.",
      "Colour printing is a capability, not a form factor. Mobile printers can be monochrome or colour, just like full-size printers.",
      "Industrial-scale printing is the opposite of mobile. Industrial presses are large, fixed machines; mobile printers are small and battery-powered.",
    ],
    correct: 0,
    explanation: "## Print Anywhere\n\nA **mobile printer** is a small, lightweight, battery-powered printer designed for users who need to print while away from a desk. It connects to a laptop, tablet, or phone and produces a physical document on the spot.\n\nThe technology is usually either thermal or small-format inkjet. Thermal printers are common because they need no ink cartridges, which makes them easier to carry and operate in the field. Inkjet models produce higher-quality output but require more space and consumables.\n\nThe typical users are field workers. A delivery driver prints a signature page on the doorstep. A salesperson prints an invoice at a client's office. An event staff member prints a ticket at the door. Each of these cases shares the same requirement: the output must be physical and available immediately, and the worker cannot return to the office to produce it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "What should a user do before turning on a new computer for the first time?",
    options: [
      "Verify that all components are present and undamaged",
      "Run a benchmark to record the processor's baseline speed",
      "Update every device driver on the system",
      "Install security software before any data is added",
    ],
    optionRationales: [
      null,
      "Benchmarks record performance after the machine works. Running one before setup is impossible; you need an operating system to run the test.",
      "Driver updates happen after the system boots and recognizes its hardware. They are a maintenance step, not a pre-power check.",
      "Security software is essential, but installing it requires the machine to be running. The step described here happens before the machine is powered on.",
    ],
    correct: 0,
    explanation: "## Before You Press Power\n\nBefore turning on a new computer for the first time, the recommended step is to **verify that all components are present and undamaged**. The packaging should be checked against the packing list, the components should be inspected for visible shipping damage, and the manual should be consulted for the manufacturer's specific setup sequence.\n\nThe purpose is to catch problems before they compound. If a component is missing or cracked, the situation is much easier to resolve when the machine has never been powered on. Once the machine runs, it becomes unclear whether a malfunction is a defect from shipping or something the user did during setup.\n\nFor a laptop, one additional step is important: charge the battery completely before first use. This calibrates the battery management system and ensures the machine can complete the initial setup even if power is momentarily interrupted.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "What is a Plug-and-Play device?",
    options: [
      "A device that only works with the manufacturer's brand of computer",
      "A device that needs a subscription to operate",
      "A device that requires a driver installed from a disc",
      "A device that works as soon as it is connected",
    ],
    optionRationales: [
      "Brand compatibility is a separate concern. Plug-and-Play devices work across systems that support the Plug-and-Play standard, regardless of manufacturer.",
      "Subscriptions are a licensing model, not a hardware characteristic. Plug-and-Play describes how the device is recognized, not how it is paid for.",
      "A device that ships with a driver disc is the older model. Plug-and-Play is defined by the absence of that manual step — the operating system recognizes the device and configures it automatically.",
      null,
    ],
    correct: 3,
    explanation: "## Instant Recognition\n\nA **Plug-and-Play device** begins working as soon as it is connected. The operating system detects the new hardware, identifies what it is, and loads the appropriate software automatically — usually within seconds.\n\nThe standard exists because older hardware required manual configuration. A user would install a device, then install a driver from a disc, then restart the computer, then troubleshoot if something went wrong. Plug-and-Play eliminated the sequence by letting the operating system and the device negotiate the setup themselves.\n\nMost modern USB devices are Plug-and-Play. Keyboards, mice, flash drives, printers, and external drives all configure themselves on connection. Devices that are not Plug-and-Play — usually older peripherals or specialised hardware — still require the manual driver installation that Plug-and-Play was designed to replace.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "What is a device driver?",
    options: [
      "A cable that connects peripherals to the motherboard",
      "A cloud service that updates firmware automatically",
      "A program that lets the operating system control a peripheral",
      "A technician who installs enterprise hardware",
    ],
    optionRationales: [
      "A cable is a physical object. A driver is software that runs on the machine. The two are used together but belong to different layers.",
      "Cloud services can distribute driver updates, but they are not the drivers themselves. A service and a program are different things.",
      null,
      "A technician is a person. A driver is a piece of software — the word 'driver' refers to the code that drives the hardware, not the person who installs it.",
    ],
    correct: 2,
    explanation: "## The Translator\n\nA **device driver** is a program that allows the operating system to communicate with a specific piece of hardware. It translates generic commands from the OS into the exact signals the device expects to receive.\n\nThe need for drivers comes from the diversity of hardware. A printer, a graphics card, and a network adapter all receive different command languages. The OS cannot know every device's protocol in advance, so it delegates the translation to a driver that ships with or is written for the device.\n\nThis is why a missing driver causes visible failure. A printer without its driver will not print, no matter how many times the user clicks the print button. Windows and macOS include many drivers by default, but specialised hardware often requires a driver to be downloaded from the manufacturer. Updating drivers can fix performance issues, security vulnerabilities, and compatibility problems with newer operating systems.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "What does the clock speed of a processor measure?",
    options: [
      "The speed at which the processor executes instructions",
      "The amount of heat the processor produces",
      "The number of cores the processor contains",
      "The size of the data path the processor uses",
    ],
    optionRationales: [
      null,
      "Heat is a by-product of speed, not a definition of it. A faster processor generates more heat for the same design, but the two are different measurements.",
      "Core count is a separate specification. A processor with four cores at 2 GHz has a different capability from one with two cores at 4 GHz, but the two numbers are independent of each other.",
      "Data path width is the bus width, also called the word size. It determines how many bits move at once, not how fast each cycle runs.",
    ],
    correct: 0,
    explanation: "## Cycles per Second\n\nThe **clock speed** of a processor measures how many instruction cycles it completes per second. A cycle is the smallest unit of time the processor can measure; within one cycle, one step of a computation is performed.\n\nClock speed is measured in gigahertz (GHz). One gigahertz is one billion cycles per second. A 3 GHz processor completes three billion cycles per second — an almost incomprehensible rate that only makes sense when broken into the smaller steps that make up each instruction.\n\nClock speed is the most visible performance number, but not the only one. Two processors can run at the same clock speed and perform differently, because architecture determines how much useful work each cycle accomplishes. This is why benchmarks, which measure real workloads end to end, are more informative than the specification sheet alone.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "What does the bus width of a processor determine?",
    options: [
      "The number of devices that can share a network",
      "The amount of data the processor can move at once",
      "How quickly the processor runs each cycle",
      "The maximum temperature the processor can reach",
    ],
    optionRationales: [
      "Network device count is a property of the network, not of the processor. Bus width concerns internal data movement, not external connectivity.",
      null,
      "Cycle speed is the clock rate — a separate specification. A wider bus does not make each cycle faster; it moves more data within the same cycle.",
      "Temperature limits are a thermal specification, set by design and cooling. Bus width is a data-transport specification and does not describe heat.",
    ],
    correct: 1,
    explanation: "## How Wide the Path\n\nThe **bus width** of a processor determines how many bits of data it can move in a single operation. It is also called the **word size**, because it defines the largest chunk of data the processor handles as one unit.\n\nA 32-bit processor moves 32 bits per cycle; a 64-bit processor moves 64. This affects two things. First, it changes how much data a program can move per unit of time, which matters for workloads that handle large values — image processing, cryptography, and scientific computing. Second, it determines how much memory the processor can address. A 32-bit processor is limited to about 4 GB; a 64-bit processor can address vastly more.\n\nThe shift from 32-bit to 64-bit was not a speed improvement in the usual sense. It was a capacity expansion. Applications that had been bumping up against the 4 GB ceiling — video editors, database servers, scientific simulations — suddenly had room to work with data sets that were previously impossible. For ordinary users, the shift happened quietly; the visible benefit was that applications stopped failing when they needed more memory than 32-bit could provide.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "What is a benchmark used for in computer hardware?",
    options: [
      "To record the manufacturing date of the processor",
      "To measure performance against a standard workload",
      "To encrypt the processor's internal communications",
      "To cool the processor during high-demand tasks",
    ],
    optionRationales: [
      "Manufacturing dates are physical labels, not test results. Benchmarks measure performance; they do not record when a device was made.",
      null,
      "Encryption is a security measure. Benchmarks run workloads and time them; they do not change how the processor handles data internally.",
      "Cooling is a separate hardware function. Benchmarks measure speed; they do not change the temperature of the processor.",
    ],
    correct: 1,
    explanation: "## Measured Against a Standard\n\nA **benchmark** is a test run by a laboratory or other organization to measure processor speed and other performance factors against a controlled workload. The result is a number that can be compared across machines.\n\nBenchmarks exist because raw specifications are not enough. Clock speed and core count describe a processor's theoretical capabilities, but real performance depends on how those capabilities are used. Two processors with the same specification sheet can perform very differently because of cache design, instruction pipelines, and other architectural details. A benchmark forces the processors through the same tasks and records what actually happened.\n\nBenchmarks are used by buyers comparing machines before purchase, by manufacturers demonstrating that one product is faster than another, and by reviewers explaining what a new product feels like in practice. None of these uses is perfect — a benchmark measures the specific workloads it contains, and a machine that wins on one may lose on another — but they are much more informative than any single number from a specification sheet.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "What does instructions per cycle measure?",
    options: [
      "The maximum memory the processor can address",
      "The efficiency of the processor at useful work",
      "The physical size of the processor chip",
      "The number of cores on the processor",
    ],
    optionRationales: [
      "Memory addressing is determined by bus width, not by instructions per cycle. The two describe different capabilities.",
      null,
      "Physical size is a manufacturing property of the chip, not a performance property. Two processors of the same size can have very different efficiency ratings.",
      "Core count is a separate specification. A processor can have many cores and low instructions per cycle, or few cores and high instructions per cycle.",
    ],
    correct: 1,
    explanation: "## How Much Each Cycle Does\n\n**Instructions per cycle** (IPC) measures how many instructions a processor completes in a single clock cycle. It is a measure of efficiency, distinct from raw speed.\n\nThe distinction matters because clock speed alone does not determine performance. A processor running at 4 GHz with an IPC of 1 performs one billion instructions per second. A processor running at 3 GHz with an IPC of 2 performs two billion — faster despite the lower clock speed. IPC captures what clock speed hides.\n\nThis is why modern processor improvements have focused on IPC rather than on pushing clock speed higher. Increasing clock speed produces more heat and consumes more power, with diminishing returns. Improving IPC produces more work per cycle without the same thermal cost. The practical result is that a modern processor at 3 GHz is much faster than a processor from ten years ago at the same clock speed, because each cycle accomplishes far more.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.5-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.5 Installing and Evaluating Hardware",
    q: "How does the operating system communicate with a graphics card?",
    options: [
      "By writing directly to the card's memory",
      "Through the same code path used for the keyboard",
      "By sending every command through the network",
      "Through a device driver written for that card",
    ],
    optionRationales: [
      "Direct memory writes are not how modern operating systems work. The OS is isolated from hardware by design, and communication happens through the driver layer.",
      "Keyboards and graphics cards use different drivers because they accept different commands and connect through different buses. There is no shared code path.",
      "Network transmission would be absurdly slow and would not work offline. Graphics commands travel across the local bus, not across a network.",
      null,
    ],
    correct: 3,
    explanation: "## The Middle Layer\n\nThe operating system communicates with a graphics card through a **device driver** written specifically for that card. The driver knows the card's command language, its memory layout, and its capabilities, and it translates generic graphics commands from the OS into the specific instructions the card understands.\n\nThe reason for this layer is stability. Without drivers, every application would need to know how to talk to every graphics card on the market — an impossible maintenance burden. With drivers, an application tells the OS what to draw, the OS tells the driver, and the driver translates for the specific card.\n\nThe layer is also where performance optimization happens. Graphics card manufacturers regularly release new drivers that improve performance in specific games or applications. Installing a newer driver can make an existing card noticeably faster without any hardware change, because the driver is more efficient at translating the same commands.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What is the recommended way to clean a computer screen?",
    options: [
      "Submerge the screen in water and dry it",
      "Wipe it with a damp cloth gently",
      "Spray glass cleaner directly on the panel",
      "Scrub it with a dry abrasive cloth",
    ],
    optionRationales: [
      "Submersion would destroy the display and any electronics inside. Screens are not waterproof unless explicitly labelled as such.",
      null,
      "Spraying liquid directly on the panel risks letting it seep into the edges. Liquids should be applied to the cloth, not the screen, so the user can control how much moisture reaches the surface.",
      "Abrasive cloths scratch the anti-glare coating that most modern screens have. The damage is usually permanent and difficult to repair.",
    ],
    correct: 1,
    explanation: "## Gentle and Controlled\n\nThe recommended method for cleaning a computer screen is to use a **soft, slightly damp cloth**. The cloth should be damp, not wet, and the wiping motion should be gentle.\n\nThe reason for the restraint is the anti-glare coating that most screens carry. That coating is a thin film deposited on the glass, and it can be worn away by abrasive cloths, harsh chemicals, or excessive moisture. Once the coating is damaged, the screen develops shiny patches that cannot be repaired except by replacing the panel.\n\nThe same principle applies to cleaning the rest of the machine. Keyboards are usually cleaned with compressed air, which lifts dust and debris out from between the keys without introducing liquid. The goal in both cases is to remove the dirt without introducing anything that the hardware cannot tolerate.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "Which environmental condition can damage electronic equipment?",
    options: [
      "Extreme temperature or humidity variations",
      "Indoor lighting of about 500 lux",
      "Moderate humidity of about 40 percent",
      "Room temperature of about 22 degrees Celsius",
    ],
    optionRationales: [
      null,
      "Indoor lighting has no effect on computer hardware. Light intensity matters for screens and for photography, but it does not damage the electronics themselves.",
      "Moderate humidity is in the recommended range for electronics. Low humidity promotes static discharge; high humidity causes condensation. The moderate band is the safe zone, not a risk.",
      "Room temperature is what computers are designed to operate in. Data centres cool their equipment to well below room temperature, but ordinary consumer devices work comfortably in a normal indoor environment.",
    ],
    correct: 0,
    explanation: "## Too Much of Either\n\nElectronic equipment is sensitive to **extreme temperatures and extreme humidity**. Both can damage hardware, and both are avoidable with reasonable care.\n\nHigh temperatures accelerate the failure of electronic components. A processor running hot will throttle its speed to protect itself, and prolonged exposure shortens its lifespan. High humidity causes condensation inside devices, which can short circuits or corrode metal contacts. Low humidity is also a problem, because dry air promotes static discharge that can destroy sensitive chips.\n\nThe recommendation is to keep equipment in a stable, moderate environment. Data centres solve this with industrial cooling and humidity control; home users solve it by not leaving laptops in hot cars, not placing towers against heating vents, and not storing electronics in damp basements. The principle is the same at both scales — avoid the extremes, and the equipment will last longer.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What is the purpose of a cable lock for a laptop?",
    options: [
      "It prevents the laptop from being carried away",
      "It encrypts data on the drive if the laptop is stolen",
      "It connects the laptop to a faster network",
      "It cools the laptop by circulating air through the cable",
    ],
    optionRationales: [
      null,
      "Encryption is a software measure that protects data regardless of physical location. The cable lock defends against theft; encryption defends against access after theft. Both are relevant, but they do different jobs.",
      "Network speed depends on the type of connection, not on whether a cable lock is attached. The two are unrelated.",
      "Cooling is a thermal function. Cable locks are physical restraints; they do not affect airflow.",
    ],
    correct: 0,
    explanation: "## Anchored in Place\n\nA **cable lock** attaches to a slot on the side of a laptop and loops around a fixed object such as a desk leg or a table. It makes casual theft much harder by physically anchoring the device to a stationary point.\n\nThe lock is not a perfect defence. A determined thief with bolt cutters can cut the cable, and a stolen laptop can be replaced with money. What the cable lock does is defeat the opportunistic theft that accounts for most stolen devices — the person who sees an unattended laptop and picks it up. Removing that opportunity is the goal.\n\nThe cable lock is only one part of a broader set of theft-prevention practices. Keeping devices out of sight in high-crime areas, minimising headphone use so the user stays aware of their surroundings, and not leaving devices unattended in public places all reduce the risk further. Each measure is small; together they change the profile of the opportunity that a thief is looking for.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What does an uninterruptible power supply (UPS) do?",
    options: [
      "It increases the voltage reaching the computer",
      "It stores data backups on a remote server",
      "It provides battery power when the main source fails",
      "It filters incoming Internet traffic for threats",
    ],
    optionRationales: [
      "A UPS maintains voltage at its normal level. It does not increase voltage; voltage boosting is a different function that some power supplies perform for other reasons.",
      "Storing data off-site is cloud backup. A UPS protects the computer's power supply; cloud backup protects the data. Both are resilience measures, but at different layers.",
      null,
      "Filtering Internet traffic is the job of a firewall. A UPS operates on the electrical supply, not on network traffic. The two are unrelated.",
    ],
    correct: 2,
    explanation: "## Battery Backup\n\nAn **uninterruptible power supply (UPS)** is a device that maintains power to computer equipment when the primary electrical source is interrupted. It contains a battery that takes over within milliseconds of a power failure.\n\nThe milliseconds matter. During a blackout, the computer has no power and the operating system would crash mid-operation, potentially losing unsaved work and corrupting files that were being written at that moment. The UPS's battery prevents the crash by keeping the machine running continuously while the user saves work and shuts down safely.\n\nA UPS is different from a surge suppressor, which blocks electrical spikes but provides no power when standard teaching fails. Many UPS units include surge suppression as a secondary function, but the defining capability of a UPS is the battery. The battery is what separates a UPS from a device that only protects against electrical events.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "How does a surge suppressor differ from a UPS?",
    options: [
      "A surge suppressor requires professional installation",
      "A surge suppressor provides battery power during outages",
      "A surge suppressor blocks voltage spikes but provides no backup",
      "A surge suppressor works only in office environments",
    ],
    optionRationales: [
      "Surge suppressors plug into ordinary outlets and require no special installation. Both surge suppressors and UPSs are consumer devices with similar setup requirements.",
      "This reverses the roles. The UPS is the device that provides battery power; a surge suppressor does not. Both protect equipment, but only one keeps the machine running during an outage.",
      null,
      "Surge suppressors work in any environment — homes, offices, dormitories. Their function is electrical, and electricity does not care where it is delivered.",
    ],
    correct: 2,
    explanation: "## Two Kinds of Protection\n\nA **surge suppressor** blocks electrical spikes and surges from reaching the equipment. When a spike occurs — from a lightning strike, a power-grid switch, or a heavy appliance cycling on — the suppressor diverts the excess energy away from the protected devices.\n\nA **UPS** does the same job and adds a battery that keeps the computer running during an outage. A UPS usually includes surge protection as part of its design, but the reverse is not true: a surge suppressor does not provide battery power.\n\nThe distinction matters for what a user needs. A surge suppressor is enough for equipment that only needs protection from electrical events — a printer, a phone charger, a home router that can reboot after an outage. A UPS is necessary for equipment that cannot afford to lose power mid-operation — a desktop running a long computation, a workstation editing a video, a server hosting a live service. The cost difference reflects the difference in capability.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What is a brownout?",
    options: [
      "A very short spike in voltage",
      "High-frequency electrical noise on the line",
      "A sustained drop in voltage lasting minutes or hours",
      "A complete loss of electrical power",
    ],
    optionRationales: [
      "A short voltage spike is a surge or spike — the opposite direction from a brownout. Brownouts lower the voltage; spikes raise it.",
      "High-frequency noise is an electrical interference problem, distinct from voltage level. Noise can coexist with a brownout, but the two are different phenomena.",
      null,
      "A complete loss of power is a blackout. A brownout is a partial loss — the voltage drops but does not vanish. The difference matters because a blackout is obvious and a brownout is often invisible.",
    ],
    correct: 2,
    explanation: "## Low Power, Long Duration\n\nA **brownout** is a drop in voltage that lasts minutes or hours. Unlike a blackout, the power does not go out completely — it dims. Lights flicker, motors slow, and equipment may behave unpredictably.\n\nBrownouts often happen during periods of peak demand. When an electricity grid is strained, the utility may deliberately reduce voltage across the network to reduce load, rather than cutting power to some areas entirely. This is a controlled mitigation strategy, but from the user's side it looks like the lights have gone dim.\n\nBrownouts are dangerous for computers because they can damage components over time. A power supply expects a specific voltage range; sustained operation below that range can cause the supply to malfunction or fail. Sensitive electronics may behave erratically during a brownout, which is why a UPS is recommended in areas where brownouts are common. The UPS boosts voltage back to normal during the brownout, keeping the equipment running as if nothing had happened.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What is a spike in electrical power?",
    options: [
      "A very short increase in voltage",
      "A complete loss of power for hours",
      "A gradual rise in voltage over a day",
      "Unwanted high-frequency energy on the line",
    ],
    optionRationales: [
      null,
      "A complete loss of power is a blackout. Spikes add energy to the line rather than removing it.",
      "A gradual rise is a drift or a swell, not a spike. Spikes are instantaneous — they last microseconds.",
      "High-frequency energy is noise, which is a different type of interference. Noise can ride on top of a normal voltage; a spike is a sudden change in the voltage itself.",
    ],
    correct: 0,
    explanation: "## Brief and Intense\n\nA **spike** is a very short increase in voltage, lasting microseconds. Despite the brevity, a spike can reach thousands of volts — enough to destroy sensitive electronics in the instant it occurs.\n\nThe most familiar cause is lightning. When lightning strikes near a power line, the electromagnetic surge propagates through the grid and reaches outlets as a spike. Other causes include switching operations in large appliances and, less commonly, faults in the grid itself.\n\nBecause spikes are so short, users rarely notice them. A spike does not cause the lights to flicker or the computer to slow down. What it does is damage or destroy components, and the damage often shows up later as a device that suddenly stops working. A surge suppressor or UPS installed between the outlet and the equipment is the standard defence, absorbing the spike before it reaches the device's power supply.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What does restoring an operating system mean?",
    options: [
      "Reverting settings to defaults or a previous version",
      "Upgrading to the newest available version",
      "Reinstalling every application after a disk failure",
      "Copying the operating system to an external drive",
    ],
    optionRationales: [
      null,
      "Upgrading moves the system forward to a newer version. Restoring moves it backward to an earlier state. The two are opposite operations.",
      "Reinstalling applications is one step that may be needed after a restore, but it is not what restoring means. The two are sequential tasks, not the same task.",
      "Copying the OS to another drive is a backup operation. Restoring changes the state of the running system — the two go in opposite directions.",
    ],
    correct: 0,
    explanation: "## Back to Defaults\n\n**Restoring** an operating system means reverting its settings to their defaults or migrating back to a previous version. It is the recovery step a user takes when an update breaks something, a setting has been changed in a way that causes problems, or the system has become unstable.\n\nModern operating systems include restore features for exactly this purpose. Windows has *Reset this PC* and *Go back to the previous version*. macOS has *Recovery Mode* and *Time Machine*. Each lets the user return the system to a known working state without losing their files — the restore targets the operating system configuration, not the user's data.\n\nA data backup is the natural companion to a system restore. The restore fixes the software environment; the backup preserves the files the user has created. Both are important recovery tools, and both should be set up before they are needed. A user who waits until something breaks to think about recovery has already lost the option to prepare.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-009",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What is the role of a wireless router in a home network?",
    options: [
      "It scans all incoming traffic for viruses and malware",
      "It provides electrical power to the devices on the network",
      "It is the central connection point that links devices together",
      "It stores every file that devices on the network create",
    ],
    optionRationales: [
      "Some home routers include basic firewall functions, but scanning every file for malware is beyond what a router does. That is the job of antivirus software on each device.",
      "Power comes from wall outlets and batteries, not from the router. Routers consume power; they do not distribute it.",
      null,
      "Storage is the function of a NAS or cloud service, not a router. Routers direct traffic; they do not hold user data as their primary role.",
    ],
    correct: 2,
    explanation: "## The Hub\n\nA **wireless router** is the central connection point of a home Wi-Fi network. It links every device in the house to the Internet and to one another, managing the flow of traffic between them.\n\nThe router does three things at once. It assigns local addresses so devices can find each other inside the home. It converts between the home network and the Internet service provider's network. And it provides the wireless signal that devices connect to. A single device performs all three functions, which is why it is usually the only piece of network hardware a home needs beyond the modem.\n\nBecause the router sees all traffic, it is also a natural place for security controls. Wi-Fi networks are vulnerable to several risks — reading wireless transmissions, viewing or stealing data, injecting malware, and downloading harmful content. Changing the default admin password, enabling encryption, and hiding the network name are the basic hardening steps that reduce exposure to these risks.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.6-010",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.6 Reducing Hardware Risks",
    q: "What do data backups protect against?",
    options: [
      "Every form of data loss without exception",
      "Damage caused by electrical surges",
      "Physical theft of the computer",
      "Hardware failure, user error, and cyber attacks",
    ],
    optionRationales: [
      "No backup protects against every form of data loss. If the primary and the backup are both destroyed by the same event, nothing survives. The claim is too absolute to be accurate.",
      "Surge suppressors protect hardware from surges. Backups preserve data; if the hardware is destroyed, the backup lets the user recover the data onto new hardware, but the backup did not prevent the damage.",
      "Backups preserve data; they do not prevent theft. If the computer is stolen, the backup is what lets the user recover — but the theft still happened.",
      null,
    ],
    correct: 3,
    explanation: "## A Backup for Everything\n\n**Data backups** protect against three categories of loss: **hardware failure**, **user error**, and **cyber attacks**.\n\nHardware failure is the most common. A hard drive that has served for years will eventually fail, and when it does, everything on it is gone unless a backup exists. User error is the second: files get deleted accidentally, overwritten, or edited in ways that cannot be undone. Cyber attacks are the third: ransomware encrypts files and demands payment for their release, and malware can destroy data outright.\n\nThe defining feature of a backup is that it lives independently of the primary copy. A backup on the same drive as the original is not a backup — if the drive fails, both copies are lost together. This is why the standard recommendation is the **3-2-1 rule**: three copies of the data, on two different media types, with one copy stored off-site. The rule exists because every single-location strategy fails against some event — fire, theft, flood, or ransomware.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "What is the most common storage medium inside a computer?",
    options: [
      "The USB flash drive",
      "The cloud storage account",
      "The internal hard drive",
      "The external optical drive",
    ],
    optionRationales: [
      "A USB flash drive is portable, which makes it visible and memorable. But portability is the reason it exists, not the reason it would be the default. The storage medium inside every computer is the one that stays there.",
      "Cloud storage lives somewhere else on the Internet. It is an addition, not a component. Calling it 'the most common storage medium' would confuse a service with a piece of hardware inside the machine.",
      null,
      "An external optical drive is a peripheral — something you plug in when you need it. The most common storage medium is the one every computer already contains, not the one users attach when the situation calls for it. Only one of these is present on every machine by default.",
    ],
    correct: 2,
    explanation: "## The Default Location\n\nThe **internal hard drive** is the most common storage medium on a computer. It lives inside the case, holds the operating system and applications, and stores the user's files. It is the storage the machine depends on by default.\n\nInternal drives come in two technologies. A **magnetic hard disk drive (HDD)** stores data on rotating platters coated with magnetic material. A **solid-state drive (SSD)** stores data in flash memory chips with no moving parts. Both sit inside the case and behave the same way from the operating system's point of view.\n\nThe distinction between internal and external storage is location, not function. An external drive is also a hard drive, in a case with its own power and cable. What makes internal storage the default is simply that every computer ships with it — no external storage is required for the machine to boot, run, and save work.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "How does a solid-state drive (SSD) differ from a magnetic hard disk drive (HDD)?",
    options: [
      "An SSD has more storage capacity than an HDD",
      "An SSD costs less per gigabyte than an HDD",
      "An SSD is faster and more durable than an HDD",
      "An SSD requires a network connection to function",
    ],
    optionRationales: [
      "Capacity and technology feel linked because larger drives often use one technology over the other. But the two are independent — SSDs are now available in multi-terabyte sizes, and an HDD can be small. Capacity is a size choice, not a technology property.",
      "Cost per gigabyte is the one dimension where HDDs still win. Students often assume newer technology is cheaper because it is smaller and faster, but SSDs cost more per gigabyte precisely because they are more expensive to manufacture.",
      null,
      "Cloud storage requires a network connection, but an SSD does not. SSDs are internal hardware that work offline, like any other drive.",
    ],
    correct: 2,
    explanation: "## Platters vs Chips\n\nAn **HDD** stores data on rotating magnetic platters. An **SSD** stores data in flash memory chips. The mechanical difference determines every other difference between them.\n\nBecause the HDD has moving parts, it is slower — the read/write head has to physically move to the correct track before reading begins — and it is more fragile, because shocks can cause the head to touch the platter. Because the SSD has no moving parts, it is faster, quieter, and more durable against drops and vibration.\n\nThe trade-off is cost per gigabyte. HDDs still win on price at large capacities, which is why many computers pair the two: an SSD for the operating system and frequently used programs (where speed matters), and an HDD for bulk storage of photos, videos, and archives (where capacity matters more than access speed).",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "What is the primary purpose of an external hard drive?",
    options: [
      "To encrypt the computer's files",
      "To replace the internal drive entirely",
      "To add storage capacity to a computer",
      "To provide power backup during outages",
    ],
    optionRationales: [
      "Encryption is a software function that runs on the data inside the drive. An external drive stores files; it does not encrypt them by virtue of being external.",
      "An external drive can technically hold an operating system, but that is not its designed role. Its purpose is expansion — adding capacity to a machine that already has an internal drive, not substituting for one.",
      null,
      "Power backup is the job of a UPS. External drives are storage devices; they have no power supply to draw on when the wall power fails.",
    ],
    correct: 2,
    explanation: "## Plug-In Expansion\n\nAn **external hard drive** adds storage capacity to a computer. It connects by USB or another port and behaves as an additional drive — an extra letter on the file system, an extra folder in the file browser.\n\nThe design solves a specific problem. Internal drives fill up, and replacing them is difficult in modern laptops where the drive may be soldered or hidden behind the sealed case. An external drive lets the user add capacity without opening the machine. It also travels, which makes it useful for moving large files between computers that are not on the same network.\n\nExternal drives are also the most common first backup. Copying important files to an external drive protects against the most frequent data-loss events — accidental deletion, ransomware, and drive failure — because the backup lives on a device that is independent of the primary machine.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "Which of the following are examples of optical media?",
    options: [
      "USB flash drives and external hard drives",
      "SSDs and HDDs",
      "SD cards and microSD cards",
      "CDs, DVDs, and Blu-ray discs",
    ],
    optionRationales: [
      "USB flash drives and external hard drives use flash memory or magnetic storage, not optical technology. They are portable like optical discs, which makes the category feel similar, but the reading mechanism is different — laser for optical, electrical for the others.",
      "HDDs and SSDs are the two main internal drive technologies. Both store large amounts of data, but neither uses laser reading.",
      "SD cards and microSD cards are flash memory, like USB drives. They are small and portable, but they do not use optical technology.",
      null,
    ],
    correct: 3,
    explanation: "## Laser-Read Discs\n\n**Optical media** include **CDs, DVDs, and Blu-ray discs**. All three use a laser to read the data stored on their surface. The laser reads microscopic pits and lands that encode the digital information.\n\nThe three formats differ mainly in capacity. A CD holds roughly 700 MB, a single-layer DVD holds about 4.7 GB, and a single-layer Blu-ray holds about 25 GB. The progression tracks the increasing demands of video content: standard-definition movies fit on a DVD, but high-definition movies need a Blu-ray.\n\nOptical media were once how software was distributed — installation discs for applications and operating systems. Their use has declined sharply as USB flash drives and downloadable software replaced them. Saving to optical media still requires special software or operating-system features, and many modern laptops no longer include a drive that can read them at all. The format is not obsolete, but its role has narrowed to archival and media playback rather than everyday file transfer.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "What is a USB flash drive?",
    options: [
      "A card that stores data on a magnetic stripe",
      "An internal component permanently installed in the case",
      "A removable storage device that plugs into a USB port",
      "A wireless service accessed over the Internet",
    ],
    optionRationales: [
      "A magnetic stripe card is used for identification and payment. It is read by a swipe or a reader, not by plugging into a USB port. The two are entirely different technologies.",
      "An internal component would not be removed and carried. The USB flash drive's defining feature is that it is removable and portable, unlike a hard drive that stays in the machine.",
      null,
      "Cloud storage is a service that requires an Internet connection to reach. A USB flash drive is physical — you hold it, plug it in, and it works offline.",
    ],
    correct: 2,
    explanation: "## Plug and Carry\n\nA **USB flash drive** is a small, removable storage device that plugs into a USB port on a computer. It uses flash memory — the same nonvolatile technology inside SSDs — packaged in a portable case that can fit on a keychain.\n\nThe USB interface is what makes the drive universal. Almost every computer built in the last two decades has a USB port, and the drive works on any of them without additional drivers or software. A file copied onto a flash drive on a Windows desktop can be read by a Mac laptop or a Linux server without any conversion.\n\nCapacities range from a few gigabytes to over a terabyte. The higher-capacity drives have replaced optical discs for most everyday file transfer because they are faster, rewritable, and physically more durable. The limitation is that a flash drive is easy to lose, which is why sensitive files on a flash drive should also be encrypted.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "What is cloud storage?",
    options: [
      "Storing files on remote servers accessed over the Internet",
      "An internal drive that stores data magnetically",
      "A local folder that compresses large files",
      "A removable drive that plugs into a USB port",
    ],
    optionRationales: [
      null,
      "This option does not match what the stem asks for.",
      "A compressed local folder saves disk space, but the files still live on the user's own machine. Cloud storage moves the files to a different machine entirely — the difference is location, not size.",
      "A USB drive is physical and portable. Cloud storage is not — it is reached through a network, not through a cable, and it has no physical form.",
    ],
    correct: 0,
    explanation: "## Files on Someone Else's Server\n\n**Cloud storage** stores files on remote servers accessed over the Internet. The files do not live on the user's local machine — they live in a data centre owned by the storage provider.\n\nThe word *cloud* is a metaphor for the Internet itself. The files are not in the air; they are on physical machines, in physical buildings, connected to the same electrical grid as everything else. The metaphor is useful because the user does not need to know where the servers are — the storage appears to be everywhere, because it is reachable from anywhere with a connection.\n\nThe service model behind cloud storage is that the provider maintains the infrastructure and the user pays for access. Companies like Google, Microsoft, Apple, and Dropbox host the servers, keep them running, and handle backups and upgrades. The user's responsibility is limited to having an Internet connection and a valid account. This division of labour is what makes cloud storage useful for users who do not want to run their own servers — and it is why the service is priced as a subscription rather than a one-time purchase.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "What does a user need to access files stored in the cloud?",
    options: [
      "A special app from the cloud company",
      "A password reset from the provider",
      "A device with an Internet connection",
      "A cable connecting to the remote server",
    ],
    optionRationales: [
      "Many cloud services work through an ordinary web browser with no app at all. The app is convenient, but the browser is sufficient. What is required is the connection, not the software.",
      "A password reset is a one-time recovery action, not a requirement for access. Users access cloud storage every day without resetting anything.",
      null,
      "A cable to a remote server would be absurd — cloud servers can be on another continent. The connection is logical, not physical.",
    ],
    correct: 2,
    explanation: "## Just a Connection\n\nThe only requirement for accessing cloud storage is **a device with an Internet connection**. A phone, a tablet, a laptop, or a desktop — anything that can reach the network and open a browser or app.\n\nThe low requirement is the point. There is no installation, no configuration, no hardware to maintain. A user who signs up for cloud storage today can access their files from a borrowed computer tomorrow, from a phone the day after, and from a desktop at home the day after that. The files follow the user because the user is not carrying them — the servers are.\n\nThe trade-off is that without a connection, the files are out of reach. Local storage works offline; cloud storage requires the network. This is why most cloud storage systems now include offline caching, which keeps a copy of recently accessed files on the user's device so they remain available when the connection is lost. The cache is a bridge between the two worlds — it gives the convenience of the cloud without the total dependency on the network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.7-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.7 Internal, External, and Cloud Storage",
    q: "Why do many users choose cloud storage over local storage?",
    options: [
      "Cloud storage is always faster than a local hard drive",
      "Cloud storage does not require a paid subscription",
      "Cloud storage cannot be deleted by the user",
      "Cloud storage is accessible from any connected device",
    ],
    optionRationales: [
      "Cloud storage is usually slower than local storage for reading and writing individual files, because every access goes over the network. Speed is not the advantage.",
      "Most cloud services offer a small free tier and charge for additional storage. The paid subscription is the standard model, not an exception.",
      "Users can absolutely delete their own files from cloud storage. Deletion is under the user's control, just as it is on a local drive.",
      null,
    ],
    correct: 3,
    explanation: "## Access Everywhere\n\nThe reason users choose cloud storage is **accessibility**. Files stored in the cloud are reachable from any device with an Internet connection — the same files, from the same account, on a phone, tablet, laptop, or borrowed computer.\n\nLocal storage cannot match this. Files on a home desktop are only on the home desktop. Files on a work laptop are only on the work laptop. Files on a phone are only on the phone. Accessing the same file from two devices requires copying it between them or storing it somewhere both can reach — which is exactly what the cloud provides.\n\nThe other advantages follow from the first. Files are automatically backed up because the provider replicates them across multiple servers. Files are automatically synced because every device pulls from the same source. And files are protected from hardware failure, theft, and physical damage to a single device, because they do not live on any single device. Each of these is a consequence of the same underlying property — the files are somewhere the user is not, and reachable from anywhere the user is.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "What is a node on a network?",
    options: [
      "Any device connected to the network",
      "A protocol that governs how data is transmitted",
      "A program that manages traffic between computers",
      "A cable that physically connects devices",
    ],
    optionRationales: [
      null,
      "This option does not match what the stem asks for.",
      "A network management program is software running on a device. The node is the device itself, not the software running on it.",
      "A cable carries signals between devices but is not a device itself. The cable is part of the physical layer; the node is what the cable connects to.",
    ],
    correct: 0,
    explanation: "## Anything Connected\n\nA **node** is any device connected to a network. Computers, tablets, phones, printers, game consoles, smart home devices, and even some appliances are all nodes when they are connected.\n\nThe word *node* is deliberately broad. The purpose of the term is to describe the network from the network's point of view — every point that can send or receive data is a node, regardless of what the device does outside the network. A printer is a node when it is on the network, even though it is not a computer in the everyday sense.\n\nA network requires at least two nodes. A single device with a network connection is not yet a network; the concept implies connection between points. This is why the definition of a network is phrased as 'two or more computers connected to share resources' — the connected devices are the nodes, and the network is what connects them.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "What is the difference between a hub and a switch?",
    options: [
      "A hub is wireless; a switch is wired",
      "A hub works only in large networks; a switch works only in small ones",
      "A hub connects to the Internet; a switch does not",
      "A hub broadcasts data to all devices; a switch sends it only to the intended recipient",
    ],
    optionRationales: [
      "Both hubs and switches can be wired or wireless depending on the model. The dividing line is not the connection medium but what happens to the data after it arrives.",
      "Both devices work at any network scale. Small networks often use switches today because switches have become inexpensive, but this was not always true and is not a defining property.",
      "Both hubs and switches connect devices to a local network. Neither is defined by whether it reaches the Internet — that role belongs to the router or modem.",
      null,
    ],
    correct: 3,
    explanation: "## Broadcast vs Targeted\n\nA **hub** provides a central point for network cables and transfers all incoming data to every connected device. A **switch** provides the same central point but sends data only to the device that needs it.\n\nThe difference is internal intelligence. A hub has no memory of which device is on which port — when a frame arrives, it copies the frame to every other port and lets the receiving devices decide whether the data is for them. A switch learns which device is on which port as traffic flows through it, building an internal table that lets it forward each frame only to the correct port.\n\nThe practical consequence is performance. On a hub, only one device can transmit at a time — simultaneous transmissions collide and are lost. A switch allows many devices to transmit independently because each frame is forwarded only along the path it needs. This is why hubs are obsolete in modern networks: the switch does everything a hub does, without the collisions and without the security problem of every device seeing every other device's traffic.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "What is the role of a router in a network?",
    options: [
      "Storing cached copies of frequently visited web pages",
      "Connecting multiple networks and directing traffic between them",
      "Broadcasting data to every device on the local network",
      "Converting digital signals for transmission over phone lines",
    ],
    optionRationales: [
      "Caching web pages is a function of a proxy server or a browser. Routers forward traffic; they do not store page content as a rule.",
      null,
      "Broadcasting within a local network is the function of a hub, not a router. Routers operate between networks, not within one. The scale of their role is different.",
      "Converting signals for a phone line is the function of a modem. The modem translates between the home network's signals and the ISP's network; the router directs traffic once the signals arrive.",
    ],
    correct: 1,
    explanation: "## Between Networks\n\nA **router** connects two or more networks and directs — routes — the flow of information between them. It sits at the boundary between the local network and the wider Internet, deciding where each packet of data should go.\n\nThe routing decision is made per packet. When a user's computer sends a request to a website, the request arrives at the router. The router examines the destination address and forwards the packet along the path that leads to that destination. When the response comes back, the router forwards it to the device that made the request. This happens millions of times per second on a home network.\n\nThe word *router* comes from the same root as *route* — to plan a path. A router does not simply pass traffic; it chooses where traffic goes based on what it knows about the network topology. This choice is what allows the Internet to work as a network of networks, because every network's router knows the paths that lead out of the local network and into the wider world.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "What is the function of a modem?",
    options: [
      "Storing user files for the network to share",
      "Connecting a communication channel to a sending or receiving device",
      "Directing traffic between two local networks",
      "Encrypting data before it is transmitted",
    ],
    optionRationales: [
      "Storing files is the role of a server or NAS, not a modem. Modems transmit data; they do not hold it.",
      null,
      "Routing between networks is a router function. The modem and router are often packaged together in one home device, but they do different jobs.",
      "Encryption is a security layer that runs above the physical connection. A modem does not encrypt by itself; the encryption happens in the software.",
    ],
    correct: 1,
    explanation: "## Signal Translator\n\nA **modem** connects a communications channel — such as the Internet — to a sending or receiving device such as a computer. Its role is to translate between the signals the channel carries and the signals the local device expects.\n\nThe word *modem* is short for **modulator–demodulator**. Modulating is converting digital data into a form the transmission channel can carry; demodulating is converting it back. Older modems translated between digital and analog because phone lines carried analog signals. Modern digital modems work with digital lines directly, but the translation function remains — the signals on the provider's line are still different from the signals a computer uses internally.\n\nThe type of modem a user needs depends on the Internet service. A **cable modem** uses the coaxial cable that carries cable TV. A **DSL modem** uses the existing copper telephone wiring. Neither is universal. If a user moves to a house served by a different provider, the modem often has to change along with the service, because the physical channel is different.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "What hardware does a computer need to connect to a network?",
    options: [
      "A dedicated external drive for network data",
      "A network interface card (NIC)",
      "A cooling fan dedicated to the network",
      "A USB hub for network traffic",
    ],
    optionRationales: [
      "External drives hold data. Network access requires a device that transmits and receives signals, not a device that stores files.",
      null,
      "Cooling fans manage heat for the processor and other components. Network connections do not require dedicated cooling.",
      "USB hubs distribute one USB port into many. They have nothing to do with the network connection itself.",
    ],
    correct: 1,
    explanation: "## The Network Adapter\n\nA computer needs a **network interface card (NIC)** to connect to a network. The NIC sends and receives the electrical signals or radio waves that carry the network's data.\n\nIn older computers, the NIC was a separate expansion card that the user installed. In modern computers, the NIC is usually built into the motherboard — often two of them, one for wired Ethernet and one for Wi-Fi. Both do the same job: they convert the computer's internal data into a form the network can carry, and vice versa.\n\nEvery device on a network has a NIC, even if it is invisible. A phone's Wi-Fi chip is a NIC. A printer's Ethernet port is a NIC. The router the home network connects to has a NIC for every port it supports. Without a NIC, a device has no way to speak the network's language — it is isolated from every other device on the network, no matter how powerful it may be otherwise.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "Which type of cable does a cable modem use to connect to the Internet?",
    options: [
      "A satellite uplink",
      "Standard copper telephone wiring",
      "A dedicated fiber-optic line",
      "A cable TV connection",
    ],
    optionRationales: [
      "A satellite uplink uses radio waves from a dish to an orbiting satellite. It is a different technology for reaching the Internet, not what a cable modem uses.",
      "Copper telephone wiring is what a DSL modem uses. Both modems connect to the Internet, but they use different physical channels.",
      "Fiber-optic service is a different category — usually called FTTP — that runs on a different type of cable entirely.",
      null,
    ],
    correct: 3,
    explanation: "## Shared with TV\n\nA **cable modem** uses a cable TV connection to reach the Internet. The coaxial cable that carries television signals also carries the data signals the modem sends and receives.\n\nThe physical setup is usually a splitter. The cable from the wall is split into two paths — one to the cable box or television, the other to the cable modem. Both signals travel on the same physical wire because they occupy different frequency bands, the way FM and AM radio signals coexist on the airwaves without interfering.\n\nThe trade-off is shared bandwidth. The coaxial cable in a neighbourhood serves every household on the same segment, and cable Internet speed often varies depending on how many neighbours are using the connection at once. Peak-hour slowdowns are a common complaint with cable Internet precisely because of this shared design. DSL avoids this by giving each household a dedicated line, but DSL is slower at maximum speed and requires proximity to the phone company's equipment.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "Which wiring does a DSL modem use to send and receive data?",
    options: [
      "A coaxial cable shared with TV service",
      "A fiber-optic line",
      "A wireless radio signal",
      "Standard copper telephone wiring",
    ],
    optionRationales: [
      "Coaxial cable shared with TV is what a cable modem uses. DSL does not use the television cable — it uses the phone line that was already installed for voice service.",
      "Fiber-optic service is a different technology. DSL was designed precisely because telephone wiring already reached almost every building, and reusing it avoided the cost of installing new cables.",
      "A wireless connection describes cellular or satellite service, not DSL. DSL is a wired technology.",
      null,
    ],
    correct: 3,
    explanation: "## Over the Phone Line\n\nA **DSL modem** uses standard copper telephone wiring to send and receive digital data. The same wire that carries voice calls also carries the Internet signal, because the two use different frequency ranges on the same pair of copper wires.\n\nThe reuse of existing wiring is why DSL became popular. When it was introduced, almost every home and office already had a telephone line. DSL provided broadband without the cost and disruption of running new cables. A small filter installed at each telephone outlet prevents the DSL signal from interfering with voice calls.\n\nThe limitation is distance. DSL signal strength degrades as the cable runs farther from the telephone company's central office. A household near the office gets full speed; a household several kilometres away gets less. This is why DSL was never available everywhere, even in places where telephones were universal. Fiber and cable do not have the same distance sensitivity, which is why they have replaced DSL in many markets.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.8-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.8 Network Hardware",
    q: "What determines whether a user needs a cable modem or a DSL modem?",
    options: [
      "The brand of the computer being connected",
      "The Internet service provider",
      "The operating system the user runs",
      "The number of devices on the local network",
    ],
    optionRationales: [
      "The brand of computer is unrelated. Modems work with any computer that supports the network protocol, regardless of manufacturer.",
      null,
      "The operating system affects how the computer uses the connection, but not what kind of connection is available. The modem is on the provider's side of the boundary, not the computer's.",
      "Device count affects whether the router can handle the traffic, but not which modem the provider uses to deliver that traffic. The two concerns are at different layers.",
    ],
    correct: 1,
    explanation: "## The Provider Decides\n\nThe type of modem a user needs is determined by the **Internet service provider**. Different ISPs use different physical channels to reach the home, and the modem must match the channel the ISP provides.\n\nAn ISP that delivers service over its cable TV network requires a cable modem. An ISP that delivers over telephone lines requires a DSL modem. A fiber provider uses an optical network terminal, which is functionally similar to a modem but uses light instead of electricity. In each case, the user cannot choose freely — the modem has to be compatible with what arrives at the wall.\n\nThe practical implication is that switching ISPs often means replacing the modem. Users who buy their own modem (rather than renting one from the provider) have to check compatibility when they move or change providers. A modem that worked with the previous ISP may be useless with the next one, even though both deliver the same Internet connection to the user.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "What is the purpose of a heat sink?",
    options: [
      "It filters noise from the power supply",
      "It stores data temporarily during processing",
      "It absorbs and disperses heat from a component",
      "It connects the processor to the motherboard",
    ],
    optionRationales: [
      "Noise filtering is an electrical function performed by other components in the power supply. A heat sink has no electrical role — its job is thermal.",
      "Temporary data storage is the function of memory. A heat sink sits on top of the processor or another chip and manages temperature, not data.",
      null,
      "Physical connection between the processor and the motherboard is the job of the processor socket. The heat sink mounts on top of the processor after it is already seated.",
    ],
    correct: 2,
    explanation: "## Fins That Cool\n\nA **heat sink** is a ceramic or metal component with fins on its surface that absorbs heat from a processor and disperses it into the surrounding air. It sits on top of the chip and is the first line of defense against overheating.\n\nThe fins are the key. A flat piece of metal would absorb heat but would only release it slowly, because the air around it would warm up and stop drawing more heat away. Fins multiply the surface area, which lets far more air come into contact with the hot material. The result is faster cooling for the same volume of metal.\n\nA heat sink alone is usually paired with a fan. The fan pushes air across the fins, replacing the warmed air with cooler air and accelerating the process. Together the sink and fan form the standard cooling solution for processors in most desktop computers. When the fan fails, the processor can overheat quickly — which is why the temperature is monitored by the system and the machine may slow down or shut down to protect itself if cooling is inadequate.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "How does liquid cooling technology cool a processor?",
    options: [
      "By spraying cool water directly onto the processor",
      "By using a compressor to freeze the surrounding air",
      "By submerging the entire computer in oil",
      "By circulating fluid through tubes to carry heat away",
    ],
    optionRationales: [
      "Direct contact with water would destroy the electronics. The fluid in a liquid cooling system is contained in a sealed loop and never touches the components directly.",
      "A compressor is used in refrigeration and air conditioning, not in standard liquid cooling. Liquid cooling uses a pump and a radiator, not a compressor.",
      "Submersion cooling exists but is a separate technique used in specialized data centres. It is not what is meant by liquid cooling in a personal computer.",
      null,
    ],
    correct: 3,
    explanation: "## Coolant in a Loop\n\n**Liquid cooling** uses a continuous flow of fluid — usually a mixture of water and glycol — to carry heat away from the processor. The fluid moves through a closed loop, absorbing heat at the processor and releasing it at a radiator.\n\nThe loop has four parts. A **cold plate** sits on the processor and absorbs heat from it. A **pump** moves the fluid through the system. **Tubing** connects the components. A **radiator**, usually with a fan, releases the heat into the air. The fluid never touches the electronics — it stays inside the sealed loop while the heat travels through the metal of the cold plate into the fluid.\n\nLiquid cooling is more efficient than air cooling because water carries heat away about 25 times more effectively than air. This matters for high-performance systems where the processor generates more heat than a heat sink and fan alone can dissipate. Gaming PCs, workstations, and overclocked builds often use liquid cooling for this reason. For ordinary desktop and laptop computers, air cooling is sufficient — which is why most machines ship with heat sinks rather than liquid loops.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "What is a cooling pad used for?",
    options: [
      "It cools the air entering a data centre",
      "It sits below a laptop to prevent overheating",
      "It cools RAM modules inside a desktop tower",
      "It replaces the processor's fan",
    ],
    optionRationales: [
      "Data centre cooling is a large-scale HVAC system. A cooling pad is a consumer accessory that fits under a laptop.",
      null,
      "RAM cooling exists but is a different product. RAM modules rarely need active cooling in ordinary machines, and the component that would sit under a laptop is specifically designed for laptops.",
      "A cooling pad does not replace the internal fan. It supplements the laptop's own cooling by providing additional airflow underneath.",
    ],
    correct: 1,
    explanation: "## Under the Laptop\n\nA **cooling pad** is a device that rests below a laptop and protects the computer from overheating. It usually contains one or more fans that push air into the laptop's intake vents, and it often raises the back of the machine to improve airflow.\n\nLaptops are especially prone to overheating because their components are packed tightly into a small chassis. The processor and other hot components have limited space to dissipate heat, and the internal fan may not be able to move air efficiently if the laptop is sitting on a soft surface like a bed or cushion. A cooling pad solves both problems — it provides additional airflow and lifts the machine off the surface that was blocking its vents.\n\nThe need is not universal. A laptop used on a hard surface in a cool room rarely needs extra cooling. A laptop used for gaming, video editing, or other intensive tasks in a warm climate is much more likely to benefit. In a country like Zambia, where ambient temperatures are high for much of the year, a cooling pad is a practical accessory rather than a luxury.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "What is a computer chip?",
    options: [
      "A small piece of silicon with integrated circuits etched on it",
      "A cable that connects the processor to storage",
      "A case that protects the hard disk platters",
      "A heat-dissipating block of metal",
    ],
    optionRationales: [
      null,
      "A cable moves signals between components. A chip is the component that processes the signals, not the wire that carries them.",
      "A drive case is a mechanical housing. A chip is a semiconductor device that performs computation.",
      "A block of metal describes a heat sink, not a chip. Both are physical components inside the case, but only one processes data.",
    ],
    correct: 0,
    explanation: "## Silicon with Circuits\n\nA **computer chip** is a small piece of semiconducting material — usually silicon — on which integrated circuits are etched. The circuits contain microscopic pathways that carry electrical current, and the pattern of those pathways determines what the chip does.\n\nThe word *integrated* is the crucial one. Before integrated circuits, a computer's logic was built from thousands of individual transistors wired together by hand. The integrated circuit placed many transistors on the same piece of silicon and connected them through metal layers deposited during manufacture. The result was smaller, faster, more reliable, and far cheaper to produce at scale.\n\nAlmost every component of a modern computer is a chip. The processor is a chip. The memory is a set of chips. The graphics processor is a chip. The controllers for storage, network, and audio are chips. The display panel contains driver chips, the battery contains a management chip, and the sensors that detect orientation and temperature are chips. Silicon is what computing is made of, and the chip is the form in which silicon does its work.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "What is the role of the motherboard in a computer?",
    options: [
      "It generates the radio waves used by Wi-Fi",
      "It holds the processor, memory, and other internal devices",
      "It converts alternating current into direct current",
      "It stores the operating system permanently",
    ],
    optionRationales: [
      "Wi-Fi radio transmission is handled by a wireless NIC. The motherboard provides the connection to that NIC, but the radio waves come from the NIC itself.",
      null,
      "AC-to-DC conversion is the function of the power supply, which connects to the motherboard but is a separate component.",
      "Permanent storage of the operating system is the role of the drive, not the motherboard. The board holds the connections that let the drive work; it does not store the data itself.",
    ],
    correct: 1,
    explanation: "## The Central Board\n\nThe **motherboard** is the main circuit board of a computer. It holds the processor, memory, and the connectors for every other internal device — storage drives, expansion cards, and the ports that face outward to the user.\n\nThe design is what makes a computer a system rather than a collection of parts. Every component connects to the motherboard, and the board's internal wiring carries signals between them. The processor reads from memory, writes to storage, and receives input from peripherals — all through the pathways the board provides. Without the motherboard, none of these components could communicate with one another.\n\nWhen computers are upgraded, the motherboard is usually the limiting factor. The processor socket determines which chips can be installed. The memory slots determine the maximum amount of RAM. The expansion slots determine which add-in cards can be used. Replacing the motherboard usually means replacing the processor and memory along with it, because all three are matched to each other through the board's specifications.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "What are the four operations of the machine cycle, in order?",
    options: [
      "Fetch, Decode, Execute, Store",
      "Execute, Fetch, Store, Decode",
      "Decode, Store, Fetch, Execute",
      "Store, Fetch, Execute, Decode",
    ],
    optionRationales: [
      null,
      "Execution comes after the instruction has been fetched and decoded. The order here starts in the middle of the cycle.",
      "The cycle starts with Fetch, not Decode. Decoding only happens after the instruction has been retrieved from memory.",
      "The order is reversed. The machine cycle begins by fetching an instruction, not by storing its result.",
    ],
    correct: 0,
    explanation: "## The Cycle\n\nThe processor repeats a set of four operations in a fixed order: **fetch**, **decode**, **execute**, **store**.\n\n*Fetching* is reading the next instruction from memory. *Decoding* is translating that instruction into the signals the processor's internal circuits can act on. *Executing* is carrying out the operation — an addition, a comparison, a data move. *Storing* is writing the result back to memory or to a register.\n\nThe cycle repeats billions of times per second. Every visible thing a computer does — displaying a character, playing a note, moving a mouse cursor — is the result of this loop running many thousands of times. The speed of the cycle, measured in clock speed, is one of the factors that determines how quickly the machine can complete any task.\n\nThe word *cycle* is significant. The four operations are not a one-time sequence; they are a loop. The processor executes the cycle over and over, always working on the next instruction while the previous one is finished. Modern processors overlap the stages — decoding one instruction while executing another — but the fundamental order remains Fetch, Decode, Execute, Store.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "Where are registers located in a computer?",
    options: [
      "On the motherboard, separate from the processor",
      "Inside the processor itself",
      "Inside the RAM modules",
      "On the internal hard drive",
    ],
    optionRationales: [
      "A register is not a separate component on the motherboard. Memory and expansion cards sit on the board, but registers are part of the processor's internal structure.",
      null,
      "RAM modules are separate memory chips that sit in slots on the motherboard. Registers are much smaller and much faster, and they live on the processor die.",
      "The hard drive is storage. It retains data without power; registers are volatile and hold data only while the processor is actively using it.",
    ],
    correct: 1,
    explanation: "## Inside the Chip\n\n**Registers** are small, high-speed storage locations inside the processor itself. They are not a separate component that plugs into the motherboard; they are part of the processor's internal design.\n\nRegisters hold the data the processor is working with *right now* — the instruction being decoded, the operands being calculated, the intermediate results of a computation, and the address of the next instruction to fetch. They are the fastest memory in the computer, and they must be, because the processor accesses them on every cycle.\n\nThe capacity of a register is tiny by memory standards. A register holds one word — typically 32 or 64 bits. But a processor has many registers, each serving a specific role in the machine cycle. The small size is a feature, not a limitation: because registers are physically close to the processor's arithmetic and logic circuitry, signals can travel between them almost instantaneously. RAM, which sits further away, takes many cycles longer to reach.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.9-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.9 Inside the Case",
    q: "Which of the following is a function of registers in the machine cycle?",
    options: [
      "They cool the processor during heavy workloads",
      "They hold an instruction while the control unit decodes it",
      "They connect the processor to external storage",
      "They store the operating system permanently",
    ],
    optionRationales: [
      "Cooling is a hardware function performed by the heat sink, fan, or liquid cooling loop. Registers do not manage temperature.",
      null,
      "External storage connects through ports and cables, not through registers. Registers are internal to the processor and hold data, not signals traveling in or out.",
      "Permanent storage of the operating system is the role of the drive. Registers are temporary and lose their contents the moment power is removed.",
    ],
    correct: 1,
    explanation: "## Working Storage\n\nRegisters serve several specific functions inside the machine cycle, and one of them is **holding an instruction while the control unit decodes it**. The instruction is fetched from memory, placed in a register, and decoded from there.\n\nRegisters also store the location from which an instruction was fetched, hold the data that an instruction operates on while the arithmetic-logic unit performs the calculation, and hold the result of that calculation before it is written back to memory. Each function corresponds to a specific point in the machine cycle, and the processor's control unit coordinates which register is used at which stage.\n\nThe pattern is that registers are the processor's scratch space. Whatever the processor is doing right now, the pieces of that action are in registers. Memory holds the broader program and data; storage holds everything for the long term; but the immediate work of computing happens entirely within registers, at speeds that no other part of the computer can match.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "What is repetitive strain injury (RSI)?",
    options: [
      "Aches and pains from long-term repeated device use",
      "A burn caused by touching an overheated laptop",
      "A vision problem caused by staring at screens",
      "A hearing loss caused by prolonged headphone use",
    ],
    optionRationales: [
      null,
      "A burn is a sudden injury from direct contact with heat. RSI develops gradually over months or years and affects muscles, tendons, and nerves rather than skin. The two have entirely different causes and timelines.",
      "Vision problems from screen use are a real concern, but they affect the eyes, not the muscles, tendons, and ligaments. The condition described here is musculoskeletal, not optical.",
      "Hearing loss from loud audio damages the inner ear. RSI affects the upper body — hands, wrists, arms, neck, and shoulders. Both are device-related health issues, but they involve completely different body systems.",
    ],
    correct: 0,
    explanation: "## The Cost of Repetition\n\n**Repetitive strain injury (RSI)** is a condition caused by repeated and long-term use of technological devices. It affects the muscles, nerves, tendons, and ligaments of the upper body — most commonly the elbows, forearms, hands, neck, shoulders, and wrists.\n\nThe symptoms build gradually. Users describe aching, cramping, numbness, pain, stiffness, tenderness, throbbing, tingling, or weakness. Because the symptoms appear slowly, they are often ignored until they become difficult to ignore. By that point, the injury is established and takes longer to recover from.\n\nRSI is common among anyone who uses a computer for hours a day, which includes students, office workers, programmers, gamers, and musicians. The cause is not one dramatic event but thousands of small, identical motions — keystrokes, mouse clicks, swipes — performed repeatedly without rest. The body was not designed to make the same movement thousands of times a day, and RSI is what happens when it is forced to.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "Which of the following is one of the main causes of repetitive strain injury?",
    options: [
      "Using a computer for one hour a week",
      "Typing on a keyboard for many hours every day",
      "Sitting in an ergonomic chair with correct posture",
      "Taking frequent breaks during long work sessions",
    ],
    optionRationales: [
      "One hour a week is far below the threshold where RSI develops. Light, occasional use does not strain the same tissues repeatedly enough to cause injury.",
      null,
      "Correct posture and an ergonomic chair reduce the risk of RSI, they do not cause it. These are protective factors, not risk factors.",
      "Frequent breaks are one of the three defences against RSI. They interrupt the repetitive motion before it can cause damage.",
    ],
    correct: 1,
    explanation: "## Three Causes\n\nRSI is usually caused by a combination of three factors: **repetitive activity**, **improper technique**, and **uninterrupted intensity**.\n\nRepetitive activity means doing the same motion over a long period — typing on a keyboard for multiple hours every day, year after year. Improper technique means using the wrong posture or procedure — slouching in a chair, holding the wrist at an awkward angle, gripping the mouse too tightly. Uninterrupted intensity means performing the same high-level activity without frequent periods of rest — working at a computer all day without breaks.\n\nThe three factors compound. A user who types for hours in a bad posture without breaks faces all three at once, which is why the injury develops so much faster in that situation than in any single factor on its own. The remedy is the same principle in reverse: reduce the repetition, fix the technique, and introduce breaks. Any one of the three reduces the risk. All three together bring it down substantially.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "What is ergonomics?",
    options: [
      "The study of how computers process data",
      "Software that monitors employee productivity",
      "A branch of medicine for treating existing RSI",
      "The design and arrangement of items for safe interaction",
    ],
    optionRationales: [
      "Computer science is the study of computation. Ergonomics is the study of how people interact physically with tools and equipment.",
      "Productivity monitoring is a software practice. Ergonomics is a design science — it concerns physical interaction, not performance measurement.",
      "Medicine treats injuries that have already occurred. Ergonomics is preventive — it designs the workspace so the injury does not develop in the first place.",
      null,
    ],
    correct: 3,
    explanation: "## Design for the Body\n\n**Ergonomics** is the applied science of designing and arranging items so that people interact with them efficiently and safely. It is the discipline behind every recommendation about posture, chair height, monitor distance, and keyboard angle.\n\nThe recommendations for an ergonomic sitting setup are specific. Elbows at about 90 degrees with arms and hands roughly parallel to the floor. A viewing angle of about 20 degrees to the centre of the screen. A viewing distance of 18 to 28 inches. Keyboard height between 23 and 28 inches depending on the user's height. An adjustable chair with four or five legs for stability. Feet flat on the floor.\n\nThe purpose of the setup is not comfort alone. Each measurement keeps the body in a position it can maintain for hours without strain. A monitor that is too close forces the eyes to work harder. A keyboard that is too high forces the wrists to bend upward. A chair that is too low forces the shoulders to rise. Each of these positions is tolerable for a few minutes and damaging over a few years. Ergonomics exists to prevent the slow accumulation of damage that comes from doing the wrong thing in small ways for a long time.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "What is technology addiction?",
    options: [
      "A software dependency that requires constant updates",
      "A hardware failure caused by overuse",
      "A technical fault that causes a device to freeze",
      "A user becoming obsessed with a technology device",
    ],
    optionRationales: [
      "Software requiring updates is a normal feature of modern systems, not an addiction. The term describes the user's behaviour, not the software's behaviour.",
      "Hardware failure from overuse is a physical outcome, not an addiction. The two are unrelated — a device can fail without the user being addicted, and an addiction can exist without the device failing.",
      "A frozen device is a technical problem, not a behavioral one. Technology addiction concerns the user's relationship with the device, not the device's functionality.",
      null,
    ],
    correct: 3,
    explanation: "## Obsessed with the Screen\n\n**Technology addiction** is a behavioral condition in which a user becomes obsessed with using a technology device. It is not the use itself that defines the addiction — people use technology heavily for work and study — but the loss of control over when and whether to stop.\n\nTechnology addiction sits alongside other behavioral risks this identifies: a sedentary lifestyle, impaired psychological development, and reduced social interaction. Together these describe a cluster of health concerns that are not caused by any single device but by the way devices shape daily behaviour. A user who spends hours on a phone is not just failing to exercise; they are also failing to develop face-to-face social skills and reducing the depth of their in-person relationships.\n\nUnlike RSI, which has physical symptoms, technology addiction is harder to recognise from the inside. The person experiencing it often does not see the pattern — the use feels normal because it is constant. This is why this is framed it as a hazard to be aware of rather than a problem to be fixed after the fact. Awareness is the first defence.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "What is doxing?",
    options: [
      "A type of cyberbullying that shares private information publicly",
      "The process of blocking a sender from contacting you",
      "A method for saving web pages to read offline",
      "A technique for encrypting sensitive documents",
    ],
    optionRationales: [
      null,
      "Blocking prevents contact from a specific sender. Doxing does the opposite — it broadcasts the target's information so that anyone can contact or locate them.",
      "Saving pages for offline reading is a convenience feature of browsers. It has no relationship to harassment.",
      "Encryption protects documents. Doxing exposes them. The two are opposite in every meaningful way.",
    ],
    correct: 0,
    explanation: "## Exposing to Harm\n\n**Doxing** is a form of cyberbullying in which private or personal information about a person is shared publicly — usually online. The word comes from *dox*, an abbreviation for *documents*. The information might include a home address, phone number, workplace, family details, or any other personal data the attacker has gathered.\n\nThe intent distinguishes doxing from ordinary information sharing. The purpose is to expose the target to harassment, threats, or physical harm by making them findable. Attackers often coordinate the release of information with a campaign to encourage others to act on it, turning one act of publication into many acts of harassment.\n\nThe consequences can extend well beyond the online world. A target whose address has been published may have strangers arrive at their home. A target whose workplace is known may receive threatening calls at their job. Some targets have lost employment, been forced to move, or been physically attacked. This is why doxing is treated as a serious form of abuse in most legal systems, not as an extension of ordinary disagreement.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "What is cyberstalking?",
    options: [
      "Reading publicly available information about a person",
      "Physically following a person while carrying a phone",
      "Installing tracking software on your own device",
      "Using technology to stalk a person through messages and calls",
    ],
    optionRationales: [
      "This option does not match what the stem asks for.",
      "Physical following is stalking, not cyberstalking. The physical act is separate — it happens in the real world, and cyberstalking happens through digital communication.",
      "Self-tracking software is voluntary. Cyberstalking is imposed on a victim, who may not even know it is happening.",
      null,
    ],
    correct: 3,
    explanation: "## Following Online\n\n**Cyberstalking** is the use of technology to stalk another person through email, text messages, phone calls, and other forms of digital communication. It is the online equivalent of physical stalking, and it can be just as damaging.\n\nThe difference from physical stalking is reach and persistence. A physical stalker has to be in the same place as the target. A cyberstalker can reach the target from anywhere, at any hour, on any device the target uses. A victim may block one channel of contact and be reached through another. The sense of being followed is not tied to any location — it follows the victim onto every screen in their life.\n\nCyberstalking often accompanies other forms of harassment. Doxing may be used to gather the information the stalker needs. Technology addiction in the attacker may drive obsessive behaviour. The two behaviours reinforce each other in ways that make both harder to escape. The defence is to document everything, block every channel where possible, and involve law enforcement — because in most jurisdictions cyberstalking is a crime, not just a social problem.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "What makes cyberbullying more difficult to escape than traditional bullying?",
    options: [
      "It only involves strangers, never people the victim knows",
      "It uses images rather than written words",
      "It happens only in countries with strict Internet laws",
      "It follows the victim home and may be visible for years",
    ],
    optionRationales: [
      "Cyberbullying frequently involves people the victim knows — classmates, colleagues, or acquaintances. The anonymity of the online world can enable it, but it does not require it.",
      "Cyberbullying can use images, text, audio, or video. The medium varies and is not what makes it difficult to escape.",
      "Cyberbullying happens in every jurisdiction, regardless of Internet laws. The legal environment affects the response, not whether the harm occurs.",
      null,
    ],
    correct: 3,
    explanation: "## Three Harms\n\nCyberbullying is more difficult to escape than traditional bullying for three specific reasons.\n\nFirst, it seems to never end. A victim of traditional bullying can leave the place where the bullying occurs — go home, change schools, move on. Online comments remain visible all the time, and the victim can be reached on any device, at any hour. There is no place to go that the bullying does not follow.\n\nSecond, everyone knows about it. Mean words spoken to a victim are heard only by those nearby. A cyberbully can post comments that anyone can read. The audience is potentially unlimited, and the humiliation is public in a way that face-to-face bullying is not.\n\nThird, it may follow for a lifetime. Traditional bullying usually stops when the people involved move on. Posted comments can remain visible for years, indexed by search engines, discoverable by anyone — including college admissions officers and hiring managers. A single act of cyberbullying at sixteen can still be affecting the victim at thirty. No other form of bullying has this property, and it is what makes the online version uniquely damaging.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.10-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.10 Protecting Yourself When Using Devices",
    q: "How can a user reduce the risk of developing RSI?",
    options: [
      "Work continuously in a single long session",
      "Increase the speed of typing to finish work faster",
      "Use a smaller keyboard to reduce hand movement",
      "Take frequent breaks and maintain proper posture",
    ],
    optionRationales: [
      "A single long session combines all three causes of RSI — repetition, sustained posture, and no rest. The recommendation is the opposite.",
      "Typing faster increases the number of repetitions per minute and the strain on the same tissues. Speed is a risk factor, not a prevention.",
      "A smaller keyboard can make wrist position more awkward, not less. The size of the keyboard matters less than whether the user's hands are in a neutral position.",
      null,
    ],
    correct: 3,
    explanation: "## Break, Position, Repeat\n\nThe two most effective strategies against RSI are **taking frequent breaks** and **maintaining proper posture**. Both interrupt the mechanism by which RSI develops.\n\nBreaks work because they interrupt the repetition. A user who types for ten minutes and rests for one faces a different risk profile from a user who types for three hours straight, even though the total keystrokes might be similar. The rest periods let the tissues recover before damage accumulates. Modern RSI-prevention software often reminds users to take breaks at fixed intervals, and the reminders are easy to dismiss — but the practice matters more than the reminder.\n\nPosture works because it keeps the body in a neutral position. Elbows at about 90 degrees, wrists straight, shoulders relaxed, monitor at eye level. A neutral position requires the muscles to work less than a bent or angled position, and less work means less strain. Combined with a properly adjusted chair and keyboard, correct posture reduces the baseline load on every tissue in the upper body.\n\nThe two strategies work best together. Breaks without posture changes still leave the body working harder than it needs to. Posture changes without breaks still accumulate damage over time. The recommendations reinforce each other — these are listed them together for that reason.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-001",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "What is e-waste?",
    options: [
      "Errors generated by malfunctioning hardware",
      "Data that has been overwritten on a hard drive",
      "Electronic waste from discarded digital devices",
      "Emails marked for deletion but not yet removed",
    ],
    optionRationales: [
      "Errors are software events. E-waste is discarded equipment. The two are separate categories and are not caused by each other.",
      "Overwritten data is a data-management practice. E-waste concerns physical disposal of the equipment, not what happens to the data inside it.",
      null,
      "Queued emails are data, not hardware. E-waste is physical — it consists of the devices themselves after they stop being useful.",
    ],
    correct: 2,
    explanation: "## Discarded Devices\n\n**E-waste** is electronic waste from discarded digital devices. It includes computers, monitors, phones, tablets, printers, cables, chargers, and any other electronic equipment that has reached the end of its useful life.\n\nThe problem is scale. Devices are replaced frequently — often every two to four years for phones, every four to six years for computers — and the old equipment has to go somewhere. Because electronics contain materials that are difficult to break down and process, ordinary disposal methods are not sufficient.\n\nThe problem is also toxicity. E-waste often contains toxic metals like lead and mercury, which contaminate the ground and water supply when devices break down in a landfill. Lead can damage the nervous system; mercury affects the brain and kidneys. When e-waste leaches into the ground, those metals can reach drinking water and farmland, and the harm spreads far beyond the original disposal site. This is why e-waste requires special handling rather than ordinary trash disposal.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-002",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "Which of the following is a responsible method for disposing of e-waste?",
    options: [
      "Throwing the device in the regular household trash",
      "Sending it to a recycling facility",
      "Storing it indefinitely in a closet",
      "Shipping it to a landfill in another country",
    ],
    optionRationales: [
      "Regular trash goes to a landfill, where the toxic metals in the device leach into the ground and water. This is the disposal method this is identified as harmful.",
      null,
      "Indefinite storage defers the problem rather than solving it. The device still exists, the materials are still not reclaimed, and the user still has no plan for what happens when the closet is cleared out.",
      "Exporting waste to another country moves the problem geographically but does not eliminate it. The harm still occurs, often under worse environmental regulations.",
    ],
    correct: 1,
    explanation: "## Three Responsible Paths\n\nThree methods are considered responsible for e-waste disposal: **send it to a recycling facility**, **donate it to a charity or nonprofit organization**, or **bring it to a technology store or firm** that accepts used electronics.\n\nEach path addresses the same goal from a different angle. Recycling captures the metals and materials inside the device so they can be reused, keeping them out of landfills. Donating extends the useful life of equipment that still works, giving it a second purpose before it eventually requires disposal. Returning devices to a technology retailer typically routes them into manufacturer-run recycling programmes that handle the material safely.\n\nThe three options are not mutually exclusive. A user might donate a working laptop and recycle the battery that no longer holds a charge. The point is that none of these paths ends with the device in ordinary trash, and each keeps toxic materials out of the ground and water.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-003",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "What does the Sustainable Electronics Management (SEM) initiative promote?",
    options: [
      "The reduction of e-waste through responsible practices",
      "The design of devices that cannot be recycled",
      "The replacement of devices on a fixed annual schedule",
      "The expansion of e-waste exports to developing countries",
    ],
    optionRationales: [
      null,
      "Designing non-recyclable devices would make the problem worse. SEM encourages design choices that make recycling easier, not harder.",
      "Fixed replacement schedules increase waste rather than reducing it. One of SEM's core messages is to keep devices longer, not replace them on a clock.",
      "Exporting waste is the opposite of what SEM promotes. The initiative exists precisely because shipping e-waste away from wealthy countries has left developing nations dealing with toxic materials they did not generate.",
    ],
    correct: 0,
    explanation: "## Reduce, Donate, Recycle\n\nThe **Sustainable Electronics Management (SEM)** initiative promotes the reduction of e-waste through a set of specific action steps.\n\nThe first step is **Buy Green** — when purchasing new electronic equipment, choose products designed sustainably. This means equipment built to last longer, using fewer toxic materials, and designed to be recyclable when it finally reaches end of life. The purchase decision matters because it determines how much waste the device will eventually become.\n\nThe second step is **Donate** — give used but still functional equipment to a school, charity, or nonprofit organization. This extends the device's useful life and gets value out of equipment that would otherwise be discarded.\n\nThe third step is **Recycle** — send equipment to a verified used electronics recycling centre at the end of its life. The word *verified* matters. Not every facility that claims to recycle electronics does so responsibly; some simply ship the waste abroad or process it unsafely. Verified centres handle the materials in ways that protect workers and the environment. Together the three steps cover the entire lifecycle of a device — how it is made, how it is used, and how it is disposed.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-004",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "Why is e-waste especially harmful to the environment?",
    options: [
      "It contains toxic metals like lead and mercury",
      "It releases dangerous heat as it decomposes",
      "It emits radio waves that interfere with nearby equipment",
      "It takes up too much physical space in landfills",
    ],
    optionRationales: [
      null,
      "Decomposition of e-waste does not generate significant heat. The dangerous materials inside are chemical, not thermal.",
      "Radio emissions from discarded devices stop once the battery is drained or the device is no longer powered. The environmental harm comes from the material composition, not from active emissions.",
      "Volume is a real concern, but it is not what makes e-waste worse than ordinary trash. The toxicity is what makes the harm specific and lasting.",
    ],
    correct: 0,
    explanation: "## Toxic Metals\n\nThe environmental harm of e-waste comes from its **toxic metal content** — primarily lead and mercury, along with smaller amounts of cadmium, chromium, and other heavy metals.\n\nWhen e-waste is placed in a landfill, those metals do not disappear. They leach out of the device over time, entering the soil and eventually reaching groundwater. Lead and mercury are persistent — they do not break down — so once they enter an ecosystem, they remain there indefinitely, accumulating in the tissues of plants and animals and moving up the food chain.\n\nThe health consequences are serious. Lead exposure damages the nervous system, particularly in children, where it can cause permanent cognitive impairment. Mercury affects the brain, kidneys, and lungs. Cadmium is a carcinogen. Because these metals persist and accumulate, the harm from a single discarded device can reach far beyond the disposal site. This is why e-waste is treated as a special category of waste with its own disposal requirements, rather than as part of the general municipal trash stream.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-005",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "What does the 'Buy Green' step of SEM recommend?",
    options: [
      "Buying the cheapest equipment available",
      "Buying equipment only from local retailers",
      "Buying equipment designed to be sustainable",
      "Buying used equipment in any condition",
    ],
    optionRationales: [
      "Cheap equipment usually has a shorter lifespan, which means it becomes waste sooner. Price alone is not what the SEM step considers.",
      "Local purchasing reduces shipping emissions, but SEM's Buy Green step concerns the design of the equipment itself, not where it is bought.",
      null,
      "Buying equipment in any condition ignores whether it will function. The recommendation is to buy used equipment that still works, then donate it when it no longer does — not to buy broken equipment and add it to waste.",
    ],
    correct: 2,
    explanation: "## Designed for the Long Run\n\n**Buy Green** means purchasing electronic equipment that has been **designed sustainably**. The equipment should use fewer toxic materials, be built to last longer, and be capable of being recycled when it reaches end of life.\n\nThe step matters because it addresses the problem at standard teaching. All the recycling infrastructure in the world cannot make a device that was built with toxic materials disappear. The choice at purchase determines what the eventual waste will contain. A device built with fewer heavy metals will leach fewer heavy metals into the soil when it is disposed of — regardless of how well the disposal is handled.\n\nThe three criteria of Buy Green also work together. Equipment built to last longer stays in use longer, which reduces the number of replacement purchases and the total volume of waste. Equipment designed for recyclability makes the eventual recycling more efficient and less costly. And equipment made with fewer toxic materials is safer throughout its entire lifecycle — during manufacture, use, and disposal. The purchase decision is the first opportunity in the lifecycle to influence every step that comes after.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-006",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "How does the 'Donate' step of SEM reduce e-waste?",
    options: [
      "By storing equipment indefinitely in a warehouse",
      "By shipping equipment to other countries",
      "By sending equipment to a recycling centre immediately",
      "By extending the useful life of functional equipment",
    ],
    optionRationales: [
      "Storage does not extend the useful life of anything — the equipment is not being used, and its eventual disposal is only postponed.",
      "Shipping abroad is not what donation means. A donation goes to a specific recipient who will use the equipment, not to a distant facility where its fate is unclear.",
      "Sending equipment to recycling is the third step of SEM, not the second. Donation keeps equipment in use rather than dismantling it.",
      null,
    ],
    correct: 3,
    explanation: "## Second Life\n\nThe **Donate** step reduces e-waste by **extending the useful life of functional equipment**. A device that is given to a school, charity, or nonprofit continues to serve a purpose instead of being dismantled.\n\nThe value is not just keeping the device out of a landfill — it is keeping the device in production. Every year a working computer stays in use is a year in which no new computer needs to be manufactured for the person who receives it. Since manufacturing is the most environmentally expensive stage of a device's life — it accounts for the majority of the energy and materials consumed across the entire lifecycle — delaying replacement has a larger impact than any recycling step that follows.\n\nThe word *functional* is important. Donation is not a place to send broken equipment. A device that does not work will be discarded by the recipient, who then has the same e-waste problem the original user avoided. The point of donation is to give a device that still has useful life — not to pass along a problem.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-007",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "Why does SEM specify that recycled equipment should go to a 'verified' facility?",
    options: [
      "Because unverified facilities may not handle waste safely",
      "Because verified facilities accept more types of devices",
      "Because unverified facilities charge higher prices",
      "Because verification is required by international law",
    ],
    optionRationales: [
      null,
      "Device acceptance varies between facilities regardless of verification status. The distinction is what the facility does with the material, not what it accepts.",
      "Cost is not the issue SEM addresses. The distinction between verified and unverified facilities is about safety and legality, not price.",
      "Verification is not mandated by international law in most jurisdictions. It is a private certification that indicates responsible handling, not a legal requirement.",
    ],
    correct: 0,
    explanation: "## The Verification Gap\n\nThe word *verified* in the SEM recommendation is doing essential work. **Unverified recycling facilities may not handle electronic waste safely** — some simply ship the material to developing countries where it is processed under hazardous conditions, and others use methods that expose workers to the same toxic metals the recycling was supposed to contain.\n\nThe problem is that recycling companies are not all the same. A facility that handles waste paper or plastics may accept electronics without having the equipment to process them safely. A facility in a country with weak environmental regulations may dissolve circuit boards in open acid baths, releasing lead and mercury into the air and water, and exposing workers to chemicals that cause serious long-term health problems.\n\nVerified facilities have been audited to ensure they handle e-waste in ways that protect both workers and the environment. The certification typically requires that the facility does not export waste illegally, does not incinerate or dissolve materials in open air, does not send waste to unverified downstream processors, and does dispose of the recovered materials through channels that can be traced. A verified facility costs more to operate, which is why the verification matters — the lower-cost alternatives are often lower-cost because they are doing something the verified facilities refuse to do.",
    status: "approved"
  },

  {
    id: "CS110-T1-U2-2.11-008",
    mainTopic: "Unit 2: Computer Hardware",
    topic: "2.11 Disposing of Hardware Responsibly",
    q: "Which of the following best describes the relationship between Buy Green, Donate, and Recycle?",
    options: [
      "They should be applied in a different order depending on the device",
      "They apply only to enterprise-scale organizations",
      "They are three alternative disposal methods of equal value",
      "They cover the manufacture, use, and disposal stages of a device",
    ],
    optionRationales: [
      "The order is fixed by the lifecycle of a device, not by preference. Buy happens first because purchase comes first.",
      "The three steps apply at any scale — a single user, a household, an office, or a global manufacturer. The framework is universal.",
      "They are not alternatives — they are steps in a sequence that a single user can follow across the life of a single device. Treating them as alternatives loses the point of the framework.",
      null,
    ],
    correct: 3,
    explanation: "## The Lifecycle Framework\n\nBuy Green, Donate, and Recycle are not three alternatives — they are **three stages covering the full lifecycle of a device**.\n\nBuy Green covers the manufacture stage. It influences what materials the device contains, how long it will last, and how easy it will be to recycle. This stage is entirely controlled by the purchase decision, and it determines what kind of waste the device will eventually become.\n\nDonate covers the use stage. It extends the device's useful life by transferring it to a new user who can benefit from it. Every year of extended use is a year of avoided manufacturing for the eventual recipient.\n\nRecycle covers the disposal stage. When a device can no longer serve any user, it enters a verified recycling stream that recovers the metals and materials inside it and disposes of the remaining waste safely.\n\nThe framework's power comes from being a framework. Any one of the three steps reduces e-waste in isolation — but they are designed to be followed together, in order, across the entire lifetime of a device. A user who buys sustainably, donates when the device still works, and recycles when it no longer does has effectively addressed all three points at which e-waste is generated. No single step can cover the entire problem, and no other framework this provides covers it as completely.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 3 · INPUT AND OUTPUT  (94 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T1-U3-3.1-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.1 Input and Output Basics",
    q: "What is data in the context of input and output?",
    options: [
      "A backup of files stored on a remote server",
      "A collection of unprocessed items and values",
      "Information already processed by the CPU",
      "The instructions that tell a program what to do",
    ],
    optionRationales: [
      "Backup is a storage practice, not a category of content. What gets backed up is data, but the backup itself is a copy. The term 'data' describes the content, not where a copy of it lives.",
      null,
      "Information feels like the same thing as data because everyday language blurs the two. But the difference is direction: data is the raw input before processing, and information is what comes out the other end. Only one of them has been through the machine.",
      "Instructions feel like data because both are stored in memory and read by the processor. But instructions tell the processor what to do, and data is what the processor works on. The two are distinct even though they travel together.",
    ],
    correct: 1,
    explanation: "## The Raw Material\n\n**Data** is a collection of unprocessed items — text, numbers, images, audio, video. It is what goes into a computer before anything has been done to it.\n\nThe distinction from information is the direction of flow. Data enters, processing transforms it, and information exits. A spreadsheet full of sales figures is data. A chart showing the monthly total is information. They describe the same underlying facts, but only one of them has been through the machine.\n\nThis distinction matters because data alone does not answer questions. A user staring at a table of numbers has to do the work of interpretation in their own head. Information has already done that work — the chart shows the trend, the summary shows the total, and the decision becomes possible. That transformation is what computers are for.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.1-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.1 Input and Output Basics",
    q: "What is a command in the context of computing?",
    options: [
      "A physical button on a keyboard or mouse",
      "A file storing user preferences for an app",
      "An instruction telling a program to act",
      "A type of network protocol between computers",
    ],
    optionRationales: [
      "Buttons feel like commands because pressing one causes something to happen. But the button is the physical switch; the command is the instruction the program receives. The switch and the instruction are two different things even when one triggers the other.",
      "Preferences files store settings that persist between sessions. A command is issued in real time to make the program do something now. The two are different kinds of input.",
      null,
      "Protocols govern how computers communicate with each other. A command is what a user gives to a single program on a single machine. The scale and the direction of communication are different.",
    ],
    correct: 2,
    explanation: "## Triggering an Action\n\nA **command** is an instruction that causes a program or app to perform a specific action. It is what the user issues when they want the program to do something.\n\nCommands come in many forms. A click on a menu item is a command. A keystroke combination like Ctrl+S is a command. A line typed at a terminal prompt is a command. What makes all of them commands is the same: they carry instructions the program interprets and acts on.\n\nThe word *command* implies authority — the user is directing the machine. This is why the terminology has stayed even as the interfaces have changed. Whether the user is typing `ls` at a Unix prompt in 1975 or tapping a Save button in 2025, they are doing the same thing: telling the machine what to do next.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.1-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.1 Input and Output Basics",
    q: "What is a user response in the context of a program?",
    options: [
      "The time it takes for a computer to complete a task",
      "A file the user has saved with a custom name",
      "A typed word entered into a search engine",
      "An instruction issued in reply to a program prompt",
    ],
    optionRationales: [
      "Response time measures latency, not a user action. The two share the word 'response' but describe different things — one is a machine measurement, the other is a human action.",
      "Saving a file is a command the user initiates. A response is triggered by the program's prompt. The distinction is who speaks first.",
      "A search query is a command, not a response. The user types it into an empty field without the program asking first. A response is what the user provides after the program asks a specific question.",
      null,
    ],
    correct: 3,
    explanation: "## Answering a Prompt\n\nA **user response** is an instruction the user issues in reply to a message from the program. The program asks; the user answers.\n\nThe difference from a command is who initiates. A command is issued freely — the user decides when to save a file, when to open a menu, when to run a search. A user response is solicited — the program displays a question and waits. 'Delete this file? Yes or No.' 'Enter your password.' 'Confirm to continue.'\n\nThis distinction exists because different interfaces give the user different levels of control. A command-driven interface gives the user full initiative. A prompt-driven interface narrows the interaction to a specific decision the program needs answered. Both are forms of input, but only one requires the user to react rather than act.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.1-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.1 Input and Output Basics",
    q: "Which of the following is NOT one of the four basic types of output?",
    options: [
      "Commands, such as typed terminal instructions",
      "Video, such as movies and live performances",
      "Text, such as emails and memos",
      "Graphics, such as photos and charts",
    ],
    optionRationales: [
      null,
      "Video is one of the four basic types. This is not the excluded item — it belongs to the standard set.",
      "Text is one of the four basic types. This is not the excluded item — it belongs to the standard set.",
      "Graphics are one of the four basic types. This is not the excluded item — it belongs to the standard set.",
    ],
    correct: 0,
    explanation: "## Four Types\n\nThe four basic types of output are **text**, **graphics**, **audio**, and **video**.\n\nText covers everything written — emails, memos, reports, books, chat messages. Graphics covers images, photographs, icons, charts, and diagrams. Audio covers music, speech, sound effects, and any other sound the computer produces. Video combines moving images with audio to deliver films, live streams, and animations.\n\nCommands are not on this list because they are a type of *input*, not output. The user issues commands; the computer processes them; and the results are delivered back as one of the four output types. Reversing the direction — treating commands as output — would confuse the fundamental distinction between what the user sends to the machine and what the machine sends back.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.1-005",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.1 Input and Output Basics",
    q: "Which of the following best describes the relationship between input and output?",
    options: [
      "Input and output cannot happen at the same time on one machine",
      "Input and output are alternate names for the same process",
      "Input and output are opposite ends of the same data flow",
      "Input only occurs on mobile devices; output only on desktops",
    ],
    optionRationales: [
      "A touchscreen accepts input and produces output in the same physical device at the same time. The two are not mutually exclusive.",
      "The two feel interchangeable because most devices do both. But naming them the same thing would lose the direction of the flow. The distinction is what allows the machine to be understood.",
      null,
      "Both input and output happen on every kind of computer. Device type does not determine which function is available.",
    ],
    correct: 2,
    explanation: "## Two Ends of One Pipeline\n\nInput and output are **opposite ends of the same data flow**. Data enters through an input device, the processor works on it, and the result leaves through an output device.\n\nThe relationship is directional, not categorical. The same physical device can be both, depending on context. A touchscreen accepts taps (input) and displays responses (output) at the same time. A printer receives data from the computer (input to the printer) and produces paper (output from the printer's perspective). The label depends on which direction is being described.\n\nUnderstanding the relationship helps clarify the role of every device in a computer system. A keyboard is at the input end. A monitor is at the output end. Storage sits on both ends — it accepts data being saved and provides data being loaded. Every device's position on the pipeline determines what it is called.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.1-006",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.1 Input and Output Basics",
    q: "What determines whether a device is classified as an input or an output device?",
    options: [
      "The brand of the manufacturer",
      "The price of the device",
      "The direction of data flow relative to the computer",
      "The size and weight of the device",
    ],
    optionRationales: [
      "Brand does not determine function. Any manufacturer makes both input and output devices, often packaged together in the same product.",
      "Price is unrelated to the direction of data flow. Cheap devices and expensive devices fall into both categories.",
      null,
      "Size has no bearing on the classification. A tiny microphone is an input device and a large monitor is an output device; both are classified by function, not by physical characteristics.",
    ],
    correct: 2,
    explanation: "## Follow the Data\n\nThe classification of a device as input or output is determined entirely by **the direction of data flow relative to the computer**.\n\nIf the device sends data into the computer, it is an input device. If it receives data from the computer, it is an output device. A keyboard sends keystrokes inward — input. A monitor receives a display signal — output. A webcam sends video inward — input. A speaker receives audio — output.\n\nThe rule also handles the case of devices that do both. A touchscreen sends touch coordinates inward and receives images outward, so it is both an input and an output device. A multifunction printer scans documents inward and prints them outward, so it too is both. When a device does both, the classification is contextual — the user refers to whichever function is being described.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a manual input device?",
    options: [
      "A device that only works with a wired connection",
      "A device that stores data after each session",
      "A device that captures data automatically without user action",
      "A device where the user enters data directly",
    ],
    optionRationales: [
      "Both wired and wireless devices can be manual. The connection type is unrelated to whether the user is directly providing the data.",
      "Storage after each session is a software feature, not an input classification. Manual input describes what the user does, not where the data ends up.",
      "Automatic capture describes sensors, scanners, and RFID readers — devices that collect data on their own. Manual input requires the user to act.",
      null,
    ],
    correct: 3,
    explanation: "## Direct Entry\n\nA **manual input device** is one in which the user enters data directly. Keyboards, mice, touchpads, styluses, and touchscreens are all manual input devices.\n\nWhat defines them is that the human is standard teaching of the data. The device does not sense the environment or read a tag — it receives what the user chooses to provide. Every keystroke, every mouse movement, every tap is a deliberate act by the user.\n\nThe contrast is with automatic input devices such as barcode readers, sensors, and cameras. Those devices collect data without direct user action, often as a by-product of some other activity. A retail barcode scanner reads products as they pass over it — the cashier swipes, but the data comes from the barcode. A manual input device requires the user to actively input the content itself.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is the typing area on a keyboard?",
    options: [
      "The numeric keypad on the right side",
      "The row of function keys across the top",
      "The main block of alphabetic and numeric keys",
      "The navigation keys in the middle of the board",
    ],
    optionRationales: [
      "The numeric keypad is a specialized region for entering numbers quickly, not the main typing area. It exists alongside the typing area, not as part of it.",
      "Function keys are programmed shortcuts that trigger commands. They are used for actions, not for entering text.",
      null,
      "Navigation keys move the cursor through existing text. The typing area is where new text is entered.",
    ],
    correct: 2,
    explanation: "## Where You Type\n\nThe **typing area** is the main block of alphabetic and numeric keys on a keyboard — the part that looks like a typewriter. It is where most text entry happens.\n\nA standard keyboard is divided into four regions, and each has a purpose. The typing area holds the letters, numbers, punctuation, and modifier keys used to compose content. The function keys along the top trigger commands. The navigation keys (arrows, Page Up, Page Down) move the cursor through existing text. The numeric keypad, when present, provides a faster way to enter numbers.\n\nWhen users talk about 'typing on a keyboard,' they almost always mean the typing area. The other regions exist to support specific tasks, but the typing area is where content is created. This is why the typing area occupies the largest physical space on the keyboard and why keyboards for different languages rearrange this area while keeping the other regions nearly identical.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a function key on a keyboard?",
    options: [
      "A key that moves the insertion point around the screen",
      "A key that inserts a space between words",
      "A key that turns a feature on or off each time it is pressed",
      "A key labeled with the letter F followed by a number",
    ],
    optionRationales: [
      "Moving the insertion point is the role of navigation keys. Function keys trigger program actions.",
      "Inserting a space is what the spacebar does. It is a character key, not a function key.",
      "Toggling a feature is the behavior of a toggle key such as Caps Lock. Function keys trigger commands, not state changes.",
      null,
    ],
    correct: 3,
    explanation: "## The F Row\n\n**Function keys** are labeled with the letter F followed by a number — F1, F2, F3, and so on up to F12 on most keyboards. They are special keys programmed to issue specific commands to the computer or to the currently running program.\n\nWhat each key does depends on the context. In many applications, F1 opens help, F2 renames the selected item, and F5 refreshes the current view. But the assignments are not universal. A program can define any of the function keys to do anything, and the same key often has different behaviors in different programs.\n\nOn modern laptops, function keys often double as media controls — volume, brightness, playback — and the F-key behavior requires holding the Fn modifier. This dual use reflects the reality that most users use media keys far more often than the traditional function assignments. The key is still a function key by design; the media behavior is a convenience layer on top.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "Which of the following is an example of a toggle key?",
    options: [
      "Enter",
      "Shift",
      "Caps Lock",
      "Backspace",
    ],
    optionRationales: [
      "Enter confirms input or starts a new line. It performs an action each time it is pressed, not a state change.",
      "Shift modifies what other keys do while it is held down. It has no persistent state when released.",
      null,
      "Backspace deletes the character before the cursor. It performs one action per press and does not maintain a state.",
    ],
    correct: 2,
    explanation: "## On and Off\n\nA **toggle key** alternates a feature on or off each time it is pressed. **Caps Lock** is the most familiar example: press it once and every letter becomes uppercase until you press it again.\n\nThe word *toggle* comes from the mechanical concept of a switch that flips between two positions. The key does not need to be held — its state persists across many keystrokes. This is what separates it from a modifier key like Shift, which only affects the keystroke it is held for.\n\nCommon toggle keys include Caps Lock, Num Lock, and Scroll Lock. Each controls a persistent setting that affects how subsequent input is interpreted. The user knows the state is active either from a small indicator light or from the behavior of the input itself. The persistence is the point — a user who wants to type several sentences in capitals can press Caps Lock once and type normally, rather than holding Shift for every character.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-005",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What are navigation keys used for on a keyboard?",
    options: [
      "Issuing predefined commands like Save or Print",
      "Moving the insertion point around the screen",
      "Typing letters and numbers into a document",
      "Toggling features such as Caps Lock on or off",
    ],
    optionRationales: [
      "Issuing predefined commands is the role of function keys. Navigation keys move the insertion point, not trigger actions.",
      null,
      "Typing letters and numbers is what the main typing area does. Navigation keys move through text rather than creating it.",
      "Toggling features is the role of toggle keys such as Caps Lock or Num Lock.",
    ],
    correct: 1,
    explanation: "## Moving Around\n\n**Navigation keys** move the insertion point — the place where the next character will be typed — around a document, web page, or interface. The arrow keys, Page Up, Page Down, Home, and End all belong to this group.\n\nThe purpose is to let users move through content without reaching for a mouse. A user who has just finished typing a paragraph can press Home to jump to the start of the line, or Page Down to scroll a screen forward, without moving their hands away from the keyboard.\n\nThe placement of these keys reflects their role. On most keyboards, the arrow keys sit just below the typing area, close to the keys a user's right hand rests on. Page Up and Page Down are typically near the top-right of the typing area, above the arrows, in a cluster that a user can find by touch once they are familiar with it. The layout is designed to make navigation fast for users who prefer the keyboard over the mouse.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-006",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a keyboard shortcut?",
    options: [
      "A macro that records keystrokes automatically",
      "A key combination that performs a command",
      "A setting that reduces keyboard response delay",
      "An abbreviated label printed on a key",
    ],
    optionRationales: [
      "Macros record and replay sequences; a shortcut triggers a single command. The two work at different levels of complexity.",
      null,
      "Response delay is a hardware or software property. Shortcuts are user-initiated actions.",
      "Printed labels are physical marks on keys. A shortcut is an action the user performs by pressing keys, not the legend written on them.",
    ],
    correct: 1,
    explanation: "## Faster Than a Menu\n\nA **keyboard shortcut** is a key or combination of keys that performs a command. Ctrl+S saves. Ctrl+C copies. Ctrl+V pastes. Alt+Tab switches windows. Each is a shortcut — a shorter path to an action that would otherwise require several mouse clicks.\n\nThe reason shortcuts exist is speed. To save a file with the mouse, a user has to move to the menu, open it, find the Save option, and click. The same user can press two keys and achieve the same result in a fraction of the time. For users who perform the same actions hundreds of times a day, the savings add up.\n\nShortcuts are not universal, though the most common ones are widely shared across applications. Ctrl+S usually saves in Windows and Linux; Cmd+S saves on a Mac. The specific key combinations vary by platform and by program, which is why applications typically list their shortcuts in a help menu or keyboard reference.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-007",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a pointer in a graphical user interface?",
    options: [
      "A symbol on screen that changes shape by context",
      "A device that links peripherals to the computer",
      "A toolbar label naming the current tool",
      "A password field for controlling operating system access",
    ],
    optionRationales: [
      null,
      "A connector is a physical port. A pointer is an on-screen symbol.",
      "A toolbar label is a static text element. The pointer moves and changes shape based on where it is and what it is over.",
      "A password field accepts input. The pointer shows the user where their next click will land.",
    ],
    correct: 0,
    explanation: "## The Moving Cursor\n\nIn a graphical user interface, the **pointer** is a small symbol on the screen that indicates where the next mouse action will occur. It is what the user sees move when they move the mouse or drag on a touchpad.\n\nThe shape of the pointer carries information. Over text, it becomes an I-beam. Over a clickable link, it becomes a hand. Over an editable field, it becomes a text insertion cursor. When the system is busy, it becomes an hourglass or a spinner. When dragging content, it changes to indicate the type of drag. Each shape change tells the user what will happen if they click.\n\nThis contextual behavior is one of the defining features of modern GUIs. Before graphical interfaces, users had to know from memory what each key would do. With a pointer, the interface itself tells the user what is possible at the current position. The feedback is instantaneous and continuous — a running commentary on what the user can do next.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-008",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is an optical mouse?",
    options: [
      "A mouse that uses a laser to detect motion",
      "A mouse that senses hand pressure to detect motion",
      "A mouse with a rolling ball to detect motion",
      "A mouse with optical sensors to detect motion",
    ],
    optionRationales: [
      "A laser mouse is a related but distinct technology. Laser mice use an infrared laser; optical mice use an LED. Both track the surface, but the light source differs.",
      "Hand pressure is not used by any common mouse design. Trackpads and touch screens sense touch; mice track movement across a surface.",
      "A rolling ball describes a mechanical mouse. Optical mice have no moving parts for tracking.",
      null,
    ],
    correct: 3,
    explanation: "## Light on the Desk\n\nAn **optical mouse** uses optical sensors — typically an LED paired with a small camera — to detect the surface beneath it and track movement. There are no moving parts inside.\n\nThe advantage over the older mechanical mouse is durability. Mechanical mice use a rolling ball that collects dust, eventually stops rolling smoothly, and has to be cleaned or replaced. An optical mouse has nothing to collect dust, nothing to wear out, and no need for a mousepad with the right texture. It works on most flat surfaces almost immediately.\n\nA related technology, the laser mouse, uses a laser as its light source instead of an LED. The difference is precision: laser mice detect surface features at a finer scale, which makes them slightly more accurate on difficult surfaces and in high-speed movement. For ordinary use, optical mice are more than sufficient, and they are considerably cheaper. Both belong to the same family — the difference is the light source, not the tracking principle.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-009",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is the purpose of an ergonomic mouse?",
    options: [
      "To connect without any cable",
      "To move the pointer through the air",
      "To reduce discomfort from strain injuries",
      "To replace the keyboard for typing",
    ],
    optionRationales: [
      "Wireless connectivity is a feature that some ergonomic mice include, but it is not the defining purpose. Ergonomic refers to the shape, not the connection.",
      "Air mice exist but are a separate category. Ergonomic mice are ordinary desk mice shaped to reduce strain.",
      null,
      "No mouse replaces a keyboard. Mice point and click; keyboards type. The two do different jobs.",
    ],
    correct: 2,
    explanation: "## Designed for the Hand\n\nThe purpose of an **ergonomic mouse** is to **reduce the discomfort that comes from sustained use** — the pain and inflammation of repetitive strain injury. The mouse does not change the input function; it changes how the hand interacts with the device.\n\nConventional mice have two design flaws for extended use. They force the hand into a pronated position — palm down, forearm twisted — which strains the muscles of the forearm over time. And they encourage the user to grip tightly and move from the wrist, which puts pressure on the tendons that pass through the wrist.\n\nErgonomic mice address these problems with different shapes. Vertical mice rotate the hand into a handshake position, which keeps the forearm neutral. Trackball mice keep the hand stationary and let the user roll a ball with the thumb or fingers, eliminating arm movement entirely. Larger mice support more of the hand, reducing the grip force required. None of these designs are cosmetic — each one changes the physical work the hand has to do.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-010",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "Where are touchpads most commonly found?",
    options: [
      "On servers in data centres",
      "On mechanical keyboards for gaming",
      "On laptops and convertible tablets",
      "On desktop computers paired with a monitor",
    ],
    optionRationales: [
      "Servers are administered remotely and rarely have any pointing device attached. They are designed for headless operation.",
      "Mechanical gaming keyboards usually pair with a separate gaming mouse. A touchpad would defeat the purpose of a mechanical keyboard's precision layout.",
      null,
      "Desktops typically use a mouse because there is room on the desk for one. Touchpads are usually on devices where space is limited.",
    ],
    correct: 2,
    explanation: "## The Flat Rectangle\n\nA **touchpad** is a small, flat, rectangular pointing device that is sensitive to pressure and motion. Touchpads are found most often on **laptops and convertible tablets** because they take up no desk space.\n\nThe advantage is portability. A laptop user can work from any surface — a café table, an airport seat, their lap — without needing a flat, clean area for a mouse. The touchpad is built into the machine, always available, and impossible to lose.\n\nThe trade-off is precision. A mouse can move the pointer with one motion of the wrist; a touchpad requires dragging a finger repeatedly to cover the same distance. Modern touchpads include gestures — two-finger scrolls, three-finger swipes, pinch-to-zoom — that recover some of the lost convenience, but for precision work like photo editing or CAD, most users still connect a mouse. The touchpad exists because the alternative would be worse: no pointing device at all.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-011",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a gesture in the context of touch input?",
    options: [
      "A voice command spoken into a microphone",
      "A security pattern used to unlock a phone",
      "A motion made on a touch screen by hand or fingers",
      "A stylus motion used only for drawing",
    ],
    optionRationales: [
      "Voice commands are not gestures. Gestures are physical movements on or near a touchscreen; voice uses audio input.",
      "A lock pattern is one specific gesture, not the general definition. It is an example of the category, not the category itself.",
      null,
      "A stylus motion is one input method, but gestures also include finger motions. Stylus gestures are a subset of the broader category.",
    ],
    correct: 2,
    explanation: "## Fingers on the Screen\n\nA **gesture** is a motion made on a touch screen with one or more fingers or with the hand. Tap, double-tap, press and hold, drag, swipe, stretch, and pinch are the common gestures.\n\nEach gesture has a conventional meaning. Tap selects. Double-tap zooms in on the tapped location. Press and hold opens a contextual menu. Drag moves an item across the screen. Swipe scrolls in the direction of the swipe. Stretch — moving two fingers apart — zooms in. Pinch — moving two fingers together — zooms out.\n\nThe gestures are not arbitrary. They are chosen so the physical motion matches the result. To make something bigger, you spread it apart. To make something smaller, you bring it together. To move forward through content, you sweep your finger in the direction of the content. This physical correspondence is what makes touch interfaces feel intuitive to new users — the gesture does not have to be learned, because the motion itself suggests the meaning.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-012",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "Which touch gesture moves two fingers together to zoom out?",
    options: [
      "Swipe",
      "Stretch",
      "Pinch",
      "Double tap",
    ],
    optionRationales: [
      "Swipe moves one finger across the screen to scroll. It does not change zoom.",
      "Stretch moves two fingers apart to zoom in. It is the opposite motion of pinch.",
      null,
      "Double tap involves one finger tapping twice in quick succession. It zooms in on the tapped location but does not use two fingers.",
    ],
    correct: 2,
    explanation: "## Fingers Together\n\n**Pinch** is the gesture of bringing two fingers together on a touch screen. It zooms out — showing a larger area of the content so it appears smaller on screen.\n\nThe pinch and stretch gestures form a natural pair. They are the two directions of the same motion: fingers moving apart means making content bigger, fingers moving together means making it smaller. The gestures work on any content that supports zoom — maps, photos, documents, web pages — and the scale changes continuously as the fingers move, giving the user direct control over the size.\n\nThis kind of direct manipulation is a design principle that predates touch screens. In the 1970s and 1980s, computer scientists discovered that interfaces which let users manipulate objects directly felt more intuitive than interfaces that required commands. Pinch and stretch are one of the clearest examples — the user's hand literally performs the operation on the content, and the content responds accordingly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-013",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What does a press-and-hold gesture do on a touch screen?",
    options: [
      "It types a character into a text field",
      "It opens a shortcut menu or activates move mode",
      "It scrolls the screen horizontally",
      "It zooms the content out to show more",
    ],
    optionRationales: [
      "Typing into a text field requires tapping the field first and then using the keyboard. Press and hold does not enter characters.",
      null,
      "Scrolling horizontally is done by swiping. Press and hold requires the finger to stay still.",
      "Zooming out is done by pinching. Press and hold does not change the scale of the content.",
    ],
    correct: 1,
    explanation: "## Hold for Options\n\n**Press and hold** — resting a finger on the screen without moving it for a moment — is the touch equivalent of right-clicking on a desktop. It opens a **contextual menu** that offers options relevant to whatever the finger is touching.\n\nThe contextual menu is where advanced actions live in touch interfaces. Tapping an item usually performs the default action — opening it, selecting it, following it. Pressing and holding offers the other choices: rename, delete, share, move, copy, get information. This two-tier interaction keeps the primary interface uncluttered while still giving access to less common operations.\n\nSome interfaces also use press and hold for a different purpose: activating a drag mode. On the home screen of most phones, holding an app icon for a moment picks it up so it can be dragged to a new location. The behavior is the same gesture, but the response depends on what the user is touching. This context-sensitivity is why touch gestures feel intuitive once learned — the gesture is a signal, and the interface decides what it means.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-014",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is pen input?",
    options: [
      "Scanning handwritten paper documents",
      "Writing on a surface with a stylus or digital pen",
      "Reading text aloud with a screen reader",
      "Typing on a keyboard with pen-shaped keys",
    ],
    optionRationales: [
      "Scanning captures existing handwriting after it was written on paper. Pen input captures handwriting as it is written on a digital surface.",
      null,
      "Reading aloud is output, not input. It is also performed by software, not by a pen.",
      "Keyboard layouts are not pen-shaped, and typing is not pen input. The two are separate input methods.",
    ],
    correct: 1,
    explanation: "## Writing on the Screen\n\n**Pen input** is writing or drawing on a flat surface with a **stylus** — a small device shaped like a pen that transmits position to the screen or tablet underneath. The stylus is not a writing instrument with ink; it uses pressure and position to signal the computer.\n\nThe technology works because the digitizing surface knows where the stylus is and how much pressure is being applied. That pressure sensitivity is what makes pen input different from finger input. A finger is always touching with roughly the same pressure; a stylus can be pressed lightly or heavily, and the software can respond differently — a light stroke is a thin line, a heavy stroke is thick. This is what makes pen input the standard tool for illustration, calligraphy, and handwriting recognition.\n\nThe category includes different physical designs. A **graphics tablet** (discussed separately) is a flat digitizing board with no display. A **digital pen** captures handwriting and transmits it wirelessly. A **signature capture pad** records signatures for transactions. All three share the same principle — the stylus is standard teaching of data, and the surface interprets where and how hard it is pressing.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-015",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What does a digital pen do?",
    options: [
      "It illuminates the surface it writes on",
      "It translates handwriting between languages in real time",
      "It scans printed documents into a computer",
      "It captures handwriting and converts it to digital format",
    ],
    optionRationales: [
      "Some styluses have lights, but the light is decorative or for visibility, not the primary function. A digital pen's defining job is capture, not illumination.",
      "Translation is a software task, not a pen function. A digital pen captures what is written; translation happens afterward in a separate application.",
      "Scanning captures existing paper documents. A digital pen captures new handwriting as it is written.",
      null,
    ],
    correct: 3,
    explanation: "## Written Digitally\n\nA **digital pen** captures handwriting and drawings and converts them into digital format. The user writes naturally, and the pen records every stroke.\n\nWhat happens next depends on the software. Handwriting recognition translates the strokes into typed characters, so a page of handwritten notes becomes an editable text document. Drawing software keeps the strokes as line art, so a sketch becomes an image file. Form-filling software matches the strokes to specific fields, so a signed contract gets recorded as a completed form. The same physical gesture — writing by hand — produces any of these outcomes depending on what the software does with it.\n\nThe value is in removing a translation step. Before digital pens, a user who wanted handwritten notes in digital form had to write them on paper, scan them, and then either retype the content or run OCR software. A digital pen skips the scan entirely — the handwriting is captured in digital form from the start. This is why the technology is common in field work, where writing on paper and digitising later would be impractical.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-016",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a signature capture pad used for?",
    options: [
      "Printing signatures onto legal documents",
      "Scanning pre-signed documents into a file",
      "Analyzing handwriting for forensic purposes",
      "Capturing a handwritten signature for digital storage",
    ],
    optionRationales: [
      "Printers produce output; capture pads record input. Printing a signature would be an output task, not the purpose of a capture pad.",
      "Scanners digitize existing paper; capture pads record signatures as they are being written. The timing is different.",
      "Forensic analysis is a specialized discipline, not a routine use. A signature capture pad is a data-entry device, not an investigative tool.",
      null,
    ],
    correct: 3,
    explanation: "## Sign Here\n\nA **signature capture pad** is a small device with a flat surface and an attached stylus. When a user signs their name on the surface, the pad records the signature and transmits it to a central computer for storage.\n\nThe device is designed for speed. It typically has a small display showing the signature as it is written, so the user can see what they are signing, and it sends the captured image to a transaction system within seconds. The whole interaction takes about as long as signing on paper.\n\nThe most common uses are at checkout counters and delivery points. When a customer pays by card, the merchant's system shows a signature capture pad; the customer signs; the pad records the signature and attaches it to the transaction record. This replaces the older carbon-copy paper receipts that stored signatures physically. The digital version is easier to archive, easier to retrieve, and immune to the smudging and fading that affect paper over years.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-017",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a graphics tablet?",
    options: [
      "A display with a matte finish for artists",
      "A tablet computer that runs mobile apps",
      "A board that converts stylus movement into digital signals",
      "A printer that produces high-resolution images",
    ],
    optionRationales: [
      "Matte finishes on ordinary monitors reduce glare. A graphics tablet is a separate device, not a display characteristic.",
      "A tablet computer is a general-purpose device. A graphics tablet is a specialized input device without its own display or processor.",
      null,
      "Printers produce output; graphics tablets capture input. The two are opposite ends of the pipeline.",
    ],
    correct: 2,
    explanation: "## The Digitizer\n\nA **graphics tablet**, also called a **digitizer**, is a flat board that detects the movement of a pressure-sensitive stylus and converts it into digital signals. The user draws on the board, and the result appears on the computer's monitor.\n\nThe key feature is pressure sensitivity. A graphics tablet measures how hard the stylus is pressed and how much it is tilted, and it transmits that information along with the position. Drawing software can then respond to the pressure — a light stroke produces a fine line, a heavy stroke produces a thick one — which allows the artist to draw with the expressive variation that paper and pencil naturally provide. A mouse cannot do this, because a mouse click is either on or off.\n\nThe absence of a display is deliberate. Graphics tablets typically do not have their own screen; the user looks at the computer monitor while drawing on the board. This is called indirect drawing, and it takes some adjustment because the hand and the eye are working in different places. The trade-off is cost — a display-less tablet is far cheaper than a pen display, which is the same device with a screen built in.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-018",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is voice input?",
    options: [
      "Listening to audio through speakers",
      "Recording sound for later playback",
      "Converting audio files into new formats",
      "Entering input by speaking into a microphone",
    ],
    optionRationales: [
      "Listening to audio is output, not input. The direction of data flow is the opposite.",
      "Recording preserves audio for later; voice input interprets it into commands or text. The two are different uses of the same microphone.",
      "Converting formats is a file-processing task, unrelated to how the audio was captured.",
      null,
    ],
    correct: 3,
    explanation: "## Speaking to the Machine\n\n**Voice input** is the process of entering data by speaking into a microphone. The microphone captures the sound, and voice recognition software interprets it as text, commands, or both.\n\nThe technology has two main uses. In transcription mode, the software converts speech into written text — a user dictates a document, and the words appear on screen. In command mode, the software interprets specific spoken phrases as instructions — 'open the browser,' 'send the message,' 'scroll down.' Many modern systems blend the two, switching between dictation and commands based on context.\n\nVoice input is especially useful in two situations. The first is accessibility — users who cannot type due to mobility or vision impairments can interact with the computer through speech alone. The second is hands-free operation — drivers, surgeons, and workers in industrial settings often need to control computers without touching a keyboard. The same technology serves both audiences, which is one reason voice interfaces have improved so rapidly. Accuracy that was once the concern of accessibility tools is now the concern of every smartphone user dictating a text message.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-019",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is audio input?",
    options: [
      "Entering any sound into the computer",
      "Streaming audio from the Internet",
      "Playing music through external speakers",
      "Converting text documents to spoken word",
    ],
    optionRationales: [
      null,
      "Streaming delivers audio that already exists; audio input captures new sound. The distinction is whether the computer is receiving from the world or from the network.",
      "Playing music is audio output. The speaker receives signals from the computer; it does not send them in.",
      "Converting text to speech is a synthesis task, using the computer's output channel. It is the opposite direction from audio input.",
    ],
    correct: 0,
    explanation: "## Any Sound In\n\n**Audio input** is any sound that enters the computer through a microphone or audio input port. It includes speech, music, sound effects, ambient recordings — anything the microphone can capture.\n\nAudio input requires more than just a microphone. To capture high-quality sound, the computer needs a **sound card** or integrated sound capability that converts the analog signal from the microphone into the digital form the processor works with. The quality of this conversion determines whether the recording sounds natural or distorted, and it is one of the reasons professional audio workstations include dedicated sound cards rather than relying on the motherboard's built-in audio.\n\nThe applications are wide. Music production software lets users record instruments, layer tracks, and edit performances. Voice memo apps capture spoken notes and reminders. Voice recognition systems turn speech into text or commands. Meeting recording software captures entire conversations for later transcription. Each of these uses the same input channel — a microphone connected to the computer — but the software that processes the capture determines what the audio is used for.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-020",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is video input?",
    options: [
      "Capturing full-motion images on a device",
      "Displaying a video on a large screen",
      "Streaming videos from online platforms",
      "Editing videos to remove unwanted scenes",
    ],
    optionRationales: [
      null,
      "Displaying a video is output. It happens after the video exists; input creates the video in the first place.",
      "Streaming is a delivery method, not a capture method. The video already exists somewhere else and is being transmitted to the user.",
      "Editing transforms existing footage. Input is the step that produces the original footage.",
    ],
    correct: 0,
    explanation: "## Capturing Motion\n\n**Video input** is the capture of full-motion images and their storage on a computer or mobile device. It is how a video camera, webcam, or screen recorder brings moving images into the digital system.\n\nThe most common video input device is the **digital video camera** (or its smaller cousin, the webcam). Both convert light into digital signals that can be stored, edited, and transmitted. The webcam is usually built into the laptop or phone and provides low-to-medium resolution video suitable for video calls and streaming. The dedicated camera is a separate device with higher-quality optics and sensors for professional work.\n\nVideo input is now a daily activity. Video calls, screen recordings, live streams, security cameras, dashcams, and smartphone cameras all capture video as input. Each of these produces a file that can be stored, shared, or processed. The category has grown so quickly that most people now capture more video input in a week than they did in a year a decade ago — the technology has moved from specialized to ordinary.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-021",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is morphing in video editing?",
    options: [
      "Adding subtitles to a foreign-language video",
      "Transforming one image into another over a series of frames",
      "Slowing a video to play at a lower speed",
      "Increasing the resolution of a low-quality video",
    ],
    optionRationales: [
      "Adding subtitles is an overlay. Morphing transforms the visual content beneath any overlays.",
      null,
      "Slowing a video is a playback effect. Morphing changes what the images are, not how fast they play.",
      "Increasing resolution is an enhancement technique. Morphing changes content, not quality.",
    ],
    correct: 1,
    explanation: "## One Image Becomes Another\n\n**Morphing** is a video effect that smoothly transforms one image into another over a series of frames. The viewer sees one thing gradually become another, with no cut or jump between them.\n\nThe technique works by identifying corresponding features in the start and end images and animating the transition between them. If a face is morphing into another face, the software aligns the eyes with the eyes, the nose with the nose, and interpolates the intermediate frames. The result is a continuous flow from one identity to another.\n\nMorphing is one of several special effects available in video editing software, alongside warping, colour transformations, and time manipulation. It is used in film and television to create visual transitions, in advertising to show products transforming, and in music videos as a stylistic device. The effect is distinctive enough that it is usually recognisable — viewers know they are watching a morph rather than a real transformation, but the impression is still striking.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-022",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is motion input?",
    options: [
      "Guiding on-screen elements using gestures detected by a camera",
      "Typing commands on a keyboard to control a game",
      "Using a stylus on a graphics tablet to draw",
      "Clicking buttons with a mouse to move a character",
    ],
    optionRationales: [
      null,
      "Keyboard commands are a direct input method, not motion input. Motion input uses the body's position and movement rather than key presses.",
      "Stylus input is a manual input method. It requires a physical tool and a flat surface; motion input uses the body in the air.",
      "Mouse clicks use a physical pointing device. Motion input eliminates the device and detects the body directly.",
    ],
    correct: 0,
    explanation: "## In the Air\n\n**Motion input** is a category of input in which the user's body movements are detected by a camera or sensor and translated into commands. The user does not touch anything — the gesture itself is the input.\n\nThe technology works through a camera or sensor that tracks the position and movement of the user's body, hands, or face. When the system detects a specific gesture, it interprets it as a command and sends the corresponding signal to the software. The user can point, wave, or make specific patterns with their hands or arms, and the software responds accordingly.\n\nMotion input is most familiar in gaming, where systems track the player's physical movement to control an avatar. But the technology also serves other purposes. Military applications use it for flight simulators and weapons training; medical applications use it for physical rehabilitation and for helping patients recover from post-traumatic stress disorder. The same technology that lets a gamer swing a virtual bat helps a stroke patient rebuild motor control or a veteran process trauma — an example of how a single innovation can serve entirely different populations.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-023",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "How does the military use motion input technology?",
    options: [
      "For controlling unmanned aircraft over long distances",
      "For physical fitness competitions between units",
      "For tracking supply shipments across bases",
      "For training, rehabilitation, and recovery",
    ],
    optionRationales: [
      "Drone control uses joystick and keyboard inputs, or pre-programmed navigation. Motion input in the military context is about the human body, not remote vehicles.",
      "Fitness competitions are not a documented military application of motion input. Performance monitoring is a separate field.",
      "Supply tracking uses RFID and GPS, not motion input. Logistics is a different category of technology.",
      null,
    ],
    correct: 3,
    explanation: "## More Than Games\n\nThe military uses motion input technology for three related purposes: **training**, **physical rehabilitation**, and **psychological recovery**.\n\nTraining applications are the most visible. Flight simulators let pilots practice procedures and emergency responses without risking aircraft, and motion input makes the simulation more realistic by letting the trainee move physically as they would in a real cockpit. Weapons training uses similar technology, with the trainee's physical movements translated into digital actions in the simulation.\n\nRehabilitation is the second use. Wounded soldiers recovering from injuries use motion-input systems to rebuild motor control — the system tracks their movements and provides feedback as they recover range of motion, coordination, and strength. The exercises are tailored to the injury and progress as the patient improves.\n\nThe third use is less obvious. Motion input is also used to assist recovery from post-traumatic stress disorder. Virtual reality environments built on motion input let veterans revisit and process traumatic experiences in a controlled setting, with a therapist present. The physical engagement with the virtual environment helps some patients where talking alone did not. Each of these uses shares the same underlying technology — the body is tracked, the movement is interpreted, and the software responds — but the applications are entirely different.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-024",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is a barcode reader?",
    options: [
      "A device that scans fingerprints for identification",
      "A device that uses laser beams to read printed codes",
      "A device that captures sound for speech recognition",
      "A device that reads magnetic stripes on cards",
    ],
    optionRationales: [
      "Fingerprint scanning is a biometric technology. Barcodes are printed symbols, not biological traits.",
      null,
      "Audio capture is done by microphones. Barcode readers read printed patterns, not sounds.",
      "Magnetic stripes are read by a different device — the magstripe reader. Barcodes are optical, not magnetic.",
    ],
    correct: 1,
    explanation: "## Scanning the Lines\n\nA **barcode reader** — also called a barcode scanner — is an optical device that uses a laser beam to read printed barcodes. The code itself is an identification pattern made of vertical lines and spaces of different widths.\n\nThe reading process is simple. The laser beam sweeps across the code, and the sensor measures how much light is reflected back at each point. Dark lines reflect less light; light spaces reflect more. The pattern of reflections becomes the code, which the reader converts into a number the computer can use to identify the product.\n\nBarcodes are everywhere because they solve a specific problem: labelling objects so computers can identify them quickly. A supermarket with thousands of products needs a way to look up prices in milliseconds. A barcode is inexpensive to print, robust against smudging, and readable from a distance with a fast scan. The technology has been standard since the 1970s, and despite newer alternatives such as QR codes and RFID, barcodes remain the default for retail because they work and they are cheap.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-025",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "Which of the following describes a touchpad on a laptop?",
    options: [
      "It requires the user to hold the device in the air",
      "It uses an attached stylus for pressure-sensitive input",
      "It is a flat surface sensitive to pressure and motion",
      "It is a rotating dial for scrolling through lists",
    ],
    optionRationales: [
      "Air gestures are a motion input method, not a touchpad. The touchpad is a flat surface that the user touches.",
      "Stylus input is a separate category. The touchpad is designed for finger interaction, not stylus input.",
      null,
      "A rotating dial is a different input mechanism, common on some older devices but not standard on laptops.",
    ],
    correct: 2,
    explanation: "## Flat and Sensitive\n\nA **touchpad** is a flat rectangular surface that responds to pressure and motion. It is the standard pointing device on most laptops because it takes up no external space.\n\nInternally, the touchpad contains a grid of sensors that detect where the user's finger is and how it is moving. Capacitive touchpads — the kind used on modern laptops — detect the slight electrical change that a finger causes when it is near the surface. They do not require pressure to activate, only proximity, which is why a light touch works.\n\nModern touchpads support gestures in addition to basic pointing. A two-finger scroll moves through content. A three-finger swipe switches between applications. A four-finger tap opens a notification center. These gestures recover some of the functionality that a mouse provides, though not all users take advantage of them. For a device designed to be carried everywhere, the touchpad is the compromise that makes portability possible — no external mouse needed, no lost peripheral, no need for a flat surface except the laptop itself.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-026",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "What is the difference between an optical mouse and a laser mouse?",
    options: [
      "The optical mouse has a ball; the laser mouse has no moving parts",
      "The optical mouse uses an LED; the laser mouse uses a laser",
      "The optical mouse needs a mousepad; the laser mouse does not",
      "The optical mouse is wireless; the laser mouse is wired",
    ],
    optionRationales: [
      "A rolling ball describes a mechanical mouse, not an optical one. Both optical and laser mice have no moving parts.",
      null,
      "Both optical and laser mice work on most surfaces without a mousepad. The mousepad requirement was a feature of mechanical mice, not optical or laser.",
      "Both optical and laser mice can be wired or wireless. Connectivity is not what distinguishes them.",
    ],
    correct: 1,
    explanation: "## Light Source\n\nThe difference between an optical mouse and a laser mouse is the type of light they use to track movement. An **optical mouse** uses an LED; a **laser mouse** uses a laser diode.\n\nThe laser is a more focused light source, which allows the sensor to detect finer surface features. This makes the laser mouse slightly more precise, particularly on difficult surfaces such as glass or high-gloss desks where an LED's broader light would produce a blurred image. For fast, precise movements — gaming, CAD work, photo editing — a laser mouse has an advantage.\n\nFor ordinary use, the difference is negligible. Both mice track accurately on normal desk surfaces, both have no moving parts, and both work without a mousepad. The price difference is small in the entry range and larger in professional models. Most users who are not doing precision work would not notice the difference, which is why optical mice still dominate the consumer market despite the technical superiority of the laser version.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.2-027",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.2 Manual Input",
    q: "How is a signature capture pad different from a graphics tablet?",
    options: [
      "A signature pad captures identity; a graphics tablet captures artwork",
      "A signature pad has a display; a graphics tablet does not",
      "A signature pad needs no stylus; a graphics tablet does",
      "A signature pad connects wirelessly; a graphics tablet does not",
    ],
    optionRationales: [
      null,
      "Neither device typically has its own display. Both are input-only surfaces that transmit to a computer.",
      "Both devices use a stylus. The stylus is the input tool for both, and neither works without one.",
      "Both devices are usually wired. Wireless models exist for each, but the connection type is not the difference between them.",
    ],
    correct: 0,
    explanation: "## Identity vs Image\n\nThe difference between a signature capture pad and a graphics tablet is **what each device is designed to capture**. A signature pad captures a person's identity — the signature is evidence that a specific person authorised a transaction. A graphics tablet captures artwork — the strokes are the content the user wants to create.\n\nThe distinction shows up in every design decision. A signature pad is small (about the size of a credit card), simple, and utilitarian — it needs to record a signature accurately, not draw a picture. A graphics tablet is large (a full drawing surface), sensitive to pressure and tilt, and designed for hours of creative work. The signature pad transmits a small image to a transaction system; the graphics tablet transmits continuous position data to an art application.\n\nBoth use a stylus, both capture handwriting or drawing, and both transmit to a computer. But their purposes are different enough that the devices have evolved along separate paths, and a user looking for one would be poorly served by the other. This is a case where the surface similarity hides a real functional distinction.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What distinguishes a digital input device from a manual input device?",
    options: [
      "Digital devices store data instead of transmitting it",
      "Digital devices capture data automatically from an object or code",
      "Digital devices require the user to type on a keyboard",
      "Digital devices only work with wired connections",
    ],
    optionRationales: [
      "Both types of devices can store or transmit data. The distinction is how the data is captured, not what happens to it afterward.",
      null,
      "Typing on a keyboard is manual input, not digital input. The distinction is who produces the data — the user in manual input, an encoded object or code in digital input.",
      "Both digital and manual devices work with wired and wireless connections. The connection medium does not determine the category.",
    ],
    correct: 1,
    explanation: "## Reading the World\n\nA **digital input device** captures data automatically by reading a code, tag, or signal from an object. The user initiates the capture — by waving a barcode, tapping an NFC card, or pointing a scanner — but the data itself comes from the object, not from typing or clicking.\n\nThe distinction from manual input is where the data originates. In manual input, the user is standard teaching: a keystroke, a tap, a stylus line. In digital input, an encoded object is standard teaching: a barcode, a QR code, an RFID tag, a magnetic stripe, a printed character in a special font. The user facilitates the reading, but the content was written into the object beforehand.\n\nThis distinction matters because digital input scales. A retail store can scan thousands of products per hour because the cashier does not have to type each price or name. A warehouse can track millions of packages because each one carries its own identification. Manual input would be far too slow for these volumes — the encoded object replaces the human effort of typing, at the cost of pre-encoding the object with the necessary information.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What is NFC (near-field communication)?",
    options: [
      "A physical port on the side of a smartphone",
      "A close-distance protocol that reads data from a nearby item",
      "A type of scanner for reading QR codes",
      "A long-range wireless technology for Internet access",
    ],
    optionRationales: [
      "NFC is not a physical port. It is a wireless protocol that works at very close range, which is why it feels like touching.",
      null,
      "QR code reading is done optically with a camera. NFC uses radio waves. The two achieve similar goals but use entirely different physical mechanisms.",
      "Long-range wireless describes cellular or Wi-Fi. NFC works only within a few centimetres.",
    ],
    correct: 1,
    explanation: "## Touch to Transfer\n\n**NFC** (near-field communication) is a short-range wireless protocol used by phones and other devices to read data from a nearby item — a credit card, a transit pass, an electronic tag. The range is measured in centimetres, which is what makes it feel like touching even when it is not.\n\nThe short range is not a limitation — it is the security feature. Because NFC only works when two devices are very close, there is no way for a distant attacker to intercept or spoof an NFC transaction. This is why NFC is trusted for payments: the user has to physically bring their device into proximity with the terminal, which cannot happen by accident from across the room.\n\nThe protocol is based on RFID, and the two share the same underlying principle — a reader sends a radio signal and a passive tag responds with its stored data. The difference is the range and the use case. RFID is designed for longer distances, sometimes several metres, so it can read tags on pallets or animals without physical proximity. NFC is designed for a specific interaction between two devices that the user has deliberately brought together.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What is an optical scanner?",
    options: [
      "A device that reads magnetic ink on bank checks",
      "A device that scans faces for authentication",
      "A tool for scanning network vulnerabilities",
      "A light-sensing device that reads printed text and graphics",
    ],
    optionRationales: [
      "Reading magnetic ink is MICR — a different technology. Optical scanners read light reflections; MICR reads magnetized characters.",
      "Face scanning is a biometric technology, separate from document scanning. Both use light, but the purpose and mechanism are different.",
      "Network vulnerability scanners are cybersecurity tools. They have nothing to do with capturing physical documents.",
      null,
    ],
    correct: 3,
    explanation: "## Reading the Page\n\nAn **optical scanner** is a light-sensing input device that reads printed text and graphics and translates them into a form the computer can process. It is the standard tool for digitising physical documents and photographs.\n\nThe scanner works by shining light onto the document and measuring how much is reflected at each point. Bright areas reflect more light; dark areas reflect less. The pattern of reflections is captured by an array of sensors and converted into a digital image. Resolution matters — a scanner's resolution, measured in dots per inch, determines how much detail the image contains and how clearly small text can be read.\n\nScanners come in several physical forms. Flatbed scanners have a glass surface where the document is placed and scanned by a moving sensor. Sheet-fed scanners pull pages through automatically, which is faster but less suitable for fragile or irregular documents. Portable scanners are handheld and can digitise a page by sweeping them across it. All share the same optical principle — the differences are about convenience, capacity, and how the document is presented to the reading surface.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What is the difference between OCR and OMR?",
    options: [
      "OCR is used for music; OMR is used for images",
      "OCR requires magnetic ink; OMR requires optical ink",
      "OCR reads marks; OMR reads printed text",
      "OCR reads printed text; OMR reads drawn marks",
    ],
    optionRationales: [
      "Both technologies are used on documents, not on music or images. The distinction is what they read, not what industry they serve.",
      "Neither requires special ink in the way MICR does. Both work on ordinary printing and ordinary marks.",
      "This reverses the two technologies. OCR reads printed characters; OMR reads marks the user has made.",
      null,
    ],
    correct: 3,
    explanation: "## Two Readers\n\n**OCR** (optical character recognition) reads printed characters — letters, numbers, and symbols that have been printed on a page. **OMR** (optical mark recognition) reads marks that a user has made on a form — filled circles, checkmarks, or crosses.\n\nThe two are used in different situations. OCR is used to digitise printed text, so that the text becomes searchable and editable. Scanning a printed book with OCR produces a file that behaves like typed text — you can copy from it, search it, edit it. Scanning the same page without OCR produces only an image, which looks the same but cannot be searched or edited.\n\nOMR is used to read response forms. Multiple-choice exam answer sheets, survey forms, and voting ballots use OMR because the marks are simple and easy to detect. The advantage is speed — OMR systems can process thousands of forms per hour, since they only need to detect whether a specific bubble is filled rather than interpreting the content of letters. The two technologies often work together: a form might have OMR bubbles for machine-readable answers and OCR-detected names for human-readable identification.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-005",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What is a QR code?",
    options: [
      "A two-dimensional barcode that stores data in both directions",
      "A one-dimensional barcode with vertical lines",
      "A password used for secure transactions",
      "A digital signature for verifying documents",
    ],
    optionRationales: [
      null,
      "One-dimensional barcodes are the traditional striped codes on product packaging. QR codes are two-dimensional — they use both vertical and horizontal dimensions to store data.",
      "QR codes are public, not secret. They can be scanned by any camera, which is the opposite of what a password does.",
      "Digital signatures verify authenticity through cryptography. A QR code is just a printed image that stores data.",
    ],
    correct: 0,
    explanation: "## Two Dimensions\n\nA **QR code** (quick response code) is a two-dimensional barcode that stores information in both vertical and horizontal directions. The pattern of black and white squares encodes data that a camera can read.\n\nThe two-dimensional storage is what makes QR codes powerful. A traditional one-dimensional barcode stores a limited amount of data — usually a short number. A QR code can store hundreds of characters, which is enough for a full web address, a contact card, a Wi-Fi password, or a small block of text. Because it can hold a web address directly, a QR code lets a user scan and be taken somewhere, without typing a URL.\n\nThe pattern includes error-correction data, which means a QR code can still be read even if part of it is damaged, smudged, or obscured. This is why QR codes are printed on posters, food packaging, business cards, and screens with confidence — they work under imperfect conditions. Since the mid-2010s, the technology has moved from a novelty to an everyday tool, driven by the fact that every smartphone now has a camera that can read them without any special application.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-006",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "How does a barcode reader work?",
    options: [
      "It uses a laser beam to read a printed code",
      "It uses a camera to recognise products by image",
      "It uses radio waves to read a tag",
      "It uses magnetic fields to read a stripe",
    ],
    optionRationales: [
      null,
      "Image recognition identifies objects by their appearance. Barcode readers read a specific printed pattern, which is far more reliable and much faster.",
      "Radio waves read RFID tags, not barcodes. RFID requires the tag to have an antenna and chip; barcodes are just printed lines.",
      "Magnetic fields read the stripe on a credit card. Barcodes are optical, not magnetic.",
    ],
    correct: 0,
    explanation: "## Scanning the Lines\n\nA **barcode reader** uses a laser beam to read a barcode. The laser sweeps across the code, and a sensor measures how much light is reflected back at each point. The pattern of dark lines and light spaces encodes the data, which the reader converts into a number the computer can use.\n\nThe speed is the point. A laser barcode reader can scan and decode a barcode in milliseconds, which is why supermarket checkout works at all. The cashier passes the product over the scanner and the price appears immediately. Manual entry would take far longer and be prone to error.\n\nBarcode readers come in several form factors. Handheld readers are pointed at the code. Fixed-position readers, common at supermarkets, are built into the counter and read any code passed in front of them. The same technology is embedded in warehouse scanners, library checkout systems, and tracking labels on packages. Each version uses the same optical principle — sweep a laser, detect the reflections — but adapts the physical form to its environment.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-007",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What is RFID?",
    options: [
      "A technology that reads magnetic card stripes",
      "A technology that reads handwritten signatures",
      "A technology using light to read barcodes",
      "A technology using radio signals to read a tag",
    ],
    optionRationales: [
      "Magnetic stripes are a specific storage format on cards. RFID tags are active radio devices, not magnetic media.",
      "Signature reading uses a stylus and a digitizer. RFID has no physical contact with the reading surface.",
      "Light-based reading is barcode and QR scanning. RFID uses radio waves, which is why it works without line of sight.",
      null,
    ],
    correct: 3,
    explanation: "## Reading at a Distance\n\n**RFID** (radio frequency identification) uses radio signals to communicate with a tag attached to an object, animal, or person. The tag contains a small memory chip and an antenna, and it responds when a reader sends a signal.\n\nThe key feature is that RFID does not require line of sight. A barcode must be visible to the scanner; an RFID tag can be inside a box, under clothing, or embedded in a component and still be read. This is why RFID is used in warehouses, where a pallet of goods can be scanned as a whole rather than item by item, and in libraries, where a stack of books can be checked out in one motion.\n\nTags come in two varieties. **Passive** tags have no battery — they draw power from the reader's signal and can be as thin as a sticker. **Active** tags have their own battery, which gives them longer range and the ability to broadcast continuously. The trade-off is cost and lifespan — passive tags are cheap and last indefinitely; active tags cost more and need battery replacement. The choice depends on the application: retail inventory uses passive tags, while toll collection and vehicle tracking often use active ones.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-008",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What does a magstripe reader read?",
    options: [
      "A radio tag attached to a package",
      "A magnetic stripe on a card",
      "A fingerprint pressed on a sensor",
      "A QR code on a printed page",
    ],
    optionRationales: [
      "Radio tags are read by RFID readers. Magstripe readers work by contact, not by proximity.",
      null,
      "Fingerprint scanning is a biometric technology. A magstripe is an encoding format on a card, unrelated to biology.",
      "QR codes are optical patterns read by cameras. Magnetic stripes are magnetic patterns read by contact sensors.",
    ],
    correct: 1,
    explanation: "## Swipe to Read\n\nA **magstripe reader** reads the magnetic stripe on the back of credit cards, identification cards, hotel key cards, and similar cards. The stripe contains encoded data — the card number, the cardholder's name, and sometimes other information.\n\nThe technology is simple. The stripe is a band of magnetic material divided into three tracks, each of which stores data in a different way. When the card is swiped through the reader, the magnetic patterns are converted into electrical signals, which the reader interprets as the stored data. The whole interaction takes less than a second.\n\nMagstripe readers are being replaced by chip readers and contactless payment systems. The reason is security. Magnetic stripes store the same data every time, so if an attacker can read the stripe, they can create a duplicate card. Chip cards generate a unique code for each transaction, which cannot be reused. The transition from magstripe to chip has been slow because the installed base of magstripe readers is enormous, but it is now complete in most developed markets. The magstripe still exists on many cards as a fallback, and magstripe readers remain in service in places where replacement is impractical.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-009",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What is MICR used for?",
    options: [
      "Processing bank checks with magnetized ink",
      "Scanning QR codes on marketing materials",
      "Reading fingerprints for biometric access",
      "Detecting metal objects at security checkpoints",
    ],
    optionRationales: [
      null,
      "QR codes are optical, not magnetic. MICR requires a specific type of ink that has magnetic properties.",
      "Fingerprints are biological, not magnetic. MICR works on printed characters, not on people.",
      "Metal detection uses magnetic fields to detect objects, but it does not read encoded data the way MICR does.",
    ],
    correct: 0,
    explanation: "## Ink That Reads\n\n**MICR** (magnetic ink character recognition) is a technology used to process bank checks. It reads the special characters printed along the bottom of a check using an ink that contains magnetized particles.\n\nThe characters themselves are printed in a distinctive font called E-13B. Each digit and symbol has a shape that can be recognized optically, but the reading mechanism uses magnetism rather than light. This makes MICR more reliable than optical reading in the conditions where checks are processed — the ink cannot be smudged off, the characters remain readable even if the check is slightly dirty or creased, and the magnetic signature is difficult to forge.\n\nThe characters on a check encode three pieces of information: the bank's routing number, the customer's account number, and the check number. When a check is deposited, a MICR reader captures these numbers and sends them to the bank's processing system. The technology has been in continuous use since the late 1950s, and despite predictions that checks would be replaced entirely by electronic payment, MICR remains in service because banks still process billions of physical checks every year.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-010",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "What is a data collection device?",
    options: [
      "A device that obtains data at the location where an event occurs",
      "A device that compiles data from online forms",
      "A device that sorts data by category in storage",
      "A device that archives data for long-term preservation",
    ],
    optionRationales: [
      null,
      "Online forms are filled out by users and submitted through the network. A data collection device operates at the physical location of the event, not on a web page.",
      "Sorting is a data processing task, not a collection function. The device gathers data; the software sorts it.",
      "Archiving is a storage strategy, not collection. Data collection happens at standard teaching; archiving happens afterward.",
    ],
    correct: 0,
    explanation: "## On the Spot\n\nA **data collection device** obtains data directly at the location where a transaction or event happens. It captures the data at the moment it exists rather than after the fact.\n\nThe defining feature is the location. A cashier's barcode scanner captures a sale at the checkout counter. A field worker's handheld reader captures inventory at the warehouse shelf. A medical technician's tablet captures patient vitals at the bedside. In each case, the data is recorded at the moment and place it is generated, rather than being written on paper and entered into a computer later.\n\nThe advantage is accuracy. Every time data passes from one medium to another — written on paper, then typed into a form — the opportunity for error multiplies. A data collection device eliminates the transfer step. The data goes from standard teaching directly into the digital system, where it can be transmitted wirelessly to a central server. This is why these devices are common in environments where heat, humidity, and cleanliness make other methods impractical — warehouses, factories, outdoor field work, medical facilities — places where a laptop would struggle but a ruggedized handheld device performs reliably.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.3-011",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.3 Digital Input",
    q: "How does NFC differ from a barcode in terms of physical interaction?",
    options: [
      "NFC requires the user to bring a device very close to a reader",
      "NFC requires the user to speak a command into a microphone",
      "NFC requires the user to aim a camera at a printed pattern",
      "NFC requires the user to swipe a card through a slot",
    ],
    optionRationales: [
      null,
      "Voice commands are audio input. NFC is a wireless data transfer protocol, not a speech interface.",
      "Camera-based scanning is how QR codes and barcodes are read. NFC uses radio, not sight.",
      "Swiping is how a magstripe card is read. NFC has no physical motion required — the device just needs to be near the reader.",
    ],
    correct: 0,
    explanation: "## A Tap, Not a Scan\n\nThe physical interaction for NFC is different from barcode reading in a specific way: **the user brings the device very close to a reader**, rather than aiming a camera at a printed pattern.\n\nWith a barcode, the user has to point a scanner at the code, or hold a phone so the camera can see the pattern. The code must be visible and the scanner must be lined up. Even with modern scanners, there is a small delay between the moment of aiming and the moment of reading, and the code has to be reasonably clean and undamaged.\n\nWith NFC, the user taps or holds the device near the reader for a moment. There is no aiming, no camera, no visible pattern. The radio signal from the reader reaches the tag or chip in the card, which responds with its data. The reading happens as soon as the two devices are close enough, typically within a few centimetres. This makes NFC faster to use than a barcode in situations where speed matters — unlocking a door, paying at a turnstile, or checking out of a transit system during rush hour.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a hard copy in the context of computer output?",
    options: [
      "Information displayed temporarily on a screen",
      "Information printed on a physical medium",
      "A backup copy stored on an external drive",
      "An encrypted version of a document",
    ],
    optionRationales: [
      "Screen output is a *soft copy* — it exists electronically and disappears when the display changes. Hard copy is physical.",
      null,
      "A backup is a digital copy on another storage device. Hard copy means paper, not another digital location.",
      "Encryption changes the form of a file but does not make it physical. The encrypted file is still digital.",
    ],
    correct: 1,
    explanation: "## Touchable Output\n\nA **hard copy**, also called a **printout**, is information printed on a physical medium — most commonly paper. It is the tangible output of a computer, as opposed to the temporary output shown on a screen.\n\nThe distinction from soft copy is permanence and portability. A soft copy disappears when the screen changes or the power goes off. A hard copy can be carried, marked up by hand, filed in a folder, or mailed to someone. This is why certain documents are still printed even in a digital-first world: legal contracts, signed forms, exam papers, and anything that needs to be physically present somewhere else.\n\nPrinted pages can come in two orientations. **Portrait** orientation is taller than it is wide, matching the layout of letters, reports, and books. **Landscape** orientation is wider than it is tall, which suits spreadsheets, slides, and graphics where width is more useful than height. The choice of orientation depends on what the content needs — a wide chart benefits from landscape, while a printed letter reads naturally in portrait.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a non-impact printer?",
    options: [
      "A printer that requires manual page feeding",
      "A printer that prints only in black and white",
      "A printer that strikes a ribbon to create marks",
      "A printer that forms characters without physical contact",
    ],
    optionRationales: [
      "Manual page feeding is a paper-handling method, not a print technology. Many non-impact printers have automatic paper feed.",
      "Colour capability is independent of impact category. Non-impact printers are commonly colour; impact printers are commonly monochrome.",
      "Striking a ribbon describes an impact printer. Non-impact printers avoid contact entirely.",
      null,
    ],
    correct: 3,
    explanation: "## No Contact\n\nA **non-impact printer** creates images on paper without physically striking the page. The ink, toner, or other marking material is transferred without the mechanical pressure that defines an impact printer.\n\nThe absence of contact has three consequences. First, non-impact printers are quieter — there is no mechanical hammering sound. Second, they produce higher-quality output because the marking material can be positioned more precisely. Third, they are generally faster at equivalent print quality, because they do not have to move a physical striking element to each character position.\n\nAlmost every printer in common use today is a non-impact printer. Inkjet printers spray liquid ink. Laser printers use a beam and toner. Thermal printers use heat on specially coated paper. The category also includes 3-D printers, which build objects layer by layer, and plotters, which draw continuous lines with charged wires. The one exception still in wide use is the dot-matrix printer, which survives in specialized applications like multi-part carbon-copy forms where the physical strike is the point.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "How does an inkjet printer form characters on paper?",
    options: [
      "By spraying tiny drops of liquid ink onto the paper",
      "By using a laser beam to charge a drum",
      "By pushing heated pins against heat-sensitive paper",
      "By transferring coloured dye through a ribbon",
    ],
    optionRationales: [
      null,
      "Laser charging is a laser printer function. Inkjets use liquid, not static charge.",
      "Heated pins are how thermal printers work. Inkjets use liquid ink at room temperature.",
      "Dye transfer is a dye-sublimation method. Inkjets spray dots, not transfer an image through a ribbon.",
    ],
    correct: 0,
    explanation: "## Tiny Drops\n\nAn **inkjet printer** sprays microscopic drops of liquid ink onto paper. Each drop is placed precisely, and together the drops form characters and images.\n\nThe mechanism relies on tiny nozzles. A typical inkjet cartridge contains 50 to several hundred nozzles, each about the width of a human hair. Behind each nozzle is a small resistor. When the printer wants to place a drop, it briefly heats the resistor, which causes a small amount of ink to vaporize and form a bubble. The bubble expands and pushes a droplet out through the nozzle, where it lands on the paper.\n\nAn inkjet printer can place millions of drops per second, which is how it produces detailed images. The trade-off is that inkjet output is slower than laser output, and the ink cartridges are expensive relative to the amount of text they can print. The technology is nonetheless popular for home and small-office use because the printers themselves are inexpensive and the output is high quality — especially for colour photos, where inkjets outperform most consumer lasers.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is the trade-off when choosing between an inkjet printer and a laser printer?",
    options: [
      "Inkjets are quieter; lasers produce noisier output",
      "Inkjets require more space; lasers take up less",
      "Inkjets produce better colour; lasers produce faster text",
      "Inkjets cost more to buy; lasers cost more per page",
    ],
    optionRationales: [
      "Both printer types are relatively quiet. The loudest printers are impact printers (dot-matrix), which strike the paper directly.",
      "Physical size is not the primary trade-off. Both printers come in a range of sizes that overlap considerably.",
      null,
      "The purchase price trade-off is the opposite. Lasers cost more up front; the per-page cost is where inkjets exceed lasers.",
    ],
    correct: 2,
    explanation: "## Colour vs Speed\n\nThe trade-off between an inkjet and a laser printer is a balance of priorities. **Inkjets produce better colour output** — particularly for photographs and mixed-colour graphics — while **lasers produce faster, sharper text output**.\n\nThe technical reasons differ. Inkjet printers place liquid ink with fine nozzle control, which allows them to reproduce the smooth gradients and subtle tones that photos require. Laser printers fuse toner at high speed, which gives crisp, sharp edges for text but produces slightly grainier output for photographs. Neither is superior in the abstract; each is superior for a specific task.\n\nThe cost structure reinforces the trade-off. Inkjet printers are inexpensive to buy because manufacturers recover profit on the ink cartridges. Laser printers cost more up front but have lower per-page costs because toner lasts much longer. A user who prints a few photos a month will save money with an inkjet; a user who prints hundreds of text pages a month will save money with a laser. The right choice depends on what the printer will actually be used for.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-005",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a photo printer?",
    options: [
      "A printer that only prints on photo paper",
      "A colour printer that produces lab-quality photographs",
      "A printer that scans and reprints old photos",
      "A printer that produces photos in black and white only",
    ],
    optionRationales: [
      "Photo printers can print on standard paper at lower quality. The specialty paper is preferred but not required.",
      null,
      "Scanning is a separate function. A photo printer produces photographs; scanners digitise existing photos.",
      "Photo printers produce full colour. Black and white is available but is not the defining capability.",
    ],
    correct: 1,
    explanation: "## Lab Quality at Home\n\nA **photo printer** is a colour printer designed to produce photographs at a quality comparable to what a commercial photo lab would deliver. Many photo printers use inkjet technology, but with specialised ink sets and higher resolution than general-purpose inkjet printers.\n\nThe goal is photographic realism. A photo printer needs to reproduce smooth gradients, accurate skin tones, and subtle colour variations that a document-oriented printer would not attempt. Some photo printers use six or eight ink colours rather than the standard four, because additional colours fill in the range between the primary inks and reduce the visible dot pattern that limits lower-quality printers.\n\nThe trade-off is cost. Photo printers and the paper and ink they use cost more than ordinary printing. A single print may cost a few kwacha in consumables, which is more than the equivalent commercial print at a photo shop. What photo printers provide is the convenience of printing at home without a trip to a store, plus the ability to adjust and reprint until the image is exactly right. For most users, this convenience justifies the cost only for a limited volume of prints — the technology is valuable but not necessarily economical for high volumes.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-006",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "How does a laser printer create images on paper?",
    options: [
      "By pushing heated pins against paper",
      "By transferring coloured dye through a ribbon",
      "By spraying liquid ink through tiny nozzles",
      "By using a laser beam and toner",
    ],
    optionRationales: [
      "Heated pins are used in thermal printers, not laser printers. The two technologies share the absence of contact, but nothing else.",
      "Dye transfer is a dye-sublimation process. Laser printers fuse toner particles; they do not transfer dye.",
      "Liquid ink through nozzles is the inkjet process. Lasers use toner, not liquid ink.",
      null,
    ],
    correct: 3,
    explanation: "## Beam and Toner\n\nA **laser printer** creates images using a laser beam and **toner** — a fine, dry powder. The process has several steps, but the principle is simple: the laser draws the image on a rotating drum, toner sticks to the charged areas, and heat fuses the toner permanently to the paper.\n\nThe drum is a photosensitive cylinder that holds an electrostatic charge. When the laser beam hits the drum, it discharges the point where it strikes. The pattern of discharged and charged areas corresponds to the image being printed. Toner particles, which carry an opposite charge, are attracted to the discharged areas. The drum then rolls against the paper, transferring the toner, and a pair of heated rollers passes over the paper to fuse the toner into the fibres.\n\nThe result is fast, sharp, and durable. Toner does not smear the way liquid ink can, and it does not dry out in the cartridge the way inkjet ink sometimes does. This is why laser printers dominate offices, schools, and anywhere that produces large volumes of black-and-white documents. Their higher up-front cost is offset by lower per-page costs and longer cartridge life.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-007",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a multifunction printer?",
    options: [
      "A printer that combines printing, scanning, and copying",
      "A printer that connects to multiple computers",
      "A printer that prints both documents and photographs",
      "A printer that prints on many paper sizes",
    ],
    optionRationales: [
      null,
      "Network connectivity allows multiple computers to share a printer. Multifunction refers to what the printer does, not how many users it serves.",
      "Document and photo printing are both uses of a printer, but combining them does not make it multifunctional in standard terminology.",
      "Paper-size flexibility is a specification, not a category. Many single-function printers handle multiple sizes.",
    ],
    correct: 0,
    explanation: "## One Device, Many Roles\n\nA **multifunction printer** — also called an all-in-one printer — combines printing, scanning, and copying in a single unit. Some models add fax capability as well.\n\nThe value is consolidation. A small office would otherwise need a printer, a scanner, and a photocopier as separate machines. A multifunction device replaces all three with one unit that occupies one desk position, uses one power outlet, and shares a single cartridge system. For home offices and small businesses where space and simplicity matter more than maximum performance, this is the default choice.\n\nThe trade-off is single-point failure. Because the print mechanism is shared between functions, a breakdown in one function usually disables the others. A paper jam in the printer path can prevent scanning. A broken scanner can prevent copying. A user who values resilience over convenience might still prefer three separate devices, since a failure in one leaves the others working. Most users accept the trade-off because the failures are uncommon and the convenience is daily.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-008",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a plotter primarily used for?",
    options: [
      "Printing photographs on glossy paper",
      "Scanning three-dimensional objects",
      "Printing receipts at point-of-sale terminals",
      "Producing large technical drawings like blueprints",
    ],
    optionRationales: [
      "Photographs are handled by photo printers. Plotters produce line drawings, not photographic images.",
      "Scanning is input, not output. Plotters produce output; they do not capture it.",
      "Receipts are printed on small thermal printers. Plotters produce full-size technical documents.",
      null,
    ],
    correct: 3,
    explanation: "## Big Drawings\n\nA **plotter** is a large-format printer designed to produce technical drawings — blueprints, architectural plans, engineering schematics, and maps. The output is measured in metres, not inches.\n\nThe distinction from ordinary printers is in what they draw. Regular printers compose images from dots, building up a picture dot by dot. Plotters draw continuous lines. Traditional plotters used pens that moved across the paper; modern plotters use charged wires or ink heads but preserve the same line-drawing output. For technical drawings, the continuous line matters — a dotted line where a solid line was intended changes the meaning of a schematic.\n\nPlotters are specialized devices with a specialized audience. Architects need full-size blueprints so they can check dimensions by hand. Engineers need large schematics that show every connection clearly. The output size is the requirement, and no standard printer can meet it. The cost reflects this — plotters are expensive, and they consume large rolls of specialized paper. But for the industries that use them, there is no substitute.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-009",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is additive manufacturing?",
    options: [
      "Building an object by adding material layer by layer",
      "Printing on both sides of a sheet of paper",
      "Assembling a product from pre-made components",
      "Carving an object from a solid block of material",
    ],
    optionRationales: [
      null,
      "Double-sided printing is a paper-handling feature. Additive manufacturing builds three-dimensional objects.",
      "Assembly joins existing parts. Additive manufacturing creates parts from raw material.",
      "Carving from a solid block is subtractive manufacturing — the opposite of additive. Both produce objects, but one removes material and the other adds it.",
    ],
    correct: 0,
    explanation: "## Building Up\n\n**Additive manufacturing** is the process of creating an object by adding material layer by layer. The 3-D printer is the machine that implements this process — it reads a digital model and deposits material in thin horizontal slices until the object is complete.\n\nThe name is a deliberate contrast with **subtractive manufacturing**, the traditional approach in which a block of material is carved or cut down to the desired shape. Subtractive methods waste material (the shavings and trimmings) and struggle with complex internal structures. Additive methods use material only where it is needed and can build shapes that would be impossible to carve — hollow spheres, tangled lattices, and internal channels.\n\nThe applications range widely. 3-D printers produce prototypes for product design, custom medical implants matched to individual patients, prosthetic limbs, replacement parts for machinery, and even some clothing and eyewear. The technology is not a replacement for mass manufacturing — it is slower and more expensive per unit for large volumes. Where it excels is in one-off items, custom-fitted devices, and objects with internal structures that traditional methods cannot produce. This is why the technology found its first successes in medicine and engineering, where the value of a custom shape exceeds the cost of a slow production method.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-010",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "How does a thermal printer generate output?",
    options: [
      "By transferring dye from a ribbon to coated paper",
      "By spraying liquid ink through nozzles",
      "By pushing heated pins against heat-sensitive paper",
      "By charging a drum with a laser and fusing toner",
    ],
    optionRationales: [
      "Dye transfer is a dye-sublimation process. Thermal printers use heat, not dye, to create images.",
      "Spraying liquid ink is inkjet technology. Thermal printers do not use liquid ink.",
      null,
      "Charging a drum with a laser is the laser printer process. Thermal printers use heat directly on treated paper.",
    ],
    correct: 2,
    explanation: "## Hot Pins, Treated Paper\n\nA **thermal printer** uses heat to create images. The print head contains a row of tiny heated pins that press against **heat-sensitive paper** — paper that has been treated to change color when exposed to heat.\n\nThe mechanism is direct. When a pin is heated, the paper beneath it darkens, forming a dot. By heating different pins at different times as the paper moves through the printer, the device builds up an image from individual dots. There is no ink, no toner, and no ribbon — the paper is the medium and the chemistry.\n\nThe advantage is simplicity. With no consumables except the paper itself, thermal printers have fewer parts that can fail and require no cartridge replacements. This makes them ideal for receipt printers, where reliability and low maintenance matter more than print quality. Shipping labels and event tickets use the same technology for the same reason. The trade-off is that thermal paper is more expensive than plain paper and the printed image can fade over time — a problem for anything that needs to be preserved long-term.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-011",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a dye-sublimation printer?",
    options: [
      "A printer that pushes heated pins onto heat-sensitive paper",
      "A printer that sprays small drops of ink",
      "A printer that uses a laser and toner",
      "A printer that transfers dye onto specially coated paper",
    ],
    optionRationales: [
      "Heated pins and heat-sensitive paper is the thermal printer process. Dye-sublimation uses heat but on a different substrate and through a different mechanism.",
      "Spraying drops of ink is inkjet technology. Dye-sublimation printers use heat to transfer dye.",
      "Laser and toner is the laser printer process. Dye-sublimation does not use toner.",
      null,
    ],
    correct: 3,
    explanation: "## Dye Meets Heat\n\nA **dye-sublimation printer** — sometimes called a digital photo printer — uses heat to transfer coloured dye onto specially coated paper. The heat causes the dye to turn into a gas without passing through a liquid stage, which is what the word *sublimation* refers to.\n\nThe result is continuous-tone color. Where an inkjet printer builds an image from individual dots that are small but still discrete, a dye-sub printer produces smooth gradations of colour — the image looks like a photograph rather than a very fine pattern of dots. This is why dye-sub printers are the standard in professional photo labs and in applications where the highest colour fidelity is required.\n\nThe trade-off is cost and speed. Dye-sub printers are slower than inkjets and lasers, and the dye ribbons and coated paper they use are more expensive per print. This makes them uneconomical for everyday document printing. They exist for a specific task — producing photographs at a quality level that other printers cannot match — and they serve that task at the expense of generality.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-012",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a mobile printer designed for?",
    options: [
      "Printing only in colour for marketing materials",
      "Printing on fabric rather than on paper",
      "Printing at industrial scale in a factory",
      "Printing from a laptop or phone while travelling",
    ],
    optionRationales: [
      "Colour capability is a specification. Mobile printers can be colour or monochrome.",
      "Fabric printing is a specialized use case, not the defining purpose of a mobile printer.",
      "Industrial printing uses large presses, not mobile printers. The scale is entirely different.",
      null,
    ],
    correct: 3,
    explanation: "## Print Anywhere\n\nA **mobile printer** is a small, lightweight, battery-powered printer designed to be carried by the user. It connects wirelessly to a laptop, tablet, or phone and produces physical output on the spot.\n\nThe design trade-offs are dictated by portability. Mobile printers have smaller paper capacity, lower print speed, and higher per-page cost than desktop printers. They are usually limited to thermal or small-format inkjet technology because those are the mechanisms that fit into a compact, battery-powered device. None of these are shortcomings — they are the costs of being portable.\n\nThe users are professionals in the field. A delivery driver prints a signature page at the customer's door. A salesperson produces an invoice at a client meeting. An event staff member prints a ticket where the customer is standing. A police officer prints a citation at the roadside. In each case, the physical document has to be delivered immediately, and the worker cannot return to an office to produce it. The mobile printer is what makes that possible, replacing what would otherwise require pre-printed forms or a trip back to a fixed location.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-013",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is an impact printer?",
    options: [
      "A printer that strikes a ribbon against the paper",
      "A printer that uses a laser beam and toner",
      "A printer that transfers dye with heat",
      "A printer that sprays ink through tiny nozzles",
    ],
    optionRationales: [
      null,
      "Laser is a non-impact technology. Impact printers do not use a beam.",
      "Dye transfer is a non-impact method. Impact printers do not transfer dye through a ribbon in the modern sense.",
      "Spraying ink is inkjet technology. Impact printers use physical strikes.",
    ],
    correct: 0,
    explanation: "## Strike and Ribbon\n\nAn **impact printer** forms characters by physically striking a mechanism against an inked ribbon, which transfers ink to the paper. The physical contact is the defining feature.\n\nThe most familiar impact printer is the dot-matrix printer, which has a print head containing a row of small pins. The pins fire at the ribbon and paper in patterns, forming characters from dots. This is why the output looks like it was made from a grid of small dots rather than smooth letters.\n\nThe advantage of impact printers is their ability to print on multi-part forms. Carbon-copy invoices, receipts in triplicate, and other multi-layer documents require the impact — the strike pushes through all the layers at once, transferring ink to each one. Non-impact printers cannot do this because they have no way to transfer ink through multiple sheets. This is why impact printers remain in service in specific industries — logistics, freight, and any business that still uses multi-part forms — even though non-impact printers are superior for everything else. The technology is old, but for its niche, nothing has replaced it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-014",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a large-format printer used for?",
    options: [
      "Printing receipts for retail transactions",
      "Printing labels for shipping boxes",
      "Producing technical blueprints at scale",
      "Creating photo-realistic signs and posters",
    ],
    optionRationales: [
      "Receipt printing uses small thermal printers. Large-format printers produce much larger output.",
      "Labels are produced by label printers, which are small and specialized.",
      "Technical blueprints are produced by plotters. Large-format printers produce colour graphics.",
      null,
    ],
    correct: 3,
    explanation: "## Big Colour\n\nA **large-format printer** is designed to produce high-quality colour graphics at large sizes — signs, posters, banners, and other displays. The output is measured in metres, and the quality is photographic.\n\nThe distinction from a plotter is what they produce. A plotter draws technical line drawings — precision matters, colour fidelity does not. A large-format printer produces colour images with the same quality you would expect from a photograph. This makes it suitable for advertising, exhibition displays, retail signage, and any application where the visual impact of the image is the point.\n\nLarge-format printers are expensive, both to buy and to operate. They consume large amounts of ink, and the substrates they print on — vinyl, canvas, specialty papers — cost more than ordinary printing paper. This is why they are used by print shops and commercial sign makers rather than by individual users. The cost structure matches the use case: whoever needs a two-metre-wide photograph of a product on a banner does not mind paying for it, and whoever does not need one has no reason to own the equipment.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-015",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "What is a label printer?",
    options: [
      "A printer that prints only on film",
      "A printer that produces bar-coded labels and adhesive tags",
      "A printer that produces posters and signs",
      "A printer that prints on both sides of paper",
    ],
    optionRationales: [
      "Film printing is a transparency-oriented use case, not the defining role of a label printer.",
      null,
      "Posters and signs are produced by large-format printers. Label printers produce small items.",
      "Double-sided printing is a general printer feature, not a label printer specialty. Label printers print on adhesive material.",
    ],
    correct: 1,
    explanation: "## Small and Sticky\n\nA **label printer** produces labels — adhesive materials that can be attached to envelopes, packages, files, and products. The most common uses are shipping labels, barcode labels, and file folder identification.\n\nThe printer works on adhesive-backed stock that is fed from a roll or sheet. Some label printers use thermal technology, which requires no ink or toner, and others use small inkjet or laser mechanisms. Either way, the output is a printed adhesive label ready to be peeled and applied.\n\nThe applications are almost entirely organizational. A shipping department needs labels to route packages. A warehouse needs labels to track inventory. An office needs labels for filing. Each of these tasks requires a large number of small, uniform labels, and a general-purpose printer is not well suited to that — it would waste paper on partial sheets and jam on adhesive stock. The label printer exists because the task is common enough and specific enough to justify a dedicated device.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-016",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "Which of the following best describes the difference between a plotter and a large-format printer?",
    options: [
      "A plotter is used for photographs; a large-format printer is used for documents",
      "A plotter draws technical lines; a large-format printer produces colour graphics",
      "A plotter is small; a large-format printer is enormous",
      "A plotter is wireless; a large-format printer is wired",
    ],
    optionRationales: [
      "The assignment of tasks is reversed. Plotters handle technical drawings; large-format printers handle photographs and graphics.",
      null,
      "Both devices are large. The physical size is similar; what differs is what they produce.",
      "Connection type varies between models and is not the defining distinction. Both can be wired or wireless depending on the design.",
    ],
    correct: 1,
    explanation: "## Lines vs Images\n\nThe difference between a **plotter** and a **large-format printer** is what they produce. A plotter draws **technical line drawings** — blueprints, schematics, and architectural plans where continuous lines carry meaning. A large-format printer produces **colour graphics** — posters, signs, and banners where photographic quality matters.\n\nThe internal machinery differs accordingly. Plotters are designed to draw lines with precision. The traditional plotter used a pen that moved across the paper, and while modern plotters use charged wires or specialised ink heads, the output is still line-based. Large-format printers use inkjet or dye-sublimation technology to spray or transfer colour across a wide surface, and the result looks like a photograph printed large.\n\nThe audiences are different too. Plotters serve engineers and architects, who need to check dimensions on a full-size drawing. Large-format printers serve advertising and design, where visual impact is the goal. The two devices share the same physical size class but serve completely different professional needs.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.4-017",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.4 Physical Output",
    q: "Why do thermal printers remain popular for receipts despite their limitations?",
    options: [
      "They produce the highest quality output available",
      "They print in any colour the customer chooses",
      "They are quiet, fast, and need no ink",
      "They can print on any paper type",
    ],
    optionRationales: [
      "Thermal printers produce acceptable but not high-quality output. Their popularity is based on reliability and simplicity, not image quality.",
      "Thermal printers print only in black (or in a single colour where special paper is used). Colour thermal printing is not the reason for their popularity.",
      null,
      "Thermal printers require specially treated paper, not ordinary paper. This is a limitation of the technology, not a feature.",
    ],
    correct: 2,
    explanation: "## Simple and Reliable\n\nThermal printers dominate the receipt market for three reasons: **they are quiet, they are fast, and they need no ink**.\n\nThe quietness comes from the absence of any striking or spraying mechanism. The only moving part is the motor that feeds the paper. The speed comes from the same simplicity — there is no print head travelling across the page, no ink drying, no complex timing. The print appears as the paper moves past the heated pins, and the transaction is done.\n\nThe lack of ink is perhaps the most important feature for a business. Ink cartridges and toner cost money, run out at inconvenient times, and require replacement. Thermal printers have none of these problems because the paper itself contains the color-changing chemistry. The only consumable is the paper roll, which is easy to stock and easy to change.\n\nThe trade-off — that the paper is more expensive and the print fades over time — is acceptable for receipts. A receipt only needs to be readable long enough for the customer to check it and for the business to keep its records. The savings in ink, maintenance, and complexity justify the paper cost for the volume of receipts a typical retail environment produces.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is a display device?",
    options: [
      "A network device that routes data packets",
      "An output device that shows text, graphics, and video",
      "An input device that captures touches and gestures",
      "A storage medium for large media files",
    ],
    optionRationales: [
      "Routers direct network traffic; they do not display anything to the user.",
      null,
      "Touch input is one capability a touchscreen has, but a display in standard terminology is specifically an output device. Combining input and output is a feature of specific devices, not the general category.",
      "Storage and display are different functions. Storage holds data across sessions; displays show data temporarily.",
    ],
    correct: 1,
    explanation: "## Showing Information\n\nA **display device** — or simply a display — is an output device that visually presents text, graphics, and video. Monitors, laptop screens, phone screens, and projectors are all display devices.\n\nWhat the display shows is called a **soft copy** — information that exists electronically and appears only temporarily. Turn off the screen and the image disappears. This is the fundamental difference from a hard copy on paper, which persists after the machine is turned off and can be physically carried and stored.\n\nThe soft copy has its own advantages. It can be updated in real time — a stock ticker or a live video changes as the underlying data changes. It can display motion, which paper cannot. And it can be produced without consuming ink or paper. These advantages explain why digital displays have replaced paper in most information-consuming contexts, even though paper remains preferable for some specific uses.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is an LCD (liquid crystal display)?",
    options: [
      "A display that uses a liquid compound between two sheets",
      "A display that uses organic molecules that emit light",
      "A display that projects images onto a wall",
      "A display that uses gas plasma between glass plates",
    ],
    optionRationales: [
      null,
      "Organic light-emitting molecules are used in OLED displays, not LCDs. LCDs do not produce their own light.",
      "Projectors are a different category of output device. LCDs are the screen itself.",
      "Gas plasma is a different technology, used in older plasma displays. LCD uses liquid crystals.",
    ],
    correct: 0,
    explanation: "## Liquid Crystals\n\nAn **LCD** (liquid crystal display) sandwiches a liquid crystal compound between two sheets of material. When the liquid crystals are electrically stimulated, they change how light passes through them, which produces the pixels that form the image on screen.\n\nThe critical feature is that LCDs do not produce their own light. The crystals only modify light that passes through them, so an LCD always needs a **backlight** — a light source behind the screen. Older LCDs used CCFL (cold cathode fluorescent lamps); modern ones use LEDs, which is why the technology is often called *LED-backlit LCD*. The screen itself is still an LCD; the LED is the light behind it.\n\nLCDs are the dominant display technology because they are cheap to manufacture at large sizes, reliable over many years, and capable of producing bright, sharp images in most lighting conditions. Their weakness is the opposite of OLED's strength: because the backlight is always on, an LCD pixel that is showing black is really just blocking the backlight, not turning it off. The result is a slight grey glow in dark scenes rather than true black.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is an OLED display?",
    options: [
      "A display that uses gas plasma technology",
      "A display that uses self-illuminating organic molecules",
      "A display that projects images with a laser",
      "A display that requires a separate backlight",
    ],
    optionRationales: [
      "Gas plasma was used in older plasma displays. OLED uses organic compounds, not plasma.",
      null,
      "Laser projection is a different technology. OLEDs are the screen itself, not the light source that projects onto it.",
      "Requiring a backlight describes LCD technology. OLEDs produce their own light, so no backlight is needed.",
    ],
    correct: 1,
    explanation: "## Self-Illuminating\n\nAn **OLED** (organic light-emitting diode) display uses organic molecules that produce light when electrical current passes through them. The molecules are the light source — there is no separate backlight.\n\nThe absence of a backlight has practical consequences. Without a light source constantly illuminating the whole screen, OLED displays can achieve perfect black. An OLED pixel that is turned off produces no light at all, which reads as true black on the screen. An LCD pixel cannot achieve this because the backlight is always on and the liquid crystal can only dim the light, not extinguish it entirely. The difference is most visible in dark scenes — space, night scenes in movies, black backgrounds — where OLED produces a much deeper, more accurate image.\n\nOLED panels can also be made thinner and more flexible than LCDs, since they lack the extra layer required by a backlight. This is why OLED is the standard technology in high-end smartphones, flagship televisions, and flexible or foldable devices. The trade-off is cost and longevity — OLED materials degrade over time, and the technology remains more expensive to manufacture than LCD at large sizes.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "How is the screen size of a display measured?",
    options: [
      "By the total area of the display surface",
      "By the number of pixels on the screen",
      "By the diagonal distance between opposite corners",
      "By the horizontal width of the display",
    ],
    optionRationales: [
      "Area is a valid measurement, but it requires two numbers. Diagonal measurement captures size in a single figure, which is why the industry uses it.",
      "Pixel count measures resolution, not physical size. Two screens can have the same resolution but different physical dimensions.",
      null,
      "Horizontal width is a measurement, but it does not capture the screen's overall size. Two displays of the same width can have very different heights.",
    ],
    correct: 2,
    explanation: "## Corner to Corner\n\nScreen size is measured **diagonally** — from one corner of the display area to the opposite corner. A 15-inch laptop screen has 15 inches of diagonal distance, whether it is measured from top-left to bottom-right or from top-right to bottom-left.\n\nThe diagonal is used because it captures both dimensions in a single number. A rectangle's physical size requires both width and height to describe accurately. The diagonal gives a single figure that increases with both, so a screen with a bigger diagonal is a bigger screen regardless of its aspect ratio. This makes comparisons simple — a 27-inch monitor is always larger than a 24-inch monitor, even if their shapes differ.\n\nMeasuring only the viewable area — not the plastic frame around it — is the standard convention. A 15-inch laptop with a very thin bezel has a physically larger screen than a 15-inch laptop with a thick bezel, even though both are marketed as 15-inch. The convention is not perfect, but it lets buyers compare screens within a product category without needing the exact physical dimensions of every model.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-005",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is the native resolution of a display?",
    options: [
      "The highest resolution the display can technically accept",
      "The resolution of the content being displayed",
      "The resolution the display is designed and optimized for",
      "The resolution set in the operating system",
    ],
    optionRationales: [
      "Maximum supported resolution is one specification, but a display can accept lower resolutions and still have a native resolution. The native resolution is what it is designed for, not the maximum it can accept.",
      "Content resolution is determined by the file or stream being shown. The display's native resolution is fixed by its hardware.",
      null,
      "This option does not match what the stem asks for.",
    ],
    correct: 2,
    explanation: "## Designed For\n\nThe **native resolution** of a display is the resolution it was designed and optimized for. It is the number of physical pixels the display actually contains.\n\nWhen the display runs at its native resolution, the image is at its sharpest because each pixel of standard teaching image maps to exactly one pixel on the screen. When the display runs at a lower resolution, the image has to be scaled — pixels of standard teaching are duplicated to fill multiple physical pixels on the screen — and the result is slightly blurry or soft compared to the native image.\n\nHigher resolutions mean more pixels, which allow more detail to be shown. A 1080p display has 1920 pixels across and 1080 down. A 4K display has 3840 by 2160, four times as many. The trade-off is size: as resolution increases, individual items on the screen appear smaller unless the operating system also scales them up. This is why 4K displays on small laptops often have scaling enabled — the extra pixels allow sharper rendering, but the user interface would be unreadably small without scaling. The native resolution is fixed; how it is used depends on the operating system and user preference.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-006",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What does the response time of a display measure?",
    options: [
      "The time it takes a pixel to change state",
      "The time to switch between input sources",
      "The time for the display to warm up",
      "The delay between keypress and screen update",
    ],
    optionRationales: [
      null,
      "Source switching time is a separate specification. Response time is measured per pixel, not per source.",
      "Warm-up time is a separate property. Response time is about how fast pixels change after the display is already on.",
      "Input lag is the delay between a user action and the visible result. Response time is about pixel transitions, which is a different measurement.",
    ],
    correct: 0,
    explanation: "## Fast Pixels\n\nThe **response time** of a display measures how long it takes for a single pixel to change from one state to another — typically from one color to another. It is measured in milliseconds (ms), and lower numbers mean faster pixel transitions.\n\nResponse time matters for motion. When a display shows video or a game, the image changes continuously. If the pixels cannot keep up with the changes, fast-moving objects leave a blur behind them — a smeared trail where the image is still catching up. Faster response time reduces this blur, which is why response time is one of the most-consulted specifications for gaming monitors.\n\nThe typical range for modern displays is 1 to 5 ms. A display with a response time under 5 ms is considered fast enough for most purposes. A display with a response time above 10 ms may show visible blur in fast-motion content. Response time is sometimes confused with refresh rate — refresh rate measures how many times per second the entire screen updates, while response time measures how fast each individual pixel can change. Both affect motion clarity, but they measure different things.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-007",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is a nit in the context of displays?",
    options: [
      "The diagonal size of the display",
      "A measure of pixel density",
      "A unit of visible light intensity",
      "The number of colors a display can show",
    ],
    optionRationales: [
      "Physical size is measured in inches diagonally. Nits have nothing to do with size.",
      "Pixel density is measured in pixels per inch, not nits. Density and brightness are different specifications.",
      null,
      "Colour gamut is measured as a percentage of a colour space, not in nits. The two are separate properties.",
    ],
    correct: 2,
    explanation: "## Measuring Brightness\n\nA **nit** is a unit of visible light intensity. It measures how much light a display emits per square metre of screen area. Higher nits mean a brighter display.\n\nThe origin of the term is the Latin word *nitere*, meaning to shine. In technical contexts, the unit is more formally called candelas per square metre, but in consumer marketing — especially for phones and HDR TVs — the simpler term has become standard. A phone screen rated at 400 nits is bright enough for indoor use. One rated at 800 to 1,000 nits can be read in direct sunlight. HDR-capable TVs often advertise peak brightness above 1,000 nits, which is what allows them to reproduce highlights realistically.\n\nBrightness matters because it determines what environments the display can be used in. In a dark room, even a low-brightness display is comfortable. In bright sunlight, a low-brightness display becomes unreadable because the ambient light overwhelms the screen's own emission. This is why brightness is one of the most-cited specifications for phones, tablets, and laptops — devices that are used in a wide range of lighting conditions.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-008",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is dot pitch on a display?",
    options: [
      "The distance in millimetres between pixels",
      "The time it takes pixels to change color",
      "The number of pixels per inch of screen",
      "The brightness of the display in nits",
    ],
    optionRationales: [
      null,
      "Timing is response time, not dot pitch. Dot pitch is a spatial measurement.",
      "Pixels per inch is a related measure, but dot pitch is the distance between pixels, not the count. The two are inversely related: closer pixels means more pixels per inch.",
      "Brightness is unrelated to dot pitch. One measures light intensity, the other measures spatial arrangement.",
    ],
    correct: 0,
    explanation: "## Pixels Apart\n\n**Dot pitch** — also called **pixel pitch** — is the distance in millimetres between adjacent pixels on a display. A smaller dot pitch means the pixels are packed more tightly, which allows more detail to be shown.\n\nDot pitch and resolution are related but not the same. Resolution is the count of pixels across the screen, and dot pitch is the physical distance between them. Two displays with the same resolution can have different dot pitches if their physical sizes differ. A 4K display at 65 inches has a larger dot pitch than a 4K display at 27 inches, even though both have the same pixel count.\n\nThe practical effect is on image sharpness. Text rendered with a smaller dot pitch is easier to read because individual letters have more pixels available to describe their shapes. This is why a phone screen at 400+ pixels per inch looks sharper than a laptop screen at 200 — the phone's dot pitch is much smaller. The limitation is that small dot pitches require more precise manufacturing, which raises the cost. The industry continually pushes toward smaller dot pitches because the visual improvement is noticeable, but the price reflects the difficulty.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-009",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What does the contrast ratio of a display measure?",
    options: [
      "The difference between the brightest white and darkest black",
      "The ratio of display size to viewing distance",
      "The ratio of pixel count to screen brightness",
      "The ratio of width to height of the screen",
    ],
    optionRationales: [
      null,
      "Viewing distance ratios are ergonomic guidance, not display specifications. Contrast ratio is about image quality.",
      "Pixel count and brightness are separate specifications. Combining them does not define contrast ratio.",
      "Width-to-height ratio is the aspect ratio, not the contrast ratio. The two are both ratios, but they describe different properties.",
    ],
    correct: 0,
    explanation: "## Light and Dark\n\nThe **contrast ratio** of a display measures the difference between the brightest white and the darkest black the screen can produce. A higher contrast ratio means the display can show a wider range of brightness levels, which makes the image look more vivid and lifelike.\n\nThe concept is easier to understand with extremes. If a screen's brightest white is 300 nits and its darkest black is 1 nit, the contrast ratio is 300:1. If a screen's brightest white is 1,000 nits and its darkest black is 0.1 nits, the contrast ratio is 10,000:1. The second screen can show both very bright highlights and very dark shadows at the same time, which gives the image greater depth.\n\nThis is where OLED displays have a structural advantage. Because each OLED pixel produces its own light, a pixel showing black can be turned off completely, producing true black — technically infinite contrast. An LCD's backlight is always on, so an LCD pixel showing black is really just a pixel blocking most of the light, not one producing none. The result is that LCD blacks tend to look slightly grey, especially in dark rooms. This difference is the main reason OLED is considered superior for film viewing and dark-scene content.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-010",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is a GPU?",
    options: [
      "A chip that controls graphics and image display",
      "A memory module dedicated to graphics files",
      "A device driver that controls display output",
      "A processor that handles general-purpose computing tasks",
    ],
    optionRationales: [
      null,
      "Memory is separate from the GPU. Graphics memory is a related component, but the GPU itself is a processor, not a memory storage.",
      "Drivers are software. The GPU is a physical chip.",
      "General-purpose computing is the CPU's role. GPUs are specialized for graphics, though they can also perform other parallel computations.",
    ],
    correct: 0,
    explanation: "## Graphics on the Chip\n\nA **GPU** (graphics processing unit) is a chip that controls the manipulation and display of graphics on a display device. It is the component that renders what you see on screen.\n\nThe GPU is specialized for a particular kind of work. Rendering an image requires performing the same operation — computing the color of a pixel — millions of times in parallel. CPUs are designed for a few complex tasks at a time; GPUs are designed for thousands of simple tasks at once. This architectural difference makes GPUs far more efficient than CPUs at graphics work.\n\nTwo types of GPU exist. An **integrated GPU** is built into the processor or motherboard and shares memory with the main system. It is sufficient for everyday tasks — browsing, office work, video playback. A **dedicated GPU** is a separate chip on its own card with its own memory, and it provides the performance needed for gaming, video editing, 3D modelling, and other graphics-intensive work. The dedicated GPU is more powerful but also more expensive and power-hungry, which is why laptops that use one often have a switching system that turns it off when not needed.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-011",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What does the aspect ratio of a display describe?",
    options: [
      "The brightness of the display in nits",
      "The response time of the pixels",
      "The width of the display relative to its height",
      "The total number of pixels on the screen",
    ],
    optionRationales: [
      "Brightness is measured in nits. Aspect ratio is about dimensions, not light intensity.",
      "Response time is a timing measurement. Aspect ratio is a spatial measurement.",
      null,
      "Pixel count is resolution, not aspect ratio. Resolution measures how many pixels; aspect ratio measures their arrangement.",
    ],
    correct: 2,
    explanation: "## Wide or Tall\n\nThe **aspect ratio** of a display describes the relationship between its width and its height. It is written as two numbers separated by a colon — 16:9, 4:3, 21:9, and so on.\n\nThe history of aspect ratios tracks the history of what displays are used for. Early computer monitors used 4:3, a ratio close to square, which matched the shape of documents and worked well for word processing and spreadsheets. As video became the dominant use of screens, displays moved to 16:9, the standard widescreen ratio for television and film. Ultra-wide monitors now use 21:9, providing even more horizontal space for multitasking and immersive viewing.\n\nThe choice of aspect ratio affects what content fits naturally. A 4:3 video played on a 16:9 screen shows black bars on the sides unless stretched. A 16:9 video played on a 4:3 screen shows black bars on the top and bottom. Content that matches the display's aspect ratio fills the screen with no wasted space, which is why the industry has settled on 16:9 as the default — most content is now produced in that ratio.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-012",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is a smart TV?",
    options: [
      "A TV that connects to the Internet and runs apps",
      "A TV that supports 3D viewing without glasses",
      "A TV that adjusts brightness automatically",
      "A TV that records programs to a built-in drive",
    ],
    optionRationales: [
      null,
      "3D viewing is a display technology, not a smart-TV capability. 3D TVs existed before smart features were common, and 3D has largely been abandoned.",
      "Ambient-light sensing is a feature of many modern TVs, but it does not define the smart TV category.",
      "DVR functionality is a recording feature. Some smart TVs have it, but recording is not what makes a TV smart.",
    ],
    correct: 0,
    explanation: "## The Internet on the Screen\n\nA **smart TV** is an Internet-connected television that can browse the web, run streaming apps, and provide interactive services on the screen. It is a convergence device — what used to be only a display for broadcast signals now has a processor, memory, and a network connection.\n\nThe functional difference from a regular TV is the ecosystem. A smart TV has an app store, a home screen, a search function, and the ability to install software the way a phone does. Streaming services — Netflix, YouTube, Disney+, and dozens of others — run as apps on the TV itself, without needing an external device. Browsing, social media, and some games are also available, though the TV interface is usually designed around watching rather than typing.\n\nThe category emerged because the underlying hardware became cheap. Once a television needed a processor for image processing, adding networking and app support cost relatively little. The result is that almost every TV sold today above the budget tier is smart by default. The distinction between a TV and a computer has become less useful for describing what the device can do.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-013",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is UHD television?",
    options: [
      "A television that shows 3D content without glasses",
      "A television that runs on battery power",
      "A television that shows only streaming content",
      "A television standard with higher resolution than HD",
    ],
    optionRationales: [
      "3D capability is a separate feature that has nothing to do with resolution. UHD is about pixel count.",
      "Televisions plug into wall power. Battery-powered TVs are a specialty category unrelated to UHD.",
      "Streaming-only devices exist, but UHD is a resolution standard that applies to any content source.",
      null,
    ],
    correct: 3,
    explanation: "## Beyond HD\n\n**UHD** (ultra-high-definition) is a television resolution standard that offers significantly more pixels than HD. It is the current generation of high-resolution display, replacing the previous standard of 1080p.\n\nThe two common UHD standards are 4K and 8K. **4K UHD** provides 3840 by 2160 pixels — about 8.3 million pixels, roughly four times the 2 million pixels of 1080p Full HD. **8K UHD** provides 7680 by 4320 pixels, four times as many as 4K. Each step up increases the amount of detail the display can show.\n\nThe benefit is most visible on large screens. On a phone, the difference between HD and 4K is nearly invisible because the screen is small and the pixels are already packed densely. On a 65-inch television viewed from across the room, 4K content looks noticeably sharper than HD content — the extra pixels preserve detail that would otherwise blur together. This is why 4K became the standard for large televisions, and why content providers have spent years upgrading their production and delivery systems to support it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-014",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is a headset?",
    options: [
      "A device that amplifies sound for a room",
      "A device with headphones and a microphone",
      "A device that only plays audio back to the user",
      "A device that shows images directly to the eyes",
    ],
    optionRationales: [
      "Amplifying for a room describes a public address system. Headsets are personal devices.",
      null,
      "Playing audio only describes headphones. A headset includes a microphone for input.",
      "Showing images to the eyes describes VR headsets, which are a different category. An audio headset is about sound.",
    ],
    correct: 1,
    explanation: "## Listen and Speak\n\nA **headset** is a device that combines headphones with a microphone. The headphones output audio; the microphone captures the user's voice. Together they enable two-way communication without the user having to hold anything.\n\nThe design is the point. A telephone handset — the original two-way communication device — had to be held to the ear and mouth. A headset frees both hands, which is why it became standard in call centres, air traffic control, and any setting where the user needs to talk on the phone while typing, writing, or manipulating physical objects.\n\nThe category has expanded as audio hardware has improved. Modern headsets often include noise cancellation, which blocks ambient sound so the user can focus on the audio. Gaming headsets add surround sound so players can hear direction in the game world. Wireless headsets connect over Bluetooth or a dedicated wireless protocol. What they all share is the original purpose: a phone that stays on the head, leaving the hands free.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-015",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is a data projector used for?",
    options: [
      "Storing data on a remote server",
      "Displaying a computer's screen on a large surface",
      "Capturing images of objects in 3D",
      "Amplifying the audio output of a computer",
    ],
    optionRationales: [
      "Storage is a separate function. Projectors display content; they do not hold it long-term.",
      null,
      "3-D capture is done by scanners, not projectors. Projectors produce visual output; they do not capture input.",
      "Amplification is the role of speakers. Projectors output images, not audio, though some models include small built-in speakers as an add-on.",
    ],
    correct: 1,
    explanation: "## Big Screen Output\n\nA **data projector** takes the image from a computer or mobile device and displays it on a large surface — a wall, a screen, or a whiteboard. It is the standard tool for any situation where a group of people needs to see the same content at once.\n\nThe projector is connected by cable or wirelessly to standard teaching device, and it produces an exact replica of what is on a common screen, only much larger. There is no processing or transformation — the projector reproduces the image faithfully. This is what distinguishes it from a television or monitor, which is designed to display content but is limited by its physical size.\n\nThe size difference matters for specific uses. A classroom, a lecture hall, a boardroom, or a home cinema uses projectors because a screen large enough to be seen by everyone in the room is impractical to manufacture as a TV. A projection reaches 100, 200, or 300 inches diagonally without any increase in cost, because the image is created by light rather than by physical pixels embedded in glass. This is why the projector remains the standard display technology for presentation environments, even as TVs have gotten cheaper and larger.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-016",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "What is an interactive whiteboard?",
    options: [
      "A whiteboard that is scanned into a computer",
      "A digital display that accepts touch input",
      "A whiteboard used only in business meetings",
      "A printed poster mounted on a classroom wall",
    ],
    optionRationales: [
      "Scanning an ordinary whiteboard after writing produces a static image, not a live interactive surface. The two serve different purposes.",
      null,
      "Interactive whiteboards are used in classrooms, boardrooms, training centres, and many other environments. The setting does not define the device.",
      "A printed poster is a physical display, not an interactive surface.",
    ],
    correct: 1,
    explanation: "## Touch the Board\n\nAn **interactive whiteboard** is a touch-sensitive display that combines the visibility of a projector with the interactivity of a touch screen. The board is connected to a computer and displays the computer's screen, but it also accepts touch input and stylus input directly on the surface.\n\nThe combination changes how the board can be used. In a traditional setup, the presenter operates the computer at a keyboard and points at the projection with a stick or laser pointer. With an interactive whiteboard, the presenter writes, moves, and manipulates content directly on the board. Software can capture the written strokes as digital ink, so a diagram drawn on the board can be saved, e-mailed, or embedded in notes. Applications can be opened by tapping icons on the board.\n\nInteractive whiteboards are common in education because they support a mix of teaching styles. A teacher can display a textbook page and annotate it in real time. A student can come to the board and solve a problem for the class to see. A group can manipulate a diagram together. The technology is not a single tool but a surface that can be whatever the teacher needs it to be — a display, a drawing surface, an interactive application, or all three at once.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.5-017",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.5 Digital Output",
    q: "How does a gaming controller function as an output device?",
    options: [
      "When it provides force feedback through vibration",
      "When it connects wirelessly to the console",
      "When it sends the player's commands to the console",
      "When it lights up with coloured LEDs",
    ],
    optionRationales: [
      null,
      "Wireless connection is a transmission method, not an output function.",
      "Sending commands is the controller's input function. Output is what the controller sends back to the player.",
      "LED lights are cosmetic in most cases. The defining output function of a modern controller is tactile feedback.",
    ],
    correct: 0,
    explanation: "## Shaking Back\n\nA game controller is primarily an input device — it sends the player's commands to the console. But modern controllers are also output devices because they provide **force feedback** — the vibration, resistance, or rumble that the game sends back to the player's hands.\n\nForce feedback is a form of tactile communication. When the player's car hits a wall in a racing game, the controller shakes. When the player's character is hurt in an action game, the controller pulses. When the player pulls a bowstring tight, the trigger resists. The game is using the controller to convey information that would otherwise have to be shown on screen or played through the speakers.\n\nThe technology began in arcade cabinets and flight simulators, where physical resistance to the controls made the simulation feel more real. It moved into home consoles in the late 1990s and is now standard equipment. Every modern console controller includes at least one vibration motor, and many include advanced haptics that can produce a range of tactile sensations — different textures, different intensities, different rhythms. The category demonstrates that input devices are often bidirectional: the device that receives the user's commands can also send feedback back to the user.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.6-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.6 Assistive Technology Input and Output",
    q: "What is the goal of accessible input and output?",
    options: [
      "To reduce the cost of computing for users with disabilities",
      "To increase the speed of computing for heavy workloads",
      "To enable independence for all users regardless of ability",
      "To standardize input devices across all computer systems",
    ],
    optionRationales: [
      "Cost reduction may be a byproduct of accessibility work, but it is not the goal. The goal is independence, not affordability.",
      "Speed is a performance goal. Accessibility concerns who can use the system at all, not how quickly it runs.",
      null,
      "Standardization is a compatibility goal, not an accessibility goal. Both matter, but only one addresses the needs of users with disabilities.",
    ],
    correct: 2,
    explanation: "## Independent Use\n\nThe goal of accessible input and output is to enable **all users to be independent** when working with, being entertained by, or accessing services that use technology. The measure of success is whether a user with a disability can complete a task without needing assistance.\n\nIndependence is a stronger standard than usability. A device that can be used with help does not grant the user full access — it makes them dependent on whoever is helping. A device that can be used alone, at any time, without another person's involvement is what accessibility aims for. This is why the range of assistive devices is so broad: blindness, low vision, limited hand mobility, deafness, and cognitive differences each require different solutions, and the goal for each is the same — full independence in use.\n\nThe devices themselves cover every combination of input and output. Some adapt input — eye gaze pointing, foot mice, sip-and-puff switches. Some adapt output — refreshable Braille displays, screen readers, voice synthesizers. Some do both. The category exists because the ordinary input and output of a computer is designed for the modal user, and the users outside that mode need devices designed for them.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.6-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.6 Assistive Technology Input and Output",
    q: "What does an eye gaze pointing device do?",
    options: [
      "It measures the distance to the screen",
      "It projects images directly onto the eye",
      "It reads eye movements to control the cursor",
      "It scans the retina to unlock a device",
    ],
    optionRationales: [
      "Proximity sensors detect how close the user is, but they do not track where the user is looking. Distance and direction are different measurements.",
      "Retinal projection is a display technology. Eye gaze is an input technology — the direction is opposite.",
      null,
      "Retina scanning is a biometric authentication method. It verifies identity; eye gaze tracking controls the cursor continuously.",
    ],
    correct: 2,
    explanation: "## Where You Look\n\nAn **eye gaze pointing device** tracks the direction of the user's gaze and uses it to control the cursor on screen. Where the user looks, the cursor moves. A dwell or blink can serve as a click.\n\nThe technology works by capturing an image of the eye with a small camera and detecting the position of the pupil and the reflection of an infrared light source. By comparing those two points, the software can calculate which part of the screen the eye is pointing at. The calculation is repeated many times per second, so the cursor follows the user's gaze smoothly.\n\nThis is a critical technology for users with severe motor disabilities — conditions like ALS, spinal cord injury, or late-stage muscular dystrophy — who retain control of their eye movements but cannot move their hands. For these users, eye gaze is not a convenience; it is often the only way to interact with a computer at all. The technology is slower than a mouse and requires calibration, but the alternative is no interaction. Even a slow, imprecise method of input is a fundamental change to a user's independence.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.6-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.6 Assistive Technology Input and Output",
    q: "What is a foot mouse?",
    options: [
      "A mouse optimized for use while walking",
      "A mouse that works with a floor mat",
      "A mouse stored under a desk when not in use",
      "A device operated by the user's feet",
    ],
    optionRationales: [
      "Walking is not part of using a foot mouse. The device is used while the user is seated or standing still.",
      "Working with a floor mat is a location, not a function. A foot mouse is defined by which body part operates it.",
      "Storage under a desk describes where a mouse sits, not what it does. A foot mouse is operated by the feet.",
      null,
    ],
    correct: 3,
    explanation: "## Feet Do the Work\n\nA **foot mouse** is a pointing device operated by the user's feet. It sits on the floor and translates foot movements into cursor movements on screen.\n\nThe design is a response to a specific need. Users with limited use of their arms and hands — from injury, arthritis, or neurological conditions — can often control their feet with more precision than their hands. For them, a foot mouse is what makes computer use possible without constant assistance.\n\nDifferent foot mice take different approaches. Some have a platform that slides, like a very large mouse. Some have pressure-sensitive zones that move the cursor in different directions based on where the foot presses. Some have a joystick-like control that the user moves with one foot. The right design depends on the user's specific mobility, which is why assistive devices in this category are often customized rather than mass-produced. The result is not as fast as a hand-operated mouse, but speed is not the point — control is, and a device that lets a user operate a computer independently is valuable even if it operates more slowly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.6-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.6 Assistive Technology Input and Output",
    q: "How does sip-and-puff technology work?",
    options: [
      "It uses finger gestures on a touchpad",
      "It uses eye blinks detected by a camera",
      "It uses a tube the user inhales from or exhales into",
      "It uses voice commands spoken into a microphone",
    ],
    optionRationales: [
      "Touch gestures require hand movement. Sip-and-puff requires only breath, which is why it serves users with severe motor impairment.",
      "Eye blinks are detected by eye-tracking technology, a separate category of assistive input.",
      null,
      "Voice commands use a microphone and speech recognition. Sip-and-puff uses breath pressure through a tube.",
    ],
    correct: 2,
    explanation: "## In and Out\n\n**Sip-and-puff** technology lets a user control a computer using a tube. Inhaling through the tube — a *sip* — produces one command; exhaling — a *puff* — produces another. By varying the strength and duration of each breath, the user can issue a range of commands including cursor movement, clicks, and text entry.\n\nThe technology is designed for users with severe paralysis, most often from spinal cord injuries, ALS, or advanced neuromuscular conditions. These users may retain control of their breathing and mouth but no other motor function. For them, sip-and-puff is often the only way to interact with a computer.\n\nA sip-and-puff system is usually integrated with on-screen software that presents choices the user can select with each breath — the same approach used by some text-entry systems, where letters are highlighted in sequence and the user selects the desired one with a puff. The system is slow compared to a keyboard, but it is reliable and can be learned to a useful speed with practice. The technology has existed for decades because it solves a specific problem that no other device solves: providing computer access to users who cannot move anything except their breath.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.6-005",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.6 Assistive Technology Input and Output",
    q: "What is a refreshable Braille display?",
    options: [
      "A printer that produces Braille on paper",
      "A tablet showing large text for low vision",
      "A screen that refreshes its image quickly",
      "A device that raises pins to represent Braille characters",
    ],
    optionRationales: [
      "A Braille printer produces permanent paper output. A refreshable display changes dynamically as the user reads.",
      "Large text is an accessibility feature for low vision. Refreshable Braille serves blind users through touch.",
      "Screen refresh rate is a display specification. Braille displays use raised pins, not light, to convey information.",
      null,
    ],
    correct: 3,
    explanation: "## Dots That Change\n\nA **refreshable Braille display** is a device that represents text as patterns of raised pins. Each character is rendered as a small cell of six or eight pins, and the user reads by touching the pins with their fingertips.\n\nWhat makes the display *refreshable* is that the pins change. As the user reads a line, the device updates the pins to show the next line of text. It is the Braille equivalent of a screen — the content updates continuously, unlike a printed page that is fixed once produced.\n\nThe technology is essential for blind users who need to read long documents, work with programming code, or read any content where linear reading is important. Screen readers that speak text aloud are faster for many purposes, but speech is sequential and ephemeral — the user has to remember what they heard. Braille is also sequential, but it is tactile and repeatable — the user can re-read a passage by touching it again, without waiting for the voice to replay. For some tasks — writing code, working with formulas, checking spelling — Braille is the preferred interface even when speech is available.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.6-006",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.6 Assistive Technology Input and Output",
    q: "What does a Braille printer do?",
    options: [
      "It converts speech into written Braille",
      "It embosses paper to produce tactile dots",
      "It enlarges standard print for low vision",
      "It displays Braille with refreshable pins",
    ],
    optionRationales: [
      "Speech-to-Braille conversion is a software function. The printer embosses whatever it is sent; it does not translate.",
      null,
      "Enlarging print helps low vision. Braille is for tactile reading by blind users.",
      "Refreshable Braille displays update dynamically. A Braille printer produces permanent paper output.",
    ],
    correct: 1,
    explanation: "## Raised on Paper\n\nA **Braille printer** uses embossing to produce hard copies of digital content that can be read by touch. The result is a physical document with raised dots — the tactile equivalent of a printout.\n\nThe process is similar to how a regular printer produces ink on paper, but instead of placing ink, the Braille printer uses mechanical pins to raise dots in the pattern that represents Braille characters. The paper must be heavier than ordinary printer paper to hold the shape of the raised dots without flattening under touch.\n\nBraille printers serve the same purpose for blind users that regular printers serve for sighted users. A blind user who wants to read a document in a comfortable chair, or who needs to mark it up with notes, or who needs to submit a printed copy for a specific purpose can use a Braille printer to produce the output. Combined with OCR readers that digitise printed material, the Braille printer closes the loop — printed text can be scanned, converted to digital Braille, and printed again as tactile dots. What started as an inaccessible document becomes fully accessible to a blind reader.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.6-007",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.6 Assistive Technology Input and Output",
    q: "How can an OCR reader help a blind user?",
    options: [
      "It highlights key passages in documents",
      "It scans printed pages so other devices can present them",
      "It reads text aloud without needing to scan it",
      "It translates text into several foreign languages",
    ],
    optionRationales: [
      "Highlighting is a reading aid for sighted users. OCR converts documents into machine-readable text.",
      null,
      "Reading aloud is a different technology — a screen reader or voice synthesizer. OCR provides the digitised text that the reader then outputs.",
      "Translation is a separate software function. OCR recognises characters; it does not change the language.",
    ],
    correct: 1,
    explanation: "## Feed the Reader\n\nAn **OCR reader** scans printed material and converts it into digital text. That digitised text is then available to other assistive devices — a screen reader that speaks it aloud, or a Braille printer that renders it as tactile dots.\n\nThe OCR step is what makes the rest possible. An assistive device can only work with content that exists in digital form. A printed page is invisible to a screen reader until the text has been captured. The OCR reader is the bridge: it converts the physical page into the digital format that the accessibility tools can process.\n\nFor a blind user, this means that every printed document becomes accessible. Textbooks, contracts, receipts, restaurant menus, letters — anything printed on paper can be scanned, digitised, and then presented in whichever format the user prefers. Combined with the rest of the assistive technology toolkit, OCR is what gives blind users access to the enormous volume of information that still exists only on paper. This is a case where a scanning technology not designed specifically for accessibility has become a fundamental part of the accessibility workflow.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.7-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.7 Customizing Input and Output Devices",
    q: "What are default settings in a computer system?",
    options: [
      "Settings that users are not permitted to change",
      "Settings that apply only to system administrators",
      "Settings set by the manufacturer for security reasons",
      "Standard settings the system applies when first configured",
    ],
    optionRationales: [
      "Defaults are designed to be changed. The word *default* describes where the system starts, not where it must stay.",
      "Administrator settings affect the whole system and may be locked; defaults affect the individual user and are meant to be adjusted.",
      "Manufacturer-set security settings are one category of settings. Defaults are the broader category of all starting configurations.",
      null,
    ],
    correct: 3,
    explanation: "## Starting Point\n\n**Default settings** are the standard configurations a computer or device applies when it is first set up. They are where the system starts before any customization has been applied.\n\nDefaults exist to solve the blank-slate problem. A new computer with no settings at all would be unusable — the user would have to configure every option from scratch. Defaults give the system a reasonable starting point that works for most users without requiring any adjustment. Every visible feature — the size of icons, the position of the taskbar, the brightness of the display, the language of the interface — begins with a default value.\n\nDefaults are not permanent. They are designed to be adjusted to fit each user's needs and preferences. A user who finds the text too small can enlarge it. A user who prefers a dark background can switch to dark mode. The system does not resist these changes; it expects them. The default is the average user's reasonable expectation, not a fixed rule. This is why the term *default* matters — it describes the starting point, not the required configuration.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.7-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.7 Customizing Input and Output Devices",
    q: "Which of the following is an example of customizing system software?",
    options: [
      "Upgrading the internal hard drive to a larger size",
      "Installing more memory chips on the motherboard",
      "Replacing the keyboard with a new one",
      "Changing the brightness of the screen",
    ],
    optionRationales: [
      "Upgrading the drive is a hardware change. The size of the drive is a physical property, not a software setting.",
      "Adding memory is a hardware change. Memory upgrades require opening the case and installing new chips.",
      "Replacing hardware is a physical change. Customization through software modifies the system's settings without changing any component.",
      null,
    ],
    correct: 3,
    explanation: "## Through the Settings\n\n**Customizing system software** means changing configuration settings within the operating system without replacing any hardware. Common examples include adjusting screen brightness, changing the desktop theme, modifying the display resolution, setting a sound scheme, and pinning frequently used apps to the taskbar.\n\nThe common thread is that these changes are made through menus and settings panels, not through physical modification. The user does not need to open the case, buy new components, or consult a technician. The change takes a moment and can be reversed just as quickly.\n\nThe distinction from hardware customization matters because the two serve different purposes. Hardware upgrades add capability — more memory, faster storage, a better display. Software customization adjusts how the existing capability is presented — a darker theme, larger text, a different keyboard layout. Both improve the user experience, but only one requires spending money on components. Software customization is available to every user with the default hardware they already have.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.7-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.7 Customizing Input and Output Devices",
    q: "Which of the following is an example of customizing input devices through system software?",
    options: [
      "Replacing the mouse with a wireless model",
      "Creating new keyboard shortcuts for common commands",
      "Plugging a printer into a different USB port",
      "Adding an external monitor to the system",
    ],
    optionRationales: [
      "Replacing a mouse is a hardware change. Customization through software modifies settings on the existing device.",
      null,
      "Moving a cable is a physical change. The software sees the same printer on the same port either way.",
      "Adding a monitor is a hardware expansion. Customization adjusts settings on existing devices.",
    ],
    correct: 1,
    explanation: "## Settings, Not Hardware\n\nCustomizing input devices through system software means changing how existing hardware behaves. Creating new keyboard shortcuts is a clear example — the user assigns a key combination to a command, and the same keyboard now does something different than it did before.\n\nOther examples follow the same pattern. A user can remap the buttons on a mouse, change which physical key types which character, adjust the sensitivity of a touchpad, or change the language the keyboard interprets. Each of these changes how the input device behaves without changing the device itself.\n\nThe value of this kind of customization is that it lets users adapt devices to their workflow rather than adapting their workflow to the devices. A user who frequently performs the same action can assign it to a key combination that requires no hand movement. A user with limited dexterity can remap controls to positions that are easier to reach. The keyboard and mouse on the desk stay the same; what they do when the user touches them changes. This is what distinguishes software customization from hardware replacement — the equipment is unchanged, only the behavior is adjusted.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.7-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.7 Customizing Input and Output Devices",
    q: "How does customization improve the user experience for a person with specific needs?",
    options: [
      "By upgrading the hardware to meet more demanding standards",
      "By allowing them to adapt the system to their workflow and abilities",
      "By automatically detecting the person's limitations and adjusting",
      "By providing a standard interface that works for all users equally",
    ],
    optionRationales: [
      "Customization through software does not upgrade hardware. It changes settings on the existing hardware.",
      null,
      "Automatic detection of limitations is not how operating systems currently work. Customization is manual by design — the user decides what to change.",
      "A single standard interface does not serve users with special needs. The point of customization is that no single configuration works for everyone.",
    ],
    correct: 1,
    explanation: "## Adaptation\n\nCustomization improves the user experience by letting the user **adapt the system to their workflow and abilities**. A system that is set up one way for everyone serves no one well; a system that can be adjusted serves each user on their own terms.\n\nThe range of adjustments is wide. Text size can be increased for users who struggle with small fonts. Contrast can be increased for users with low vision. Keyboard shortcuts can be remapped for users with limited dexterity. Mouse speed can be adjusted for users with tremor or reduced fine motor control. Screen readers can be enabled for blind users. The same operating system can serve all these users because each can adjust the settings that matter to them.\n\nThe key phrase is *by the user*. The adaptations are not automatic — the operating system does not know the user's needs. The user has to make the adjustments, or someone has to make them on their behalf. This is why clear, accessible settings menus matter: if the user cannot find the adjustment, the customization might as well not exist. Good customization is a combination of technical flexibility and interface clarity.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.8-001",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.8 Reducing E-Waste Risks",
    q: "Do electronic devices emit any radiation?",
    options: [
      "No, electronic devices emit nothing at all",
      "Only devices that contain radioactive materials emit radiation",
      "Yes, all electronic devices emit some level of radiation",
      "No, only devices with wireless capability emit radiation",
    ],
    optionRationales: [
      "Any device that uses electricity produces some electromagnetic emissions. The amount varies, but the claim of zero is wrong.",
      "Radioactive materials are a separate category. Electronic devices do not contain radioactive isotopes; their emissions come from the electricity they use.",
      null,
      "Wireless devices emit radio-frequency radiation for communication, but all electrical devices also emit other forms. The category is broader than just wireless.",
    ],
    correct: 2,
    explanation: "## Low Levels Everywhere\n\nEvery electronic device emits **some level of radiation**. The word *radiation* here refers to electromagnetic emissions — the same category that includes light, radio waves, and X-rays. Any device that carries electrical current produces a small electromagnetic field around it.\n\nThe amounts produced by ordinary computing equipment are generally considered harmless at the levels a user encounters in normal use. Research into the health effects of these emissions has not found evidence of harm at typical exposure levels, which is why computers, phones, and other devices are not treated as hazardous under the same rules that apply to medical X-ray equipment or nuclear materials.\n\nHowever, good practice is to practical steps to minimize exposure. These include replacing older CRT monitors with LCDs (which emit less), sitting back from the monitor, protecting the lap with a shielding device, moving other electronic sources like drives and printers farther away, minimizing wireless connections, removing Bluetooth headsets when not in use, turning off devices when not in use, and taking regular breaks. The recommendations are precautionary rather than emergency measures — the concern is cumulative exposure over years, not a specific danger.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.8-002",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.8 Reducing E-Waste Risks",
    q: "Why is it recommended to replace older CRT monitors with LCD monitors?",
    options: [
      "CRT monitors emit more radiation than LCDs",
      "LCDs are the only type of monitor available today",
      "LCDs have higher resolution than CRTs",
      "LCDs consume more electrical power than CRTs",
    ],
    optionRationales: [
      null,
      "CRTs are still in use in some specialized applications. The reason for the recommendation is not availability, but safety.",
      "Resolution is not the reason. Both CRT and LCD technologies can produce high resolution, and resolution depends on the specific model.",
      "LCDs consume less power than CRTs, not more. This is a real advantage of LCDs, but it is not the specific reason a typical example is.",
    ],
    correct: 0,
    explanation: "## Lower Exposure\n\nOlder CRT monitors emit more ionizing radiation than modern LCD screens. Replacing CRTs with LCDs is a practical step that reduces unnecessary exposure at the desk.\n\nLCD technology does not use the same high-voltage cathode-ray tube, so background radiation from the display drops. The change is one of several low-cost habits that lower everyday e-waste and radiation risk without requiring special equipment.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.8-003",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.8 Reducing E-Waste Risks",
    q: "Which practice is recommended to reduce exposure to device radiation?",
    options: [
      "Using more wireless devices instead of wired ones",
      "Using devices continuously without taking breaks",
      "Sitting back from the monitor and taking regular breaks",
      "Sitting as close to the monitor as possible",
    ],
    optionRationales: [
      "Wireless devices emit radio-frequency radiation. Minimizing wireless connections is recommended, not adding them.",
      "Continuous use without breaks is the opposite of the recommendation. Regular breaks reduce both exposure and strain.",
      null,
      "Sitting close to the monitor increases exposure. The recommendation is to sit back, not lean in.",
    ],
    correct: 2,
    explanation: "## Farther and Less\n\nThe recommended practices for reducing exposure to device radiation follow a common theme: increase distance, reduce duration, and minimize sources. **Sitting back from the monitor and taking regular breaks** are the two most direct examples of this principle.\n\nDistance matters because electromagnetic emissions weaken rapidly with distance. A user who sits an arm's length from the screen is exposed to less radiation than one who sits a hand's width away. The recommendation to sit back is not about comfort or posture — it is about reducing exposure at standard teaching.\n\nDuration matters because exposure accumulates over time. A user who takes regular breaks is exposed for fewer hours per day than one who works continuously. The breaks reduce the cumulative amount of radiation the user receives, even if the instantaneous rate is the same.\n\nThe full set of recommendations extends this principle in other directions. Moving other electronic sources — drives, printers, routers — farther away reduces exposure from devices the user is not directly interacting with. Minimizing wireless connections reduces the number of radio-frequency sources nearby. Removing Bluetooth headsets when not in use eliminates a device that sits next to the head for hours. Turning devices off when not in use removes them from the equation entirely. Each step reduces the total exposure, and together they meaningfully change the cumulative picture.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.8-004",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.8 Reducing E-Waste Risks",
    q: "Why is it recommended to remove a Bluetooth headset when it is not in use?",
    options: [
      "To keep the headset clean and free from damage",
      "To extend the battery life of the headset",
      "To prevent interference with other wireless devices",
      "To reduce exposure to radio waves near the head",
    ],
    optionRationales: [
      "Cleanliness is a maintenance concern, not a radiation concern. A common recommendation is specifically about exposure.",
      "Battery life is a practical benefit, but it is not the reason a typical example is. The recommendation is about health, not convenience.",
      "Interference is a technical issue, not a health one. A common concern is the user's exposure, not the reliability of other devices.",
      null,
    ],
    correct: 3,
    explanation: "## Reduce Unnecessary Exposure\n\nA Bluetooth headset transmits radio-frequency energy whenever it is powered and paired. Removing it when you are not on a call stops that continuous transmission near the head.\n\nThe practice is about reducing cumulative exposure, not about claiming every headset is unsafe. Switching the device off or putting it away when idle is a simple control available to every user.",
    status: "approved"
  },

  {
    id: "CS110-T1-U3-3.8-005",
    mainTopic: "Unit 3: Input and Output",
    topic: "3.8 Reducing E-Waste Risks",
    q: "Why is it recommended to recycle or donate older devices that are no longer in use?",
    options: [
      "To eliminate the radiation they continue to emit even when unused",
      "To earn money from the resale value of the devices",
      "To comply with legal disposal requirements",
      "To make room for newer devices at home",
    ],
    optionRationales: [
      null,
      "Resale value is a possible benefit for some devices, but it is not the reason a typical example is. The recommendation applies to all unused devices, not just valuable ones.",
      "Legal requirements exist in some jurisdictions, but this is framed the recommendation as a health measure, not a legal obligation.",
      "Clearing space is a practical benefit, but a common stated reason is about exposure, not space.",
    ],
    correct: 0,
    explanation: "## Keep Value in Circulation\n\nUnused devices still contain recoverable materials and usable components. Recycling recovers metals and plastics; donating extends the life of working equipment for someone else.\n\nLeaving old hardware in a drawer wastes those materials and can leak hazardous substances if the unit is later dumped. Responsible disposal closes the loop between use and recovery.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 4 · NUMBER SYSTEMS  (68 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T1-U4-4.1-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.1 Introduction to Data Representation",
    q: "Why must data be represented in binary form inside a digital computer?",
    options: [
      "Because binary is faster than other number systems",
      "Because binary uses less electrical power",
      "Because binary numbers are shorter to write",
      "Because the hardware can only distinguish two states",
    ],
    optionRationales: [
      "Speed feels related because binary arithmetic can be faster in practice. But speed is a consequence of the hardware, not the reason for it. Any number system would be fast if the hardware were built for it.",
      "Power consumption depends on transistor design, not on the number system used. A machine built around decimal digits would consume whatever its physical components require.",
      "Length feels like a reason because binary strings are dense and compact on screen. But binary representations are actually longer than decimal ones for the same value, not shorter. The choice of binary is about hardware, not notation.",
      null,
    ],
    correct: 3,
    explanation: "## Two States\n\nA digital computer stores data as patterns of **0s and 1s** because the physical components at its core — transistors — can reliably distinguish only two states. A transistor is either conducting or not conducting; there is no reliable middle state.\n\nOther technologies have been tried. Early computers used vacuum tubes with the same two-state limitation. Some experimental systems use more than two voltage levels per component, but they are unreliable: noise and heat cause ambiguous readings, and error rates rise sharply. Two states is the largest number of states that can be distinguished reliably, cheaply, and at speed.\n\nEverything the computer processes — text, numbers, images, audio, video — is therefore encoded as sequences of these two digits. A photograph is a pattern of 0s and 1s that the display interprets as pixels. A song is a pattern of 0s and 1s that the speaker interprets as sound waves. The binary representation is not a choice among alternatives; it is the only form the hardware can reliably hold.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.1-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.1 Introduction to Data Representation",
    q: "Which of the following is NOT a form in which data can be entered into a computer?",
    options: [
      "Fingerprints read by a biometric scanner",
      "Binary strings typed directly by the user",
      "Alphabets and digits typed through a keyboard",
      "Audio captured through a microphone",
    ],
    optionRationales: [
      "Fingerprint scanning is a standard biometric input method. This is not the excluded item.",
      null,
      "Typed text is the most common form of input and is definitely a way data enters a computer. This is not the excluded item.",
      "Audio capture through a microphone is standard input. This is not the excluded item.",
    ],
    correct: 1,
    explanation: "## Natural Forms First\n\nData enters a computer in the form the human or the environment naturally produces — **text, images, sound, motion, fingerprints** — and the machine converts it to binary internally.\n\nA user typing the word *hello* is not typing 0s and 1s; they are typing letters. The keyboard converts each keystroke into a code, and the code is stored as binary. The user works with the natural form; the machine works with the binary form. The conversion happens invisibly in between.\n\nThis is why asking users to type binary directly would be a step backward. It would push the conversion onto the human, forcing them to think in the machine's terms. The design principle behind every input device is the opposite: make the machine accept what humans naturally produce, and handle the conversion automatically. The alternative — asking users to think in binary — would make computers unusable for almost every task.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.1-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.1 Introduction to Data Representation",
    q: "What is the difference between data and information in a computing context?",
    options: [
      "Data is unprocessed; information is the result after processing",
      "Data is stored on disk; information is stored in memory",
      "Data is what the user types; information is what the screen shows",
      "Data is always numeric; information is always textual",
    ],
    optionRationales: [
      null,
      "Storage location does not determine the category. Data and information can both live on disk or in memory; what separates them is whether processing has occurred.",
      "Typing and displaying are two interfaces, not two categories. A user can type information and a screen can display raw data.",
      "Both data and information can be numeric or textual. A spreadsheet of raw numbers is data; a chart of those numbers is information; both can also be textual.",
    ],
    correct: 0,
    explanation: "## Before and After\n\n**Data** is a collection of unprocessed items — values, text, images, sounds — that has not yet been organised or interpreted. **Information** is what comes out after the computer processes data according to rules.\n\nThe distinction is about the position in the pipeline, not about the format of the content. The same numbers can be data or information depending on what has been done to them. A list of ten thousand daily sales figures is data. The monthly summary that shows the same numbers grouped by week and totalled is information.\n\nThis distinction matters because the two have different uses. Data answers no questions on its own — a user staring at raw numbers has to do the analysis in their head. Information answers questions directly. Most of what a computer does is the work of moving from one to the other: taking raw input, applying operations, and producing a result that a human can act on.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.1-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.1 Introduction to Data Representation",
    q: "Why is the binary number system particularly suitable for use in digital computers?",
    options: [
      "Because it was designed by early computer scientists",
      "Because it is the same system humans use naturally",
      "Because it requires fewer characters to represent a value",
      "Because two-state devices are simple and reliable to build",
    ],
    optionRationales: [
      "Binary was not designed by computer scientists. It predates electronic computing by centuries — Leibniz described it in the 1600s — and was adopted by engineers because it matched their hardware, not because it was invented for the purpose.",
      "Humans use decimal naturally, not binary. The ten-finger origin of decimal is well documented; binary is a machine choice, not a human habit.",
      "Binary actually uses more characters, not fewer. The decimal value 100 requires seven binary digits (1100100), so the claim is backwards.",
      null,
    ],
    correct: 3,
    explanation: "## Simple and Reliable\n\nThe binary number system suits digital computers because the **hardware components at the core are naturally two-state devices**. A transistor is on or off. A magnetic domain is oriented one way or the other. An optical disc has a pit or a land. Each component has exactly two reliable states, and those two states map directly onto the two binary digits.\n\nA system that used ten states per component would need each component to distinguish ten distinct voltage levels, magnetic orientations, or physical positions. Building a transistor that reliably distinguishes ten levels is possible in principle, but the manufacturing tolerances are far tighter and the noise margins are much smaller. A ten-state transistor would be slower, larger, more expensive, and more prone to error than a two-state one.\n\nThe choice of binary is therefore a design decision driven by physics and engineering, not a mathematical preference. Any number system would work in the abstract — a computer could be built to compute in decimal directly if the hardware were reliable enough. Binary was chosen because the hardware is reliable enough, and it always has been.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "What is a number system?",
    options: [
      "A programming language used for arithmetic",
      "A writing system for expressing numbers of a given set",
      "A method for converting binary into decimal",
      "A type of electronic circuit that stores values",
    ],
    optionRationales: [
      "Programming languages use number systems; they do not define them. A language can work with multiple number systems.",
      null,
      "Conversion is one operation performed within and between number systems. The number system itself is the underlying notation; conversion moves between notations.",
      "Circuits are physical devices that implement a number system. They are not the system itself.",
    ],
    correct: 1,
    explanation: "## A Way of Writing Numbers\n\nA **number system** is a writing system for expressing numbers from a given set. It specifies which symbols are used, what each symbol means, and how symbols combine to represent values larger than any single symbol.\n\nA number system in base $r$ uses unique symbols for $r$ digits. The digits are $0$ through $r - 1$. One or more digits are then combined to form any number in the system. Decimal, binary, octal, and hexadecimal are all number systems with different bases, and each has its own set of allowed digits.\n\nThe concept is not about arithmetic — it is about notation. The number five is the same value in every system. What differs is how that value is written: $5$ in decimal, $101$ in binary, $5$ in octal, $5$ in hexadecimal. The value is invariant; the representation changes with the base.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "What does the base of a number system determine?",
    options: [
      "The order in which the digits are written",
      "The largest value the system can express",
      "The number of distinct digits the system uses",
      "The speed at which calculations are performed",
    ],
    optionRationales: [
      "The writing order is the same in every positional system: the rightmost digit is the least significant. The base does not change this convention.",
      "Every number system can express arbitrarily large values by using more digits. The base does not set a ceiling on value.",
      null,
      "Computation speed depends on the hardware performing the calculation, not on the number system used to write the numbers.",
    ],
    correct: 2,
    explanation: "## How Many Digits\n\nThe **base** of a number system determines how many distinct digits the system uses. A base-$r$ system uses exactly $r$ symbols, starting at $0$ and ending at $r - 1$.\n\nDecimal (base $10$) uses ten digits: $0, 1, 2, \\ldots, 9$. Binary (base $2$) uses two: $0, 1$. Octal (base $8$) uses eight: $0$ through $7$. Hexadecimal (base $16$) uses sixteen: $0$ through $9$ plus $A$ through $F$, where the letters stand for the values $10$ through $15$.\n\nThe rule is universal. Once you know the base, you know the digit set. This is why a number written without context is ambiguous: $10$ means ten in decimal, two in binary, eight in octal, and sixteen in hex. The base is the key to reading the notation correctly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "In a positional number system, where does digit position numbering begin?",
    options: [
      "From the leftmost digit, which has position 0",
      "From the rightmost digit, which has position 0",
      "From the decimal point, which is position 1",
      "From the middle of the number, working outward",
    ],
    optionRationales: [
      "Left-to-right numbering feels natural to readers because we read in that direction. But the numbering follows place value, and the smallest place value is on the right, not the left.",
      null,
      "The decimal point is the boundary between integer and fraction positions, not the starting point for numbering. Digits to its left have positive positions; digits to its right have negative ones.",
      "Numbering from the middle would complicate every calculation. Positional systems universally start from one end — the rightmost.",
    ],
    correct: 1,
    explanation: "## Right to Left\n\nIn a positional number system, digit positions are numbered **starting from the rightmost digit**, which has position $0$. The next digit to the left has position $1$, then $2$, and so on. Digits to the right of the decimal point have negative positions: the first fractional digit is at position $-1$.\n\nThis convention is tied to place value. The rightmost digit is the least significant — it contributes the smallest amount to the total. Each step to the left multiplies the digit's contribution by the base. So in the decimal number $472$, the digit $2$ at position $0$ contributes $2 \\times 10^0 = 2$, the digit $7$ at position $1$ contributes $7 \\times 10^1 = 70$, and the digit $4$ at position $2$ contributes $4 \\times 10^2 = 400$. The total is $472$.\n\nNumbering from the right is not a convention that could be otherwise. It follows from the mathematics of place value. A positional system works because each digit's contribution depends on how far it is from the rightmost position, and the numbering scheme names that distance.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "What is the face value of a digit?",
    options: [
      "The number of times the digit appears in the number",
      "The digit multiplied by the base raised to its position",
      "The digit itself, independent of its position",
      "The total value of the entire number",
    ],
    optionRationales: [
      "Frequency counts how many times a digit appears. The face value is what a single digit is, not how often it shows up.",
      "Multiplying by the base to the position gives the position value, not the face value. The face value ignores position entirely.",
      null,
      "The total value of the number is the sum of all face values multiplied by their position values. It is a different quantity entirely.",
    ],
    correct: 2,
    explanation: "## The Digit Itself\n\nThe **face value** of a digit is the digit itself — its symbol, taken at its literal meaning, without regard to where it sits in the number. In the number $472$, the face values are simply $4$, $7$, and $2$.\n\nFace value is one of two quantities a digit contributes to a number. The other is position value, which depends on where the digit sits. The final contribution of each digit is the face value multiplied by the position value. In $472$, the digit $7$ has face value $7$ and position value $10^1 = 10$, so its contribution is $70$.\n\nThe face value never changes. The digit $7$ has face value $7$ in the number $7$, in the number $70$, and in the number $700000$. What changes is the position it occupies and therefore the position value it is multiplied by. This is why separating the two concepts matters when calculating or converting between number systems — the face value is always the same, but the multiplier changes.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-005",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "In the decimal number $52$, what is the position value of the digit $5$?",
    options: [
      "$10$",
      "$50$",
      "$100$",
      "$5$",
    ],
    optionRationales: [
      null,
      "$50$ is the total contribution of the digit — its face value times its position value. The question asks for the position value alone.",
      "$100$ would be the position value of a digit one place further to the left. In a two-digit number, the leftmost position has position value $10$, not $100$.",
      "$5$ is the face value of the digit, not its position value. The two are different quantities that get multiplied together.",
    ],
    correct: 0,
    explanation: "## Base to the Position\n\nThe **position value** of a digit is $\\text{base}^{\\text{position}}$. In the decimal number $52$, the digit $5$ sits at position $1$, and the base is $10$. So the position value of the digit $5$ is $10^1 = 10$.\n\nThe contribution the digit makes to the final number is the face value multiplied by the position value: $5 \\times 10 = 50$. That is why the number $52$ is not the same as the digit values $5$ and $2$ placed side by side — the $5$ contributes fifty, not five.\n\nThe same formula works in every positional system. In binary, the position value of a digit at position $p$ is $2^p$. In hexadecimal, it is $16^p$. The number system only changes the base; the position value rule is identical.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-006",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "How is a number calculated from its digits in a positional system?",
    options: [
      "By summing face value times position value for each digit",
      "By taking the largest digit and raising it to the base",
      "By adding the face values of all digits together",
      "By multiplying all the digits together",
    ],
    optionRationales: [
      null,
      "Raising one digit to a power would only use one digit. The other digits contribute nothing, which contradicts how positional numbers work.",
      "Adding face values alone would produce $5 + 2 = 7$ for the number $52$. That is clearly wrong, and the error is ignoring position.",
      "Multiplying all digits would produce $5 \\times 2 = 10$ for $52$. Also wrong, and for the same reason — position is ignored.",
    ],
    correct: 0,
    explanation: "## Sum of Weighted Digits\n\nThe value of a positional number is calculated as the **sum of (face value × position value) for every digit**. The formula is:\n\n$$\\text{Number} = \\sum_{i} d_i \\times r^i$$\n\nwhere $d_i$ is the face value of the digit at position $i$ and $r$ is the base.\n\nFor the decimal number $52$: $(5 \\times 10^1) + (2 \\times 10^0) = 50 + 2 = 52$. For the binary number $(1101)_2$: $(1 \\times 2^3) + (1 \\times 2^2) + (0 \\times 2^1) + (1 \\times 2^0) = 8 + 4 + 0 + 1 = 13$.\n\nThe formula is the same in every base. To convert any number from any base to decimal, replace $r$ with standard teaching base and evaluate. This single formula underlies every conversion in the rest of this unit.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-007",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "How is a number in a particular base usually indicated in writing?",
    options: [
      "With a single letter suffix, such as 23b",
      "With square brackets around the base, such as [10]23",
      "With parentheses and a subscript after the number, such as $(23)_{10}$",
      "With a slash before the number, such as /10 23",
    ],
    optionRationales: [
      "Single-letter suffixes are informal and ambiguous. Only the parentheses-and-subscript convention is universally understood.",
      "Square brackets are used for other purposes in mathematics — intervals, matrices — and would create confusion if reused for base notation.",
      null,
      "Slash notation is not used in standard mathematical writing. The convention that has become standard is parentheses plus a subscript.",
    ],
    correct: 2,
    explanation: "## Parentheses and Subscript\n\nA number in a particular base is written as **$(\\text{number})_{\\text{base}}$**. The parentheses group the digits, and the subscript identifies the base.\n\nSo $(23)_{10}$ means the value written as $23$ in decimal. $(23)_8$ means the value written as $23$ in octal — which is a different number, since $2 \\times 8 + 3 = 19$ in decimal. $(23)_{16}$ means the value written as $23$ in hexadecimal, which is $2 \\times 16 + 3 = 35$ in decimal.\n\nThe subscript is necessary because the same digits can mean different values in different bases. The number $(10)_{10}$ is ten; $(10)_2$ is two; $(10)_{16}$ is sixteen. Without the subscript, there is no way to know which one is intended. The convention is universal in computer science and mathematics, and every textbook on number systems uses it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-008",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "Which of the following correctly lists the four number systems discussed in this unit?",
    options: [
      "Roman, Arabic, binary, and decimal",
      "Natural, integer, rational, and real",
      "Decimal, binary, octal, and hexadecimal",
      "Binary, ternary, quartic, and quintic",
    ],
    optionRationales: [
      "Roman and Arabic are historical writing systems for decimal numbers, not separate number systems in this context. Both are decimal representations.",
      "Natural, integer, rational, and real are sets of numbers, not systems of notation. The two categories are different.",
      null,
      "Ternary (base $3$), quartic (base $4$), and quintic (base $5$) are valid bases, but they are not the four covered in this unit. The set that matters here is decimal, binary, octal, hexadecimal.",
    ],
    correct: 2,
    explanation: "## Four Systems\n\nThe four number systems covered in this unit are **decimal** (base $10$), **binary** (base $2$), **octal** (base $8$), and **hexadecimal** (base $16$).\n\nThe choice is not arbitrary. Decimal is what humans use naturally. Binary is what the computer's hardware uses at the lowest level. Octal and hexadecimal are shorthand notations that map cleanly onto binary — one octal digit represents exactly three binary bits, and one hex digit represents exactly four. This is why programmers use hex and octal when reading or writing binary data: the shorthand is much easier to read while still being trivially convertible.\n\nOther bases exist and are occasionally used — base $3$ in some theoretical contexts, base $64$ in encoding schemes — but they are not part of the standard toolkit. The four covered here are the ones every computer scientist needs to know, and the ones that appear in every introductory course on the topic.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-009",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "Which digits are valid in the octal number system?",
    options: [
      "$0$ through $7$",
      "$0$ through $9$",
      "$0$ through $8$",
      "$0$ through $F$",
    ],
    optionRationales: [
      null,
      "The range $0$ through $9$ is decimal, not octal. Octal stops one digit earlier at $7$.",
      "Including $8$ would require a base of at least $9$. Octal is base $8$, so the highest valid digit is $7$.",
      "The range $0$ through $F$ is hexadecimal, not octal. Hex uses letters for values above $9$; octal does not.",
    ],
    correct: 0,
    explanation: "## Stop at Seven\n\nOctal is base $8$, so it uses exactly eight digits: **$0$ through $7$**. The digit $8$ is not valid in octal because it equals the base, and the digit $9$ is not valid because it exceeds the base.\n\nThis rule is universal. A base-$r$ system allows digits from $0$ to $r - 1$. Decimal (base $10$) stops at $9$. Binary (base $2$) stops at $1$. Hexadecimal (base $16$) stops at $F$, which represents $15$.\n\nIf a number is written in octal and contains an $8$ or $9$, either the base is wrong or the digits are wrong. This is a common error when converting between systems — it is easy to write an invalid digit without noticing, because the symbol looks normal. Checking for digit validity is one of the first steps in any conversion problem.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-010",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "In the hexadecimal number $(4D.21)_{16}$, what is the face value of the digit $D$?",
    options: [
      "$D$",
      "$13$",
      "$21$",
      "$4$",
    ],
    optionRationales: [
      null,
      "$13$ is the decimal value that the digit $D$ represents. The face value is the symbol itself, not its decimal equivalent.",
      "$21$ combines two digits from the fractional part. Face value refers to a single digit, not a group.",
      "$4$ is the face value of a different digit in the same number. Each digit has its own face value.",
    ],
    correct: 0,
    explanation: "## The Symbol Itself\n\nThe **face value** of the digit $D$ is simply **$D$** — the symbol as it appears in the number.\n\nThis is a subtle point. In hexadecimal, the letter $D$ stands for the decimal value $13$. When calculating the number, the digit contributes $13$ times its position value. But the face value itself is the letter $D$, not the number $13$ that it represents.\n\nSeparating the two concepts matters because different textbooks and problems use different conventions. Some refer to face value as the symbol; others use the term loosely to mean the digit's decimal value. The safest reading is that face value is what is written — the character — and its decimal equivalent is what it stands for. In the calculation step, you substitute the decimal value; in the identification step, you use the symbol.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-011",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "How many distinct digits does a base-$r$ number system use?",
    options: [
      "$r - 1$ digits, from $0$ to $r - 2$",
      "$r$ digits, from $0$ to $r - 1$",
      "$r$ digits, from $1$ to $r$",
      "$r + 1$ digits, from $0$ to $r$",
    ],
    optionRationales: [
      "Ending at $r - 2$ would skip the digit $r - 1$. The system needs every value from $0$ up to the base minus one.",
      null,
      "Starting at $1$ would leave out the digit $0$. Every standard number system includes zero as a valid digit.",
      "Starting at $0$ and ending at $r$ would give $r + 1$ digits, one too many. The correct upper bound is $r - 1$.",
    ],
    correct: 1,
    explanation: "## Zero Through $r - 1$\n\nA base-$r$ number system uses exactly $r$ distinct digits, ranging from **$0$ to $r - 1$**.\n\nThe pattern holds at every base. Base $2$ has two digits: $0, 1$. Base $8$ has eight: $0, 1, 2, 3, 4, 5, 6, 7$. Base $10$ has ten: $0$ through $9$. Base $16$ has sixteen: $0$ through $9$, plus $A$ through $F$ for the values $10$ through $15$.\n\nThe upper bound is always one less than the base, never equal to it. The reason is that the digit $r$ in a base-$r$ system would be equivalent to carrying into the next position — it would be written as $10$ rather than as a single digit. This is why the digit set stops where it does: the next value after $r - 1$ requires two positions to write.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.2-012",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.2 Number System Fundamentals",
    q: "Why does the same symbol represent different values in different number systems?",
    options: [
      "Because some symbols are reserved for special uses",
      "Because the position of a digit overrides its face value",
      "Because the symbol changes meaning based on context",
      "Because the base determines the value each symbol represents",
    ],
    optionRationales: [
      "No symbols are reserved in this way. Every symbol in the digit set has a defined value based on the base.",
      "Position determines contribution, not the value the digit represents. Face value is unaffected by position.",
      "Symbols do not change meaning in isolation — the digit $5$ is the digit $5$ in any base. What changes is the value the system assigns to it.",
      null,
    ],
    correct: 3,
    explanation: "## The Base Sets the Value\n\nIn different number systems, the same written digit symbol represents a different numeric value because the **base determines the counting sequence**. The symbols themselves are neutral; they acquire meaning from the system they belong to.\n\nConsider the symbol $10$. In decimal it means ten — one group of ten plus no units. In binary it means two — one group of two plus no units. In octal it means eight — one group of eight plus no units. In hexadecimal it means sixteen — one group of sixteen plus no units. The symbol is identical; the value is determined by the base.\n\nThe rule is always the same: in base $r$, a digit contributes its face value times $r$ raised to its position. The multiplication by the base is what ties the digit's value to the system. Without knowing the base, a written number is ambiguous — the same digits can mean completely different values depending on which system they belong to. This is why the parentheses-and-subscript notation exists.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "What is the base of the binary number system?",
    options: [
      "$8$",
      "$10$",
      "$16$",
      "$2$",
    ],
    optionRationales: [
      "$8$ is the base of the octal system, not binary. Octal uses eight digits; binary uses two.",
      "$10$ is the base of the decimal system, not binary. Decimal uses ten digits; binary uses two.",
      "$16$ is the base of the hexadecimal system, not binary. Hex uses sixteen digits; binary uses two.",
      null,
    ],
    correct: 3,
    explanation: "## Two Symbols\n\nThe binary number system has **base $2$**. It uses only two digits, $0$ and $1$.\n\nBase $2$ is the smallest practical base for a positional system. A base-$1$ system cannot represent positional notation at all — with only one digit available, no position could be distinguished from any other. Base $2$ is the smallest base in which the positional rules work normally, which makes it the natural starting point for machines.\n\nBinary is the number system the computer uses internally. Every value stored in memory, every instruction executed, every file on disk is ultimately a pattern of 0s and 1s. The other systems — decimal, octal, hexadecimal — are conveniences for humans. They exist because binary strings become very long and hard to read for large values, and the shorthand notations compress them into manageable forms.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "What is the decimal value of the binary number $(1111)_2$?",
    options: [
      "$16$",
      "$4$",
      "$8$",
      "$15$",
    ],
    optionRationales: [
      "$16$ is one more than the maximum value that four binary digits can represent. The next value up would require five bits.",
      "$4$ is the value of the binary number $(100)_2$. Confusing the digit count with the value is a common mistake.",
      "$8$ is the position value of the leftmost digit in $(1111)_2$. That digit alone contributes $8$, but the other three digits contribute more.",
      null,
    ],
    correct: 3,
    explanation: "## Four Ones\n\nThe binary number $(1111)_2$ has the decimal value **$15$**. Calculate it as the sum of face value times position value for each digit:\n\n$$(1 \\times 2^3) + (1 \\times 2^2) + (1 \\times 2^1) + (1 \\times 2^0) = 8 + 4 + 2 + 1 = 15$$\n\nThis is the largest number that four binary digits can represent. In general, an $n$-bit binary number can represent values from $0$ to $2^n - 1$. For $n = 4$, the range is $0$ to $15$, which is exactly sixteen values — the same as the number of hex digits. This correspondence is not a coincidence, and it is why hexadecimal is the natural shorthand for binary data.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "What is the binary representation of the decimal number $(29)_{10}$?",
    options: [
      "$(11011)_2$",
      "$(10111)_2$",
      "$(11101)_2$",
      "$(11100)_2$",
    ],
    optionRationales: [
      "$(11011)_2$ evaluates to $(1 \\times 16) + (1 \\times 8) + (0 \\times 4) + (1 \\times 2) + (1 \\times 1) = 27$. It differs from $29$ in the last two digits.",
      "$(10111)_2$ evaluates to $(1 \\times 16) + (0 \\times 8) + (1 \\times 4) + (1 \\times 2) + (1 \\times 1) = 23$. It differs from $29$ by $6$.",
      null,
      "$(11100)_2$ evaluates to $(1 \\times 16) + (1 \\times 8) + (1 \\times 4) + (0 \\times 2) + (0 \\times 1) = 28$. It is one less than $29$.",
    ],
    correct: 2,
    explanation: "## Twenty-Nine in Binary\n\nTo convert $(29)_{10}$ to binary, repeatedly divide by $2$ and record the remainders:\n\n$$\\begin{aligned} 29 \\div 2 &= 14 \\text{ r } 1 \\\\ 14 \\div 2 &= 7 \\text{ r } 0 \\\\ 7 \\div 2 &= 3 \\text{ r } 1 \\\\ 3 \\div 2 &= 1 \\text{ r } 1 \\\\ 1 \\div 2 &= 0 \\text{ r } 1 \\end{aligned}$$\n\nReading the remainders from the bottom up gives $(11101)_2$. Verification: $16 + 8 + 4 + 0 + 1 = 29$.\n\nThe bottom-up reading is the part that trips up most students. The first remainder is the least significant digit, so it belongs at the right end of the result, not the left. If the remainders are read top-down, the result is reversed and produces a different value.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "In the binary number $(1000)_2$, what is the position value of the leftmost digit?",
    options: [
      "$1$",
      "$8$",
      "$10$",
      "$1000$",
    ],
    optionRationales: [
      "$1$ is the face value of the digit, not its position value. The two are different quantities.",
      null,
      "$10$ would be the position value in decimal if the digit were at position $1$. Here the digit is at position $3$, so the position value is $2^3$, not $10$.",
      "$1000$ confuses the written digits of the binary number with the position value. The binary digits are $1, 0, 0, 0$; the position value is a decimal number derived from the base and position.",
    ],
    correct: 1,
    explanation: "## Power of Two\n\nThe binary number $(1000)_2$ has its leftmost digit at position $3$ (counting from the rightmost digit as position $0$). The position value is $2^3 = 8$.\n\nThis is why $(1000)_2$ equals $8$ in decimal — the leftmost digit alone contributes $8$, and the other three digits are $0$. The number is a single power of two, which is why it looks like a single $1$ followed by zeros in binary.\n\nPowers of two are the natural building blocks of binary. Each position in a binary number corresponds to one specific power of two, and the digit at that position either contributes the value or does not. This is why binary numbers with only one $1$ digit always equal a power of two in decimal, and why the range of an $n$-bit number is exactly $2^n$ values.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-005",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "What distinguishes the binary number system from every other positional system?",
    options: [
      "It uses more digits than any other system",
      "It uses the smallest possible practical base",
      "It is the only system computers can process",
      "It has no decimal point",
    ],
    optionRationales: [
      "Binary uses fewer digits than decimal, octal, or hexadecimal. It is the smallest, not the largest.",
      null,
      "Computers process binary natively, but they can also handle other bases through conversion. The claim that binary is the only system computers can process is a simplification.",
      "Binary uses decimal points in the same way other systems do. Fractional binary numbers exist and are common in computing.",
    ],
    correct: 1,
    explanation: "## The Smallest Base\n\nBinary is distinguished by its **base of $2$**, which is the smallest practical base for a positional number system. A base-$1$ system cannot represent positional notation at all, so base $2$ is the floor.\n\nThe small base has practical consequences. Binary numbers are longer than their decimal equivalents — a decimal value like $100$ requires seven binary digits. Binary strings become hard to read for values above a few hundred, which is why octal and hexadecimal exist as shorthand notations. Each hex digit represents exactly four binary digits, so a 32-bit binary number compresses to just eight hex characters.\n\nBut the small base also has advantages. Two states are trivially distinguishable in hardware — a transistor is on or off, with no ambiguity. The rules of arithmetic are simple — addition and multiplication tables are tiny. And the correspondence between binary and logic gates is direct, which is why digital circuits and binary numbers fit together so naturally. Every other base, however convenient for humans, is a translation layer over the binary the hardware uses.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-006",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "How many distinct values can be represented by an $n$-bit binary number?",
    options: [
      "$2^n$",
      "$n$",
      "$2n$",
      "$n^2$",
    ],
    optionRationales: [
      null,
      "$n$ counts the number of bit positions, not the number of values those positions can hold. The two quantities are different.",
      "$2n$ doubles the bit count rather than exponentiating the base. It undercounts the true number of values.",
      "$n^2$ squares the bit count, which does not match the pattern of binary counting.",
    ],
    correct: 0,
    explanation: "## Two to the Power\n\nAn $n$-bit binary number can represent exactly **$2^n$ distinct values**, ranging from $0$ to $2^n - 1$.\n\nThe formula follows from the digits. Each bit has two possible states, and $n$ bits can combine those states in $2 \\times 2 \\times \\dots \\times 2$ (n times) ways. For four bits, that is $2^4 = 16$ possible values, ranging from $(0000)_2 = 0$ to $(1111)_2 = 15$.\n\nThe growth is exponential, which is why adding a single bit doubles the range. Four bits give sixteen values; five bits give thirty-two; eight bits give $256$. This is the reason that the byte — eight bits — became the standard unit of data. With $256$ possible values, a single byte can represent every letter, digit, and common symbol in English, which is what made character encoding straightforward.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-007",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "What does the binary number $(101)_2$ represent in decimal?",
    options: [
      "$101$",
      "$3$",
      "$5$",
      "$10$",
    ],
    optionRationales: [
      "$101$ confuses the binary string with its decimal equivalent. The binary digits $1, 0, 1$ do not mean the decimal number one hundred and one.",
      "$3$ is $(11)_2$, not $(101)_2$. The value $3$ requires only two binary digits.",
      null,
      "$10$ is the decimal value written as $(1010)_2$ in binary. It is a different number.",
    ],
    correct: 2,
    explanation: "## One-Oh-One in Binary\n\nThe binary number $(101)_2$ has the decimal value **$5$**. Calculate it as follows:\n\n$$(1 \\times 2^2) + (0 \\times 2^1) + (1 \\times 2^0) = 4 + 0 + 1 = 5$$\n\nThe middle digit $0$ contributes nothing, so the value is the sum of the contributions from the two $1$ digits: $4$ from the leftmost position and $1$ from the rightmost. The pattern of $1$s and $0$s tells you which powers of two to add together.\n\nThis is the standard way to read any binary number. Each $1$ marks a power of two that is included in the sum; each $0$ marks a power that is excluded. The value is the total of the included powers. For $(101)_2$, the included powers are $2^2 = 4$ and $2^0 = 1$, giving $5$.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.3-008",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.3 Binary Number System",
    q: "What is the binary equivalent of the decimal fraction $(0.5)_{10}$?",
    options: [
      "$(0.01)_2$",
      "$(0.11)_2$",
      "$(0.101)_2$",
      "$(0.1)_2$",
    ],
    optionRationales: [
      "$(0.01)_2 = 1 \\times 2^{-2} = \\frac{1}{4} = 0.25$. It represents a quarter, not a half.",
      "$(0.11)_2 = 1 \\times 2^{-1} + 1 \\times 2^{-2} = \\frac{1}{2} + \\frac{1}{4} = 0.75$. It is three quarters.",
      "$(0.101)_2 = 1 \\times 2^{-1} + 0 + 1 \\times 2^{-3} = \\frac{1}{2} + \\frac{1}{8} = 0.625$. It is five eighths.",
      null,
    ],
    correct: 3,
    explanation: "## A Half in Binary\n\nThe decimal fraction $0.5$ is equivalent to the binary fraction **$(0.1)_2$**. The first position after the binary point corresponds to $2^{-1} = \\frac{1}{2} = 0.5$, and a single $1$ in that position gives exactly $0.5$.\n\nThis is one of the cleanest conversions between decimal and binary because $0.5$ is a power of two. Many decimal fractions do not convert this neatly — $0.1$, for example, becomes a repeating binary fraction. But halves, quarters, eighths, and their sums convert exactly, because they are the fractions that map directly onto negative powers of $2$.\n\nThe pattern to remember is that each position after the binary point represents half the value of the position before it. Just as integer positions are worth $1, 2, 4, 8, \\ldots$, fractional positions are worth $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\ldots$. Any combination of these values can be written as a finite binary fraction, and only these values convert cleanly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "What arithmetic operation is used to convert a decimal fraction to another base?",
    options: [
      "Multiplication by the target base",
      "Addition of the target base repeatedly",
      "Subtraction of the target base until zero",
      "Division by the target base",
    ],
    optionRationales: [
      null,
      "Repeated addition would be an extremely inefficient way to convert a number. No textbook method uses this approach.",
      "Repeated subtraction is also not a standard conversion method. It would take as many steps as the target value, which is impractical.",
      "Division is used for integer conversion, not fractional conversion. Integers are divided; fractions are multiplied.",
    ],
    correct: 0,
    explanation: "## Multiply for Fractions\n\nTo convert a decimal fraction to another base, you **multiply by the target base**. The resulting product has an integer part and a fractional part; the integer part is the next digit of the result, and the fractional part becomes the input for the next multiplication step.\n\nThe method is the mirror of integer conversion. Integers convert by division because the remainders produce the digits from least significant upward. Fractions convert by multiplication because the integer parts produce the digits from most significant downward. The two operations are symmetric because they reflect the two directions of place value — the integer part grows leftward from the point, and the fraction part grows rightward.\n\nThe procedure is the same regardless of the target base. Multiply by $2$ for binary, by $8$ for octal, by $16$ for hexadecimal. The digits that result are always the ones that correctly represent the fraction in the new base.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "When converting $(0.2345)_{10}$ to binary, which part of each product is recorded as a binary digit?",
    options: [
      "The fractional part of the product",
      "The integer part of the product",
      "The remainder when divided by $2$",
      "The difference between the product and $1$",
    ],
    optionRationales: [
      "The fractional part becomes the input to the next multiplication step. It is what you keep, not what you record.",
      null,
      "The remainder belongs to integer conversion. Fraction conversion uses multiplication, not division.",
      "Subtracting $1$ from the product is not a step in the method. The integer part is what you read directly from the product, without further arithmetic.",
    ],
    correct: 1,
    explanation: "## The Digit Is the Whole Part\n\nWhen multiplying by the base, the **integer part of the product** is the next digit of the result. The fractional part becomes the input to the next step.\n\nWork through the example. Start with $0.2345$:\n\n$$\\begin{aligned} 0.2345 \\times 2 &= 0.4690 &&\\text{record } 0 \\\\ 0.4690 \\times 2 &= 0.9380 &&\\text{record } 0 \\\\ 0.9380 \\times 2 &= 1.8760 &&\\text{record } 1 \\\\ 0.8760 \\times 2 &= 1.7520 &&\\text{record } 1 \\end{aligned}$$\n\nThe digits recorded are $0, 0, 1, 1$, in that order. Reading them top to bottom gives $(0.0011)_2$ as the first four bits of the binary fraction. The fractional parts $0.4690, 0.9380, 0.8760, 0.7520$ feed the next multiplication step each time, and are not part of the final answer.\n\nThe order matters. Because the first multiplication produces the most significant fractional digit and each subsequent one is less significant, the digits are written top to bottom. This is the opposite of integer conversion, where remainders are read bottom to top because the first remainder is the least significant digit.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "In what order are the digits written when converting a decimal fraction to another base?",
    options: [
      "In alphabetical order of the resulting digits",
      "In reverse order of the integer conversion",
      "From top to bottom, in the order they are produced",
      "From bottom to top, as in integer conversion",
    ],
    optionRationales: [
      "Alphabetical ordering has no meaning for numeric digits. The order is determined by place value, not by the digit values.",
      "The order is not a reversal of anything. It is determined by the significance of the digits produced, and the first digit produced is the most significant.",
      null,
      "Bottom-to-top is the order used for integer conversion, not fraction conversion. Fractions use the opposite order because the first digit produced is the most significant, not the least.",
    ],
    correct: 2,
    explanation: "## First Digit First\n\nFraction conversion produces digits **from top to bottom** — the first digit produced is the most significant fractional digit, and each subsequent digit is less significant.\n\nThis is why the reading order is the opposite of integer conversion. In integer conversion, the first remainder produced is the least significant digit — the ones place — and each subsequent remainder is more significant. The remainders are read bottom to top.\n\nThe reason for the difference is the direction of the arithmetic. Division peels off the least significant digit first, because the remainder of the first division is the ones place. Multiplication peels off the most significant digit first, because the first integer part is a fraction of $1$ divided by the base — the largest possible contribution from any fractional position. The two methods are structurally opposite, so the reading orders are opposite as well.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "How many times should the multiplication step be repeated when converting a decimal fraction?",
    options: [
      "Exactly ten times in every conversion",
      "Until the fraction part becomes exactly zero",
      "Once, since one digit is sufficient",
      "At least four times for reasonable precision",
    ],
    optionRationales: [
      "Ten iterations is more than needed for most purposes and is not a standard recommendation. The actual number depends on the precision required.",
      "Waiting for the fraction to reach zero works only when the fraction has an exact representation in the target base. Many decimal fractions do not — $0.1$ becomes a repeating binary fraction, and would never reach zero.",
      "A single iteration produces only one digit, which is far too imprecise. The result would be off by up to half the value of the original fraction.",
      null,
    ],
    correct: 3,
    explanation: "## Four Iterations Minimum\n\nA practical working rule is to repeat the multiplication **at least four times**. This gives four binary (or octal, or hex) digits after the point, which is sufficient precision for most introductory problems.\n\nThe choice of four iterations is a trade-off between accuracy and effort. More iterations give a more precise approximation. Fewer iterations save time but introduce error. In a textbook problem, four is usually enough to demonstrate the method and produce a reasonably close answer. In a professional application, the number of iterations depends on the required precision — usually matching the precision of standard teaching data.\n\nSome fractions terminate exactly. $(0.5)_{10}$ becomes $(0.1)_2$ in a single step, because $0.5$ is exactly a power of two. Others do not. $(0.1)_{10}$ becomes $(0.0001100110011\\ldots)_2$ — a repeating pattern with no exact finite representation. In practice, the conversion stops when the desired number of digits has been produced, and the result is written as an approximation rather than an exact value.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-005",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "How is a decimal number with both an integer part and a fraction part converted to another base?",
    options: [
      "The whole number is converted in one combined step",
      "Both parts are converted separately, then combined",
      "Only the integer part is converted; the fraction is dropped",
      "The fraction part is converted first, then the integer part",
    ],
    optionRationales: [
      "There is no combined method that handles both parts simultaneously. The two parts use different operations — division for integers, multiplication for fractions.",
      null,
      "Dropping the fraction loses information and produces an inaccurate result. Both parts must be converted.",
      "The order of conversion does not matter for the final answer, but the standard method converts the integer first. Doing the fraction first would require a different organisational approach.",
    ],
    correct: 1,
    explanation: "## Two Methods, One Number\n\nWhen a decimal number has both an integer part and a fraction part, the two are converted **separately and then combined** with the base point between them.\n\nThe integer part uses repeated division by the base. The fraction part uses repeated multiplication by the base. The two operations are different, so the two parts must be handled by different methods.\n\nConsider $(25.2345)_{10}$ converting to binary. The integer part $25$ converts to $(11001)_2$ by repeated division. The fraction part $0.2345$ converts to approximately $(0.0011)_2$ by repeated multiplication. The final result is $(11001.0011)_2$ — the two parts joined by the binary point.\n\nThe two-step nature of the conversion is why students frequently make mistakes with mixed numbers. The correct procedure is to identify the two parts first, apply the right method to each, then reunite them at the end.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-006",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "What is the binary representation of the decimal fraction $(0.865)_{10}$?",
    options: [
      "$(0.1101)_2$",
      "$(0.1100)_2$",
      "$(0.1110)_2$",
      "$(0.1011)_2$",
    ],
    optionRationales: [
      null,
      "$(0.1100)_2 = 0.5 + 0.25 = 0.75$. It is $0.115$ below the target value.",
      "$(0.1110)_2 = 0.5 + 0.25 + 0.125 = 0.875$. It is $0.01$ above the target value.",
      "$(0.1011)_2 = 0.5 + 0.125 + 0.0625 = 0.6875$. It is $0.1775$ below the target value.",
    ],
    correct: 0,
    explanation: "## Multiply by Two\n\nConvert $(0.865)_{10}$ to binary by repeatedly multiplying by $2$:\n\n$$\\begin{aligned} 0.865 \\times 2 &= 1.730 &&\\text{record } 1 \\\\ 0.730 \\times 2 &= 1.460 &&\\text{record } 1 \\\\ 0.460 \\times 2 &= 0.920 &&\\text{record } 0 \\\\ 0.920 \\times 2 &= 1.840 &&\\text{record } 1 \\end{aligned}$$\n\nThe recorded digits, read top to bottom, are $1, 1, 0, 1$, giving $(0.1101)_2$ as the four-bit approximation.\n\nCheck the result by converting back: $(1 \\times 0.5) + (1 \\times 0.25) + (0 \\times 0.125) + (1 \\times 0.0625) = 0.5 + 0.25 + 0.0625 = 0.8125$. This is close to $0.865$ — the small gap is because four binary digits cannot represent every decimal fraction exactly. More iterations would reduce the gap. The method is correct; the precision is limited by the number of digits.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-007",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "Why do many decimal fractions not have an exact binary representation?",
    options: [
      "Because binary is a less precise system than decimal",
      "Because the two systems use different denominators",
      "Because binary numbers are always longer than decimal",
      "Because the conversion method introduces rounding errors",
    ],
    optionRationales: [
      "Precision is not a property of the number system itself. Any value can be represented with enough binary digits; the issue is whether the representation terminates.",
      null,
      "Length is not the reason. Long binary representations can be exact; short ones can be approximations. The question is whether the fraction is expressible as a finite sum of powers of two.",
      "The conversion method is exact. It is the underlying mathematics — whether a fraction can be expressed as a finite sum of powers of the base — that determines termination.",
    ],
    correct: 1,
    explanation: "## Denominators That Do Not Divide\n\nMany decimal fractions do not have an exact binary representation because **$10$ and $2$ have different prime factors**. A decimal fraction is a value divided by a power of $10$. A binary fraction is a sum of values divided by powers of $2$.\n\nDecimal denominators are powers of $10 = 2 \\times 5$. Binary denominators are powers of $2$. A fraction terminates in a given base if its denominator, in lowest terms, divides some power of the base. In decimal, the denominator $10$ divides $10$, $100$, and so on. In binary, only denominators that are powers of $2$ divide some power of $2$.\n\nSo $\\frac{1}{2}$ and $\\frac{1}{4}$ terminate in binary — their denominators divide a power of $2$. But $\\frac{1}{10}$ does not. Written in binary, it becomes $0.0001100110011\\ldots$ with a repeating pattern that never ends. The same issue occurs in reverse: fractions like $\\frac{1}{3}$ terminate in base $3$ but repeat forever in decimal. The property depends on the relationship between the fraction's denominator and the base, not on the base being inherently more or less precise.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.4-008",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.4 Decimal Fraction Conversion",
    q: "What is the octal representation of the decimal fraction $(0.5)_{10}$?",
    options: [
      "$(0.1)_8$",
      "$(0.4)_8$",
      "$(0.5)_8$",
      "$(0.2)_8$",
    ],
    optionRationales: [
      "$(0.1)_8 = 1 \\times 8^{-1} = \\frac{1}{8} = 0.125$. It represents one eighth, not one half.",
      null,
      "$(0.5)_8 = 5 \\times 8^{-1} = \\frac{5}{8} = 0.625$. It represents five eighths, not one half.",
      "$(0.2)_8 = 2 \\times 8^{-1} = \\frac{2}{8} = \\frac{1}{4} = 0.25$. It represents a quarter, not a half.",
    ],
    correct: 1,
    explanation: "## A Half in Octal\n\nThe decimal fraction $0.5$ is equivalent to the octal fraction **$(0.4)_8$**. The first position after the octal point corresponds to $8^{-1} = \\frac{1}{8} = 0.125$. To reach $0.5$, you need $4$ of these eighths: $4 \\times \\frac{1}{8} = \\frac{4}{8} = \\frac{1}{2} = 0.5$.\n\nThe method is the same as binary conversion, just with base $8$ instead of base $2$. Multiply by $8$ repeatedly and record the integer parts:\n\n$$0.5 \\times 8 = 4.0 \\quad \\text{record } 4$$\n\nThe fraction part becomes $0$, so the conversion terminates after one step. The result is $(0.4)_8$.\n\nOctal fractions are used less often than binary or hexadecimal, but the conversion method is identical. In every positional system, fractional digits represent negative powers of the base. The value is always the sum of face value times base-to-the-negative-position. Once that principle is clear, converting between fractions in different bases becomes a matter of applying the same formula with a different base.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.5-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.5 Hexadecimal Number System",
    q: "What is the base of the hexadecimal number system?",
    options: [
      "$2$",
      "$10$",
      "$16$",
      "$60$",
    ],
    optionRationales: [
      "$2$ is the base of binary, not hexadecimal. Binary uses two digits; hex uses sixteen.",
      "$10$ is the base of decimal, not hexadecimal. Decimal uses ten digits; hex uses sixteen.",
      null,
      "$60$ is not the base of any standard number system in modern computing. It appears in historical contexts (Babylonian timekeeping) but is not relevant here.",
    ],
    correct: 2,
    explanation: "## Sixteen Digits\n\nThe hexadecimal number system has **base $16$**. It uses sixteen distinct digits, which is more than the ten familiar numerals can provide.\n\nTo fill the gap, hexadecimal uses letters. The digits $0$ through $9$ represent the values $0$ through $9$, exactly as in decimal. The letters $A$ through $F$ represent the values $10$ through $15$. So $A$ means ten, $B$ means eleven, and $F$ means fifteen.\n\nHexadecimal is popular in computing because each hex digit represents exactly four binary digits. A byte — eight bits — is exactly two hex digits. This makes hex an ideal shorthand for binary data: an eight-digit hex value covers a full 32-bit word, which is much easier to read and write than a 32-character binary string. Programmers use hex constantly when working with memory addresses, colour codes, MAC addresses, and low-level data structures.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.5-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.5 Hexadecimal Number System",
    q: "Which letters are used as digits in the hexadecimal system?",
    options: [
      "$A$ through $F$, representing $10$ through $15$",
      "$A$ through $Z$, representing values beyond $9$",
      "$A$ and $B$ only, since others are invalid",
      "The same letters used in Roman numerals",
    ],
    optionRationales: [
      null,
      "Only six letters are used, not twenty-six. The range $A$ through $Z$ extends far beyond the hexadecimal digit set.",
      "$A$ and $B$ alone would give only twelve digits. Hexadecimal needs sixteen, so four more letters are required.",
      "Roman numerals use $I, V, X, L, C, D, M$ — seven letters with different meanings. Hexadecimal uses $A$ through $F$ with values $10$ through $15$.",
    ],
    correct: 0,
    explanation: "## Six Letters\n\nHexadecimal uses **six letters — $A$ through $F$** — to represent the values $10$ through $15$. The mapping is sequential: $A = 10$, $B = 11$, $C = 12$, $D = 13$, $E = 14$, $F = 15$.\n\nWhy letters rather than additional numeric symbols? Historically, computer scientists needed a compact notation that could be typed on standard keyboards. Introducing new symbols like $\\\\dagger$ or $\\\\Omega$ would require special input methods. Letters were already available and unambiguous in context, so they were adopted.\n\nThe pattern is easy to remember once seen. Each letter is one more than the previous, starting from $A$ at ten. The sequence $0, 1, 2, \\ldots, 9, A, B, C, D, E, F$ is the full digit set of hexadecimal — sixteen symbols covering the sixteen values from zero through fifteen. Any hexadecimal number is composed entirely of these symbols, just as a decimal number is composed entirely of $0$ through $9$.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.5-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.5 Hexadecimal Number System",
    q: "In the hexadecimal number system, what position value does the third digit from the right have?",
    options: [
      "$8^2 = 64$",
      "$16^2 = 256$",
      "$10^2 = 100$",
      "$2^2 = 4$",
    ],
    optionRationales: [
      "$8^2 = 64$ uses base $8$, which is octal. Hexadecimal uses base $16$.",
      null,
      "$10^2 = 100$ uses base $10$, which is decimal. Hexadecimal uses base $16$.",
      "$2^2 = 4$ uses base $2$, which is binary. Hexadecimal uses base $16$.",
    ],
    correct: 1,
    explanation: "## Sixteen to the Power\n\nIn hexadecimal, the position value of a digit at position $p$ is $16^p$. The third digit from the right sits at position $2$ (counting the rightmost digit as position $0$). Its position value is $16^2 = 256$.\n\nThe pattern of position values in hexadecimal, from the right, is:\n\n$$16^0 = 1, \\quad 16^1 = 16, \\quad 16^2 = 256, \\quad 16^3 = 4096, \\quad 16^4 = 65536$$\n\nEach position is sixteen times more significant than the one to its right. This rapid growth is what allows hex numbers to be so compact. A four-digit hex number can represent values up to $16^4 - 1 = 65535$, whereas a four-digit decimal number only reaches $9999$.\n\nTo convert a hex number to decimal, sum the face value times position value for every digit. For example, $(2AF)_{16} = (2 \\times 256) + (10 \\times 16) + (15 \\times 1) = 512 + 160 + 15 = 687$. The letters $A$ and $F$ must be substituted with their decimal values before multiplication.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.5-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.5 Hexadecimal Number System",
    q: "What is the decimal value of the hexadecimal digit $B$?",
    options: [
      "$13$",
      "$10$",
      "$11$",
      "$12$",
    ],
    optionRationales: [
      "$13$ is the value of the digit $D$, two after $B$.",
      "$10$ is the value of the digit $A$, not $B$. The letters are sequential, so $B$ is one more than $A$.",
      null,
      "$12$ is the value of the digit $C$, one after $B$.",
    ],
    correct: 2,
    explanation: "## Sequential Letters\n\nIn hexadecimal, the letter digits form a continuous sequence starting at $A = 10$:\n\n$$A = 10, \\quad B = 11, \\quad C = 12, \\quad D = 13, \\quad E = 14, \\quad F = 15$$\n\nEach letter is exactly one more than the previous. This sequential pattern is the reason the letters were chosen in the first place — the mapping is easy to remember because it is continuous with the numeric digits. The digit after $9$ is $A$ (which would be the \\\"ten\\\" in a symbolic sense), and the sequence continues without gaps up to $F$ (fifteen).\n\nWhen converting hexadecimal to decimal, the letters are substituted with their numeric equivalents before the multiplication step. In the number $(3B7)_{16}$, the digit $B$ contributes $11 \\times 16^1 = 176$ to the total, not $11$ or anything else. Getting the substitution right is essential — an error in the letter mapping produces a value that is incorrect by a multiple of the position value, which compounds quickly in longer hex numbers.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.5-005",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.5 Hexadecimal Number System",
    q: "Why is hexadecimal particularly useful in computing?",
    options: [
      "Because each hex digit maps to exactly four binary digits",
      "Because it uses fewer digits than decimal for the same value",
      "Because humans find hex easier to read than decimal",
      "Because it is the fastest system for calculations",
    ],
    optionRationales: [
      null,
      "Hex does use fewer digits than binary for the same value, but decimal also uses fewer. The unique value of hex is not its compactness compared to decimal but its direct correspondence with binary.",
      "Humans do not naturally find hex easier than decimal. The advantage of hex is for programmers working with binary data, not for everyday use.",
      "Computation speed depends on hardware, not on the number system used for notation. Hex is not inherently faster than any other system.",
    ],
    correct: 0,
    explanation: "## Four Bits Per Digit\n\nThe unique value of hexadecimal in computing is the **direct correspondence between each hex digit and exactly four binary digits**. This mapping is exact and lossless — no rounding, no ambiguity.\n\nBecause of this mapping, a long binary string can be converted to hex by grouping the bits into fours and translating each group. Conversely, hex can be converted back to binary by expanding each digit into four bits. Both directions are trivial mechanical operations, not calculations.\n\nConsider a 32-bit binary value like $(1010\\\\ 1100\\\\ 1111\\\\ 0011\\\\ 0101\\\\ 1001\\\\ 0110\\\\ 1110)_2$. In hex, this is $(ACF3596E)_{16}$ — eight characters instead of thirty-two bits. The hex version is not just shorter; it is also easier to read, because the eye can compare eight characters much more quickly than thirty-two.\n\nThis is why hex is used everywhere binary data has to be written down. Memory addresses, colour codes on the web (`#FF5733`), MAC addresses (`00:1A:2B:3C:4D:5E`), cryptographic keys, and network packet contents are all expressed in hex. The notation compresses binary to a manageable size without losing any information.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.5-006",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.5 Hexadecimal Number System",
    q: "What is the hexadecimal representation of $(255)_{10}$?",
    options: [
      "$(FF)_{16}$",
      "$(100)_{16}$",
      "$(255)_{16}$",
      "$(FA)_{16}$",
    ],
    optionRationales: [
      null,
      "$(100)_{16} = 1 \\times 256 + 0 \\times 16 + 0 \\times 1 = 256$. It is one more than $255$.",
      "$(255)_{16}$ includes the digit $5$ twice, which is valid, but the value is $(2 \\times 256) + (5 \\times 16) + (5 \\times 1) = 512 + 80 + 5 = 597$, far above $255$.",
      "$(FA)_{16} = 15 \\times 16 + 10 = 250$. It is five less than $255$.",
    ],
    correct: 0,
    explanation: "## Two F's\n\nThe decimal value $255$ is equivalent to the hexadecimal value **$(FF)_{16}$**. Each $F$ represents the decimal value $15$, and the two digits together represent $15 \\times 16 + 15 = 240 + 15 = 255$.\n\nThis is a standard reference point worth memorizing. The value $255$ is the largest unsigned value that fits in a single byte — eight bits — because a byte's range is $0$ to $2^8 - 1 = 255$. In hex, that entire byte is written as just two characters: $FF$. This is why you will see hex values like `0xFF` in code whenever a programmer needs a byte-sized maximum value or a bitmask.\n\nThe general pattern is that the largest value representable by $n$ hex digits is all $F$s. Two digits give $FF = 255$; four digits give $FFFF = 65535$; eight digits give $FFFFFFFF = 4294967295$. Each additional hex digit multiplies the range by sixteen, just as each additional binary digit multiplies it by two.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "What is the general method for converting a decimal integer to another base?",
    options: [
      "Subtract the base from the number until zero is reached",
      "Raise the base to successive powers and add them together",
      "Multiply the number by the base repeatedly",
      "Divide the number by the base repeatedly and record the remainders",
    ],
    optionRationales: [
      "Subtraction is not a standard conversion method. It would take many steps and is prone to error.",
      "Raising the base to powers is the reverse operation — it is used when converting from another base to decimal, not from decimal to another base.",
      "Multiplication is used for fraction conversion, not integer conversion. Integers convert by division.",
      null,
    ],
    correct: 3,
    explanation: "## Divide and Record\n\nThe general method for converting a decimal integer to another base is **repeated division by the target base**, recording the remainder at each step. When the quotient reaches zero, the remainders read from bottom to top give the number in the new base.\n\nThe procedure is the same for any target base. To convert $(53)_{10}$ to binary, divide by $2$ each time and record the remainders:\n\n$$\\begin{aligned} 53 \\div 2 &= 26 \\text{ r } 1 \\\\ 26 \\div 2 &= 13 \\text{ r } 0 \\\\ 13 \\div 2 &= 6 \\text{ r } 1 \\\\ 6 \\div 2 &= 3 \\text{ r } 0 \\\\ 3 \\div 2 &= 1 \\text{ r } 1 \\\\ 1 \\div 2 &= 0 \\text{ r } 1 \\end{aligned}$$\n\nReading bottom to top: $(110101)_2$. Check: $32 + 16 + 4 + 1 = 53$.\n\nFor octal, divide by $8$ instead of $2$. For hexadecimal, divide by $16$. The same structure applies in every case — only the divisor changes. This is why the method is called *division-remainder* conversion: the remainders are the digits of the answer, and they are read in reverse order of how they were produced.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "In the repeated-division method, which value becomes the next digit of the result?",
    options: [
      "The remainder of the division",
      "The divisor used in the division",
      "The difference between the number and the base",
      "The quotient of the division",
    ],
    optionRationales: [
      null,
      "The divisor is fixed at the target base throughout the process. It does not produce digits.",
      "Subtracting the base is not part of the division-remainder method. The method uses division and its remainders.",
      "The quotient becomes the input to the next division step. It is not a digit of the answer.",
    ],
    correct: 0,
    explanation: "## The Remainder Is the Digit\n\nIn the division-remainder method, the **remainder of each division is the next digit** of the result. The quotient becomes the input to the next step.\n\nThis is why the method is sometimes called the *remainder* method. Each division produces two outputs: the quotient, which continues the process, and the remainder, which becomes a digit. The remainder is what gets recorded; the quotient is what gets used again.\n\nThe reason this works is that the remainder at each step is exactly the digit at the current position. The first remainder is the least significant digit — the ones place — because the first division reduces the number to a multiple of the base. The next remainder is the next digit up, and so on until the quotient becomes zero.\n\nCommon errors come from mixing up the two outputs. Recording the quotient instead of the remainder produces a completely different number. Reading the remainders in the wrong order — top to bottom instead of bottom to top — reverses the digits of the answer. Both errors can be caught by converting the result back to decimal and checking that the value matches.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "What is the binary representation of $(53)_{10}$?",
    options: [
      "$(110011)_2$",
      "$(111001)_2$",
      "$(110101)_2$",
      "$(101011)_2$",
    ],
    optionRationales: [
      "$(110011)_2 = 32 + 16 + 0 + 0 + 2 + 1 = 51$. It is two less than $53$.",
      "$(111001)_2 = 32 + 16 + 8 + 0 + 0 + 1 = 57$. It is four more than $53$.",
      null,
      "$(101011)_2 = 32 + 0 + 8 + 0 + 2 + 1 = 43$. It is ten less than $53$.",
    ],
    correct: 2,
    explanation: "## Fifty-Three in Binary\n\nConvert $(53)_{10}$ to binary by repeated division:\n\n$$\\begin{aligned} 53 \\div 2 &= 26 \\text{ r } 1 \\\\ 26 \\div 2 &= 13 \\text{ r } 0 \\\\ 13 \\div 2 &= 6 \\text{ r } 1 \\\\ 6 \\div 2 &= 3 \\text{ r } 0 \\\\ 3 \\div 2 &= 1 \\text{ r } 1 \\\\ 1 \\div 2 &= 0 \\text{ r } 1 \\end{aligned}$$\n\nReading the remainders from bottom to top gives $(110101)_2$. Verify by expanding: $1 \\times 32 + 1 \\times 16 + 0 \\times 8 + 1 \\times 4 + 0 \\times 2 + 1 \\times 1 = 32 + 16 + 4 + 1 = 53$. Correct.\n\nNote that the binary result has six digits, while the decimal source has two. This is typical — binary representations are usually about three times as long as the decimal equivalents, because each decimal digit carries more information than each binary digit. This is why the shorthand notations (octal and hexadecimal) exist: they compress the binary back down to a manageable length.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "When converting $(68)_{10}$ to binary, what is the first remainder recorded?",
    options: [
      "$34$",
      "$0$",
      "$1$",
      "$2$",
    ],
    optionRationales: [
      "$34$ is the quotient of the first division, not the remainder. The quotient continues the process; the remainder becomes the first digit.",
      null,
      "$68$ is even, so $68 \\div 2$ leaves no remainder. The value $1$ would require the number to be odd.",
      "A remainder when dividing by $2$ cannot be $2$. The remainder is always less than the divisor, so the only possible remainders are $0$ or $1$.",
    ],
    correct: 1,
    explanation: "## Even Numbers End in Zero\n\nThe first remainder when converting $(68)_{10}$ to binary is **$0$**, because $68$ is even. $68 \\div 2 = 34$ with remainder $0$.\n\nThe remainder at each step corresponds to the least significant binary digit that has not yet been accounted for. Because the first remainder is always the ones place of the binary result, an even number always produces a binary number that ends in $0$. An odd number always produces a binary number that ends in $1$.\n\nThis parity check is a useful sanity test during conversion. If the original decimal number is even and the binary result ends in $1$, or if the original is odd and the result ends in $0$, then a mistake has been made somewhere in the divisions. The check catches digit-transcription errors, arithmetic slips, and reading-order mistakes that might otherwise go unnoticed until the result is verified by expanding back to decimal.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-005",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "What is the octal representation of $(68)_{10}$?",
    options: [
      "$(110)_8$",
      "$(104)_8$",
      "$(84)_8$",
      "$(68)_8$",
    ],
    optionRationales: [
      "$(110)_8 = 1 \\times 64 + 1 \\times 8 + 0 = 72$. It differs from $68$ by four.",
      null,
      "$(84)_8 = 8 \\times 8 + 4 = 64 + 4 = 68$. This is a valid value, but the correct octal digits are $104$ because the highest position value that fits into $68$ is $64$ (which is $8^2$), not $64$ (from $8 \\times 8$).",
      "$(68)_8$ contains the digit $8$, which is not valid in octal. Octal uses only the digits $0$ through $7$.",
    ],
    correct: 1,
    explanation: "## Division by Eight\n\nConvert $(68)_{10}$ to octal by repeated division by $8$:\n\n$$\\begin{aligned} 68 \\div 8 &= 8 \\text{ r } 4 \\\\ 8 \\div 8 &= 1 \\text{ r } 0 \\\\ 1 \\div 8 &= 0 \\text{ r } 1 \\end{aligned}$$\n\nReading the remainders from bottom to top gives $(104)_8$. Verify: $1 \\times 64 + 0 \\times 8 + 4 \\times 1 = 68$. Correct.\n\nNote that the octal result has three digits, whereas the decimal source has two. This is typical — octal representations are somewhat longer than decimal ones because each octal digit carries less information (three binary bits) than a decimal digit (which is worth roughly $3.32$ bits). The trade-off is that octal is a compact notation for binary — one octal digit represents exactly three binary digits — so programmers use it when working with bit groups of three.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-006",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "What is the hexadecimal representation of $(68)_{10}$?",
    options: [
      "$(104)_{16}$",
      "$(68)_{16}$",
      "$(44)_{16}$",
      "$(84)_{16}$",
    ],
    optionRationales: [
      "$(104)_{16} = 1 \\times 256 + 0 \\times 16 + 4 = 260$. It is far larger than $68$.",
      "$(68)_{16} = 6 \\times 16 + 8 = 104$. It is thirty-six more than $68$.",
      null,
      "$(84)_{16} = 8 \\times 16 + 4 = 132$. It is much larger than $68$.",
    ],
    correct: 2,
    explanation: "## Division by Sixteen\n\nConvert $(68)_{10}$ to hexadecimal by repeated division by $16$:\n\n$$\\begin{aligned} 68 \\div 16 &= 4 \\text{ r } 4 \\\\ 4 \\div 16 &= 0 \\text{ r } 4 \\end{aligned}$$\n\nReading the remainders from bottom to top gives $(44)_{16}$. Verify: $4 \\times 16 + 4 \\times 1 = 64 + 4 = 68$. Correct.\n\nThe result $(44)_{16}$ happens to look like the decimal digits $44$, but it represents a completely different value. In decimal, the number $44$ equals forty-four. In hexadecimal, the number $(44)_{16}$ equals sixty-eight. This is why the subscript notation is essential — without it, the same two characters can mean two different values, and there is no way to tell them apart.\n\nHex conversions of small numbers often produce results that look like ordinary decimal digits. The confusion is especially common when both digits are less than $10$, because the letters $A$ through $F$ never appear. The safest practice is to always include the base subscript, even when the result looks like an ordinary decimal number.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-007",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "In the division-remainder method, when does the conversion process stop?",
    options: [
      "When the number has been divided ten times",
      "When the divisor equals the original number",
      "When the remainder becomes zero",
      "When the quotient becomes zero",
    ],
    optionRationales: [
      "The number of divisions depends on the value being converted, not on a fixed count. A rule of ten would produce wrong results for most numbers.",
      "The divisor is fixed at the base throughout the process. It does not change, and it does not equal the original number.",
      "A remainder of zero is common and does not signal the end. The process continues as long as the quotient is not zero.",
      null,
    ],
    correct: 3,
    explanation: "## Until the Quotient Vanishes\n\nThe division-remainder conversion process stops **when the quotient becomes zero**. At that point, no more digits can be extracted, and the conversion is complete.\n\nThe reason is that each division produces one digit of the result. The number of digits needed depends on how many times the base can be divided out of the original value. A small number like $5$ needs only three divisions in binary (to produce the digits $101$), while a large number like $53$ needs six.\n\nThe final division step is always the one that produces a quotient of zero. The remainder from that step is the most significant digit of the result, which is why it appears at the top of the bottom-to-top reading. Stopping too early would produce a truncated answer missing its leading digits; stopping after the quotient is already zero would produce leading zeros that are conventionally omitted. The rule is simple and universal: continue until the quotient is zero.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.6-008",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.6 Decimal → Other Bases (Integer)",
    q: "Why must remainders be read from bottom to top when converting decimal to another base?",
    options: [
      "Because the last remainder is the least significant digit",
      "Because the base increases with each position",
      "Because the target base is smaller than decimal",
      "Because the first remainder is the least significant digit",
    ],
    optionRationales: [
      "The last remainder is the most significant digit, not the least significant. The first remainder is the least significant.",
      "The base does not change during the process. It is fixed at the target base from the first step.",
      "The direction of comparison between bases does not determine the reading order. The order is determined by the significance of each remainder, which depends on when it was produced.",
      null,
    ],
    correct: 3,
    explanation: "## Least Significant First\n\nThe first remainder produced by division is the **least significant digit** of the result — the ones place in the target base. Because it belongs at the right end of the number, and it is produced first, the remainders must be read bottom to top to place them in the correct positions.\n\nHere is why the first remainder is the least significant. When a number $N$ is divided by base $r$, the remainder is $N \\bmod r$ — the part of $N$ that cannot be expressed as a whole multiple of $r$. This remainder is exactly the value of the digit at position $0$ in the new base. The quotient $N \\div r$ contains all the remaining information, which is then processed the same way to extract the digit at position $1$, and so on.\n\nSo the remainders are produced in the order $d_0, d_1, d_2, \\ldots$, from least significant to most. Written as a number, the digits appear in reverse order: $d_n d_{n-1} \\ldots d_1 d_0$. Reading the remainders bottom to top reverses their production order and puts them in the correct position order. Reading them top to bottom would produce a number with the digits backwards, which is almost always wrong.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "How is a number in another base converted to decimal?",
    options: [
      "By finding the largest power of the base and subtracting",
      "By repeatedly dividing the number by the base",
      "By summing face value times base to the position for each digit",
      "By multiplying every digit by the next power of ten",
    ],
    optionRationales: [
      "Subtraction of powers is a manual technique that approximates the process but is not the standard method. The standard method uses multiplication and sum.",
      "Repeated division is the method for converting from decimal to another base, not the reverse.",
      null,
      "Multiplying by powers of ten only works when converting between decimal and itself. Other bases require powers of the base, not powers of ten.",
    ],
    correct: 2,
    explanation: "## Sum of Weighted Digits\n\nThe general method for converting a number from any base to decimal is to **sum face value times base to the position for each digit**. This is the same formula used to calculate the value of a number in the first place — the conversion is not a special operation, it is just an evaluation.\n\nFor the binary number $(1011)_2$:\n\n$$(1 \\times 2^3) + (0 \\times 2^2) + (1 \\times 2^1) + (1 \\times 2^0) = 8 + 0 + 2 + 1 = 11$$\n\nFor the hexadecimal number $(2AF)_{16}$:\n\n$$(2 \\times 16^2) + (10 \\times 16^1) + (15 \\times 16^0) = 512 + 160 + 15 = 687$$\n\nThe same formula applies to octal, binary, hexadecimal, or any other base. Replace the base with the appropriate number, substitute any letter digits with their decimal values, and evaluate. The result is the decimal equivalent of the original number.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "How are positions numbered in the fraction part of a number?",
    options: [
      "Starting at $0$ at the last digit and rising to the left",
      "Starting at $0$ at the point and rising to the right",
      "Starting at $-1$ at the first fraction digit, going more negative to the right",
      "Starting at $1$ at the first fraction digit and rising to the right",
    ],
    optionRationales: [
      "Numbering from the last digit would make the position of each digit depend on how many digits come after it. This would complicate every calculation.",
      "Positions to the right of the point are negative, not positive. Positive positions are reserved for the integer part.",
      null,
      "Starting at $1$ would collide with the position already used by the first integer digit to the left of the point. Negative numbering avoids this conflict.",
    ],
    correct: 2,
    explanation: "## Negative Exponents\n\nIn the fraction part of a number, positions are numbered **starting at $-1$ at the first digit to the right of the decimal point**, and the number becomes more negative as you move further right. The second fraction digit is at position $-2$; the third is at $-3$.\n\nThe reason for negative numbering is continuity with the integer part. The rightmost integer digit is at position $0$. Moving left, positions increase: $0, 1, 2, \\ldots$ Moving right from position $0$, positions decrease: $-1, -2, -3, \\ldots$ The result is a single continuous numbering scheme that covers the entire number.\n\nThe position value of a fractional digit is $\\text{base}^{\\text{position}}$, and for negative positions this means fractions. In binary, position $-1$ has value $2^{-1} = \\frac{1}{2} = 0.5$; position $-2$ has value $2^{-2} = \\frac{1}{4} = 0.25$; position $-3$ has value $2^{-3} = \\frac{1}{8} = 0.125$. The pattern continues: each step to the right halves the contribution. This is the mirror of the integer side, where each step to the left doubles the contribution.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "What is the decimal value of the hexadecimal number $(C15)_{16}$?",
    options: [
      "$3089$",
      "$3091$",
      "$3093$",
      "$3095$",
    ],
    optionRationales: [
      "$3089$ is off by $4$.",
      "$3091$ is off by $2$. The correct value is $3093$, which uses $C = 12$ in the top position.",
      null,
      "$3095$ is off by $2$ in the other direction.",
    ],
    correct: 2,
    explanation: "## Three Hex Digits\n\nConvert $(C15)_{16}$ to decimal by expanding each digit with its position value:\n\n$$(C \\times 16^2) + (1 \\times 16^1) + (5 \\times 16^0)$$\n\nThe digit $C$ represents the value $12$. Substitute and calculate:\n\n$$(12 \\times 256) + (1 \\times 16) + (5 \\times 1) = 3072 + 16 + 5 = 3093$$\n\nThe key step is the substitution of $C$ with $12$. Every letter digit must be replaced with its decimal value before multiplication. A common error is to calculate with the letter as if it were a numeric digit — for example, treating $C$ as if it were $3$ or $13$, producing a result that is off by a multiple of $256$. Always substitute first, then calculate.\n\nThis is why hex notation is slower for humans to work with than decimal. The letter substitution is an extra step that adds an opportunity for error. Programmers who work with hex regularly develop the habit of reading letters as their values instantly, but beginners should write out the substitution before doing the arithmetic.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "What is the decimal value of the binary fraction $(0.1101)_2$?",
    options: [
      "$0.75$",
      "$0.8125$",
      "$0.875$",
      "$0.5$",
    ],
    optionRationales: [
      "$0.75$ accounts for the first two bits. The fourth bit adds another $0.0625$, which is missing here.",
      null,
      "$0.875$ overcounts. The correct sum of $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{16}$ is $0.8125$, not $0.875$.",
      "$0.5$ accounts only for the first bit. The other three bits also contribute to the value.",
    ],
    correct: 1,
    explanation: "## Fractions Add Up\n\nThe binary fraction $(0.1101)_2$ has decimal value **$0.8125$**. Calculate it by summing the contribution of each $1$ bit at its position value:\n\n$$(1 \\times 2^{-1}) + (1 \\times 2^{-2}) + (0 \\times 2^{-3}) + (1 \\times 2^{-4}) = 0.5 + 0.25 + 0 + 0.0625 = 0.8125$$\n\nThe $0$ in the third position contributes nothing, so the value is the sum of the three $1$s at positions $-1$, $-2$, and $-4$. The third position (worth $0.125$) is skipped.\n\nThe pattern to remember is that each fractional position halves the contribution of the one to its left. Position $-1$ is $0.5$, position $-2$ is $0.25$, position $-3$ is $0.125$, position $-4$ is $0.0625$. Adding various combinations of these values produces every possible binary fraction. The absence of a $1$ in a position simply means that value is not included in the total.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-005",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "What is the decimal value of the hexadecimal fraction $(0.15)_{16}$?",
    options: [
      "$0.15$",
      "$0.082$",
      "$0.35$",
      "$0.82$",
    ],
    optionRationales: [
      "$0.15$ is the written hex fraction, not its decimal value. The decimal equivalent is different.",
      null,
      "$0.35$ does not correspond to the sum of the hexadecimal values. It is not the result of any standard calculation.",
      "$0.82$ is a common error. The sum is $1/16 + 5/256 = 21/256$, which is approximately $0.082$. A typo in some materials incorrectly suggests it is $0.82$.",
    ],
    correct: 1,
    explanation: "## Twenty-One Over 256\n\nConvert $(0.15)_{16}$ to decimal by expanding each digit at its negative position:\n\n$$(1 \\times 16^{-1}) + (5 \\times 16^{-2}) = \\frac{1}{16} + \\frac{5}{256}$$\n\nFind a common denominator and add:\n\n$$\\frac{16}{256} + \\frac{5}{256} = \\frac{21}{256} \\approx 0.082$$\n\nRounded to three decimal places, the value is $0.082$.\n\nThe common error in this conversion is to forget that the second position has value $16^{-2} = \\frac{1}{256}$, not $16^{-1}$. The first digit after the point uses the first negative power; the second uses the second. This mirrors the integer side, where the first digit to the left of the point uses $16^0$, the second uses $16^1$, and so on.\n\nHex fractions appear in computing when working with floating-point numbers and in some encoding schemes. The conversion method is identical to binary and octal fractions — only the base changes.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-006",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "What is the decimal value of $(1011.1001)_2$?",
    options: [
      "$11.5650$",
      "$11.5600$",
      "$11.6000$",
      "$11.5625$",
    ],
    optionRationales: [
      "$11.5650$ rounds the fraction incorrectly. The exact value is $11.5625$.",
      "$11.5600$ truncates the fraction too aggressively, dropping the final $0.0025$.",
      "$11.6000$ rounds up too much. The fraction part is $0.5625$, not $0.6$.",
      null,
    ],
    correct: 3,
    explanation: "## One Number, Two Halves\n\nConvert $(1011.1001)_2$ to decimal by handling the integer and fraction parts separately.\n\nInteger part: $(1011)_2 = 8 + 0 + 2 + 1 = 11$.\n\nFraction part: $(.1001)_2 = \\frac{1}{2} + 0 + 0 + \\frac{1}{16} = 0.5 + 0.0625 = 0.5625$.\n\nCombined: $11 + 0.5625 = 11.5625$.\n\nThe fraction part is where most errors occur. The pattern $1001$ in binary means: $1$ at position $-1$ (worth $0.5$), $0$ at position $-2$ (nothing), $0$ at position $-3$ (nothing), $1$ at position $-4$ (worth $0.0625$). The total is $0.5625$, which is a clean value because both contributing positions are powers of two that add up exactly.\n\nThe conversion formula is the same as for pure integers, extended to negative positions. This is the fundamental unity of the system: there is no separate method for fractional numbers, only an extension of the method to positions that happen to have negative indices.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-007",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "How does the method for converting a fractional number to decimal compare with the method for converting an integer?",
    options: [
      "The same formula applies, extended to negative position values",
      "Fractional numbers use a different base from integer numbers",
      "Fractional conversion is only approximate; integer conversion is exact",
      "Fractional numbers require division; integers require multiplication",
    ],
    optionRationales: [
      null,
      "The base is the same for both parts of a number. A binary number has a binary fraction; a hexadecimal number has a hexadecimal fraction.",
      "Both conversions are exact when the number has a finite representation in the target base. Approximation is a separate issue that affects some fractions regardless of which direction the conversion goes.",
      "Division is not used for either conversion. Both use multiplication and addition.",
    ],
    correct: 0,
    explanation: "## One Formula, Two Sides\n\nThe method for converting a fractional number to decimal is the **same formula used for integers**, extended to negative position values. There is no separate method — the conversion is unified.\n\nThe formula for any number in base $r$ is:\n\n$$\\sum_{i} d_i \\times r^i$$\n\nwhere $d_i$ is the digit at position $i$. Integer positions use $i = 0, 1, 2, \\ldots$ Fraction positions use $i = -1, -2, -3, \\ldots$ The formula does not care which side of the point the digit is on; it multiplies by $r$ raised to whatever the position happens to be.\n\nThis unity is one of the elegant features of positional notation. There is no separate arithmetic for fractions, no separate rules for the two halves of a number. The same principle — sum the digits weighted by their position values — applies throughout. The only difference is that on the integer side, the position values are powers greater than or equal to $1$; on the fraction side, they are fractions less than $1$.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.7-008",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.7 Binary/Octal/Hex → Decimal",
    q: "What is the decimal value of $(4D.21)_{16}$?",
    options: [
      "$77.129$",
      "$77.135$",
      "$77.125$",
      "$77.128$",
    ],
    optionRationales: [
      null,
      "$77.135$ is off in the third decimal place. The correct fraction is $0.1289$, not $0.135$.",
      "$77.125$ understates the fraction. The exact value is $77.12890625$, which rounds to $77.129$, not $77.125$.",
      "$77.128$ truncates the exact fraction $\\frac{33}{256} = 0.12890625$ to three digits and drops the rest.",
    ],
    correct: 0,
    explanation: "## Whole Plus Fraction\n\nConvert $(4D.21)_{16}$ to decimal by handling each part separately.\n\nInteger part: $(4D)_{16} = (4 \\times 16) + (13 \\times 1) = 64 + 13 = 77$.\n\nFraction part: $(.21)_{16} = (2 \\times 16^{-1}) + (1 \\times 16^{-2}) = \\frac{2}{16} + \\frac{1}{256} = \\frac{32}{256} + \\frac{1}{256} = \\frac{33}{256} = 0.12890625$.\n\nCombined: $77 + 0.12890625 = 77.12890625$.\n\nRounded to three decimal places, the value is $77.129$.\n\nThe result does not terminate cleanly at three decimal places, which is why the exact value is often more useful than a rounded one. When precision matters — in engineering, in financial calculations, or in scientific computing — exact fractions are preferred over decimal approximations. The fraction $\\frac{33}{256}$ is exact; the decimal $77.129$ is not.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.8-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.8 Octal Number System",
    q: "How many digits does the octal number system use?",
    options: [
      "$8$",
      "$10$",
      "$16$",
      "$2$",
    ],
    optionRationales: [
      null,
      "$10$ is the count for decimal. Octal uses eight digits, not ten.",
      "$16$ is the count for hexadecimal. Octal uses eight digits, not sixteen.",
      "$2$ is the count for binary. Octal uses eight digits, not two.",
    ],
    correct: 0,
    explanation: "## Eight Digits\n\nThe octal number system uses exactly **eight digits**: $0, 1, 2, 3, 4, 5, 6, 7$. The digit $8$ is not valid in octal, nor is $9$. This is the direct consequence of the base — base $8$ allows digits from $0$ to $8 - 1 = 7$.\n\nOctal is less common than binary, decimal, or hexadecimal in modern computing, but it appears in specific contexts. Unix and Linux file permissions are traditionally written in octal — the familiar `chmod 755` uses octal digits to represent combinations of read, write, and execute permissions for three different classes of user. Each octal digit represents three permission bits, which is why octal is the natural notation for this specific use.\n\nThe connection to binary is what makes octal useful. Because $8 = 2^3$, one octal digit represents exactly three binary digits. A nine-bit value like $(101\\\\ 110\\\\ 011)_2$ becomes $(563)_8$ — three octal digits instead of nine binary ones. This compression is the reason octal exists at all. It is a human-friendly shorthand for a specific slice of binary data, just as hexadecimal is for a different slice.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.8-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.8 Octal Number System",
    q: "What is the base of the octal number system?",
    options: [
      "$8$",
      "$10$",
      "$16$",
      "$2$",
    ],
    optionRationales: [
      null,
      "$10$ is the base of decimal. Octal uses base $8$.",
      "$16$ is the base of hexadecimal. Octal uses base $8$.",
      "$2$ is the base of binary, not octal. The two are related — octal is a shorthand for binary — but they are distinct systems.",
    ],
    correct: 0,
    explanation: "## Base Eight\n\nOctal has **base $8$**. The word comes from the Latin *octo* for eight, and the system has been used in computing contexts since the early days of mainframes.\n\nThe choice of base $8$ was driven by the hardware of early computers, which often used word sizes that were multiples of three bits — 12-bit, 24-bit, and 36-bit words were common. A three-bit group maps exactly onto one octal digit, so octal was the natural notation for those architectures. When the industry standardised on eight-bit bytes and word sizes that were multiples of four bits, hexadecimal replaced octal as the primary shorthand — four bits map to one hex digit, which matches the byte boundary exactly.\n\nThe relationship between octal and binary is what matters most for the exam. Because $2^3 = 8$, each octal digit corresponds to exactly three binary digits. This is the fact that makes octal↔binary conversion a mechanical operation rather than an arithmetic one, and it is the reason octal appears in the shortcut methods section of this unit.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.8-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.8 Octal Number System",
    q: "What is the decimal value of the octal number $(37)_8$?",
    options: [
      "$37$",
      "$38$",
      "$30$",
      "$31$",
    ],
    optionRationales: [
      "$37$ confuses the octal digits with their decimal appearance. The octal number $(37)_8$ represents a different value than the decimal number $37$.",
      "$38$ is not the result of the correct calculation. Each octal digit contributes $8$ times more than the digit to its right, so the leftmost digit contributes $24$, not $30$.",
      "$30$ is off by one. The correct value is $3 \\times 8 + 7 = 31$.",
      null,
    ],
    correct: 3,
    explanation: "## Three Eights and Seven\n\nThe octal number $(37)_8$ has decimal value **$31$**. Calculate it as:\n\n$$(3 \\times 8^1) + (7 \\times 8^0) = 24 + 7 = 31$$\n\nThis is a good example of why base notation matters. Without the subscript, the number $37$ would be read as decimal thirty-seven. With the subscript, $(37)_8$ is a different value entirely — thirty-one. The two are related only by coincidence of the digits used.\n\nOctal numbers are often used in contexts where the value happens to matter less than the pattern of bits. In file permissions, for example, the octal digit $7$ means *all three permissions enabled* — read, write, and execute — regardless of what the decimal value of $7$ might be. The digit is being used as a compact representation of a bit pattern, not as a numerical value to be manipulated arithmetically. This is why file permissions are written in octal even though the values involved are small enough that any base would work.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.8-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.8 Octal Number System",
    q: "Why is octal less commonly used than hexadecimal in modern computing?",
    options: [
      "Because octal requires special symbols that keyboards cannot type",
      "Because octal was replaced by binary in the 1980s",
      "Because octal is harder to convert than hexadecimal",
      "Because modern word sizes are multiples of four bits, not three",
    ],
    optionRationales: [
      "Octal uses the standard digits $0$ through $7$, all of which are typeable on any keyboard. No special symbols are required.",
      "Octal was not replaced by binary — binary is the underlying representation that both octal and hex are shorthand for. The two notations are both in use; one is simply more common than the other.",
      "Octal is not harder to convert. Both octal and hex use mechanical grouping methods that are equally straightforward.",
      null,
    ],
    correct: 3,
    explanation: "## The Four-Bit Standard\n\nOctal declined in modern use because **modern computer architectures use word sizes that are multiples of four bits**, not three. Bytes are eight bits, words are sixteen, thirty-two, or sixty-four. A four-bit grouping matches the natural boundaries of these sizes; a three-bit grouping does not.\n\nHexadecimal is the natural shorthand for four-bit groups. Each hex digit corresponds to exactly four binary digits, so a byte is always exactly two hex digits, a sixteen-bit word is always exactly four hex digits, and a thirty-two-bit word is always exactly eight hex digits. The boundaries align cleanly with the hardware.\n\nOctal would be the natural shorthand for three-bit groups. If computer architectures had standardised on word sizes that were multiples of three — 6-bit, 12-bit, 24-bit — octal would have become the default shorthand. Early machines did use such sizes, which is why octal was the standard notation in the 1960s and 1970s. When the industry converged on the byte as the fundamental unit, and the byte is eight bits, the four-bit shorthand won. Octal still appears in specialized contexts — file permissions being the most common — because the underlying bit groupings in those contexts still favour groups of three.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-001",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "Why can octal and hexadecimal be converted to binary using a shortcut method?",
    options: [
      "Because they were invented after binary",
      "Because octal and hexadecimal are smaller than binary",
      "Because their bases are powers of two",
      "Because they use the same digits as binary",
    ],
    optionRationales: [
      "The order of invention does not matter. What matters is the mathematical relationship between the bases.",
      "Size has nothing to do with the shortcut. Binary is the smallest base, but the shortcut exists because of a mathematical relationship, not a physical one.",
      null,
      "Octal and hexadecimal use some of the same digits as binary — octal uses $0$ and $1$, hex uses $0$ and $1$ — but they also use other digits. The shortcut does not depend on shared digits; it depends on the base relationship.",
    ],
    correct: 2,
    explanation: "## The Power of the Base\n\nThe shortcut method works because **octal and hexadecimal bases are powers of two**. Octal is $2^3$, and hexadecimal is $2^4$. This relationship is what makes direct digit-by-digit conversion possible, without needing to go through decimal at any stage.\n\nThe power-of-two relationship means that a fixed number of binary digits corresponds to exactly one octal or hex digit. Three binary digits map to one octal digit. Four binary digits map to one hex digit. The mapping is total — every possible combination of three binary digits has exactly one octal equivalent, and every possible combination of four binary digits has exactly one hex equivalent.\n\nThis is not true for arbitrary bases. Decimal is base $10$, which is not a power of two. There is no fixed number of binary digits that corresponds to one decimal digit — sometimes three, sometimes four, depending on the value. Converting between binary and decimal therefore requires arithmetic, not just grouping. The shortcut is possible only for bases that are powers of two: base $2$, base $4$, base $8$, base $16$, base $32$, and so on. Of these, base $8$ and base $16$ are the ones used in practice.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-002",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "How many binary digits correspond to one octal digit?",
    options: [
      "$8$",
      "$2$",
      "$3$",
      "$4$",
    ],
    optionRationales: [
      "$8$ would correspond to $2^8 = 256$ possible patterns, far more than the eight octal digit values.",
      "$2$ would give only four possible patterns, which is fewer than the eight octal digit values. The correspondence would not be complete.",
      null,
      "$4$ corresponds to one hexadecimal digit, not one octal digit. Octal uses groups of three because $2^3 = 8$.",
    ],
    correct: 2,
    explanation: "## Three Bits Per Octal Digit\n\nOne octal digit corresponds to exactly **three binary digits**. This is because $2^3 = 8$, and there are exactly eight possible patterns of three binary digits — one for each octal digit value.\n\nThe complete mapping is:\n\n$$\\begin{aligned} 0 &= 000 \\quad &1 &= 001 \\quad &2 &= 010 \\quad &3 &= 011 \\\\ 4 &= 100 \\quad &5 &= 101 \\quad &6 &= 110 \\quad &7 &= 111 \\end{aligned}$$\n\nEach pattern is unique; no two octal digits share a binary representation. This makes octal↔binary conversion a lookup exercise rather than a calculation. To convert binary to octal, group the binary digits into threes from the right and replace each group with its octal equivalent. To convert octal to binary, replace each octal digit with its three-bit pattern and concatenate.\n\nThe grouping direction matters: binary is grouped from the right because the rightmost bit is always at position $0$. If the leftmost group has fewer than three bits, it is padded with leading zeros. For example, $(1101)_2$ groups as $1\\\\ |\\\\ 101$ — the leftmost group is a single $1$, which becomes $001$ when padded. The result is $(001\\\\ 101)_2$ which converts to $(15)_8$. The padding does not change the value; it only fills out the group to the required size.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-003",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "How many binary digits correspond to one hexadecimal digit?",
    options: [
      "$3$",
      "$4$",
      "$16$",
      "$2$",
    ],
    optionRationales: [
      "$3$ corresponds to octal, not hexadecimal. Octal uses groups of three; hex uses groups of four.",
      null,
      "$16$ would correspond to a base of $2^{16} = 65536$, which is not hexadecimal.",
      "$2$ corresponds to base $4$, not base $16$. Four binary digits give sixteen patterns, matching the sixteen hex digits.",
    ],
    correct: 1,
    explanation: "## Four Bits Per Hex Digit\n\nOne hexadecimal digit corresponds to exactly **four binary digits**. This is because $2^4 = 16$, and there are exactly sixteen possible patterns of four binary digits — one for each hex digit value.\n\nThe mapping covers the full range from $0000$ to $1111$:\n\n$$\\begin{aligned} 0 &= 0000 \\quad &1 &= 0001 \\quad &2 &= 0010 \\quad &3 &= 0011 \\\\ 4 &= 0100 \\quad &5 &= 0101 \\quad &6 &= 0110 \\quad &7 &= 0111 \\\\ 8 &= 1000 \\quad &9 &= 1001 \\quad &A &= 1010 \\quad &B &= 1011 \\\\ C &= 1100 \\quad &D &= 1101 \\quad &E &= 1110 \\quad &F &= 1111 \\end{aligned}$$\n\nMemorizing this table is one of the most useful investments a student can make for working with binary data. Every conversion between binary and hex becomes a lookup instead of a calculation. The table has sixteen rows, but the pattern is easy: each row counts up by one in binary, and the hex digits $A$ through $F$ simply continue the sequence past $9$.\n\nThe grouping works the same way as octal, just with groups of four. From the right, group the binary into fours; pad the leftmost group with leading zeros if needed; replace each group with its hex equivalent. A byte is always exactly two hex digits, which is why hex is the natural notation for byte-level data.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-004",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "When converting binary to octal, from which side do you begin grouping the bits?",
    options: [
      "From the leftmost bit",
      "From the rightmost bit",
      "From the middle of the number",
      "From whichever side is shorter",
    ],
    optionRationales: [
      "Grouping from the left would misalign the groups with the place values of the binary digits. The rightmost group would end up with fewer than the expected number of bits, and the conversion would be wrong.",
      null,
      "Grouping from the middle would produce groups that do not align with the place values. There is no natural midpoint in a positional number.",
      "The side from which grouping starts is fixed by the mathematics, not by the length of the number.",
    ],
    correct: 1,
    explanation: "## Right to Left\n\nGrouping always starts from the **rightmost bit**. This is because the rightmost bit is at position $0$, and every group of three bits that starts from the right aligns cleanly with the place-value structure of the number.\n\nThe alternative — grouping from the left — would place the first group at the most significant end of the number, which changes as the value changes. A value with seven binary digits would have its leftmost group contain one bit; a value with eight binary digits would have its leftmost group contain two; a value with nine would have three. The group boundaries would be different for every number, which defeats the purpose of the shortcut.\n\nGrouping from the right fixes the boundaries relative to the least significant bit. Every group of three (or four for hex) is a fixed offset from position $0$. The leftmost group is the only one that may be shorter than the standard size, and it is padded with leading zeros to fill it out. Those leading zeros do not affect the value — they simply occupy the highest positions that the original number did not reach.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-005",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "What is the octal representation of $(1100111100111)_2$?",
    options: [
      "$(14775)_8$",
      "$(14747)_8$",
      "$(14746)_8$",
      "$(14756)_8$",
    ],
    optionRationales: [
      "$(14775)_8$ has the last two digits wrong. Both should be $7$, from the group $111$.",
      null,
      "$(14746)_8$ has the last digit wrong. The rightmost binary group is $111$, which converts to $7$, not $6$.",
      "$(14756)_8$ has the third digit wrong. The group $100$ converts to $4$, not $5$.",
    ],
    correct: 1,
    explanation: "## Groups of Three\n\nConvert $(1100111100111)_2$ to octal by grouping the bits into threes from the right:\n\n$$1\\\\ |\\\\ 100\\\\ |\\\\ 111\\\\ |\\\\ 100\\\\ |\\\\ 111$$\n\nEach group converts to one octal digit:\n\n$$1 = 1, \\quad 100 = 4, \\quad 111 = 7, \\quad 100 = 4, \\quad 111 = 7$$\n\nReading left to right: $(14747)_8$.\n\nThe leftmost group is a single $1$ because the total bit count ($13$) is not a multiple of three. This is why padding the leftmost group matters when working with a value that has a length not divisible by the group size. If the exercise requires explicit padding, the leftmost group would be written as $001$, and the conversion would still produce the same octal digit $1$. The padding is cosmetic in most cases; the result is unaffected.\n\nThe conversion is entirely mechanical. There is no arithmetic — only the mapping from three-bit patterns to octal digits. This is what makes the shortcut so much faster than converting binary to decimal and then to octal. The two conversions would produce the same answer, but the direct grouping method eliminates the intermediate step and reduces the opportunity for error.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-006",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "What is the hexadecimal representation of $(1110101100110)_2$?",
    options: [
      "$(1D66)_{16}$",
      "$(1C66)_{16}$",
      "$(1E66)_{16}$",
      "$(1D65)_{16}$",
    ],
    optionRationales: [
      null,
      "$(1C66)_{16}$ has the second digit wrong. The group $1101$ converts to $D$, not $C$. $C$ would be $1100$.",
      "$(1E66)_{16}$ has the second digit wrong. The group $1101$ converts to $D$, not $E$. $E$ would be $1110$.",
      "$(1D65)_{16}$ has the last digit wrong. The rightmost group $0110$ converts to $6$, not $5$. $5$ would be $0101$.",
    ],
    correct: 0,
    explanation: "## Groups of Four\n\nConvert $(1110101100110)_2$ to hexadecimal by grouping the bits into fours from the right:\n\n$$1\\\\ |\\\\ 1101\\\\ |\\\\ 0110\\\\ |\\\\ 0110$$\n\nEach group converts to one hex digit:\n\n$$1 = 1, \\quad 1101 = D, \\quad 0110 = 6, \\quad 0110 = 6$$\n\nReading left to right: $(1D66)_{16}$.\n\nThe leftmost group is a single $1$ because the total bit count is $13$, which is not a multiple of four. When converting binary to hex, the leftmost group may be short and is typically padded with leading zeros to make it a full four-bit group. Padding $1$ to $0001$ does not change the value, and it makes the conversion table lookup more consistent. In the answer, the hex digit is still $1$.\n\nThis is the same binary number that appeared in an earlier octal example, and it illustrates the relationship between the two shorthand systems. The binary value $(1110101100110)_2$ equals $(14747)_8$ in octal and $(1D66)_{16}$ in hexadecimal. Both represent the same underlying bits — they are simply grouped differently. Octal groups of three, hex groups of four. Neither is more correct than the other, but hex is the modern standard because the four-bit grouping matches the byte boundary.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-007",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "What is the binary representation of the hexadecimal number $(2BA3)_{16}$?",
    options: [
      "$(0010101110100010)_2$",
      "$(0010101111000011)_2$",
      "$(0010101110100111)_2$",
      "$(0010101110100011)_2$",
    ],
    optionRationales: [
      "$(0010101110100010)_2$ has the last digit wrong. The hex digit $3$ is $0011$, not $0010$.",
      "$(0010101111000011)_2$ has the third digit wrong. The hex digit $A$ is $1010$, not $1100$.",
      "$(0010101110100111)_2$ has the last digit wrong. The hex digit $3$ is $0011$, not $0111$.",
      null,
    ],
    correct: 3,
    explanation: "## Each Digit Expands\n\nConvert $(2BA3)_{16}$ to binary by expanding each hex digit into its four-bit pattern and concatenating:\n\n$$2 = 0010, \\quad B = 1011, \\quad A = 1010, \\quad 3 = 0011$$\n\nConcatenating: $(0010\\\\ 1011\\\\ 1010\\\\ 0011)_2$.\n\nThe leading zeros matter in this expansion. Each hex digit must produce exactly four binary digits, even if the digit is small enough that its binary representation would normally be shorter. The digit $2$, for example, is written as $10$ in normal binary notation, but as a hex digit it must expand to $0010$ — four bits, not two. The padding keeps the boundaries between digits aligned, which is the entire point of the shortcut.\n\nThe result is a sixteen-bit binary number, which matches the fact that four hex digits represent sixteen bits (two bytes). This alignment is what makes hex↔binary conversion so useful in practice. A programmer who sees a hex value can immediately know how many bytes it represents — two hex digits per byte. And a programmer who has a binary value can compress it to hex without any arithmetic, just a lookup table and careful grouping.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-008",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "What is the binary representation of the octal number $(473)_8$?",
    options: [
      "$(100111010)_2$",
      "$(110111011)_2$",
      "$(100110011)_2$",
      "$(100111011)_2$",
    ],
    optionRationales: [
      "$(100111010)_2$ has the last digit wrong. The octal digit $3$ is $011$, not $010$.",
      "$(110111011)_2$ has the first digit wrong. The octal digit $4$ is $100$, not $110$.",
      "$(100110011)_2$ has the middle digit wrong. The octal digit $7$ is $111$, not $110$.",
      null,
    ],
    correct: 3,
    explanation: "## Each Digit Triples\n\nConvert $(473)_8$ to binary by expanding each octal digit into its three-bit pattern and concatenating:\n\n$$4 = 100, \\quad 7 = 111, \\quad 3 = 011$$\n\nConcatenating: $(100\\\\ 111\\\\ 011)_2$.\n\nEach octal digit must produce exactly three binary digits. The digit $3$, for example, is written as $11$ in normal binary notation, but as an octal digit it must expand to $011$ — three bits, not two. The padding keeps the digit boundaries aligned.\n\nThe result is a nine-bit binary number, which matches the fact that three octal digits represent nine bits. This is the octal equivalent of the byte alignment that makes hex so useful for byte-oriented data. Octal aligns with three-bit groups, which were the natural groupings in early computing but are less common today.\n\nConversion in either direction — octal to binary or binary to octal — is fully mechanical. The only tool required is the mapping between digits and bit patterns. Once that mapping is memorized, the conversion is faster than any arithmetic method, and it is essentially error-free because there is nothing to calculate.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-009",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "Why does the shortcut method not work when converting between binary and decimal?",
    options: [
      "Because $10$ is not a power of two",
      "Because binary numbers are longer than decimal",
      "Because decimal was invented before binary",
      "Because decimal uses a different digit set",
    ],
    optionRationales: [
      null,
      "Length is a symptom of the base difference, not the cause. The shortcut fails because of the mathematical relationship between the bases, not because binary representations happen to be longer.",
      "The order of invention has no mathematical consequence. What matters is whether the bases are related by a power relationship.",
      "Digit sets are a consequence of the base, not a separate property. Every base-$r$ system uses digits from $0$ to $r - 1$.",
    ],
    correct: 0,
    explanation: "## Ten Is Not a Power of Two\n\nThe shortcut works between bases related by a power relationship. Binary ($2$) and octal ($2^3$) are related by a power — the ratio is $2^3 / 2 = 2^2 = 4$ in exponential terms, and one octal digit maps to exactly three binary digits. Binary and hexadecimal ($2^4$) have the same relationship. But binary and decimal have no such relationship: **$10$ is not a power of two**, and there is no fixed number of binary digits that maps to one decimal digit.\n\nConsider the decimal digit $1$. In binary, it is $1$ — one digit. The decimal digit $2$ is $10$ — two binary digits. The decimal digit $5$ is $101$ — three binary digits. The number of binary digits needed to represent a decimal digit varies from one to four depending on the specific digit. There is no fixed mapping.\n\nBecause of this, converting between binary and decimal requires actual arithmetic — the sum-of-weighted-digits formula. There is no shortcut. Every binary-to-decimal or decimal-to-binary conversion must be done by calculation, and the answer cannot be checked by simple grouping. This is one of the reasons hexadecimal is used so heavily in computing: it provides a direct shortcut to and from binary, while decimal requires arithmetic. A programmer who has to inspect binary data does not want to convert every value to decimal; they want a shorthand that they can read at a glance. Hex is that shorthand.",
    status: "approved"
  },

  {
    id: "CS110-T1-U4-4.9-010",
    mainTopic: "Unit 4: Data Representation",
    topic: "4.9 Binary ↔ Octal/Hex Shortcut",
    q: "When converting octal to binary, what must be done to each octal digit?",
    options: [
      "Convert the digit to decimal first",
      "Divide the digit by $2$ until it becomes zero",
      "Multiply the digit by $8$",
      "Expand the digit into exactly three binary digits",
    ],
    optionRationales: [
      "Converting to decimal first would require calculation, which defeats the purpose of the shortcut. The whole point is to skip the intermediate step.",
      "Division by $2$ is the method for converting decimal to binary. The shortcut from octal avoids any such step.",
      "Multiplying by $8$ would produce a larger value, not a binary representation. The shortcut uses no arithmetic.",
      null,
    ],
    correct: 3,
    explanation: "## Three Bits for Every Digit\n\nEach octal digit expands into **exactly three binary digits**. This is the rule, and it is the only rule. No arithmetic is required — the conversion is a lookup.\n\nThe mapping covers every octal digit from $0$ through $7$:\n\n$$0 = 000, \\quad 1 = 001, \\quad 2 = 010, \\quad 3 = 011$$\n$$4 = 100, \\quad 5 = 101, \\quad 6 = 110, \\quad 7 = 111$$\n\nWhen converting a multi-digit octal number, each digit is expanded independently and the results are concatenated. For example, $(52)_8$ becomes $(101\\\\ 010)_2$. The digit $5$ expands to $101$; the digit $2$ expands to $010$. The concatenation preserves the position values of the digits — the leftmost octal digit remains the most significant, and the rightmost remains the least significant.\n\nThe word *exactly* is important. Every octal digit produces three binary digits, not one, not two, not four. The digit $1$ must be written as $001$, not as $1$. The padding keeps the boundaries aligned between octal digits and their binary equivalents. Without padding, a multi-digit octal number would produce a binary string whose grouping was ambiguous, defeating the purpose of the shortcut. The padding is what preserves the direct correspondence between octal digit position and binary bit position.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 5 · SOFTWARE  (64 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T1-U5-5.1-001",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What is the fundamental difference between memory and storage?",
    options: [
      "Memory holds files; storage holds programs",
      "Memory is external; storage is internal",
      "Memory is slower; storage is faster",
      "Memory is volatile; storage is nonvolatile",
    ],
    optionRationales: [
      "Both memory and storage hold both files and programs. The difference is not what they hold but what happens to the contents when power is removed.",
      "Both memory and storage can be internal or external. External drives are storage, but they can also be used as extended memory through virtual memory.",
      "Memory is much faster than storage, not slower. The speed difference is precisely why they exist as separate layers.",
      null,
    ],
    correct: 3,
    explanation: "## Two Layers of Data\n\n**Memory** (RAM) is volatile — its contents disappear when power is removed. **Storage** is nonvolatile — its contents persist without electricity. This is the fundamental distinction, and every other difference follows from it.\n\nMemory holds the operating system, running applications, and their current data. It is fast because the processor accesses it directly, but it is small because it is expensive. Storage holds files, programs, and user data across sessions. It is large and cheap, but slower because the processor must retrieve data through additional layers.\n\nThe computer constantly moves data between the two. Loading a file pulls it from storage into memory. Saving pushes it from memory back to storage. The whole architecture is built around the trade-off: fast volatile memory for the working set, slow nonvolatile storage for the persistent set.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-002",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What happens to unsaved data in RAM when the computer loses power?",
    options: [
      "It is permanently lost",
      "It is stored in the BIOS for later retrieval",
      "It is written to the cloud over the network",
      "It is transferred to the hard drive automatically",
    ],
    optionRationales: [
      null,
      "The BIOS is a small ROM chip that holds start-up instructions, not user data. It has no mechanism for capturing RAM contents on power loss.",
      "Cloud transfer requires a network connection and running software. Neither survives a power failure.",
      "Automatic transfer to the hard drive is what virtual memory does under normal operation, but it requires the operating system to still be running. When power is lost, nothing runs.",
    ],
    correct: 0,
    explanation: "## The Volatile Cost\n\nUnsaved data in RAM is **permanently lost** when the computer loses power. This is not a design flaw — it is the direct consequence of what RAM is.\n\nRAM stores each bit as the state of a tiny capacitor. The capacitor holds its charge for only milliseconds, so the memory controller must continuously refresh every cell. This refresh cycle is what makes RAM fast and what makes it volatile. The instant power is removed, the capacitors drain and every bit is erased.\n\nThe consequence is the single most important habit in computing: save frequently. A document held only in RAM exists nowhere else. A crash, a power outage, or a forced restart all erase it with no possibility of recovery. This is why operating systems include autosave features in many applications — they move data from volatile memory to nonvolatile storage before the loss can occur.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-003",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What is storage in the context of computing?",
    options: [
      "A temporary holding area for active data",
      "The case that protects internal components",
      "Long-term access to data and information",
      "The speed of data transfer over a network",
    ],
    optionRationales: [
      "Temporary holding is what memory does. Storage persists across sessions and holds data when nothing is running.",
      "The case is a physical enclosure, not the storage function. A case without a drive contains no data.",
      null,
      "Transfer speed is a network property. Storage is about retention, not bandwidth.",
    ],
    correct: 2,
    explanation: "## Long-Term Hold\n\n**Storage** refers to long-term, permanent access to data and information. A storage medium is nonvolatile — it retains its contents when power is removed, which is what makes it different from memory.\n\nThe category includes a wide range of technologies: magnetic hard drives, solid-state drives, USB flash drives, memory cards, optical discs, and remote cloud storage. What all of them share is the ability to hold data without power. The specific technology determines speed, capacity, cost, and portability, but the defining property is persistence.\n\nStorage matters because the working set of a computer changes constantly. Only a fraction of the data on a machine is actively being used at any moment. Storage holds everything else — documents not currently open, applications not currently running, media not currently playing — and makes it available when the user needs it. Without storage, a computer would forget everything the moment it was turned off.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-004",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What is a storage medium?",
    options: [
      "The software that organizes files into folders",
      "The location where data is kept",
      "The protocol for transferring files between devices",
      "The temporary memory inside the processor",
    ],
    optionRationales: [
      "File management software organizes data within a medium. The medium itself is the physical or remote location where data is held.",
      null,
      "Transfer protocols move data between locations. They are not the locations themselves.",
      "Registers are inside the processor and hold data only for microseconds. A storage medium holds data across sessions.",
    ],
    correct: 1,
    explanation: "## Where Data Lives\n\nA **storage medium** — also called secondary storage — is the location where a computer keeps data for the long term. It is the physical material or remote service that holds the information between sessions.\n\nThe definition covers both physical media (magnetic platters, flash chips, optical discs) and remote media (cloud storage on servers elsewhere). What matters is not the physical form but the persistence: the medium retains its contents when the computer is off, when the session ends, when the user closes the application.\n\nThe phrase *medium* is used because the storage material sits between the raw information and the user. The user does not interact with the medium directly; they interact with files and folders that the operating system presents. The medium is the underlying layer that makes those abstractions possible. Different media have different properties — speed, capacity, cost, durability, portability — and the choice of medium determines what the computer can do.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-005",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What is a storage device?",
    options: [
      "The hardware that reads from and writes to a medium",
      "The software that decides where to save files",
      "The cloud service that stores files remotely",
      "The cable that connects a drive to the motherboard",
    ],
    optionRationales: [
      null,
      "Software decides where to place files, but the storage device is the hardware that actually performs the reading and writing.",
      "Cloud services are remote storage providers, not devices. The device is the local hardware that the user controls.",
      "Cables carry signals between components, but they do not store data. The device is the component that holds and moves data.",
    ],
    correct: 0,
    explanation: "## The Machine That Reads and Writes\n\nA **storage device** is the hardware that reads from and writes to a storage medium. It is the machine; the medium is the material it operates on.\n\nThe distinction matters for clarity. A hard disk drive is the device; the magnetic platters inside it are the medium. An optical disc drive is the device; the disc is the medium. A card reader is the device; the memory card is the medium. The device and the medium are separate components even when they are packaged together and sold as one unit.\n\nThe separation is also practical. The same drive can read and write different media (for example, a card reader that accepts multiple card formats). The same medium can be read and written by different devices (a memory card works in a camera, a laptop, or a dedicated reader). This interchangeability is what makes storage systems so versatile — the user can move data between devices by moving the medium, without needing the same equipment at both ends.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-006",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What is the difference between writing and reading in the context of storage?",
    options: [
      "Writing applies to magnetic media; reading applies to optical media",
      "Writing moves data to storage; reading moves it back to memory",
      "Writing moves data to memory; reading moves it to storage",
      "Writing and reading describe the same operation",
    ],
    optionRationales: [
      "Both operations apply to every storage medium. Magnetic, optical, and flash media all support both reading and writing.",
      null,
      "This reverses the two operations. Writing goes to storage, reading comes from it.",
      "The two are distinct operations, not synonyms. They move data in opposite directions.",
    ],
    correct: 1,
    explanation: "## Two Directions\n\n**Writing** is the process of transferring data from memory to a storage medium. **Reading** is the process of transferring data from storage back into memory. The two operations move data in opposite directions.\n\nThe words reflect the perspective of the storage medium. When the user saves a file, they are writing to the storage. When the user opens a file, they are reading from the storage. The medium itself is passive; the computer decides which direction data flows.\n\nReading and writing are not symmetric in cost. Writing usually takes longer than reading, because the medium must be modified rather than just accessed. On magnetic drives, writing requires physically changing the magnetic orientation of particles on the platter. On flash memory, writing requires erasing a block before it can be rewritten. The asymmetry is why operating systems use caching and buffering — batching writes and delaying them until they are necessary, to reduce the total number of write operations.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-007",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What is the capacity of a storage device?",
    options: [
      "The number of bytes the medium can hold",
      "The speed at which data transfers",
      "The power consumed by the device",
      "The physical weight of the device",
    ],
    optionRationales: [
      null,
      "Transfer speed is a separate specification. Capacity is about how much data fits, not how fast it moves.",
      "Power consumption affects battery life and heat, but not capacity.",
      "Physical weight is unrelated to capacity. A flash drive weighing ten grams may hold more data than an old drive weighing a kilogram.",
    ],
    correct: 0,
    explanation: "## How Much It Holds\n\n**Capacity** is the number of bytes a storage medium can hold. It measures the maximum amount of data that fits before the medium is full.\n\nCapacities are usually stated in powers of ten for marketing purposes and powers of two for technical purposes. A drive advertised as *1 TB* actually holds $10^{12}$ bytes; a drive described as *1 TiB* holds $2^{40}$ bytes, which is about 10% larger. The difference matters at large scales but is invisible for everyday use.\n\nThe progression of capacity follows a common scale. A kilobyte is about a thousand bytes; a megabyte is about a million; a gigabyte is about a billion; a terabyte is about a trillion. Each step is roughly a thousand times larger than the one before. Modern laptops typically ship with 256 GB to 2 TB of storage; phones with 64 GB to 512 GB; enterprise servers with capacities measured in petabytes. The choice of capacity depends entirely on what the user stores — text documents need little, video and photo libraries need much, backups of large systems need enormous amounts.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-008",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "Approximately how many bytes are in a terabyte?",
    options: [
      "One billion",
      "One trillion",
      "One thousand",
      "One million",
    ],
    optionRationales: [
      "One billion bytes is a gigabyte. A terabyte is a thousand times larger still.",
      null,
      "One thousand bytes is a kilobyte, the smallest common unit.",
      "One million bytes is a megabyte. A terabyte is a thousand times larger.",
    ],
    correct: 1,
    explanation: "## Trillion Bytes\n\nA terabyte is approximately **one trillion bytes**. The exact decimal value is $10^{12}$, and the exact binary value is $2^{40} = 1{,}099{,}511{,}627{,}776$ bytes — about 10% larger than the decimal version.\n\nThe progression of storage units follows a scale where each is roughly a thousand times the previous: kilobytes, megabytes, gigabytes, terabytes, petabytes, exabytes, zettabytes, yottabytes. Each step multiplies the previous by roughly $1000$ in decimal notation or by $1024$ in binary notation.\n\nThe unit names come from Greek and Latin roots. *Kilo* means thousand, *mega* million, *giga* billion, *tera* trillion, *peta* quadrillion, *exa* quintillion. This naming is why a terabyte is trillions of bytes while a megabyte is millions — the prefixes have consistent meanings across the metric system, and computing borrowed them directly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-009",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What does access time measure in storage?",
    options: [
      "The number of users who can access the drive at once",
      "The time to locate and deliver an item",
      "The maximum file size the medium accepts",
      "The physical lifespan of the drive",
    ],
    optionRationales: [
      "Concurrent user count is a concurrency specification, not a timing one. Access time is about how long a single operation takes.",
      null,
      "Maximum file size is a formatting constraint, not a timing measurement.",
      "Lifespan is measured in years of operation, not milliseconds. Both are specifications of the drive, but only one is a timing measurement.",
    ],
    correct: 1,
    explanation: "## How Long It Takes\n\n**Access time** measures the amount of time it takes for a storage device to locate an item on a storage medium and deliver it to memory. Both phases are included because both take time.\n\nThe two phases matter for different reasons. Locate time is the delay before data starts arriving — the read head must physically move to the right track, or the flash controller must find the right address. Deliver time is the actual transfer of data at the medium's transfer rate. On magnetic drives, locate time (called *seek time*) is often the dominant factor. On solid-state drives, there are no moving parts, so locate time is essentially the address lookup — microseconds — and deliver time dominates.\n\nAccess time is usually measured in milliseconds on magnetic drives and microseconds on solid-state drives. The difference is roughly a factor of a hundred, which is why an SSD can feel dramatically faster than an HDD even when both are transferring the same amount of data. The bottleneck for many workloads is not the transfer rate but the time spent waiting for data to arrive.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.1-010",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.1 Storage and Memory Uses",
    q: "What is transfer rate in storage?",
    options: [
      "The cost of moving data to the cloud",
      "The speed at which data moves to and from the device",
      "The number of files a drive can hold",
      "The temperature at which the drive runs best",
    ],
    optionRationales: [
      "Cloud migration costs are a billing concern. Transfer rate is a hardware measurement.",
      null,
      "File count is a capacity question, not a speed one. Transfer rate measures how fast bytes move.",
      "Temperature limits affect reliability but are not a transfer specification.",
    ],
    correct: 1,
    explanation: "## Speed of Movement\n\n**Transfer rate** is the speed at which data moves to and from a storage device. It is measured in bytes per second — usually kilobytes per second (KBps), megabytes per second (MBps), or gigabytes per second (GBps).\n\nTransfer rate determines how quickly a file can be opened or saved. A document of 10 MB takes about a tenth of a second to load at 100 MBps, or about a hundredth of a second at 1 GBps. For small files, the difference is imperceptible. For large files — videos, databases, virtual machine images — the transfer rate is often the limiting factor in how long an operation takes.\n\nModern solid-state drives typically deliver transfer rates of 500 MBps to several GBps. Magnetic hard drives top out in the low hundreds of MBps for sequential reads. External USB drives are usually limited by the USB interface — USB 3.0 tops out at 5 Gbps (about 625 MBps), USB 3.2 at 20 Gbps, USB 4 at 40 Gbps. The interface is often the bottleneck rather than the drive itself, which is why the same physical drive can perform very differently on different ports.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-001",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is the primary function of a hard disk drive?",
    options: [
      "To store data on flash memory chips",
      "To hold data only while the computer runs",
      "To connect the computer to a network",
      "To store data magnetically on rotating platters",
    ],
    optionRationales: [
      "Flash memory chips are used in solid-state drives, not in magnetic hard drives. The two are distinct technologies.",
      "Holding data only while the computer runs describes RAM, not a hard disk. Hard drives retain data across sessions.",
      "Network connectivity is a function of the NIC, not of the hard drive.",
      null,
    ],
    correct: 3,
    explanation: "## Magnetic Platters\n\nA **hard disk drive (HDD)** stores data magnetically on one or more rigid, circular platters. The platters spin rapidly while a read/write head hovers over them, changing the magnetic orientation of tiny regions of the surface to record bits.\n\nMultiple platters are common — a modern desktop drive might contain three or four stacked on a single spindle. Each platter has two read/write heads, one for each side. The heads are mounted on a single actuator arm that moves them together across the platter surfaces, so all heads are always at the same radial position.\n\nHDDs have been the standard storage technology for decades because they offer large capacity at low cost per gigabyte. Their weakness is the mechanical nature of the read/write process. The heads must physically move to find data, which takes milliseconds, and the platters are delicate enough that a shock during operation can cause a head crash — the head touches the platter and destroys the surface. Solid-state drives have no moving parts and avoid both weaknesses, which is why they are replacing magnetic drives for most consumer devices, though HDDs remain dominant for large-scale archival storage where cost per terabyte matters more than speed.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-002",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is the purpose of a platter in a hard disk drive?",
    options: [
      "To power the motor that spins the drive",
      "To connect the drive to the motherboard",
      "To move the read/write head across the disk",
      "To provide the surface where data is stored magnetically",
    ],
    optionRationales: [
      "The spindle motor spins the platters, but the platter itself does not generate power. It is a passive storage surface.",
      "Data and power connectors attach to the drive housing, not to the platters. The platters are sealed inside the case.",
      "The read/write head is moved by the actuator arm, not the platter. The platter is the surface being read.",
      null,
    ],
    correct: 3,
    explanation: "## The Magnetic Surface\n\nA **platter** is a rigid disc that stores data magnetically on its surface. It is made of aluminum, glass, or ceramic and is coated with a thin layer of magnetic material. The surface is where the actual bits live.\n\nA platter has two sides, and both are typically used. The read/write head floats a tiny distance above the surface on a cushion of air created by the spinning motion. When the head writes, it magnetizes small regions of the coating in one direction or the other, representing 0 or 1. When it reads, it detects the orientation of those magnetic regions.\n\nThe platter's surface is divided into concentric circles called tracks and wedge-shaped sections called sectors. A single track is thousands of sectors long. The combination of tracks and sectors gives each bit a unique address, so the drive can find and retrieve any specific piece of data on demand. The precision required to address individual sectors on a surface spinning thousands of times per minute is one of the technological achievements that made modern computing possible.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-003",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is longitudinal recording on a magnetic hard disk?",
    options: [
      "Aligning magnetic particles vertically on the disk",
      "Aligning magnetic particles horizontally along the disk surface",
      "Storing data using laser light instead of magnetism",
      "Using multiple heads to read from the same track",
    ],
    optionRationales: [
      "Vertical alignment describes perpendicular recording, a later and denser method.",
      null,
      "Laser reading describes optical media, not magnetic recording. The two technologies are entirely different.",
      "Multiple heads on the same track would be physically impossible on a rigid platter. Heads are positioned at different radial distances, not stacked.",
    ],
    correct: 1,
    explanation: "## Lying Flat\n\n**Longitudinal recording** aligns the magnetic particles horizontally along the surface of the disk. The regions that represent bits lie flat, like magnetic strips painted along the surface.\n\nLongitudinal recording was the standard method in hard drives for decades, but it has a fundamental limit. As engineers tried to pack more data into the same area, adjacent magnetic regions began to interfere with each other. The horizontal orientation left little room before neighbouring bits started to blur together.\n\nThe successor technology, **perpendicular recording**, rotates the particles to stand vertically. Because the particles occupy less horizontal space in this orientation, engineers could pack bits closer together, roughly doubling the maximum density. Perpendicular recording became standard in the mid-2000s and has been the dominant method since. The progression from longitudinal to perpendicular is a good illustration of how advances in storage density often require rethinking the physical arrangement of the storage medium, not just making it smaller.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-004",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is a hard disk drive?",
    options: [
      "A cloud service that stores files remotely",
      "A flash chip that stores data electronically",
      "An optical disc read by a laser",
      "A device with one or more magnetic platters",
    ],
    optionRationales: [
      "Cloud storage is remote; a hard drive is a physical device inside the case.",
      "Flash chips are used in solid-state drives, not magnetic drives. The two are different technologies.",
      "Optical discs are read by laser. Hard drives use magnetic heads, not light.",
      null,
    ],
    correct: 3,
    explanation: "## The Classic Drive\n\nA **hard disk drive (HDD)** is a storage device that contains one or more rigid, circular platters coated with magnetic material. It is the traditional form of computer storage and remains the cheapest way to store large amounts of data.\n\nThe internal structure includes several components working together. Platters spin at speeds measured in thousands of rotations per minute — 5400 RPM in laptops, 7200 RPM in desktops, 15000 RPM in enterprise servers. The read/write heads hover over the platter surfaces, mounted on an actuator arm that moves them together. The entire assembly is sealed inside a rigid case filled with filtered air (or, in some models, helium) to keep dust out of the microscopic gaps between heads and platters.\n\nThe capacity of a hard drive depends on several factors: how many platters it contains, how densely the magnetic particles can be packed, and what recording technique is used. Modern drives achieve several terabytes on a standard 3.5-inch form factor, storing trillions of individual bits on a surface that fits in the palm of your hand.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-005",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is density in the context of magnetic storage?",
    options: [
      "The number of bits stored per unit of surface area",
      "The rotation speed of the platters",
      "The number of platters in the drive",
      "The weight of the drive relative to its volume",
    ],
    optionRationales: [
      null,
      "Rotation speed affects access time but not density. Faster spinning does not increase how many bits fit on the surface.",
      "Platter count affects total capacity, but density is measured per unit area. Two drives with different platter counts can have the same density.",
      "Physical weight is unrelated to storage density. Density measures data, not mass.",
    ],
    correct: 0,
    explanation: "## Packed Tightly\n\n**Density** is the number of bits stored per unit of surface area on a magnetic storage medium. Higher density means more data fits in the same physical space.\n\nDensity has increased by many orders of magnitude since the first hard drives. The original IBM RAMAC from 1956 stored about 5 million bits on a 24-inch diameter stack of 50 platters. A modern 3.5-inch drive stores trillions of bits on a single platter. The improvement is roughly a factor of a million in areal density over six decades.\n\nDensity is improved by refining three things: the composition of the magnetic coating, the alignment of the particles (longitudinal versus perpendicular), and the precision of the read/write head. Each improvement lets the drive read and write smaller magnetic regions without losing the ability to distinguish them. The limit is the superparamagnetic effect — at some point, magnetic regions become so small that thermal energy alone can flip their orientation, causing data to spontaneously corrupt. Engineers work around this with techniques like heat-assisted magnetic recording (HAMR), which momentarily heats the region during writing to make it easier to magnetize while remaining stable at room temperature.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-006",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What does formatting a disk accomplish?",
    options: [
      "It divides the disk into tracks and sectors",
      "It encrypts the disk contents for security",
      "It backs up the disk to a remote server",
      "It permanently erases all data on the disk",
    ],
    optionRationales: [
      null,
      "Encryption is a separate operation that can be applied after formatting. The two are independent.",
      "Backup is a separate operation. Formatting prepares a disk for use; backup preserves data elsewhere.",
      "Formatting does erase data, but that is a side effect, not the purpose. The purpose is to establish the structure that makes future reads and writes possible.",
    ],
    correct: 0,
    explanation: "## Laying Out the Grid\n\n**Formatting** divides the disk into **tracks** and **sectors**. It is the process of establishing the physical layout that allows the drive to find and store data at specific addresses.\n\nA track is one of the concentric circles on the surface of a platter. Tracks are numbered from the outside inward. Each track is divided into wedge-shaped sections called sectors. Traditionally, a sector holds 512 bytes; modern drives use 4096-byte sectors for efficiency. Each sector has a unique address — its track number and its position within that track — that the drive uses to locate it.\n\nFormatting also creates the file system structures the operating system needs to organize files: a directory table, allocation maps, and metadata about each file. Without formatting, a disk is just raw magnetic surface with no meaningful structure. The operating system would have no way to know where one file ends and the next begins. Once formatting is complete, the drive can be mounted and used like any other storage device.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-007",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is a sector on a magnetic disk?",
    options: [
      "The entire platter surface",
      "A wedge-shaped division of a track",
      "The read/write head assembly",
      "A complete circle around the platter",
    ],
    optionRationales: [
      "The platter surface contains thousands of tracks and millions of sectors. It is far larger than one sector.",
      null,
      "The read/write head is the device that reads sectors. It is not the same as a sector, which is the storage location being read.",
      "A complete circle is a track. A sector is a segment of a track, not the whole track.",
    ],
    correct: 1,
    explanation: "## The Wedge\n\nA **sector** is a wedge-shaped segment of a track. The tracks on a disk are divided radially into many small sectors, each of which can hold a fixed amount of data.\n\nThe traditional sector size is 512 bytes, though modern drives use 4096 bytes to improve efficiency. The drive addresses each sector by combining its track number with its position around the track. To read a specific sector, the drive spins the platter until the correct track is under the head, then waits until the correct sector rotates into position, then reads the magnetic pattern.\n\nThe addressing scheme matters for performance. When the operating system reads a file, it does not read individual bytes — it reads entire sectors. A file that is 1000 bytes will occupy two 512-byte sectors, wasting 24 bytes of space in the second sector. Modern file systems use cluster sizes (groups of sectors) to reduce this waste, but the underlying unit is still the sector. All storage management ultimately comes down to placing files into sectors and remembering which sectors belong to which file.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-008",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What does the read/write head do in a hard disk drive?",
    options: [
      "It reads and writes data on the platter surfaces",
      "It cools the drive during operation",
      "It connects the drive to the power supply",
      "It physically spins the platters",
    ],
    optionRationales: [
      null,
      "Cooling is passive and relies on airflow through the case. The head is a sensing and writing component, not a cooling one.",
      "Power connection is handled by the drive's connector, not by the head. The head transmits data signals, not power.",
      "Spinning the platters is the job of the spindle motor. The head does the reading and writing.",
    ],
    correct: 0,
    explanation: "## The Reading Tip\n\nA **read/write head** is the component that actually reads data from and writes data to the platters. Each platter surface has its own dedicated head, and all heads move together on a single actuator arm.\n\nThe head works magnetically, not optically. When reading, it detects the magnetic orientation of the regions it passes over, translating those orientations into electrical signals that become bits. When writing, it changes the magnetic orientation of small regions to record bits. The head does not touch the platter during normal operation — it floats a few nanometres above the surface on a cushion of air created by the spinning motion. This air bearing is why dust and shocks are so dangerous to a hard drive: a particle smaller than a grain of dust can be larger than the gap between head and platter.\n\nModern heads are engineered with extraordinary precision. Read heads use a phenomenon called giant magnetoresistance (GMR) that changes electrical resistance based on magnetic field direction — sensitive enough to read magnetic regions only a few atoms wide. Write heads use the opposite effect, generating a focused magnetic field to flip the orientation of tiny regions. The engineering that goes into a single read/write head represents decades of research in materials science and electromagnetics.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-009",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What happens to the read/write head during normal operation of a hard disk drive?",
    options: [
      "It stays stationary while the platters move underneath",
      "It rotates with the platters at the same speed",
      "It floats above the platter on a cushion of air",
      "It makes direct physical contact with the platter",
    ],
    optionRationales: [
      "The head moves radially across the platter surfaces to reach different tracks. It does not stay stationary.",
      "The head does not rotate with the platters. It is mounted on an actuator arm that pivots to position it over the correct track.",
      null,
      "Direct contact is a head crash — a failure, not normal operation. During normal use the head never touches the platter.",
    ],
    correct: 2,
    explanation: "## Riding on Air\n\nThe read/write head **floats above the platter** during normal operation, supported by a cushion of air created by the spinning platters. The gap between head and platter is measured in nanometres — a tiny fraction of the width of a human hair.\n\nThe air bearing is what makes hard drives possible. If the head touched the platter, friction would quickly destroy both components. The floating motion eliminates wear on the head and platter during operation, which is why a well-cared-for hard drive can run for years without degrading.\n\nThe system is fragile. If the drive is dropped or bumped while spinning, the head can strike the platter — a **head crash**. The impact scrapes away the magnetic coating, destroying the data in that region and usually sending debris that damages the rest of the surface. Modern drives park the heads in a safe zone when power is removed, so a stationary drive is much more resilient to shocks than one that is running. This is why laptop drives have accelerometers that detect falls and park the heads before impact, and why solid-state drives — which have no moving parts — are preferred for portable devices.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-010",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is the main advantage of a solid-state drive over a magnetic hard drive?",
    options: [
      "Higher capacity per dollar",
      "No moving parts, making it faster and more durable",
      "Compatibility with optical media",
      "Lower power consumption than flash memory",
    ],
    optionRationales: [
      "SSDs cost more per gigabyte, not less. HDDs are still cheaper for bulk storage.",
      null,
      "Neither SSDs nor HDDs handle optical media. Optical drives are a separate component.",
      "SSDs use flash memory, so they cannot consume less power than flash memory — they are flash memory, packaged as a drive.",
    ],
    correct: 1,
    explanation: "## No Moving Parts\n\nA **solid-state drive (SSD)** has no moving parts. It stores data in flash memory chips, which hold their contents using electrical charge rather than magnetic orientation. The absence of moving parts is standard teaching of nearly every advantage SSDs have over HDDs.\n\nSpeed is the most visible difference. HDDs take milliseconds to locate a sector because the head has to physically move; SSDs take microseconds because there is no physical motion — just an address lookup. The result is that an SSD can feel five to ten times faster than an HDD for everyday tasks like launching applications, loading a game, or booting the operating system.\n\nDurability is the second advantage. Without a fragile head floating above a spinning platter, an SSD can survive drops that would destroy a hard drive. This is why SSDs are standard in laptops, tablets, and phones, where the device is expected to move around.\n\nThe trade-off is cost per gigabyte. Flash memory is more expensive to manufacture than magnetic media, so an SSD of a given capacity costs more than an equivalent HDD. Many computers now pair the two: an SSD for the operating system and applications, and an HDD for bulk storage of photos, videos, and archives.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-011",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is an external hard drive used for?",
    options: [
      "Providing backup power during a power outage",
      "Cooling the internal components of a desktop",
      "Replacing the internal drive in a computer",
      "Adding extra storage capacity when the internal drive is full",
    ],
    optionRationales: [
      "Backup power is provided by a UPS, not an external drive. The two are entirely different devices.",
      "Cooling is passive and relies on fans and heat sinks. External drives generate heat and do not remove it from other components.",
      "An external drive can theoretically hold an operating system, but it is not designed to replace the internal drive. The purpose is expansion, not substitution.",
      null,
    ],
    correct: 3,
    explanation: "## Plug-In Expansion\n\nAn **external hard drive** is a storage device that connects to the computer from the outside, usually through a USB port. Its primary purpose is to add capacity when the internal drive is full or when data needs to be portable.\n\nExternal drives solve a common problem. Laptops in particular have limited internal storage and often cannot be upgraded — many modern laptops seal the drive inside the case with no user-accessible slot. An external drive provides additional capacity without opening the machine. It appears in the file system as another drive, and files can be moved or copied to it like any other location.\n\nExternal drives are also the most common first backup. Copying important files to an external drive protects against the most frequent data-loss events: accidental deletion, ransomware, and internal drive failure. A backup on an external drive is independent of the primary machine, so a failure in the computer does not affect the backup. This is why the standard backup advice is to have copies in multiple locations, with at least one copy on a device that is not always connected to the computer.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-012",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "Which of the following is an example of optical media?",
    options: [
      "An SD card",
      "A USB flash drive",
      "An external hard drive",
      "A DVD",
    ],
    optionRationales: [
      "SD cards use flash memory, like USB drives. They are not optical media.",
      "USB flash drives use flash memory, not optical technology. The two are distinct storage media.",
      "External hard drives use magnetic recording, not lasers. They are a different category.",
      null,
    ],
    correct: 3,
    explanation: "## Laser-Read Discs\n\n**Optical media** are storage media read by a laser. The category includes **CDs, DVDs, and Blu-ray discs** — all of them flat, round discs that encode data as microscopic pits and lands on a reflective surface.\n\nThe read process works by shining a laser at the disc and detecting how the reflection changes. Where there is a pit, the reflection is different from where there is a land. The pattern of reflections becomes the data. A CD holds about 700 MB; a single-layer DVD holds about 4.7 GB; a single-layer Blu-ray holds about 25 GB. The progression reflects the increasing miniaturization of the laser wavelength — a shorter wavelength can read smaller pits, so more data fits on the same disc size.\n\nOptical media were once the standard for distributing software, music, and movies. That role has largely been replaced by downloads and streaming, and by USB flash drives for physical transfer. Modern laptops rarely include optical drives, and desktop optical drives are increasingly optional. The technology still exists — Blu-ray discs remain useful for high-quality film distribution and for archival storage — but its importance in everyday computing has declined significantly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-013",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is the purpose of a USB flash drive?",
    options: [
      "To transport files between computers conveniently",
      "To provide remote access to files",
      "To store data on magnetic platters",
      "To read optical discs",
    ],
    optionRationales: [
      null,
      "Remote file access is provided by cloud services, not USB drives. The two are different approaches to mobility.",
      "Magnetic platters are inside hard disk drives. USB flash drives use flash memory instead.",
      "Optical disc reading is done by disc drives, not USB drives. The two are separate devices.",
    ],
    correct: 0,
    explanation: "## Plug and Carry\n\nA **USB flash drive** is a small, portable storage device that plugs into a USB port. Its primary purpose is to **transport files** between computers conveniently — it is the modern equivalent of the floppy disk, but with capacities that are thousands of times larger.\n\nThe technology is flash memory: no moving parts, nonvolatile, and fast enough for most everyday transfers. A USB drive can hold anywhere from a few gigabytes to several terabytes. It works on almost any computer made in the last twenty years, without needing drivers or setup. The portability is the point — the drive fits on a keychain and can be carried anywhere.\n\nThe USB drive has largely replaced optical discs as the standard portable medium. Where a CD-R once held 700 MB, a USB drive now holds thousands of times more. The drive is also rewritable, which means it can be reused indefinitely, unlike a CD-R that can be written only once. This combination of capacity, portability, and reusability is why USB drives are the default choice for moving files between machines that are not connected to the same network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.2-014",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.2 Storage Hardware",
    q: "What is the defining feature of a solid-state drive (SSD)?",
    options: [
      "It requires external power to retain data",
      "It contains spinning magnetic platters",
      "It uses flash memory chips with no moving parts",
      "It can only be used for portable devices",
    ],
    optionRationales: [
      "SSDs are nonvolatile — they retain data without power. Requiring external power would make them unusable for storage.",
      "Spinning platters describe a magnetic hard drive, not an SSD. The two are different technologies.",
      null,
      "SSDs are used in desktops, laptops, servers, and phones. The technology is not limited to portable devices.",
    ],
    correct: 2,
    explanation: "## No Moving Parts\n\nA **solid-state drive (SSD)** stores data in **flash memory chips** and contains no moving parts. The name *solid state* is borrowed from electronics: a solid-state device uses semiconductors instead of mechanical components.\n\nThe absence of moving parts is standard teaching of the SSD's advantages. Without a head to position and a platter to spin, access times drop from milliseconds to microseconds. The drive becomes silent because there is nothing to hear. It becomes more durable because there is nothing to break. And it becomes more energy-efficient because there is no motor drawing current.\n\nThe storage mechanism is electrical, not magnetic. Each flash cell holds a charge that represents a bit; the presence or absence of charge is read as 1 or 0. Unlike RAM, flash memory is nonvolatile — it holds its contents without power. This is what allows SSDs to serve as permanent storage, replacing the hard drives of previous generations. The same technology appears in USB drives, memory cards, phones, and tablets. What distinguishes an SSD is its packaging: the flash chips are arranged in a drive-sized enclosure with a controller that manages the memory and presents it to the operating system as a standard storage device.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-001",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "What is cloud storage?",
    options: [
      "An internal drive that stores data magnetically",
      "A local folder that automatically compresses large files",
      "Storing files on remote servers accessed through the Internet",
      "A removable drive that plugs into a USB port",
    ],
    optionRationales: [
      "An internal drive is inside the user's machine. Cloud storage lives in a data centre the user may never see.",
      "A local folder is on the user's own computer. Cloud storage is on someone else's computer, reached through a network.",
      null,
      "A removable USB drive is physical and locally attached. Cloud storage is remote and accessed over the Internet.",
    ],
    correct: 2,
    explanation: "## Files on Someone Else's Server\n\n**Cloud storage** stores files on **remote servers** accessed through the Internet. The files do not live on the user's device; they live in a data centre owned by the storage provider.\n\nThe metaphor of the *cloud* is misleading in a useful way. The files are not floating in the sky; they are on physical machines, in physical buildings, connected to the same electrical grid as everything else. The metaphor works because the user does not need to know which server holds a given file or where that server is located. The storage appears to be everywhere because it is reachable from anywhere with a connection.\n\nThe advantages are accessibility and durability. Files in the cloud can be reached from any device with an Internet connection, without copying them first. And because providers replicate their storage across multiple servers, a single hardware failure does not destroy the data. The disadvantages are the dependence on network access and the trust placed in the provider. Without a connection, the files are unreachable. And the user has no physical control over the servers where their data lives.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-002",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "What is required to access files stored in the cloud?",
    options: [
      "A cable connecting directly to the server",
      "A password reset from the provider every month",
      "A device with an Internet connection",
      "A special app installed on the user's device",
    ],
    optionRationales: [
      "A cable to a remote server would be impossible for cloud servers on another continent. The connection is logical, not physical.",
      "Passwords are set once and used repeatedly. Monthly resets would be an unusual and unnecessary requirement.",
      null,
      "Many cloud services work through a standard web browser without any app. The app is convenient but not required.",
    ],
    correct: 2,
    explanation: "## Just a Connection\n\nThe only requirement for accessing cloud storage is **a device with an Internet connection**. Any device that can reach the network — phone, tablet, laptop, desktop — can access cloud files, usually through a web browser or a provider app.\n\nThe low barrier is the point. Cloud storage does not require installing hardware, configuring software, or maintaining servers. A user who signs up today can access their files from a borrowed computer tomorrow, from a phone next week, and from a desktop at home the following month. The files follow the user rather than the device.\n\nThe trade-off is dependency on the network. Local storage works offline; cloud storage requires a connection. This is why modern cloud systems often include **offline caching** — a local copy of recently accessed files kept on the device. When the network is available, the cache syncs with the remote copy. When it is not, the user can still work with the cached files. The cache bridges the two worlds, providing the accessibility of the cloud without the complete dependency on network availability.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-003",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "What is cloud computing?",
    options: [
      "A type of encryption applied to online communications",
      "A programming language used for server applications",
      "A system with a front end and a back end connected by a network",
      "A way of storing files only on the local drive",
    ],
    optionRationales: [
      "Encryption is a security layer that can be applied to cloud services, but it is not what cloud computing is.",
      "A programming language is a tool used to build cloud services, not the services themselves.",
      null,
      "Local storage is the opposite of cloud computing. The whole point of cloud computing is that the resources are remote.",
    ],
    correct: 2,
    explanation: "## Front End and Back End\n\n**Cloud computing** is a system with two parts: a **front end** that the user interacts with and a **back end** that provides the actual services. The two are connected by a network.\n\nThe front end is what the user sees — the browser, the app, the interface. It runs on the user's device and sends requests to the back end. The back end is the collection of servers, storage devices, and software that fulfil those requests. It runs in a data centre, owned and maintained by the cloud provider.\n\nThe separation is what gives cloud computing its flexibility. The user's device does not need to be powerful, because the heavy computation happens on the back end. The user's storage does not need to be large, because the files live on the back end. The user's location does not matter, because the front end can be anywhere with a network connection. This model has reshaped the computing industry over the past two decades, moving the centre of gravity from individual devices to centralised data centres that serve millions of users at once.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-004",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "Which of the following is a reason home users choose cloud storage?",
    options: [
      "It allows access to files from any connected device",
      "It prevents data from ever being lost",
      "It provides guaranteed offline access to all files",
      "It eliminates the need for any local storage",
    ],
    optionRationales: [
      null,
      "No storage system prevents all data loss. Corruption, provider failures, and account issues can all result in loss even with cloud backup.",
      "Cloud storage requires an Internet connection to reach the remote servers. Offline access is possible only if the provider supports caching.",
      "Local storage is still needed for the operating system, applications, and cache. Cloud storage adds to local storage rather than replacing it.",
    ],
    correct: 0,
    explanation: "## Access from Anywhere\n\nThe primary reason home users choose cloud storage is **accessibility** — the ability to reach files from any connected device. A document saved to a cloud service from a laptop at home is immediately available on a phone at work, a tablet on a plane, and a shared computer in a hotel lobby.\n\nLocal storage cannot match this. Files on a home desktop are only on the home desktop. Files on a work laptop are only on the work laptop. Accessing the same file from two devices requires copying it between them or storing it somewhere both can reach — which is exactly what the cloud provides.\n\nThe other benefits follow from the first. Cloud providers replicate files across multiple servers, which means a single hardware failure does not destroy the data. Cloud accounts can be shared between family members or team members, with permissions controlling who sees what. And cloud services often include versioning, letting users recover previous versions of a file if they accidentally change something. Each of these features depends on the fundamental property of the cloud: the files are somewhere the user is not, reachable from anywhere the user is.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-005",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "In cloud computing, what does the back end consist of?",
    options: [
      "The user's device and its operating system",
      "The apps that run on the user's phone",
      "The browser the user opens to access files",
      "The servers and storage devices that host the data",
    ],
    optionRationales: [
      "The user's device is also part of the front end. Its operating system and hardware are what the user controls.",
      "Client apps run on the user's device and are part of the front end. The back end is on the provider's side.",
      "The browser is part of the front end — it is what the user sees and interacts with.",
      null,
    ],
    correct: 3,
    explanation: "## Behind the Scenes\n\nThe **back end** of cloud computing consists of the **servers and storage devices** that actually host the data and perform the processing. These live in data centres owned and maintained by the cloud provider.\n\nThe back end is where all the heavy lifting happens. It stores the user's files, runs the user's requests, and manages access control, encryption, and backups. When a user opens a document stored in the cloud, the request goes to the back end; the back end retrieves the file, applies any format conversions, and sends the rendered result back to the user's device. The user sees a document; the back end did all the work.\n\nFrom the user's perspective, the back end is invisible. The user cannot see the servers, cannot control which one their data lives on, and cannot directly access the hardware. The provider handles all of that. This abstraction is the value of the cloud — the user does not need to be a system administrator to benefit from enterprise-grade infrastructure.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-006",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "What does IaaS stand for in cloud computing?",
    options: [
      "Infrastructure as a Service",
      "Integration as a Service",
      "Internet as a Service",
      "Information as a Service",
    ],
    optionRationales: [
      null,
      "Integration is a different concept. IaaS is about providing foundational infrastructure, not integrating systems.",
      "Internet as a Service is not a standard cloud term. The I in IaaS stands for Infrastructure.",
      "Information as a Service is not a recognized category. The A in IaaS stands for as.",
    ],
    correct: 0,
    explanation: "## Infrastructure as a Service\n\n**IaaS** stands for **Infrastructure as a Service**. It is one of the standard cloud service models, alongside SaaS (Software as a Service), PaaS (Platform as a Service), and other variants like STaaS (Storage as a Service) and DaaS (Data as a Service).\n\nThe models differ in how much of the stack the provider manages and how much the customer manages. **IaaS** provides raw infrastructure — virtual machines, storage, and networking — and the customer installs their own operating system, applications, and data. **PaaS** provides a managed platform with the operating system already installed, so the customer focuses on their application. **SaaS** provides a fully working application, and the customer just uses it.\n\nThe choice between models depends on how much control the customer needs. A business that wants to run custom software with specific configurations will choose IaaS. A business that wants to deploy code without managing servers will choose PaaS. An individual who wants to use email or an office suite will choose SaaS. Each model trades control for convenience in a different way.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-007",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "What is the primary difference between Google Drive and Box?",
    options: [
      "Drive works only on Windows; Box works on any system",
      "Drive stores files locally; Box stores them remotely",
      "Drive includes built-in apps; Box focuses on storage",
      "Drive is free; Box requires payment for any use",
    ],
    optionRationales: [
      "Both services work across operating systems and browsers. Neither is limited to a single platform.",
      "Both services store files remotely. The difference is what you can do with the files after they are stored.",
      null,
      "Both services have free tiers and paid tiers. The difference is not which requires payment, but what features are available.",
    ],
    correct: 2,
    explanation: "## Apps vs Storage\n\nThe difference between Google Drive and Box is that **Drive includes a full suite of built-in applications** — Docs, Sheets, Slides — that run inside the cloud and let users edit files without leaving the browser. **Box focuses primarily on storage**, offering fewer integrated apps and positioning itself more as a secure file repository.\n\nThe distinction matters for how the service is used. A Google Drive user might work entirely inside the Drive ecosystem — writing documents in Docs, building spreadsheets in Sheets, sharing them with collaborators — without ever downloading the files to their local machine. A Box user typically stores files created elsewhere and uses Box to sync them across devices, share them with specific people, and control access.\n\nBoth services fall under the broader category of cloud storage, but the ecosystem differences change what they are good for. Drive is a workspace that happens to store files. Box is a file system that happens to have collaboration features. The right choice depends on whether the user wants an environment to work in or a place to keep things.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-008",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "Why is bandwidth important when choosing a cloud storage provider?",
    options: [
      "It determines the encryption strength of stored files",
      "It determines the monthly cost of the service",
      "It sets the maximum file size the provider accepts",
      "It affects how quickly large files can be transferred",
    ],
    optionRationales: [
      "Encryption strength is a security choice, not a bandwidth question. The two are unrelated.",
      "Cost is determined by the provider's pricing, not by bandwidth. Two providers with the same pricing can have very different bandwidth.",
      "Maximum file size is set by the provider's policies, not by bandwidth. Both can be restrictive in different ways.",
      null,
    ],
    correct: 3,
    explanation: "## Speed for Big Files\n\nBandwidth matters because it **affects how quickly large files can be transferred** to and from the cloud. A file that takes a few seconds to upload with high bandwidth can take hours with low bandwidth.\n\nThe practical impact depends on what the user stores. Text documents and small images transfer quickly even on modest connections. Video files, high-resolution photographs, and large backup archives can be hundreds of megabytes or more, and the transfer time scales linearly with file size divided by available bandwidth. A 4 GB video might take a minute on a fibre connection and an hour on a slow DSL line.\n\nThe bandwidth of the provider's servers also matters, not just the user's connection. A provider with fast servers can accept uploads faster than a provider with slow ones, even if the user's connection is identical. This is why checking a provider's reputation for transfer speed is part of the evaluation — a cheap storage service with slow servers can be worse than a more expensive service that responds quickly. The bandwidth metric measures the entire path from user to storage, not just the last mile.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-009",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "Which of the following is a recommended guideline when selecting a cloud storage provider?",
    options: [
      "Prefer providers with no mobile apps",
      "Avoid providers with a long business history",
      "Choose the newest company for lower pricing",
      "Verify the provider encrypts your files",
    ],
    optionRationales: [
      "Mobile apps are a feature, not a defect. Preferring providers without them makes access harder, not safer.",
      "A long business history is generally a positive signal. Avoiding established companies would eliminate the most reliable providers.",
      "Newer companies may offer lower prices, but they also have less track record for reliability and may not exist in a few years.",
      null,
    ],
    correct: 3,
    explanation: "## Check the Basics\n\nOne recommended guideline is to **verify that the provider encrypts your files**. Encryption protects the data even if the provider's servers are compromised — without the decryption key, the data is unreadable.\n\nThe full set of guidelines covers several dimensions. A reputable provider with a long track record is preferable to an unknown startup. Compatibility with the user's devices matters, since a service that does not work on the user's phone is of limited value. The price of storage plans should be compared, since costs can vary widely for the same capacity. The provider should support the types of files the user wants to store — some services restrict or process certain formats. And a mobile app is a convenience that most users will miss if it is absent.\n\nEncryption is listed first because it is the security dimension. Without it, a breach of the provider's servers exposes the user's data. With it, even a full breach leaves the attacker with nothing usable. Some providers encrypt data only during transfer; others encrypt it at rest as well. Both are useful, but encryption at rest is the stronger guarantee because it protects data that is sitting on the servers, not just data moving over the network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.3-010",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.3 Cloud Storage",
    q: "Which of the following is a recommended step for securing cloud-based data?",
    options: [
      "Enabling two-factor authentication on your account",
      "Disabling encryption to improve search performance",
      "Using the default privacy settings for simplicity",
      "Reusing one password across all cloud accounts",
    ],
    optionRationales: [
      null,
      "Disabling encryption removes the protection that makes stored data unreadable in case of a breach.",
      "Default settings are the least secure; they are designed to work for everyone, not to protect a specific user's data.",
      "Reusing passwords means one breach exposes every account. The risk is far higher than the convenience.",
    ],
    correct: 0,
    explanation: "## Two Layers of Defence\n\nEnabling **two-factor authentication (2FA)** is one of the strongest steps a user can take to secure cloud data. With 2FA, a login requires both a password and a second factor — usually a code sent to the user's phone or generated by an authenticator app. An attacker who steals the password still cannot log in without the second factor.\n\nThe full list of recommended security practices includes several others. Use strong passwords and never reuse them across services, because a breach at one provider should not compromise accounts elsewhere. Enable the most advanced privacy settings the service offers, since defaults are designed for the average user, not for maximum security. Read the user agreement to understand how the provider handles data. And store sensitive data only after verifying that the provider encrypts it.\n\nThe combination is more effective than any single measure. A strong password protects against guessing; 2FA protects against password theft; encryption protects against server breaches; and privacy settings reduce the surface area for attacks. Each layer addresses a different threat, and together they provide defence in depth. A user who skips any one of them accepts a specific risk that the others do not cover.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-001",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What distinguishes enterprise hardware from consumer hardware?",
    options: [
      "It is designed for heavy use and continuous availability",
      "It is always more expensive than consumer hardware",
      "It always requires specialized training to operate",
      "It cannot run standard operating systems",
    ],
    optionRationales: [
      null,
      "Cost is a common difference, but it is not the defining one. Some enterprise hardware costs more; some is comparable.",
      "Training is often required, but this is a consequence of complexity, not a defining feature.",
      "Enterprise hardware typically runs the same operating systems as consumer hardware, sometimes with enterprise-specific configurations.",
    ],
    correct: 0,
    explanation: "## Built for Scale\n\n**Enterprise hardware** is designed for the demands of large organizations: heavy use, maximum efficiency, and maximum availability. It is built to run continuously, handle many users at once, and keep working even when components fail.\n\nThe design choices reflect these priorities. Enterprise servers have redundant power supplies — if one fails, another takes over without interruption. They have hot-swappable drives that can be replaced while the system runs. They have error-correcting memory that detects and corrects bit flips caused by cosmic rays or manufacturing defects. They are tested under stricter conditions and carry longer warranties.\n\nA consumer laptop is designed for one user, for hours of use per day, and for a useful life of a few years. An enterprise server is designed for thousands of users, for continuous operation, and for a useful life of many years. The differences are not about raw speed — a consumer gaming PC can be faster than an enterprise server at some tasks. They are about reliability, scalability, and serviceability.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-002",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is redundancy in enterprise storage?",
    options: [
      "Backing up data to a secondary location nightly",
      "Encrypting data to prevent unauthorized access",
      "Duplicating components so one can fail without downtime",
      "Compressing data to reduce storage requirements",
    ],
    optionRationales: [
      "Nightly backup is a separate recovery strategy. Redundancy provides continuous protection, not end-of-day protection.",
      "Encryption protects confidentiality but does not address availability. A well-encrypted system still goes down when a disk fails.",
      null,
      "Compression reduces the amount of storage required but does not protect against failure. It is a space optimization, not a reliability one.",
    ],
    correct: 2,
    explanation: "## A Backup for Every Component\n\n**Redundancy** means duplicating critical components so that if one fails, another can take over without interrupting service. It is the foundation of high availability in enterprise systems.\n\nDifferent components require different redundancy strategies. Power supplies are duplicated so that a failure of one does not cut power to the server. Hard drives are placed in RAID arrays so that a failed drive can be replaced without losing data. Network cards are duplicated so that a cable or switch failure does not disconnect the server. Even fans are often redundant, because a failed fan can cause overheating that destroys components.\n\nThe goal is that no single component failure brings down the system. This is called **fault tolerance** — the ability to continue operating despite failures. The measure is often expressed as the number of nines of availability: 99% is two nines, 99.9% is three nines, and so on. Enterprise systems typically target four or five nines, which means no more than a few minutes of downtime per year. The cost of achieving this increases sharply with each additional nine, which is why not every system justifies the investment.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-003",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is a data centre?",
    options: [
      "A secure facility housing many servers",
      "A single high-end desktop computer for professional work",
      "A network of personal computers in a home",
      "A cloud service used by small businesses",
    ],
    optionRationales: [
      null,
      "A high-end desktop is a workstation, not a data centre. A data centre houses thousands of machines.",
      "A home network is small and unmanaged. A data centre is designed for continuous operation at industrial scale.",
      "A cloud service runs in a data centre, but the data centre is the physical facility, not the service.",
    ],
    correct: 0,
    explanation: "## Where Servers Live\n\nA **data centre** is a facility designed to house many servers. It provides the power, cooling, networking, and physical security that servers need to run continuously without interruption.\n\nThe facility is engineered around three problems. **Power**: a single server might draw hundreds of watts, and a data centre with ten thousand servers draws megawatts. Industrial-scale power distribution, with backup generators and UPS systems, is essential. **Cooling**: servers produce heat, and heat destroys electronics. Data centres use air conditioning on an industrial scale — often pumping cold air under the floor and letting it rise through the racks. **Connectivity**: thousands of servers need connections to the outside world. Data centres sit at the intersection of major fibre routes and connect to multiple Internet providers for redundancy.\n\nThe physical security matters too. Data centres are access-controlled buildings with biometric entry, video surveillance, and staff who are screened. Data stored on the servers is the most valuable asset, and the facility is designed to protect it from every threat — from fire to theft to physical attack. When a company says its service is 'in the cloud,' this is the reality behind the metaphor: a heavily engineered building somewhere, with its own power grid, cooling plant, and security team.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-004",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is a RAID?",
    options: [
      "A single high-capacity external drive",
      "A cloud subscription for enterprises",
      "A group of integrated hard drives working as one",
      "A type of disk encryption algorithm",
    ],
    optionRationales: [
      "A single external drive is one device. A RAID is a group of drives working together.",
      "Cloud subscriptions are remote services. A RAID is on-premise hardware.",
      null,
      "Encryption is a security layer, not a storage architecture. RAID and encryption solve different problems.",
    ],
    correct: 2,
    explanation: "## Many Drives, One Array\n\n**RAID** stands for **Redundant Array of Independent Disks**. It is a system in which two or more hard drives are combined to work as a single logical unit, with redundancy built in to protect against failure.\n\nThe array appears to the operating system as a single drive, but under the hood there are multiple physical drives cooperating. Different RAID levels balance the three goals differently. **RAID 0** (striping) splits data across drives for speed but provides no redundancy — if any drive fails, everything is lost. **RAID 1** (mirroring) duplicates data on two drives for full redundancy — one drive can fail with no data loss, but the cost is that half the storage is used for the copy. **RAID 5** (striping with parity) splits data across three or more drives and adds parity information, so any one drive can fail without data loss, while still using most of the capacity for data.\n\nMost enterprise servers use some form of RAID because the failure of a single drive is not a question of if but when. Drives have a finite lifespan, and with thousands of drives in a data centre, failures happen every day. RAID ensures that a failure is an inconvenience rather than a catastrophe.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-005",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is RAID Level 1 also known as?",
    options: [
      "Caching, which keeps data in memory",
      "Spanning, which chains drives for total capacity",
      "Striping, which splits data across drives",
      "Mirroring, which duplicates data on two drives",
    ],
    optionRationales: [
      "Caching is a memory technique, not a storage architecture. The two are unrelated.",
      "Spanning is a method of combining drives for capacity without redundancy. It is not the same as RAID 1.",
      "Striping describes RAID 0 and some other levels, not RAID 1.",
      null,
    ],
    correct: 3,
    explanation: "## A Perfect Copy\n\nThe simplest RAID design is **Level 1**, called **mirroring**. Data is written identically to two drives at the same time, so both drives always contain the same information.\n\nThe purpose is reliability. If one drive fails, the other still holds a complete copy of all data, and the system continues to operate normally. The failed drive can be replaced while the system runs, and the RAID controller copies the contents of the working drive onto the new one to restore redundancy. From the user's perspective, the failure is invisible.\n\nThe trade-off is cost. Because every byte is written twice, half the storage capacity is used for the copy, and it is unavailable for user data. Two one-terabyte drives in a mirror provide only one terabyte of usable storage. This is called a 50% efficiency rate. Mirroring is used where the value of the data justifies the cost of duplicating it: operating system drives, database drives, and critical system disks. Bulk storage of files that can be recovered from other sources is often placed on higher-efficiency RAID levels instead.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-006",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is striping in a RAID configuration?",
    options: [
      "Splitting data across multiple drives",
      "Duplicating data on two drives",
      "Encrypting data before storing it",
      "Compressing data to save space",
    ],
    optionRationales: [
      null,
      "Duplication is mirroring (RAID 1), not striping. The two approaches are different.",
      "Encryption is a separate security technique. It does not describe how data is distributed across drives.",
      "Compression reduces the size of data but does not change how it is spread across drives.",
    ],
    correct: 0,
    explanation: "## Split Across Drives\n\n**Striping** splits data across multiple drives in a RAID array. Instead of writing a file sequentially to one drive, the data is divided into chunks and distributed across all the drives in parallel.\n\nThe result is faster performance. If three drives each write a third of the data simultaneously, the total write time is roughly one-third of what a single drive would take. Reading works the same way: the drives each deliver a portion of the file at once, and the controller reassembles them. This is why striping is used for applications that need high throughput — video editing, database transactions, and scientific computing all benefit from the parallel access.\n\nThe trade-off is that striping alone provides no redundancy. If any drive in the array fails, the data on that drive is lost, and because the file is split across all drives, the entire file becomes unreadable. RAID 0 uses striping alone and is therefore used only for temporary or reproducible data. Higher RAID levels combine striping with parity or mirroring to provide both speed and protection — for example, RAID 5 stripes data across drives but also writes parity information, so any single drive can fail without losing data.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-007",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is a Storage Area Network (SAN)?",
    options: [
      "A public cloud service for backing up files",
      "A high-speed private network dedicated to storage",
      "An external drive connected to a laptop",
      "A home router with built-in storage",
    ],
    optionRationales: [
      "Cloud services are public and accessed over the Internet. A SAN is private and internal to an organization.",
      null,
      "A single external drive connects to one machine. A SAN connects many servers.",
      "A home router is a small, low-cost device. A SAN is enterprise infrastructure.",
    ],
    correct: 1,
    explanation: "## Storage as a Network\n\nA **Storage Area Network (SAN)** is a **high-speed private network** whose sole purpose is to provide storage to the servers connected to it. It is not the same as a LAN or the Internet; it is a dedicated network for storage traffic only.\n\nThe design isolates storage traffic from everything else. In a traditional setup, servers access storage over the same network they use to talk to each other and to the outside world. Storage traffic competes with other traffic for bandwidth, and the storage performance depends on how busy the general network is. A SAN separates the two, so storage traffic always has its own dedicated high-speed path.\n\nThe technology uses high-speed connections — traditionally Fibre Channel, now also high-speed Ethernet — that can move data far faster than ordinary office networks. A SAN can connect servers to storage devices that are hundreds of metres away, which lets organizations concentrate their storage in a single managed facility rather than having disks scattered across many servers. The concentration simplifies management and reduces the total number of drives needed, since capacity can be shared among servers rather than purchased for each one individually.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-008",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is Network Attached Storage (NAS)?",
    options: [
      "A wireless access point with a built-in hard drive",
      "A server dedicated solely to providing file storage over a network",
      "A cloud storage service provided by a third party",
      "An internal drive in a desktop computer",
    ],
    optionRationales: [
      "A wireless access point with storage is a specialty device, not a general NAS. The NAS is a dedicated storage server.",
      null,
      "Cloud storage is remote and provider-owned. A NAS is on the organization's own network, under its direct control.",
      "An internal drive is inside one machine. A NAS serves many machines over the network.",
    ],
    correct: 1,
    explanation: "## Storage for the Network\n\nA **Network Attached Storage (NAS)** device is a server whose sole job is to provide file storage to users and computers on a network. It is a self-contained storage appliance with its own processor, memory, network connection, and drives.\n\nUnlike a general-purpose server, a NAS does not run arbitrary applications. It runs a specialized operating system whose purpose is to serve files over standard network protocols. Users see the NAS as a shared folder they can read from and write to. The NAS handles access control, so different users can be given different permissions to different folders.\n\nNAS devices are common in three contexts. In homes, they provide centralised storage for photos, videos, and backups, accessible from every device in the house. In small businesses, they serve as a shared file server without the complexity of a full server deployment. In enterprises, they often complement SANs by handling file-level access while the SAN handles block-level storage for databases and virtual machines. Modern NAS units often include RAID for redundancy and support for cloud backup, making them a convenient middle ground between local drives and full cloud storage.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-009",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is magnetic tape used for in modern enterprise storage?",
    options: [
      "Real-time access to frequently used files",
      "Long-term archival of data that is rarely accessed",
      "Random access to individual records",
      "Primary storage for active databases",
    ],
    optionRationales: [
      "Real-time access is the opposite of what tape provides. Tape is used for data that does not need to be immediately available.",
      null,
      "Random access is a weakness of tape, not a use case. Tape is designed for sequential access.",
      "Databases require random access with low latency. Tape is sequential and slow for random reads.",
    ],
    correct: 1,
    explanation: "## Low Cost, High Volume\n\n**Magnetic tape** is used in enterprise storage primarily for **long-term archival**. The data stored on tape is data the organization must keep — for legal, regulatory, or historical reasons — but does not need to access regularly.\n\nThe economics are decisive. Tape offers the lowest cost per terabyte of any storage technology, by a wide margin. A single tape cartridge can hold multiple terabytes, and the cartridges themselves are inexpensive compared to equivalent-capacity hard drives. For organizations with petabytes of data that must be preserved — medical records, financial transactions, legal documents, scientific observations — tape is the only technology that makes the economics work.\n\nThe trade-off is access time. Tape is sequential; to reach a specific file, the tape drive has to spin the tape to the right position. This can take seconds or minutes depending on where the file is stored. For archival data, that delay is acceptable — the data is rarely retrieved, and when it is, a few minutes of wait time is fine. For active data, it would be unacceptable. This is why tape coexists with other technologies rather than replacing them: each is used for what it does best.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-010",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What is a smart card?",
    options: [
      "A printed card with the user's photo",
      "A sticker that attaches to a phone",
      "A card with an embedded integrated circuit chip",
      "A card with a magnetic stripe on the back",
    ],
    optionRationales: [
      "Photos are visual identification. Smart cards use electronic storage and processing.",
      "A sticker on a phone is a passive NFC tag. A smart card has its own processor and memory.",
      null,
      "A magnetic stripe is used on traditional credit cards. Smart cards use an embedded chip instead.",
    ],
    correct: 2,
    explanation: "## The Chip Card\n\nA **smart card** is a plastic card with an embedded integrated circuit — a small processor and memory chip that can store data and perform calculations. It looks like a credit card but contains a computer inside.\n\nThe chip is what makes a smart card different from a magnetic stripe card. Where a magstripe stores a fixed set of data that can be read by any reader, a smart card can generate new data for each transaction. This is what makes it far more secure: even if an attacker intercepts the communication between card and reader, the data they capture cannot be reused for a subsequent transaction.\n\nTwo types of smart card exist. **Contact** smart cards must be inserted into a reader, with the chip making physical contact with electrical connectors. **Contactless** smart cards communicate over short-range radio, so the user just taps the card against the reader. Contactless cards are increasingly common for payments, transit systems, and access control because they are faster to use and more durable — no physical connector to wear out.\n\nThe technology has been used for decades but only became common in everyday life recently. Modern credit cards, SIM cards in phones, passport chips, and transit passes are all examples of smart card technology. The progression from magnetic stripes to chips represents one of the largest security upgrades in the history of consumer payments.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-011",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "What does an RFID tag consist of?",
    options: [
      "A small solar cell and a display",
      "An antenna and a memory chip",
      "A magnetic stripe and a plastic backing",
      "A laser-readable pattern of pits and lands",
    ],
    optionRationales: [
      "RFID tags do not have displays or solar cells. They are simple devices that respond to a reader's signal.",
      null,
      "A magnetic stripe is used on cards that require contact with the reader. RFID tags communicate wirelessly.",
      "Optical patterns are used on CDs, DVDs, and Blu-ray discs. RFID tags use radio waves.",
    ],
    correct: 1,
    explanation: "## Chip and Antenna\n\nAn **RFID tag** contains two essential components: **an antenna and a memory chip**. The chip holds the data — usually an identification number — and the antenna transmits it over radio waves when a reader signals.\n\nRFID tags come in two forms. **Passive tags** have no battery of their own. They draw power from the radio signal that the reader sends, using it to power the chip and transmit the response. Passive tags are cheap (often just a few cents each) and can be made as thin as a sticker. **Active tags** have their own battery and can broadcast continuously over longer distances. They cost more but provide more range and reliability.\n\nThe applications range from retail to logistics to healthcare. Inventory tags track products as they move through warehouses. Access cards identify users to building security systems. Toll transponders pay highway tolls automatically. Pet microchips identify lost animals. Livestock tags track herds. In each case, the RFID tag serves as a small, durable, wireless identification device — a modern alternative to barcodes that does not require line of sight and cannot be smudged or damaged as easily as printed patterns.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.4-012",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.4 Enterprise Storage Options",
    q: "How does NFC differ from general RFID?",
    options: [
      "NFC reads only; RFID reads and writes",
      "NFC uses light; RFID uses radio waves",
      "NFC needs a cable; RFID is wireless",
      "NFC works at a very short range; RFID can work at longer distances",
    ],
    optionRationales: [
      "Both NFC and RFID support reading and writing. The difference is the range.",
      "Both NFC and RFID use radio waves, not light. Light-based identification is a different technology.",
      "Both NFC and RFID are wireless. Neither requires a cable.",
      null,
    ],
    correct: 3,
    explanation: "## The Range Difference\n\nThe primary difference between **NFC** and general **RFID** is the range. **NFC works at a very short range** — typically under 10 centimetres — while RFID can work at distances of several metres or more.\n\nThe short range of NFC is not a limitation; it is a security feature. Because the two devices must be very close, the user has to physically bring them together. There is no way for a distant attacker to intercept or spoof an NFC transaction, because the attacker would have to be within centimetres of the user's device. This is what makes NFC safe for payments, access control, and identity verification.\n\nThe technologies are related — NFC is technically a subset of RFID, using the same radio principles but at a different frequency and with a strict range limit. The practical difference is that RFID is used where longer-range identification is helpful (inventory, tracking, toll collection) and NFC is used where short-range, deliberate interaction is desirable (payments, boarding passes, pairing devices). Both are examples of the same underlying idea: an object carries an identification chip, and a reader retrieves that identification over the air.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-001",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What three categories of items does a computer's memory hold?",
    options: [
      "Passwords, certificates, and encryption keys",
      "Temporary files, cookies, and browser history",
      "Documents, images, and video files",
      "The operating system, running applications, and their data",
    ],
    optionRationales: [
      "Security artifacts are specific pieces of data. They live in memory only when the applications that use them are running.",
      "Browser artifacts are one type of data held in memory, not a category of what memory holds generally.",
      "Files live in storage until they are opened. Once opened, they are loaded into memory as part of an application's data.",
      null,
    ],
    correct: 3,
    explanation: "## Three Kinds of Contents\n\nMemory holds three basic categories of items: the **operating system and other programs** that control the computer and its devices; **applications** that carry out specific tasks, such as a word processor; and **the data** that applications are currently processing and the results they have produced.\n\nThe three categories correspond to layers of the software stack. The operating system is always present, managing hardware and providing services to everything above it. Applications are loaded when the user launches them and unloaded when they are closed. Data is what the applications work on — the document open in the editor, the spreadsheet being calculated, the image being edited.\n\nEverything currently active on a computer is somewhere in this stack. Everything not currently active is in storage, waiting to be loaded when needed. This is why launching an application takes a moment — the file has to be read from storage into memory before the application can run. And it is why closing an application is immediate — the memory it occupied is simply released, and the file stays in storage until it is next opened.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-002",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What is a byte in the context of computer memory?",
    options: [
      "The size of the address space of a processor",
      "The smallest unit of storage that holds a single character",
      "The number of bytes a memory chip can hold",
      "The speed at which memory reads and writes",
    ],
    optionRationales: [
      "Address space is measured in bits (32-bit, 64-bit). Bytes measure content, not addressing range.",
      null,
      "Capacity is a measurement of memory size, not a unit of memory. A byte is one unit, not the total capacity.",
      "Speed is measured in gigahertz or nanoseconds, not bytes. The two are different specifications.",
    ],
    correct: 1,
    explanation: "## The Basic Unit\n\nA **byte** is the basic unit of memory. It holds a single character — a letter, a digit, a symbol — or a small integer value from 0 to 255. When data is loaded from storage into memory, it is loaded in bytes, and each byte has an address that the processor can use to find it.\n\nThe standard byte is eight bits, which is what gives it the range 0 to 255 (since $2^8 = 256$). That range is enough to represent every character in the ASCII encoding standard, which covers English letters, digits, and common punctuation. For larger values, multiple bytes are used together — two bytes hold 65,536 possible values, four bytes hold over 4 billion, and so on.\n\nMemory addresses work byte by byte. When the processor reads a word from memory, it reads four or eight consecutive bytes starting at a specific address. The address system is what makes memory usable as a random-access storage — any byte can be read or written in the same amount of time regardless of where it sits in the memory chip. This uniformity is a fundamental property of RAM and one of the reasons it is so much faster than disk storage for random access.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-003",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What is an address in computer memory?",
    options: [
      "The physical location of the memory chip on the motherboard",
      "The file path where data is saved on disk",
      "A unique number identifying a byte's location in memory",
      "The network location of a cloud storage server",
    ],
    optionRationales: [
      "Physical location is about hardware layout. A memory address is a logical position used by the processor to find data.",
      "File paths locate data in storage, not in memory. Memory addresses are distinct from file system paths.",
      null,
      "Network locations are IP addresses. Memory addresses are internal to the computer.",
    ],
    correct: 2,
    explanation: "## Numbered Seats\n\nA memory **address** is a unique number that identifies the location of a single byte in memory. The processor uses addresses to read from and write to specific locations.\n\nThe concept is like seats in a stadium. Each seat has a number, and only one person can sit there. Similarly, each byte in memory has an address, and only one byte lives at each address. When the processor wants a piece of data, it specifies the address, and the memory controller retrieves whatever byte is stored there.\n\nAddresses are assigned by hardware. The memory controller knows how many bytes of memory are installed and gives each one a unique address. The addresses are contiguous — the first byte has address 0, the second has address 1, and so on — which is why memory is sometimes described as a *flat* address space. The processor does not distinguish between different types of data stored in memory; a program's instructions, its variables, and its data buffers all live in the same address space, distinguished only by the addresses the program uses to access them.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-004",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What happens when a user saves a file?",
    options: [
      "Data is deleted from RAM to free up space",
      "Data is encrypted before being displayed on screen",
      "Data is copied from RAM to a storage device",
      "Data is moved from storage back into RAM",
    ],
    optionRationales: [
      "Saving preserves data; it does not delete it. The memory copy may be released later when the application closes.",
      "Encryption is not part of the save operation. Saving transfers data; encryption is a separate optional step.",
      null,
      "Moving data from storage into RAM is what *opening* a file does. Saving is the opposite direction.",
    ],
    correct: 2,
    explanation: "## From RAM to Disk\n\nWhen a user saves a file, the computer **copies data from RAM to a storage device**. The file is transferred from volatile working memory into nonvolatile storage so that it persists when power is removed.\n\nThe operation is a copy, not a move. The version in memory remains in memory so the user can continue working with it. The saved version on disk is a snapshot — the state of the file at the moment of saving. If the user makes further changes without saving again, those changes exist only in memory and would be lost in a crash.\n\nThis is why the habit of frequent saving matters. Every save records the current state of the file to storage. Every change after the last save is at risk. Applications that implement autosave do the same thing automatically at intervals, protecting the user from losing work even if they forget to save manually. The mechanism is the same — copy the current memory contents to storage — but the trigger is a timer rather than a keyboard shortcut.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-005",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What is cache memory?",
    options: [
      "A small, fast memory area holding frequently used data",
      "Permanent storage for the operating system",
      "A cloud service that backs up files",
      "A type of encryption for sensitive data",
    ],
    optionRationales: [
      null,
      "Permanent storage is the role of the disk drive. Cache is temporary and volatile.",
      "Cloud backup is a separate service. Cache is local and temporary.",
      "Encryption is a security technique, not a memory location.",
    ],
    correct: 0,
    explanation: "## The Speed Layer\n\n**Cache memory** is a small, very fast memory area that holds frequently used data and instructions close to the processor. It sits between the CPU and main memory in the memory hierarchy.\n\nThe purpose is to reduce the time the processor spends waiting. RAM is fast, but the processor is faster — it can execute instructions in a fraction of the time it takes to fetch data from RAM. The processor would spend most of its time idle if it had to fetch every instruction and every data item from RAM. Cache solves this by keeping the most recently used items in a faster memory very close to the CPU.\n\nThe hierarchy typically has multiple levels. **L1 cache** is the smallest and fastest, integrated into the processor itself. **L2 cache** is slightly larger and slower, often also on the processor. **L3 cache** is even larger, shared among processor cores. The pattern is that each level is bigger but slower than the one above, and the processor checks each level in order until it finds what it needs. This organization mirrors the trade-offs at every scale of computing: small and fast costs more per byte, large and slow is cheaper.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-006",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What is the difference between volatile and nonvolatile memory?",
    options: [
      "Volatile memory is faster than nonvolatile memory",
      "Volatile memory loses its contents without power; nonvolatile retains them",
      "Volatile memory is larger than nonvolatile memory",
      "Volatile memory is external; nonvolatile is internal",
    ],
    optionRationales: [
      "Speed is a common side effect of volatility, but not the defining characteristic. Some nonvolatile memory types are also quite fast.",
      null,
      "Capacity varies by device, not by volatility. Volatile and nonvolatile memory types come in many sizes.",
      "Both types can be internal. The distinction is about power behaviour, not location.",
    ],
    correct: 1,
    explanation: "## Power Matters\n\n**Volatile memory** loses its contents when power is removed. **Nonvolatile memory** retains its contents without power. This is the fundamental distinction between the two categories.\n\nThe most common volatile memory is **RAM** — the main working memory of the computer. Everything currently active lives in RAM, and everything in RAM disappears when the machine is powered off. The most common nonvolatile memory types are **ROM**, **flash memory**, and **CMOS**. ROM holds start-up instructions, flash memory holds files on SSDs and USB drives, and CMOS holds the BIOS settings.\n\nThe distinction determines what the memory is used for. Volatile memory is used for the working set — things that only matter while the machine is running. Nonvolatile memory is used for anything that must survive a power cycle — the operating system files, user documents, and settings. This is why the operating system loads from nonvolatile storage into volatile memory at boot: the files live on disk, but the working copies that the processor uses live in RAM.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-007",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What is the purpose of RAM in a computer?",
    options: [
      "To generate the graphics displayed on the screen",
      "To store files and programs permanently",
      "To provide the working memory the processor uses",
      "To connect the computer to external networks",
    ],
    optionRationales: [
      "Graphics are rendered by the GPU. RAM is a general-purpose memory used by all parts of the system, not just graphics.",
      "Permanent storage is the role of the disk drive. RAM is volatile and holds nothing across sessions.",
      null,
      "Network connectivity is provided by the network interface card. RAM holds data, not connections.",
    ],
    correct: 2,
    explanation: "## The Working Memory\n\n**RAM** (Random Access Memory) is the working memory of the computer. It holds the operating system, running applications, and the data those applications are currently processing. Everything the processor does right now involves data that is in RAM.\n\nThe name reflects a property. *Random access* means any location can be reached in the same amount of time — the processor can jump to any address without having to pass through all the ones before it. This is the opposite of sequential access, which is how tape storage works. Random access is what makes RAM fast enough to serve as working memory.\n\nRAM is the fastest memory the processor uses directly, with the exception of the small caches inside the processor itself. But it is also volatile — everything in it disappears when power is removed. The result is a trade-off: RAM provides the speed the processor needs for active work, but it provides it only for as long as power is supplied. Everything else — files, applications when they are closed, the operating system's persistent state — lives in nonvolatile storage, from which it is loaded into RAM on demand.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-008",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What is ROM and how does it differ from RAM?",
    options: [
      "ROM is larger than RAM in every computer",
      "ROM can be written to as often as RAM",
      "ROM is volatile; RAM is nonvolatile",
      "ROM is read-only and permanent; RAM is read-write and volatile",
    ],
    optionRationales: [
      "ROM is usually much smaller than RAM. Start-up instructions take very little space compared to the amount of memory the operating system needs.",
      "ROM is read-only by name. Writing to it requires specialized procedures that are not part of normal operation.",
      "This reverses the relationship. ROM is nonvolatile and RAM is volatile.",
      null,
    ],
    correct: 3,
    explanation: "## Read-Only by Design\n\n**ROM** (Read-Only Memory) is memory that stores **permanent data and instructions**. It is nonvolatile and cannot be written to during normal operation — hence the name. **RAM** is memory that can be **read and written freely**. It is volatile and holds the current working set.\n\nThe distinction reflects their purposes. ROM holds the BIOS — the small set of instructions that tells the computer how to start up, check its hardware, and load the operating system. These instructions never change during operation, so read-only memory is appropriate. They must also survive a power cycle, which is why ROM is nonvolatile. RAM holds everything that does change — programs running, data being processed, results being stored. It is read-write because the processor needs to update values constantly, and volatile because its contents only matter while the machine is on.\n\nMost ROM chips are not truly permanent. Manufacturers can update the BIOS through a process called **flashing** — a specialized write procedure that is not part of normal operation. This is what allows BIOS updates to fix bugs or add support for new hardware. The ROM chip is read-only in everyday use, but not in principle. The distinction from RAM is that RAM is read-write by design, while ROM is read-mostly with occasional manufacturing-side updates.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-009",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What is flash memory and why is it useful?",
    options: [
      "It is volatile memory used for processor registers",
      "It is permanent memory used only for the BIOS",
      "It is nonvolatile memory that can be erased and rewritten",
      "It is optical memory read by a laser",
    ],
    optionRationales: [
      "Flash memory is nonvolatile, not volatile. It retains data without power.",
      "Flash memory is used for far more than the BIOS — SSDs, USB drives, phones, and tablets all use it.",
      null,
      "Optical memory uses lasers; flash memory uses electrical charge. The two are entirely different technologies.",
    ],
    correct: 2,
    explanation: "## Rewritable and Permanent\n\n**Flash memory** is nonvolatile memory that can be **erased electronically and rewritten**. It combines the permanence of ROM with the rewritability of RAM, at a cost that makes it economical for consumer storage.\n\nThe combination is what makes flash so versatile. It retains data without power, like ROM. It can be updated repeatedly, like RAM. And it is physically robust — no moving parts, resistant to shock, and capable of operating in a wider range of temperatures than magnetic storage. These properties make flash the natural choice for portable devices, where the storage must survive being carried around.\n\nFlash memory appears in almost every modern computing device. Solid-state drives use it for primary storage. USB drives use it for portable data transfer. Memory cards use it for cameras and phones. The BIOS in most computers is stored on flash chips so it can be updated. Even the firmware inside embedded systems — the control software in your car, your washing machine, your router — often lives in flash memory, so that the manufacturer can ship updates if needed. The ubiquity of flash is one of the most consequential changes in computing over the last two decades.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-010",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "Why does a computer need virtual memory?",
    options: [
      "To increase the brightness of the display",
      "To increase the speed of the processor",
      "To extend memory capacity when RAM is insufficient",
      "To prevent data from being stolen",
    ],
    optionRationales: [
      "Display brightness is unrelated to memory. The two are controlled by entirely different subsystems.",
      "Virtual memory does not affect the processor's speed. Its purpose is to extend how much memory the system has available.",
      null,
      "Virtual memory is not a security measure. Encryption and access controls handle security, not memory management.",
    ],
    correct: 2,
    explanation: "## Overflow Space\n\nA computer uses **virtual memory** to **extend its effective memory capacity** when there is not enough RAM to hold everything that is currently needed. When RAM fills up, the operating system moves the least recently used data to a portion of the disk called the swap file or paging file.\n\nThe mechanism is automatic. The processor and applications see a large, continuous address space that appears to be all RAM. The operating system manages the reality: some of that address space is backed by physical RAM, and some is backed by disk. When the processor requests data that has been moved to the disk, the operating system transparently swaps it back in and moves something else out. The user and the applications do not see the swap happening.\n\nThe trade-off is performance. Disk access is orders of magnitude slower than RAM access, so a system that relies heavily on virtual memory runs noticeably slower. This is why modern systems ship with substantial physical RAM — to reduce the need for swapping. But even the largest RAM can be exceeded by demanding workloads, and virtual memory ensures the system degrades gracefully rather than crashing. Without virtual memory, running one too many applications would cause the computer to fail outright. With it, the system slows down but continues to function.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-011",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "What happens to a running application's memory when the user closes the application?",
    options: [
      "The memory is transferred to permanent storage",
      "The memory is encrypted and held for later use",
      "The memory is released and can be reused by other programs",
      "The memory becomes read-only until the next session",
    ],
    optionRationales: [
      "Transfer to storage happens only if the user saves the file. Closing without saving discards the changes.",
      "Encryption is a separate operation, not part of closing. The memory is simply freed.",
      null,
      "Read-only memory is a different concept (ROM). Closing an application releases memory, it does not freeze it.",
    ],
    correct: 2,
    explanation: "## Released for Reuse\n\nWhen an application is closed, the memory it was using is **released and becomes available for other programs**. The operating system marks those memory locations as free, and they can be allocated to whatever loads next.\n\nThe release does not happen automatically for all data. If the user has unsaved changes and closes the application, those changes exist only in the memory that is about to be released — and once released, they are gone. This is why applications prompt the user to save before closing. The prompt is the last chance to move data from volatile memory to nonvolatile storage.\n\nEven after the application closes, some traces may remain in memory for a short time. The released memory is not immediately overwritten; it is simply marked as available. Until another program claims it, the data it held is technically still there. This is why memory forensics can sometimes recover data from a recently closed application. For most users, this is not a concern, but it matters in security contexts — for example, a password stored in memory remains recoverable until the memory is overwritten or the machine is powered off.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.5-012",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.5 How Memory Relates to Storage",
    q: "Which of the following is an example of nonvolatile memory?",
    options: [
      "Flash memory",
      "RAM",
      "Cache memory",
      "CPU registers",
    ],
    optionRationales: [
      null,
      "RAM is volatile — its contents disappear when power is removed. This is why unsaved work is lost in a crash.",
      "Cache memory is volatile and small, holding data only while the processor is active.",
      "CPU registers are volatile and hold data only during execution of the current instruction.",
    ],
    correct: 0,
    explanation: "## Survives Power Loss\n\n**Flash memory** is an example of nonvolatile memory. It retains its contents when power is removed, which is why it is used in SSDs, USB drives, memory cards, and the BIOS.\n\nThe other three options — RAM, cache, and CPU registers — are all volatile. They lose their contents when power is cut. The three differ in size, speed, and location, but they share the property of volatility.\n\nThe distinction matters for how the memory is used. Volatile memory holds the current working set — the things that only matter while the computer is running. Nonvolatile memory holds anything that must survive a power cycle — the operating system files, user documents, settings, and firmware. This is why a computer must load its operating system from nonvolatile storage (flash or disk) into volatile memory (RAM) each time it boots: the operating system needs to be in RAM to run, but it is stored on nonvolatile media so it persists between sessions.\n\nThe category of nonvolatile memory includes several technologies: ROM (read-only by design), flash memory (rewritable), and CMOS (battery-backed for settings). Each is used for a different purpose, but all share the ability to hold data without power.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.6-001",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.6 Internet of Things and Privacy",
    q: "How does a smart thermostat fit into the Internet of Things?",
    options: [
      "It is a building control system for large facilities",
      "It is a temperature sensor that can send and receive data",
      "It is a mechanical switch that turns a heater on and off",
      "It is a device that only displays the current temperature",
    ],
    optionRationales: [
      "Building control systems exist, but they are a different category. A smart thermostat is a consumer IoT device.",
      null,
      "A mechanical switch has no network connection. The IoT thermostat communicates with phones, servers, and other devices.",
      "Display-only thermometers are traditional sensors, not IoT devices. The IoT version acts on its data, not just reports it.",
    ],
    correct: 1,
    explanation: "## Communicating Temperature\n\nA **smart thermostat** is a temperature sensor that can **send and receive data** over a network. It monitors the temperature in a home and communicates with a phone app, allowing the user to adjust settings remotely.\n\nThe device is a classic IoT example because it demonstrates the three defining capabilities. It **communicates** — the thermostat sends its readings to the cloud and receives commands from the user's phone. It **locates** — it knows which room it is in and can respond to the user's location through the phone's GPS. It **predicts** — over time, it learns the household's patterns and adjusts temperature proactively, warming the house before the family gets home rather than waiting for them to arrive.\n\nThe privacy implications are significant. A smart thermostat collects data about when people are home, when they sleep, and what temperatures they prefer. That data reveals a great deal about a household's routines. The user's phone sends location data to the thermostat service, revealing where the user goes. The convenience of remote control comes at the cost of continuous monitoring — a trade-off that has become a recurring theme in the IoT era.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.6-002",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.6 Internet of Things and Privacy",
    q: "How can an IoT-enabled medicine bottle help a patient?",
    options: [
      "It stores the patient's full medical history on the chip",
      "It automatically refills the prescription from the pharmacy",
      "It measures the patient's blood pressure and reports it",
      "It sends text messages reminding the patient to take medication",
    ],
    optionRationales: [
      "Medical history storage requires much more capacity than a bottle chip provides. The chip handles one specific function.",
      "Refilling is a pharmacy service. The bottle chip tracks adherence; it does not place orders.",
      "Blood pressure monitoring requires a cuff, not a bottle. The two are different devices for different purposes.",
      null,
    ],
    correct: 3,
    explanation: "## A Reminder in Your Pocket\n\nAn **IoT-enabled medicine bottle** contains a small wireless chip that connects to a patient's phone and **sends text messages reminding the patient to take their medication**. The device turns an ordinary object — a pill bottle — into a communication device.\n\nThe problem it solves is adherence. Studies show that many patients forget doses, take them late, or stop taking medication before the full course is complete. This is particularly dangerous for chronic conditions that require consistent treatment, and for antibiotics where incomplete courses can lead to resistant infections. The bottle chip provides a timely reminder exactly when it is needed.\n\nThe technology is one example of a broader trend in healthcare IoT. Sensors in wearables track activity and heart rate; devices in hospitals monitor patients continuously; applications on phones help patients manage chronic conditions. Each of these applications has the same trade-off: greater convenience and health monitoring at the cost of continuous data collection. For a patient managing a complex medication schedule, the trade-off is often worth it — but the data still exists, and it can be shared or leaked in ways the patient did not anticipate.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.6-003",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.6 Internet of Things and Privacy",
    q: "What are beacons in the context of retail IoT?",
    options: [
      "Automated machines that scan products at checkout",
      "Security cameras that monitor shopper movements",
      "Large signs posted at store entrances",
      "Devices that broadcast Bluetooth signals to nearby phones",
    ],
    optionRationales: [
      "Self-checkout machines are point-of-sale devices, not beacons. Beacons deliver marketing messages, not process transactions.",
      "Security cameras monitor video. Beacons transmit data. The two serve different purposes in a store.",
      "Physical signs are visible but do not communicate with phones. Beacons broadcast invisible signals.",
      null,
    ],
    correct: 3,
    explanation: "## Signals to Nearby Phones\n\n**Beacons** are small devices that broadcast **Bluetooth signals** to nearby phones. In a retail context, they are used to detect when a customer's phone is in a specific area of the store and to deliver location-specific messages.\n\nThe technology works through proximity rather than precise location. A beacon does not know exactly where a phone is — it only knows that the phone is close enough to receive its signal. When an app on the phone detects a beacon, it can trigger an action: displaying a coupon, suggesting a product nearby, or alerting store staff that a customer is in a specific section.\n\nBeacons are one of the earliest examples of *proximity marketing* — the practice of using location data to deliver targeted messages. The privacy concerns are direct. A shopper who has the retailer's app installed is tracked as they move through the store, and every beacon interaction is logged. The data reveals shopping patterns, dwell times at displays, and navigation paths. For the retailer, this is invaluable for understanding customer behaviour. For the customer, it is a form of continuous surveillance that most do not realize is happening, because the beacons are invisible and the app permission is buried in a settings screen.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.6-004",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.6 Internet of Things and Privacy",
    q: "What privacy concern arises from the increasing use of IoT devices?",
    options: [
      "Devices consume more electricity than expected",
      "Devices are too expensive for most buyers",
      "Devices require constant software updates",
      "Devices collect data about users without their full awareness",
    ],
    optionRationales: [
      "Power consumption is a cost concern, not a privacy one. The two are separate issues.",
      "Affordability affects adoption rates but does not raise privacy questions.",
      "Updates are a maintenance issue. They improve the devices but do not address the privacy concerns.",
      null,
    ],
    correct: 3,
    explanation: "## Silent Data Collection\n\nThe primary privacy concern arising from IoT is that devices **collect data about users without their full awareness**. Every smart device — a thermostat, a watch, a doorbell, a car, a voice assistant — records information about its user and transmits it to a server somewhere.\n\nThe scale of the collection is what makes it different from earlier technology. A traditional thermostat only knew what the user set it to. A smart thermostat knows when the house is occupied, when the family sleeps, how long showers last, and what temperatures each person prefers. It correlates this with the location data from their phones. A smart speaker records snippets of conversation. A smart TV watches what is displayed on screen. Each device is a sensor, and together they form a detailed picture of the user's daily life.\n\nThe concern is not that any single device violates privacy. It is that the aggregate data, combined across devices and services, is far more revealing than any single source. Even anonymous data can often be de-anonymized when combined with other sources. Users rarely understand how much is being collected or what is done with it, because the disclosures are buried in terms of service that almost no one reads. The result is a widespread and largely invisible loss of privacy that has become one of the defining issues of the connected era.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.6-005",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.6 Internet of Things and Privacy",
    q: "What responsibility do companies bear for the data they collect from IoT devices?",
    options: [
      "Selling the data freely to any interested buyer",
      "Keeping sensitive data secure and confidential",
      "Publishing all collected data to the public",
      "Deleting all data immediately after collection",
    ],
    optionRationales: [
      "Selling data freely is the opposite of responsible handling. Companies are expected to control how data is used.",
      null,
      "Public release would violate every principle of data protection. The data is meant to be protected, not exposed.",
      "Immediate deletion would defeat the purpose of collection. The data has legitimate uses; the goal is to protect it, not destroy it.",
    ],
    correct: 1,
    explanation: "## Protecting What Is Collected\n\nCompanies bear the responsibility of **keeping sensitive data secure and confidential**. The data they collect from IoT devices belongs to the users, and the companies are entrusted with it.\n\nThe responsibility has three parts. **Security** means protecting the data from unauthorized access — encryption, access controls, and monitoring. **Confidentiality** means not sharing the data with third parties without the user's consent, and not using it for purposes the user did not agree to. **Transparency** means telling users what is being collected, why, and what is done with it.\n\nThe ethical consensus is that these obligations are not optional. They are the price of being allowed to collect the data in the first place. The IoT's benefits — security, health monitoring, productivity — only materialize if users trust that their data will be handled properly. When that trust is broken, users abandon the products, and the entire industry suffers. This is why responsible IoT companies invest heavily in security and privacy infrastructure, even when it does not show up in the user-facing features. It is the invisible foundation of the connected world.",
    status: "approved"
  },

  {
    id: "CS110-T1-U5-5.6-006",
    mainTopic: "Unit 5: Computer Storage",
    topic: "5.6 Internet of Things and Privacy",
    q: "According to technology experts, what three benefits of IoT outweigh its risks?",
    options: [
      "Security, health, and productivity",
      "Speed, cost, and simplicity",
      "Entertainment, education, and advertising",
      "Storage, processing, and bandwidth",
    ],
    optionRationales: [
      null,
      "Speed, cost, and simplicity are general computing benefits, not the three specifically cited for IoT.",
      "Entertainment and advertising are commercial applications, not the categories of benefit that experts cite.",
      "Storage and bandwidth are technical resources, not the outcomes that justify accepting the risks.",
    ],
    correct: 0,
    explanation: "## Three Benefits\n\nTechnology experts believe the **security, health, and productivity** benefits of IoT outweigh its privacy risks.\n\nEach benefit is concrete. **Security** — smart locks and cameras alert owners to intrusions and unusual activity, providing visibility that was previously impossible without a security service. **Health** — wearables and medical monitors track vital signs continuously, catching problems earlier and helping patients manage chronic conditions. **Productivity** — automation of routine tasks frees people to focus on higher-value work, and the data collected allows systems to be optimized in ways users would not discover manually.\n\nThe judgement is not that IoT is risk-free. It is that the benefits are real and substantial, while the risks, though concerning, are manageable through regulation, better design, and user awareness. This is a common pattern in the history of technology: new capabilities often create new problems, and society's response is not to reject the technology but to develop norms and rules for using it responsibly. The IoT is in the early phase of that development, and the balance between benefits and risks is still being negotiated. What is clear is that the technology is not going away — it is expanding into every area of life, and the questions about privacy and data ownership will continue to matter for years to come.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 6 · NETWORKS AND NETWORK DEVICES  (84 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T1-U6-6.1-001",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is a network in the context of computing?",
    options: [
      "A single powerful computer that serves many users",
      "A program that manages files on a local drive",
      "A type of storage device connected to the Internet",
      "A system of two or more computers linked to share resources",
    ],
    optionRationales: [
      "A single server is one node on a network, not the network itself. The network is the connection between devices.",
      "File management software runs on one computer. A network involves multiple computers communicating with each other.",
      "A storage device is one component of a computer. A network links multiple computers together.",
      null,
    ],
    correct: 3,
    explanation: "## Two or More, Sharing\n\nA **network** is a system of two or more computers linked together to share resources. The resources can be hardware (printers, scanners, storage), software, data, or an Internet connection. The connection can be wired, wireless, or a mix of both.\n\nThe definition has no minimum size beyond two. Two laptops connected by a cable form a network. So do five computers in a home, fifty in an office, or millions across the globe. The Internet itself is the largest network — a network of networks, where each participating network connects to others.\n\nWhat makes a network a network is the sharing. Two computers sitting side by side without a connection are not a network — they are just two computers. The moment a cable or wireless signal allows them to exchange data, they become nodes on a network. The purpose is always the same: to let the participants do together what they cannot do alone, whether that means sharing a printer, exchanging files, or reaching the Internet through a single connection.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-002",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is digital communications?",
    options: [
      "The process of compressing data to save space",
      "The process of encrypting data for security",
      "The process of storing files on a local drive",
      "The process of transferring data between devices over a network",
    ],
    optionRationales: [
      "Compression is a data-processing technique. Digital communications describes the transfer itself, not any transformation.",
      "Encryption protects data during transfer, but it is a layer on top of the communications, not the communications itself.",
      "Local storage keeps data within one computer. Digital communications is about moving data between computers.",
      null,
    ],
    correct: 3,
    explanation: "## Transfer Between Devices\n\n**Digital communications** is the process of transferring data, instructions, and information between two or more devices over a network. It is the activity that makes a network useful — without it, the connected devices would simply be isolated machines.\n\nThe process involves four components working together. A **sending device** initiates the transmission — the phone sending a message, the server serving a webpage. A **communications device** — a modem, router, or network card — connects the sender to the network. **Transmission media** — cables or radio waves — carries the signal. A **receiving device** accepts the transmission and processes it.\n\nThe same process works at every scale, from two devices in a room to billions across the Internet. A text message from a phone in Lusaka to a phone in London passes through many networks, many routers, and many transmission media before it arrives. But the underlying pattern is always the same: a sender, a channel, and a receiver, exchanging digital signals according to agreed-upon rules. This is why a single framework — the layered model of digital communications — can describe everything from a home Wi-Fi network to the global Internet.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-003",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "Which of the following is a communications device in a network?",
    options: [
      "A router that directs traffic between networks",
      "A program installed on the computer",
      "A keyboard connected to a desktop",
      "A file stored on the local drive",
    ],
    optionRationales: [
      null,
      "Software runs on the computer. Communications devices are hardware that carries signals between computers.",
      "Keyboards are input devices, not communications devices. They connect the user to the computer, not the computer to the network.",
      "Files are data, not devices. The file might be sent over the network, but the file itself does not connect anything.",
    ],
    correct: 0,
    explanation: "## The Bridge\n\nA **communications device** is hardware that connects a sending or receiving device to a transmission medium. It is the bridge between the computer and the network.\n\nSeveral types of communications devices exist. A **modem** connects a computer to a communications channel such as the Internet, translating between the signals the computer uses and the signals the channel carries. A **router** connects two or more networks and directs traffic between them. A **network interface card (NIC)** is the hardware inside a computer that allows it to send and receive signals on the network. A **wireless access point** allows wireless devices to join a wired network.\n\nEach device performs a specific function, but all share a common purpose: they carry data from one computer to another. Without them, computers would be isolated — capable of processing data internally but unable to reach anything beyond their own case. The communications devices are what turn individual computers into participants in a network, and they are as essential to the network as the computers themselves.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-004",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is transmission media in a communications system?",
    options: [
      "The password that protects the connection",
      "The physical path or channel that carries the data",
      "The software that manages the network",
      "The device that stores every message sent",
    ],
    optionRationales: [
      "Passwords protect access. Transmission media is the channel through which data travels, not the security that protects it.",
      null,
      "Software manages the network but does not carry the data. Transmission media is the physical or wireless path itself.",
      "Storage holds data for later use. Transmission media carries data during transfer.",
    ],
    correct: 1,
    explanation: "## The Path\n\n**Transmission media** is the physical path or channel through which data travels between devices. It is the medium that carries the signals — the wires, cables, or radio waves that connect the participants in a communication.\n\nThe media fall into two categories. **Wired media** use physical conductors to carry signals. Twisted-pair copper cable is the most common, used in Ethernet networks and telephone lines. Coaxial cable carries cable TV and older Ethernet. Fibre-optic cable uses pulses of light through glass strands and is the fastest and most long-distance-friendly medium. **Wireless media** carry signals through the air. Wi-Fi uses radio waves in the 2.4 GHz and 5 GHz bands. Cellular networks use licensed radio spectrum. Bluetooth uses short-range radio. Infrared uses light at a wavelength that does not pass through walls.\n\nThe choice of transmission media determines much about the network's capabilities. Fibre-optic cable supports the highest speeds and the longest distances but is expensive to install. Copper cable is cheaper but has a shorter range and lower maximum speed. Wireless is convenient but subject to interference and range limits. Every network design involves trade-offs between these media, and modern networks typically use several in combination.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-005",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is the function of a sending device in digital communications?",
    options: [
      "It initiates the transfer of data over the network",
      "It stores the data that will eventually be sent",
      "It routes data between two different networks",
      "It accepts a transmission from another device",
    ],
    optionRationales: [
      null,
      "Storage holds data for later; it does not initiate a transfer. The sending device is the one that starts the communication.",
      "Routing between networks is the job of a router, not the sending device. The sender and the intermediate devices are separate roles.",
      "Accepting a transmission is the role of the receiving device. Sending and receiving are opposite ends of the same exchange.",
    ],
    correct: 0,
    explanation: "## Who Starts\n\nThe **sending device** initiates a transfer of data over the network. It is standard teaching of the communication — the device that has information to share and starts the process of sharing it.\n\nIn any given exchange, the roles of sender and receiver are not fixed to specific devices. Your phone sends a message and receives a reply. Your laptop sends a request and receives a webpage. A server sends content and receives new requests. The same device can be a sender in one moment and a receiver in the next, depending on the direction of the current exchange.\n\nWhat matters is the direction of the specific transmission being described. When the user clicks a link, the browser sends a request to the server — the browser is the sender, the server is the receiver. When the server responds with the page content, the roles reverse. This reciprocity is what makes digital communications conversational: both sides participate, and neither is permanently one role. The distinction between sending and receiving devices is useful for describing individual transactions, not for classifying devices into permanent categories.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-006",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "Which of the following is a capability provided by a home network?",
    options: [
      "Guaranteeing that no device can access another's files",
      "Automatically updating the operating system of every device",
      "Sharing a single Internet connection among multiple devices",
      "Preventing all viruses from reaching connected devices",
    ],
    optionRationales: [
      "Networks are designed to enable sharing, not to prevent it. Access controls on individual devices can restrict sharing, but the network's purpose is connection.",
      "Operating system updates require specific software and permissions. A network provides connectivity, not automatic management.",
      null,
      "Virus protection is provided by antivirus software and firewalls, not by the network itself. A network can carry threats as easily as it carries legitimate traffic.",
    ],
    correct: 2,
    explanation: "## Sharing at Home\n\nThe primary capability of a home network is **sharing a single Internet connection**. Instead of paying for separate connections for every device, the household pays once and the router distributes the connection to every phone, laptop, tablet, and smart device.\n\nBeyond the Internet connection, home networks enable several other kinds of sharing. Files on one computer can be shared with others on the same network, so a document saved on a desktop can be opened from a laptop without any external transfer. Hardware resources like printers can be shared, so a single printer serves every device in the household. Media can be streamed from one device to another — playing music or video stored on a computer through a smart TV. And game consoles can connect to the Internet for online play, using the same connection as everything else.\n\nWhat the network does not provide is security or antivirus protection. It carries whatever traffic is sent, whether legitimate or malicious. Protecting the devices on the network is the responsibility of each device's software — firewalls, antivirus programs, and safe behaviour by the user. The network is a channel, not a gatekeeper.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-007",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is a business network advantage that home networks do not typically provide?",
    options: [
      "The ability to share a single printer",
      "Wireless connectivity for mobile devices",
      "The ability to connect multiple computers",
      "Centralised backup and control of data",
    ],
    optionRationales: [
      "Printer sharing is common to both home and business networks. It is not the distinguishing advantage.",
      "Wireless connectivity is standard in both home and business networks. The capability itself is universal.",
      "Multiple computer connection is the definition of a network, common to both home and business settings.",
      null,
    ],
    correct: 3,
    explanation: "## Central Control\n\nThe business network advantage over home networks is **centralised backup and control of data**. Business networks are designed around servers that store files centrally, apply policies uniformly, and back up data automatically. The organisation has a single point of management for all its information.\n\nHome networks do not typically have this structure. Each device keeps its own files. Backups are the user's responsibility and are often neglected. There is no central server enforcing policies or maintaining consistency. When something goes wrong on a home network, the user has to fix it themselves; on a business network, IT staff handle the problem.\n\nThe consequences matter at scale. In an office with fifty employees, having files scattered across fifty laptops is a management nightmare. A server that centralises the files means that backups happen in one place, permissions are controlled from one location, and a computer failure does not destroy critical work. This is why businesses invest in server infrastructure even when the raw connectivity could be provided by a simpler home-style router. The network is the same in principle; the administrative model is entirely different.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-008",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is an intranet?",
    options: [
      "A private internal network that uses Internet technology",
      "A wireless network used only in public places",
      "A type of cable that connects computers in a building",
      "A worldwide public network of computers",
    ],
    optionRationales: [
      null,
      "Public wireless networks are one type of network, not a distinct category. An intranet is defined by being internal to an organisation, not by being public.",
      "A cable is a component, not a network. An intranet is a full network, not a physical medium.",
      "A worldwide public network describes the Internet, not an intranet. The two use similar technology but differ in scope and access.",
    ],
    correct: 0,
    explanation: "## Within the Organisation\n\nAn **intranet** is a private network that uses the same technologies as the Internet — web pages, browsers, email, file sharing — but is accessible only to people inside an organisation. The name comes from *intra*, meaning within.\n\nFrom the user's perspective, an intranet looks like a private version of the web. Employees open a browser, visit an address, and see pages with announcements, policies, forms, and internal tools. The difference is that these pages are visible only to someone connected to the organisation's network. The public Internet cannot reach them, and search engines do not index them.\n\nOrganisations use intranets to share information that is important internally but not meant for public consumption. Company policies, employee directories, internal news, training materials, and administrative forms all fit naturally on an intranet. The advantage over alternatives — email attachments, shared drives, printed memos — is that the intranet is always current. When a policy is updated, every employee sees the new version immediately. When a new tool is deployed, it appears in everyone's browser. The intranet becomes the organisation's internal reference, available to every authorised user at any time.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-009",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is an extranet?",
    options: [
      "A controlled extension of an intranet to external partners",
      "A type of storage device connected to a network",
      "A public version of the Internet",
      "A wireless network for large buildings",
    ],
    optionRationales: [
      null,
      "Storage devices are components of a network, not a category of network. The extranet is about access control, not hardware.",
      "The Internet is open to everyone. An extranet selectively shares parts of a private network with specific external parties.",
      "The scope of an extranet is defined by who can access it, not by whether the connections are wired or wireless.",
    ],
    correct: 0,
    explanation: "## Beyond the Walls\n\nAn **extranet** is a controlled extension of an intranet that allows specific external parties — customers, suppliers, or business partners — to access some of the organisation's internal resources. The name comes from *extra*, meaning outside or beyond.\n\nThe design involves selective sharing. An organisation's intranet contains everything that employees need, including sensitive internal information. An extranet exposes a subset of that content to specific external users, usually through authentication that confirms their identity and limits their access. A supplier might be able to see inventory levels and place orders but not access payroll records. A customer might be able to check order status but not see pricing for other customers.\n\nThe distinction from the public Internet is the access control. Anyone can visit a public website. Only authorised partners can reach an extranet. The distinction from a plain intranet is who is allowed in. An intranet serves employees; an extranet serves a defined group of external collaborators. Both use the same underlying technology — the same browsers, the same protocols, the same web standards. What differs is the boundary of who is allowed to connect.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-010",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is a VPN used for?",
    options: [
      "Encrypting every file on a storage drive",
      "Increasing the speed of a home Internet connection",
      "Connecting a printer to a wireless network",
      "Securely accessing a private network from a remote location",
    ],
    optionRationales: [
      "Full-disk encryption is a separate security measure. A VPN encrypts network traffic, not stored files.",
      "VPNs do not improve connection speed. The encryption they add often reduces speed slightly.",
      "Printers connect to networks through standard Wi-Fi or Ethernet. A VPN is for remote access, not for connecting peripherals.",
      null,
    ],
    correct: 3,
    explanation: "## The Private Tunnel\n\nA **VPN** (Virtual Private Network) creates a **secure connection** between a remote user and a private network, allowing the user to access resources as if they were physically on the private network. It is the standard tool for remote access to corporate systems.\n\nThe mechanism works through tunnelling. The user's device creates an encrypted connection to a VPN server on the target network. All traffic between the device and the server travels inside this encrypted tunnel. Anyone observing the traffic in between — a coffee shop Wi-Fi operator, an ISP, a government — sees only scrambled data. At the other end, the VPN server decrypts the traffic and forwards it to the internal resources as if it were coming from a local machine.\n\nThe result is that a laptop in a hotel room in one city can access files and applications on a corporate server in another city with the same security as if it were physically plugged into the office network. This is why VPNs are standard for remote work. They solve a specific problem — how to extend the trusted zone of a private network beyond its physical walls — without exposing the internal network to the public Internet.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-011",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "How does a wired network differ from a wireless network?",
    options: [
      "Wired cannot connect to the Internet; wireless can",
      "Wired is always faster than any wireless connection",
      "Wired is for business; wireless is for homes only",
      "Wired sends signals through cables; wireless sends through airwaves",
    ],
    optionRationales: [
      "Both wired and wireless networks connect to the Internet. The difference is the transmission medium, not the reach.",
      "Modern wireless standards can exceed the speed of older wired connections. The comparison depends on specific technologies, not categories.",
      "Both wired and wireless networks are used in both homes and businesses. The choice depends on the situation, not the location type.",
      null,
    ],
    correct: 3,
    explanation: "## Cable or Air\n\nThe fundamental difference between wired and wireless networks is the **transmission medium**. Wired networks send signals through physical cables — copper twisted-pair, coaxial, or fibre-optic. Wireless networks send signals through the air, using radio waves or infrared light.\n\nEach medium has its own trade-offs. Wired connections are more reliable because the signal is contained in a shielded cable; interference is minimal, and the speed is consistent regardless of distance from the access point. They are also more secure because an attacker has to physically access the cable to intercept traffic. The limitation is physical flexibility — every device must be plugged in, which constrains where it can be placed.\n\nWireless connections are more convenient because devices can move freely within the coverage area. They are easier to install, since no cables need to be run through walls. They are also cheaper to expand — adding a device requires no new wiring. The trade-offs are the inverse of the wired strengths: wireless signals can be intercepted by anyone in range, they are subject to interference from other radio sources, and the speed decreases with distance from the access point. Most modern networks use both — wired connections for stationary devices that need reliability, wireless for mobile devices that need flexibility.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-012",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is a cellular network?",
    options: [
      "A network that operates only in a single building",
      "A network with wireless links to mobile devices",
      "A network that uses only copper cables",
      "A network dedicated to emergency services",
    ],
    optionRationales: [
      "Cellular networks span entire countries. Their defining feature is geographic coverage, not being confined to a single building.",
      null,
      "Cellular networks use radio waves for the connection to devices. Copper cables may connect the towers, but the link to the user is wireless.",
      "Cellular networks serve the general public. Emergency services use them, but the networks are commercial and open to everyone.",
    ],
    correct: 1,
    explanation: "## Towers and Cells\n\nA **cellular network** is a wireless communications network that provides service to mobile devices over a large geographic area. The name comes from the way the coverage is divided into regions called *cells*, each served by a tower.\n\nEach tower broadcasts and receives radio signals within its cell. When a user moves from one cell to another, the network transfers the connection from the old tower to the new one — a process called **handoff** — without interrupting the call or the data session. This is what allows a phone call to continue while driving along a highway, passing through dozens of cell boundaries.\n\nThe generations of cellular technology tell the story of mobile computing. **2G** networks introduced digital voice and text messaging. **3G** brought mobile Internet, enabling the first smartphones. **4G** delivered broadband speeds, making video streaming practical on phones. **5G** pushes speeds and capacity even higher, opening doors to applications that were not possible before. Each generation has been faster and more capable than the last, and each has changed what people expect from mobile devices. The progression is a good example of how a single technology can reshape an entire industry when the underlying capability advances far enough.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-013",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "What is the role of communications software in a network?",
    options: [
      "It permanently stores all files transmitted on the network",
      "It converts electrical signals into optical signals",
      "It helps users establish connections and manage transmissions",
      "It replaces the need for network hardware",
    ],
    optionRationales: [
      "Storage is provided by servers and drives. Communications software handles the interaction between users and the network.",
      "Signal conversion is done by specialized hardware such as media converters. Software operates at a higher level.",
      null,
      "Software and hardware work together. Software cannot replace the physical components that carry the signals.",
    ],
    correct: 2,
    explanation: "## Three Jobs\n\n**Communications software** helps users **establish connections** to other computers or networks, **manage the transmission** of data, and **provide an interface** for users to communicate with one another.\n\nThe three jobs correspond to different layers of the network stack. Establishing connections involves discovering other devices, negotiating protocols, and authenticating users. Managing transmission involves splitting data into packets, routing those packets through the network, and reassembling them at the destination. Providing an interface involves presenting the communication in a form the user can interact with — a web browser, an email client, a video call app.\n\nExamples of communications software range widely. A web browser is communications software — it establishes a connection to a web server, manages the HTTP exchange, and renders the response for the user. An email client is communications software — it connects to a mail server, sends and receives messages, and presents them in a readable format. A video conferencing app combines all three jobs, managing connection, transmission, and user interface simultaneously. Whatever the specific application, the pattern is the same: software running on the user's device carries out the activities that turn raw connectivity into a usable communication.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-014",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "Which type of cable is the fastest and most capable of carrying data over long distances?",
    options: [
      "Fibre-optic cable",
      "Standard telephone wire",
      "Twisted-pair copper cable",
      "Coaxial cable",
    ],
    optionRationales: [
      null,
      "Telephone wire is a specific type of twisted-pair and is the slowest and shortest-range option of the four.",
      "Twisted-pair is cheap and widely used for Ethernet, but its speed and range are limited compared to fibre.",
      "Coaxial cable carries higher frequencies than twisted-pair but is still slower than fibre over long distances.",
    ],
    correct: 0,
    explanation: "## Light Through Glass\n\n**Fibre-optic cable** is the fastest and longest-range transmission medium. It carries data as pulses of light through thin strands of glass or plastic, rather than as electrical signals through copper.\n\nThe advantages come from the physical properties. Light travels much faster than electricity, and it can travel much farther before losing strength. A fibre-optic cable can carry signals for dozens of kilometres without amplification, compared to a few hundred metres for copper. The bandwidth is also much higher — a single fibre strand can carry trillions of bits per second, thousands of times more than the best copper cable.\n\nThe disadvantages are cost and complexity. Fibre cables are more expensive to manufacture than copper, and installing them requires specialized equipment because the glass strands must be precisely aligned and connected. Copper cables can be cut and joined with simple tools; fibre cables require fusion splicing or precision connectors. This is why most homes and small offices still use copper for their local networks — the cost of fibre is not justified for the short distances involved. But for the Internet backbone, undersea cables, and any long-distance application, fibre is the standard. Almost everything you do online travels over fibre for most of its journey.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.1-015",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.1 Interacting with a Network",
    q: "Why does a network require both hardware and software to operate?",
    options: [
      "Hardware is only used in wired networks; software in wireless",
      "Hardware and software are interchangeable in modern networks",
      "Hardware is for storage; software is for transmission",
      "Hardware carries signals; software defines the rules for using them",
    ],
    optionRationales: [
      "Both hardware and software are used in both wired and wireless networks. The distinction is not between network types.",
      "Hardware and software are complementary, not interchangeable. Each performs a role the other cannot.",
      "Storage and transmission are separate functions, each involving both hardware and software.",
      null,
    ],
    correct: 3,
    explanation: "## Signals and Rules\n\nA network requires both hardware and software because each provides something the other cannot. **Hardware carries the signals** — the physical or wireless medium that transports the actual bits. **Software defines the rules** for using the signals — the protocols that determine how data is formatted, when it can be sent, how errors are handled, and how devices identify each other.\n\nThe analogy is a telephone system. The wires, phones, and switching equipment are hardware — without them, no call can be made. But the rules that govern how a call is set up, how voices are encoded, and how the connection is maintained are software. Both are essential. Hardware without software is a collection of equipment with no agreed way to use it. Software without hardware has nothing to run on.\n\nIn a modern network, the two are inseparable. When a laptop connects to Wi-Fi, the network card (hardware) detects the radio signal, and the network stack (software) negotiates the connection with the access point. When a webpage loads, the browser (software) sends a request, and the network card (hardware) transmits it as electrical or radio signals. Every interaction involves both layers working together, each doing what it is best suited to do.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-001",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "How are networks primarily classified?",
    options: [
      "By number of users",
      "By cost and vendor",
      "By topology, architecture, and geographic reach",
      "By operating system installed",
    ],
    optionRationales: [
      "User count is one factor in network design, but not the primary classification criterion.",
      "Cost and vendor are commercial attributes, not network structures. Two networks with the same structure can have very different costs.",
      null,
      "The operating system on the connected devices does not define the network. Devices with different operating systems can share a network.",
    ],
    correct: 2,
    explanation: "## Three Axes\n\nNetworks are primarily classified by three properties: **topology**, **architecture**, and **geographic reach**.\n\n**Topology** describes the physical or logical arrangement of devices on the network — how they are connected and how signals flow between them. The main topologies are bus, star, ring, and mesh. Each has different properties for cost, reliability, and performance.\n\n**Architecture** describes the roles devices play. In a **client/server** network, dedicated servers provide services and clients request them. In a **peer-to-peer** network, all devices are equal and can act as both. The architecture determines how the network is managed and who controls what.\n\n**Geographic reach** describes how far the network extends. A **LAN** covers a building or campus. A **WAN** spans cities or countries. A **MAN** covers a metropolitan area. A **PAN** covers the space around a single person. The reach determines the technologies used and the organisations that operate the network.\n\nUnderstanding these three axes helps classify any network. A home Wi-Fi network is a star-topology, peer-to-peer LAN. A corporate network might be a mesh-topology, client/server WAN. The same physical cables can be organised in very different ways, and the classification captures those differences.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-002",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a bus network topology?",
    options: [
      "A central hub connecting all devices in a star pattern",
      "All devices connected to a single central cable",
      "Each device connected directly to every other device",
      "Data travelling in a closed loop from device to device",
    ],
    optionRationales: [
      "Central hub connection describes a star topology. A bus has no central hub.",
      null,
      "Direct connection between every pair of devices describes a full mesh topology. It requires many more cables than a bus.",
      "Closed-loop data travel describes a ring topology. The two are different layouts.",
    ],
    correct: 1,
    explanation: "## One Cable, Many Devices\n\nA **bus topology** connects all devices to a single central cable called the *bus*. Every device taps into this shared backbone, and any signal put on the bus travels to all attached devices.\n\nThe design is simple and cheap. Only one cable runs through the network, and devices connect to it with short drop cables. This makes bus networks economical for small installations where the cost of wiring matters. In the 1980s, bus topologies were common in small offices and computer labs precisely because they minimised the amount of cable required.\n\nThe weakness is a single point of failure. If the main bus cable breaks, every device on the network loses connectivity. There is no alternate path. Performance also degrades as more devices are added, because all devices share the same cable and must take turns transmitting. When two devices transmit at the same time, their signals collide and both transmissions are lost. Modern networks have largely replaced bus topologies with star or switched topologies, which avoid both problems. But the concept remains important in networking courses because it illustrates the trade-offs between cost and reliability that shape every network design.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-003",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is the defining feature of a mesh network topology?",
    options: [
      "All devices are interconnected with one another",
      "A single central device connects everything",
      "All devices share a single cable",
      "Data travels in a circle from device to device",
    ],
    optionRationales: [
      null,
      "A central device is star topology. Mesh has no centre — every device is a peer.",
      "Shared cable is bus topology. Mesh uses many cables connecting devices in multiple paths.",
      "Circular travel is ring topology. Mesh has no prescribed direction of travel.",
    ],
    correct: 0,
    explanation: "## Every Path Open\n\nA **mesh topology** interconnects devices so that each device has a direct link to one or more other devices. In a **full mesh**, every device is connected to every other device; in a **partial mesh**, some connections are omitted to reduce cost.\n\nThe key property is redundancy. Because there are multiple paths between any two devices, the failure of any single link does not disconnect the network. Traffic simply routes around the broken link through an alternate path. This makes mesh the most reliable topology — no single failure can bring down the network.\n\nThe cost is the trade-off. A full mesh with $n$ devices requires $n(n-1)/2$ links. For five devices, that is ten links; for ten devices, forty-five; for a hundred devices, 4,950. The number grows quadratically, which makes full mesh impractical for large networks. Partial mesh is used where reliability matters most, and other topologies handle the rest.\n\nMesh is the topology of the Internet itself. The Internet's core routers are connected in a partial mesh, so that traffic can route around failures. When a cable is cut or a router fails, packets simply take a different path, and the rest of the network continues to function. This resilience is what allows the Internet to keep working even when individual pieces break.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-004",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What happens to data transmission in a ring network if one device fails?",
    options: [
      "The data is queued until the device is repaired",
      "The network automatically reroutes the data",
      "The entire network may stop functioning",
      "Only that device loses connectivity",
    ],
    optionRationales: [
      "Queuing requires a buffer that survives the failure. In a simple ring, data in flight is lost when the ring is broken.",
      "Automatic rerouting is a property of mesh topologies. Ring networks lack this capability unless they use a dual-ring design.",
      null,
      "A single device failure in a ring can break the loop, affecting every device that was downstream of the failed node.",
    ],
    correct: 2,
    explanation: "## Break the Circle\n\nIn a basic **ring topology**, data travels in one direction around a closed loop of devices. Each device passes data to its neighbour, which passes it to the next, until the data reaches its destination. If a single device or its connecting cable fails, **the entire network may stop functioning** — the ring is broken, and data cannot complete its circuit.\n\nThe problem is structural. The ring has no alternate path. Data has only one direction to travel, and if any point along that path is broken, everything downstream is cut off. Compare this to a mesh, where traffic can reroute around failures, or to a star, where a single device failure affects only that device.\n\nThe design does have advantages. Data travels at a predictable rate because only one device transmits at a time, and the token-passing protocol used in ring networks ensures fair access. Under heavy load, a ring can outperform a bus because there are no collisions. For these reasons, ring topologies are still used in some industrial networks and in the older IBM Token Ring standard. But for general office and home networks, the failure mode is too severe, and other topologies have become standard. A **dual-ring** design — where data can travel in either direction — mitigates the problem by allowing the network to heal itself when one link fails, but this adds complexity and cost.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-005",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "In a star network, what happens if the central device fails?",
    options: [
      "All devices on the network lose connectivity",
      "Only the failed device stops working",
      "The network continues with reduced speed",
      "Traffic automatically reroutes around the failure",
    ],
    optionRationales: [
      null,
      "The central device is not a leaf — every other device depends on it. Its failure affects everyone.",
      "Reduced speed is a consequence of congestion, not of a central failure. A central failure is catastrophic, not slowing.",
      "Automatic rerouting requires alternate paths. In a basic star, there is no alternate path — every device connects only to the centre.",
    ],
    correct: 0,
    explanation: "## The Centre Holds\n\nIn a **star topology**, every device connects to a central hub or switch. If the central device fails, **all devices lose connectivity** because there is no path between them except through the centre.\n\nThe failure mode is asymmetric. If a peripheral device fails, only that device is affected — the rest of the network continues normally. But if the centre fails, every device is isolated simultaneously. This is the defining weakness of the star design and its major trade-off compared to mesh.\n\nDespite this, star is the dominant topology in modern networks. The reasons are practical. Star networks are easy to install, because each device needs only one cable to the centre. They are easy to troubleshoot, because the central device can show which connections are active. They are easy to expand, because adding a new device just requires a new cable to the centre. And they scale well, because a modern switch can handle hundreds of connections.\n\nThe centre failure is a real risk, but it is manageable. Enterprise star networks use redundant switches and redundant power supplies. Home networks rarely bother, because the failure of a home router is rare and easily fixed by replacing it. The asymmetry — one failure affecting one device versus one failure affecting all — is a conscious trade-off that most networks accept in exchange for the many benefits the star topology provides.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-006",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a client/server network architecture?",
    options: [
      "A network designed only for online gaming",
      "A network where all devices are equal and share directly",
      "A network where one device serves and others request resources",
      "A network that only works within a single building",
    ],
    optionRationales: [
      "Client/server is a general architecture used for email, file sharing, databases, and many other services. Gaming is just one application.",
      "Equal devices sharing directly describes peer-to-peer, not client/server. The two architectures are fundamentally different.",
      null,
      "Client/server networks can span buildings, campuses, or even countries. Geographic scope is not what defines them.",
    ],
    correct: 2,
    explanation: "## Roles Assigned\n\nIn a **client/server** architecture, one or more computers act as **servers** that provide resources, and the other computers — the **clients** — request those resources. The roles are distinct: servers provide, clients consume.\n\nThe architecture centralises control. The server holds the data, enforces the rules, and provides the services. Clients do not store the authoritative copy of anything; they request what they need from the server and use the responses. This makes management simpler, because there is a single point of control. It also makes data more consistent, because every client sees the same version.\n\nMost large organisations use client/server architecture. The servers are typically housed in data centres with redundancy, backups, and monitoring. The clients are the individual devices used by employees. This model scales well, because adding a new client does not require changing the servers. It is also secure, because the servers can be protected behind firewalls and access controls, while clients can be less hardened without exposing the critical data.\n\nThe architecture is not without drawbacks. The server is a single point of failure — if it goes down, every client is affected. It requires dedicated hardware and staff to maintain. And it can be expensive to scale, because more clients eventually demand more server capacity. These costs are usually justified by the benefits in reliability, security, and management that client/server provides for organisations above a certain size.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-007",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a peer-to-peer network?",
    options: [
      "A network that requires an administrator for every device",
      "A network with dedicated servers providing services to clients",
      "A network where each device connects to the Internet through a different provider",
      "A network where all computers have equal status and share directly",
    ],
    optionRationales: [
      "Administrators are not required for peer-to-peer networks. The absence of central management is one of its distinguishing features.",
      "Dedicated servers describe client/server, the opposite architecture. Peer-to-peer has no dedicated server role.",
      "Multiple providers describe a multi-homed connection, not peer-to-peer. The architecture is about roles, not providers.",
      null,
    ],
    correct: 3,
    explanation: "## Small and Equal\n\nA **peer-to-peer (P2P)** network treats all connected computers as **equal**. Each device can share resources with the others, and none has a permanent role as server. Any device can be a client in one exchange and a server in the next.\n\nThe simplicity is the main advantage. Peer-to-peer networks require no dedicated server hardware, no administrator, and minimal configuration. Two laptops connected by a cable and a few clicks form a peer-to-peer network. This makes P2P ideal for small offices, home networks, and quick setups where the overhead of a server would not be justified.\n\nThe limitation is scale. Peer-to-peer networks work well for a handful of computers — usually fewer than ten. Beyond that, the lack of central control becomes a problem. There is no single place to manage user accounts, apply security policies, or back up data. Each device is responsible for its own files, and sharing is ad hoc. For larger organisations, the discipline of client/server outweighs the simplicity of P2P.\n\nA different use of the term — peer-to-peer file sharing over the Internet — extends the concept to millions of users. In that model, users exchange files directly with each other rather than through a central server. The architecture is different in scale, but the principle is the same: equality between participants, with no central authority coordinating the exchange.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-008",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a local area network (LAN)?",
    options: [
      "A network that spans multiple countries",
      "A network confined to a limited geographic area",
      "A network that operates only on wireless connections",
      "A network that connects devices without any cables",
    ],
    optionRationales: [
      "Multi-country networks are WANs, not LANs. The scale is the defining difference.",
      null,
      "LANs can be wired, wireless, or a mix. The medium does not determine the classification.",
      "Cable-free operation is one configuration of a LAN, not the definition. Most LANs use a mix of wired and wireless connections.",
    ],
    correct: 1,
    explanation: "## Close to Home\n\nA **Local Area Network (LAN)** connects computers and devices **within a limited geographic area** — typically a single building, a single campus, or a small group of nearby buildings. The word *local* is doing the defining work.\n\nLANs are the most common type of network. Home Wi-Fi networks, office Ethernet networks, school computer labs, and small business networks are all LANs. They are characterised by high speed, low cost, and short distances. Because the physical span is small, the technologies used can be simple and reliable. Ethernet and Wi-Fi are the two dominant LAN technologies, and almost every LAN today uses one or both.\n\nThe design of a LAN prioritises local performance. All the devices on the LAN are close enough that signals do not degrade significantly over distance, so the network can operate at full speed. All the devices share the same physical or logical segment, so communication between them is direct and fast. The LAN is the local neighbourhood of the network world — everything within easy reach, connected with the fastest available technology, without the complexity of routing across long distances.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-009",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a wide area network (WAN)?",
    options: [
      "A network that spans a large geographic region",
      "A network that requires only one router",
      "A network that covers a small office",
      "A network that connects devices within a single room",
    ],
    optionRationales: [
      null,
      "A WAN typically requires many routers and multiple transmission media. The idea of a single router does not apply at this scale.",
      "A small office is the domain of a LAN, not a WAN. The scale is much smaller.",
      "A single room is the smallest possible network scope. A WAN is the opposite — the widest possible.",
    ],
    correct: 0,
    explanation: "## Across Regions\n\nA **Wide Area Network (WAN)** spans a **large geographic region** — a city, a country, or the entire world. It connects multiple LANs and other networks together, allowing devices in distant locations to communicate as if they were nearby.\n\nThe Internet is the largest WAN — a global network of networks that connects billions of devices. But WANs also exist at smaller scales. A multinational company uses a WAN to connect its offices in different countries. A government uses a WAN to link its departments across a nation. A bank uses a WAN to connect its branches in different cities.\n\nWANs are fundamentally different from LANs in how they are built. A LAN's owner controls the entire infrastructure — the cables, switches, and routers are all on premises. A WAN relies on leased lines and public infrastructure owned by telecommunications companies. When a company builds a WAN, it does not install its own cables between cities; it rents capacity on existing fibre networks. This makes WANs more expensive to operate than LANs of equivalent capacity, and it makes their performance dependent on the providers they use.\n\nThe technology also differs. LANs use simple protocols and can afford to broadcast to every device. WANs use routing protocols that compute optimal paths across complex topologies and handle partial failures gracefully. The Internet's routing protocols, such as BGP, are designed for exactly this problem — routing traffic across a global network that changes constantly.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-010",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a metropolitan area network (MAN)?",
    options: [
      "A network within a single building",
      "A network that spans a city or metropolitan region",
      "A network that connects only mobile devices",
      "A network used exclusively by governments",
    ],
    optionRationales: [
      "A single building is the domain of a LAN. A MAN is larger, spanning the geography of a city.",
      null,
      "Mobile devices can connect to a MAN, but the network is not defined by the device types. It is defined by the geographic reach.",
      "MANs are used by many organisations, not just governments. Municipalities, universities, and corporations all use them.",
    ],
    correct: 1,
    explanation: "## City Scale\n\nA **Metropolitan Area Network (MAN)** is a network that spans a **city or metropolitan region**. It sits between the LAN and the WAN in scale — larger than a single building or campus, smaller than a country.\n\nMANs are often operated by municipal governments or large organisations that need connectivity across a city. A city might operate a MAN to connect its government offices, schools, libraries, and public services. A university might operate a MAN to connect its campuses across a metropolitan area. A bank might operate a MAN to connect branches within a city.\n\nThe technology used for a MAN is usually a mix of LAN and WAN technologies. Within each building, the network looks like a LAN. Between buildings, the connections use leased fibre or microwave links, like a WAN. The MAN is essentially a collection of LANs joined by a metropolitan-scale backbone.\n\nThe category matters because it captures a specific scale of network that has its own engineering challenges. The distances are too great for the simple topologies of a LAN, but not so great that the full complexity of a WAN is necessary. Many MANs are now being replaced by fibre connections that blur the boundary with WANs, but the classification remains useful for describing networks that operate at the metropolitan scale.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-011",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a personal area network (PAN)?",
    options: [
      "A network that connects only desktop computers",
      "A network that requires a dedicated server",
      "A network that connects personal devices in close proximity",
      "A network that spans a country",
    ],
    optionRationales: [
      "PANs connect mobile devices — phones, watches, earbuds — not just desktops. The category includes many device types.",
      "PANs do not use servers. They are direct connections between devices, often through Bluetooth or a similar short-range technology.",
      null,
      "Country-scale networks are WANs. A PAN is the smallest type of network, confined to the space around a person.",
    ],
    correct: 2,
    explanation: "## Around You\n\nA **Personal Area Network (PAN)** connects **personal devices in close proximity** — typically within a few metres of a single person. It is the smallest category of network, confined to the space around one individual.\n\nThe most common example is a phone connected to a wireless headset through Bluetooth. Another is a phone connected to a smartwatch. A third is a laptop connected to a wireless mouse and keyboard. Each of these connections forms a small network that belongs to one person and follows them as they move.\n\nThe technology is usually Bluetooth, which was designed specifically for this scale. It uses low-power radio waves, has a range of about 10 metres, and is optimised for the short bursts of data that personal devices exchange. Other options include USB for wired connections and NFC for very short ranges.\n\nPANs are increasingly important as the number of personal devices grows. A typical user might carry a phone, a watch, wireless earbuds, and a fitness tracker — all connected to each other through PANs. These devices share data, coordinate alerts, and work together as a small ecosystem. The PAN is the network that makes this ecosystem function, invisible to the user but essential to the experience.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-012",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a body area network (BAN)?",
    options: [
      "A network that connects only desktop computers",
      "A network of computers in a single office",
      "A network that spans multiple buildings",
      "A network of sensors worn on or implanted in the body",
    ],
    optionRationales: [
      "Desktop computers are not body-worn devices. A BAN uses sensors designed to monitor the human body.",
      "Office computers form a LAN, not a BAN. The scale and purpose are entirely different.",
      "Multi-building networks are LANs or MANs. A BAN operates at the scale of a human body.",
      null,
    ],
    correct: 3,
    explanation: "## Inside the Body\n\nA **Body Area Network (BAN)** is a network of **sensors worn on or implanted in the human body**. It is a specialised form of personal area network, focused on monitoring health and physical state.\n\nThe sensors might measure heart rate, blood glucose, body temperature, blood oxygen, movement, or any other physiological signal. They communicate wirelessly with each other and with an external device — often a phone or a dedicated medical monitor — that aggregates the data. The external device can then transmit the readings to a healthcare provider or to the user's own records.\n\nBANs are one of the most impactful applications of the IoT in healthcare. Continuous monitoring replaces episodic measurements at doctor visits, catching trends and events that would otherwise be missed. A patient with a heart condition can be monitored 24/7, with alerts sent to medical staff if the readings suggest a problem. A person with diabetes can track blood glucose continuously rather than through periodic finger pricks. The technology enables a level of care that was not possible before.\n\nThe privacy concerns are correspondingly serious. A BAN collects data about the most intimate aspects of a person's physiology. The data is sensitive, personal, and potentially harmful if leaked. Medical data has legal protections in many jurisdictions, but the technology is new enough that the rules are still catching up. Users of BAN devices are often unaware of how much data is being collected or where it goes, which raises questions about consent and control that the industry is only beginning to address.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-013",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is a wireless local area network (WLAN)?",
    options: [
      "A LAN that uses wireless connections instead of cables",
      "A network that connects only mobile phones",
      "A network that operates without any infrastructure",
      "A WAN that uses only wireless connections",
    ],
    optionRationales: [
      null,
      "WLANs connect a wide range of devices, including laptops, tablets, phones, and printers.",
      "WLANs rely on access points, which are infrastructure. The idea of infrastructure-free networking is a different concept.",
      "A WLAN is local, not wide-area. The scale is the same as a LAN; only the medium changes.",
    ],
    correct: 0,
    explanation: "## Local and Wireless\n\nA **Wireless Local Area Network (WLAN)** is a LAN that uses **wireless connections** instead of cables. It provides the same local-area coverage as a wired LAN, but without the physical wiring.\n\nThe technology is Wi-Fi, the standard that dominates wireless networking. Wi-Fi operates in unlicensed radio bands, meaning anyone can deploy it without needing a license from a regulator. The user's device connects to a **wireless access point**, which is usually connected to the wired network. The access point acts as a bridge, translating between the wireless signals from the devices and the wired signals of the rest of the network.\n\nWLANs have transformed how networks are deployed. Where cabling was once the largest cost of setting up a LAN, now a single access point can serve dozens of devices without any physical installation. This has made networking practical in places where cabling would be impractical — historic buildings, outdoor spaces, temporary setups, and shared environments like cafés and airports.\n\nThe trade-offs are the same as for wireless networking in general: less reliability, more security concerns, and performance that degrades with distance and interference. But the convenience has proven decisive in most contexts, and WLANs are now the standard way users connect to networks at the edge.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-014",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is the main advantage of a client/server network over a peer-to-peer network?",
    options: [
      "It works without any operating system",
      "It is cheaper to set up",
      "It requires no central management",
      "It provides better centralised control and security",
    ],
    optionRationales: [
      "All networks require operating systems on the connected devices. The presence of an OS is not a distinguishing feature.",
      "Client/server is more expensive than peer-to-peer, not cheaper, because it requires dedicated server hardware and often staff.",
      "Client/server specifically requires central management, which is one of its advantages.",
      null,
    ],
    correct: 3,
    explanation: "## Central Control\n\nThe main advantage of **client/server** over **peer-to-peer** is **centralised control and security**. The server is a single point where user accounts, permissions, backups, and policies are managed.\n\nIn a client/server network, the administrator can create user accounts with specific permissions, ensuring that only authorised users can access sensitive data. Access can be revoked or modified from the server without touching any client device. Backups are handled by the server, so data is protected consistently. Security policies are applied uniformly. When something goes wrong, the administrator has a single place to look.\n\nIn a peer-to-peer network, all of these functions are ad hoc. Users manage their own accounts on their own machines. Permissions are set individually. Backups depend on each user remembering to do them. Security is only as strong as the least careful user, because there is no central enforcement. This works fine for a household of five people where everyone knows each other, but it fails quickly in any setting where accountability matters.\n\nThe trade-off is cost and complexity. Client/server requires server hardware, server operating system licenses, and often dedicated IT staff. The initial investment is significant. For small organisations, that investment may not be justified. But for any organisation large enough to have a mix of users, roles, and data classifications, the centralised control is worth the cost. The ability to revoke access when an employee leaves, to enforce password policies, and to back up everything in one place is essential to running a reliable, secure computing environment.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-015",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "How does a star topology differ from a bus topology?",
    options: [
      "Star uses wireless; bus uses wired connections",
      "Star is cheaper to install than bus",
      "Star cannot be expanded once set up",
      "Star uses a central device; bus uses a single shared cable",
    ],
    optionRationales: [
      "Both star and bus can use wired connections. The distinction is the topology, not the medium.",
      "Star typically costs more than bus because it requires more cable (one run to each device) and a central switch.",
      "Star is easy to expand — adding a device just requires a new cable to the central switch.",
      null,
    ],
    correct: 3,
    explanation: "## Centre vs Backbone\n\nThe difference between **star** and **bus** topologies is what connects the devices. **Star** uses a central device — a hub or switch — and each computer has its own cable to that centre. **Bus** uses a single shared backbone cable that all devices tap into.\n\nThe physical layouts are very different. A bus looks like a line with branches; a star looks like rays radiating from a central point. The bus is minimal in its wiring, using only one main cable with short drop cables. The star uses more cable, because each device needs its own connection to the centre.\n\nThe failure modes differ in an important way. In a bus, if the main cable breaks anywhere, every device loses connectivity — the failure is total regardless of where it happens. In a star, if a leaf device or its cable fails, only that device is affected; other devices continue normally. Only the central device is a single point of failure in a star, and modern switches are designed to be highly reliable.\n\nPerformance also differs. In a bus, all devices share the same cable, so only one can transmit at a time. As devices are added, collisions increase and performance degrades. In a star, the central switch can forward traffic between specific pairs of devices without affecting others, so performance scales better. This is why star has become the dominant topology in modern networks — the extra cabling is a small price for better reliability and performance.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.2-016",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.2 Network Structures",
    q: "What is the Internet considered in terms of network classification?",
    options: [
      "A single LAN",
      "A peer-to-peer network only",
      "The largest WAN",
      "A private intranet",
    ],
    optionRationales: [
      "A single LAN is a local network. The Internet spans the entire globe.",
      "While parts of the Internet use peer-to-peer exchanges, the Internet itself is a network of networks, not a single P2P architecture.",
      null,
      "An intranet is private and internal. The Internet is public and global.",
    ],
    correct: 2,
    explanation: "## The Network of Networks\n\nThe Internet is the **largest WAN** in existence — a global network of networks that connects billions of devices worldwide. It is not a single network but a collection of many networks that have agreed to communicate with one another.\n\nThe scale is difficult to overstate. The Internet includes millions of individual LANs in homes, offices, schools, and data centres. It includes regional WANs that connect those LANs within a city or country. It includes undersea cables that connect continents. It includes satellite links for regions that cannot be reached by cable. All of these components work together as a single global network.\n\nWhat holds it together is a set of shared protocols. The Internet Protocol (IP) gives every connected device a unique address. The Transmission Control Protocol (TCP) ensures that data arrives reliably. The Domain Name System (DNS) translates human-readable names into IP addresses. Because every network on the Internet agrees to these protocols, they can all communicate regardless of who owns them or where they are located.\n\nThe Internet is also an example of how the same technology can be used for different purposes. Within the Internet, there are private networks (intranets) that only employees can access. There are extranets that share specific resources with partners. There are peer-to-peer networks for file sharing. There are content delivery networks that distribute media efficiently. Each of these is a distinct network operating within the Internet, using the same underlying infrastructure for different goals. This layering is what makes the Internet so versatile — it is not one thing but many things sharing a common foundation.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-001",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is the purpose of network standards?",
    options: [
      "To set the price of networking equipment",
      "To determine which companies can join a network",
      "To store backups of network data",
      "To ensure devices from different manufacturers can communicate",
    ],
    optionRationales: [
      "Pricing is set by the market, not by technical standards. Standards ensure compatibility, not cost.",
      "Membership is a policy decision, not a technical one. Standards govern how devices communicate, not who can use them.",
      "Backups are a storage function, unrelated to standards. Standards define protocols; backup is a separate operational activity.",
      null,
    ],
    correct: 3,
    explanation: "## Common Language\n\nNetwork standards exist to ensure that **devices from different manufacturers can communicate**. Without standards, each manufacturer would invent its own protocols, and a device from one company would be unable to talk to a device from another.\n\nThe problem is not hypothetical. In the early days of computing, every manufacturer had its own networking technology. IBM mainframes could not talk to DEC minicomputers. HP printers could not connect to Sun workstations. Each system worked fine within its own ecosystem, but none could interoperate. Standards solved this by defining a common language that every manufacturer agreed to speak.\n\nThe standards cover many layers. They specify the physical shape of connectors, the electrical signals used to carry data, the format of data packets, the protocols for reliable delivery, and much more. As long as a device conforms to the standard, it can participate in the network regardless of who made it.\n\nCommon standards include Ethernet for wired networks, Wi-Fi (IEEE 802.11) for wireless, TCP/IP for Internet communication, and HTTP for web traffic. Each standard is maintained by a standards body — the IEEE, IETF, or another organisation — and updated as technology evolves. The standards are voluntary in the sense that no law requires manufacturers to follow them, but in practice every commercial device conforms, because a device that does not speak the standard language is useless on a modern network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-002",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is a protocol in the context of networking?",
    options: [
      "A program that manages user accounts",
      "A type of cable used in networks",
      "A rule governing how devices communicate",
      "A device that connects two networks",
    ],
    optionRationales: [
      "User account management is software. A protocol defines how devices communicate, not how users are managed.",
      "Cables are transmission media, not protocols. A protocol defines how data is carried; a cable carries it.",
      null,
      "Devices that connect networks are routers. A protocol is the set of rules they follow when forwarding traffic.",
    ],
    correct: 2,
    explanation: "## The Rules of Communication\n\nA **protocol** is a set of rules that governs how devices communicate on a network. It defines the format of messages, the order in which they are sent, how errors are handled, and what each device should do at each stage of an exchange.\n\nThe concept is broader than networking. Diplomats follow protocols about how to address each other, when to speak, and how to exchange documents. Computers follow analogous protocols — rules that let two machines coordinate their communication without confusion.\n\nA protocol typically specifies several things. It defines the **syntax** — the format of the data being sent, such as which bits mean what. It defines the **semantics** — what each message means and what response it expects. It defines **timing** — when data can be sent, how fast, and what happens if the receiver is not ready. Together, these rules let two devices exchange information reliably even though they were built by different manufacturers and may run different software.\n\nProtocols work in layers. At the lowest level, protocols define electrical signals and cable specifications. At higher levels, protocols define how data is routed across networks, how connections are established, and how applications talk to each other. The TCP/IP stack is the most important example — a set of protocols that underlies virtually all modern networking, from the physical hardware up to web browsers and email clients.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-003",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is Ethernet?",
    options: [
      "The dominant standard for wired networks",
      "A protocol for sending email messages",
      "A wireless standard for mobile phones",
      "A type of encryption for network traffic",
    ],
    optionRationales: [
      null,
      "Email protocols are SMTP, POP3, and IMAP. Ethernet is a lower-level standard that carries the network traffic those protocols use.",
      "Wireless standards are Wi-Fi and cellular. Ethernet is wired.",
      "Encryption is a security technique, not a network standard. Ethernet carries data; encryption protects it.",
    ],
    correct: 0,
    explanation: "## The Wired Standard\n\n**Ethernet** is the dominant standard for **wired networks**. It defines how devices connect to a shared cable, how they address each other, how they detect and resolve collisions, and how data is framed and transmitted.\n\nThe standard originated in the 1970s at Xerox PARC and has evolved continuously since. The original Ethernet ran at 3 Mbps over coaxial cable. Modern Ethernet runs at 10 Gbps, 100 Gbps, or higher over copper twisted-pair or fibre-optic cable. Through all the changes, the fundamental design has remained consistent — the same frame format, the same addressing scheme, the same basic rules.\n\nEthernet's dominance comes from its combination of simplicity and adaptability. It is simple enough to implement cheaply, which is why almost every device that connects to a wired network has an Ethernet port. It is adaptable enough to keep scaling up as bandwidth demands increase. The transition from 10 Mbps to 100 Mbps to 1 Gbps to 10 Gbps and beyond has happened smoothly, and each generation is backward compatible with the previous ones.\n\nThe standard is maintained by the IEEE under the designation 802.3. Related standards cover wireless networking (802.11, known as Wi-Fi), Bluetooth (802.15.1), and others. Together, these IEEE standards define most of the networking technologies in everyday use.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-004",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What does TCP/IP stand for?",
    options: [
      "Transmission Control Protocol / Internet Protocol",
      "Technical Communication Process / Internal Port",
      "Terminal Configuration Protocol / Integrated Path",
      "Transport Connection Protocol / Internet Provider",
    ],
    optionRationales: [
      null,
      "Technical Communication Process and Internal Port are not the correct expansions. The TCP/IP stack has a specific and well-established name.",
      "Terminal Configuration Protocol and Integrated Path are not the correct expansions. These are fabricated terms.",
      "Transport Connection Protocol and Internet Provider are not the correct expansions. The correct terms are Transmission Control Protocol and Internet Protocol.",
    ],
    correct: 0,
    explanation: "## Two Protocols, One Stack\n\n**TCP/IP** stands for **Transmission Control Protocol / Internet Protocol**. It is not a single protocol but a family of protocols that work together to enable communication over the Internet.\n\nThe two named protocols have distinct roles. **IP** (Internet Protocol) is responsible for addressing and routing. Every device on the Internet has an IP address, and IP handles the task of getting packets from a source address to a destination address, potentially through many intermediate routers. **TCP** (Transmission Control Protocol) is responsible for reliable delivery. It breaks data into packets, sends them across the network, verifies that they arrived, and reassembles them in the correct order at the destination. If a packet is lost, TCP retransmits it.\n\nThe two work as a team. IP provides the addressing and routing; TCP provides the reliability on top of it. Together they form the foundation of almost all Internet communication. Web browsing, email, file transfer, video streaming — all of these applications use TCP/IP at the lower layers, regardless of what they do at the higher layers.\n\nThe stack includes other protocols as well. **UDP** (User Datagram Protocol) is a lighter alternative to TCP that skips the reliability checks in exchange for lower latency. **ICMP** (Internet Control Message Protocol) handles error reporting and diagnostics. **HTTP**, **SMTP**, and **FTP** are application-layer protocols that sit on top of TCP/IP and provide specific services. The full stack is what makes the Internet work, and TCP/IP is the core of it.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-005",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is the difference between IPv4 and IPv6?",
    options: [
      "IPv4 is encrypted; IPv6 is not",
      "IPv6 provides vastly more addresses than IPv4",
      "IPv6 only works on wireless networks",
      "IPv4 is faster than IPv6",
    ],
    optionRationales: [
      "Neither protocol is encrypted by itself. Encryption is handled by separate protocols like TLS.",
      null,
      "IPv6 works on both wired and wireless networks. The protocol is independent of the transmission medium.",
      "Speed is not the primary difference. Both protocols can carry data at the same rate; the difference is the size of the address space.",
    ],
    correct: 1,
    explanation: "## More Addresses\n\nThe difference between **IPv4** and **IPv6** is the size of the address space. IPv4 uses 32-bit addresses, which gives about **4.3 billion** unique addresses. IPv6 uses 128-bit addresses, which gives about **340 undecillion** — a number so large that it is difficult to write without scientific notation.\n\nThe reason for the expansion is exhaustion. When IPv4 was designed in the 1970s, the designers did not anticipate that billions of devices would eventually need unique addresses. By the 2010s, the IPv4 address space was effectively depleted — the last blocks had been allocated, and new devices could no longer get unique IPv4 addresses in some regions. Techniques like NAT (Network Address Translation) had extended the supply by letting many devices share a single public address, but the fundamental limit remained.\n\nIPv6 solves this by providing more addresses than could ever be needed. The address space is $2^{128}$, which is enough to assign a unique address to every grain of sand on Earth many times over. The transition from IPv4 to IPv6 has been slow because the two are not directly compatible — a device configured for IPv4 cannot talk to one configured for IPv6 without translation. Many networks now run both protocols simultaneously, a configuration called **dual-stack**, to bridge the transition. Eventually, IPv6 is expected to become the standard, but the process will take decades because the installed base of IPv4 equipment is enormous.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-006",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is Wi-Fi?",
    options: [
      "A wireless networking standard based on the IEEE 802.11 family",
      "A protocol for transferring files between devices",
      "A wired standard for high-speed office networks",
      "A cellular network for mobile phones",
    ],
    optionRationales: [
      null,
      "File transfer is an application-layer function. Wi-Fi is a lower-layer networking standard that carries such traffic.",
      "Wired standards use cables. Wi-Fi is wireless.",
      "Cellular networks use licensed spectrum and provide coverage over large areas. Wi-Fi uses unlicensed spectrum and covers a local area.",
    ],
    correct: 0,
    explanation: "## The Wireless Standard\n\n**Wi-Fi** is a wireless networking standard based on the **IEEE 802.11** family. It defines how devices communicate over short distances using radio waves, in the unlicensed 2.4 GHz and 5 GHz bands (and increasingly the 6 GHz band for newer standards).\n\nThe 802.11 family has evolved through many versions. **802.11b** (1999) was the first widely adopted standard, providing 11 Mbps. **802.11g** (2003) improved that to 54 Mbps. **802.11n** (2009) introduced multiple antennas and reached hundreds of Mbps. **802.11ac** (2013) went further with wider channels. **802.11ax** (2019, marketed as Wi-Fi 6) focuses on efficiency in crowded environments. Each generation is generally backward compatible with earlier ones.\n\nThe naming is confusing, which is why the Wi-Fi Alliance introduced the simpler *Wi-Fi 4*, *Wi-Fi 5*, *Wi-Fi 6*, and *Wi-Fi 7* labels. These map to 802.11n, 802.11ac, 802.11ax, and 802.11be respectively. The marketing labels are easier to remember and communicate the generational progression more clearly.\n\nWi-Fi is not the only wireless technology, but it is by far the dominant one for local area networking. Its success comes from the combination of unlicensed spectrum, cheap chips, and broad industry adoption. Almost every laptop, phone, tablet, and printer sold today includes Wi-Fi. The technology has become so ubiquitous that its presence is assumed in most consumer devices.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-007",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What does the designation 802.11ac on a device indicate?",
    options: [
      "The device supports 802.11 GB of storage",
      "The device is encrypted with 802.11 algorithms",
      "The device supports a specific Wi-Fi standard",
      "The device is limited to 802.11 users",
    ],
    optionRationales: [
      "802.11 is a network standard number, not a storage capacity. The two are unrelated.",
      "802.11 does not refer to encryption. Encryption protocols have different designations.",
      null,
      "802.11 standards are backward compatible. A device supporting 802.11ac also supports earlier standards.",
    ],
    correct: 2,
    explanation: "## The Wi-Fi Generation\n\nA designation like **802.11ac** on a device indicates that it supports that specific Wi-Fi standard. The number 802.11 identifies the IEEE committee's wireless networking family, and the letters after identify the specific generation.\n\nEach generation offers specific improvements. **802.11ac** introduced wider channels (up to 160 MHz), more spatial streams (up to eight), and MU-MIMO (multi-user multiple-input multiple-output), which lets an access point serve multiple devices simultaneously. The result was significantly higher throughput than 802.11n, especially in dense environments where many devices compete for airtime.\n\nDevices often carry multiple designations. A laptop might say it supports 802.11 a/b/g/n/ac/ax, meaning it can work with any of those standards. When it connects to a network, it uses the highest standard that both the device and the access point support. This backward compatibility is what allows old and new devices to coexist on the same network.\n\nThe letter designations are being replaced by simpler numbered names. **Wi-Fi 4** corresponds to 802.11n, **Wi-Fi 5** to 802.11ac, **Wi-Fi 6** to 802.11ax, and **Wi-Fi 7** to 802.11be. The numbered names are easier to compare at a glance — Wi-Fi 6 is obviously newer than Wi-Fi 5 — while the technical designations remain in use in specifications and standards documents.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-008",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is Bluetooth?",
    options: [
      "A cellular network standard",
      "A satellite communication protocol",
      "A short-range wireless protocol for personal devices",
      "A wired standard for office networks",
    ],
    optionRationales: [
      "Cellular networks operate over licensed spectrum and span large areas. Bluetooth is unlicensed and short-range.",
      "Satellite communication uses radio links to orbiting satellites. Bluetooth operates over a few metres on the ground.",
      null,
      "Bluetooth is wireless. Wired standards use cables.",
    ],
    correct: 2,
    explanation: "## Short-Range Radio\n\n**Bluetooth** is a **short-range wireless protocol** designed for connecting personal devices. It operates in the unlicensed 2.4 GHz band and has a range of about 10 metres, depending on the version and the physical environment.\n\nThe protocol was designed for a specific problem: how to connect nearby devices without cables and without the complexity of a full network. Bluetooth handles the pairing process — the initial exchange of security keys — and manages the connection once devices are paired. The user does not need to configure addresses, choose channels, or worry about interference; Bluetooth handles all of that automatically.\n\nTypical uses include connecting a phone to a headset, a laptop to a wireless mouse, a car stereo to a phone, and a fitness tracker to a phone. Each of these is a small, personal connection between two devices. The protocol is optimised for low power consumption, so Bluetooth devices can run for weeks or months on a single battery charge.\n\nBluetooth has evolved through several versions. **Bluetooth Classic** handles higher-bandwidth audio streaming. **Bluetooth Low Energy (BLE)** is optimised for IoT devices that need to transmit small amounts of data over long periods. **Bluetooth 5.0** and later versions extend the range and improve reliability. The protocol has become one of the most widely deployed wireless standards, present in almost every phone, laptop, and personal device sold today.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-009",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is UWB (Ultra-Wideband)?",
    options: [
      "A standard for high-speed short-range radio communication",
      "A protocol for long-distance satellite links",
      "A type of wired network cable",
      "A cellular network standard used in Asia",
    ],
    optionRationales: [
      null,
      "Satellite protocols operate over thousands of kilometres. UWB works at very short range.",
      "UWB is wireless. Wired cables are a different category entirely.",
      "UWB is not a cellular standard. Cellular networks use licensed spectrum and are governed by telecommunications regulators.",
    ],
    correct: 0,
    explanation: "## Fast and Through Walls\n\n**Ultra-Wideband (UWB)** is a wireless standard for **high-speed, short-range** radio communication. It operates by transmitting very short pulses of radio energy across a wide range of frequencies, rather than using a narrow band at a single frequency.\n\nThe wide bandwidth has two important consequences. First, it allows very high data rates over short distances — enough for streaming video, high-resolution audio, and large file transfers. Second, the pulses are so short that UWB signals can pass through walls, doors, and other obstacles that would block or reflect conventional radio signals.\n\nUWB is used in two main applications. High-data-rate UWB was designed for wireless USB — allowing peripherals to connect without cables. Low-data-rate UWB is used for precise location tracking. Because UWB pulses are so short, the time it takes for a pulse to travel between two devices can be measured very precisely, giving location accuracy within a few centimetres. This is used in applications like locating equipment in warehouses, tracking people in buildings, and finding lost items with a phone.\n\nUWB has not become as widespread as Wi-Fi or Bluetooth, largely because its use cases overlap with those of other technologies. But its combination of high speed and precise location tracking keeps it in use for specialised applications where those properties matter.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-010",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is IrDA?",
    options: [
      "A standard using infrared light waves for short-range communication",
      "A cellular network standard for high-speed data",
      "A protocol for encrypting wireless networks",
      "A satellite communication standard for remote areas",
    ],
    optionRationales: [
      null,
      "Cellular networks use radio waves, not infrared light.",
      "Encryption is handled by other protocols. IrDA is a communication standard, not a security one.",
      "Satellite communication uses radio waves to orbit. IrDA uses infrared over a few metres on the ground.",
    ],
    correct: 0,
    explanation: "## Light Waves\n\n**IrDA** (Infrared Data Association) is a standard for **short-range communication using infrared light waves**. It was widely used in the 1990s and early 2000s for connecting nearby devices.\n\nThe technology has a fundamental limitation: infrared light requires line of sight. The transmitter and receiver must be able to see each other, with no obstacles in between. This makes IrDA useful for specific applications — pointing a remote control at a television, transferring data between two devices placed face-to-face — but impractical for general networking.\n\nIrDA was the standard for remote controls, which is why every television, air conditioner, and stereo system came with an infrared remote. It was also used for early data transfers between laptops and phones, before Wi-Fi and Bluetooth became common. The famous *beaming* feature on early Palm Pilots and Nokia phones used IrDA to transfer contacts between devices held close together.\n\nThe technology has been largely replaced by Bluetooth and Wi-Fi, which do not require line of sight and have longer ranges. Remote controls still use infrared because it is simple, cheap, and directional — the directionality is actually useful because it lets the user point at a specific device. But for general networking, IrDA is now rare. The standards still exist, and some devices still support them, but the practical use has declined sharply over the past two decades.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-011",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is an RFID tag made up of?",
    options: [
      "An antenna and a memory chip",
      "A magnetic stripe and a plastic backing",
      "A laser-readable pattern of pits and lands",
      "A small battery and a speaker",
    ],
    optionRationales: [
      null,
      "A magnetic stripe is used on cards requiring physical contact. RFID tags communicate wirelessly.",
      "Laser-readable patterns are used on optical discs. RFID tags use radio waves.",
      "RFID tags do not have speakers. They transmit data electronically, not through sound.",
    ],
    correct: 0,
    explanation: "## Chip and Antenna\n\nAn **RFID tag** contains two essential components: a **memory chip** and an **antenna**. The chip holds the tag's identification number or other data; the antenna transmits that data over radio waves when a reader signals.\n\nThe simplicity is the point. An RFID tag has no processor, no display, no user interface. It does one thing: when a reader broadcasts a signal, the tag responds with its stored data. Passive tags have no battery — they draw power from the reader's signal, using the energy in the incoming radio waves to power their response. Active tags have a small battery and can transmit more frequently and over longer distances.\n\nThe applications range widely. In retail, tags on products allow inventory to be counted in seconds rather than hours. In logistics, tags on pallets track shipments through warehouses and across continents. In healthcare, tags on equipment help hospitals locate expensive devices. In pets, tags identify lost animals when scanned by a veterinarian. In passports, tags allow border agents to read passport data without physical contact.\n\nAll of these applications share the same core capability: a small, durable, wireless identification device that does not require line of sight and cannot be smudged or damaged as easily as a printed barcode. The chip and antenna are what make this possible, and their simplicity is what makes RFID tags cheap enough to deploy in the billions.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-012",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "How does NFC relate to RFID?",
    options: [
      "NFC is a subset of RFID with a very short range",
      "NFC replaces RFID in all modern applications",
      "NFC uses light waves instead of radio waves",
      "NFC is a completely different technology",
    ],
    optionRationales: [
      null,
      "RFID is still widely used for longer-range applications. NFC has not replaced it; the two coexist.",
      "Both NFC and RFID use radio waves. Light-based communication is a different category.",
      "NFC and RFID share the same underlying technology. They are not completely separate.",
    ],
    correct: 0,
    explanation: "## A Subset of RFID\n\n**NFC** (Near-Field Communication) is technically a subset of **RFID**. It uses the same fundamental principle — a reader sends a radio signal, and a tag responds with stored data — but operates at a much shorter range and with specific additional features.\n\nThe range difference is the defining one. NFC operates within about 10 centimetres, while RFID can work at ranges from a few centimetres up to several metres. The short range of NFC is a deliberate design choice: it makes the technology secure by ensuring that the user must actively bring their device close to the reader. For payments, transit passes, and access control, this physical proximity is the security feature.\n\nBeyond the range, NFC adds bidirectional communication — both devices can send and receive data — and supports more complex interactions. An NFC phone can act as a card, a reader, or a peer. This flexibility enables applications like peer-to-peer file transfer, tag writing, and secure element storage. RFID tags are typically more passive — they respond when read but do not perform complex actions.\n\nThe two technologies coexist because they serve different needs. RFID is used where long-range identification is useful: inventory tracking, toll collection, animal identification. NFC is used where short-range, secure interaction is desirable: payments, ticketing, and pairing. Both rely on the same underlying physics, but their design choices reflect different priorities.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-013",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "Which of the following is an example of an NFC tag?",
    options: [
      "A cordless telephone base station",
      "A magnetic stripe credit card",
      "A business card with an embedded chip",
      "A USB drive with a plastic shell",
    ],
    optionRationales: [
      "Cordless phone base stations use radio for voice communication, not NFC.",
      "Magnetic stripe cards require physical contact with a reader. NFC tags communicate wirelessly.",
      null,
      "USB drives use flash memory and physical ports. NFC tags are wireless.",
    ],
    correct: 2,
    explanation: "## Small and Everywhere\n\nAn **NFC tag** is a small chip with an antenna that stores data and transmits it wirelessly to a nearby reader. A **business card with an embedded chip** is a common example — the chip contains contact information, and tapping the card against a phone makes the phone read the data.\n\nNFC tags are simple and cheap, which allows them to be embedded in almost any object. They appear in:\n\n- **Business cards** — tap to add a contact\n- **Posters and advertisements** — tap to open a website\n- **Product packaging** — tap to see more information\n- **Event wristbands** — tap to enter or pay\n- **Transit passes** — tap to ride\n- **Pet collars** — tap to see owner information\n- **Key fobs** — tap to unlock doors\n\nEach tag holds a small amount of data — typically a few hundred bytes — and does not need its own power. When a reader sends a signal, the tag draws energy from that signal and responds with its stored content.\n\nThe versatility comes from the small form factor and low cost. NFC tags can be printed on stickers, embedded in plastic, or woven into fabric. They survive most conditions and last essentially forever. This combination is what makes them ideal for applications where identification needs to be cheap, durable, and effortless for the user.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-014",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What role do standards play in enabling competition between manufacturers?",
    options: [
      "They prevent new manufacturers from entering the market",
      "They eliminate competition by forcing standardisation",
      "They allow devices from different manufacturers to work together",
      "They require all manufacturers to use the same components",
    ],
    optionRationales: [
      "Standards lower barriers to entry by defining what any manufacturer must do to participate. New manufacturers can compete by meeting the standard.",
      "Standards enable competition, not prevent it. When devices must interoperate, many manufacturers can compete on quality and price.",
      null,
      "Standards define external interfaces, not internal components. Manufacturers can use whatever components they choose as long as the external behaviour matches the standard.",
    ],
    correct: 2,
    explanation: "## Competition Through Compatibility\n\nNetwork standards **enable competition** by allowing devices from different manufacturers to work together. Without standards, the market would fragment into isolated ecosystems, and customers would be locked into buying from a single vendor for every component.\n\nThe history of the computer industry illustrates this. In the 1970s, IBM mainframes could only communicate with IBM equipment. DEC minicomputers could only talk to DEC equipment. Each manufacturer had its own proprietary networking, and customers had no choice but to buy everything from one vendor. Standards like Ethernet and TCP/IP broke down these barriers. Once any manufacturer could build a device that spoke the standard, the market opened up. A customer could buy a router from one company, a switch from another, and network cards from a third, knowing that they would all interoperate.\n\nThe result is the modern networking market, where hundreds of manufacturers compete on the same playing field. Cisco, Juniper, Huawei, Aruba, Netgear, and countless others all make products that follow the same standards. Customers choose based on price, features, reliability, and support, rather than on which ecosystem they can afford to be locked into.\n\nStandards do not constrain what manufacturers can build. They define the external contract — the rules that any device must follow to participate in the network. Inside that contract, manufacturers are free to innovate, differentiate, and compete. This is why the standards-based approach has been so successful, and why virtually every modern networking technology is built on open standards rather than proprietary designs.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-015",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "What is a network protocol's role in error handling?",
    options: [
      "It stores backups of all transmitted data",
      "It encrypts data to prevent tampering",
      "It prevents any errors from occurring",
      "It detects errors and coordinates recovery between devices",
    ],
    optionRationales: [
      "Storage is not a protocol function. Protocols handle the transmission of data, not its archiving.",
      "Encryption is a separate security layer. Error handling and encryption solve different problems.",
      "Protocols cannot prevent physical errors such as signal interference or cable damage.",
      null,
    ],
    correct: 3,
    explanation: "## Detecting and Recovering\n\nA network protocol's role in error handling is to **detect errors and coordinate recovery** between devices. Errors are inevitable in any communication system — signals get corrupted by interference, packets get lost, hardware fails. A good protocol anticipates these failures and specifies what should happen when they occur.\n\nError detection works through redundancy. Protocols add check values — like checksums or cyclic redundancy checks — to transmitted data. The receiver computes the same value from the received data and compares. If the values match, the data is probably correct. If they do not, the data was corrupted in transit.\n\nError recovery depends on the type of protocol. **TCP**, the reliable protocol of the Internet, retransmits lost or corrupted packets. When a receiver does not acknowledge a packet within a timeout, the sender assumes it was lost and sends it again. This is why TCP can guarantee that data arrives intact, in order, and without duplication, even over unreliable networks. **UDP**, the unreliable alternative, does not retransmit. It sends packets and moves on, leaving any recovery to higher layers. This is faster but less reliable — used for applications where occasional loss is acceptable, such as live video where a brief glitch is better than a long delay.\n\nThe choice of error-handling strategy depends on what the application needs. Email needs every byte to arrive correctly, so it uses TCP. Live video streaming needs data to arrive quickly, and losing a frame is better than waiting for it, so it might use UDP. The protocol defines the trade-off, and the application chooses the protocol that matches its needs.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.3-016",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.3 Network Standards and Protocols",
    q: "How do standards benefit consumers?",
    options: [
      "By guaranteeing that all products cost the same",
      "By making devices cheaper and more interoperable",
      "By preventing new products from being introduced",
      "By eliminating product choices to simplify decisions",
    ],
    optionRationales: [
      "Standardisation does not set prices. Competition within a standard drives prices down.",
      null,
      "Standards enable new products by providing a common platform. New devices can be introduced as long as they follow the standard.",
      "Standards increase choices, not reduce them. Manufacturers compete on features within the standard.",
    ],
    correct: 1,
    explanation: "## Cheaper and Compatible\n\nStandards benefit consumers in two main ways: they make devices **cheaper** and more **interoperable**.\n\nCheaper because standards enable mass production. When every manufacturer follows the same specification, components can be manufactured at scale and used across many products. A Wi-Fi chip built for one laptop works in another. An Ethernet connector built for one router works in another. This eliminates the need for proprietary designs and reduces costs throughout the supply chain. The result is that a Wi-Fi chip today costs a fraction of what it did twenty years ago, and every device can include one.\n\nMore interoperable because standards let devices from different manufacturers work together. A user can buy a laptop from one company, a router from another, and a printer from a third, and all three will communicate without any special setup. This interoperability is the foundation of the modern computing experience. Without it, users would have to buy everything from one vendor, or accept that their devices would not cooperate.\n\nThe consumer benefit extends to the future. Standards are usually open — the specifications are published and anyone can implement them. This means that new manufacturers can enter the market by building to the standard, and new products can be introduced without requiring users to replace everything they own. Standards are a public good in this sense: they serve everyone who participates, and no one can exclude others from using them.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-001",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What is the role of a hub in a network?",
    options: [
      "It sends data only to the intended recipient",
      "It converts analog signals into digital",
      "It broadcasts data to all connected devices",
      "It assigns IP addresses to new devices",
    ],
    optionRationales: [
      "Sending only to the intended recipient is the function of a switch. A hub sends to everyone.",
      "Signal conversion is the job of a modem. A hub distributes data among computers on a local network.",
      null,
      "IP address assignment is a DHCP server function. A hub does not manage addresses.",
    ],
    correct: 2,
    explanation: "## Broadcast to All\n\nA **hub** is a network device that provides a central connection point for multiple computers and **transfers all incoming data to every connected device**. It does not know which device needs the data; it simply copies the signal out to every port except the one it came in on.\n\nThe behaviour is called broadcasting. When one computer sends a frame, every other computer on the hub receives it. Each receiving device checks the destination address; if the frame is not for it, the device discards it. This works because computers on a network ignore frames that are not addressed to them, but it wastes bandwidth and creates security concerns, since every device sees every frame regardless of who it is for.\n\nHubs also create collisions. Because all devices share the same transmission medium, only one can transmit at a time. If two devices transmit simultaneously, their signals collide and both are lost. The network must have a protocol to handle this — the sending devices wait a random time and retry. The more devices on the hub, the more collisions occur and the slower the network feels.\n\nThe result is that hubs have been almost entirely replaced by switches. A switch does everything a hub does but with much better performance and security. Hubs remain useful for understanding how networks evolved, and a small number are still in use in very old or specialised installations, but a modern network is unlikely to include one.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-002",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "How does a switch differ from a hub?",
    options: [
      "A switch uses less electricity than a hub",
      "A switch sends data only to the intended recipient",
      "A switch is wireless; a hub is wired",
      "A switch requires a server; a hub does not",
    ],
    optionRationales: [
      "Power consumption is a minor difference. The primary difference is how the devices forward data.",
      null,
      "Both switches and hubs can be wired or wireless (though hubs are mostly wired). The difference is not the medium.",
      "Neither switches nor hubs require a server to function. They operate independently.",
    ],
    correct: 1,
    explanation: "## Smart vs Simple\n\nThe essential difference between a **switch** and a **hub** is what they do with incoming data. A **hub broadcasts** every frame to every device. A **switch** sends each frame **only to the device that needs it**.\n\nThe switch accomplishes this by learning the network. As frames arrive, the switch records which device (identified by its MAC address) is connected to which port. This record is called the **MAC address table**. When a frame arrives, the switch looks up the destination address in the table, finds the port where that address lives, and forwards the frame only to that port.\n\nThe consequences are significant. Because the switch sends frames only where they need to go, devices do not see traffic that is not for them — improving both performance and privacy. Because each pair of devices can communicate independently, there are no collisions between different pairs — the switch can handle many simultaneous conversations. This is why a switch-based network is much faster than a hub-based network of the same size, even though the physical wiring is identical.\n\nModern switches also support more advanced features: VLANs that separate networks logically, quality-of-service that prioritises certain types of traffic, and management interfaces that let administrators monitor and control the switch. Hubs have none of this. The switch is essentially a hub with intelligence added, and that intelligence is why the hub has been effectively replaced in every modern network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-003",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What is the function of a router in a network?",
    options: [
      "It stores files for network users",
      "It connects networks and directs traffic between them",
      "It broadcasts every message to all devices",
      "It converts file formats for different devices",
    ],
    optionRationales: [
      "File storage is a server function. Routers forward traffic; they do not store it.",
      null,
      "Broadcasting to all devices is what a hub does. Routers make intelligent decisions about where to send each packet.",
      "Format conversion is software on the connected devices, not a router function.",
    ],
    correct: 1,
    explanation: "## Between Networks\n\nA **router** is a device that **connects two or more networks and directs traffic between them**. It is the traffic controller of the internetwork, deciding which path each packet should take.\n\nThe core function is *routing* — choosing a path. When a packet arrives at a router, the router examines the packet's destination address and consults a routing table that lists available paths to various destinations. The router selects the best path according to the metric it uses — which might prioritise speed, reliability, cost, or a combination. It then forwards the packet along the chosen path to the next router or to the final destination.\n\nThis decision-making is what separates a router from a simpler device. A hub or switch forwards frames within a single network; a router forwards packets between networks. The distinction matters because networks differ: two LANs might use different addressing schemes, different protocols, or different physical media. The router bridges these differences, translating as necessary so that packets can cross from one network to another.\n\nThe router in a home network performs these functions invisibly. It receives packets from the home devices, forwards them to the Internet through the ISP's network, and routes the responses back to the correct devices. The user never sees this happening; the router is the transparent plumbing that connects the home to everything outside. This is why home networks work so smoothly: the router handles all the complexity, and the user just sees pages loading.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-004",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What is a modem used for?",
    options: [
      "Assigning addresses to network devices",
      "Connecting a communications channel to a sending or receiving device",
      "Storing backups of all network data",
      "Routing traffic between two local networks",
    ],
    optionRationales: [
      "Address assignment is the function of a DHCP server. A modem does not manage addressing.",
      null,
      "Backup storage is a server function. A modem transmits data; it does not store it.",
      "Routing between networks is the function of a router. A modem connects the local network to a single channel.",
    ],
    correct: 1,
    explanation: "## Signal Translator\n\nA **modem** connects a **communications channel** — such as a telephone line, cable TV line, or fibre-optic cable — to a **sending or receiving device** such as a computer or router. Its function is to translate between the signals the channel carries and the signals the local network uses.\n\nThe word *modem* is short for **modulator–demodulator**. Modulation means converting data into a form that can travel over the transmission medium. Demodulation means converting the received signal back into its original form. The names capture both directions of the translation, which is what the device does continuously.\n\nThe technology has changed over the decades. Early modems connected computers to analog telephone lines, converting digital data into audio tones that could travel over voice-grade phone lines. The familiar screeching sound of a dial-up connection was the audible result of this conversion. Modern modems work with digital channels — cable, DSL, fibre — and handle much faster data, but they perform the same basic function of translating between the local network and the external channel.\n\nThe type of modem a user needs depends on the Internet service. A cable modem works with cable TV lines. A DSL modem works with telephone lines. A fibre terminal works with fibre-optic cables. Each is designed for a specific type of channel, and the ISP specifies which type is required for their service. Swapping ISPs often means swapping modems, because the physical channel changes.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-005",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What type of cable does a cable modem use?",
    options: [
      "A wireless radio signal",
      "Standard copper telephone wiring",
      "A coaxial cable shared with cable TV",
      "A fiber-optic line",
    ],
    optionRationales: [
      "Wireless signals are used by cellular and satellite services, not by cable modems.",
      "Telephone wiring is used by DSL modems, not cable modems.",
      null,
      "Fiber-optic cable is used by FTTP service, not by cable modems.",
    ],
    correct: 2,
    explanation: "## Shared with TV\n\nA **cable modem** uses a **coaxial cable** — the same cable that carries cable TV signals. The Internet data and the television signals travel over the same physical wire, using different frequency bands.\n\nThe setup usually involves a splitter. The cable from the wall is divided into two paths: one goes to the TV or cable box, and one goes to the cable modem. Because the two signals occupy different frequency ranges, they do not interfere with each other. The cable can carry both simultaneously.\n\nThe advantage is that the same cable infrastructure serves both services. A household that already has cable TV can add Internet service without running any new cables. The cable company does not need to install a second wire to the house. This reuse of existing infrastructure is what made cable Internet one of the first widely available broadband services.\n\nThe trade-off is shared bandwidth. The coaxial cable serves multiple households on the same segment, and all of them share the total capacity of that segment. During peak usage — evenings and weekends — the speed for each household drops because everyone is competing for the same bandwidth. This is why cable Internet speeds often vary throughout the day. DSL avoids the problem by giving each household a dedicated line, but at the cost of lower maximum speeds. Fiber avoids both problems — high speed and no sharing — but is the most expensive to install.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-006",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What type of wiring does a DSL modem use?",
    options: [
      "A coaxial cable shared with TV",
      "Standard copper telephone wiring",
      "A fibre-optic line",
      "A wireless radio signal",
    ],
    optionRationales: [
      "Coaxial cable is used by cable modems. DSL uses telephone wiring.",
      null,
      "Fibre-optic cable is used by FTTP service. DSL uses older copper telephone lines.",
      "Wireless connections are provided by cellular or satellite. DSL is a wired service.",
    ],
    correct: 1,
    explanation: "## Over the Phone Line\n\nA **DSL modem** uses **standard copper telephone wiring** — the same twisted-pair wire that carries voice telephone calls. The Internet data and the voice signals coexist on the same line, using different frequency bands.\n\nThe technology was designed to reuse existing infrastructure. When DSL was introduced in the late 1990s, almost every home and office already had a telephone line. DSL provided broadband Internet without requiring new cables to be installed. A small filter installed at each telephone outlet separates the DSL signal from the voice signal, so the phone and the Internet connection can be used simultaneously without interfering with each other.\n\nThe limitation is distance. DSL signal strength degrades as the cable runs farther from the telephone company's central office. A household near the office gets full speed; a household several kilometres away gets less. This is why DSL was never available everywhere, even in places where telephones were universal. The physical properties of copper wire limit how far the signal can travel before it becomes too weak to be useful.\n\nThe speed of DSL depends on the version. **ADSL** (Asymmetric DSL) provides faster download than upload speeds, matching typical user behaviour. **VDSL** (Very-high-bit-rate DSL) offers much higher speeds but only over shorter distances. **SDSL** (Symmetric DSL) provides equal speeds in both directions but is less common. Each version trades off speed, distance, and cost differently.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-007",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What is FTTP and what does it provide?",
    options: [
      "A fibre-optic connection delivering high-speed Internet to a premises",
      "A wireless standard for cellular networks",
      "A DSL variant offering faster speeds over phone lines",
      "A satellite service for remote areas",
    ],
    optionRationales: [
      null,
      "Cellular networks use licensed radio spectrum. FTTP is a wired technology.",
      "DSL variants are a separate category. FTTP uses fibre-optic cable, not copper telephone lines.",
      "Satellite service reaches remote areas where cables are impractical. FTTP is a wired service for urban and suburban areas.",
    ],
    correct: 0,
    explanation: "## Fibre to the Door\n\n**FTTP** stands for **Fiber to the Premises**. It is a **fibre-optic connection** that delivers high-speed Internet directly to a user's home or business. The word *premises* means the physical location — the technology brings fibre all the way to the building rather than stopping at some intermediate point.\n\nThe alternative arrangements are FTTN (Fibre to the Node) and FTTC (Fibre to the Curb), where fibre reaches a neighbourhood point and older copper wiring covers the last stretch to the building. The distinction matters because the last stretch is often the bottleneck. Copper wire limits speed and degrades over distance. Bringing fibre all the way to the premises eliminates this bottleneck, allowing the full speed of the fibre connection to reach the user.\n\nThe technical advantage is significant. Fibre carries data as pulses of light through a glass strand, which can transmit vastly more data than electrical signals through copper. Typical FTTP installations offer speeds of hundreds of megabits per second, with gigabit service increasingly common. The speed is also symmetric — upload and download are the same — unlike cable and DSL, which favour download.\n\nFTTP is the current state of the art for consumer Internet access. The limitation is cost: installing fibre to every building requires substantial infrastructure investment, and it takes years to reach a whole country. Many regions are still served by older technologies, and the transition to FTTP is ongoing. But where FTTP is available, it offers the best performance of any common consumer Internet technology.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-008",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What is a dedicated line?",
    options: [
      "A wireless connection shared by many users",
      "A permanent, always-on connection between two points",
      "A cable that carries only voice traffic",
      "A connection that is established on demand",
    ],
    optionRationales: [
      "Wireless connections are shared. A dedicated line is exclusive to the organization that leases it.",
      null,
      "Dedicated lines carry voice, data, and video. They are general-purpose, not voice-only.",
      "On-demand connections describe dial-up. Dedicated lines are always on.",
    ],
    correct: 1,
    explanation: "## Always On\n\nA **dedicated line** is a **permanent, always-on connection** between two points. It is exclusive to the organization that leases it, so the capacity is guaranteed and not shared with other users.\n\nThe term contrasts with shared and on-demand connections. A dial-up connection was established only when the user called the ISP; when the call ended, the connection went away. A shared connection, like cable Internet, carries traffic from many users on the same physical infrastructure. A dedicated line is neither — it is always available and used only by its owner.\n\nOrganizations use dedicated lines for several reasons. The guaranteed bandwidth matters for applications that need consistent performance, such as voice over IP, video conferencing, or real-time transactions. The isolation from other users means the line is more secure and predictable. The always-on nature means no setup time when the connection is needed — it is always there.\n\nThe technology comes in several forms. **T-carrier lines** are digital telephone lines that carry multiple signals over a single connection, with T1 and T3 being the most common. **DSL** and **ISDN** are consumer and small-business digital lines. **Cable** connections are technically shared, but a dedicated cable segment can be leased for guaranteed service. **ATM** (Asynchronous Transfer Mode) carries voice, data, and video at high speeds. **Ethernet** over fibre is increasingly common for dedicated connections between buildings. Each technology offers different combinations of speed, cost, and range, and the choice depends on the specific requirements of the organization.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-009",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What is a network interface card (NIC)?",
    options: [
      "A card that connects a computer to a network",
      "A card that monitors network traffic",
      "A card that routes traffic between networks",
      "A card that stores login credentials for the network",
    ],
    optionRationales: [
      null,
      "Traffic monitoring is done by specialized software or appliances, not by a NIC.",
      "Routing between networks is the function of a router. The NIC connects one computer to one network.",
      "Login credentials are stored in the operating system, not on a NIC. The NIC is a hardware component.",
    ],
    correct: 0,
    explanation: "## The Network Adapter\n\nA **Network Interface Card (NIC)** is the hardware that **connects a computer to a network**. It sends and receives the electrical or radio signals that carry network data, translating between the computer's internal data format and the format the network uses.\n\nIn older computers, the NIC was a separate expansion card inserted into a slot on the motherboard. In modern computers, the NIC is usually built into the motherboard, often as a chip soldered onto the board. The word *card* is a legacy from the earlier era, but the function is the same.\n\nMost modern computers have multiple NICs. A laptop typically has a wired Ethernet NIC and a wireless Wi-Fi NIC. A desktop might have the same, plus additional NICs for specialized purposes. Each NIC has its own MAC address — a unique identifier that distinguishes it from every other network adapter in the world. When the computer sends data, it specifies which NIC to use, and that NIC encodes the data in the format appropriate for its medium.\n\nThe NIC is invisible to the user but essential to the network. Without it, the computer has no way to speak the network's language. The operating system treats the NIC as a device and communicates with it through a driver. The driver handles the low-level details of sending and receiving frames, freeing the operating system to focus on higher-level concerns. Together, the NIC and its driver form the boundary between the computer and the network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-010",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "Why would an organization choose a dedicated line over a shared connection?",
    options: [
      "Dedicated lines are always cheaper than shared connections",
      "Dedicated lines provide guaranteed bandwidth and better security",
      "Dedicated lines do not require any setup",
      "Dedicated lines work without any physical infrastructure",
    ],
    optionRationales: [
      "Dedicated lines are usually more expensive, not cheaper. The organization pays for exclusivity.",
      null,
      "All connections require setup. Dedicated lines typically require more setup because they involve leasing and installation.",
      "Dedicated lines are physical connections. They require infrastructure just like any other wired link.",
    ],
    correct: 1,
    explanation: "## Guaranteed Performance\n\nOrganizations choose **dedicated lines** over shared connections for two main reasons: **guaranteed bandwidth** and **better security**.\n\nGuaranteed bandwidth means the line always delivers the same performance, regardless of what other users are doing. A shared cable connection might slow down during peak hours because neighbours are also using the Internet. A dedicated line does not have this problem — the capacity is reserved for the organization. This matters for applications that require consistent performance, such as voice calls, video conferencing, and real-time transactions. A dropped video frame or a delay in a credit card authorization can have real consequences; guaranteed bandwidth prevents them.\n\nBetter security comes from isolation. Traffic on a shared line passes through equipment that serves many users. A dedicated line is used only by the organization, so there is no risk of another user intercepting traffic or overwhelming the connection. The physical path is also under the organization's control, which makes it harder for an attacker to tap. For organizations that handle sensitive data — financial, medical, legal — the isolation is worth the extra cost.\n\nThe trade-off is expense. A dedicated line typically costs more per megabit than a shared connection because the provider cannot spread the cost across many users. A small business might pay several times more for a dedicated line than for a comparable shared connection. The decision depends on whether the guaranteed performance and security justify the price — which for most enterprises with mission-critical applications, they do.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-011",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "Which of the following is a type of digital dedicated line?",
    options: [
      "A standard voice telephone line",
      "A T-carrier line",
      "A satellite link",
      "A cable TV line shared with neighbours",
    ],
    optionRationales: [
      "Standard voice telephone lines are analog, not digital. Dedicated digital lines use different technology.",
      null,
      "Satellite links use radio waves to orbit. They are a separate category from wired dedicated lines.",
      "Shared cable is a shared connection, not a dedicated line. The distinction matters for the guarantees it provides.",
    ],
    correct: 1,
    explanation: "## Multiple Signals, One Line\n\nA **T-carrier line** is one of the classic types of **digital dedicated line**. It carries multiple signals over a single communications line using a technique called time-division multiplexing.\n\nThe T-carrier family includes several variants. **T1** lines carry 24 voice channels or about 1.5 Mbps of data. **T3** lines carry 672 voice channels or about 45 Mbps. The higher-capacity variants are used by large organizations, telephone companies, and ISPs. T-carrier lines were the standard for business WAN connections for decades, before Ethernet-over-fibre became more common.\n\nOther types of digital dedicated line include **DSL**, which uses existing telephone wiring; **ISDN**, an older digital telephone standard; **FTTP**, which delivers fibre-optic connectivity; **cable**, which carries data over the cable TV infrastructure; and **ATM** (Asynchronous Transfer Mode), which handles voice, data, and video at high speeds. Each has its own characteristics for speed, cost, distance, and installation requirements.\n\nWhat they share is the dedicated nature of the connection. The organization leasing the line has exclusive use of it. Capacity is guaranteed, security is improved by isolation, and the line is always available. The trade-off is cost — dedicated lines are more expensive than shared connections of equivalent raw bandwidth. The organization pays for exclusivity and the guarantees that come with it, and for organizations whose applications depend on those guarantees, the price is justified.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.4-012",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.4 Network Connection Hardware",
    q: "What does the term ADSL indicate about a DSL connection?",
    options: [
      "It works only with analog phone lines",
      "It provides equal upload and download speeds",
      "It is always faster than other DSL types",
      "It uses asymmetric speeds, with faster download than upload",
    ],
    optionRationales: [
      "ADSL works with digital signaling over the same copper pair used for analog voice. It is not analog itself.",
      "Equal up and down speeds describe SDSL (Symmetric DSL), not ADSL.",
      "ADSL is not always the fastest — VDSL is often faster over short distances. The A indicates asymmetry, not speed.",
      null,
    ],
    correct: 3,
    explanation: "## Faster Down, Slower Up\n\nThe **A** in **ADSL** stands for **Asymmetric**. An ADSL connection uses **different speeds for download and upload** — typically much faster in the download direction than in the upload direction.\n\nThe asymmetry reflects how most users behave. When browsing the web, watching video, or downloading files, the user receives far more data than they send. A page request is a few hundred bytes; the page itself might be several megabytes. A video stream sends a few keep-alive messages but receives a continuous flow of data. By allocating more bandwidth to download, the provider matches the connection to the actual usage pattern.\n\nThe trade-off is that uploading large files — videos, backups, high-resolution images — is slow on ADSL. This is why content creators, remote workers who upload large files, and anyone running a server from home often prefer symmetric connections. **SDSL** (Symmetric DSL) provides equal speeds in both directions, but it is less common because it requires more sophisticated equipment and is usually more expensive.\n\nNewer DSL variants like **VDSL** (Very-high-bit-rate DSL) offer much higher speeds, often with more symmetric ratios, but only over short distances. The choice between ADSL, SDSL, and VDSL depends on the user's needs and the distance to the telephone company's equipment. Each variant trades off speed, symmetry, distance, and cost in a different way.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-001",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "Which hardware is required for a wireless home network with Internet access?",
    options: [
      "A fibre-optic backbone and a switch",
      "A network administrator and a firewall",
      "A modem and a wireless router",
      "A dedicated server and workstations",
    ],
    optionRationales: [
      "Fibre backbones are enterprise infrastructure, not consumer hardware.",
      "Network administrators are not needed for home networks. The user manages the network.",
      null,
      "Dedicated servers are used in business networks. Home networks use consumer routers that combine several functions.",
    ],
    correct: 2,
    explanation: "## Home Essentials\n\nA wireless home network with Internet access requires two pieces of hardware: a **modem** and a **wireless router**.\n\nThe modem connects the home to the ISP's network. Depending on the service, it might be a cable modem, a DSL modem, or a fibre terminal. Its job is to translate between the signals the ISP's channel carries and the signals the home network uses.\n\nThe wireless router connects the home devices to the modem and to each other. It provides Wi-Fi coverage, assigns local IP addresses, and routes traffic between the home network and the Internet. In many home setups, the modem and router are combined into a single device provided by the ISP, but they can also be separate for users who want more control.\n\nThe complete setup also includes the devices to be connected — phones, laptops, tablets, smart TVs, and other Wi-Fi-capable equipment. Installation is usually straightforward. The modem connects to the wall outlet (cable, phone line, or fibre terminal), the router connects to the modem, and the devices connect to the router over Wi-Fi. The user then configures the network name, sets a password, and chooses security settings through the router's web interface. Setup takes about an hour for a first-time user and a few minutes for someone who has done it before.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-002",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "What is the first step in setting up a home wireless network?",
    options: [
      "Entering the network key on every device",
      "Installing a network management app on the phone",
      "Enabling encryption on the router",
      "Connecting the modem or router to the Internet service",
    ],
    optionRationales: [
      "Entering the key on devices happens after the network is running with a name and password.",
      "Management apps are optional and are installed later. They are not part of the initial setup.",
      "Encryption is configured after the router is running. Enabling it requires access to the router's settings.",
      null,
    ],
    correct: 3,
    explanation: "## Start with Hardware\n\nThe first step in setting up a home wireless network is to **connect the modem or router to your home's Internet service**. Without this physical connection, nothing else can proceed.\n\nThe step involves plugging the modem into the wall outlet that provides the Internet signal — a cable TV outlet for cable service, a telephone jack for DSL, or a fibre terminal for FTTP. Then the router connects to the modem with an Ethernet cable. Power is applied to both devices, and the modem negotiates a connection with the ISP. This can take a few minutes, and the lights on the modem will indicate when the connection is established.\n\nThe remaining steps follow. Second, configure the wireless network by accessing the router's settings, giving the network a name (SSID), and setting a wireless network key (password). Third, connect each device by enabling its wireless functionality, selecting the network name, and entering the key.\n\nThe order matters because each step depends on the previous one. The router cannot be configured until it is powered and connected. Devices cannot connect until the network is configured. Trying to do the steps out of order means repeating work or troubleshooting problems that would not exist if the sequence had been followed.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-003",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "What is the purpose of a wireless network key?",
    options: [
      "It determines the speed of the network",
      "It identifies the network by name",
      "It encrypts data on the internet",
      "It serves as the password for joining the network",
    ],
    optionRationales: [
      "Network speed is determined by the Wi-Fi standard and the signal quality, not by the key.",
      "The network name is the SSID. The key is the password that allows access.",
      "Encryption of Internet data is handled by higher-layer protocols like HTTPS. The network key protects the Wi-Fi link.",
      null,
    ],
    correct: 3,
    explanation: "## The Password\n\nA **wireless network key** is the **password** that devices must enter to join the network. Without the correct key, a device cannot connect — the access point refuses to associate with it.\n\nThe key serves two purposes. First, it controls access: only users who know the key can use the network. This prevents neighbours and passers-by from using the household's Internet connection without permission. Second, it enables encryption: the key is used to encrypt all traffic between the device and the access point, so that even if someone intercepts the wireless signals, they cannot read the content.\n\nKeys should be strong. A weak key can be cracked by an attacker using brute-force methods, especially if it is short or uses common words. Modern advice recommends at least 12 characters, mixing letters, numbers, and symbols. The key should also be unique to the network — reusing a key from another network or from a previous setup is risky if that key has been compromised.\n\nDifferent security standards support different key types. **WEP** (Wired Equivalent Privacy) is an old standard with known weaknesses and should never be used. **WPA** (Wi-Fi Protected Access) was an improvement but has been superseded. **WPA2** and **WPA3** are the current standards, with WPA3 offering stronger encryption and better protection against modern attacks. When setting up a new network, WPA2 or WPA3 should be the only options considered.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-004",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "What is one advantage of connecting a wireless printer to a home network?",
    options: [
      "The printer can print without any paper",
      "The printer can be used from any device on the network",
      "The printer prints faster than a wired printer",
      "The printer no longer needs electricity",
    ],
    optionRationales: [
      "All printers need paper to print. This is a physical requirement, not a network feature.",
      null,
      "Wireless can be slower than wired due to signal quality and interference. Speed is not the advantage.",
      "All printers need electricity. Wireless printers need more, because they also power the wireless radio.",
    ],
    correct: 1,
    explanation: "## Shared Printing\n\nThe advantage of connecting a **wireless printer** to a home network is that it can be **used from any device on the network**. Instead of connecting physically to one computer, the printer serves every device — laptops, phones, tablets — that has access to the network.\n\nThe convenience is significant. A household with multiple computers no longer needs to designate one as the printer's host. The user can send a document to print from a phone while sitting on the couch, from a laptop in the bedroom, or from a tablet in the kitchen. The print job goes over the network to the printer, and the printed page appears without any physical connection.\n\nThe setup follows standard network installation. The printer is placed within wireless range, connected to the network using its control panel or a manufacturer's setup app, and given access to the network key. Once configured, the printer is visible to every device on the network. Modern printers often support printing over the Internet as well, so the user can send documents to print from anywhere with a network connection.\n\nThe trade-off compared to a direct USB connection is speed. Wireless print jobs take longer to transfer than USB jobs, especially for large documents or high-resolution photos. The difference is minor for typical text documents but noticeable for graphics-heavy files. For most home users, the convenience of wireless access outweighs the small slowdown.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-005",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "What is the first step in adding a wireless printer to a network?",
    options: [
      "Print a test page from each device",
      "Place the printer within range of the network",
      "Install the printer driver on every computer",
      "Change the printer's default name",
    ],
    optionRationales: [
      "Test pages are printed after setup is complete, not before. They verify that everything works.",
      null,
      "Drivers are installed after the printer is on the network. The network must work first.",
      "The printer's name is configured during the setup process. It is not the first step.",
    ],
    correct: 1,
    explanation: "## Place First, Then Configure\n\nThe first step in adding a wireless printer to a network is to **place the printer within range of the wireless network**. A printer that cannot receive the wireless signal cannot join the network, no matter how well it is configured.\n\nPlacement matters for two reasons. Physical distance: the signal strength decreases with distance from the access point, and walls or metal objects can block or weaken the signal. A printer in a corner of the house may not reach a router in another room. Physical stability: the printer needs a stable surface, because jostling during printing can cause paper jams and print quality problems.\n\nOnce placed, the setup proceeds through several more steps. The printer is powered on and its network settings are accessed (usually through a control panel or app). The printer searches for wireless networks, the home network is selected, and the network key is entered. Then the manufacturer's printer app is installed on each device that will print to it. Finally, test pages are printed to confirm that everything works.\n\nThe order of steps reflects dependencies. The printer must be in range before it can find the network. It must be on the network before the devices can see it. The devices must see it before drivers can be installed. Each step builds on the previous one, and skipping a step usually results in a failed setup that has to be done again from the beginning.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-006",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "What is a wireless signal booster used for?",
    options: [
      "It converts wireless signals into wired connections",
      "It prevents unauthorized users from joining the network",
      "It encrypts all traffic on the wireless network",
      "It extends the physical range of the wireless network",
    ],
    optionRationales: [
      "Signal conversion is done by an access point or a media converter, not a booster.",
      "Authentication is controlled by the network key. A booster does not affect who can join.",
      "Encryption is handled by the network key. A booster extends range, not security.",
      null,
    ],
    correct: 3,
    explanation: "## Extending the Reach\n\nA **wireless signal booster** — also called a repeater or range extender — **extends the physical range of a wireless network**. It receives the wireless signal from the router, amplifies it, and rebroadcasts it to areas where the original signal is weak.\n\nThe device is useful in specific situations. A large house where the router is in one corner and the far bedrooms have poor coverage. An office where thick walls block the signal between rooms. A multi-story building where the signal does not reach the upper floors. In each case, a single router cannot cover the whole space, and a booster fills in the gaps.\n\nThe placement is important. The booster must be in a location where it can receive a strong signal from the router — halfway between the router and the weak-coverage area is usually ideal. If placed too far from the router, the booster broadcasts a weak version of an already weak signal. If placed too close, it does not extend the range as much as it could.\n\nThe trade-off is that a boosted signal is not as fast as the original. The booster receives the signal, processes it, and rebroadcasts it, which introduces some delay. And because the booster shares the same channel and bandwidth as the router, the extended coverage comes at the cost of lower throughput in the extended area. For most users, the trade-off is acceptable — slow Internet is better than no Internet in the far corners of the house.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-007",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "Where should a wireless router be placed for the best coverage?",
    options: [
      "In a central location of the home",
      "Near a metal filing cabinet for stability",
      "In a corner of the house for privacy",
      "In the basement for temperature control",
    ],
    optionRationales: [
      null,
      "Metal objects block and reflect wireless signals. A router near a metal cabinet has reduced range.",
      "A corner is the worst location for coverage. The signal reaches only half the house before being blocked by walls.",
      "Basements are usually below the living areas, and the floor above blocks much of the signal.",
    ],
    correct: 0,
    explanation: "## Centre of the House\n\nA wireless router should be placed in a **central location of the home**. The signal radiates outward in all directions from the router, so the closer it is to the middle of the space, the more evenly the coverage is distributed.\n\nThe physics matter here. Radio waves weaken with distance, and they are absorbed or reflected by walls, floors, metal objects, and water. A router in a corner has to send its signal through several walls to reach the far side of the house. A router in the centre has a shorter path to every corner. The difference can be substantial — a signal that is strong in the living room can be unusable in a distant bedroom if the router is poorly placed.\n\nElevation helps. Wi-Fi signals spread horizontally more effectively than vertically. A router on the ground floor covers the ground floor best; a router on an upper floor may not reach the ground floor through the floor/ceiling. Placing the router on a shelf or high surface improves coverage of the surrounding rooms.\n\nInterference is the other consideration. Cordless phones, microwave ovens, and other wireless networks in the neighbourhood all use the same 2.4 GHz band, and their signals interfere with the Wi-Fi. Keeping the router away from these sources reduces the interference. In apartment buildings, choosing the 5 GHz band (when possible) avoids much of the interference from neighbouring networks, at the cost of shorter range.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.5-008",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.5 Setting Up a Network",
    q: "Why should a wireless network key be strong and unique?",
    options: [
      "To make the network easier to find by name",
      "To increase the speed of the network",
      "To prevent unauthorized access and eavesdropping",
      "To reduce the cost of the Internet service",
    ],
    optionRationales: [
      "The network name (SSID) is separate from the key. The key controls access, not discovery.",
      "Key strength does not affect network speed. Speed depends on the Wi-Fi standard and signal quality.",
      null,
      "Internet service cost is determined by the ISP's pricing, not by the network key.",
    ],
    correct: 2,
    explanation: "## Protecting Access\n\nA wireless network key should be **strong and unique** to **prevent unauthorized access and eavesdropping**. The key serves two security functions, and both depend on its strength.\n\nFirst, the key controls who can join the network. A weak key can be guessed or cracked by an attacker using automated tools that try millions of combinations per second. A short numeric key — the kind some routers ship with by default — can be cracked in minutes. A long key with mixed characters would take years to crack by brute force. The difference is enormous, and it is why modern advice recommends at least 12 characters with a mix of letters, numbers, and symbols.\n\nSecond, the key encrypts the traffic between devices and the access point. Even if someone intercepts the wireless signals — which is easy, since radio waves pass through walls — the encrypted content is unreadable without the key. A strong key makes decryption infeasible. A weak key could be cracked and used to decrypt captured traffic, exposing passwords, messages, and other sensitive data.\n\nThe key should also be unique. Reusing a key from another network — a previous apartment, a work network, a shared flat — is risky because that key may already be known to others. Even if the key was never compromised, using the same key across multiple networks means that a breach at one place compromises all of them. The best practice is a fresh, strong, unique key for every network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-001",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "Why is a wireless network considered less secure than a wired network?",
    options: [
      "Wireless networks do not use passwords",
      "Wireless signals pass through walls and can be intercepted",
      "Wireless networks do not support encryption",
      "Wireless networks require more electricity to operate",
    ],
    optionRationales: [
      "Wireless networks do use passwords. The network key is the password that controls access.",
      null,
      "Wireless networks do support encryption — Wi-Fi standards include WPA2 and WPA3 encryption. The security concern is about the transmission medium, not the availability of encryption.",
      "Power consumption is unrelated to security. Both wired and wireless networks need power, and the amounts are comparable.",
    ],
    correct: 1,
    explanation: "## In the Air\n\nWireless networks are less secure than wired networks because the signals **pass through walls and can be intercepted by anyone within range**. A wired connection is physically contained within a cable; a wireless connection broadcasts into the surrounding space.\n\nThis is a fundamental difference in the transmission medium. To intercept a wired connection, an attacker has to physically access the cable — a difficult, invasive task. To intercept a wireless connection, an attacker simply needs to be nearby with a wireless adapter. The signals travel through walls into adjacent rooms, nearby buildings, and public spaces. Any device in that range can potentially capture the traffic.\n\nEncryption mitigates the risk. Modern Wi-Fi standards use WPA2 or WPA3 to encrypt all traffic between devices and the access point. Even if an attacker captures the signals, the content is unreadable without the network key. This is why encryption is so important on wireless networks — it is the primary defence against interception.\n\nThe other risks are access control and network visibility. On a wired network, only physically connected devices can join. On a wireless network, any device in range can attempt to connect if it knows the key. And the network's presence is broadcast through beacon frames, so its existence is discoverable. Protecting against unauthorized access requires a strong key and, ideally, additional layers such as MAC address filtering or network authentication.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-002",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What is adware?",
    options: [
      "Software that spreads itself across a network",
      "Software that collects user data secretly",
      "Software that displays unwanted advertisements",
      "Software that encrypts files for ransom",
    ],
    optionRationales: [
      "Self-spreading software describes a worm. Adware does not typically self-replicate.",
      "Collecting data secretly is the definition of spyware, not adware. The two overlap in practice but are distinct categories.",
      null,
      "Encrypting files for ransom describes ransomware. This is a different type of malware.",
    ],
    correct: 2,
    explanation: "## The Unwanted Ads\n\n**Adware** is software that **displays unwanted advertisements** on a user's computer. The advertisements appear as pop-ups, banners, injected ads on web pages, or full-screen takeovers. They interfere with normal use and often slow down the system.\n\nAdware is often bundled with other software. A user downloads a free program, and the installer includes adware as an opt-out (or opt-in that is buried in the fine print). Once installed, the adware runs in the background, injecting advertisements into the browser or into other applications. Removing it can be difficult, because it hides in multiple locations and often re-installs itself.\n\nThe revenue model is straightforward. Adware developers get paid by advertisers for impressions or clicks. The user gets the free software, at the cost of being subjected to ads. For some users, the trade-off is acceptable. For most, adware is an unwelcome intrusion that degrades the computing experience.\n\nThe line between adware and malware is blurred. Legitimate adware discloses itself and can be uninstalled through standard methods. Malicious adware conceals itself, resists removal, and sometimes collects data for targeted advertising. Both are covered under the broad term *potentially unwanted programs* (PUPs), which antivirus software flags but does not always remove automatically.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-003",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What is spyware designed to do?",
    options: [
      "Spread itself to other computers automatically",
      "Encrypt important files and demand payment",
      "Display targeted advertisements in the browser",
      "Collect information about a user without their knowledge",
    ],
    optionRationales: [
      "Self-propagation is characteristic of worms. Spyware usually infects a single system and stays there.",
      "Encryption for ransom is ransomware. The purpose of spyware is information gathering.",
      "Advertisements are the hallmark of adware, not spyware. Spyware focuses on data collection.",
      null,
    ],
    correct: 3,
    explanation: "## Silent Observation\n\n**Spyware** is designed to **collect information about a user without their knowledge or consent**. It runs silently in the background, gathering data and transmitting it to servers controlled by the attacker.\n\nThe information collected varies widely. Some spyware tracks browsing history and search queries. Some captures keystrokes — including passwords, credit card numbers, and private messages. Some monitors location. Some takes screenshots. The most aggressive variants combine all of these, building a detailed profile of the user's activities and sending it to attackers who use it for fraud, blackmail, or identity theft.\n\nSpyware often arrives bundled with other software. A user installs a free game or utility, and the installation includes spyware that was not clearly disclosed. Some spyware exploits security vulnerabilities to install itself without any user action. Some arrives through phishing emails that trick the user into clicking a malicious link.\n\nThe consequences can be severe. Stolen credentials lead to compromised accounts. Stolen financial information leads to fraud. Stolen personal data leads to identity theft. This is why antivirus software treats spyware as a serious threat and why users are advised to download software only from trusted sources, to read installation dialogs carefully, and to keep their systems updated to patch security vulnerabilities.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-004",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "How does a worm differ from a virus?",
    options: [
      "A worm requires a network; a virus does not",
      "A worm spreads itself without user action; a virus requires the user to activate it",
      "A worm only affects mobile devices; a virus only affects desktops",
      "A worm is harmless; a virus always causes damage",
    ],
    optionRationales: [
      "Both worms and viruses can spread through networks. The distinction is how they initiate the spread.",
      null,
      "Both worms and viruses can affect any computing device. The distinction is not about the target.",
      "Both worms and viruses can cause serious damage. The claim that worms are harmless is inaccurate.",
    ],
    correct: 1,
    explanation: "## Self-Spreading vs User-Activated\n\nThe difference between a **worm** and a **virus** is how they spread. A **worm spreads itself automatically** across a network, exploiting vulnerabilities in systems without any user action. A **virus requires the user to do something** — open an infected file, run a malicious program, click a bad link — to activate and replicate.\n\nThe distinction matters for the scope of damage. A worm can propagate to thousands of computers in a matter of hours, because it does not depend on users making mistakes. The **Morris worm** in 1988 infected about 6,000 computers in a day — a huge number for the era — before the internet itself was widely used. Modern worms like **WannaCry** have affected hundreds of thousands of systems worldwide in a single weekend.\n\nA virus spreads more slowly. Its propagation depends on individual users opening files or running programs. But because the user initiates the infection, a virus can be more targeted — designed to trigger on a specific date, in a specific application, or under specific conditions. Both types of malware can be destructive; the worm's advantage is scale, and the virus's advantage is precision.\n\nThe practical difference for defence is that worms require patching and network segmentation to stop, while viruses require user education and endpoint protection. Modern antivirus software detects both. But the worm's self-spreading nature means that keeping systems patched is especially critical — a single unpatched machine on a network can become the entry point for a worm that spreads to every other machine it can reach.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-005",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What is a Trojan?",
    options: [
      "A program that spreads itself across a network automatically",
      "A program that encrypts files and demands payment",
      "A program that displays advertisements",
      "A program that hides in a legitimate file and causes damage when opened",
    ],
    optionRationales: [
      "Self-spreading across a network describes a worm. Trojans require the user to open them.",
      "Encrypting files for ransom describes ransomware. Trojans can be any type of malicious software disguised as legitimate.",
      "Advertisements are characteristic of adware. Trojans disguise themselves as legitimate software.",
      null,
    ],
    correct: 3,
    explanation: "## The Disguise\n\nA **Trojan** — named after the wooden horse of Greek myth — **hides inside a legitimate file or program** and causes damage when the user opens it. Unlike a worm, a Trojan does not spread on its own. It relies on the user being deceived into running it.\n\nThe disguise is the defining feature. A Trojan might look like a game, a utility, a PDF, or a photo. The user sees a file that appears safe and useful. When they open it, the malicious code runs in the background, performing whatever action the attacker designed. This might be installing other malware, stealing credentials, opening a backdoor for remote access, or destroying data.\n\nTrojans arrive through many channels. Email attachments are a common vector — the attacker sends a file that looks like an invoice, a receipt, or a document. Malicious websites trick users into downloading fake software. Pirated software often contains hidden Trojans. USB drives left in public places — a technique called *baiting* — take advantage of curiosity to lure users into plugging them in.\n\nThe defence is user education combined with technical controls. Antivirus software detects known Trojans, but new variants appear constantly, so signature-based detection has limits. The strongest defence is caution: avoid opening unexpected attachments, download software only from trusted sources, and treat free software with suspicion. The Trojan relies on the user's trust, so the best defence is to withhold it until standard teaching is verified.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-006",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What does a rootkit do on a compromised system?",
    options: [
      "It displays advertisements on the screen",
      "It gains administrator access while remaining hidden",
      "It copies itself to every device on the network",
      "It demands payment to unlock encrypted files",
    ],
    optionRationales: [
      "Advertisements are adware behaviour. Rootkits are designed for stealth, not visibility.",
      null,
      "Self-copying describes a worm. Rootkits may spread, but their defining feature is concealment, not propagation.",
      "Ransom demands are characteristic of ransomware. Rootkits operate silently.",
    ],
    correct: 1,
    explanation: "## Hidden at the Root\n\nA **rootkit** gains **administrator-level access** — sometimes called *root* access — to a computer or network while **remaining hidden from the user and the operating system**. It takes control without announcing itself.\n\nThe name comes from the Unix concept of *root*, the superuser account with unrestricted privileges. A rootkit installs itself at a level of the system where it can control what the operating system sees. It hides its own files, processes, and network activity. It intercepts system calls so that when the user (or antivirus software) asks the operating system to list running processes or files, the rootkit filters itself out of the response.\n\nThis makes rootkits extremely difficult to detect and remove. Standard tools report that nothing is wrong. Antivirus software may not see the rootkit's files. The attacker may have set up backdoors, stolen credentials, or installed additional malware without the user ever noticing. The compromise can persist for months or years.\n\nRemoval often requires reinstalling the operating system from scratch, because the rootkit has compromised the very tools that would be used to remove it. This is why prevention is the primary defence. Rootkits typically arrive through exploits or through Trojans that trick the user into running a malicious file with elevated privileges. Keeping the operating system patched, using anti-malware tools, and avoiding untrusted downloads are the most reliable ways to prevent rootkit infections.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-007",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What does encryption accomplish on a network?",
    options: [
      "It stores copies of all transmitted data for backup",
      "It increases the speed of the network",
      "It blocks unauthorized traffic from reaching the network",
      "It scrambles data so that only authorized recipients can read it",
    ],
    optionRationales: [
      "Storage is a separate function. Encryption transforms data; it does not preserve copies.",
      "Encryption typically slows the network slightly, because of the processing overhead. Speed is not its purpose.",
      "Blocking traffic is the role of a firewall. Encryption protects data that is already flowing.",
      null,
    ],
    correct: 3,
    explanation: "## Scrambled in Transit\n\n**Encryption** scrambles data so that only authorized recipients with the correct key can read it. It converts plaintext into ciphertext using a mathematical algorithm, and reverses the process at the destination.\n\nThe purpose is confidentiality. Without encryption, data on a network travels in plaintext — readable by anyone who can capture the signals. This includes the content of web pages, email messages, passwords, and any other data being transmitted. On a wireless network, the signals pass through walls and can be intercepted by anyone within range. On the Internet, data passes through routers and cables owned by many parties, any of whom could theoretically capture it.\n\nEncryption solves this by ensuring that captured data is useless to an interceptor. Even if the attacker records every packet, the content appears as random gibberish. Only someone with the correct key can decrypt the data and read it. The strength of the encryption determines how long it would take to crack — modern encryption algorithms use keys long enough that brute-force attacks are computationally infeasible.\n\nEncryption is one of the fundamental tools of network security, alongside firewalls, authentication, and monitoring. It protects data during transmission, complementing the protections of the endpoint (antivirus, access controls) and the boundary (firewalls). The combination of these tools provides defence in depth — no single layer is sufficient, but together they make attacks difficult and rare.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-008",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What does a firewall do on a network?",
    options: [
      "It encrypts every file that is transmitted",
      "It blocks traffic between a network and the Internet according to rules",
      "It stores backups of all network traffic",
      "It assigns IP addresses to network devices",
    ],
    optionRationales: [
      "Encryption is handled by separate protocols. A firewall filters, but does not transform, data.",
      null,
      "Storing traffic is a monitoring function, not a firewall function. Firewalls inspect and filter.",
      "Address assignment is the function of a DHCP server. Firewalls do not manage addressing.",
    ],
    correct: 1,
    explanation: "## The Barrier\n\nA **firewall** creates a barrier between a network and the Internet, **blocking or allowing traffic according to rules** that the administrator defines. It is the boundary between the trusted internal network and the untrusted outside world.\n\nThe filtering works by inspecting each packet. The firewall examines standard teaching address, destination address, port number, and other properties of the packet. It compares these against its rules. Packets that match an allow rule pass through; those that match a block rule are discarded. Rules can be simple — block all traffic from a specific IP address — or complex, depending on the sophistication of the firewall.\n\nFirewalls come in several types. **Packet filtering** firewalls examine individual packets in isolation. **Stateful inspection** firewalls track the state of connections, allowing responses to outbound requests while blocking unsolicited inbound traffic. **Application-layer** firewalls examine the content of traffic, not just the headers, and can block or allow based on what the traffic actually contains. **Next-generation** firewalls combine all of these plus additional features like intrusion prevention and encrypted traffic inspection.\n\nFor home networks, the router usually includes a basic firewall. For enterprises, dedicated firewall appliances provide more sophisticated protection. Both serve the same purpose: to enforce a boundary between the network and the Internet, so that unwanted traffic is stopped before it reaches the internal systems.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-009",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What does authentication do on a network?",
    options: [
      "It blocks traffic according to security rules",
      "It monitors network traffic for unusual activity",
      "It encrypts data during transmission",
      "It identifies users to the network before granting access",
    ],
    optionRationales: [
      "Blocking traffic is the role of a firewall. Authentication verifies identity; the firewall enforces access rules.",
      "Monitoring is a distinct function. Authentication verifies who a user is, not what they are doing.",
      "Encryption protects data but does not identify users. The two are complementary security measures.",
      null,
    ],
    correct: 3,
    explanation: "## Who Are You?\n\n**Authentication** is the process of **identifying users to the network** before granting them access. It is the gate that a user passes through before reaching any resource.\n\nThe most common form is username and password. The user provides a username that identifies them and a password that proves they are who they claim to be. If both match the network's records, the user is authenticated. If either is wrong, access is denied.\n\nMore secure forms of authentication add additional factors. **Two-factor authentication** combines something the user knows (password) with something the user has (a phone, a hardware token) or something the user is (fingerprint, face). **Biometric authentication** uses physical characteristics that are difficult to forge. **Certificate-based authentication** uses cryptographic keys instead of passwords. Each of these is more secure than passwords alone, at the cost of more complex setup and management.\n\nAuthentication is not the same as authorization. Authentication asks *who are you?*; authorization asks *what are you allowed to do?* A user authenticated as themselves might still be denied access to a specific resource if they do not have permission. The two work together — first the network verifies the user's identity, then it checks what that identity is allowed to access. The combination is what makes network security meaningful, because it ties every action to a specific authenticated user.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-010",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What is network monitoring software used for?",
    options: [
      "Encrypting traffic between the network and the Internet",
      "Assigning IP addresses to new devices",
      "Tracking network status and alerting administrators to problems",
      "Blocking malicious traffic from the network",
    ],
    optionRationales: [
      "Encryption is a separate security layer. Monitoring observes traffic; it does not transform it.",
      "Address assignment is a DHCP function. Monitoring does not manage addressing.",
      null,
      "Blocking malicious traffic is the role of a firewall. Monitoring is passive — it observes and reports.",
    ],
    correct: 2,
    explanation: "## Watching the Network\n\n**Network monitoring software** tracks the status of a network and **alerts administrators when problems occur**. It provides continuous visibility into what the network is doing and how it is performing.\n\nThe information monitored can be extensive. Traffic volume per device or per application. Bandwidth utilisation over time. Response times for critical services. Error rates and failed connections. Unusual patterns that might indicate an attack. The software collects all of this, presents it in dashboards and reports, and sends alerts when conditions exceed thresholds the administrator has defined.\n\nThe value is early detection. Without monitoring, network problems are discovered when users complain — by which time the problem may have caused significant disruption. With monitoring, the administrator sees warning signs before they become critical. A gradual increase in traffic might be detected as a developing congestion problem and resolved before it slows users down. An unusual spike might be identified as a possible attack, allowing the administrator to investigate and respond.\n\nMonitoring software is distinct from firewalls and antivirus software. Those tools take action to block threats; monitoring is passive, observing and reporting. But the information it provides is essential for understanding what is happening on the network, which in turn informs decisions about how to protect it. Together, monitoring and active security tools form a complete defensive posture — one that both watches and acts.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-011",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What is packet sniffer software?",
    options: [
      "Software that blocks malicious traffic at the firewall",
      "Software that monitors and logs packet traffic for analysis",
      "Software that assigns IP addresses to devices",
      "Software that encrypts traffic on the network",
    ],
    optionRationales: [
      "Blocking traffic is the function of a firewall. Sniffers are passive observers, not active filters.",
      null,
      "Address assignment is a DHCP function. Sniffers do not manage the network; they observe it.",
      "Encryption is a separate security layer. Sniffers capture traffic as it is, encrypted or not.",
    ],
    correct: 1,
    explanation: "## Capturing Traffic\n\n**Packet sniffer software** monitors and logs packet traffic for later analysis. It captures the actual data flowing across the network — headers, contents, and metadata — and stores it in a form that can be inspected and examined.\n\nSniffers have two legitimate uses and one illegitimate one. Network administrators use them to diagnose problems. When the network is slow or a service is failing, a sniffer shows exactly what is happening at the packet level, revealing issues that would not be visible otherwise. Security analysts use them to investigate incidents, capturing evidence of an attack and analysing what the attacker did.\n\nThe illegitimate use is by attackers. A sniffer on a compromised network can capture unencrypted traffic — including passwords, session tokens, and sensitive data — as it flows between devices. This is why encryption is essential on any network where untrusted devices might be present. If the traffic is encrypted, the sniffer captures it but cannot read it, and the attacker gets nothing useful.\n\nThe defence against malicious sniffers is encryption everywhere it matters. HTTPS for web traffic, TLS for most other protocols, and encrypted VPNs for remote access all ensure that captured traffic is useless to an attacker. Modern websites use HTTPS by default, which has made packet sniffing much less effective for attackers than it was a decade ago. But the tool remains in the administrator's toolkit, because capturing and analysing traffic is essential for maintaining and troubleshooting networks.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-012",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "How can a user check whether someone has joined their wireless network?",
    options: [
      "By reviewing connected devices in the router's administrative interface",
      "By changing the network name every week",
      "By disconnecting all devices and waiting",
      "By running antivirus software on every device",
    ],
    optionRationales: [
      null,
      "Changing the network name does not reveal intruders. It only disrupts legitimate users who have to reconnect.",
      "Disconnecting all devices does not provide information about who has been connecting. The router's logs show this.",
      "Antivirus scans devices for malware but does not reveal who is connected to the network.",
    ],
    correct: 0,
    explanation: "## Checking the Guest List\n\nThe reliable way to check whether someone has joined a wireless network is to **review the list of connected devices in the router's administrative interface**. The router maintains this list as part of its normal operation.\n\nThe process is straightforward. The user opens a browser and navigates to the router's management address — usually something like `192.168.0.1` or `192.168.1.1`. After logging in with the router's admin credentials, the user finds a section typically labelled *Connected Devices*, *Attached Devices*, *Device List*, or similar. This shows every device currently connected to the network, usually with its name, IP address, MAC address, and connection time.\n\nThe user should be able to identify all the devices on the list. If there are devices they do not recognise — a laptop they do not own, a phone from a neighbour — someone unauthorized has joined the network. In that case, the appropriate response is to change the network key immediately and consider additional security measures such as MAC address filtering (which allows only pre-approved devices to connect).\n\nRegularly checking this list is a good practice. It is quick, requires no special software, and gives the user direct visibility into who is using their network. Combined with a strong password and modern encryption, it forms a complete picture of who has access to the home network.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.6-013",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.6 Securing a Network",
    q: "What is the relationship between authentication and authorization?",
    options: [
      "Authorization happens before authentication",
      "Authentication applies to wired networks; authorization to wireless",
      "They are different names for the same process",
      "Authentication verifies identity; authorization determines what the identity can do",
    ],
    optionRationales: [
      "Authorization requires authentication to have occurred first. The order is fixed.",
      "Both apply to all types of networks. The distinction is not about the medium.",
      "The two are distinct steps in the security process. Combining them would lose important distinctions.",
      null,
    ],
    correct: 3,
    explanation: "## Two Steps, One Goal\n\n**Authentication** verifies identity; **authorization** determines what the authenticated identity is allowed to do. The two work together to control access, but they answer different questions.\n\nAuthentication answers *who are you?* The user provides credentials — a password, a biometric, a token — and the system confirms that the credentials match a known identity. If they match, the user is authenticated as that identity. If they do not, access is denied entirely.\n\nAuthorization answers *what are you allowed to do?* Once the user is authenticated, the system checks what their identity is permitted to access. A regular employee might be authorised to read customer records but not modify them. A manager might be authorised to do both. An administrator might have access to system configuration that regular users cannot reach. The authorisation policy determines these permissions.\n\nThe order matters. Authentication must happen first, because you cannot decide what someone is allowed to do until you know who they are. Without authentication, there is no identity to check permissions against. This is why the standard sequence is: authenticate, then authorise. The two steps together — verifying identity and enforcing permissions — form the foundation of access control on any secure system.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.7-001",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.7 Responsibilities of a Network Professional",
    q: "What are the responsibilities of a network administrator?",
    options: [
      "Designing websites and marketing materials",
      "Writing application software for the organisation",
      "Planning, setting up, securing, and maintaining the network",
      "Repairing computer hardware in the organisation",
    ],
    optionRationales: [
      "Web design and marketing are entirely different domains. The network administrator role is technical and infrastructure-focused.",
      "Writing software is the job of developers and programmers. Network administrators manage infrastructure, not applications.",
      null,
      "Hardware repair is a technician's job. Network administrators focus on the network itself, not on individual computers.",
    ],
    correct: 2,
    explanation: "## The Whole Lifecycle\n\nA **network administrator** is responsible for **planning, setting up, securing, and maintaining a network**. The role covers the entire lifecycle of the network, from initial concept to daily operation.\n\nThe responsibilities break into several areas. Planning involves assessing the organisation's needs, designing a network that meets them, and selecting the equipment to build it. Setup involves installing the equipment, configuring the settings, and integrating new components with existing infrastructure. Security involves defining access policies, managing user accounts, monitoring for threats, and responding to incidents. Maintenance involves troubleshooting problems, updating software, managing backups, and documenting the network for future reference.\n\nThe scope varies by organisation. In a small business, one person may handle all aspects of the network. In a large enterprise, the role is divided across specialists — some focused on security, others on performance, others on user support. The common thread is that everyone in the network profession takes responsibility for the network's reliability, security, and performance.\n\nThe role requires a mix of technical skills and judgment. Technical skills include knowledge of protocols, hardware, and configuration. Judgment includes the ability to make trade-offs — between cost and performance, between security and convenience, between standardisation and flexibility. The best network administrators understand both, and they make decisions that serve the organisation's needs rather than just the technology's ideals.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.7-002",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.7 Responsibilities of a Network Professional",
    q: "What is USENIX?",
    options: [
      "A standards body that develops protocols",
      "A government agency that regulates Internet service",
      "A nonprofit organisation that supports network and system professionals",
      "A vendor that sells networking hardware",
    ],
    optionRationales: [
      "USENIX does not define protocols. Standards bodies like the IEEE and IETF do that. USENIX supports the professionals who use the standards.",
      "USENIX is not a regulator. It is a professional organisation with no legal authority over the industry.",
      null,
      "USENIX does not sell hardware. It is a membership organisation for professionals.",
    ],
    correct: 2,
    explanation: "## The Professional Community\n\n**USENIX** is a nonprofit organisation that supports **network and system professionals**. It was founded in 1975 as a community for users of the Unix operating system, and it has since expanded to cover a wide range of systems and networking topics.\n\nUSENIX serves its members in several ways. It organises conferences where professionals present research and exchange ideas. It publishes technical papers and journals. It provides forums for discussion and collaboration. And it maintains a code of professional conduct that guides the behaviour of its members.\n\nUSENIX is not a regulator, vendor, or standards body. It has no legal authority, no products to sell, and no standards to define. Its role is to support the people who work in the field — to give them a place to learn from each other, to share what they know, and to develop the professional norms that make the field trustworthy.\n\nJoining USENIX is one of the ways a network professional signals their commitment to the field. The organisation's conferences and publications are a source of continuing education. Its code of conduct is a reference for ethical behaviour. For a field that changes as rapidly as networking, having a professional community is essential — no one person can track every development, and the collective knowledge of the community is the field's most valuable resource.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.7-003",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.7 Responsibilities of a Network Professional",
    q: "Which of the following is a guideline in the network professional's code of conduct?",
    options: [
      "Privacy, integrity, and social responsibility",
      "Limiting access to senior staff only",
      "Selling user data to advertising companies",
      "Maximising shareholder value above all else",
    ],
    optionRationales: [
      null,
      "Access policies are based on role and need, not rank. Restricting access to senior staff would be unethical and impractical.",
      "Selling user data violates the privacy guidelines that the code of conduct requires.",
      "Shareholder value is a business objective, not an ethical principle for the profession.",
    ],
    correct: 0,
    explanation: "## The Professional Code\n\nThe code of conduct for a network professional covers **privacy, integrity, and social responsibility**, among other principles. These are the standards the profession expects its members to uphold.\n\n**Privacy** means respecting the confidentiality of user data. Network administrators have access to systems and traffic that others do not — they could read private messages, monitor web browsing, or inspect files. The code requires that this access be used only for its legitimate purpose, never for personal interest or curiosity.\n\n**Integrity** means doing the right thing even when no one is watching. The administrator has the technical ability to do many things that would be unethical: modifying data, changing system configurations, monitoring users without cause. The code requires the administrator to use their access responsibly, in the interest of the organisation and its users.\n\n**Social responsibility** means considering the broader impact of the profession's work. Network administrators design and operate systems that affect millions of people — their privacy, their access to information, their ability to communicate. The code requires the administrator to consider these effects and to prioritise the public good.\n\nOther guidelines in the code cover personal conduct, education, responsibility to the computing community, and additional ethical requirements. The code exists because network professionals are in a position of trust. They have access and capability that could be used for good or harm. The code sets expectations for how that trust should be exercised.",
    status: "approved"
  },

  {
    id: "CS110-T1-U6-6.7-004",
    mainTopic: "Unit 6: Networks and Network Devices",
    topic: "6.7 Responsibilities of a Network Professional",
    q: "Why is a network administrator considered to hold a position of trust?",
    options: [
      "Because administrators work without any supervision",
      "Because administrators are paid more than other IT staff",
      "Because administrators have access to systems and data others cannot see",
      "Because administrators have longer tenure than other employees",
    ],
    optionRationales: [
      "Working without supervision describes many roles. The trust comes from the access the administrator has, not from working alone.",
      "Pay is not a measure of trust. The position of trust comes from the access the role provides.",
      null,
      "Tenure is unrelated to trust. Someone new to the role has the same access as someone who has been there for years.",
    ],
    correct: 2,
    explanation: "## Access Creates Trust\n\nA network administrator holds a **position of trust** because of the **access the role provides**. Administrators can see and control things that other users cannot, and that access creates a responsibility to use it ethically.\n\nThe technical capabilities are extensive. An administrator can read network traffic, including any data that is not encrypted. They can access any file on any system they administer. They can create, modify, or delete user accounts. They can change system configurations that affect every user. They can monitor every action on the network if they choose to. In most organisations, no other role has this level of access.\n\nThe ethical obligation follows from the access. Because the administrator can do these things, they must be careful about what they actually do. Reading a user's private email — even though technically possible — violates the trust that the user places in the system. Modifying logs or hiding activity to conceal a mistake undermines the integrity of the network's records. Using administrator access to further personal interests, or to retaliate against someone, is a serious breach of professional ethics.\n\nThe code of conduct exists precisely because of this tension between capability and responsibility. The administrator is trusted to use their access in ways that benefit the organisation and its users, and to refrain from using it in ways that cause harm. That trust is the foundation of the profession. When it is broken — through a security breach caused by negligence, or through deliberate misuse of access — the consequences damage everyone: the individual users whose data was exposed, the organisation that hired the administrator, and the profession as a whole.",
    status: "approved"
  }
);

// END — 447 items | positions {0: 114, 1: 113, 2: 110, 3: 110}
// Verify: node --check assets/mcq/CS110_T1.js
