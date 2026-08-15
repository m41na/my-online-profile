// ---------------------------------------------------------------------------
// Identity and positioning for the practice. Edit this file to update the
// business name, tagline, contact links, or the condensed engagement history.
// Full case study write-ups live as Markdown files in src/content/casework/.
// ---------------------------------------------------------------------------

export const practice = {
  // TODO: swap in your final DBA name if Kerbdrop doesn't stick.
  name: 'Kerbdrop',
  principal: 'Stephen Maina',
  principalTitle: 'Principal Architect',
  tagline: 'Systems architecture for organizations mid-transition.',
  positioning:
    "Kerbdrop is an independent engineering practice. It exists for one job: walking into an organization that's finding its feet on a platform migration, a legacy rewrite, or an AI rollout that needs to hold up in production — and leaving it with working systems and a team that can run them. Engagements have a start and an end. No headcount, no ramp-up curve, no bench.",
  engagementModel: 'Available for C2C and 1099 engagements — short-term, scoped, and outcome-defined.',
  location: 'Madison, WI · Remote-first',
  email: 'mainacell@gmail.com',
  phone: '(920) 441-6874',
  links: [
    { label: 'Email', url: 'mailto:mainacell@gmail.com' },
    // TODO: replace with your actual LinkedIn URL.
    { label: 'LinkedIn', url: '#' },
    { label: 'GitHub', url: 'https://github.com/akilisha' },
  ],
};

// The cross-case-study thesis — stated once, directly, rather than left for
// a careful reader to notice across three separate write-ups.
export const thesis = {
  eyebrow: 'The pattern',
  heading: 'I keep solving this before it has a name.',
  body: "Three times now: COBOL claims logic decomposed into services years before \u201cAI-assisted modernization\u201d was a category. A CDC platform publishing domain-owned events before \u201cdata mesh\u201d had a name. A tiered deployment governance model before \u201cplatform engineering\u201d and \u201cgolden paths\u201d were part of the vocabulary. That's not a coincidence worth burying inside three separate case studies \u2014 it's the actual case for hiring me: I solve the production problem first, and the industry writes the playbook after.",
  aiNote: "The AI-integration work is a different kind of proof \u2014 not ahead of a trend, but doing the hardest, least-solved part of a problem everyone's racing toward right now.",
};

// Named explicitly because it's a sharper, higher-trust pitch to an
// insurance buyer than "generalist Java consultant."
export const verticalFocus = {
  title: 'Particular depth in insurance',
  body: "Two of the four engagements below \u2014 health insurance claims modernization and P&C/specialty insurance claims data \u2014 sit in the same vertical. Insurance carries one of the largest shares of current IT staffing demand of any industry. That's not incidental, and it's worth stating plainly rather than leaving it for a buyer to piece together.",
};

// The four (plus one optional) areas of specialization — each backed by a
// full case study in src/content/casework/. Order here drives the homepage.
export const specializations = [
  {
    title: 'Platform migration & governance',
    detail: 'Moving off VMware/Tanzu onto OpenShift or Kubernetes at enterprise scale, with the guardrails that keep 3,000+ services from becoming 3,000 snowflakes.',
  },
  {
    title: 'Legacy modernization',
    detail: 'Decomposing mainframe and monolith systems into services — safely, with the testing discipline that keeps the rewrite from becoming the outage.',
  },
  {
    title: 'Event-driven data platforms',
    detail: 'CDC pipelines and stream processing that give every downstream team its own live, domain-owned view of the data — not a shared lake.',
  },
  {
    title: 'AI integration for JVM systems',
    detail: "Wiring LLMs into production Java services in a way that's observable and reliable, not just a demo that calls an API.",
  },
];

// Condensed engagement history — names and one-liners only. This is
// credibility, not a job ledger: no monthly dates, no bullet-point duties.
export const engagements: { org: string; note: string; years: string }[] = [
  { org: 'Discover Financial Services', note: 'Platform migration & CI/CD governance', years: '2021–2023, 2025–' },
  { org: 'Oracle Corporation', note: 'AI integration, payments infrastructure', years: '2024–2025' },
  { org: 'Comerica Bank', note: 'Engineering quality systems', years: '2023–2024' },
  { org: 'Expedia Group', note: 'ML-driven listing quality scoring', years: '2019–2020' },
  { org: 'Bank of America', note: 'Platform & frontend modernization', years: '2017–2019' },
  { org: 'WPS Health Solutions', note: 'Mainframe-to-microservices migration', years: '2014–2017' },
  { org: 'Best Buy', note: 'High-throughput logistics platform', years: '2013–2014' },
];

export const credentials = {
  education: [
    'M.Sc. Computer Science, Maharishi International University',
    'B.Sc. Mechanical/Production Engineering, Moi University',
  ],
  certifications: [
    'AWS Certified Cloud Practitioner',
    'Microsoft Certified: Azure Fundamentals',
    'Oracle Cloud Infrastructure Associate',
  ],
  yearsExperience: '13+',
};
