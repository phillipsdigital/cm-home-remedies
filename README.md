# CM Home Remedies — Website

Astro static site for CM Home Remedies (masonry, hardscapes, retaining walls, chimney & foundation repair — Joplin, MO / Four State Area).

## Run it

Requires **Node 22.23.4+** (Astro 7). The repo includes `.node-version` / `.nvmrc` (Node 24) so Cloudflare Pages picks the right version automatically.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview
```

Deploys as plain static files to Cloudflare Pages, Netlify, Vercel, etc. (build command `npm run build`, output `dist`).

## Pages

| URL | Purpose / target keyword |
|---|---|
| `/` | Masonry, hardscapes & foundation repair in Joplin, MO |
| `/services/` | Services hub |
| `/services/hardscapes-patios/` | Hardscaping & patios Joplin |
| `/services/retaining-walls/` | Retaining wall contractor Joplin |
| `/services/brick-stone-masonry/` | Brick & stone masonry Joplin |
| `/services/landscaping/` | Landscaping Joplin |
| `/services/foundation-repair/` | Foundation repair Joplin |
| `/services/chimney-repair/` | Chimney repair Joplin |
| `/services/concrete-steps/` | Concrete walkways & steps Joplin |
| `/our-work/` | Filterable project gallery with lightbox |
| `/service-areas/` | Towns served in MO, KS, OK, AR |
| `/about/` | Owner / company story |
| `/contact/` | Estimate request form |
| `/thank-you/` | Form confirmation (noindex, excluded from sitemap) |
| `/404` | Not found |

## Where to edit things

- **Business info, phone, email, hours, service towns, form endpoint:** `src/data/site.ts`
- **Service page copy, FAQs, which photos appear:** `src/data/services.ts`
- **Gallery photos, titles, alt text, categories:** `src/data/projects.ts` (images live in `src/assets/projects/`)
- **Colors / fonts:** `src/styles/global.css`

Adding a project photo: drop the file into `src/assets/projects/`, import it at the top of `projects.ts`, and add an entry. Astro generates responsive WebP sizes automatically.

## SEO built in

- Unique title + meta description per page, canonical URLs, Open Graph / Twitter cards
- JSON-LD: `HomeAndConstructionBusiness` (site-wide, with areaServed for every town), `WebSite`, `BreadcrumbList`, `Service` + `FAQPage` on each service page, `ItemList` on services hub, `ContactPage`
- `sitemap-index.xml` via `@astrojs/sitemap`, `robots.txt`
- Descriptive, keyword-aware alt text and file names on every photo
- Responsive images (WebP, srcset), self-hosted fonts, near-zero JavaScript
- Click-to-call in the header, top bar and a sticky mobile call bar

## Before launch — TODO

1. **Domain:** set to `https://cmhomeremedies.com` (no www). In your host, add `www.cmhomeremedies.com` as a redirect to the bare domain so Google sees one version.
2. **Contact form (FormSubmit — same setup as the J&B Electric site):** already pointed at `mccservices00@yahoo.com`. After the site is live, submit one test request: FormSubmit emails Chris a one-time **Activate Form** link. Once he clicks it, every request arrives in his inbox as a table (budget, timeline, owner status, description). Optional: swap the email in the form URL for the random alias FormSubmit gives you, to keep the address out of the page source.
3. **Fill in:** Facebook URL (optional), business hours (optional — hidden while empty).
4. **Confirm with client:** "Free on-site estimates" claim, service towns list, and whether he wants an indoor fireplace mention.
5. **Google Business Profile:** make sure name, phone and service area match the site exactly (NAP consistency), and link the site from the profile.
6. Submit `sitemap-index.xml` in Google Search Console after launch.

House numbers visible in project photos have been blurred for homeowner privacy.
