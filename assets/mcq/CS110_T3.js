// ═══════════════════════════════════════════════════════════════════════
// CS110 | T3 — LIVE DATASET
// Deploy: assets/mcq/CS110_T3.js
// Format: window.__MCQ__["CS110_T3"]
//
// Units 11–14 · 91 items
// Brand QA: length-neutral options, plausible distractors, self-contained
// Source-dependence pass: Class 1 pointers removed (no "the source",
// Listing/Exercise/Appendix references). Self-contained teaching only.
// ═══════════════════════════════════════════════════════════════════════

window.__MCQ__ = window.__MCQ__ || {};
window.__MCQ__["CS110_T3"] = window.__MCQ__["CS110_T3"] || [];
window.__MCQ__["CS110_T3"].push(
  // ═══════════════════════════════════════════════════════
  //  UNIT 11 · INTRODUCTION TO PROGRAMMING  (22 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T3-U11-11.1-001",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.1 Programming Fundamentals",
    q: "What is computer programming?",
    options: [
      "Designing and writing instructions a computer can execute",
      "Repairing the physical hardware inside a computer",
      "Managing the electrical power supply to a device",
      "Designing the visual appearance of a website",
    ],
    optionRationales: [
      null,
      "You are describing hardware repair, not programming. Repair fixes physical components; programming writes instructions. Both involve computers, but only one produces software.",
      "You are describing power management, not programming. Power is electrical; programming is logical. Both affect the machine, but only one is about telling it what to do.",
      "You are describing web design, not programming. Design is one possible output; programming is the underlying craft. Both use code, but only one is the general activity.",
    ],
    correct: 0,
    explanation: "## Writing Instructions\n\nComputer programming is the process of designing and writing instructions that a computer can execute to perform specific tasks. These instructions, known as code, are written using programming languages that bridge the gap between human logic and machine operations. Programming is the craft of expressing logic in a form that a machine can carry out.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.1-002",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.1 Programming Fundamentals",
    q: "What is a programming language?",
    options: [
      "A formal language for giving instructions to a computer",
      "A method for encrypting files before sending them",
      "A protocol for moving data between computers",
      "A tool for designing computer hardware circuits",
    ],
    optionRationales: [
      null,
      "You are describing encryption, not a programming language.",
      "You are describing a network protocol, not a programming language.",
      "You are describing hardware design, not a programming language.",
    ],
    correct: 0,
    explanation: "## The Shared Language\n\nA programming language is a formal language used to communicate instructions to a computer. It provides a structured way for programmers to write code that tells the computer what to do. Programming languages consist of a set of rules (syntax) and keywords that define how programs are written and interpreted. They allow humans to create software, control hardware, and solve problems by expressing logic and computations in a form that machines can process.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.1-003",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.1 Programming Fundamentals",
    q: "Which of the following is an example of a programming language?",
    options: [
      "Python",
      "HTTP",
      "Ethernet",
      "JPEG",
    ],
    optionRationales: [
      null,
      "You are describing a web protocol, not a programming language. HTTP moves web pages; a language writes code. Both use text, but only one is used to build software.",
      "You are describing a networking standard, not a programming language. Ethernet governs cables; a language governs logic. Both are technical specifications, but only one produces programs.",
      "You are describing an image format, not a programming language. JPEG stores pictures; a language stores instructions. Both have file formats, but only one is executable.",
    ],
    correct: 0,
    explanation: "## Four Common Ones\n\nExamples of programming languages include Python, Java, C++, and JavaScript. Each has its own syntax and strengths: Python is favoured for readability and data work; Java for large enterprise systems; C++ for performance-critical software; JavaScript for interactive web pages. This course focuses on C++, covering syntax, control structures, data types, and problem-solving techniques.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.2-001",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.2 A Brief History of C++",
    q: "What was the earliest form of computer instructions programmers worked with?",
    options: [
      "Machine language, represented by strings of",
      "Assembly language with human-readable mnemonics",
      "Higher-level languages such as BASIC and",
      "Visual programming environments with drag-and-drop interfaces",
    ],
    optionRationales: [
      null,
      "You are describing the second stage, not the first. Assembly language came after machine language, not before. Both are low-level, but only one uses mnemonics rather than raw bits.",
      "You are describing a much later development. BASIC and COBOL followed the assembler era. Both are programming languages, but only one was the very first stage.",
      "You are describing modern tools, not the earliest form. Visual interfaces came decades after machine language. Both are programming methods, but only one came first.",
    ],
    correct: 0,
    explanation: "## Bits and Bytes\n\nEarly on, programmers worked with the most primitive computer instructions: machine language. These instructions were represented by long strings of ones and zeroes. Writing software in machine language was slow and error-prone, because humans are not naturally fluent in binary. Every instruction had to be encoded by hand.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.2-002",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.2 A Brief History of C++",
    q: "What is the role of an assembler?",
    options: [
      "It maps machine instructions to human-readable mnemonics",
      "It compiles high-level code into machine language",
      "It executes source code line by line at runtime",
      "It links multiple object files into one executable",
    ],
    optionRationales: [
      null,
      "You are describing a compiler, not an assembler. Compilers translate high-level code; assemblers translate mnemonics. Both produce machine code, but only one works with symbolic abbreviations like ADD and MOV.",
      "You are describing an interpreter, not an assembler. Interpreters run code directly; assemblers translate it. Both process instructions, but only one produces a file.",
      "You are describing a linker, not an assembler. Linkers combine files; assemblers translate mnemonics. Both are tools, but only one maps mnemonics to machine instructions.",
    ],
    correct: 0,
    explanation: "## Mnemonics\n\nAssemblers were invented to map machine instructions to human-readable and manageable mnemonics, such as ADD and MOV. Instead of writing a string of ones and zeroes, a programmer could write a word like ADD and the assembler would translate it into the corresponding machine instruction. This made programming faster and less error-prone.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.2-003",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.2 A Brief History of C++",
    q: "What is the difference between an interpreter and a compiler?",
    options: [
      "An interpreter runs as it reads",
      "An interpreter is always faster than a",
      "An interpreter runs only on phones",
      "An interpreter reads comments only",
    ],
    optionRationales: [
      null,
      "You have the speed relationship backwards. Compiled code usually runs faster once built.",
      "You are describing a platform split that does not define the two tools.",
      "You are describing a limitation that does not apply to either tool.",
    ],
    correct: 0,
    explanation: "## Two Approaches\n\nAn interpreter translates a program as it reads it, turning the program instructions or code directly into actions. A compiler translates the code into an intermediary form — called compiling — producing an object file. The compiler then invokes a linker, which turns the object file into an executable program. Interpreters are easy to work with because execution is immediate; compilers introduce extra steps but produce a program that runs very fast each time it is executed.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.2-004",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.2 A Brief History of C++",
    q: "What does a linker do?",
    options: [
      "It highlights syntax errors in the source code",
      "It turns an object file into an executable program",
      "It translates source code into an object file",
      "It executes the program after it is compiled",
    ],
    optionRationales: [
      "You are describing the compiler's diagnostic role, not the linker's. Error checking happens during compilation. Both are part of the build, but only one combines files.",
      null,
      "You are describing the compiler's job, not the linker's. Compilers produce object files; linkers combine them. Both are tools in the build chain, but only one produces the final executable.",
      "You are describing the operating system's job, not the linker's. Execution happens after all translation is complete. Both are steps, but only one builds the program rather than running it.",
    ],
    correct: 1,
    explanation: "## The Final Step\n\nThe compiler invokes a linker, which turns the object file into an executable program. The compiler produces an intermediate form; the linker ties that form together with other pieces — library functions, other object files — into a single program the operating system can run. Once linking is done, the executable is ready to launch.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.2-005",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.2 A Brief History of C++",
    q: "Why can C++ programs often be shipped without the compiler?",
    options: [
      "The compiler may not be shared legally at all",
      "The compiler works on only one physical machine",
      "Users run the executable, not the source toolchain",
      "The compiler is always too large to download",
    ],
    optionRationales: [
      "You are describing a legal blanket ban that does not match reality.",
      "You are describing a machine lock that does not define compiled languages.",
      null,
      "You are describing file size, not the core distribution reason.",
    ],
    correct: 2,
    explanation: "## Ship the Executable\n\nOne advantage of many compiled languages like C++ is that you can distribute the executable program to people who do not have the compiler. With an interpretive language, you must have the language to run the program. This is why commercial software is usually shipped as an executable — the user does not need the development tools to run it.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.2-006",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.2 A Brief History of C++",
    q: "Why is C++ described as a compiled language?",
    options: [
      "It can only be written on",
      "It is compiled by the operating",
      "It compiles itself during installation",
      "Its source code must be translated",
    ],
    optionRationales: [
      "You are describing a writing practice, not a language property. Whether code is drafted on paper or screen is unrelated to how it runs. Both describe working habits, but only one is a language characteristic.",
      "You are describing a specific runtime scenario, not the language. The OS does not compile source code at startup. Both involve the OS, but only one is how C++ actually works.",
      "You are describing a self-install process that does not apply. Languages do not compile themselves. Both involve compilation, but only one reflects how C++ is built.",
      null,
    ],
    correct: 3,
    explanation: "## Translated First\n\nC++ is a compiled language because its source code must be translated by a compiler before it can run. The programmer writes source code, the compiler produces an object file, and the linker produces an executable. The user receives the executable, not standard teaching. Because the translation happens once, up front, the resulting program runs very fast each time it is launched.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.3-001",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.3 Programs and Problem Solving",
    q: "What are the two meanings of the word program in programming?",
    options: [
      "A type of file",
      "A set of written instructions",
      "A keyboard shortcut, or a",
      "A compiler command, or a",
    ],
    optionRationales: [
      "You are describing filesystem structures, not programs. Files and folders are storage units, not instructions. Both contain data, but neither is standard teaching/executable distinction.",
      null,
      "You are describing input methods, not the two meanings of program. Input methods are unrelated to standard teaching/save distinction. Both involve user actions, but only one names the content itself.",
      "You are describing build tools, not the meanings of program. Compilers and linkers are tools, not synonyms for program. Both are in the build chain, but only one is what is being built.",
    ],
    correct: 1,
    explanation: "## Source or Executable\n\nThe word *program* is used in two ways: to describe the written instructions (source code) created by the programmer, and to describe an entire piece of executable software. Confusing the two causes real misunderstanding.\n\nIt is useful to keep the distinction clear: source code is what you edit; the executable is what the operating system runs after compilation and linking.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.3-002",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.3 Programs and Problem Solving",
    q: "Why has the priority in programming shifted from short, fast code to maintainable code?",
    options: [
      "Short code is no longer possible in",
      "Hardware manufacturers require longer programs",
      "Programmer time costs more than the hardware",
      "Modern compilers no longer optimize for speed",
    ],
    optionRationales: [
      "You are describing a language restriction that does not exist. Code can still be short. Both describe coding style, but only one is the reason priorities changed.",
      "You are describing a vendor requirement that does not exist. No manufacturer requires programs to be longer. Both involve hardware, but only one reflects the economic shift.",
      null,
      "You are describing a compiler limitation that does not exist. Modern compilers optimize aggressively. Both concern performance, but only one matches the economic reasoning in standard teaching.",
    ],
    correct: 2,
    explanation: "## Economics of Code\n\nFor many years, the principal goal of computer programmers was to write short pieces of code that would execute quickly — memory was expensive and processing power was expensive. As computers have become smaller, cheaper, and faster, and as the cost of memory has fallen, these priorities have changed. Today the cost of a programmer's time far outweighs the cost of most of the computers in use by businesses. Well-written, easy-to-maintain code is at a premium: as business requirements change, the program can be extended without great expense.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.3-003",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.3 Programs and Problem Solving",
    q: "What percentage of software cost is estimated to come from debugging and maintenance?",
    options: [
      "About 50 percent",
      "About 70 percent",
      "About 90 percent",
      "About 99 percent",
    ],
    optionRationales: [
      "You have underestimated the figure. A common estimate is higher than half.",
      "You have underestimated the figure. A common estimate is higher than this.",
      null,
      "You have overestimated the figure. Standard teaching does not claim that essentially all cost comes from debugging and maintenance.",
    ],
    correct: 2,
    explanation: "## The Hidden Cost\n\nIt has been estimated that fully 90 percent of the cost of software is the combined cost of debugging and maintenance. The initial writing of the code is the visible part; finding and fixing defects and keeping the program working as requirements change is the expensive part. This is why good design matters so much: design decisions made at the start determine how expensive the next ten years of maintenance will be.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.3-004",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.3 Programs and Problem Solving",
    q: "What is the first question a programmer should ask when preparing to design a program?",
    options: [
      "Which programming language should I use?",
      "How many lines of code will this require?",
      "What is the deadline for this project?",
      "What is the problem I am trying to",
    ],
    optionRationales: [
      "You are describing a tool choice, not the first question. Language selection comes after the problem is understood. Both are decisions, but only one comes first.",
      "You are describing a size estimate, not the first question. Line count is a consequence of design, not a starting point. Both are considerations, but only one begins the process.",
      "You are describing a scheduling concern, not the first question. Deadlines matter but do not define the problem. Both are relevant, but only one is the first question.",
      null,
    ],
    correct: 3,
    explanation: "## Start with the Problem\n\nThe first question you need to ask when preparing to design any program is, 'What is the problem I am trying to solve?' Every program should have a clear, well-articulated goal. Without a clear problem statement, design becomes guesswork, and the resulting program tends to solve the wrong problem — or solve the right problem badly.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.3-005",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.3 Programs and Problem Solving",
    q: "What is the second question a good programmer asks before writing custom software?",
    options: [
      "How many developers will be needed?",
      "Can this be accomplished without writing new code?",
      "How quickly can the code be written?",
      "Which programming language is the fastest?",
    ],
    optionRationales: [
      "You are describing a staffing question, not a design question. Team size follows from the solution, not precedes it. Both affect the project, but only one is a design consideration.",
      null,
      "You are describing a scheduling question, not the second question. Speed of writing is a project consideration, not a design one. Both are decisions, but only one comes first.",
      "You are describing a performance question, not the design question. Language speed is a technical concern that comes later. Both are considerations, but only one is asked at the start.",
    ],
    correct: 1,
    explanation: "## Reuse Before Build\n\nThe second question every good programmer asks is, 'Can this be accomplished without resorting to writing custom software?' Reusing an old program, using pen and paper, or buying software off the shelf is often a better solution than writing something new. The programmer who can offer these alternatives will never suffer from lack of work — finding less-expensive solutions to today's problems will always generate new opportunities later.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.4-001",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.4 Development Environment and Cycle",
    q: "What is an Integrated Development Environment (IDE)?",
    options: [
      "A physical workstation designed specifically for professional programmers",
      "A protocol that connects developers to remote servers",
      "A type of programming language for building mobile",
      "A software application that provides a comprehensive interface for writing",
    ],
    optionRationales: [
      "You are describing a physical workspace, not an IDE. Workstations are furniture; IDEs are software. Both support developers, but only one provides the toolchain.",
      "You are describing a network protocol, not an IDE. Protocols move data; IDEs organize tools. Both are technical, but only one is a complete programming application.",
      "You are describing a language, not an IDE. Languages write code; IDEs host the writing. Both are used in development, but only one is a tool rather than a language.",
      null,
    ],
    correct: 3,
    explanation: "## All-in-One Toolchain\n\nAn Integrated Development Environment (IDE) is a software application that provides a comprehensive interface for writing, compiling, and executing programs. It combines several essential programming tools into a single platform, including a code editor, compiler or interpreter, debugger, and often a graphical user interface (GUI) builder. By integrating these tools, an IDE simplifies the programming process and enhances productivity. Programmers can write and test their code in the same environment, which reduces the complexity of switching between different applications.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.4-002",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.4 Development Environment and Cycle",
    q: "What file extensions are typically used for C++ source files?",
    options: [
      ".JPG, .PNG, or .GIF",
      ".CPP, .CP, or .C",
      ".EXE, .APP, or .BIN",
      ".TXT, .DOC, or .PDF",
    ],
    optionRationales: [
      "You are describing image formats, not source files. Images are visual; source files are logical. Both are files, but only one is compiled into a program.",
      null,
      "You are describing executable formats, not source files. Executables are binary outputs; source files are human-readable. Both are files, but only one can be edited by a programmer.",
      "You are describing document formats, not source files. Documents hold prose; source files hold code. Both are text, but only one is compiled.",
    ],
    correct: 1,
    explanation: "## The .CPP Extension\n\nThe files you create with your editor are called source files, and for C++ they typically are named with the extension .CPP, .CP, or .C. In this course, all source code files use the .CPP extension, but standard teaching advises checking your compiler documentation for what it needs. Examples of available IDEs include Code::blocks, Visual Studio Code, NetBeans, Dev-C++, Visual Studio, and Lazarus.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.4-003",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.4 Development Environment and Cycle",
    q: "What are the steps of the C++ development cycle, in order?",
    options: [
      "Link, write, run, and compile",
      "Compile, write, link, and run",
      "Write, compile, link, and run",
      "Run, compile, write, and link",
    ],
    optionRationales: [
      "You have reordered the cycle. Linking comes after compiling, not before writing. Both list the same steps, but in the wrong order.",
      "You have reordered the cycle. Writing comes first, not compiling. Both list the same steps, but only one is in the correct order.",
      null,
      "You have reordered the cycle. Running comes last, not first. Both describe the cycle, but only one is correct.",
    ],
    correct: 2,
    explanation: "## Four Steps\n\nIf every program worked the first time, the complete development cycle would be: write the program, compile standard teaching code, link the program, and run it. Unfortunately, almost every program can and will have errors, or bugs. Some bugs cause the compile to fail, some cause the link to fail, and some only show up when the program runs. Whatever type of bug you find, you must fix it — and that means editing standard teaching code, recompiling and relinking, and then rerunning the program.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.4-004",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.4 Development Environment and Cycle",
    q: "What is a compile-time error?",
    options: [
      "An error that only occurs when the program",
      "An error caused by a hardware failure in",
      "An error the user makes when entering input",
      "An error the compiler detects when translating source",
    ],
    optionRationales: [
      "You are describing a runtime error, not a compile-time error. Runtime errors occur after successful compilation. Both are errors, but only one is detected by the compiler.",
      "You are describing a hardware fault, not a compile-time error. Hardware faults are physical; compile errors are logical. Both stop execution, but only one is caught before the program runs.",
      "You are describing a user error, not a compile-time error. User input is handled at runtime. Both involve mistakes, but only one is detected by the compiler.",
      null,
    ],
    correct: 3,
    explanation: "## Caught Before Running\n\nCompile-time errors can occur for any number of reasons. Usually they are a result of a typo or other inadvertent minor error. Good compilers will not only tell you what you did wrong — they will point you to the exact place in your code where you made the mistake. The great ones will even suggest a remedy. The compiler produces a message that names the file, the line number, and a description of the problem.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.4-005",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.4 Development Environment and Cycle",
    q: "Which of the following is an example of an IDE?",
    options: [
      "Windows",
      "Code::blocks",
      "Python",
      "HTTP",
    ],
    optionRationales: [
      "You are describing an operating system, not an IDE. Operating systems manage hardware; IDEs manage code. Both run on a machine, but only one is a development tool.",
      null,
      "You are describing a programming language, not an IDE. Languages write code; IDEs host the writing. Both are development tools, but only one provides the complete editing environment.",
      "You are describing a web protocol, not an IDE. Protocols move web traffic; IDEs build programs. Both are technical, but only one hosts a code editor.",
    ],
    correct: 1,
    explanation: "## Common IDEs\n\nExamples of available IDEs for computers include Code::blocks, Visual Studio Code, NetBeans, Dev-C++, Visual Studio, and Lazarus. For smartphones, a suitable C++ compiler can be found on the app store. An IDE is not strictly required — you can write code in a plain text editor and compile it from the command line — but the IDE significantly simplifies the tasks of writing, debugging, and executing code.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.5-001",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.5 The Hello World Program",
    q: "In the Hello World program, what does #include <iostream.h> do?",
    options: [
      "It prints 'Hello World' to the screen",
      "It defines a variable called iostream",
      "It includes a library file that provides input",
      "It declares the main function of the program",
    ],
    optionRationales: [
      "You are describing the output statement, not the include. The cout statement prints; include loads the library. Both are steps, but only one is a preprocessor directive.",
      "You are describing a variable declaration, not an include. Variables are named by the programmer; includes bring in files. Both introduce names, but only one references an existing file.",
      null,
      "You are describing the main function, not the include directive. Main begins on a later line; include appears first. Both are parts of the program, but only one brings in the library.",
    ],
    correct: 2,
    explanation: "## Loading the Library\n\nThe statement #include <iostream.h> causes the iostream.h file to be added to your source code. This is required if you use cout and its related functions. The file iostream.h (Input-Output-Stream) is used by cout, which assists with writing to the screen. The effect of the include line is to include the file iostream.h into the program as if you had typed it in yourself.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.5-002",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.5 The Hello World Program",
    q: "What does the return 0; statement at the end of main() do?",
    options: [
      "It restarts the program from the beginning",
      "It prints the number 0 to the screen",
      "It clears the value of every variable",
      "It returns the value 0 to the operating",
    ],
    optionRationales: [
      "You are describing a restart, not a return value. Return ends the function rather than restarting it. Both involve flow of control, but only one sends a value back to the caller.",
      "You are describing printing, not returning. Printing goes to the screen; returning goes to the caller. Both move a value, but only one is visible to the user.",
      "You are describing a memory operation that does not occur. Variables are not cleared by return statements. Both affect program state, but only one ends the function.",
      null,
    ],
    correct: 3,
    explanation: "## Returning to the OS\n\nAll ANSI-compliant programs declare main() to return an int. This value is 'returned' to the operating system when your program completes. Some programmers signal an error by returning the value 1. In this course, main() always returns 0, which conventionally means 'the program completed successfully.' The operating system can then act on that signal — for example, a script can check whether the last command succeeded.",
    status: "approved"
  },

  {
    id: "CS110-T3-U11-11.5-003",
    mainTopic: "Unit 11: Introduction to Programming",
    topic: "11.5 The Hello World Program",
    q: "What does the \\n character do in the Hello World program?",
    options: [
      "It deletes the previous line of output",
      "It advances the cursor to the next line",
      "It inserts a tab space before the message",
      "It prints the letter n after the message",
    ],
    optionRationales: [
      "You are describing deletion, not formatting. Nothing is deleted by \\n. Both affect the display, but only one inserts whitespace.",
      null,
      "You are describing a tab, not a newline. Tabs shift horizontally; newlines shift vertically. Both are formatting characters, but only one moves the cursor to the next line.",
      "You are describing literal printing, not escape behaviour. The backslash changes what n means. Both involve the character n, but only one prints a new line.",
    ],
    correct: 1,
    explanation: "## New Line\n\nThe final two characters, \\n, tell cout to put a new line after the words Hello World. The backslash is called the escape character — it changes the meaning of the character that follows it. Normally the character n means the letter n, but when preceded by the escape character, it means new line. Other escape characters include \\t for tab, \\b for backspace, and \\\\ for backslash.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 12 · THE PARTS OF A C++ PROGRAM  (13 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T3-U12-12.1-001",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.1 Preprocessor and Includes",
    q: "What is the preprocessor in the C++ build process?",
    options: [
      "A step that handles # lines before compiling",
      "A tool that runs the finished executable",
      "A debugger that only checks spelling",
      "A linker that merges object files only",
    ],
    optionRationales: [
      null,
      "You are describing program execution, not preprocessing.",
      "You are describing a limited editor role, not the preprocessor.",
      "You are describing the linker. The preprocessor acts on # directives first.",
    ],
    correct: 0,
    explanation: "## Before the Compiler\n\nThe preprocessor runs before your compiler each time the compiler is invoked. The preprocessor reads through your source code, looking for lines that begin with the pound symbol (#), and acts on those lines before the compiler runs. It translates any line that begins with a pound symbol into a special command, getting your code file ready for the compiler. Each time you start your compiler, the preprocessor runs automatically.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.1-002",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.1 Preprocessor and Includes",
    q: "What do the angle brackets around a filename in #include <iostream.h> mean?",
    options: [
      "The preprocessor should look in the standard system",
      "The file should be treated as a user-created",
      "The file should be included only if it",
      "The file should be encrypted before it is",
    ],
    optionRationales: [
      null,
      "You are describing the behaviour with double quotes, not angle brackets. Double quotes search the local project first; angle brackets search the system first. Both forms include files, but only one searches the compiler's standard directories.",
      "You are describing incremental builds, not the meaning of angle brackets. Change detection is a separate concern. Both affect what gets built, but only one concerns where the file is found.",
      "You are describing encryption, not include syntax. Encryption is unrelated to include directives. Both involve files, but only one affects the search path.",
    ],
    correct: 0,
    explanation: "## System Directories\n\nThe angle brackets around the filename tell the preprocessor to look in all the usual places for this file. If your compiler is set up correctly, the angle brackets will cause the preprocessor to look for the file iostream.h in the directory that holds all the H files for your compiler. The alternative — double quotes — tells the preprocessor to search the current directory first, which is used for user-created headers.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.2-001",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.2 The main Function",
    q: "What is the role of the main() function in a C++ program?",
    options: [
      "It is the entry point that the program",
      "It is a comment that describes the program's",
      "It is a preprocessor directive that loads the",
      "It is a user-defined function that other functions",
    ],
    optionRationales: [
      null,
      "You are describing a comment, not main. Comments are ignored; main is executed. Both are text in a file, but only one runs.",
      "You are describing a preprocessor directive, not main. Directives begin with #; functions are named identifiers. Both are lines of code, but only one is called automatically.",
      "You are describing a user-defined function that must be called, which is the opposite of main. Main is special because it is called automatically; other functions are called by code. Both are functions, but only one is the entry point.",
    ],
    correct: 0,
    explanation: "## The Entry Point\n\nEvery C++ program has a main() function. In general, a function is a block of code that performs one or more actions. Usually functions are invoked or called by other functions, but main() is special: when your program starts, main() is called automatically. main(), like all functions, must state what kind of value it will return — typically int.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.2-002",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.2 The main Function",
    q: "What do the braces { } mark in a C++ function?",
    options: [
      "The beginning and end of the function's body",
      "The beginning and end of the preprocessor section",
      "The start of a comment block",
      "The boundary of a string literal",
    ],
    optionRationales: [
      null,
      "You are describing preprocessor boundaries, which are marked by # directives, not braces. Both organize code, but only one encloses statements.",
      "You are describing comment markers, which begin with // or /*. Braces enclose statements; comment markers suppress them. Both are punctuation, but only one groups code.",
      "You are describing string literal boundaries, which are marked by double quotes. Braces mark blocks; quotes mark text. Both are delimiters, but only one is a pair of curly symbols.",
    ],
    correct: 0,
    explanation: "## The Function Body\n\nAll functions begin with an opening brace ({) and end with a closing brace (}). The braces for the main() function mark the start and end of the function's body. Everything between the opening and closing braces is considered a part of the function. The opening brace is on the same line as main or on the following line, depending on style; the closing brace is the last line of the function.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.3-001",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.3 Output with cout",
    q: "What is cout in C++?",
    options: [
      "A data type for storing text strings",
      "An object used to print values to the screen",
      "A function that reads input from the keyboard",
      "A preprocessor directive that loads a library",
    ],
    optionRationales: [
      "You are describing a data type, not cout. Data types declare variables; cout is a predefined object. Both are named in code, but only one is used for output.",
      null,
      "You are describing cin, not cout. cin reads from the keyboard; cout writes to the screen. Both are objects in iostream.h, but only one produces output.",
      "You are describing a preprocessor directive, not cout. Directives begin with #; cout is an object. Both are used in a program, but only one is a data entity.",
    ],
    correct: 1,
    explanation: "## Writing to the Screen\n\nThe object cout is used to print a message to the screen. These two objects, cout and cin, are used in C++ to print strings and values to the screen and read them from the keyboard. To print a value, write the word cout, followed by the insertion operator (<<). Whatever follows the insertion operator is written to the screen. If you want a string of characters written, enclose them in double quotes.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.3-002",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.3 Output with cout",
    q: "What is the insertion operator in C++?",
    options: [
      "The : symbol, used to define a label",
      "The :: symbol, used to access a namespace",
      "The << symbol, used to send values to cout",
      "The >> symbol, used to read values from cin",
    ],
    optionRationales: [
      "You are describing a label, not an operator. Labels mark positions; operators perform actions. Both appear in code, but only one involves two angle brackets.",
      "You are describing the scope resolution operator, not the insertion operator. Scope resolution qualifies names; insertion sends output. Both use punctuation, but only one is two '<' characters.",
      null,
      "You are describing the extraction operator, which is used with cin, not cout. Both are two-character operators, but only one sends values out.",
    ],
    correct: 2,
    explanation: "## Sending Values Out\n\nThe insertion operator (<<) is created by typing the less-than character (<) twice. Even though this is two characters, C++ treats it as one. To print a value to the screen, write the word cout, followed by the insertion operator, followed by the value you want printed. Multiple values can be chained: cout << 'Hello' << ' ' << 'World'; prints the phrase in one line. The operator is directional: the arrows point away from the string and toward the output destination.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.3-003",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.3 Output with cout",
    q: "What is endl used for in C++ output?",
    options: [
      "To insert a tab character",
      "To end the program immediately",
      "To clear the output buffer",
      "To write a new line",
    ],
    optionRationales: [
      "You are describing \\t, not endl. The tab character shifts horizontally; endl moves to a new line. Both are formatting tools, but only one ends the current line.",
      "You are describing an exit command, not endl. endl does not terminate the program. Both affect flow, but only one is a line break.",
      "You are describing stream closing, not endl. Streams close at program end, not on endl. Both affect output, but only one is a formatting action.",
      null,
    ],
    correct: 3,
    explanation: "## The Newline Manipulator\n\nThe manipulator endl writes a new line to the screen. It serves the same purpose as the \\n escape character but is a named entity in C++ rather than a character within a string. The two are equivalent for most uses: cout << 'Hello\\n'; and cout << 'Hello' << endl; both produce the same visible result — the word followed by a line break. Standard teaching uses both forms interchangeably in its examples.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.3-004",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.3 Output with cout",
    q: "What is a text string in C++?",
    options: [
      "A comment that begins with //",
      "A series of printable characters",
      "A single character enclosed in single quotes",
      "A numeric value such as 3.14",
    ],
    optionRationales: [
      "You are describing a comment, not a string. Comments are ignored by the compiler; strings are printed. Both appear in source code, but only one appears on the screen.",
      null,
      "You are describing a character literal, not a text string. Characters are single symbols; strings are sequences. Both represent text, but only one is enclosed in double quotes.",
      "You are describing a numeric value, not a string. Numbers are used in arithmetic; strings represent text. Both can be passed to cout, but only one is a sequence of characters.",
    ],
    correct: 1,
    explanation: "## Printable Characters\n\nA text string is a series of printable characters. You create a string in C++ by enclosing characters in double quotes. The string 'Hello World!' contains twelve printable characters (including the space and the exclamation mark). Strings can be printed with cout, concatenated with the insertion operator, and combined with numeric values in the same output statement.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.3-005",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.3 Output with cout",
    q: "What does a cast like (float) tell cout about a value?",
    options: [
      "Force the value to become a",
      "Skip printing the value entirely",
      "Treat the value as a floating-point",
      "Delete the value from memory immediately",
    ],
    optionRationales: [
      "You are describing a string conversion that this form is not primarily teaching.",
      "You are describing suppression of output, which is not what the cast does.",
      null,
      "You are describing deletion, which a cast does not do.",
    ],
    correct: 2,
    explanation: "## Type Casting\n\nOn line 11 of a common example, the value 5/8 is inserted into cout. The term (float) tells cout that you want this value evaluated as a decimal equivalent, so a fraction is printed. Without the cast, integer division would produce 0 (because 5 divided by 8 in integer arithmetic drops the fraction). With the cast, the result is 0.625. The related (double) cast tells cout to print using scientific notation instead.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.4-001",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.4 Comments",
    q: "What is a comment in C++?",
    options: [
      "An instruction that runs only when the program",
      "A syntax error that prevents the program from",
      "A value that is printed to the screen",
      "Text ignored by the compiler that informs readers",
    ],
    optionRationales: [
      "You are describing the main function, not a comment. Main runs; comments are ignored. Both appear in source code, but only one produces effects.",
      "You are describing a compile error, not a comment. Errors prevent execution; comments are valid text. Both appear in the file, but only one is intentional.",
      "You are describing output, not a comment. Output appears on screen; comments never reach the screen. Both are text, but only one is visible to users.",
      null,
    ],
    correct: 3,
    explanation: "## Ignored by the Compiler\n\nComments are text that is ignored by the compiler but that may inform the reader of what you are doing at any particular point in your program. Comments fight the confusion that creeps in when you return to a program a month later. The overall program should have comments at the beginning telling you what the program does. Each function should also have comments explaining what the function does and what values it returns. Any statement that is obscure or less than obvious should be commented as well.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.4-002",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.4 Comments",
    q: "What are the two kinds of comments in C++?",
    options: [
      "The single-quote comment, which begins with ', and",
      "The double-slash comment, which ends at the new",
      "The hash comment, which begins with #, and",
      "The brace comment, which begins with {, and",
    ],
    optionRationales: [
      "You are describing character and string literals, not comments. Quotes represent data; comments are ignored. Both appear in source, but only one affects what the program prints.",
      null,
      "You are describing preprocessor directives, not comments. Hash symbols start directives; comments use slashes. Both appear in source code, but only one is ignored entirely.",
      "You are describing code blocks and array indices, not comments. Braces and brackets are syntax; comments are text. Both appear in code, but only one can span multiple lines.",
    ],
    correct: 1,
    explanation: "## Two Flavours\n\nC++ comments come in two flavours: the double-slash (//) comment and the slash-star (/*) comment. The double-slash comment, referred to as a C++-style comment, tells the compiler to ignore everything that follows until the end of the line. The slash-star comment mark tells the compiler to ignore everything that follows until it finds a star-slash (*/) comment mark. These are referred to as C-style comments. Every /* must be matched with a closing */.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.4-003",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.4 Comments",
    q: "What is the difference between a C++-style comment and a C-style comment?",
    options: [
      "The C++-style comment is executed",
      "The C++-style comment can only",
      "The C++-style comment ends at",
      "The C++-style comment is longer",
    ],
    optionRationales: [
      "You are describing an execution difference that does not exist. Both comment styles are ignored entirely. Both are text, but neither runs.",
      "You are describing a placement restriction that does not exist. Both styles can appear anywhere in a file. Both are comments, but neither is limited to the top.",
      null,
      "You are describing a length difference, not the distinction. Both comment styles can be any length. Both are ignored, but the difference is how each knows where to end.",
    ],
    correct: 2,
    explanation: "## Two Endings\n\nThe C++-style comment, //, tells the compiler to ignore everything until the end of the line. The C-style comment, /* */, tells the compiler to ignore everything between the opening /* and the closing */. The C++ style is used for short remarks on a single line; the C style is used to block out large sections of code. Many C++ programmers use the C++-style comment most of the time and reserve the C-style comment for blocking out large blocks of a program.",
    status: "approved"
  },

  {
    id: "CS110-T3-U12-12.4-004",
    mainTopic: "Unit 12: The Parts of a C++ Program",
    topic: "12.4 Comments",
    q: "What should the comment block at the top of every source file include?",
    options: [
      "Only the current date and time",
      "The full source code repeated as a comment",
      "The email address of the compiler vendor",
      "The program name, file name, description, author, environment,",
    ],
    optionRationales: [
      "You are describing a timestamp only, which is too narrow. A comment header carries more information than a date. Both identify the file, but only one is comprehensive.",
      "You are describing duplication, which is impractical. Repeating the code as a comment serves no purpose. Both are comments, but only one is useful.",
      "You are describing vendor contact information, which is not part of a file header. Headers describe the program, not the tools. Both are informational, but only one is expected.",
      null,
    ],
    correct: 3,
    explanation: "## The File Header\n\nIt is a good idea to put a comment block at the top of every file you write. Every such header should include at least: the name of the function or program, the name of the file, what the function or program does, a description of how the program works, the author's name, a revision history, what compilers and linkers were used, and additional notes as needed. It is very important that you keep the notes and descriptions up-to-date, because headers that are neglected become increasingly misleading over time.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 13 · VARIABLES AND CONSTANTS  (24 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T3-U13-13.1-001",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.1 What Is a Variable?",
    q: "What is a variable in C++?",
    options: [
      "A named location in memory where a value",
      "A fixed value that cannot be changed while",
      "A function that returns a calculated result",
      "A comment that explains the program's purpose",
    ],
    optionRationales: [
      null,
      "You are describing a constant, not a variable. Constants cannot change; variables can. Both store values, but only one is mutable.",
      "You are describing a function, not a variable. Functions perform actions; variables store data. Both have names, but only one is a place to keep a value.",
      "You are describing a comment, not a variable. Comments are ignored; variables hold data. Both appear in source code, but only one is used by the program at runtime.",
    ],
    correct: 0,
    explanation: "## A Place to Store\n\nIn C++, a variable is a place to store information. A variable is a location in your computer's memory in which you can store a value and from which you can later retrieve that value. Your computer's memory can be viewed as a series of cubbyholes, each numbered sequentially. These numbers are known as memory addresses. A variable reserves one or more cubbyholes in which you may store a value, and the variable's name is a label on one of those cubbyholes.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.1-002",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.1 What Is a Variable?",
    q: "What is a memory address?",
    options: [
      "A unique number that identifies a memory location",
      "The name a programmer gives to a variable",
      "The value stored inside a variable",
      "The physical size of a memory chip in",
    ],
    optionRationales: [
      null,
      "You are describing a variable name, not a memory address. Names are human-readable labels; addresses are numeric. Both identify a location, but only one is used by the hardware.",
      "You are describing a value, not an address. Values are the data; addresses are the location. Both are associated with a variable, but only one is a location identifier.",
      "You are describing physical capacity, not an address. Capacity measures how much memory exists; an address identifies one location. Both are measurements, but only one is a specific number.",
    ],
    correct: 0,
    explanation: "## Numbered Locations\n\nYour computer's memory is a series of cubbyholes, each numbered sequentially. These numbers are known as memory addresses. Each cubbyhole or memory location is numbered, and a variable reserves one or more of them. Your variable's name — for example, myVariable — is a label on one of these cubbyholes, so that you can find it easily without knowing its actual memory address. When you run your program, it is loaded into RAM from the disk file, and all variables are also created in RAM.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.2-001",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.2 Variable Types",
    q: "How does the compiler know how much memory to set aside for a variable?",
    options: [
      "The type declared for the variable tells the",
      "The name of the variable tells the compiler",
      "The compiler always reserves exactly four bytes per",
      "The compiler reserves memory only when the program",
    ],
    optionRationales: [
      null,
      "You are describing a naming convention, not a memory rule. Names are for programmers; types inform the compiler. Both are parts of a declaration, but only one determines size.",
      "You are describing a fixed-size rule that does not hold. Different types take different amounts of memory. Both describe allocation, but only one reflects how C++ works.",
      "You are describing runtime allocation, which is not how the compiler works. Allocation decisions are made at compile time based on type. Both concern memory, but only one matches the standard account.",
    ],
    correct: 0,
    explanation: "## Type Determines Size\n\nWhen you define a variable in C++, you must tell the compiler what kind of variable it is: an integer, a character, and so forth. This information tells the compiler how much room to set aside and what kind of value you want to store in your variable. Each cubbyhole is one byte large. If the type of variable you create is two bytes in size, it needs two cubbyholes. The type of the variable tells the compiler how much memory to set aside for the variable.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.2-002",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.2 Variable Types",
    q: "How large is a char variable in C++?",
    options: [
      "Most often one byte",
      "Most often two bytes",
      "Most often four bytes",
      "Most often eight bytes",
    ],
    optionRationales: [
      null,
      "You are describing a short integer, not a char. Shorts are two bytes; chars are one. Both are small types, but only one holds a single character.",
      "You are describing a long integer, not a char. Longs are four bytes; chars are one. Both store values, but only one holds a single character.",
      "You are describing a double, not a char. Doubles are eight bytes; chars are one. Both store data, but only one holds letters and punctuation.",
    ],
    correct: 0,
    explanation: "## One Byte\n\nA char variable (used to hold characters) is most often one byte long. One byte is enough to hold any of the 256 characters and symbols of the ASCII and extended ASCII character sets. A short integer is two bytes on most computers, a long integer is usually four bytes, and an integer without the keyword short or long can be two or four bytes. A common Table 3.1 shows these typical sizes.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.2-003",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.2 Variable Types",
    q: "What is the difference between signed and unsigned integers?",
    options: [
      "Signed integers can hold negative numbers",
      "Signed integers take more memory than unsigned integers",
      "Signed integers can only be used in functions",
      "Signed integers are faster to process than unsigned",
    ],
    optionRationales: [
      null,
      "You are describing a size difference that does not exist. Both signed and unsigned integers of the same type take the same number of bytes. Both store values, but only one allows negative numbers.",
      "You are describing a placement restriction that does not exist. Both signed and unsigned integers can be used anywhere. Both are types, but the difference is the value range, not the location.",
      "You are describing a speed difference that is not significant in practice. Both are processed at comparable speeds. Both are integers, but only one supports negative values.",
    ],
    correct: 0,
    explanation: "## Negative or Not\n\nAll integer types come in two varieties: signed and unsigned. Integers without the word unsigned are assumed to be signed. Signed integers are either negative or positive. Unsigned integers are always positive. Because you have the same number of bytes for both, the largest number you can store in an unsigned integer is twice as big as the largest positive number you can store in a signed integer. An unsigned short integer can handle numbers from 0 to 65,535; a signed short can only represent numbers from -32,768 to 32,767.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.2-004",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.2 Variable Types",
    q: "What is the ASCII character set?",
    options: [
      "A standardized set of characters used to encode letters",
      "A list of keywords reserved by the C++",
      "A method for compressing text files for storage",
      "A programming language used for character processing",
    ],
    optionRationales: [
      null,
      "You are describing reserved words, not ASCII. Keywords are for the compiler; ASCII encodes all text. Both involve characters, but only one is the standard encoding.",
      "You are describing compression, not ASCII. Compression reduces size; ASCII defines values. Both affect text files, but only one maps characters to numbers.",
      "You are describing a language, not ASCII. Languages write programs; ASCII encodes characters. Both involve text, but only one is a character standard.",
    ],
    correct: 0,
    explanation: "## Standard Codes\n\nThe ASCII character set is the set of characters standardized for use on computers. ASCII is an acronym for American Standard Code for Information Interchange. Nearly every computer operating system supports ASCII, though many support other international character sets as well. In the ASCII code, the lowercase letter a is assigned the value 97. All the lower- and uppercase letters, all the numerals, and all the punctuation marks are assigned values between 1 and 128. Another 128 marks and symbols are reserved for use by the computer maker.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.2-005",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.2 Variable Types",
    q: "In ASCII, what value is assigned to the lowercase letter 'a'?",
    options: [
      "97",
      "65",
      "48",
      "32",
    ],
    optionRationales: [
      null,
      "You have given the value of uppercase 'A', not lowercase 'a'. Uppercase letters start at 65; lowercase start at 97. Both are letters, but only one matches lowercase.",
      "You have given the value of the digit '0', not the letter 'a'. Digits come before letters in ASCII. Both have values, but only one is the letter.",
      "You have given the value of the space character, not 'a'. Spaces come before digits and letters. Both are characters, but only one represents a space.",
    ],
    correct: 0,
    explanation: "## 97 for 'a'\n\nIn the ASCII code, the lowercase letter a is assigned the value 97. The uppercase letters, numerals, and punctuation marks are assigned values between 1 and 128. There is a big difference between the value 5 and the character '5': the latter is actually valued at 53, much as the letter 'a' is valued at 97. The value/letter relationship is arbitrary — there is no particular reason that 'a' is 97 — but everyone agrees on the mapping, so it works.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.2-006",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.2 Variable Types",
    q: "What is the sizeof() function used for in C++?",
    options: [
      "It declares a new variable of a specified",
      "It returns the size in bytes of the",
      "It returns the current value of a variable",
      "It converts a value from one type to",
    ],
    optionRationales: [
      "You are describing a declaration, not sizeof(). Declarations create variables; sizeof() measures them. Both are compile-time operations, but only one returns a value.",
      null,
      "You are describing reading a value, not measuring a size. Reading retrieves data; sizeof() measures memory. Both use a variable, but only one returns a size in bytes.",
      "You are describing a type cast, not sizeof(). Casts change type; sizeof() reports size. Both involve types, but only one produces a number.",
    ],
    correct: 1,
    explanation: "## Measuring Memory\n\nThe sizeof() function is provided by your compiler, and it tells you the size of the object you pass in as a parameter. Using sizeof(), you can determine that on a particular computer an int equals a short int, which is 2 bytes, or that a double is 8 bytes. The typical output on a common example is: int = 2, short = 2, long = 4, char = 1, float = 4, double = 8. These sizes may vary by compiler and computer, so good practice is to running the example to see what your own machine reports.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.3-001",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.3 Defining and Naming Variables",
    q: "How do you define a variable in C++?",
    options: [
      "Begin with the keyword var followed",
      "Enclose the name and type inside",
      "State the type, a space, the",
      "Write the variable name",
    ],
    optionRationales: [
      "You are describing a JavaScript-style syntax, not C++. C++ does not use the var keyword. Both declare variables, but only one matches the C++ syntax.",
      "You are describing initializer-list syntax, not a simple declaration. Braces are used in some modern forms but not in a common style. Both create variables, but only one is the standard form.",
      null,
      "You have reversed the order. C++ puts the type first, then the name. Both describe declaration syntax, but only one matches the standard account.",
    ],
    correct: 2,
    explanation: "## Type, Name, Semicolon\n\nYou create or define a variable by stating its type, followed by one or more spaces, followed by the variable name and a semicolon. The variable name can be virtually any combination of letters but cannot contain spaces. Legal variable names include x, J23qrsnf, and myAge. Good variable names tell you what the variables are for; using good names makes it easier to understand the flow of your program. The example int myAge; defines an integer variable called myAge.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.3-002",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.3 Defining and Naming Variables",
    q: "What is camel-notation in variable naming?",
    options: [
      "Writing all variable names in uppercase letters",
      "Separating words with underscores, as in my_car",
      "Writing variable names in a single continuous lowercase",
      "Capitalizing the first letter of each word after the",
    ],
    optionRationales: [
      "You are describing a different convention, not camel-notation. Uppercase is sometimes used for constants; camel notation mixes cases. Both name variables, but only one matches a common definition.",
      "You are describing snake_case, not camelCase. Underscores separate words in snake_case; capitals do so in camelCase. Both are naming conventions, but only one uses no punctuation.",
      "You are describing a compact form, not camel notation. Camel notation has internal capital letters. Both are conventions, but only one has distinct humps.",
      null,
    ],
    correct: 3,
    explanation: "## The Camel's Hump\n\nC++ is case-sensitive: age is different from Age, which is different from AGE. Many programmers prefer to use all lowercase letters for their variable names. If the name requires two words (for example, my car), two popular conventions exist: my_car or myCar. The latter form is called camel-notation, because the capitalization looks something like a camel's hump. Standard teaching uses camel-notation: myCar, theQuickBrownFox, and so forth.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.3-003",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.3 Defining and Naming Variables",
    q: "What is a keyword in C++?",
    options: [
      "A comment that the compiler must read",
      "A word reserved by the language that cannot",
      "A word that has the same meaning in",
      "A variable whose value cannot be changed",
    ],
    optionRationales: [
      "You are describing a mandatory comment, which does not exist. Comments are always optional; keywords are always reserved. Both are written in source, but only one is enforced.",
      null,
      "You are describing a universal term, not a keyword. Keywords are specific to each language. Both are words, but only one is reserved by the compiler.",
      "You are describing a constant, not a keyword. Constants are values; keywords are words. Both cannot be redefined, but only one is a language feature.",
    ],
    correct: 1,
    explanation: "## Reserved Words\n\nSome words are reserved by C++, and you may not use them as variable names. These are keywords used by the compiler to control your program. Keywords include if, while, for, and main. Your compiler manual should provide a complete list, but generally, any reasonable name for a variable is almost certainly not a keyword. The rule is simple: don't use keywords as variable names.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.3-004",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.3 Defining and Naming Variables",
    q: "How can you define more than one variable of the same type in a single statement?",
    options: [
      "Use the keyword multiple before the",
      "Enclose the variable names in parentheses",
      "Write the type once",
      "Write each variable on a separate",
    ],
    optionRationales: [
      "You are describing a keyword that does not exist in C++. Both concern declarations, but only one matches the standard account.",
      "You are describing a syntax that does not exist in C++. Both define variables, but only one matches the standard account.",
      null,
      "You are describing separate statements, which is valid but not the single-statement form. Both define variables, but only one uses commas.",
    ],
    correct: 2,
    explanation: "## Commas Separate Names\n\nYou can create more than one variable of the same type in one statement by writing the type and then the variable names, separated by commas. For example: unsigned int myAge, myWeight; declares two unsigned int variables. The second line long area, width, length; declares three long variables. The type (long) is assigned to all the variables, so you cannot mix types in one definition statement.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.4-001",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.4 Assigning Values",
    q: "What is the assignment operator in C++?",
    options: [
      "The == symbol, which tests whether two values",
      "The : symbol, which defines a label",
      "The -> symbol, which accesses a member of",
      "The = symbol, which assigns the value on",
    ],
    optionRationales: [
      "You are describing the equals relational operator, not the assignment operator. Assignment changes a value; the equals operator compares values. Both use equals symbols, but only one writes.",
      "You are describing a label, not an operator. Labels mark positions; operators perform actions. Both appear in code, but only one stores a value.",
      "You are describing pointer member access, not assignment. Arrow operators access members; assignment stores values. Both use symbols, but only one is about storing.",
      null,
    ],
    correct: 3,
    explanation: "## Assigning Values\n\nYou assign a value to a variable by using the assignment operator (=). Thus, you would assign 5 to Width by writing unsigned short Width; Width = 5; You can combine these steps and initialize Width when you define it by writing unsigned short Width = 5; Initialization looks very much like assignment, and with integer variables, the difference is minor. The essential difference is that initialization takes place at the moment you create the variable.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.4-002",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.4 Assigning Values",
    q: "What is the difference between assignment and initialization?",
    options: [
      "Initialization and assignment are two names for the same operation",
      "Initialization happens when the variable is created; assignment happens after creation",
      "Initialization uses a colon; assignment uses an equals sign",
      "Initialization can only be used with constants; assignment only with variables",
    ],
    optionRationales: [
      "You are describing them as synonyms, which is not accurate. They differ in when they occur. Both store values, but only one is at the moment of creation.",
      null,
      "You are describing a syntax that does not exist. Both initialization and assignment use the equals symbol. Both store values, but only one occurs at declaration time.",
      "You are describing a restriction that does not apply. Both initialization and assignment work with variables. Both store values, but only one is about timing.",
    ],
    correct: 1,
    explanation: "## When It Happens\n\nInitialization looks very much like assignment, and with integer variables, the difference is minor. The essential difference is that initialization takes place at the moment you create the variable. Later, when constants are covered, you will see that some values must be initialized because they cannot be assigned to. Constants require initialization because they cannot be changed after creation — assigning to a constant is an error.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.4-003",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.4 Assigning Values",
    q: "What happens when an unsigned short integer holding 65,535 is incremented by 1?",
    options: [
      "The value becomes 65",
      "The program crashes and the",
      "The value wraps around to",
      "The value stays at 65",
    ],
    optionRationales: [
      "You are describing automatic promotion to a larger type, which does not happen with unsigned short. Both describe going over the limit, but only one matches the standard account.",
      "You are describing a crash that does not occur. Arithmetic overflow is silent in C++. Both describe an error, but only one reflects the actual behaviour.",
      null,
      "You are describing a protective behaviour that does not occur. C++ does not stop at the limit; it wraps. Both describe the boundary, but only one matches how integers behave.",
    ],
    correct: 2,
    explanation: "## Wrapping Around\n\nWhen an unsigned integer reaches its maximum value, it wraps around and starts over, much as a car odometer might. On a common example, smallNumber is declared to be an unsigned short int, able to hold a value between 0 and 65,535. When the maximum value 65,535 is assigned and then incremented, the value becomes 65,536, which does not fit. The value wraps around to 0. Incrementing again gives 1. The wrap-around is silent — no error is raised — which makes it a common source of bugs.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.4-004",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.4 Assigning Values",
    q: "What happens when a signed short integer holding 32,767 is incremented by 1?",
    options: [
      "The value becomes 32",
      "The value stays at 32",
      "The value becomes 0 and",
      "The value wraps around to",
    ],
    optionRationales: [
      "You are describing automatic promotion, which does not occur. Signed shorts wrap like unsigned ones. Both concern overflow, but only one matches the standard account.",
      "You are describing a silent ignore, which does not happen. The increment always changes the value. Both describe the boundary, but only one reflects actual behaviour.",
      "You are describing a program halt, which does not occur. Overflow is silent. Both describe a limit, but only one matches C++ arithmetic.",
      null,
    ],
    correct: 3,
    explanation: "## Down to the Negative\n\nA signed integer is different from an unsigned integer, in that half of the values you can represent are negative. Instead of picturing a traditional car odometer, picture one that rotates up for positive numbers and down for negative numbers. When you run out of positive numbers, you run right into the largest negative numbers and then count back down to 0. Adding 1 to the maximum positive number in a signed short integer (32,767) wraps around to the highest negative value (-32,768). Incrementing again produces -32,767.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.5-001",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.5 Characters and Escape Sequences",
    q: "Why does the ASCII value of '5' differ from the number 5?",
    options: [
      "The character '5' is stored as text",
      "The character '5' is encoded as a number",
      "The character '5' can only be printed",
      "The character '5' takes more memory than the",
    ],
    optionRationales: [
      "You are describing a storage format reversal. The number 5 is stored as a number; the character '5' is stored as its ASCII code. Both are stored in bytes, but only one is a numeric value.",
      null,
      "You are describing a use restriction that does not exist. Both can be printed and calculated. Both are values, but only one is a character encoding.",
      "You are describing a size difference that is not the point. Both take one byte in most cases. Both are values, but only one is about the encoding.",
    ],
    correct: 1,
    explanation: "## Two Fives\n\nWhen you put a character, for example 'a', into a char variable, what is really there is just a number between 0 and 255. It is important to realize that there is a big difference between the value 5 and the character '5'. The latter is actually valued at 53, much as the letter 'a' is valued at 97. This distinction matters when a program mixes text and numbers, and it explains why '5' + '5' does not equal 10.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.5-002",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.5 Characters and Escape Sequences",
    q: "What is an escape character in C++?",
    options: [
      "A character used to close a string literal",
      "A character that cannot be printed to the",
      "A backslash that changes the meaning of the",
      "A special key on the keyboard that stops",
    ],
    optionRationales: [
      "You are describing a delimiter, not an escape. Delimiters mark boundaries; escapes change meaning. Both are characters, but only one signals a transformation.",
      "You are describing unprintable characters generally, not the escape character itself. Escapes can produce unprintable results, but the escape character is the backslash. Both relate to output, but only one is the trigger.",
      null,
      "You are describing the Esc key, not the escape character. The Esc key is a physical button; the escape character is a written backslash. Both are called escape, but only one appears in source code.",
    ],
    correct: 2,
    explanation: "## Change of Meaning\n\nAn escape character changes the meaning of the character that follows it. For example, normally the character n means the letter n, but when it is preceded by the escape character (\\) it means new line. Thus, to put a tab character into your code, you would enter a single quotation mark, the slash, the letter t, and then a closing single quotation mark: char tabCharacter = '\\t'; This example declares a char variable and initializes it with the character value that is recognized as a tab.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.5-003",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.5 Characters and Escape Sequences",
    q: "What does the escape sequence \\t represent?",
    options: [
      "A new line character",
      "A backspace character",
      "A double quote character",
      "A tab character",
    ],
    optionRationales: [
      "You are describing \\n, not \\t. Newline moves to a new line; tab shifts horizontally. Both are whitespace, but only one aligns columns.",
      "You are describing \\b, not \\t. Backspace moves backward; tab moves forward. Both change position, but only one is used for alignment.",
      "You are describing \\\", not \\t. Double quotes appear in strings; tabs are whitespace. Both are escape sequences, but only one produces horizontal spacing.",
      null,
    ],
    correct: 3,
    explanation: "## Tab Character\n\nThe escape sequence \\t inserts a tab character. It is used in a common examples to line up the output of numbers. On line 9 of the example, a new formatting character, \\t, is introduced. This inserts a tab character and is used on lines 8-12 to line up the output. The full list of escape characters includes \\n for new line, \\t for tab, \\b for backspace, \\\" for double quote, \\' for single quote, \\? for question mark, and \\\\ for backslash.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.6-001",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.6 Constants",
    q: "What is the difference between a variable and a constant in C++?",
    options: [
      "A constant is a type",
      "A constant cannot be changed after it",
      "A constant takes more memory than a",
      "A constant is defined only in functions",
    ],
    optionRationales: [
      "You are describing a category error. Constants and variables are both values with types; neither is a type itself. Both are declared with types, but only one cannot change.",
      null,
      "You are describing a size difference that does not exist. Both constants and variables take the same amount of memory for their type. Both store values, but only one is immutable.",
      "You are describing a placement restriction that does not exist. Both can appear in any scope. Both store values, but only one is fixed.",
    ],
    correct: 1,
    explanation: "## Fixed vs Mutable\n\nLike variables, constants are data storage locations. Unlike variables, and as the name implies, constants don't change. You must initialize a constant when you create it, and you cannot assign a new value later. Constants cannot be changed while the program is running. If you need to change studentsPerClass, for example, you need to change the code and recompile. The trade-off is that the compiler can enforce the constant's type and catch mistakes at compile time.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.6-002",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.6 Constants",
    q: "What is a literal constant?",
    options: [
      "A constant that can be changed at runtime",
      "A variable that has been initialized to zero",
      "A value typed directly into the program wherever",
      "A constant that is represented by a name",
    ],
    optionRationales: [
      "You are describing a variable, not a literal constant. Variables are mutable; literal constants are not. Both store values, but only one can be changed.",
      "You are describing a zero-initialized variable, not a literal constant. Both involve numbers, but only one is fixed.",
      null,
      "You are describing a symbolic constant, not a literal. Symbolic constants have names; literals are written values. Both are constants, but only one is written directly.",
    ],
    correct: 2,
    explanation: "## The Raw Value\n\nC++ has two types of constants: literal and symbolic. A literal constant is a value typed directly into your program wherever it is needed. For example, in int myAge = 39; myAge is a variable of type int and 39 is a literal constant. You can't assign a value to 39, and its value can't be changed. The literal is the number as it appears in standard teaching code.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.6-003",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.6 Constants",
    q: "What is a symbolic constant?",
    options: [
      "A constant that is written directly",
      "A character escape sequence",
      "A variable that cannot hold negative",
      "A constant that is represented by",
    ],
    optionRationales: [
      "You are describing a literal constant, not a symbolic one. Literals have no name; symbolic constants do. Both are constants, but only one is a named identifier.",
      "You are describing an escape sequence, not a symbolic constant. Escapes are characters; symbolic constants are values. Both have names of a sort, but only one stores a value.",
      "You are describing an unsigned variable, not a symbolic constant. Unsigned variables are mutable; symbolic constants are fixed. Both concern value limits, but only one is immutable.",
      null,
    ],
    correct: 3,
    explanation: "## A Named Constant\n\nA symbolic constant is a constant that is represented by a name, just as a variable is represented. Unlike a variable, however, after a constant is initialized, its value can't be changed. If your program has one integer variable named students and another named classes, you could compute how many students you have, given a known number of classes, if you knew there were 15 students per class: students = classes * 15; In this example, 15 is a literal constant. Your code would be easier to read and easier to maintain if you substituted a symbolic constant for this value.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.6-004",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.6 Constants",
    q: "What are the two ways to declare a symbolic constant in C++?",
    options: [
      "The preprocessor directive #include and the keyword",
      "The traditional preprocessor directive #define",
      "The keyword static and the keyword final",
      "The keyword define and the keyword constant",
    ],
    optionRationales: [
      "You are describing an include and a non-existent keyword, not the two methods. #include loads files; the const keyword declares constants. Both are C++ features, but only one is about constants.",
      null,
      "You are describing keywords from other languages, not C++. C++ does not use static or final for constants. Both declare constants, but only one matches a common methods.",
      "You are describing keywords that do not exist in standard C++. The keywords are different. Both name constants, but only one set is standard.",
    ],
    correct: 1,
    explanation: "## Old and New\n\nThere are two ways to declare a symbolic constant in C++. The old, traditional, and now obsolete way is with a preprocessor directive, #define. To define a constant the traditional way, you would enter #define studentsPerClass 15. Note that studentsPerClass is of no particular type — #define does a simple text substitution. Although #define works, there is a new, much better way to define constants: const unsigned short int studentsPerClass = 15; This constant has a type, and the compiler can enforce that it is used according to its type.",
    status: "approved"
  },

  {
    id: "CS110-T3-U13-13.6-005",
    mainTopic: "Unit 13: Variables and Constants",
    topic: "13.6 Constants",
    q: "Why is the const method preferred over #define for symbolic constants?",
    options: [
      "The #define method is not supported in modern",
      "The const method takes less memory than #define",
      "The const constant has a type",
      "The const method is faster at runtime than",
    ],
    optionRationales: [
      "You are describing a support limitation that does not exist. #define is still supported in modern compilers. Both methods work, but only one provides type safety.",
      "You are describing a memory difference that is not the reason. The reason is compiler enforcement, not memory. Both methods produce constants, but only one has a type.",
      null,
      "You are describing a runtime performance difference that is not the reason. Both methods produce constants. Both work, but only one gives the compiler type information.",
    ],
    correct: 2,
    explanation: "## Type Safety\n\nThis method has several advantages in making your code easier to maintain and in preventing bugs. The biggest difference is that the const constant has a type, and the compiler can enforce that it is used according to its type. The #define method does a simple text substitution, so the compiler never sees the name at all — it sees the number 15. Because the preprocessor runs before the compiler, the compiler never sees your constant; the substitution is invisible. With const, the compiler knows what the constant is and can catch mistakes.",
    status: "approved"
  },

  // ═══════════════════════════════════════════════════════
  //  UNIT 14 · EXPRESSIONS AND STATEMENTS  (32 items)
  // ═══════════════════════════════════════════════════════

  {
    id: "CS110-T3-U14-14.1-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.1 Statements and Blocks",
    q: "What is a statement in C++?",
    options: [
      "A line of code that controls",
      "A value that can be printed",
      "A named location in memory",
      "A comment that explains the program",
    ],
    optionRationales: [
      null,
      "You are describing a value, not a statement. Values are data; statements are instructions. Both appear in code, but only one performs an action.",
      "You are describing a variable, not a statement. Variables store data; statements act on data. Both have names, but only one is executable code.",
      "You are describing a comment, not a statement. Comments are ignored; statements run. Both appear in source, but only one affects the machine.",
    ],
    correct: 0,
    explanation: "## Doing Something\n\nIn C++, a statement controls the sequence of execution, evaluates an expression, or does nothing (the null statement). All C++ statements end with a semicolon, even the null statement, which is just the semicolon and nothing else. One of the most common statements is the assignment statement x = a + b; Unlike in algebra, this statement does not mean that x equals a + b. It is read, 'Assign the value of the sum of a and b to x.'",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.1-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.1 Statements and Blocks",
    q: "What is a null statement in C++?",
    options: [
      "A semicolon with nothing else, which does nothing",
      "A statement that has been commented out",
      "A statement whose value is zero",
      "A statement that ends the program",
    ],
    optionRationales: [
      null,
      "You are describing a commented-out statement, not a null statement. Comments are ignored; null statements are valid code. Both do nothing visible, but only one is syntactically a statement.",
      "You are describing an expression with the value zero, not a null statement. Expressions return values; the null statement performs no action. Both have an effect of nothing, but only one is syntax.",
      "You are describing an exit statement, not a null statement. Exits end the program; null statements do nothing. Both are statements, but only one has no effect.",
    ],
    correct: 0,
    explanation: "## The Empty Statement\n\nAll C++ statements end with a semicolon, even the null statement, which is just the semicolon and nothing else. It is called the null statement because it performs no action. Its most common and dangerous use is when it appears accidentally after an if condition: if (SomeValue < 10); SomeValue = 10; Running this code shows that SomeValue is always set to 10! Why? The if statement terminates with the semicolon (the do-nothing operator). The next line is not part of the if at all.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.1-003",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.1 Statements and Blocks",
    q: "What is a block in C++?",
    options: [
      "A group of statements enclosed in braces that",
      "A group of files compiled together into one",
      "A section of memory reserved for a variable",
      "A contiguous section of a file on disk",
    ],
    optionRationales: [
      null,
      "You are describing a compilation unit, not a code block. Compilation units are files; blocks are statements. Both group code, but only one appears in standard teaching language.",
      "You are describing an allocation, not a block. Allocations reserve memory; blocks group statements. Both concern scope, but only one is source-level syntax.",
      "You are describing disk storage, not a block. Disk sectors hold files; blocks hold code. Both are groupings, but only one is a program construct.",
    ],
    correct: 0,
    explanation: "## Braces Around Statements\n\nAny place you can put a single statement, you can put a compound statement, also called a block. A block begins with an opening brace ({) and ends with a closing brace (}). Although every statement in the block must end with a semicolon, the block itself does not end with a semicolon. For example, a block of code that swaps the values in two variables acts as one statement when placed inside a function's braces.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.1-004",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.1 Statements and Blocks",
    q: "What is the main purpose of a comment in C++ source?",
    options: [
      "To explain intent to human readers",
      "To speed up the compiled program",
      "To replace every variable name",
      "To force the linker to run twice",
    ],
    optionRationales: [
      null,
      "Comments are ignored by the compiler; they do not speed execution.",
      "Comments document code; they do not replace identifiers.",
      "Comments do not control how many times the linker runs.",
    ],
    correct: 0,
    explanation: "## Invisible but Powerful\n\nWhitespace (tabs, spaces, and newlines) is generally ignored in statements. Whitespace can be used to make your programs more readable and easier to maintain, or it can be used to create horrific and indecipherable code. In this, as in all things, C++ provides the power; you supply the judgment. The danger appears in nested if statements, where indentation can suggest one structure while the compiler sees another — hence a common emphasis on braces.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.10-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.10 Relational and Logical Precedence",
    q: "Which operator has higher precedence: the multiplication operator or the addition operator?",
    options: [
      "Precedence depends on the compiler",
      "The multiplication operator",
      "The addition operator",
      "Both have equal precedence",
    ],
    optionRationales: [
      "You are claiming compiler variance that does not exist. Precedence is standard across C++ compilers. Both are operators, but only one applies first.",
      null,
      "You have reversed the precedence. Multiplication comes first in C++, just as in algebra. Both are mathematical operators, but only one is applied first.",
      "You are describing them as equal, which they are not. Multiplication takes precedence over addition. Both are operators, but they have different priorities.",
    ],
    correct: 1,
    explanation: "## Multiply Before Adding\n\nMultiplication has higher precedence than addition, so the expression $5 + 3 \\times 8$ evaluates as $5 + 24 = 29$ rather than $(5 + 3) \\times 8 = 64$. When two operators share the same precedence, they are usually evaluated left to right (assignment is a notable right-to-left exception).\n\nWhen in doubt, add parentheses. They remove ambiguity for both the compiler and the human reader.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.10-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.10 Relational and Logical Precedence",
    q: "Why is it good practice to write if ((x > 5) && (y > 5)) rather than if (x > 5 && y > 5)?",
    options: [
      "The unparenthesized version is illegal in C++",
      "The parentheses change the value of the",
      "The parentheses make the grouping of the",
      "The parenthesized version runs faster",
    ],
    optionRationales: [
      "You are describing a legality issue that does not apply. Both versions compile. Both work, but only one is preferred for clarity.",
      "You are describing a semantic change that does not occur. Precedence already groups the comparisons before the AND. Both produce the same result, but only one communicates the intent.",
      null,
      "You are describing a performance benefit that does not exist. Both versions produce the same machine code. Both are legal, but only one is clearer to a reader.",
    ],
    correct: 2,
    explanation: "## Explicit Grouping\n\nAlthough precedence will determine which relation is evaluated first, parentheses can both change the order and make the statement clearer. In the case of x > 5 && y > 5, precedence would group the comparisons correctly even without parentheses, because > has higher precedence than &&. But the reader has to know the precedence table to be sure. By writing (x > 5) && (y > 5), the programmer makes the grouping unambiguous. A common guidance is clear: use extra parentheses to clarify what you want to group, and remember that the goal is to write programs that work and are easy to read.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.2-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.2 Expressions and Operators",
    q: "What is an expression in C++?",
    options: [
      "Anything that evaluates to a value",
      "A statement that ends the program",
      "A named location in memory",
      "A comment that explains the code",
    ],
    optionRationales: [
      null,
      "You are describing a terminating statement, not an expression. Terminations end programs; expressions produce values. Both are statements, but only one has a result.",
      "You are describing a variable, not an expression. Variables hold values; expressions produce them. Both are related to values, but only one is a computation.",
      "You are describing a comment, not an expression. Comments are ignored; expressions are evaluated. Both appear in source, but only one affects the program.",
    ],
    correct: 0,
    explanation: "## Anything with a Value\n\nAnything that evaluates to a value is an expression in C++. An expression is said to return a value. Thus, 3 + 2; returns the value 5 and so is an expression. All expressions are statements. The assignment x = a + b; not only adds a and b and assigns the result to x, but returns the value of that assignment (the value of x) as well. Because it is an expression, it can be on the right side of another assignment operator: y = x = a + b;",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.2-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.2 Expressions and Operators",
    q: "What is an lvalue in C++?",
    options: [
      "An operand that can appear on the left",
      "A value that can appear on the right",
      "A local variable declared inside a function",
      "A literal constant such as the number 5",
    ],
    optionRationales: [
      null,
      "You are describing an rvalue, not an lvalue. Rvalues appear on the right; lvalues on the left. Both are operands, but only one can be assigned to.",
      "You are describing a scope category, not an lvalue. Scope and lvalue-ness are separate properties. Both describe a variable, but only one is about assignment position.",
      "You are describing a literal constant, which is not an lvalue. Literals are rvalues. Both appear in expressions, but only one can be assigned to.",
    ],
    correct: 0,
    explanation: "## Assignable Position\n\nAn operand that legally can be on the left side of an assignment operator is called an lvalue. That which can be on the right side is called an rvalue. Constants are r-values; they cannot be l-values. Thus, you can write x = 35; but you can't legally write 35 = x; All l-values are r-values, but not all r-values are l-values. The name lvalue originally meant 'left value,' but the modern understanding is that an lvalue is any expression that refers to a location in memory that can be assigned to.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.2-003",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.2 Expressions and Operators",
    q: "What does the modulus operator (%) return?",
    options: [
      "The remainder after an integer division",
      "The quotient of a division",
      "The average of two numbers",
      "The larger of two numbers",
    ],
    optionRationales: [
      null,
      "You are describing division, not modulus. Division returns the quotient; modulus returns the remainder. Both use two operands, but only one discards the quotient.",
      "You are describing an average, not modulus. Averages require addition and division; modulus uses only division. Both produce numbers, but only one is a remainder.",
      "You are describing a maximum, not modulus. Maximum finds the larger value; modulus finds a remainder. Both compare values, but only one uses division.",
    ],
    correct: 0,
    explanation: "## The Remainder\n\nInteger division is somewhat different from everyday division. When you divide 21 by 4, the result is 5 because integers don't have fractions — the remainder is lopped off. To get the remainder, you take 21 modulus 4 (21 % 4) and the result is 1. The modulus operator tells you the remainder after an integer division. Finding the modulus can be very useful. For example, you might want to print a statement on every 10th action. Any number whose value is 0 when you modulus 10 with that number is an exact multiple of 10.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.2-004",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.2 Expressions and Operators",
    q: "What does the compound assignment x += 5; mean?",
    options: [
      "Add 5 to x and store the result",
      "Compare x with 5 for equality",
      "Replace x with the value 5 only",
      "Subtract 5 from x and discard x",
    ],
    optionRationales: [
      null,
      "You are describing ==, not +=. Compound assignment updates the variable.",
      "You are describing a plain overwrite with 5, which would be x = 5, not x += 5.",
      "You are describing subtraction and loss of the variable, which += does not do.",
    ],
    correct: 0,
    explanation: "## Plus-Equals\n\nThe self-assigned addition operator (+=) adds the rvalue to the lvalue and then reassigns the result into the lvalue. This operator is pronounced 'plus-equals.' The statement myAge += 2; would be read 'myAge plus-equals two.' If myAge had the value 4 to start, it would have 6 after this statement. There are self-assigned subtraction (-=), division (/=), multiplication (*=), and modulus (%=) operators as well. Each provides a shorter way to write a self-assignment.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.3-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.3 Increment and Decrement",
    q: "What is the difference between the prefix and postfix forms of the increment operator?",
    options: [
      "Prefix increments before use; postfix increments after use",
      "Prefix works with integers; postfix works with floats",
      "Prefix is faster; postfix is more accurate",
      "Prefix can only be used with variables",
    ],
    optionRationales: [
      null,
      "You are describing a type restriction that does not exist. Both forms work with any numeric type. Both are operators, but only one changes the timing of the increment.",
      "You are describing a performance difference that is not the point. Both forms are equally fast. Both are operators, but only one matters when the value is used.",
      "You are describing a variable restriction that does not exist. Both forms require a variable. Both modify the variable, but neither can modify a constant.",
    ],
    correct: 0,
    explanation: "## Before or After\n\nBoth the increment operator (++) and the decrement operator (--) come in two varieties: prefix and postfix. The prefix variety is written before the variable name (++myAge); the postfix variety is written after (myAge++). In a simple statement, it doesn't much matter which you use, but in a complex statement, when you are incrementing a variable and then assigning the result to another variable, it matters very much. The prefix operator is evaluated before the assignment, the postfix is evaluated after. The semantics of prefix: increment the value and then fetch it. The semantics of postfix: fetch the value and then increment the original.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.3-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.3 Increment and Decrement",
    q: "If myAge is 40 and the statement cout << myAge++; runs, what value is printed?",
    options: [
      "It depends",
      "40",
      "41",
      "39",
    ],
    optionRationales: [
      "You are claiming compiler variance that does not exist. The postfix operator's behaviour is standardized. Both describe the operator, but only one is correct.",
      null,
      "You have applied the increment before the print, but the postfix operator does the opposite. Both describe the operator, but only one matches postfix behaviour.",
      "You have decremented rather than incremented. Postfix ++ adds one; the value printed is still the original. Both concern the value, but only one is correct.",
    ],
    correct: 1,
    explanation: "## Fetch First, Then Increment\n\nOn line 17 of a common example, myAge is incremented as part of the printing statement, using the postfix increment operator. Because it is postfix, the increment happens after the print, and so the value 40 is printed even though myAge is now 41. In contrast, on the next line, yourAge is incremented using the prefix increment operator, so it is incremented before being printed, and 41 displays. The prefix-and-postfix distinction only matters when the operator's result is used in the same expression.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.4-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.4 Precedence and Parentheses",
    q: "What does operator precedence determine in C++?",
    options: [
      "The amount of memory reserved for a variable",
      "The type returned by an expression",
      "The order in which operators are evaluated in",
      "The number of times an operator can be",
    ],
    optionRationales: [
      "You are describing memory allocation, not precedence. Allocation is about variables; precedence is about evaluation. Both affect the result, but only one determines order.",
      "You are describing type resolution, not precedence. Types are determined by declarations; precedence determines evaluation order. Both affect expression meaning, but only one is about sequence.",
      null,
      "You are describing usage limits, which do not exist. Operators can be used any number of times. Both concern operators, but only one is about ordering.",
    ],
    correct: 2,
    explanation: "## Order Matters\n\nIn the complex statement x = 5 + 3 * 8; which is performed first, the addition or the multiplication? Every operator has a precedence value. Multiplication has higher precedence than addition, so the value of the expression is 5 + 24, or 29. When two mathematical operators have the same precedence, they are performed in left-to-right order. Some operators, such as assignment, are evaluated in right-to-left order. Parentheses change the precedence order: items in parentheses are evaluated at a higher precedence than any of the mathematical operators.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.4-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.4 Precedence and Parentheses",
    q: "What is the value of x after the statement x = 5 + 3 * 8; runs?",
    options: [
      "64",
      "40",
      "120",
      "29",
    ],
    optionRationales: [
      "You have performed the addition first, but multiplication has higher precedence. Both describe the expression, but only one reflects the correct order.",
      "You have added first and then multiplied by the wrong value. Both describe the expression, but only one is correct.",
      "You have multiplied all three numbers instead of respecting precedence. Both produce a value, but only one matches the operator hierarchy.",
      null,
    ],
    correct: 3,
    explanation: "## Multiplication First\n\nMultiplication has higher precedence than addition, so 5 + 3 * 8 evaluates the multiplication first: 3 * 8 = 24. Then it adds 5, giving 29. The competing interpretation — adding 5 + 3 first to get 8, then multiplying by 8 to get 64 — would require parentheses: x = (5 + 3) * 8; This is why standard teaching emphasizes using parentheses when you want to override the natural precedence order.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.4-003",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.4 Precedence and Parentheses",
    q: "Why should you be careful about nesting parentheses too deeply?",
    options: [
      "Deeply nested expressions always produce incorrect results",
      "Deeply nested expressions become hard for humans to",
      "The compiler cannot process expressions with more than",
      "Each level of nesting consumes significant memory at",
    ],
    optionRationales: [
      "You are describing a correctness issue that does not occur. Nested expressions produce correct results; they are just hard to read. Both concern nesting, but only one reflects the main point.",
      null,
      "You are describing a compiler limitation that does not exist. Compilers handle deep nesting. Both describe nesting, but only one is a common concern.",
      "You are describing a memory cost that is not significant. Nesting is a compile-time concern, not a runtime one. Both involve nesting, but only one matches a common warning.",
    ],
    correct: 1,
    explanation: "## Readability First\n\nDeeply nested parentheses are legal in C++, but they quickly become hard for humans to parse. A reader must track matching pairs by eye, and a single misplaced parenthesis can change the meaning of the whole expression.\n\nPrefer breaking a complex expression into named intermediate variables or adding clear spacing and comments. Clarity matters as much as correctness: code that works but cannot be maintained safely is still a liability.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.5-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.5 Truth and Relational Operators",
    q: "In C++, what values are considered false and true?",
    options: [
      "Only the value 1 is true; everything else is false",
      "Only the keyword false is false; all values are true",
      "Zero is false; any nonzero value is true",
      "Negative numbers are false; positive numbers are true",
    ],
    optionRationales: [
      "You are describing a 1-only rule that does not exist. Any nonzero value is true, not just 1. Both describe truth, but only one is correct.",
      "You are describing a keyword-based rule that does not apply. C++ treats all values as truthy or falsy. Both describe truth, but only one reflects how the language works.",
      null,
      "You are describing a sign-based rule that does not exist. Negative numbers are just as true as positive ones if nonzero. Both describe truth, but only one matches the standard account.",
    ],
    correct: 2,
    explanation: "## Zero Is False\n\nIn C++, zero is considered false, and all other values are considered true, although true is usually represented by 1. Thus, if an expression is false, it is equal to zero, and if an expression is equal to zero, it is false. If a statement is true, all you know is that it is nonzero, and any nonzero statement is true. Because an expression always has a value, many C++ programmers take advantage of this feature in their if statements, writing if (x) instead of if (x != 0). Standard teaching notes that the latter is clearer, even though both are legal.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.5-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.5 Truth and Relational Operators",
    q: "What do relational operators return?",
    options: [
      "The original values unchanged",
      "A character representing the operation",
      "An error if the values",
      "1 for true and 0",
    ],
    optionRationales: [
      "You are describing an identity operation, not a comparison. Comparisons produce new values; they do not pass through the originals. Both use operands, but only one returns 1 or 0.",
      "You are describing a symbolic result, not a numeric one. Comparisons return numbers, not symbols. Both represent results, but only one is used by the if statement.",
      "You are describing an error condition, which does not occur. Comparisons are legal on any pair of values. Both involve conditions, but only one returns a value.",
      null,
    ],
    correct: 3,
    explanation: "## One or Zero\n\nEvery relational statement evaluates to either 1 (TRUE) or 0 (FALSE). If the integer variable myAge has the value 39, and the integer variable yourAge has the value 40, then the expression myAge == yourAge; evaluates to 0, or false, because the variables are not equal. The expression myAge > yourAge; evaluates to 0 or false. The relational operators are six: equals (==), not equals (!=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.5-003",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.5 Truth and Relational Operators",
    q: "What is the danger of confusing = with == in C++?",
    options: [
      "The two symbols are interchangeable in modern C++",
      "The assignment operator can silently change a value",
      "The compiler will always refuse to build the",
      "The equals operator works only with integers",
    ],
    optionRationales: [
      "You are describing them as interchangeable, which is incorrect. They perform different operations. Both use equals symbols, but only one is used for comparison.",
      null,
      "You are claiming the compiler always catches the mistake, which is false. In many contexts the assignment is legal, so the compiler accepts it. Both concern operators, but only one reflects the actual danger.",
      "You are describing a restriction that does not exist. Both = and == work with many types. Both compare or assign, but neither is limited to integers.",
    ],
    correct: 1,
    explanation: "## The Silent Bug\n\nMany novice C++ programmers confuse the assignment operator (=) with the equals operator (==). This can create a nasty bug in your program. In a context like if (c = (a - b)), the assignment executes first and stores the result of a - b into c. Because the assignment expression returns a value, the condition is true whenever the assignment is nonzero. The compiler often does not complain, because the code is legal — it just does not do what the programmer intended. A common exercise on this point illustrates exactly how the bug behaves.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.6-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.6 The if Statement",
    q: "What does the if statement do in C++?",
    options: [
      "It assigns a default value to",
      "It defines a new function",
      "It tests a condition and executes",
      "It repeats a statement until a",
    ],
    optionRationales: [
      "You are describing an initialization, not an if statement. Initializations set values; if statements branch. Both involve conditions, but only one controls execution.",
      "You are describing a function declaration, not an if statement. Declarations create functions; if statements decide. Both are statements, but only one branches.",
      null,
      "You are describing a while loop, not an if statement. While loops repeat; if statements execute once. Both test conditions, but only one repeats.",
    ],
    correct: 2,
    explanation: "## Branch on Condition\n\nThe if statement enables you to test for a condition (such as whether two variables are equal) and branch to different parts of your code, depending on the result. The simplest form is: if (expression) statement; The expression in the parentheses can be any expression at all, but it usually contains a relational expression. If the expression has the value 0, it is considered false, and the statement is skipped. If it has any nonzero value, it is considered true, and the statement is executed. Because a block of statements is equivalent to a single statement, the branch can be as large as needed.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.6-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.6 The if Statement",
    q: "What does the else keyword do?",
    options: [
      "It ends the if statement so the program",
      "It repeats the if statement until the condition",
      "It suppresses the output of the if statement",
      "It provides an alternative statement to run when",
    ],
    optionRationales: [
      "You are describing the natural end of the if statement, not else. The if ends on its own; else provides an alternative. Both control flow, but only one runs when the condition is false.",
      "You are describing a loop, not else. Loops repeat; else is a one-time alternative. Both involve conditions, but only one executes more than once.",
      "You are describing output suppression, not else. else runs a different statement; it does not silence one. Both affect what happens, but only one is about which branch runs.",
      null,
    ],
    correct: 3,
    explanation: "## The Alternative\n\nOften your program will want to take one branch if the condition is true, another if it is false. The keyword else can make for far more readable code: if (expression) statement1; else statement2; If the condition is true, statement1 runs; if the condition is false, statement2 runs. If the else clause were removed, statement2 would run regardless of the outcome of the if. A common example shows that the else clause is what ties the second statement to the failed condition.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.6-003",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.6 The if Statement",
    q: "What happens when you accidentally place a semicolon after the condition of an if statement?",
    options: [
      "The if statement becomes an infinite loop",
      "The if statement does nothing",
      "The compiler reports a syntax error immediately",
      "The program halts at the semicolon",
    ],
    optionRationales: [
      "You are describing a loop that does not occur. The null statement does nothing once. Both involve the condition, but only one matches the behaviour.",
      null,
      "You are claiming the compiler catches the mistake, which it usually does not. The code is legal. Both describe the mistake, but only one reflects what happens.",
      "You are describing a program halt, which does not occur. The program continues with a different interpretation. Both describe the error, but only one is accurate.",
    ],
    correct: 1,
    explanation: "## The Empty Body\n\nMany novice C++ programmers inadvertently put a semicolon after their if statements: if (SomeValue < 10); SomeValue = 10; What was intended was to test whether SomeValue is less than 10 and, if so, to set it to 10. Running this code snippet shows that SomeValue is always set to 10! Why? The if statement terminates with the semicolon (the do-nothing operator). Remember that indentation has no meaning to the compiler. Removing the semicolon makes the final line part of the if statement and makes the code do what was intended.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.6-004",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.6 The if Statement",
    q: "Why do braces matter in nested if statements?",
    options: [
      "They are required by the compiler in every if statement",
      "They prevent the compiler from running the else clause",
      "They make it clear which else belongs to which if",
      "They speed up the program by grouping code",
    ],
    optionRationales: [
      "You are describing a syntactic requirement that does not apply. Braces are optional for single statements. Both group code, but only one is required by standard guidance.",
      "You are describing a restriction that does not exist. Braces do not suppress else clauses. Both relate to control flow, but only one is the correct reason.",
      null,
      "You are describing a performance benefit that does not exist. Braces do not affect speed. Both group code, but only one is the main reason.",
    ],
    correct: 2,
    explanation: "## The Dangling Else\n\nIn C++, an `else` always binds to the nearest unmatched `if`. Indentation is for humans only — the compiler ignores it. So a nested structure that *looks* like the `else` belongs to an outer `if` may actually attach to the inner `if`.\n\nThe program can still compile and often appear to work on the test cases you tried, which makes the bug hard to spot. Putting braces around each branch makes the grouping explicit: the `else` then belongs to the `if` you intended.\n\n**Rule:** brace nested `if`/`else` bodies even when a branch is a single statement. Future edits will not silently reattach the `else`.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.7-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.7 Logical Operators",
    q: "What does the logical AND operator (&&) do?",
    options: [
      "It evaluates two expressions and is",
      "It reverses the truth value of",
      "It compares two values numerically",
      "It evaluates two expressions and is",
    ],
    optionRationales: [
      "You are describing OR, not AND. OR requires either; AND requires both. Both combine expressions, but only one demands all conditions be true.",
      "You are describing NOT, not AND. NOT reverses a single value; AND combines two. Both concern logic, but only one uses two operands.",
      "You are describing a relational operator, not AND. Relational operators compare; AND combines. Both produce a truth value, but only one requires both sides to be true.",
      null,
    ],
    correct: 3,
    explanation: "## Both Must Be True\n\nA logical AND statement evaluates two expressions, and if both expressions are true, the logical AND statement is true as well. If it is true that you are hungry, AND it is true that you have money, THEN it is true that you can buy lunch. Thus, if ((x == 5) && (y == 5)) evaluates TRUE if both x and y are equal to 5, and it evaluates FALSE if either one is not equal to 5. Both sides must be true for the entire expression to be true. Note that the logical AND is two && symbols; a single & is a different operator.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.7-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.7 Logical Operators",
    q: "What does the logical OR operator (||) do?",
    options: [
      "It compares two values for equality",
      "It evaluates two expressions and is true if",
      "It evaluates two expressions and is true only",
      "It reverses the truth value of a single",
    ],
    optionRationales: [
      "You are describing the equals operator, not OR. Equals compares values; OR combines conditions. Both produce a truth value, but only one uses || symbols.",
      null,
      "You are describing AND, not OR. AND requires both; OR requires at least one. Both combine expressions, but only one is satisfied by a single true.",
      "You are describing NOT, not OR. NOT operates on one expression; OR combines two. Both concern truth, but only one produces the negation of a value.",
    ],
    correct: 1,
    explanation: "## Either Is Enough\n\nA logical OR statement evaluates two expressions. If either one is true, the expression is true. If you have money OR you have a credit card, you can pay the bill. You don't need both money and a credit card; you need only one, although having both would be fine as well. Thus, if ((x == 5) || (y == 5)) evaluates TRUE if either x or y is equal to 5, or if both are. Note that the logical OR is two || symbols; a single | is a different operator.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.7-003",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.7 Logical Operators",
    q: "What does the logical NOT operator (!) do?",
    options: [
      "It evaluates true if the expression is a number",
      "It evaluates true if the expression is zero",
      "It evaluates true if the expression being tested is false",
      "It evaluates true if the expression being tested is true",
    ],
    optionRationales: [
      "You are describing a type check, not a logical operation. NOT concerns truth, not type. Both are operations, but only one produces a boolean result.",
      "You are describing a test of zero, not the NOT operator. Both relate to truth, but only one reverses a value.",
      null,
      "You are describing identity, not negation. NOT reverses; it does not pass through. Both are unary, but only one changes the truth value.",
    ],
    correct: 2,
    explanation: "## The Negation\n\nA logical NOT expression is true when the expression being tested is false. So `!(x == 5)` is true only when `x` is not equal to 5 — the same meaning as `if (x != 5)`.\n\nPrefer the explicit `!=` form when you simply mean \"not equal.\" Reserve `!` for cases where negation of a whole condition makes the logic clearer. The three logical operators are AND (`&&`), OR (`||`), and NOT (`!`).",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.7-004",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.7 Logical Operators",
    q: "What is the purpose of parentheses in complex logical expressions?",
    options: [
      "They convert a true value into a false",
      "They are required by the compiler for all",
      "They delete the extra values from the expression",
      "They change the evaluation order and make the",
    ],
    optionRationales: [
      "You are describing a truth-inversion, not parentheses. Inversion is done by NOT; parentheses group sub-expressions. Both affect the result, but only one clarifies meaning.",
      "You are describing a syntactic requirement that does not apply. Simple logical expressions do not require parentheses. Both concern syntax, but only one is this recommendation.",
      "You are describing a deletion that does not occur. Parentheses group and prioritize; they do not remove. Both concern expression structure, but only one is accurate.",
      null,
    ],
    correct: 3,
    explanation: "## Clarity Through Grouping\n\nRelational operators and logical operators, being C++ expressions, each return a value: 1 (TRUE) or 0 (FALSE). Like all expressions, they have a precedence order that determines which relations are evaluated first. This fact is important when determining the value of a statement such as if (x > 5 && y > 5 || z > 5). Although precedence will determine which relation is evaluated first, parentheses can both change the order and make the statement clearer: if ((x > 5) && ((y > 5) || (z > 5))). It is often a good idea to use extra parentheses to clarify what you want to group. The goal is to write programs that work and are easy to read and understand.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.8-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.8 Common Programming Pitfalls",
    q: "Which of the following is a common novice error in C++ if statements?",
    options: [
      "Adding comments before each function",
      "Placing a semicolon directly after the if",
      "Using braces around a single statement",
      "Using lowercase letters in variable names",
    ],
    optionRationales: [
      "You are describing a documentation practice, not an error. Comments improve readability. Both affect code quality, but only one is a defect.",
      null,
      "You are describing a valid style, not an error. Braces around single statements are legal and often recommended. Both are syntactic choices, but only one is a mistake.",
      "You are describing a naming choice, not an error. Lowercase names are perfectly valid. Both concern style, but only one produces a bug.",
    ],
    correct: 1,
    explanation: "## The Semicolon Trap\n\nMany novice C++ programmers inadvertently put a semicolon after their if statements. Running this code snippet will show that SomeValue is always set to 10! Why? The if statement terminates with the semicolon (the do-nothing operator). Remember that indentation has no meaning to the compiler. Removing the semicolon will make the final line part of the if statement and will make this code do what was intended. The same trap appears in loops, where a stray semicolon can make the loop body empty and the program behave in ways that look baffling to the programmer.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.8-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.8 Common Programming Pitfalls",
    q: "Why is it considered a good practice to write if (x != 0) instead of if (x)?",
    options: [
      "The shorthand form is not legal in C++",
      "The explicit form avoids a compile-time error",
      "The explicit form makes the intent of the",
      "The explicit form runs faster than the shorthand",
    ],
    optionRationales: [
      "You are describing a legality issue that does not apply. Both forms are legal. Both produce the same result, but only one is preferred for clarity.",
      "You are describing an error that does not occur. Both forms compile without error. Both work, but only one is recommended for readability.",
      null,
      "You are describing a runtime difference that does not exist. Both forms produce the same machine code. Both are valid, but only one is clearer.",
    ],
    correct: 2,
    explanation: "## Explicit Is Better\n\nBecause an expression always has a value, many C++ programmers take advantage of this feature in their if statements, writing if (x) to mean 'if x is true (nonzero).' This is a bit of a cheat; it would be clearer if written if (x != 0). Both statements are legal, but the latter is clearer. It is good programming practice to reserve the former method for true tests of logic, rather than for testing for nonzero values. Similarly, if (!x) is equivalent to if (x == 0), but the second statement is somewhat easier to understand and is more explicit.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.8-003",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.8 Common Programming Pitfalls",
    q: "Why can unsigned integer subtraction surprise beginners?",
    options: [
      "Unsigned values cannot be subtracted at all",
      "The compiler always rounds the result up",
      "Unsigned subtraction is rejected at compile time",
      "A result that should be negative can wrap",
    ],
    optionRationales: [
      "You are describing a ban that does not exist. Unsigned subtraction is legal.",
      "You are describing a rounding rule that does not apply to this integer case.",
      "You are describing a compile error that does not occur for valid unsigned subtraction.",
      null,
    ],
    correct: 3,
    explanation: "## The Unsigned Trap\n\nUnsigned integers cannot represent negative values. If you subtract a larger unsigned value from a smaller one, the result wraps around under modular arithmetic and becomes a very large positive number instead of a negative one.\n\nFor example, subtracting in a way that \"should\" produce $-50$ on a 32-bit unsigned type can yield a value near $2^{32}-50$. The lesson: use signed types when negative results are meaningful, or check ranges before subtracting unsigned quantities.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.8-004",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.8 Common Programming Pitfalls",
    q: "What is good practice regarding parentheses in logical expressions?",
    options: [
      "Never use parentheses in logical expressions",
      "Use parentheses to make the evaluation order explicit",
      "Avoid parentheses to keep the code short",
      "Use parentheses only when the compiler requires them",
    ],
    optionRationales: [
      "You are recommending avoidance, which is the opposite of standard guidance. Both concern style, but only one is recommended.",
      null,
      "You are recommending brevity over clarity, which is the opposite of standard guidance. Both write code, but only one matches the recommendation.",
      "You are recommending a compiler-driven rule that does not reflect standard teaching. Good practice is to parentheses for clarity, not only for necessity. Both concern syntax, but only one is the guidance.",
    ],
    correct: 1,
    explanation: "## For Clarity, Not Just Compilation\n\nExtra parentheses in logical expressions make the intended grouping obvious to a human reader. Precedence already decides evaluation order, but readers should not need to recall the full table to understand `x > 5 && y > 5 || z > 5`.\n\nWriting `(x > 5) && ((y > 5) || (z > 5))` states the grouping explicitly. The goal is code that both works and is easy to maintain.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.9-001",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.9 Practice and Debugging",
    q: "In if (c = (a - b)), why can the condition behave unexpectedly?",
    options: [
      "It is missing a required semicolon",
      "It declares a, b, and c incorrectly",
      "It assigns a - b to c",
      "It compares a - b with c using",
    ],
    optionRationales: [
      "You are describing a different syntax issue. The semicolons are present in the exercise form.",
      "You are describing a declaration issue. The variables are declared correctly in the exercise.",
      null,
      "You have reversed the operators. The code uses = (assignment), not == (comparison).",
    ],
    correct: 2,
    explanation: "## The Classic Mistake\n\nIn `if (c = (a - b))`, the operator is assignment (`=`), not equality (`==`). The expression assigns `a - b` into `c` and then uses that assigned value as the condition. Any nonzero result is treated as true, so the branch often runs when the programmer expected a comparison.\n\nThis is a classic novice bug: the code is legal C++, so the compiler does not always warn, and the program can look correct on casual tests. Prefer `==` when you mean comparison, and enable compiler warnings for assignments used as conditions.",
    status: "approved"
  },

  {
    id: "CS110-T3-U14-14.9-002",
    mainTopic: "Unit 14: Expressions and Statements",
    topic: "14.9 Practice and Debugging",
    q: "Why is it good practice to use braces even for single-statement if branches?",
    options: [
      "They make the program run faster",
      "They are required by the C++ language standard",
      "They prevent the compiler from evaluating the condition",
      "They reduce the risk of bugs when the",
    ],
    optionRationales: [
      "You are describing a performance benefit that does not exist. Braces have no runtime cost. Both group code, but only one is about future safety.",
      "You are describing a language requirement that does not apply. Braces are optional for single statements. Both group code, but only one is standard guidance.",
      "You are describing an interference with the compiler that does not occur. Braces do not prevent evaluation. Both concern flow, but only one reflects the reason.",
      null,
    ],
    correct: 3,
    explanation: "## Future-Proofing\n\nC++ allows a single statement after `if` without braces. That is convenient until someone later adds a second statement or nests another `if`. Without braces, an `else` can bind to the wrong `if`, and indentation will not save you.\n\nAlways bracing the body makes structure explicit. The code keeps doing what you intended when it is edited or nested later.",
    status: "approved"
  }
);

// END — 91 items | positions {0: 26, 1: 23, 2: 22, 3: 20}
// Verify: node --check assets/mcq/CS110_T3.js
