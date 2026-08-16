import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import pastorImage from "../assets/pastor.jpg";

export const Route = createFileRoute("/pastoral-team")({
  head: () => ({
    meta: [
      { title: "Pastoral Team — Peculiar City" },
      { name: "description", content: "Meet the pastoral team and leaders serving Peculiar City." },
      { property: "og:title", content: "Pastoral Team — Peculiar City" },
      { property: "og:description", content: "Meet the pastoral team and leaders serving Peculiar City." },
      { property: "og:url", content: "/pastoral-team" },
    ],
    links: [{ rel: "canonical", href: "/pastoral-team" }],
  }),
  component: PastoralTeamPage,
});

const team = [
  {
    name: "Pst. Levis Yonga",
    role: "Lead Pastor",
    bio: "Pst. Levis leads Peculiar City Komarock and teaches the daily Morning Charge broadcast, calling believers into freedom of mind, boldness and Kingdom identity.",
    image: pastorImage,
  },
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-square bg-muted">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    width={816}
                    height={816}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/10">
                    <span className="font-heading text-5xl font-normal text-primary/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-normal text-card-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-muted-foreground">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
