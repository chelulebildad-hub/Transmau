import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const beeProducts = [
  { name: "Pure Natural Honey", note: "Raw and unprocessed" },
  { name: "Bee Pollen", note: "Premium, 100% natural" },
  { name: "Beeswax", note: "Filtered blocks" },
  { name: "Propolis", note: "Resin extract" },
  { name: "Royal Jelly", note: "Fresh harvested" },
  { name: "Bee Venom", note: "Where applicable" },
];

const equipment = [
  "Langstroth Hives",
  "Kenya Top Bar Hives",
  "Hive Stands",
  "Protective Clothing",
  "Smokers",
  "Harvesting Equipment",
];

export function Beekeeping() {
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3.5">
              <img
                src="/images/bee-pollen-jar.jpeg"
                alt="TransMau premium bee pollen"
                className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-card"
              />
              <img
                src="/images/beekeeper-honey.jpeg"
                alt="Beekeeper inspecting honeycomb"
                className="aspect-square w-full rounded-2xl object-cover shadow-card"
              />
              <img
                src="/images/beehives-blossom.jpeg"
                alt="Beehives beside flowering tree"
                className="aspect-square w-full rounded-2xl object-cover shadow-card"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="eyebrow">Beekeeping and Honey Production</span>
            <h2 className="mt-4 h-section">
              Honey as pure as the <span className="text-forest">Mau itself</span>
            </h2>
            <p className="mt-3.5 text-taupe">
              Our location near the Mau Forest ecosystem, rich in flowering
              plants, clean water and a favourable climate, makes exceptional
              honey. Our apiaries support both honey production and crop
              pollination, linking productive agriculture with conservation.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {beeProducts.map((b) => (
                <div
                  key={b.name}
                  className="rounded-xl border border-honey/25 bg-honey-soft/40 p-3"
                >
                  <div className="text-sm font-semibold text-bark">
                    {b.name}
                  </div>
                  <div className="mt-0.5 text-xs text-taupe">{b.note}</div>
                </div>
              ))}
            </div>

            <Button asChild variant="honey" className="mt-6">
              <Link to="/contact">Order honey and bee products</Link>
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-2xl bg-forest-deep p-6 lg:p-8">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">
                Hives and beekeeping equipment
              </h3>
              <p className="mt-1.5 text-sm text-white/70">
                Quality solutions for individuals, groups, institutions and
                commercial investors, with technical guidance on apiary setup,
                hive management and colony multiplication.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {equipment.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
