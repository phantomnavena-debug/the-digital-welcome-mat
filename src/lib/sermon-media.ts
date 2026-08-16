export type ChannelVideo = {
  videoId: string;
  title: string;
  publishedAt: string;
};

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@peculiarcitykomarock";
export const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=100092419240109";
export const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/1905831443124805";

export function watchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function embedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
}

export function thumbnailUrl(videoId: string, size: "large" | "small" = "small"): string {
  return `https://i.ytimg.com/vi/${videoId}/${size === "large" ? "maxresdefault" : "hqdefault"}.jpg`;
}

/** Splits "MORNING CHARGE || PST LEVIS YONGA || THE TITLE" into series, speaker and title. */
export function parseSermonTitle(raw: string): { series?: string; speaker?: string; title: string } {
  const parts = raw
    .split("||")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length >= 3) {
    return {
      series: toTitleCase(parts[0]!),
      speaker: toTitleCase(parts[1]!),
      title: toTitleCase(parts.slice(2).join(" — ")),
    };
  }

  if (parts.length === 2) {
    return { series: toTitleCase(parts[0]!), title: toTitleCase(parts[1]!) };
  }

  return { title: toTitleCase(raw) };
}

function toTitleCase(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .replace(/(^|[\s(/-])([a-z])/g, (_match, prefix: string, letter: string) => prefix + letter.toUpperCase())
    .replace(/\bPst\b/g, "Pst.");
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatRelative(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${days < 14 ? "" : "s"} ago`;
  if (days < 365) return `${Math.floor(days / 30)} month${days < 60 ? "" : "s"} ago`;
  return formatDate(iso);
}
