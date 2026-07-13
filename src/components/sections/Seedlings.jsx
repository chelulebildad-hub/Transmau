import { Reveal } from "@/components/ui/reveal";
import { Check } from "lucide-react";

const seedlings = [
  "Hass Avocado",
  "Fuerte Avocado",
  "Washington Navel Orange",
  "Pixie Orange",
  "Passion Fruits",
  "Apples",
  "Grapes",
  "Lemons",
  "Tangerines",
  "Guavas",
  "Pears",
  "Plums",
  "Peaches",
  "Tree Tomatoes",
];

export function Seedlings() {
  return (
    <section id="seedlings" className="section bg-linen">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Premium Fruit Seedlings</span>
          <h2 className="mt-4 h-section">
            Carefully propagated for{" "}
            <span className="text-forest">superior performance</span>
          </h2>
          <p className="mt-3.5 text-taupe">
            All planting materials are developed from selected parent stock and
            nurtured under strict quality control to ensure strong root
            development, healthy growth, disease resistance and optimal field
            performance, so your orchard starts strong and stays profitable.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2.5 sm:grid-cols-3">
            {seedlings.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm text-bark">
                <Check className="h-3.5 w-3.5 shrink-0 text-forest" strokeWidth={2.5} />
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm italic text-taupe">
            + other improved fruit varieties available from time to time.
          </p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-3.5">
          <div className="grid gap-3.5">
            <img
              src="/images/real-graft-closeup.jpeg"
              alt="Grafted fruit seedling with fresh growth"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src="/images/real-graft-hand.jpeg"
              alt="Grafted seedling shown in hand"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
            />
          </div>
          <div className="mt-7 grid gap-3.5">
            <img
              src="/images/real-seedling-pot.jpeg"
              alt="Potted seedling in the nursery"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src="/images/real-seedling-flush.jpeg"
              alt="Young seedling with fresh red growth"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
