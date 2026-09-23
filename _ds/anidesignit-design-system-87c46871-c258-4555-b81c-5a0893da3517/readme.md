# AniDesignIt Design System

The design system for **AniDesignIt** — the portfolio practice of **Ana Maria Posada**, a multidisciplinary designer in Vancouver, BC working across product UI/UX, visual design, branding, Lottie/motion animation, and front-end development.

Live site: `https://anidesingit-portfolio.web.app` (also referred to as anidesignt.com)

## Sources this system was derived from

| Source | What was taken from it |
| --- | --- |
| GitHub `AniTools/Portfolio-Website` @ `main` | The authoritative `:root` colour and font declarations (in `claude.md`), the animation keyframes (`tailwind.config.js`), the site's section architecture, the real project/case-study copy (`case_studies.json`), and the app icon set (`public/icons/`, `public/favicon.svg`) |
| Brand sheet supplied by Ana (`assets/brand-sheet.png`) | The wordmark lockups, the three-colour palette with hex values, and the Literata / Open Sans type hierarchy |
| Logo files supplied by Ana | `assets/logo-wordmark.svg`, `assets/logo-mark.svg`, `assets/logo-32x32.png` |
| The live site, `anidesignit.com` | The real service names and descriptions, hero and About copy, the project list with its Firebase-hosted thumbnails, the booking-calendar link, and the correct contact email |
| Figma: `figma.com/design/yI6NSJQTZwVZXhgpllXTRL/Website--AniDesignIt?node-id=430-81` | **Not accessible from this environment.** Recorded here in case a future reader has access. Nothing in this system was derived from it. |

### What was NOT available

The repository contains the project's configuration, documentation, and data, but **not** the `src/components/*.astro`, `src/layouts/*.astro`, or `src/pages/*.astro` files — those directories are absent from `main`. The component-level layout and spacing in the UI kit is therefore reconstructed from `claude.md`'s detailed section-by-section description plus the brand sheet, not from the real markup. Values marked *derived* below are honest inferences; the three brand colours, the two typefaces, and the three animation keyframes are exact.

## Products

There is one product surface: **the portfolio website**. It has two view types.

1. **Home** — a single page of five sections: Hero, My Work, Services, About Me, Contact. On desktop these scroll **horizontally** (`translateX(-N00vw)`, driven by wheel, arrow keys, or nav clicks); on mobile the same sections stack and scroll vertically.
2. **Case study** — `/work/[slug]`, generated from a Firestore `case_studies` collection. Hero image, a details sidebar (client, year, role, tools), rich HTML body, an image gallery with lightbox, and prev/next project navigation.

Six real case studies exist: AniDesignIt Portfolio, Zolu – AI Assistant for ADHD, Louise Lee Website, GHG Accounting Website, Marquess Coffee, Daniel Pinto Portfolio.

---

## CONTENT FUNDAMENTALS

**Voice: first person, and unmistakably hers.** Ana narrates her own work — "I wanted a portfolio that reflected both my technical and artistic side," "I built it from scratch using Astro + Firebase," "I redesigned the site using calm colors and elegant layouts." Never "we," never a studio plural, never the passive corporate register. When addressing the visitor it switches to a direct, warm second person for calls to action ("Explore My Work").

**Case studies follow a fixed four-beat structure.** Every one of the six uses the same H1 sequence, verbatim:

1. `The Challenge` — the client's problem, one or two sentences, stated plainly and often emotionally. *"Louise's old website lacked visual clarity and didn't convey her warmth."*
2. `The Solution` — what she did, naming the tools. *"I built it in Webflow using green tones, structured layouts, and interactive animations."*
3. `Results & Impact` — an outcome, framed qualitatively rather than as a metric. *"Bookings increased and her clients reported a stronger sense of connection with her brand."*
4. `Testimonial` — a curly-quoted client line, em-dash attributed. *"Ana turned my vision into a brand I'm proud of — everything feels authentic." – Gabby Oliveira*

Keep this structure. It is the single strongest content convention in the brand.

**Sentence length is short and declarative.** One idea per sentence, rarely a subordinate clause. Summaries are noun-phrase fragments rather than full sentences: *"12-page website redesign with soft typography and earthy tones."* *"Complete branding and Webflow e-commerce setup with Ecwid integration."*

