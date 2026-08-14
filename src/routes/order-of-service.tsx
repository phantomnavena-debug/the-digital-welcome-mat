import { createFileRoute } from "@tanstack/react-router";
import { Music, BookOpen, Heart, Coffee, MessageCircle, Sparkles } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/order-of-service")({
  head: () => ({
    meta: [
      { title: "Order of Service — New Hope Church" },
      { name: "description", content: "What to expect during a Sunday worship service at New Hope Church." },
      { property: "og:title", content: "Order of Service — New Hope Church" },
      { property: "og:description", content: "What to expect during a Sunday worship service at New Hope Church." },
      { property: "og:url", content: "/order-of-service" },
    ],
    links: [{ rel: "canonical", href: "/order-of-service" }],
  }),
  component: OrderOfServicePage,
});

const serviceElements = [
  {
    title: "Pre-Service Gathering",
    icon: Coffee,
    description: "Arrive early for coffee, conversation, and a chance to meet someone new. Our welcome team is ready to greet you and answer any questions.",
  },
  {
    title: "Worship Through Music",
    icon: Music,
    description: "We begin with a time of contemporary and traditional worship songs. Feel free to sing, reflect, or simply receive the atmosphere of praise.",
  },
  {
    title: "Welcome & Announcements",
    icon: MessageCircle,
    description: "A brief welcome from our pastor, updates on church life, and upcoming events you may want to be part of.",
  },
  {
    title: "Scripture Reading",
    icon: BookOpen,
    description: "We read a passage from the Bible together, grounding our service in God's Word.",
  },
  {
    title: "Message",
    icon: Sparkles,
    description: "A relevant, Scripture-based message from one of our pastors, typically 30–40 minutes. We aim to teach truth with grace and practical application.",
  },
  {
    title: "Response & Prayer",
    icon: Heart,
    description: "We close with prayer, reflection, and an opportunity to respond to what God has spoken. Our prayer team is available after the service.",
  },
];

function OrderOfServicePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center">
          <PageHeader
            title="Order of Service"
            description="Not sure what to expect? Here's a simple guide to a typical Sunday morning at New Hope. Our services last about 75 minutes."
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <ol className="relative border-l-2 border-border pl-8">
            {serviceElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <li key={element.title} className="mb-10 last:mb-0">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div className="flex items-start gap-4">
                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/40 text-accent-foreground sm:inline-flex">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-normal text-foreground">{element.title}</h3>
                      <p className="mt-2 text-muted-foreground">{element.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-12 rounded-2xl bg-secondary/30 p-6 text-center sm:p-8">
            <h3 className="font-heading text-xl font-normal text-foreground">Kids are welcome</h3>
            <p className="mt-2 text-muted-foreground">
              Children are a gift to our church. Nursery and kids' classes are available during each service. Check in at the welcome desk when you arrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
