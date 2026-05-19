# nostr-uno-marketing

The public marketing site for **Nostr Uno** — multi-identity Nostr key manager and NIP-46 signer.

- **App**: served today at https://nostr.uno (will move to https://app.nostr.uno in Phase B)
- **SDK docs**: https://docs.nostr.uno (built by R-SDK Phase A)
- **This site**: Astro static, deployed to Cloudflare Pages

## Voice

Per `The Apollo Principle` — discovery, multiple selves, identity as protocol. Not enterprise-saas tone.

## Stack

- Astro 5 (static output)
- Tailwind v3 with Uno's OKLCH identity palette
- Cloudflare Pages

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy

CF Pages project: **`nostr-uno-marketing`**
Production URL: **https://nostr-uno-marketing.pages.dev**

Deploys are currently triggered via `wrangler pages deploy dist --project-name=nostr-uno-marketing`.
Hooking up GitHub auto-deploys is a follow-up (do via CF dashboard once stable).

**Phase A** (current): served at the auto-assigned `*.pages.dev` URL. No custom domain.
**Phase B** (deferred): DNS cutover — `nostr.uno` apex points here, PWA moves to `app.nostr.uno`. Requires real-device screenshots first.

### Lighthouse gate (run before deploy)

```bash
npm run build
# deploy preview, then for each page:
./node_modules/.bin/lighthouse https://nostr-uno-marketing.pages.dev/ \
  --quiet --chrome-flags="--headless=new" \
  --only-categories=performance,accessibility,best-practices,seo
```

Latest scores (2026-05-12): Perf 98-100 / A11y 100 / BP 100 / SEO 100 on all 6 pages.

## Project links

- Runbook: `Uno/Runbook/R-MARKETING - Marketing Site Split.md`
- Design system: `nostr-uno/src/app.css`
- Apollo Principle: `Uno/The Apollo Principle.md`
- Roadmap: `Uno/Roadmap.md`

## License

MIT