**Emotion is named directly.** The copy talks about warmth, calm, trust, empathy, connection, pride — *"designed with empathy,"* *"a calm, conversational assistant,"* *"my new site finally feels like me."* Outcomes are described in terms of how people felt, not just what shipped. This is the brand's real differentiator: a technical designer who writes about feelings.

**Casing.** Title Case for section headings and nav ("My Work", "About Me", "The Challenge", "Explore My Work"). Sentence case for body copy and form labels. The wordmark is always **AniDesignIt** — one word, three capitals, no space, no hyphen. Tool names keep their own casing: Figma, Astro, Tailwind, Webflow, Lottie, Ecwid, Illustrator, ElevenLabs, Runway, Bolt.

**Tools are always listed as bare tags**, comma-free, three to five per project — never as prose sentences.

**Em dashes are used freely** and are part of the voice, especially for a closing reframe: *"where code meets creativity,"* *"clean, impactful, and modern."* Curly quotes (`"` `"`) for testimonials, curly apostrophes throughout.

**Emoji: not in user-facing copy.** They appear heavily in the repo's internal developer docs (✅ 🔥 🚀 in `CHANGES_SUMMARY.md`, "Built with ❤️" in `claude.md`) but never in a case study, a heading, a nav item, or a service description. Keep them out of anything a visitor reads.

