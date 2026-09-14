import { type LucideIcon, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type FeatureItem = {
  icon: LucideIcon;
  label: string;
};

export function ServiceFeatureList({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: FeatureItem[];
}) {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="What's Included" title={title} subtitle={subtitle} />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-start gap-3 rounded-2xl border border-tan bg-cream-dark/40 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-cream">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-charcoal">{item.label}</span>
                  <span className="flex items-center gap-1 text-xs text-accent">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Included every visit
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
