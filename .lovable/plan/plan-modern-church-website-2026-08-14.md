# Plan: Modern Church Website

## Overview
Build a multi-page church website with a welcoming, contemporary feel. The design uses a custom palette of purple, pink, light blue, and white, paired with DM Serif Display headings and Fira Sans body text. The homepage follows a hero + card-grid layout; each major section gets its own route.

## Design decisions
- **Colors**: custom purple/pink/light-blue/white palette mapped to semantic tokens (`primary`, `secondary`, `accent`, `background`, `foreground`).
- **Typography**: DM Serif Display for headings; Fira Sans for body and UI text. Loaded via Google Fonts `<link>` in `src/routes/__root.tsx`.
- **Layout**: hero + card-grid homepage; clean navigation; generous whitespace; responsive mobile-first.
- **Mood**: warm, inclusive, peaceful — modern without being clinical.

## Pages / routes
1. **Home** (`/`) — hero banner, welcome message, quick-links card grid to Events, Sermons, Order of Service, Pastoral Team, Ministries, plus a short welcome/about snippet.
2. **Events** (`/events`) — upcoming events list/section.
3. **Sermons** (`/sermons`) — sermon archive/list with placeholder entries.
4. **Order of Service** (`/order-of-service`) — typical weekly service outline.
5. **Pastoral Team** (`/pastoral-team`) — team cards with names, roles, and brief bios.
6. **Ministries** (`/ministries`) — ministry card grid.

## Technical work
- Define color tokens in `src/styles.css` using `oklch`.
- Add Google Fonts link in `src/routes/__root.tsx` and set font tokens in `src/styles.css`.
- Update `__root.tsx` head metadata and route `head()` for each leaf route with unique titles/descriptions.
- Create a shared `NavBar` component and a simple footer.
- Build the homepage hero + card grid.
- Build each content page with semantic HTML and responsive layouts.
- Keep content static for this phase (no backend or CMS). User can replace placeholder text/images later.

## Images / assets
- Generate hero and pastoral-team placeholder images via image generation to match the palette.
- Store generated images under `src/assets/`.

## Out of scope
- Backend/database, CMS, giving/donations, sermon audio/video players, livestream integration, user authentication.
- These can be added later if requested.

## Success criteria
- All six routes render correctly.
- Navigation works between pages.
- Homepage matches the hero + card-grid layout.
- Design tokens apply consistently across light mode (default).
- Pages are responsive and accessible with semantic headings.