**Contact details, verbatim:** hello@anidesignit.com · +1 604-725-1561 · Vancouver, BC, Canada. Socials: Instagram @aniposada, LinkedIn aniposada, GitHub AniTools. Discovery calls book through a Google Calendar link. (`claude.md` lists an older hello@aniposada.com address; the live site's is authoritative.)

**The six services carry fixed names** — use them verbatim: Brand Strategy Development, Visual Identity Design, UI/UX Interface Design, Web Design, Web Development, Lottie Animation & After Effects. The services section is headed **START YOUR DIGITAL DESIGN JOURNEY**.

**Vibe.** Warm, personal, quietly confident, craft-proud. It reads like a talented friend explaining her work over coffee — specific about tools, generous about clients, unembarrassed about caring. Avoid: growth-marketing language, metric theatre ("3.4× conversion lift"), agency plural, hard-sell CTAs, buzzwords like "leverage" or "synergy," and any claim of scale she doesn't have.

---

## VISUAL FOUNDATIONS

### Colour

Three exact brand colours carry the entire system:

- **Coral `#FF725E`** — the primary. Accents, CTAs, subtitles, selection frames, links, active states. Used as a punctuation mark, never as a large flood; the biggest coral areas are buttons and small fills.
- **Blush `#FFEBE5`** — the brand's warm tint. Originally the page background on every screen. **It has since been demoted to a section band** (`--surface-band`): at full-bleed it made the site read playful rather than premium, so the page canvas is now `--blush-025` `#FFFBFA`, a warm off-white that keeps the warmth without the wash. Use blush deliberately, for one or two bands per page, to separate sections.
- **Ink `#3F4142`** — all text and any dark surface. A soft warm-leaning charcoal, deliberately not black.

A fourth value, **`#263238`**, appears as the cursor-arrow fill inside the logo SVGs and is available as `--ink-900` for the darkest accents.

The neutral and state ramps (`--coral-600/700`, `--ink-200`–`--ink-800`, `--blush-200/300`) are **derived in oklch** from the three brand values to stay in the same warm family. There is **no status/semantic colour palette in the source**; `--status-success` and `--status-error` are additions for form feedback, with error simply reusing deep coral.

Rule of thumb: off-white canvas → blush bands for section separation → white cards → ink text → coral accent. Two background colours per composition, maximum.

### Type

- **Literata Bold (700)** for every title. A contemporary serif with real contrast — it does the "premium" work in the brand, and it's why the identity reads as editorial rather than startup. Set tight: `--leading-display` 1.05, negative tracking.
- **Open Sans SemiBold Italic (600 italic)** for subtitles, **always in coral**. This exact pairing — italic sans subtitle under a bold serif title — is the brand's most recognisable typographic move. Do not substitute a roman weight.
- **Open Sans Regular (400)** for body, at `--leading-body` 1.65 with a 64ch measure.
- **Open Sans SemiBold, uppercase, wide-tracked (`--tracking-label` 0.12em)** for small labels and eyebrows, as on the brand sheet's own "LITERATA / OPEN SANS" annotations.

Both faces are Google Fonts and load from the Google CDN exactly as the live site loads them, so **no font substitution was necessary**.

### The selection-frame motif

The brand mark is the wordmark **inside a 1px coral rectangle with four square white corner handles and a small dark cursor arrow at the lower right** — a Figma selection box. This is the identity's central visual idea: the designer's own tool, made visible. Reuse it deliberately:

- 1px coral frame, `outline-offset: 6px`
- 8px square handles, white fill, 1px coral stroke, at the corners (the source SVG uses 7.07 × 7.46px)
- hard corners — the frame is **never** rounded
- the cursor arrow belongs to the logo lockups; don't scatter it as a decoration

`.ani-selected` in `tokens/base.css` implements it. Use it on one hero element or one featured card per view — it loses its charm if everything is selected.

### Corner radii

Two registers. **Selection frames, handles, and anything logo-adjacent: `0`.** Content — cards, images, buttons, inputs, tool tags: soft, `--radius-md` (8px) to `--radius-xl` (24px), with project cards and images at 16px and tool tags fully pill-shaped. The tension between the hard-cornered frame and the soft cards is intentional.

### Cards

White (`--surface-card`) on blush, `--radius-lg` (16px), **no border** — separation comes from the warm shadow, not a line. `--shadow-sm` at rest, lifting to `--shadow-md` and `translateY(-4px)` on hover. Hairline borders (`--border-hairline`, a blush tint) are reserved for dividers and input edges, never for card outlines.

### Shadows

Warm-tinted only — every shadow is `rgba(63,65,66,…)`, the ink colour at low alpha, never neutral grey or pure black. Four steps (`xs`/`sm`/`md`/`lg`) plus `--shadow-accent`, a coral-tinted glow reserved for the primary CTA. Inner shadow is used only as a hairline ring (`--shadow-inset-hairline`) on inputs.

### Backgrounds and imagery

Flat blush — **no gradients anywhere**, no meshes, no noise or grain overlays. The only textures in the brand are the Lottie animations and the project photography itself.

Project imagery is full-bleed within its card or the case-study hero, `object-fit: cover`, at 16:10 or 3:2. The colour vibe is **warm and natural** — daylight photography, sitting comfortably on blush; no cool blue casts, no black-and-white treatment, no heavy filters. Case-study heroes run full-bleed edge to edge; home-page project images are contained within rounded cards.

**Lottie animations are a first-class brand element**, not decoration — hosted on lottie.host, loaded via the `dotlottie-wc` web component, and present in Hero, About Me, and Contact. Motion design is one of Ana's selling points, so any new surface should budget space for one.

### Motion

Three named animations, taken exactly from `tailwind.config.js`:

- `fade-in` — 800ms `ease-out`
- `fade-in-up` — 800ms `ease-out`, from `translateY(20px)`
- `scale-in` — 600ms `ease-out`, from `scale(0.95)`

All are `forwards`, all one-directional, all `cubic-bezier(0,0,0.2,1)`. **No bounces, no springs, no overshoot** — the easing decelerates and settles. Reveals are scroll-triggered, and service items stagger in sequence. Section-to-section horizontal travel is a ~700ms transform. Micro-interactions are faster: 150ms for hover, 250ms for anything larger. Everything respects `prefers-reduced-motion`.

### Interaction states

- **Hover, accent surfaces:** darken to `--coral-600`. Never lighten, never change opacity.
- **Hover, cards and images:** `translateY(-4px)` plus a shadow step up; images may scale to 1.03 inside a fixed-overflow frame.
- **Hover, text links:** colour shifts to `--coral-600` and a 1px underline grows in from transparent.
- **Press:** colour deepens to `--coral-700` and the element scales to `0.98`. A subtle shrink, not a squash.
- **Focus:** a 3px coral glow at 35% alpha (`--ring-focus`), never the browser default, never removed.
- **Disabled:** `--state-disabled-bg` fill with `--state-disabled-fg` text — desaturated rather than transparent, so it stays legible on blush.

### Transparency and blur

Used sparingly and for exactly one purpose: the **mobile fixed header**, which gets a `12px` backdrop blur over a translucent blush so content reads through it while scrolling. Also the case-study lightbox scrim. Glassmorphism is not part of this brand — don't blur cards, panels, or nav on desktop.

### Layout

- `--max-content` 1240px, centred; prose capped at 720px / 64ch.
- Section padding: `--space-24` (96px) vertical, `clamp(24px, 6vw, 120px)` horizontal.
- **Fixed elements:** the header (80px, logo left, nav right) and a **vertical social-media rail** — left-side and fixed on desktop, moving to a bottom-fixed row on mobile.
- Breakpoints: ≤768px mobile (vertical scroll, hamburger), ≤1024px tablet (adjusted grids), >1024px desktop (horizontal scroll).
- Generous whitespace is doing real work here. Sections are viewport-scale on desktop, so under-filling a section is correct.

---

## ICONOGRAPHY

**Two icon systems are in play, both from the real dependency list in `package.json`:**

1. **Lucide** (`lucide-react@0.536.0`) — the primary UI icon set. Outline style, 24×24, 2px stroke, round caps and joins, `currentColor`. Use it for all interface icons: arrows, close, menu, external-link, mail, phone, map-pin, chevrons. It is loaded from CDN (`unpkg.com/lucide@latest`) in this system's cards and UI kit rather than vendored, because the repo consumes it as an npm React package with no copyable SVG assets. **This is a CDN link to the exact library the site uses, not a substitution.**
2. **Font Awesome Free** (`@fortawesome/fontawesome-free@7.0.1`, imported in `src/styles/global.css`) — used for **brand/social glyphs only**: Instagram, YouTube, LinkedIn in the fixed social rail. Font Awesome is the correct choice there because Lucide has no brand marks. Loaded from the Font Awesome CDN.

**Service icons** are described in `claude.md` as bespoke inline SVGs, one per service, in the Services grid. Those files are not in the repository, so they are **not reproduced here** — the Services section in the UI kit uses Lucide equivalents at the same size and leaves a note. If Ana can supply the six original service SVGs, they should be copied into `assets/icons/` and swapped in.

**App icons and favicon** are the real generated PWA set, copied into `assets/`: `favicon.svg`, `apple-touch-icon.png`, `icon-192x192.png`, `icon-512x512.png`, plus Ana's own `logo-32x32.png`.

**Emoji are never used as icons** in user-facing UI (only in internal developer docs). **Unicode characters are used sparingly as typographic marks** — the em dash `—`, the middot `·` as a metadata separator, and curly quotes in testimonials. The cursor arrow from the logo is a brand mark, not an icon; don't press it into service as a UI glyph.

**Never hand-draw an icon for this brand.** Reach for Lucide first, Font Awesome for social, and ask for the original SVG if neither fits.

---

## Intentional additions

Everything below has no direct counterpart in the source and was added to make the system usable. Each is flagged so it isn't mistaken for established brand:

- **`Icon`** — a thin wrapper around Lucide so components share one sizing/stroke contract.
- **`--status-success` / `--status-error`** — the source defines no status palette; the contact form needs feedback colours. Error reuses deep coral.
- **The oklch-derived neutral and coral ramps** — the source gives three flat colours with no scale.
- **`SectionHeading`** — codifies the title + coral-italic-subtitle pairing that the brand sheet shows but never names.

## Index

**Root**
- `styles.css` — the entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills manifest, for use in Claude Code.
- `github.md` — upstream repository association and sync record.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, shadows, motion, keyframes), `base.css` (element defaults + the `.ani-selected` selection frame).

