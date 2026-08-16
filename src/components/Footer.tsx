import { MapPin, Mail, Facebook, Youtube, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import flameAsset from "../assets/flame.png.asset.json";
import {
  FACEBOOK_GROUP_URL,
  FACEBOOK_PAGE_URL,
  YOUTUBE_CHANNEL_URL,
} from "../lib/sermon-media";

export function Footer() {
  return (
    <footer className="border-t border-border bg-plum text-background">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" aria-label="Peculiar City — home" className="flex items-center gap-2.5">
              <img
                src={flameAsset.url}
                alt="Peculiar City flame logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-heading text-lg font-normal">Peculiar City</span>
            </Link>
            <p className="mt-3 text-sm text-background/70">
              The Home of Kingdom Experience. A community in Komarock growing daily in the Word,
              prayer and Kingdom identity.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Peculiar City on YouTube"
                className="rounded-full border border-background/20 p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Peculiar City on Facebook"
                className="rounded-full border border-background/20 p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-normal">Visit Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-background/75">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Komarock, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>hello@peculiarcity.org</span>
              </li>
              <li>
                <a
                  href={FACEBOOK_GROUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-primary hover:underline"
                >
                  Join our Facebook community group
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-normal">Gathering Times</h3>
            <ul className="mt-3 space-y-1 text-sm text-background/75">
              <li>Morning Charge: Daily, 6:00 AM (online)</li>
              <li>Sunday Worship: 9:00 AM &amp; 11:00 AM</li>
              <li>Midweek Service: Wednesday, 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 sm:flex-row">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Peculiar City. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-background/60">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" aria-hidden="true" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
