import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Peculiar City" },
      { name: "description", content: "Upcoming events at Peculiar City. Worship nights, community gatherings, Bible studies, and more." },
      { property: "og:title", content: "Events — Peculiar City" },
      { property: "og:description", content: "Upcoming events at Peculiar City. Worship nights, community gatherings, Bible studies, and more." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description: "Join us for a time of worship, prayer, and teaching from Scripture.",
  },
  {
    title: "Wednesday Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "A midweek opportunity to dig deeper into God's Word together.",
  },
  {
    title: "Community Outreach Day",
    date: "Saturday, August 22",
    time: "9:00 AM – 1:00 PM",
    location: "Graceville Community Center",
    description: "Serve our local community with food distribution, prayer, and cleanup.",
  },
  {
    title: "Youth Group Night",
    date: "Friday, August 28",
    time: "6:30 PM",
    location: "Youth Room",
    description: "A fun evening for students grades 6–12 with games, worship, and small groups.",
  },
  {
    title: "Women's Prayer Breakfast",
    date: "Saturday, September 5",
    time: "9:00 AM",
    location: "Fellowship Hall",
    description: "A morning of connection, worship, and prayer for women of all ages.",
  },
  {
    title: "Fall Worship Night",
    date: "Friday, September 18",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "An extended evening of praise, prayer, and reflection as we enter the fall season.",
  },
];

function EventsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center">
          <PageHeader
            title="Upcoming Events"
            description="There's always something happening at Peculiar City. We'd love to see you at one of these gatherings."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-normal text-card-foreground">{event.title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{event.description}</p>
              <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{event.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
