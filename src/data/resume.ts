// ---------------------------------------------------------------------------
// Single source of truth for all résumé content. Edit this file to update
// your résumé — the homepage reads directly from these exports.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Stephen Maina',
  title: 'Principal Architect / Senior Engineering Manager',
  location: 'Madison, WI',
  email: 'mainacell@gmail.com',
  phone: '(920) 441-6874',
  summary:
    'Accomplished Principal Architect and Senior Engineering Manager specializing in the design, reengineering, and delivery of complex, high-throughput software platforms — from mainframe modernization to AI-native development workflows.',
  links: [
    { label: 'Email', url: 'mailto:mainacell@gmail.com' },
    // TODO: replace with your actual LinkedIn URL — the resume only listed "LinkedIn Profile" as text.
    { label: 'LinkedIn', url: '#' },
    { label: 'GitHub', url: 'https://github.com/akilisha' },
  ],
};

// The five pillars from the executive summary — used as a scannable strip
// under the hero, since the full summary paragraph is dense with them.
export const coreFocus: { title: string; detail: string }[] = [
  {
    title: 'AI-centric development',
    detail: 'Integrating AI into engineering workflows for faster POCs, efficient development, exhaustive testing, and shorter delivery cycles.',
  },
  {
    title: 'Platform modernization',
    detail: 'Migrating legacy platforms — mainframes, Struts — to modern microservices and distributed, high-throughput architectures.',
  },
  {
    title: 'Developer experience',
    detail: 'Reinventing and reengineering software delivery platforms, including CI/CD, to transform how teams ship.',
  },
  {
    title: 'Integration & APIs',
    detail: 'Integrating software systems through REST, gRPC, and GraphQL across the Java and JavaScript ecosystems.',
  },
  {
    title: 'Leadership',
    detail: 'Leading development teams through the value-addition process of software products and managing complex engineering roadmaps.',
  },
];

export type Experience = {
  role: string;
  org: string;
  client?: string;
  start: string;
  end: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: 'API Architect',
    org: 'The Judge Group',
    client: 'Discover Financial Services, Deerfield IL',
    start: 'Dec 2025',
    end: 'Present',
    highlights: [
      'Leading democratization of API onboarding through automation of the backend, building self-service registration workflows that integrate with systems such as ServiceNow.',
      'Designing and standardizing integration points with backend systems, including GitHub, Postgres, and OpenShift cloud.',
      'Designing and setting up infrastructure and policies around API security — SSH certs, JWT tokens, API gateways, OAuth providers.',
      'Demonstrating AI workflow integration opportunities.',
    ],
  },
  {
    role: 'Principal Software Engineer',
    org: 'Oracle Corporation (F&B Division)',
    start: 'Sept 2024',
    end: 'Sept 2025',
    highlights: [
      'Worked on a payments processing API for web and mobile apps in the food and beverage division.',
      'Led implementation of backend logging infrastructure and metrics visualization through OCI dashboards and Logstash.',
      'Led the team on build and deployment implementation, coordinating with DevOps and SRE on infrastructure and pipelines.',
      'Piloted AI integration into the development workflow: Helidon backbone, LLM integration, vector databases (RAG), Redis and FFM memory API for context propagation, MCP tooling, and LangChain4j for prompt orchestration.',
    ],
  },
  {
    role: 'Senior Engineering Manager',
    org: 'Cognizant Technology Solutions',
    client: 'Comerica Bank, Auburn Hills, MI',
    start: 'Feb 2023',
    end: 'May 2024',
    highlights: [
      'Designed and implemented a quality control system for extraction, measurement, visualization, and tracking of quality metrics, generating quality score summaries and recommendations.',
      'Derived the quality score from targeted metrics spanning the full software development lifecycle, giving a holistic quality health indicator for teams and their products.',
    ],
  },
  {
    role: 'Principal Architect',
    org: 'Cognizant Technology Solutions',
    client: 'Discover Financial Services, Deerfield IL',
    start: 'Apr 2021',
    end: 'Feb 2023',
    highlights: [
      'Designed, architected, and implemented an organization-wide, tech-agnostic CI/CD platform for unified governance, reducing the existing pipeline count from over 600 down to one.',
      'Designed and implemented a React-based dashboard for status reports on CI/CD pipeline activity.',
      'Created a project migration framework from on-prem data center to AWS, targeting over 3,000 projects, fully configured for smoke and integration testing.',
      'Built supporting infrastructure for collection, analysis, and dissemination of CI/CD metrics, including audit artifacts and DORA metrics.',
    ],
  },
  {
    role: 'Senior Architect / Technical Lead',
    org: 'DAIS Technology Inc',
    client: 'Chicago, IL',
    start: 'Mar 2020',
    end: 'Apr 2021',
    highlights: [
      'Designed, architected, and implemented a data lake solution linking over 100 businesses in jewelry insurance claims processing.',
      'Implemented federated login and custom logout to allow access to shared resources with the right level and duration of access.',
    ],
  },
  {
    role: 'Senior Technical Architect',
    org: 'BayOne',
    client: 'Expedia Group, Chicago IL',
    start: 'Sept 2019',
    end: 'Mar 2020',
    highlights: [
      'Leveraged Spark, Scala, AWS infrastructure, and ML libraries to calculate a quality score for client listings on Expedia websites.',
      'The quality score had direct revenue implications, affecting search ranking, visibility, and visit probability.',
    ],
  },
  {
    role: 'Senior Applications Architect',
    org: 'Apex Systems',
    client: 'Bank of America, Chicago IL',
    start: 'Sept 2017',
    end: 'Sept 2019',
    highlights: [
      'Led platform migration from an older JDK version to a modern one, and from a legacy build system to a modern platform.',
      'Built a new React-based frontend unifying existing servlet-based UIs into one experience across the FX org.',
    ],
  },
  {
    role: 'Senior Internet Developer',
    org: 'WPS Health Solutions',
    client: 'Madison, WI',
    start: 'Mar 2014',
    end: 'Jul 2017',
    highlights: [
      'Migrated platform from an IBM mainframe with COBOL backend and Struts framework to Java-based microservices with a distributed architecture.',
      'Modernized the Struts-based UI to a JavaScript frontend backed by REST APIs.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'Latitude 36',
    client: 'Best Buy, Richfield MN',
    start: 'Jul 2013',
    end: 'Feb 2014',
    highlights: [
      "Designed and architected the shipping and delivery platform using REST APIs and Java's concurrency framework to maximize throughput.",
      'Introduced the Spock testing framework, well suited to a highly collaborative, pair-programming environment.',
    ],
  },
];

