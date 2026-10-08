export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory?: "FinTech" | "Banking" | "Trading" | "Crypto" | "Gaming";
  description: string;
  image: string;
  tags: string[];
  role: string;
  businessProblem: string;
  systemSolution: string;
  keyCapabilities: string[];
  techStack: string[];
  architectureNotes: string;
  impactOutcome: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  duration: string;
  badgeCode: string;
  badgeColor: string;
  category: string;
  description: string;
  keyFocus: string[];
}

export interface DomainCategory {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  areas: string[];
}

export const PROFILE = {
  name: "OJHAS WATWANI",
  title: "SENIOR TECHNOLOGY CONSULTANT",
  positioning: "FinTech · Banking · Trading · Crypto · Gaming",
  yearsExperience: "10+",
  education: {
    degree: "M.Tech",
    field: "Computer Science & Engineering",
  },
  headlineLead: "BUILDING FINANCIAL SYSTEMS",
  headlineAccent: "FOR A DIGITAL WORLD.",
  summary:
    "10+ years of experience designing and delivering scalable financial technology systems across banking, trading, crypto and gaming.",
  aboutHeading: "TURNING COMPLEX SYSTEMS INTO RELIABLE PRODUCTS.",
  aboutText:
    "Technology consultant with 10+ years of experience across FinTech, banking, trading, crypto and gaming. Focused on scalable system architecture, reliable backend services, and end-to-end product engineering.",
  email: "contact@ojhaswatwani.com",
  socials: {
    linkedin: "https://linkedin.com/in/ojhaswatwani",
    github: "https://github.com/ojhaswatwani",
    twitter: "https://x.com/ojhaswatwani",
    email: "mailto:contact@ojhaswatwani.com",
  },
  strengths: [
    { title: "Product Engineering", desc: "Translating business and financial requirements into reliable, responsive user-facing and backend products." },
    { title: "Financial Technology", desc: "Hands-on experience across digital banking, payment integrations, wallet infrastructure, and trading systems." },
    { title: "System Architecture", desc: "Designing scalable backend services, structured APIs, and reliable database architectures." },
    { title: "Scalable Infrastructure", desc: "Building real-time and high-performance services deployed on cloud and container environments." },
  ],
};

export const RECRUITER_QUICK_FACTS = [
  { label: "Total Experience", value: "10+ Years", detail: "Technology Consultant & Engineering" },
  { label: "Tenure BETADRiX", value: "5 Years", detail: "FinTech, Real-Time & Gaming Platforms" },
  { label: "Tenure Infotech", value: "5 Years", detail: "Enterprise Software & Digital Banking" },
  { label: "Academic Credential", value: "M.Tech", detail: "Computer Science & Engineering" },
];

