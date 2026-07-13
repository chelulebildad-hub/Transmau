import { Reveal } from "@/components/ui/reveal";
import { Trees, Bug, Droplets, Sprout, Sun, Globe2, Layers } from "lucide-react";

const commitments = [
  { icon: Trees, label: "Tree planting" },
  { icon: Bug, label: "Pollinator conservation" },
  { icon: Layers, label: "Sustainable land use" },
  { icon: Sprout, label: "Soil health improvement" },
  { icon: Droplets, label: "Water conservation" },
  { icon: Sun, label: "Climate-smart agriculture" },
  { icon: Globe2, label: "Biodiversity preservation" },
];

export function Environment() {
  return (
    <section className="section bg-linen">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src="/images/pine-forest.jpeg"
              alt="Mau Forest conservation"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Environmental Commitment</span>
            <h2 className="mt-4 h-section">
              Profitable farming and conservation{" "}
              <span className="text-forest">can coexist</span>
            </h2>
            <p className="mt-3.5 text-taupe">
              Located at the edge of the Mau Forest, we take seriously our
              responsibility to protect and conserve the environment. Every
              decision balances productivity with the long-term health of the
              land, water and biodiversity around us.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap gap-2">
            {commitments.map((c, i) => (
              <Reveal key={c.label} delay={i * 45}>
                <span className="inline-flex items-center gap-2 rounded-full bg-forest-soft px-3 py-1.5 text-sm font-medium text-forest">
                  <c.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {c.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
