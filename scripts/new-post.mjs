#!/usr/bin/env node
// Usage: npm run new-post "My Post Title"
// Creates src/content/blog/my-post-title.md pre-filled with frontmatter,
// dated today, ready to write in.

import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const title = process.argv.slice(2).join(' ').trim();

if (!title) {
  console.error('Usage: npm run new-post "My Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const dir = join(process.cwd(), 'src', 'content', 'blog');
mkdirSync(dir, { recursive: true });

const filePath = join(dir, `${slug}.md`);

if (existsSync(filePath)) {
  console.error(`A post already exists at ${filePath}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const template = `---
title: "${title}"
description: ""
date: ${today}
tags: []
draft: true
---

Write here. Flip \`draft\` to \`false\` when you're ready to publish, then
\`git add -A && git commit -m "post: ${title}" && git push\`.
`;

writeFileSync(filePath, template);
console.log(`Created ${filePath}`);
