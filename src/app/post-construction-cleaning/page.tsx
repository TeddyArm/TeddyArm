import type { Metadata } from "next";
import { HardHat, Trash, Layers, AppWindow, Wind, Hammer } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceFeatureList } from "@/components/sections/ServiceFeatureList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Post-Construction Cleaning | Placeholder Cleaning Co.",
  description:
    "Fine dust, debris, and residue removal after construction or renovation. We get your space move-in ready.",
};

const features = [
  { icon: Wind, label: "Fine construction dust removed from every surface" },
  { icon: Trash, label: "Leftover debris and materials cleared out" },
  { icon: AppWindow, label: "Windows and glass cleaned inside and out" },
  { icon: Layers, label: "Floors detailed and residue-free" },
  { icon: Hammer, label: "Fixtures and hardware wiped of dust and grime" },
  { icon: HardHat, label: "Final walkthrough to confirm move-in ready" },
];

const steps = [
  {
    title: "Share Your Timeline",
    description: "Tell us when construction wraps and when you need the space ready.",
  },
  {
    title: "We Plan the Cleanup",
    description: "We coordinate around your contractors to avoid delays.",
  },
  {
    title: "Deep Cleanup Crew Arrives",
    description: "Dust, debris, and residue are removed from top to bottom.",
  },
  {
    title: "Move-In Ready",
    description: "A final walkthrough confirms every detail is spotless.",
  },
];

export default function PostConstructionCleaningPage() {
  return (
    <>
      <Hero
        eyebrow="Post-Construction Cleaning"
        title="Fresh off the job site &mdash; we make it move-in ready."
        subtitle="Construction and renovation leave behind fine dust, debris, and residue that standard cleaning can't handle. We specialize in the deep cleanup that follows a build."
        icon={HardHat}
      />

      <Container className="py-16">
        <p className="max-w-3xl text-charcoal-light text-base sm:text-lg">
          Whether you just finished a full renovation or a single-room remodel, post-construction
          debris settles into every corner &mdash; on floors, in vents, and coating fixtures. Our
          crews are equipped to handle heavy-duty cleanup so your space is safe, clean, and ready
          for its next chapter.
        </p>
      </Container>

      <ServiceFeatureList
        title="What's included in post-construction cleaning"
        subtitle="From fine dust to leftover materials, we cover the details standard cleaning misses."
        items={features}
      />

      <ProcessSteps steps={steps} />
      <TrustSignals />

      <CTASection
        title="Get your space move-in ready."
        subtitle="Get a free quote for post-construction and renovation cleanup."
      />
    </>
  );
}
