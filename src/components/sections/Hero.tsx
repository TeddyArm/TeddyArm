import { type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function Hero({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-tan">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-tan-dark/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative flex flex-col items-center gap-8 py-24 text-center lg:py-32">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal text-cream shadow-lg shadow-charcoal/10">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>

        <h1 className="max-w-3xl font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="max-w-xl text-base text-charcoal-light sm:text-lg">{subtitle}</p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#quote" variant="primary">
            Get a Free Quote
          </Button>
          <Button href={siteConfig.phoneHref} variant="secondary">
            Call Now &mdash; {siteConfig.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
