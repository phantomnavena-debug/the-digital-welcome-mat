import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, BookOpen, Music, Globe, HandHeart } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import communityImage from "../assets/community.jpg";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — New Hope Church" },
      { name: "description", content: "Discover ministries and groups at New Hope Church for every age and stage of life." },
      { property: "og:title", content: "Ministries — New Hope Church" },
      { property: "og:description", content: "Discover ministries and groups at New Hope Church for every age and stage of life." },
      { property: "og:url", content: "/ministries" },
    ],
    links: [{ rel: "canonical", href: "/ministries" }],
  }),
  component: MinistriesPage,
});

const ministries = [
  {
    title: "Children's Ministry",
    icon: Heart,
    description: "Nursery through 5th grade. Safe, engaging, and Bible-centered environments where kids learn to love Jesus.",
  },
  {
    title: "Youth Group",
    icon: Users,
    description: "Middle and high school students gather weekly for worship, teaching, games, and small groups.",
  },
  {
    title: "Adult Discipleship",
    icon: BookOpen,
    description: "Small groups, Bible studies, and classes designed to help adults grow deeper in faith and friendship.",
  },
  {
    title: "Worship & Arts",
    icon: Music,
    description: "Musicians, vocalists, and creatives serve together to lead the church in authentic worship.",
  },
  {
    title: "Missions & Outreach",
    icon: Globe,
    description: "Local and global partnerships that share the hope of Christ through service, prayer, and resources.",
  },
  {
    title: "Care & Support",
    icon: HandHeart,
    description: "Meal trains, hospital visits, prayer support, and counseling referrals for those walking through difficult seasons.",
  },
];

function MinistriesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center">
          <PageHeader
            title="Ministries"
            description="Whatever your age or stage, there's a place for you to grow and serve at New Hope."
          />
        </div>

        <div className="mb-16 overflow-hidden rounded-3xl">
          <img
            src={communityImage}
            alt="Diverse group of people worshipping together in a modern church gathering"
            width={1200}
            height={800}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
            loading="lazy"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            return (
              <article
                key={ministry.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/40 text-secondary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-normal text-card-foreground">{ministry.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{ministry.description}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Get involved
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
