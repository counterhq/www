# Counter website

Next.js App Router website deployed to Vercel, independently of the Counter platform repository. Marketing pages retain the original HTML design, SVG illustrations, fonts, and CSS. The same Google Fonts files are self-hosted with their OFL licenses and the primary subsets preloaded, avoiding third-party font requests. Blog and docs content is compiled from Markdown/MDX at build time.

## Local development

Use Node.js 24 and pnpm (the version is pinned in `package.json`).

```sh
pnpm install
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000. Credentials are only needed to submit the waitlist; content pages build without them.

```sh
pnpm build
pnpm start
pnpm typecheck
pnpm test
```

## Routes and content

- `app/(marketing)/page.tsx`: home and waitlist form.
- `app/(marketing)/platform/page.tsx`: platform page.
- `app/(marketing)/marketing.css`: preserved marketing styles.
- `content/blog/*.mdx`: blog articles. The index retains “Coming soon.” until a published post exists.
- `content/docs/*.mdx`: Fumadocs pages at `/docs`. The initial page is a placeholder, not platform API documentation.
- `public/`: original assets, favicons, and manifest at their existing URLs.
- `app/api/waitlist/route.ts`: server-only signup handler.
- `app/api/search/route.ts`: Fumadocs search.

Add a blog post with a filename such as `introducing-counter.mdx`:

```mdx
---
title: Introducing Counter
description: A short description for the listing and search engines.
date: '2026-10-19'
draft: true
---

Your article goes here. MDX supports importing React components.
```

Set `draft: false` to publish on the next deployment. Keep blog filenames flat; the filename is the URL slug. Drafts are excluded from routes, listings, and the sitemap. Fumadocs uses a separate root layout, CSS, and providers. Navigation between docs and marketing performs a full page load so documentation styles cannot leak into marketing pages. Add docs pages in `content/docs` with `title` and `description` frontmatter; add `meta.json` for sidebar ordering.

## Waitlist: Attio + Resend

The form validates input, rejects cross-origin browser submissions and honeypot spam, and bounds request sizes. A per-instance guard limits an IP to five submissions per minute; it is best effort, not a distributed rate limiter. For production-wide abuse limits, configure a Vercel WAF rate-limit rule on POST `/api/waitlist/` (for example five requests per IP per minute).

The handler finds an existing Attio Person by email without replacing their other addresses, or creates a new Person. It upserts a list entry and saves the submitted company and role as list-specific text fields. Retries do not create duplicate entries. Signup success is returned only after Attio confirms the entry. Provider failures return a retryable error without leaking upstream responses or personal data.

Resend sends a plain-text notification after the response using Next.js `after()`. Notification failure is logged as `waitlist_notification_failed` and does not undo the signup. The entry ID is the Resend idempotency key (deduplication is limited to Resend's retention window). There is no durable email retry queue; Attio is the record of every successful signup.

Set these **server-only** variables locally and in the Vercel project:

| Variable | Purpose |
| --- | --- |
| `ATTIO_API_KEY` | Workspace token with `record_permission:read-write`, `object_configuration:read`, `list_entry:read-write`, and `list_configuration:read` |
| `ATTIO_WAITLIST_LIST_ID` | The Counter waitlist People list UUID |
| `RESEND_API_KEY` | Resend sending token |
| `WAITLIST_EMAIL_FROM` | Currently `Counter <onboarding@resend.dev>`; Resend permits this test sender only to the account email (`dennis@viablesystems.ai`) |
| `WAITLIST_EMAIL_TO` | Notification recipient, currently `dennis@viablesystems.ai` |

To notify any other recipient, verify an owned sending domain in Resend and update `WAITLIST_EMAIL_FROM`.

The list needs non-required, single-value **text** attributes `signup_company` and `signup_role`. To create missing attributes idempotently:

```sh
pnpm setup:attio
```

The setup token additionally needs `list_configuration:read-write`. Runtime does not create or change the list schema. Do not commit `.env.local` or expose these variables with a `NEXT_PUBLIC_` prefix.

## Deployment

The existing Vercel project is `counter-www`, serving `counterhq.co`. `vercel.json` selects Next.js and its build command, replacing the previous static-site preset. Clear any old dashboard output-directory override; Next.js manages the output. Keep Node.js 24 and the project root `.`. Use a normal Next.js deployment, not `output: 'export'`, because API endpoints need functions.

Home, platform, blog, and docs pages are prerendered; only search and signup requests execute functions. Sitemap, canonical URLs, Open Graph metadata, favicons, and robots are included. Preview deployments should use test credentials/lists if public signup testing is enabled.

## Verification

`pnpm test` covers validation, Attio creation/reuse/concurrent-create recovery, list failures, notification payloads and idempotency, and rate limiting.

With a production server on port 3006:

```sh
pnpm start --port 3006
pnpm test:browser
```

Browser checks cover FAQ interaction, form success and failure (mocked responses), docs and search, mobile overflow, missing pages, and API rejection cases. `TEST_BASE_URL` can target another server.

For original-versus-migrated screenshot comparisons, serve the original Git revision on port 8086 and the production build on port 3006, then run `pnpm test:visual`. It checks `/`, `/platform/`, and `/blog/` at 1440px and 390px, waits for fonts, disables animation, and writes before/after/diff PNGs plus metrics under `/tmp/counter-www-visual` (override with `VISUAL_OUTPUT`). This does not assert parity at every possible viewport or browser.

No license has been selected.
