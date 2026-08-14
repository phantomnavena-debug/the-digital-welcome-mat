import { createFileRoute } from "@tanstack/react-router";
import { Play, Headphones, Clock } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons — Peculiar City" },
      { name: "description", content: "Listen to recent sermons and messages from the pastors of Peculiar City." },
      { property: "og:title", content: "Sermons — Peculiar City" },
      { property: "og:description", content: "Listen to recent sermons and messages from the pastors of Peculiar City." },
      { property: "og:url", content: "/sermons" },
    ],
    links: [{ rel: "canonical", href: "/sermons" }],
  }),
  component: SermonsPage,
});

const sermons = [
  {
    title: "Walking in Faith",
    speaker: "Pastor Sarah Mitchell",
    date: "August 10, 2026",
    series: "Foundations of Faith",
    duration: "38 min",
    description: "A message about trusting God when the path ahead is unclear.",
  },
  {
    title: "Love Your Neighbor",
    speaker: "Pastor David Chen",
    date: "August 3, 2026",
    series: "The Way of Jesus",
    duration: "42 min",
    description: "Exploring what it means to truly love the people around us.",
  },
  {
    title: "The Power of Hope",
    speaker: "Pastor Sarah Mitchell",
    date: "July 27, 2026",
    series: "Summer of Hope",
    duration: "35 min",
    description: "How hope in Christ anchors us through every season of life.",
  },
  {
    title: "Forgiven and Free",
    speaker: "Pastor David Chen",
    date: "July 20, 2026",
    series: "Grace in Action",
    duration: "40 min",
    description: "Understanding the freedom that comes from God's forgiveness.",
  },
  {
    title: "A Heart of Gratitude",
    speaker: "Pastor Sarah Mitchell",
    date: "July 13, 2026",
    series: "Grace in Action",
    duration: "36 min",
    description: "Cultivating thankfulness as a daily spiritual practice.",
  },
  {
    title: "The God Who Sees",
    speaker: "Pastor David Chen",
    date: "July 6, 2026",
    series: "Summer of Hope",
    duration: "41 min",
    description: "A reminder that God sees us, knows us, and walks with us.",
  },
];

function SermonsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center">
          <PageHeader
            title="Sermons"
            description="Catch up on recent messages from our teaching team. We hope these encourage and equip you in your faith."
          />
        </div>

        <div className="grid gap-5">
          {sermons.map((sermon) => (
            <article
              key={sermon.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Play className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-normal text-card-foreground">{sermon.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {sermon.series} • {sermon.date}
                </p>
                <p className="mt-2 text-muted-foreground">{sermon.description}</p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <span className="text-sm font-medium text-foreground">{sermon.speaker}</span>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {sermon.duration}
                </span>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Headphones className="h-4 w-4" aria-hidden="true" />
                  Listen
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
