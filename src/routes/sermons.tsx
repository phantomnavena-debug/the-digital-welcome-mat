import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Play, Youtube, Radio } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { RevealCard } from "../components/RevealCard";
import { getChannelVideos } from "../lib/youtube.functions";
import {
  type ChannelVideo,
  YOUTUBE_CHANNEL_URL,
  embedUrl,
  formatDate,
  formatRelative,
  parseSermonTitle,
  thumbnailUrl,
  watchUrl,
} from "../lib/sermon-media";

const sermonsQuery = queryOptions({
  queryKey: ["channel-videos"],
  queryFn: () => getChannelVideos(),
  staleTime: 30 * 60 * 1000,
});

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons — Peculiar City Komarock" },
      {
        name: "description",
        content:
          "Watch the latest Morning Charge messages from Pst. Levis Yonga and Peculiar City Komarock, updated automatically from our YouTube channel.",
      },
      { property: "og:title", content: "Sermons — Peculiar City Komarock" },
      {
        property: "og:description",
        content:
          "Watch the latest Morning Charge messages from Pst. Levis Yonga and Peculiar City Komarock.",
      },
      { property: "og:url", content: "/sermons" },
    ],
    links: [{ rel: "canonical", href: "/sermons" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(sermonsQuery),
  component: SermonsPage,
});

function FeaturedSermon({ video }: { video: ChannelVideo }) {
  const [playing, setPlaying] = useState(false);
  const { series, speaker, title } = parseSermonTitle(video.title);

  return (
    <RevealCard className="mb-14">
      <article className="float-card overflow-hidden rounded-3xl border border-border bg-plum text-background shadow-lg">
        <div className="relative aspect-video w-full overflow-hidden bg-plum-deep">
          {playing ? (
            <iframe
              src={embedUrl(video.videoId)}
              title={title}
              allow="accelerated-2d-canvas; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer"
              aria-label={`Play ${title}`}
            >
              <img
                src={thumbnailUrl(video.videoId, "large")}
                alt={`Thumbnail for ${title}`}
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-plum-deep/90 via-plum-deep/20 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>

        <div className="p-6 sm:p-10">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <Radio className="h-4 w-4" aria-hidden="true" />
            Latest message · {formatRelative(video.publishedAt)}
          </p>
          <h2 className="font-heading mt-4 text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-base text-background/75">
            {[series, speaker].filter(Boolean).join(" · ")} — {formatDate(video.publishedAt)}
          </p>
          <a
            href={watchUrl(video.videoId)}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Youtube className="h-4 w-4" aria-hidden="true" />
            Watch on YouTube
          </a>
        </div>
      </article>
    </RevealCard>
  );
}

function SermonCard({ video, delay }: { video: ChannelVideo; delay: number }) {
  const { series, speaker, title } = parseSermonTitle(video.title);

  return (
    <RevealCard delay={delay} className="h-full">
      <a
        href={watchUrl(video.videoId)}
        target="_blank"
        rel="noreferrer"
        className="float-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={thumbnailUrl(video.videoId)}
            alt={`Thumbnail for ${title}`}
            width={480}
            height={360}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute inset-0 bg-plum-deep/0 transition-colors duration-300 group-hover:bg-plum-deep/30" />
          <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/95 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          {series ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{series}</p>
          ) : null}
          <h3 className="font-heading mt-2 line-clamp-3 text-lg font-normal leading-snug text-card-foreground">
            {title}
          </h3>
          <p className="mt-auto pt-4 text-sm text-muted-foreground">
            {speaker ? `${speaker} · ` : ""}
            {formatDate(video.publishedAt)}
          </p>
        </div>
      </a>
    </RevealCard>
  );
}

function SermonsPage() {
  const { data: videos } = useSuspenseQuery(sermonsQuery);
  const [featured, ...rest] = videos;

  return (
    <div className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center">
          <PageHeader
            title="Sermons"
            description="Morning Charge and Sunday messages from Peculiar City Komarock — updated automatically as new videos go live."
          />
        </div>

        {featured ? <FeaturedSermon video={featured} /> : null}

        {rest.length > 0 ? (
          <>
            <h2 className="font-heading mb-6 text-2xl font-normal text-foreground">More messages</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((video, index) => (
                <SermonCard key={video.videoId} video={video} delay={(index % 3) * 90} />
              ))}
            </div>
          </>
        ) : null}

        <RevealCard className="mt-16">
          <div className="rounded-3xl border border-border bg-accent/50 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-normal text-foreground sm:text-3xl">
              Never miss a Morning Charge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Subscribe on YouTube to get every message from Pst. Levis Yonga as soon as it goes live.
            </p>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              Subscribe on YouTube
            </a>
          </div>
        </RevealCard>
      </div>
    </div>
  );
}
