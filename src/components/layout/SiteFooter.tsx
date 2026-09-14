import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-tan bg-cream-dark">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-display text-lg text-charcoal">
            <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
            {siteConfig.name}
          </div>
          <p className="text-sm text-charcoal-light">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Services
          </h3>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-charcoal-light hover:text-charcoal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-charcoal-light">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-charcoal">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-charcoal">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Service Area
          </h3>
          <p className="text-sm text-charcoal-light">{siteConfig.serviceArea}</p>
        </div>
      </Container>

      <div className="border-t border-tan-dark/40">
        <Container className="flex flex-col gap-2 py-6 text-xs text-charcoal-light sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>Placeholder content &mdash; replace with your real business details.</span>
        </Container>
      </div>
    </footer>
  );
}
