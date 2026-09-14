import type { Metadata } from "next";
import { Home, Bath, BedDouble, Sofa, UtensilsCrossed, Sparkles } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceFeatureList } from "@/components/sections/ServiceFeatureList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Residential Cleaning | Placeholder Cleaning Co.",
  description:
    "We can clean your house, apartment, condo, penthouse, mansion, and more! Book trusted residential cleaning today.",
};

const features = [
  { icon: UtensilsCrossed, label: "Kitchens, wiped down and sanitized" },
  { icon: Bath, label: "Bathrooms scrubbed top to bottom" },
  { icon: BedDouble, label: "Bedrooms dusted and tidied" },
  { icon: Sofa, label: "Living areas vacuumed and refreshed" },
  { icon: Home, label: "Entryways and hallways swept & mopped" },
  { icon: Sparkles, label: "Surfaces dusted and polished" },
];

const steps = [
  {
    title: "Request a Quote",
    description: "Tell us about your home and the cleaning you need.",
  },
  {
    title: "Schedule a Visit",
    description: "Pick a one-time or recurring time that fits your calendar.",
  },
  {
    title: "We Clean",
    description: "Our vetted team arrives on time with everything needed.",
  },
  {
    title: "You Relax",
    description: "Walk into a spotless home and let us know how we did.",
  },
];

export default function ResidentialCleaningPage() {
  return (
    <>
      <Hero
        eyebrow="Residential Cleaning"
        title="We can clean your house, apartment, condo, penthouse, mansion, and more!"
        subtitle="Trusted, detail-oriented cleaning for every kind of home &mdash; one-time deep cleans or recurring visits that keep your space consistently spotless."
        icon={Home}
      />

      <Container className="py-16">
        <p className="max-w-3xl text-charcoal-light text-base sm:text-lg">
          Whether you live in a cozy apartment or a sprawling mansion, our residential cleaning
          team treats every home with the same care and attention to detail. We work around
          your schedule, use a consistent checklist on every visit, and adjust our approach to
          fit your space and preferences.
        </p>
      </Container>

      <ServiceFeatureList
        title="What's included in every residential clean"
        subtitle="Our standard checklist covers the essentials &mdash; add extras like inside-oven or inside-fridge cleaning any time."
        items={features}
      />

      <ProcessSteps steps={steps} />
      <TrustSignals />

      <CTASection
        title="Ready for a spotless home?"
        subtitle="Get a free, no-obligation quote for your house, apartment, condo, or mansion."
      />
    </>
  );
}
