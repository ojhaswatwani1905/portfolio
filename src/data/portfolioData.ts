export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategories: string[];
  brief: string;
  description: string;
  systemFocus: string[];
  image?: string;
  diagramType?: "wallet" | "payments" | "analytics" | "intelligence";
  tags: string[];
  role: string;
  businessProblem: string;
  systemSolution: string;
  keyCapabilities: string[];
  techStack: string[];
  architectureNotes: string;
  impactOutcome: string;
  isSecondary?: boolean;
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
    category: "FINTECH · BANKING · PLATFORM ARCHITECTURE",
    filterCategories: ["FinTech", "Banking"],
    brief:
      "A digital banking platform focused on customer account workflows, transaction processing, payment integrations, and operational financial services.",
    description:
      "A comprehensive digital banking platform engineered for customer account lifecycles, structured transaction processing, payment gateway integrations, and operational financial services.",
    systemFocus: [
      "Account Workflows",
      "Transaction Processing",
      "Payment Integrations",
      "Backend Services",
    ],
    tags: [
      "Account Workflows",
      "Transaction Processing",
      "Payment Integrations",
      "Backend Services",
    ],
    image: "/images/project-banking.jpg",
    role: "Lead Systems Architect & Consultant",
    businessProblem:
      "Financial service providers require coherent systems to coordinate customer onboarding, multi-currency account management, and payment integrations without operational bottlenecks.",
    systemSolution:
      "Architected a unified digital banking platform designed to manage customer account life cycles, record structured transactions, integrate payment gateways, and maintain operational back-office controls.",
    keyCapabilities: [
      "Customer onboarding and account lifecycle workflows",
      "Multi-currency account management and balance tracking",
      "Transaction processing and payment gateway integrations",
      "Administrative back-office portal with operational controls",
      "Role-based access control and system configuration",
    ],
    techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    architectureNotes:
      "Modular backend services built with Node.js and TypeScript, persistent relational storage in PostgreSQL, containerized with Docker, and hosted on AWS infrastructure.",
    impactOutcome:
      "Delivered a centralized digital banking platform that streamlined customer account operations and improved transaction reliability.",
  },
  {
    id: "crypto-trading",
    number: "02",
    title: "Crypto Trading Platform",
    category: "DIGITAL ASSETS · TRADING",
    filterCategories: ["Digital Assets", "Trading", "FinTech"],
    brief:
      "A crypto-focused trading platform covering digital asset workflows, trading operations, transaction processing, and portfolio-oriented views.",
    description:
      "A digital asset trading platform featuring real-time market data streaming, order placement workflows, transaction processing, and portfolio-oriented asset views.",
    systemFocus: [
      "Digital Asset Workflows",
      "Trading Operations",
      "Transaction Processing",
      "Portfolio Management",
    ],
    tags: [
      "Digital Asset Workflows",
      "Trading Operations",
      "Transaction Processing",
      "Portfolio Management",
    ],
    image: "/images/project-crypto.jpg",
    role: "Principal FinTech Engineer",
    businessProblem:
      "Digital asset trading interfaces must ingest continuous market data updates and execute order workflows reliably without causing interface latency or state inconsistencies.",
    systemSolution:
      "Constructed a responsive trading interface and backend service architecture supporting real-time market data feeds, order lifecycle management, and portfolio asset distribution views.",
    keyCapabilities: [
      "Real-time market data streaming and candlestick visualization",
      "Order submission, tracking, and execution status monitoring",
      "Digital asset portfolio views with balance and position tracking",
      "Transaction history recording and activity auditing",
      "Risk monitoring parameters and order validation checks",
    ],
    techStack: ["React", "TypeScript", "Python", "Node.js", "PostgreSQL", "Docker"],
    architectureNotes:
      "Event-driven architecture connecting React and TypeScript frontends with Node.js and Python backend services, utilizing PostgreSQL for transaction records and Docker on AWS.",
    impactOutcome:
      "Established a performant trading architecture providing low-friction market data visualization and consistent order management workflows.",
  },
  {
    id: "algo-trading",
    number: "03",
    title: "Algorithmic Trading System",
    category: "TRADING · FINANCIAL SYSTEMS",
    filterCategories: ["Trading", "FinTech", "AI/ML"],
    brief:
      "An algorithmic trading system focused on structured trading workflows, market-data processing, strategy execution concepts, and portfolio-oriented operations.",
    description:
      "An automated algorithmic trading framework built for structured strategy backtesting, market data ingestion, algorithmic execution workflows, and risk monitoring.",
    systemFocus: [
      "Market-Data Processing",
      "Trading Strategies",
      "Execution Workflows",
      "Portfolio & Risk Operations",
    ],
    tags: [
      "Market-Data Processing",
      "Trading Strategies",
      "Execution Workflows",
      "Portfolio & Risk Operations",
    ],
    image: "/images/project-algo.jpg",
    role: "Quantitative Systems Architect",
    businessProblem:
      "Quantitative trading strategies require systematic environments to test algorithmic rules against historical tick and bar data prior to running automated execution workflows.",
    systemSolution:
      "Designed an algorithmic trading framework supporting market data parsing, quantitative strategy formulation, historical backtesting evaluation, and automated order execution workflows.",
    keyCapabilities: [
      "Historical market-data ingestion and processing pipelines",
      "Algorithmic strategy formulation and backtesting engine",
      "Automated order execution workflows and lifecycle tracking",
      "Portfolio exposure and risk constraint monitoring",
      "Real-time strategy telemetry and performance evaluation reporting",
    ],
    techStack: ["Python", "AI/ML", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    architectureNotes:
      "Computational engine implemented in Python utilizing analytical libraries, integrated with TypeScript services, relational data persistence in PostgreSQL, deployed in containerized Docker environments.",
    impactOutcome:
      "Allowed systematic evaluation of trading strategies and automated execution with comprehensive performance oversight.",
  },
  {
    id: "multi-currency-wallet",
    number: "04",
    title: "Multi-Currency Wallet Platform",
    category: "PAYMENTS · FINTECH",
    filterCategories: ["Payments", "FinTech", "Banking"],
    brief:
      "A financial wallet platform designed around multi-currency balances, transaction workflows, wallet operations, and account management.",
    description:
      "A multi-currency financial wallet platform engineered for atomic balance management, segregated ledger accounting, deposit/withdrawal workflows, and administrative reconciliation.",
    systemFocus: [
      "Multi-Currency Wallets",
      "Balance Management",
      "Transaction Workflows",
      "Wallet Operations",
    ],
    tags: [
      "Multi-Currency Wallets",
      "Balance Management",
      "Transaction Workflows",
      "Wallet Operations",
    ],
    diagramType: "wallet",
    role: "Lead Financial Systems Architect",
    businessProblem:
      "Managing customer balances across multiple fiat and digital currencies requires precise ledger accounting to prevent double-spending, slippage inaccuracies, and synchronization mismatches.",
    systemSolution:
      "Architected a multi-currency wallet platform featuring segregated currency balances, double-entry bookkeeping principles, atomic transaction processing, and administrative settlement reconciliation.",
    keyCapabilities: [
      "Multi-currency balance partitioning and real-time ledger accounting",
      "Atomic deposit, transfer, and withdrawal transaction workflows",
      "Internal wallet transfers and currency conversion workflows",
      "Daily reconciliation routines and balance integrity audits",
      "Administrative console for account lifecycle management and dispute handling",
    ],
    techStack: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker", "AWS"],
    architectureNotes:
      "Service-oriented architecture built with TypeScript and Node.js, relational ledger schema with transactional consistency in PostgreSQL, automated deployment pipelines with Docker and AWS.",
    impactOutcome:
      "Established a dependable wallet management architecture that ensured balance integrity and provided structured workflows for multi-currency transactions.",
  },
  {
    id: "payment-processing",
    number: "05",
    title: "Payment Processing & Transaction Platform",
    category: "PAYMENTS · FINANCIAL SYSTEMS",
    filterCategories: ["Payments", "FinTech"],
    brief:
      "A transaction-processing platform focused on payment workflows, transaction states, account operations, and reliable backend financial services.",
    description:
      "A transaction orchestration platform designed for reliable payment lifecycle handling, deterministic state machine management, idempotent API processing, and ledger consistency.",
    systemFocus: [
      "Payment Workflows",
      "Transaction Processing",
      "Account Operations",
      "Backend Services",
    ],
    tags: [
      "Payment Workflows",
      "Transaction Processing",
      "Account Operations",
      "Backend Services",
    ],
    diagramType: "payments",
    role: "Payment Systems Architect",
    businessProblem:
      "Payment operations often suffer from network dropouts, duplicate request submissions, and uncoordinated state transitions, risking stranded funds or incorrect transaction status.",
    systemSolution:
      "Engineered a payment orchestration platform implementing strict transaction state machines, idempotent request handling, multi-channel payment routing, and automatic reconciliation.",
    keyCapabilities: [
      "Deterministic transaction state machine (Initiated, Pending, Authorized, Settled, Failed)",
      "Idempotency guarantees and deduplication for payment requests",
      "Payment gateway connector abstraction and routing logic",
      "Real-time webhook dispatch and transaction callback handling",
      "Audit logging for compliance, settlements, and dispute resolution",
    ],
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    architectureNotes:
      "Distributed service architecture using Node.js and TypeScript, relational transactional storage in PostgreSQL, containerized with Docker, hosted on AWS.",
    impactOutcome:
      "Delivered an orderly transaction orchestration architecture that eliminated ambiguous transaction states and improved payment processing reliability.",
  },
  {
    id: "financial-analytics",
    number: "06",
    title: "Financial Analytics & Reporting Platform",
    category: "FINTECH · ANALYTICS",
    filterCategories: ["FinTech"],
    brief:
      "A financial analytics and reporting platform focused on transaction insights, operational reporting, financial data analysis, and decision-support dashboards.",
    description:
      "A financial analytics and intelligence platform that processes transaction event streams into consolidated rollups, multi-dimensional ledger reports, and interactive operational dashboards.",
    systemFocus: [
      "Financial Analytics",
      "Transaction Reporting",
      "Operational Dashboards",
      "Data-Driven Insights",
    ],
    tags: [
      "Financial Analytics",
      "Transaction Reporting",
      "Operational Dashboards",
      "Data-Driven Insights",
    ],
    diagramType: "analytics",
    role: "Data & Analytics Architect",
    businessProblem:
      "Financial operators and finance teams struggle to obtain consolidated visibility across transaction volumes, fee distributions, and settlement variances scattered across disparate ledger tables.",
    systemSolution:
      "Built an analytical aggregation and reporting platform that collects transaction event records, produces consolidated financial rollups, and renders interactive operational dashboards.",
    keyCapabilities: [
      "Automated aggregation pipelines for high-volume financial transaction data",
      "Multi-dimensional reporting across volume, currency, payment method, and time",
      "Interactive executive dashboards with charting and trend analysis",
      "Reconciliation variance detection and operational anomaly flags",
      "Scheduled report generation and export capabilities",
    ],
    techStack: ["Python", "TypeScript", "Next.js", "React", "PostgreSQL", "AWS"],
    architectureNotes:
      "Data aggregation and transformation engine developed in Python, relational analytical queries in PostgreSQL, web visualization portal built with Next.js, React, and TypeScript on AWS.",
    impactOutcome:
      "Empowered operational and finance teams with clear transaction insights and standardized reporting dashboards.",
  },
  {
    id: "ai-financial-intelligence",
    number: "07",
    title: "AI-Powered Financial Intelligence",
    category: "AI/ML · FINTECH",
    filterCategories: ["AI/ML", "FinTech"],
    brief:
      "An AI/ML-oriented financial intelligence system for analyzing financial data, identifying patterns, and supporting data-driven financial decision making.",
    description:
      "An AI/ML financial intelligence architecture combining feature engineering pipelines, anomaly and pattern detection models, and decision-support tools for operational analysts.",
    systemFocus: [
      "Financial Data Analysis",
      "Pattern Detection",
      "AI/ML Workflows",
      "Decision-Support Systems",
    ],
    tags: [
      "Financial Data Analysis",
      "Pattern Detection",
      "AI/ML Workflows",
      "Decision-Support Systems",
    ],
    diagramType: "intelligence",
    role: "Lead AI/ML Systems Consultant",
    businessProblem:
      "Traditional rule-based systems often fail to catch subtle pattern irregularities in financial transaction streams and require manual review that slows operational velocity.",
    systemSolution:
      "Designed a machine learning workflow system that ingests historical and streaming transaction data, extracts statistical features, identifies behavioral patterns, and generates confidence scores for decision-support.",
    keyCapabilities: [
      "Feature engineering and data normalization pipelines for financial records",
      "Machine learning model pipelines for transaction pattern detection",
      "Confidence scoring and priority classification for flagged events",
      "Decision-support interface for operational analyst reviews",
      "Model evaluation and drift tracking mechanisms",
    ],
    techStack: ["Python", "AI/ML", "TypeScript", "PostgreSQL", "Docker"],
    architectureNotes:
      "Machine learning model pipelines and numerical computing in Python, API integration layer in TypeScript, persistent feature storage in PostgreSQL, containerized deployment using Docker.",
    impactOutcome:
      "Provided automated pattern recognition capabilities that assisted analysts in prioritizing reviews and understanding complex transaction patterns.",
  },
  {
    id: "betadrix-gaming",
    number: "08",
    title: "BETADRiX Gaming & Wallet Platform",
    category: "GAMING · REAL-TIME PLATFORMS · FINTECH",
    filterCategories: ["Gaming", "FinTech"],
    brief:
      "A real-time gaming platform combining gaming services with wallet infrastructure, multi-currency operations, administration, and analytics.",
    description:
      "A real-time gaming platform combining gaming services with wallet infrastructure, multi-currency operations, administration consoles, and player analytics.",
    systemFocus: [
      "Gaming Platform Services",
      "Real-Time Backend Systems",
      "Wallet Infrastructure",
      "Multi-Currency Operations",
      "Admin & Analytics Systems",
    ],
    tags: [
      "Gaming Platform Services",
      "Real-Time Backend Systems",
      "Wallet Infrastructure",
      "Multi-Currency Operations",
      "Admin & Analytics Systems",
    ],
    image: "/images/project-gaming.jpg",
    role: "Head of Platform Architecture (BETADRiX)",
    businessProblem:
      "A growing online gaming platform required robust wallet infrastructure to handle player transactions and account updates safely alongside real-time gameplay coordination.",
    systemSolution:
      "Engineered real-time gaming backend services featuring multi-currency player wallets, live session management, and administrative risk consoles.",
    keyCapabilities: [
      "Real-time multiplayer game session coordination",
      "Multi-currency player wallet systems for deposits and payouts",
      "Administrative risk management and operational monitoring",
      "Platform administration and reporting tools",
      "Blockchain distributed ledger integrations for verifiable records",
    ],
    techStack: ["Node.js", "TypeScript", "React", "MongoDB", "Blockchain", "AWS"],
    architectureNotes:
      "Scalable backend services in Node.js and TypeScript, document database persistence in MongoDB, cloud deployment on AWS.",
    impactOutcome:
      "Ensured stable gameplay coordination and reliable wallet operations across large player bases.",
    isSecondary: true,
  },
];

