export type ChannelVideo = {
  videoId: string;
  title: string;
  publishedAt: string;
};

export const YOUTUBE_CHANNEL_ID = "UCCQd5ni8YLREMt2pwXkCgHQ";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@peculiarcitykomarock";

/** Used when the public feed is unreachable so the page always renders content. */
export const FALLBACK_VIDEOS: ChannelVideo[] = [
  {
    videoId: "-I1vhukNArk",
    title:
      "MORNING CHARGE || PST LEVIS YONGA || WARFARE AGAINST VEIL OF MENTAL IMPRISONMENT (WARFARE OF THE MIND)",
    publishedAt: "2026-08-14T04:56:31Z",
  },
  {
    videoId: "XRjQNwcvIUY",
    title:
      "MORNING CHARGE || PST LEVIS YONGA || UNDOING THE VEIL OF SELF BLAME, SHAME AND PAST MISTAKES",
    publishedAt: "2026-08-13T04:52:00Z",
  },
  {
    videoId: "oPDMJjFHfwE",
    title:
      "MORNING CHARGE || PST LEVIS YONGA || TOO LOADED TO BE HIDDEN || CHALLENGING COMFORT TO MANIFEST LIGHT",
    publishedAt: "2026-08-12T04:50:00Z",
  },
];

function decodeEntities(value: string): string {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function readTag(entry: string, tag: string): string | undefined {
  const match = entry.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match ? decodeEntities(match[1].trim()) : undefined;
}

export function parseChannelFeed(xml: string): ChannelVideo[] {
  const entries = xml.split("<entry>").slice(1);
  const videos: ChannelVideo[] = [];

  for (const entry of entries) {
    const videoId = readTag(entry, "yt:videoId");
    const title = readTag(entry, "title");
    const publishedAt = readTag(entry, "published");
    if (videoId && title && publishedAt) {
      videos.push({ videoId, title, publishedAt });
    }
  }

  return videos;
}

export async function fetchChannelVideos(): Promise<ChannelVideo[]> {
  try {
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
      { headers: { accept: "application/atom+xml" } },
    );

    if (!response.ok) {
      console.error(`YouTube feed request failed [${response.status}]`);
      return FALLBACK_VIDEOS;
    }

    const videos = parseChannelFeed(await response.text());
    return videos.length > 0 ? videos : FALLBACK_VIDEOS;
  } catch (error) {
    console.error("YouTube feed request threw", error);
    return FALLBACK_VIDEOS;
  }
}