export const DOMAINS: DomainCategory[] = [
  {
    number: "01",
    title: "FINTECH",
    subtitle: "Payment Systems & Wallets",
    description: "Designing multi-currency transaction infrastructure, payment integrations, balance ledgers, and digital wallet services.",
    areas: ["Payment Gateway Integrations", "Digital Wallet Infrastructure", "Transaction Reconciliation", "Account & Balance Services"],
  },
  {
    number: "02",
    title: "BANKING",
    subtitle: "Digital Banking & Accounts",
    description: "Building digital banking platforms, customer onboarding and KYC workflows, secure account transactions, and administrative controls.",
    areas: ["Digital Banking Platforms", "Customer KYC Verification", "Account Transaction Services", "Administrative Portals"],
  },
  {
    number: "03",
    title: "TRADING",
    subtitle: "Market Data & Analytics",
    description: "Developing trading platforms, real-time market data visualizers, quantitative strategy workflows, and risk monitoring tools.",
    areas: ["Real-Time Market Data", "Order Execution Workflows", "Strategy Backtesting Frameworks", "Portfolio Performance Analytics"],
  },
  {
    number: "04",
    title: "CRYPTO",
    subtitle: "Digital Assets & Exchanges",
    description: "Engineering cryptocurrency trading interfaces, live charting, asset balances, and blockchain infrastructure integrations.",
    areas: ["Trading Terminal Interfaces", "Live Candlestick Charting", "Portfolio & Asset Balances", "Blockchain Ledger Integrations"],
  },
  {
    number: "05",
    title: "GAMING",
    subtitle: "Real-Time & Platform Systems",
    description: "Deploying real-time platform services, multi-currency player wallets, platform administration, and analytics consoles.",
    areas: ["Real-Time Platform Services", "Multi-Currency Gaming Wallets", "Risk & Session Monitoring", "Platform Analytics & Reporting"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "betadrix",
    period: "2021 — PRESENT",
    company: "BETADRiX",
    duration: "5 YEARS",
    badgeCode: "BTX",
    badgeColor: "#161616",
    category: "FinTech · Gaming · Financial Systems",
    description:
      "Development of gaming and financial technology platforms, real-time systems, wallet infrastructure and scalable backend services.",
    keyFocus: [
      "Gaming Platforms and interactive real-time platform services",
      "Wallet and transaction infrastructure for multi-currency operations",
      "Real-time backend infrastructure and API service architecture",
      "Admin and analytics systems for operational management",
      "Scalable backend services deployed with cloud infrastructure",
    ],
  },
  {
    id: "infotech",
    period: "2016 — 2021",
    company: "INFOTECH",
    duration: "5 YEARS",
    badgeCode: "INF",
    badgeColor: "#29251F",
    category: "Enterprise Technology · Banking · Software Systems",
    description:
      "Enterprise software solutions, digital banking platforms, payment systems and large-scale financial applications.",
    keyFocus: [
      "Digital banking platforms and user account workflows",
      "Payment systems integration and transaction processing",
      "Enterprise software solutions and scalable web services",
      "System architecture and backend scalability",
      "Database systems and secure application infrastructure",
    ],
  },
];

export const SKILLS_DATA = {
  domainExpertise: [
    "FinTech",
    "Banking Systems",
    "Trading Platforms",
    "Payment Systems",
    "Financial APIs",
    "System Architecture",
    "Backend Engineering",
    "Database Systems",
    "Cloud Infrastructure",
    "AI/ML",
    "Blockchain",
    "Real-Time Systems",
  ],
  technologyStack: [
    { name: "Python", category: "Languages & Analytics" },
    { name: "TypeScript", category: "Languages & Applications" },
    { name: "JavaScript", category: "Languages & Web" },
    { name: "React", category: "Frontend Applications" },
    { name: "Next.js", category: "Web Applications" },
    { name: "Node.js", category: "Backend Services" },
    { name: "PostgreSQL", category: "Relational Databases" },
    { name: "MongoDB", category: "Document Databases" },
    { name: "AWS", category: "Cloud Infrastructure" },
    { name: "Docker", category: "Containerization" },
    { name: "Blockchain", category: "Distributed Ledgers" },
    { name: "AI/ML", category: "Analytics & Models" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "digital-banking",
    number: "01",
    title: "Digital Banking Platform",
    category: "Banking · FinTech · Payments",
    filterCategory: "Banking",
    description:
      "End-to-end digital banking solution with KYC, wallets, transactions, payment integrations and administration systems.",
    image: "/images/project-banking.jpg",
    tags: ["Banking", "FinTech", "Payments"],
    role: "Lead Systems Architect & Consultant",
    businessProblem:
      "Legacy core applications faced difficulties coordinating real-time payment integrations, multi-currency account views, and customer onboarding requirements.",
    systemSolution:
      "Architected a unified digital banking platform with customer KYC verification, structured transaction recording, and integrated administrative control systems.",
    keyCapabilities: [
      "Customer onboarding and KYC verification workflows",
      "Multi-currency account management and balance tracking",
      "Transaction processing and payment gateway integrations",
      "Administrative back-office portal with operational controls",
    ],
    techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    architectureNotes:
      "Modular backend services built with Node.js and TypeScript, persistent storage in PostgreSQL, containerized with Docker and hosted on AWS.",
    impactOutcome:
      "Delivered a centralized digital banking platform that streamlined customer account operations and improved transaction reliability.",
  },
  {
    id: "crypto-trading",
    number: "02",
    title: "Crypto Trading Platform",
    category: "Crypto · Trading · Web Platform",
    filterCategory: "Crypto",
    description:
      "Real-time crypto trading platform with advanced charting, market data, portfolio management and risk controls.",
    image: "/images/project-crypto.jpg",
    tags: ["Crypto", "Trading", "Web Platform"],
    role: "Principal FinTech Engineer",
    businessProblem:
      "Trading interfaces required continuous live market data updates without lagging the browser interface during periods of heavy market activity.",
    systemSolution:
      "Built a high-performance web platform featuring live WebSocket market updates, interactive candlestick charting, and portfolio risk management views.",
    keyCapabilities: [
      "Real-time market data streaming and candlestick charting",
      "Order placement, tracking, and management workflows",
      "Portfolio views with asset distribution and transaction history",
      "Risk controls and position monitoring tools",
    ],
    techStack: ["React", "TypeScript", "Python", "JavaScript", "PostgreSQL", "Docker"],
    architectureNotes:
      "Reactive frontend built with React and TypeScript, supported by Python and Node.js backend services connecting to WebSocket data streams and PostgreSQL storage.",
    impactOutcome:
      "Provided traders with responsive real-time market data and an organized portfolio management interface.",
  },
  {
    id: "algo-trading",
    number: "03",
    title: "Algorithmic Trading System",
    category: "Trading · AI/ML · Analytics",
    filterCategory: "Trading",
    description:
      "Automated trading strategies with backtesting, real-time execution and performance analytics.",
    image: "/images/project-algo.jpg",
    tags: ["Trading", "AI/ML", "Analytics"],
    role: "Quantitative Systems Architect",
    businessProblem:
      "Strategy researchers required an automated system to test quantitative trading ideas against historical data and execute trades consistently.",
    systemSolution:
      "Developed an automated trading and analytics system supporting historical strategy backtesting, algorithmic execution, and real-time performance analytics.",
    keyCapabilities: [
      "Historical data backtesting for quantitative strategies",
      "Machine learning models for market trend and volatility analysis",
      "Automated trade execution workflows and order tracking",
      "Performance analytics dashboard with strategy evaluation metrics",
    ],
    techStack: ["Python", "AI/ML", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    architectureNotes:
      "Data processing and computational strategy engine in Python, structured database persistence in PostgreSQL, with containerized deployment on AWS.",
    impactOutcome:
      "Allowed systematic evaluation of trading strategies and automated execution with comprehensive performance oversight.",
  },
  {
    id: "betadrix-gaming",
    number: "04",
    title: "BETADRiX Gaming Platform",
    category: "Gaming · Casino · FinTech",
    filterCategory: "Gaming",
    description:
      "Gaming and casino technology platform with wallet systems, real-time games, risk management and administration.",
    image: "/images/project-gaming.jpg",
    tags: ["Gaming", "Casino", "FinTech"],
    role: "Head of Platform Architecture (BETADRiX)",
    businessProblem:
      "A growing online gaming platform required robust wallet infrastructure to handle player transactions and account updates safely.",
    systemSolution:
      "Engineered real-time gaming backend services featuring multi-currency player wallets, live session management, and administrative risk consoles.",
    keyCapabilities: [
      "Real-time multiplayer game session coordination",
      "Multi-currency player wallet systems for deposits and payouts",
      "Administrative risk management and operational monitoring",
      "Platform administration and reporting tools",
    ],
    techStack: ["Node.js", "TypeScript", "React", "MongoDB", "Blockchain", "AWS"],
    architectureNotes:
      "Scalable backend services in Node.js and TypeScript, document database persistence in MongoDB, cloud deployment on AWS.",
    impactOutcome:
      "Ensured stable gameplay coordination and reliable wallet operations across large player bases.",
  },
];
