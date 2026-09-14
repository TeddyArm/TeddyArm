import type { Metadata } from "next";
import { Sparkles, PaintRoller, LampCeiling, RectangleHorizontal, Refrigerator, Wind } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceFeatureList } from "@/components/sections/ServiceFeatureList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Deep Cleaning | Placeholder Cleaning Co.",
  description:
    "We can do a deep detailed cleaning including things not included in a standard cleaning like baseboards, walls and more!",
};

const features = [
  { icon: RectangleHorizontal, label: "Baseboards scrubbed and dust-free" },
  { icon: PaintRoller, label: "Walls spot-cleaned of marks and grime" },
  { icon: LampCeiling, label: "Light fixtures and ceiling fans dusted" },
  { icon: Refrigerator, label: "Behind and under large appliances" },
  { icon: Wind, label: "Vents and air returns wiped down" },
  { icon: Sparkles, label: "Every detail a standard clean skips" },
];

const steps = [
  {
    title: "Tell Us Your Focus Areas",
    description: "Let us know any spots that need extra attention.",
  },
  {
    title: "We Schedule the Deep Clean",
    description: "Book a one-time deep clean or pair it with a recurring plan.",
  },
  {
    title: "Detailed Top-to-Bottom Clean",
    description: "Every surface, corner, and overlooked detail gets attention.",
  },
  {
    title: "A Truly Fresh Space",
    description: "Enjoy a level of clean that goes far beyond the basics.",
  },
];

export default function DeepCleaningPage() {
  return (
    <>
      <Hero
        eyebrow="Deep Cleaning"
        title="We can do a deep detailed cleaning including things not included in a standard cleaning like baseboards, walls and more!"
        subtitle="A deep clean tackles the details that build up over time &mdash; perfect before a big event, after moving in, or as a seasonal refresh."
        icon={Sparkles}
      />

      <Container className="py-16">
        <p className="max-w-3xl text-charcoal-light text-base sm:text-lg">
          Regular cleaning keeps a space tidy, but a deep clean goes further &mdash; reaching
          the baseboards, walls, fixtures, and hidden spots that accumulate dust and grime over
          weeks or months. It&apos;s the reset your home or business needs a few times a year.
        </p>
      </Container>

      <ServiceFeatureList
        title="What's included in a deep clean"
        subtitle="Everything in a standard clean, plus the details that need extra attention."
        items={features}
      />

      <ProcessSteps steps={steps} />
      <TrustSignals />

      <CTASection
        title="Ready for a truly deep clean?"
        subtitle="Get a free quote for a detailed, top-to-bottom deep cleaning."
      />
    </>
  );
}
