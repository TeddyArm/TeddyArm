import { ShieldCheck, ThumbsUp, Clock, MapPinned } from "lucide-react";
import { Container } from "@/components/ui/Container";

const signals = [
  { icon: ShieldCheck, label: "Insured & Bonded" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
  { icon: Clock, label: "Years of Experience" },
  { icon: MapPinned, label: "Local & Reliable" },
];

export function TrustSignals() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid grid-cols-2 gap-6 border-y border-tan py-10 sm:grid-cols-4">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-charcoal">{signal.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
