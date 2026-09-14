"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tan bg-cream/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg text-charcoal">
          <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
          {siteConfig.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-charcoal" : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="#quote" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden text-charcoal"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen ? (
        <div className="lg:hidden border-t border-tan bg-cream">
          <Container className="flex flex-col gap-4 py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium ${
                    isActive ? "text-charcoal" : "text-charcoal-light"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href="#quote" variant="primary" className="mt-2 w-full">
              Get a Quote
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
