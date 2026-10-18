# Choice Tours & Travels website

Marketing site for Choice Tours & Travels, Thiruvananthapuram: car hire with experienced drivers, tours and temple trips across South India since 2005. It generates leads only: every path ends in a phone call or a WhatsApp message, with a Google map to the office. There are no bookings, payments or accounts.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion (scroll reveals only).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build; also checks every photo (see below)
npm run start    # serve the production build
npm run lint
npm run images   # optimise photos from /image-sources into /public/images
```

## Changing the words

All copy lives in `/content` as plain TypeScript objects. You never need to touch a component to change text.

| File | What it holds |
| --- | --- |
| `content/site.ts` | Phone, WhatsApp, email, address, office hours, domain, trust claims |
| `content/home.ts` | Every homepage section, in order |
| `content/pages.ts` | Devotional, tours, about and contact page copy |
| `content/seo.ts` | Page titles and descriptions for Google, search keywords, and the FAQ |
| `content/trivandrum.ts` | The `/tours-and-travels-trivandrum` page for local searches |
| `content/destinations.ts` | The 10 destinations (rail cards and `/tours/[slug]` pages) |
| `content/temples.ts` | Temples on the devotional page |
| `content/fleet.ts` | The vehicles shown (name, seats, photo) and the fleet page |
| `content/experiences.ts` | Special experiences on the tours page |
| `content/gallery.ts` | The 12 homepage gallery photos and their tile sizes |
| `content/images.ts` | Every photo: file, size, alt text and licence credit |
| `content/credits.md` | Human-readable photo credit list |

Search the project for `TODO` to find what is still needed from the client.

## Photos

1. Put the full-size original in `/image-sources/<folder>/<name>.jpg` (this folder is not committed).
2. Run `npm run images`. It resizes and compresses into `/public/images/`, keeping every file under 200 KB (300 KB for the hero), and prints each file's final pixel size.
3. Add or update the entry in `content/images.ts` with that width and height, alt text naming the place, and the licence credit. The `/credits` page updates itself.

Every `npm run dev` and `npm run build` regenerates the blur placeholders (`content/blur-data.json`, via plaiceholder). The build **fails** if a photo is missing, over its size limit, or its size does not match `images.ts`.

Only use photos licensed for commercial use (Wikimedia Commons, Unsplash, Pexels, Pixabay, Kerala Tourism), never Google Images, and record the credit.

## Logo

The logo files live in `public/logo/`:

| File | Use |
| --- | --- |
| `choice-tours-travels-logo.svg` / `.png` | Full logo on ivory: print, social media, letterheads |
| `choice-tours-travels-logo-transparent.svg` | Full logo without a background |
| `choice-tours-travels-emblem.svg` | The round emblem on its own |

On the site, `components/LogoEmblem.tsx` draws the same emblem, `app/icon.svg` is the browser-tab icon and `app/apple-icon.png` is the phone home-screen icon. Brand colours: gold `#C9A227`, forest green `#0B3B2E`, ivory `#F7F3EA`. Flat colour only, no gradients.

## The two modes

`/devotional` sets `data-mode="devotional"` and `/tours` sets `data-mode="leisure"` (in each folder's `layout.tsx`). That one attribute switches, via `app/globals.css`:

- **Devotional:** gold accent, 18px base text (every type size scales up 12.5%), 48px tap targets, reveals that fade without moving, and a call button pinned to the bottom of the screen on phones.
- **Leisure:** terracotta accent, 16px base text.

The homepage, fleet, about and contact pages are neutral and use gold.

## Design rules

- **Colours:** never write a hex value in a component. Use the token classes `bg-ink`, `bg-sand`, `text-text-muted`, `border-accent`. The class name matches the CSS variable name in `globals.css`.
- **Accent:** use `accent` for rules, borders and icons, and `accent-fill` with `on-accent` for buttons. Never use `gold` or `terracotta` directly; the mode decides which you get.
- **Spacing is 8px-based:** `p-1` = 8px, `p-2` = 16px, `p-3` = 24px. Tailwind's default is 4px, so halve the numbers in snippets copied from the Tailwind docs.
- **Type sizes:** only `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl` and `text-hero` exist.
- **Corners:** `rounded-control` (4px) for buttons and inputs, `rounded-card` (8px) for cards, none on full-bleed photos.
- **Shared helpers:** `content-width` (max 1440px column with gutters), `section-pad` (section padding), `surface-dark` (ink section with sand text), `tap-target` (minimum tap size).
- **Photos:** always use `<Photo>` (`components/Photo.tsx`). It adds the shared colour grade, the blur placeholder and lazy loading.
- **Prices:** never show a price, rate, fare or per-km figure anywhere. Rates move with the season; every price question goes to a call.

## Performance rules (the client asked that the page never hangs)

- Animate only `transform` and `opacity`. The single exception is the homepage Two Doors hover (`flex-basis`), which is desktop-only and documented in `globals.css`.
- No scroll event listeners. Use IntersectionObserver or `position: sticky`. All scroll reveals share one observer (`lib/revealObserver.ts`).
- No smooth-scroll, GSAP or 3D libraries.
- `background-attachment: fixed` is desktop-only (Kathakali band).
- Everything respects "reduce motion": no Ken Burns, no reveals, no fixed background.

## Search engines (SEO)

The client's goal is to show up for searches like "best tours and travels in TVM". What the code does:

- Every page has its own title, description and canonical address on `https://www.choicetoursandtravels.com` (`content/seo.ts`). The homepage's main heading starts with "Tours and travels in Trivandrum".
- `/tours-and-travels-trivandrum` is a page written for local searches. The footer links to it, and to every destination, from every page.
- Structured data tells Google the business details (`components/TravelAgencyJsonLd.tsx`: travel agency, address, map pin, phones, 24 hours), the FAQ, breadcrumbs and destinations.
- `/sitemap.xml` and `/robots.txt` are generated automatically (`app/sitemap.ts`, `app/robots.ts`).

To change the domain, set `NEXT_PUBLIC_SITE_URL`. For Google Search Console, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel to the code Google gives you (the HTML tag method), redeploy, then submit `sitemap.xml`.

The name, address and phone must read exactly the same here, on the Google Business Profile and in any directory listing.

## Still to do (needs the client)

- Confirm that airport and railway station pickups are offered (FAQ in `content/seo.ts` and services in `content/trivandrum.ts`).
- Claim and complete the Google Business Profile, and ask happy customers for Google reviews. For "best tours and travels in TVM", the map results depend mostly on the profile and reviews, not the website.
- Photo permission for the client-supplied hero and Urbania photos.
- The founding story for the About page, and typical trip lengths for the destination pages, if wanted.
- Plain-English check on copy: the site deliberately avoids words like "chauffeur". Keep new copy just as simple.
