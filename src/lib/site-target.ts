// Which of the two sites this build is for. Set via the SITE_TARGET env
// var, which the build:personal / build:business npm scripts set
// differently — see package.json and README.md for the two Cloudflare
// Worker projects this maps to (kerbdrop.com vs smaina.kerbdrop.com).
export const SITE_TARGET: 'personal' | 'business' = process.env.SITE_TARGET === 'business' ? 'business' : 'personal';
export const isBusiness = SITE_TARGET === 'business';
