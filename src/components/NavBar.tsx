import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import flameAsset from "../assets/flame.png.asset.json";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Sermons", to: "/sermons" },
  { label: "Order of Service", to: "/order-of-service" },
  { label: "Pastoral Team", to: "/pastoral-team" },
  { label: "Ministries", to: "/ministries" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          aria-label="Peculiar City — home"
          className="flex items-center gap-2.5 text-foreground transition-colors hover:text-primary"
        >
          <img
            src={flameAsset.url}
            alt="Peculiar City flame logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl font-normal tracking-tight">Peculiar City</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              The Home of Kingdom Experience
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-primary" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
