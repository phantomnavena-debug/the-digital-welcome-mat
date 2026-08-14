# Peculiar City Komarock — live sermons, new palette, branded logo

## What I found

The YouTube channel **PECULIAR CITY KOMAROCK** is readable and, importantly, publishes a public feed that updates automatically — so the site can always show the newest message with no manual editing.

- Daily series **"MORNING CHARGE"** with **Pst Levis Yonga**, roughly 55–65 minutes each.
- Recent titles: *Warfare Against the Veil of Mental Imprisonment*, *Undoing the Veil of Self Blame, Shame and Past Mistakes*, *Too Loaded to Be Hidden*.
- Facebook (the page and the group media album) blocks automated access and needs a login, so I cannot pull photos or posts from there. Anything you want from Facebook you'll need to upload here directly.

## What I'll build

### 1. Sermons page — auto-updating, thumbnail-led

- The page pulls the channel's latest videos live, so new Morning Charge uploads appear on their own.
- **Featured card**: the newest video gets a large, full-width title card — big thumbnail with a play overlay, large title, speaker, and how long ago it was posted, plus a "Watch on YouTube" button.
- **Grid below**: the remaining recent videos as smaller thumbnail cards (thumbnail, title, date), each linking to its video.
- **Hover float**: cards lift and gently tilt on hover with a soft shadow and a subtle thumbnail zoom.
- **Scroll reveal**: cards fade and rise into view as you scroll down the page, staggered so they arrive in sequence.
- Motion respects "reduce motion" system settings.

### 2. New color palette — Royal Plum & Copper

Dark plum foundation with copper highlights and a soft blush secondary, on an off-white paper tone:

```text
#150C1C  deep plum-black (page base / dark sections)
#2E1638  royal plum (surfaces, nav, footer)
#C97B4E  copper (primary actions, links, accents)
#E9B8C2  blush (secondary accents, highlights)
#F7F3F6  soft white (light sections, text on dark)
```

Applied sitewide as semantic tokens, so every page, button, and card shifts together. DM Serif Display + Fira Sans typography stays.

### 3. Logo

The uploaded logo is used exactly as supplied (no recoloring or cropping) in the navbar on every page, and it is a link back to Home — plus the same mark in the footer and as the browser tab icon.

### 4. Carried over from the previous plan

- Footer/contact corrected to Komarock, Nairobi, Kenya, with links to the Facebook page, the Facebook group, and the YouTube channel.
- Pastoral team led by Pst Levis Yonga; invented US pastors removed.
- Home page hero in the church's own voice, with a "Latest from Morning Charge" strip driven by the same live feed.
- Events / Order of Service / Ministries keep their structure but drop invented US details until you supply the real ones.

## Technical notes

- Live data comes from the channel's public Atom feed (`channel_id=UCCQd5ni8YLREMt2pwXkCgHQ`), fetched in a TanStack `createServerFn`, parsed to `{ videoId, title, publishedAt }`, and cached for ~30 minutes. No YouTube API key, no backend, no database.
- The route loader prefetches through the query client; the component reads it with `useSuspenseQuery`, and falls back to a hard-coded list of the latest known messages if the feed is ever unreachable.
- Thumbnails come from YouTube's image CDN (`https://i.ytimg.com/vi/<id>/maxresdefault.jpg` for the featured card, `hqdefault.jpg` for the grid), lazy-loaded at 16:9 with alt text.
- Featured player uses a click-to-load `youtube-nocookie.com` iframe so it doesn't slow first paint.
- Hover float and scroll reveal use CSS transitions plus an IntersectionObserver hook — no animation library added.
- Palette defined as OKLCH tokens in `src/styles.css` under `@theme inline`; no hardcoded color classes in components.
- Logo referenced from the existing uploaded asset pointer; favicon regenerated from that same file.

## Still needed from you

- Service times and the physical address in Komarock.
- Phone / email for contact.
- Photos (services, team, events) uploaded here, since Facebook can't be read.
- Pastoral team names and roles, and ministry names.
