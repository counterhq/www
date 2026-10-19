# Working on the Counter website

- This repository owns the Next.js marketing website, MDX blog at `/blog`, and Fumadocs at `/docs`.
- Preserve supplied copy unless the user requests editing it.
- Keep the site independently runnable with pnpm; it must not depend on the platform repository. Prerender content pages and keep browser JavaScript limited to interactive components.
- Preserve the marketing design and copy. Compare screenshots at desktop and mobile widths when changing its layout.
- Keep Fumadocs styles and providers confined to the docs route group.
- Signup success requires a confirmed Attio list entry. Resend notifications are best effort and must not fail a saved signup. Never log secrets or submitted personal data.
- Do not claim the waitlist collects signups until a backend is connected and verified.
- This site is a marketing test: the goal is waitlist sign-ups that show whether Counter is worth building out fully. Copy may describe planned capabilities as available now, in the present tense rather than "will" or "could".
- No license has been selected; do not invent a licensing decision.
- Use Conventional Commits without AI attribution or Co-authored-by trailers.
- Keep `CLAUDE.md` as a relative symlink to `AGENTS.md`.
