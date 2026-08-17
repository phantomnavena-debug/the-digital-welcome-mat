# Logo swap + real pastoral team photos

## Logo

Use the newly uploaded Peculiar City logo exactly as supplied (flame + wordmark + "The Home of Kingdom Experience"), no recoloring or cropping.

- Replace the flame-only mark in the navbar with the full logo image, still clickable back to Home on every page.
- Since the logo already contains the church name and tagline, the text next to it in the navbar is removed so the header isn't duplicated.
- Same mark used in the footer.
- Favicon regenerated as a square crop of the flame from this new file.

Note: the uploaded logo has a solid white background, so on the dark plum navbar it will show as a white panel unless the background is removed. I'll remove the white background into a transparent PNG so it sits cleanly on the dark header.

## Pastoral team page

Card order and content:

1. **Pastor Levis & Pastor Grace Levis** — the couple photo, presented as a lead card (wider, first in the grid), titled "Lead Pastors".
2. **Pastor Levis Yonga** — his solo portrait, Lead Pastor.
3. **Pastor Grace Levis** — her solo portrait.
4. **Pastor Charity** — placeholder tile (initial monogram on a plum/copper block) until her photo arrives.
5. **Pastor Betty** — same placeholder treatment.

The existing generic team entries (Worship, Youth, Children, Media, Care) stay below as a separate "Ministry Teams" strip so the page doesn't lose that content.

Short bios: I'll write brief, neutral placeholder bios for Grace, Charity and Betty that you can correct — I don't have real bio text for them.

## Technical notes

- The three photos and the logo are uploaded to CDN via `lovable-assets` and referenced through `.asset.json` pointers; the favicon is a real square PNG in `public/`.
- Portraits are rendered at 4:5 with `object-cover` and `object-top` so faces aren't cropped; the couple card uses a wider 3:2 frame.
- Placeholder tiles reuse the existing monogram fallback already in `pastoral-team.tsx`.
- Cards keep the current border/card tokens; no palette changes.

## Needed from you later

- Full names and roles for Pastor Charity and Pastor Betty, plus their photos.
- Real bios for Pastor Grace, Charity and Betty.
