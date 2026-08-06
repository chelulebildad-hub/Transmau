import { Reveal } from "@/components/ui/reveal";
import { Check } from "lucide-react";

const reasons = [
  "Premium quality seedlings",
  "Professional agricultural expertise",
  "Sustainable farming practices",
  "Quality bee products",
  "Reliable customer support",
  "Practical farmer training",
  "Agribusiness mentorship",
  "Demonstration orchards and apiaries",
  "Commitment to farmer success",
  "Strategic location, ideal conditions",
];

export function WhyUs() {
  return (
    <section id="why-us" className="section bg-linen scroll-mt-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow mx-auto">Why Choose Us</span>
          <h2 className="mt-4 h-section">
            More than a farm, a partner in your success
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-2.5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r} delay={i * 35}>
              <div className="flex items-center gap-3 rounded-xl bg-card p-3.5 shadow-soft">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-bark">{r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
