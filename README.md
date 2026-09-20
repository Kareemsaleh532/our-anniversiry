# Our Little Universe

A frontend-only romantic birthday experience built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

Use Node.js 20.9+ (Node 22 or 24 LTS recommended).

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

No API keys, environment variables, accounts, database, or backend application are needed. Google Fonts are fetched by next/font during the initial build and self-hosted afterward, so the first build requires internet access. The default Next.js server supplies image optimization; there are no custom server endpoints.

## Make it yours

Edit **data/birthdayData.ts**. The sample name Amelia and sample memories are fictional; replace them before gifting the site.

| Field           | What to change                                                                     |
| --------------- | ---------------------------------------------------------------------------------- |
| girlfriendName  | Her name, displayed in the reveal and letter                                       |
| senderName      | Your name or your personal sign-off                                                |
| birthdayDate    | Birthday in YYYY-MM-DD format; displayed in the intro and letter                   |
| title           | Browser title and experience branding                                              |
| openingMessage  | The opening invitation                                                             |
| introMessage    | The message after entering                                                         |
| reasonsILoveYou | Add, remove, or rewrite reason strings                                             |
| memories        | Photo paths, titles, descriptions, alt text, and date captions                     |
| letter          | Your letter as a string; separate paragraphs with a blank line (\\n\\n)            |
| finalMessage    | The last birthday reveal                                                           |
| copy            | All chapter headings, supporting messages, gift message, buttons, and closing wish |

The birthday is a display date, not an automatic lock or countdown. You can preview the complete experience any time. The intro caption uses {name} as a placeholder for her name.

### Photos

1. Put your photos in **public/memories/**.
2. Update the corresponding entry, for example:

```ts
{
  image: "/memories/our-first-date.jpg",
  title: "Our first date",
  date: "14 February 2025",
  alt: "The two of us outside our favorite cafe",
  description: "The evening I wished would never end."
}
```

Use local /memories/ paths. Prefer landscape or square photos at 1200–1800px wide. Cards crop their images, while the fullscreen viewer shows the complete photo. JPEG, PNG, WebP, and AVIF are optimized by next/image and loaded lazily. Missing images receive a styled fallback. Three original SVG illustrations are included so the gallery looks intentional before your photos are added.

## Experience and accessibility

- Enter reveals her name and opens the six following chapters.
- Native scrolling and anchors; no scroll interception.
- Desktop chapter navigation updates as you scroll.
- Photos open a native modal dialog. Escape closes it; left/right arrows change photos; Tab remains in the dialog; closing returns focus to the triggering photograph.
- Gift opens once; the final surprise runs one short confetti burst per page visit.
- Reloading starts the experience again. No cookies, tracking, storage, or external media requests.
- Reduced-motion preferences disable decorative movement, confetti, blur reveals, and smooth scrolling.
- Responsive single-column layouts at phone sizes; all controls have visible keyboard focus.
- Search indexing is disabled in metadata. This is not access control: anything deployed to a public URL can be viewed and downloaded by visitors.

## Structure

```
app/                 App Router entry, metadata, fonts, favicon
components/          Independent chapters, interactions, shared animation components
data/birthdayData.ts  All editable personal content
public/memories/      Personal photos and illustrated demo images
styles/globals.css   Responsive visual design, CSS stars, gift and confetti
```

The included animations use deterministic values and transform/opacity wherever possible. Decorative stars use CSS with 48 lightweight elements. No particle engine, audio autoplay, or 3D library is used.

## Deployment

Run the production build on a Node-compatible Next.js host, or import this folder into Vercel. No environment variables are required. This project is not configured for static export because default next/image optimization uses the Next.js runtime. Do not upload node_modules or .next when sharing source; the lockfile preserves tested dependency versions.

## Verification

Validated in headless Microsoft Edge at 375, 390, 430, 768, 1280, and 1536px. Checks cover entering the experience, all seven chapters, scrolling, modal controls and arrow keys, Tab wrapping, Escape and focus restoration, gift opening, the single confetti burst, missing-image fallback, and reduced motion. Automated axe WCAG A/AA scans at 390 and 1536px reported no violations. Automated scans supplement keyboard and visual checks; they are not a guarantee of complete accessibility conformance.

Production build, TypeScript, and ESLint checks pass. npm audit reports no vulnerabilities in the locked dependency tree. The PostCSS override selects a patched compatible 8.x release instead of the older copy pinned by Next.js 15. Browser test scripts, screenshots, and reports are retained in the local ignored qa/ folder and are not production dependencies. No Lighthouse score is claimed.