**`assets/`** — `logo-wordmark.svg`, `logo-mark.svg`, `logo-32x32.png`, `brand-sheet.png`, `favicon.svg`, `apple-touch-icon.png`, `icon-192x192.png`, `icon-512x512.png`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand groups in the Design System tab).

### Components

- **`components/core/`** — `Button`, `Icon`, `Tag`, `Card`, `SelectionFrame`, `SectionHeading`
- **`components/forms/`** — `TextField`, `Textarea`, `FormStatus`
- **`components/content/`** — `ProjectCard`, `ServiceItem`, `Testimonial`
- **`components/navigation/`** — `NavBar`, `SocialRail`, `SectionDots`, `ProjectNav`

**`ui_kits/portfolio/`** — the website recreation.
- `Home - Editorial Light.html` — **the chosen home-page direction.** Off-white canvas, work index with sticky preview, Lottie reel, the six real services, About, Contact.
- `index.html` — the original five-section click-through with working case studies, form validation and lightbox.
- `Home A - Editorial Index.html`, `Home B - Bento Grid.html`, `Home C - One-Screen Dossier.html` — the three explored directions, kept for reference.
- `data.js` — real project, service and contact copy from the live site.
- Section components: `Hero.jsx`, `MyWork.jsx`, `Services.jsx`, `AboutMe.jsx`, `Contact.jsx`, `CaseStudy.jsx`, `App.jsx`.
