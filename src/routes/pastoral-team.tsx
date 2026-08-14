import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import pastorImage from "../assets/pastor.jpg";

export const Route = createFileRoute("/pastoral-team")({
  head: () => ({
    meta: [
      { title: "Pastoral Team — New Hope Church" },
      { name: "description", content: "Meet the pastoral team and leaders serving New Hope Church." },
      { property: "og:title", content: "Pastoral Team — New Hope Church" },
      { property: "og:description", content: "Meet the pastoral team and leaders serving New Hope Church." },
      { property: "og:url", content: "/pastoral-team" },
    ],
    links: [{ rel: "canonical", href: "/pastoral-team" }],
  }),
  component: PastoralTeamPage,
});

const team = [
  {
    name: "Pastor Sarah Mitchell",
    role: "Lead Pastor",
    bio: "Sarah has served New Hope since 2018. She is passionate about teaching Scripture, developing leaders, and creating a church where everyone feels at home.",
    image: pastorImage,
  },
  {
    name: "Pastor David Chen",
    role: "Associate Pastor",
    bio: "David oversees discipleship and men's ministries. He loves helping people grow in faith through small groups, mentorship, and biblical teaching.",
  },
  {
    name: "Rev. Maria Thompson",
    role: "Pastor of Care & Counseling",
    bio: "Maria leads our pastoral care and counseling ministries. She has a heart for walking alongside people through life's joys and challenges.",
  },
  {
    name: "James Wright",
    role: "Worship Pastor",
    bio: "James directs our worship and creative arts teams. He believes worship is a powerful way to encounter God and respond to His goodness.",
  },
  {
    name: "Rachel Kim",
    role: "Children & Families Director",
    bio: "Rachel leads our children's ministry and family resources. She creates safe, fun, and faith-filled environments for kids to learn about Jesus.",
  },
  {
    name: "Daniel Brooks",
    role: "Youth Pastor",
    bio: "Daniel invests in middle and high school students, helping them build authentic faith and friendships that last.",
  },
];

function PastoralTeamPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center">
          <PageHeader
            title="Pastoral Team"
            description="Our leaders are here to serve, teach, and care for the New Hope community."
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
