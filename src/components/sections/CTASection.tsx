import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export function CTASection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section id="quote" className="bg-charcoal py-20 text-cream scroll-mt-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tan-dark">
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          <p className="max-w-md text-cream/80">{subtitle}</p>
          <p className="text-sm text-cream/60">
            Prefer to talk? Call us at{" "}
            <a href={siteConfig.phoneHref} className="underline underline-offset-4">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>

        <div className="rounded-3xl bg-cream p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
