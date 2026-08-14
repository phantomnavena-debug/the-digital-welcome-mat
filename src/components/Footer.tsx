import { MapPin, Mail, Phone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-normal text-foreground">New Hope Church</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A welcoming community of faith, hope, and love. Join us as we grow together in Christ.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-normal text-foreground">Visit Us</h3>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>123 Faith Avenue, Graceville, CA 90210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>hello@newhopechurch.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-normal text-foreground">Service Times</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Sunday Worship: 9:00 AM & 11:00 AM</li>
              <li>Sunday School: 10:00 AM</li>
              <li>Wednesday Bible Study: 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} New Hope Church. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" aria-hidden="true" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
