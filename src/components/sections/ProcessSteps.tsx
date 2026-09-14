import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type ProcessStep = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="bg-cream-dark py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, stress-free process"
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-3">
              <span className="font-display text-3xl text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
              <p className="text-sm text-charcoal-light">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
