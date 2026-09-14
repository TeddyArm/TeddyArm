import type { Metadata } from "next";
import { Building2, DoorOpen, Trash2, Monitor, Wind, CalendarClock } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceFeatureList } from "@/components/sections/ServiceFeatureList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Office & Commercial Cleaning | Placeholder Cleaning Co.",
  description:
    "We can clean your office, or commercial space one time or on a recurring basis. Flexible scheduling around your business hours.",
};

const features = [
  { icon: Monitor, label: "Desks and workstations wiped down" },
  { icon: DoorOpen, label: "Common areas and break rooms cleaned" },
  { icon: Trash2, label: "Trash and recycling emptied" },
  { icon: Building2, label: "Restrooms sanitized and restocked" },
  { icon: Wind, label: "Floors vacuumed and mopped" },
  { icon: CalendarClock, label: "Flexible recurring schedules available" },
];

const steps = [
  {
    title: "Tell Us About Your Space",
    description: "Share your square footage, layout, and cleaning frequency needs.",
  },
  {
    title: "Get a Custom Plan",
    description: "We build a schedule that works around your business hours.",
  },
  {
    title: "We Clean On Schedule",
    description: "One-time or recurring visits, always consistent and thorough.",
  },
  {
    title: "You Stay Focused",
    description: "Spend less time worrying about upkeep and more time on business.",
  },
];

export default function OfficeCommercialCleaningPage() {
  return (
    <>
      <Hero
        eyebrow="Office & Commercial Cleaning"
        title="We can clean your office, or commercial space one time or on a recurring basis."
        subtitle="From small offices to multi-floor commercial buildings, we keep your workplace clean, professional, and welcoming for employees and clients alike."
        icon={Building2}
      />

      <Container className="py-16">
        <p className="max-w-3xl text-charcoal-light text-base sm:text-lg">
          A clean workplace makes a strong first impression and supports a healthier team.
          We work after hours or during off-peak times to avoid disrupting your business, and
          we tailor our checklist to your industry &mdash; whether that&apos;s a corporate
          office, retail storefront, or medical facility.
        </p>
      </Container>

      <ServiceFeatureList
        title="What's included in office & commercial cleaning"
        subtitle="A consistent checklist for every visit, scaled to the size and type of your space."
        items={features}
      />

      <ProcessSteps steps={steps} />
      <TrustSignals />

      <CTASection
        title="Keep your workplace spotless."
        subtitle="Get a free quote for one-time or recurring office and commercial cleaning."
      />
    </>
  );
}
