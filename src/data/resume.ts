// ---------------------------------------------------------------------------
// This file is the ONLY place you should need to edit to update your resume
// content. Once you send over your real resume, this gets filled in for you.
// Everything below is placeholder content so the site is fully browsable now.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Jordan Avery',
  title: 'Senior Software Engineer',
  location: 'Madison, WI',
  email: 'hello@example.com',
  phone: '',
  summary:
    'I build reliable backend systems and the tools that keep teams shipping fast. Ten years across fintech and developer infrastructure, with a habit of leaving codebases better documented than I found them.',
  links: [
    { label: 'Email', url: 'mailto:hello@example.com' },
    { label: 'GitHub', url: 'https://github.com/yourhandle' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
  ],
};

export type Experience = {
  role: string;
  org: string;
  location: string;
  start: string; // e.g. '2022'
  end: string; // e.g. 'Present'
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: 'Senior Software Engineer',
    org: 'Acme Systems',
    location: 'Remote',
    start: '2022',
    end: 'Present',
    highlights: [
      'Led the migration of a monolithic billing service to an event-driven architecture, cutting p99 latency by 40%.',
      'Mentored four engineers through promotion to senior level.',
      'Introduced a design-review process now used by three other teams.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Northlight Data',
    location: 'Chicago, IL',
    start: '2018',
    end: '2022',
    highlights: [
      'Built the ingestion pipeline that became the company\u2019s primary revenue driver.',
      'Reduced CI build times from 22 minutes to 6 minutes.',
    ],
  },
  {
    role: 'Junior Developer',
    org: 'Riverstone Labs',
    location: 'Madison, WI',
    start: '2016',
    end: '2018',
    highlights: [
      'Shipped the first public API and its documentation site.',
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  year: string;
};

export const education: Education[] = [
  {
    degree: 'B.S. in Computer Science',
    school: 'University of Wisconsin\u2013Madison',
    location: 'Madison, WI',
    year: '2016',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'Go', 'SQL'] },
  { group: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform'] },
  { group: 'Practices', items: ['System design', 'Mentorship', 'Technical writing'] },
];
