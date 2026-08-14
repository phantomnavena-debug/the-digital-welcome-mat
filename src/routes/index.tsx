import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Headphones, BookOpen, Users, Heart, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Hope Church — Welcome Home" },
      { name: "description", content: "A welcoming church community in Graceville. Join us for worship, sermons, events, and ministries." },
      { property: "og:title", content: "New Hope Church — Welcome Home" },
      { property: "og:description", content: "A welcoming church community in Graceville. Join us for worship, sermons, events, and ministries." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const quickLinks = [
  { title: "Events", description: "See what's happening this week and beyond.", icon: Calendar, to: "/events", color: "bg-accent/40 text-accent-foreground" },
  { title: "Sermons", description: "Listen to recent messages from our pastors.", icon: Headphones, to: "/sermons", color: "bg-secondary/40 text-secondary-foreground" },
  { title: "Order of Service", description: "What to expect when you visit on Sunday.", icon: BookOpen, to: "/order-of-service", color: "bg-accent/40 text-accent-foreground" },
  { title: "Pastoral Team", description: "Meet the leaders who serve our church.", icon: Users, to: "/pastoral-team", color: "bg-secondary/40 text-secondary-foreground" },
  { title: "Ministries", description: "Find a group or ministry to grow with.", icon: Heart, to: "/ministries", color: "bg-accent/40 text-accent-foreground" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sunlit modern church sanctuary with a wooden cross"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
            priority="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        </div>

        <div className="container-page relative flex min-h-[500px] flex-col justify-center py-20 sm:min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-medium uppercase tracking-widest text-white/90">Welcome to</p>
            <h1 className="font-heading mt-3 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              New Hope Church
            </h1>
            <p className="mt-6 text-lg text-white/90 sm:text-xl">
              A place where everyone is welcome, faith is deepened, and lives are transformed by the love of Christ.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
              >
                Join Us This Sunday
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/sermons"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Watch a Sermon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-normal text-foreground sm:text-4xl">
              We're glad you're here
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're exploring faith for the first time or looking for a church family, New Hope Church is a place
              where you can belong, believe, and become who God made you to be.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Card Grid */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-normal text-foreground sm:text-4xl">Explore</h2>
            <p className="mt-3 text-muted-foreground">Find what you're looking for at New Hope.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${link.color}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-normal text-card-foreground">{link.title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{link.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
