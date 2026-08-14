# Rebuild site content around Peculiar City Komarock's real media

## What I found

The YouTube channel **PECULIAR CITY KOMAROCK** is readable and gives real content:

- Daily broadcast series **"MORNING CHARGE"** with **Pst Levis Yonga**, roughly 55–65 minutes each, posted daily.
- Recent message titles include:
  - Warfare Against the Veil of Mental Imprisonment (Warfare of the Mind)
  - Undoing the Veil of Self Blame, Shame and Past Mistakes
  - Too Loaded to Be Hidden — Challenging Comfort to Manifest Light
- Location marker in the name: **Komarock** (Nairobi, Kenya).

Facebook (the page and the group media album) cannot be read by any of my fetch tools — Meta blocks automated access and requires login. So I can't pull photos, event flyers, or posts from there myself.

## What I'll change

1. **Sermons page** — replace the invented US-style sermons (Pastor Sarah Mitchell, Pastor David Chen) with the real Morning Charge messages from Pst Levis Yonga. Each message becomes a YouTube-style title card: the video thumbnail with a play overlay and duration badge, the full message title, speaker and date underneath, and the whole card links out to the video on YouTube. Above the grid, a featured embedded player for the latest message plus a "Watch on YouTube" / subscribe call to action.
2. **Footer & contact details** — remove the placeholder US address, phone and email; use Komarock, Nairobi, Kenya, and link the Facebook page, the Facebook group, and the YouTube channel as social icons. Phone/email left out until you provide them.
3. **Pastoral team page** — lead with Pst Levis Yonga; remove the fictional pastors. Other team members stay as clearly generic placeholders until you send names.
4. **Home page** — hero copy reworked to the church's own voice ("The Home of Kingdom Experience", Komarock), a "Latest from Morning Charge" strip pulling the recent message titles, and the card grid retained.
5. **Order of Service / Events / Ministries** — keep the structure, but strip US-specific placeholder details (dates, times, venues) and mark them clearly as needing your input, so nothing invented reads as fact.

## Technical notes

- Sermon data stays as a typed array in the sermons route with real titles, speaker, duration and YouTube video IDs — no API key or backend needed.
- The featured sermon uses a lazy-loaded YouTube iframe embed (privacy-enhanced `youtube-nocookie.com`) so it doesn't slow first paint.
- Social links go in `Footer.tsx` and optionally the navbar, using existing lucide icons.
- No backend, database, or new dependencies.

## What I need from you

To go beyond this, please send:
- **Service times and physical address** in Komarock.
- **Phone / email** for the contact section.
- **Photos** — since Facebook is unreadable to me, you'd need to upload the images you want used (services, team, events) directly in chat.
- **Pastoral team names and roles**, and any ministry names.
