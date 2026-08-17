import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import leadPastorsAsset from "../assets/lead-pastors.jpg.asset.json";
import pastorLevisAsset from "../assets/pastor-levis.jpg.asset.json";
import pastorGraceAsset from "../assets/pastor-grace.jpg.asset.json";

export const Route = createFileRoute("/pastoral-team")({
  head: () => ({
    meta: [
      { title: "Pastoral Team — Peculiar City" },
      { name: "description", content: "Meet the pastoral team and leaders serving Peculiar City." },
      { property: "og:title", content: "Pastoral Team — Peculiar City" },
      { property: "og:description", content: "Meet the pastoral team and leaders serving Peculiar City." },
      { property: "og:url", content: "/pastoral-team" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pastoral-team" }],
  }),
  component: PastoralTeamPage,
});

const pastors: { name: string; role: string; bio: string; image?: string }[] = [
  {
    name: "Pst. Levis Yonga",
    role: "Lead Pastor",
    bio: "Pst. Levis leads Peculiar City Komarock and teaches the daily Morning Charge broadcast, calling believers into freedom of mind, boldness and Kingdom identity.",
    image: pastorLevisAsset.url,
  },
  {
    name: "Pst. Grace Levis",
    role: "Lead Pastor",
    bio: "Pst. Grace serves alongside Pst. Levis, carrying the heart of the house in prayer, women's ministry and pastoral care.",
    image: pastorGraceAsset.url,
  },
  {
    name: "Pst. Charity",
    role: "Pastoral Team",
    bio: "Serving the Peculiar City family with dedication and care. Full bio coming soon.",
  },
  {
    name: "Pst. Betty",
    role: "Pastoral Team",
    bio: "Serving the Peculiar City family with dedication and care. Full bio coming soon.",
  },
];

const ministryTeams = [
  {
    name: "Pastoral Care Team",
    role: "Counselling & Follow-up",
    bio: "Our care team walks with members through prayer, counselling and follow-up, making sure no one journeys alone.",
  },
  {
    name: "Worship Team",
    role: "Praise & Worship",
    bio: "Our worship team leads the house into the presence of God each service and across our online broadcasts.",
  },
  {
    name: "Youth & Teens Leaders",
    role: "Next Generation",
    bio: "Raising a generation rooted in the Word, with mentorship, fellowship and space to discover their gifts.",
  },
  {
    name: "Children's Ministry Team",
    role: "Kingdom Kids",
    bio: "Creating a safe, joyful environment where children learn about Jesus at their own level.",
  },
  {
    name: "Media & Broadcast Team",
    role: "Digital Missions",
    bio: "The team behind the Morning Charge livestreams, taking the message of the house beyond Komarock.",
  },
];

function PastoralTeamPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center">
          <PageHeader
            title="Pastoral Team"
            description="Our leaders are here to serve, teach, and care for the Peculiar City community."
          />
        </div>

        <article className="mb-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid lg:grid-cols-2">
          <div className="aspect-[3/2] w-full bg-muted lg:aspect-auto lg:h-full">
            <img
              src={leadPastorsAsset.url}
              alt="Portrait of Pst. Levis and Pst. Grace Levis"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="p-8 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Lead Pastors</p>
            <h2 className="font-heading mt-2 text-3xl font-normal text-card-foreground">
              Pst. Levis &amp; Pst. Grace Levis
            </h2>
            <p className="mt-4 text-muted-foreground">
              Together they shepherd Peculiar City Komarock — The Home of Kingdom Experience — teaching,
              praying and raising a community that lives daily in Kingdom identity.
            </p>
          </div>
        </article>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pastors.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/5] bg-muted">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/10">
                    <span className="font-heading text-5xl font-normal text-primary/40">
                      {member.name.replace("Pst. ", "").charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-normal text-card-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <h2 className="font-heading mb-6 mt-16 text-2xl font-normal text-foreground">Ministry Teams</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministryTeams.map((team) => (
            <article key={team.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-normal text-card-foreground">{team.name}</h3>
              <p className="text-sm font-medium text-primary">{team.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{team.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