export const technicalExpertise: { category: string; items: string[] }[] = [
  {
    category: 'AI',
    items: ['GenAI', 'Agentic Development', 'LangChain4j', 'Google ADK', 'Vector Databases', 'RAG', 'Memory API', 'N8N Workflows', 'AI Infrastructure'],
  },
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'Python', 'Groovy', 'Kotlin', 'GoLang', 'Scala', 'Rust', 'V-lang', 'Dart', 'Solidity', 'Bash'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Vert.x', 'Flask', 'Node.js', 'Hibernate/JPA', 'React', 'Redux', 'Vue', 'SolidJS', 'Backbone.js', 'jQuery'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'Harness', 'GitHub Actions', 'Azure DevOps', 'CI/CD pipelines', 'Unified governance'],
  },
  {
    category: 'High-Scale Systems',
    items: ['Highly concurrent systems', 'Distributed systems', 'Data lakes', 'GraphQL', 'REST', 'gRPC', 'Kafka', 'NATS', 'RabbitMQ', 'ZeroMQ'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'Oracle', 'Postgres', 'SQLite', 'MongoDB', 'ArangoDB', 'OrientDB'],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
};

export const education: Education[] = [
  {
    degree: 'M.Sc. Computer Science',
    school: 'Maharishi International University',
    location: 'Fairfield, IA',
  },
  {
    degree: 'B.Sc. Mechanical / Production Engineering',
    school: 'Moi University',
    location: 'Eldoret, Kenya',
  },
];

export const certifications: string[] = [
  'Oracle Cloud Infrastructure Associate',
  'Microsoft Certified: Azure Fundamentals',
  'AWS Certified Cloud Practitioner',
  'Certified Agile Master Training — Valtech',
  'Design Patterns and TDD — Cobalt Group',
];

export type Publication = {
  title: string;
  description: string;
  url: string;
};

export const publications: Publication[] = [
  {
    title: 'cafeai',
    description: 'Turnkey toolkit for AI development in Java with a familiar Express.js-style API.',
    url: 'https://github.com/akilisha/cafeai',
  },
  {
    title: 'cafeai-capstone',
    description: 'Capstone real-life use cases solved using Java AI development.',
    url: 'https://github.com/akilisha/cafeai-capstone',
  },
  {
    title: 'eztags',
    description: 'Templating using HTML tags and custom attributes.',
    url: 'https://destapi.github.io/eztags/#/',
  },
  {
    title: 'riot-blog',
    description: 'A walk down memory lane with RiotJS.',
    url: 'https://destapi.github.io/riot-blog/#/',
  },
  {
    title: 'espresso',
    description: 'An Express-lookalike web framework in Java.',
    url: 'https://jipress.github.io/espresso/#/',
  },
];
