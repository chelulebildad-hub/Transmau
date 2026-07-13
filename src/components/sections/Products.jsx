import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/reveal";
import { Sprout, Apple, Hexagon, Package, Wheat, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Sprout,
    title: "Fruit Seedlings",
    desc: "Professionally propagated from selected parent stock, strong roots, disease resistance, high yields.",
    img: "/images/seedling-nursery.jpeg",
    to: "/seedlings",
    tag: "Nursery",
  },
  {
    icon: Apple,
    title: "Commercial Fruit",
    desc: "Demonstration orchards producing healthy, high-quality fruit with replicable farming models.",
    img: "/images/apple-orchard.jpeg",
    to: "/orchards",
    tag: "Orchards",
  },
  {
    icon: Hexagon,
    title: "Honey and Bee Products",
    desc: "Pure natural honey, bee pollen, beeswax, propolis and royal jelly, handled for purity.",
    img: "/images/bee-pollen-jar.jpeg",
    to: "/honey-bees",
    tag: "Apiary",
  },
  {
    icon: Package,
    title: "Hives and Equipment",
    desc: "Langstroth and KTB hives, stands, protective clothing, smokers and harvesting gear.",
    img: "/images/apiary-meadow.jpeg",
    to: "/honey-bees",
    tag: "Equipment",
  },
  {
    icon: Wheat,
    title: "Super Napier Pakchong",
    desc: "High-biomass, high-nutrition fodder for dairy and livestock, better yields, lower costs.",
    img: "/images/napier-grass.jpeg",
    to: "/seedlings",
    tag: "Fodder",
  },
];

export function Products() {
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow mx-auto">Products and Services</span>
          <h2 className="mt-4 h-section">
            Everything you need to grow, in one place
          </h2>
          <p className="mx-auto mt-3 max-w-md text-taupe">
            From the first seedling to the last drop of honey, quality you can
            trace, from the Mau to your farm or table.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Link
                to={p.to}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-sand/90 px-2.5 py-0.5 text-[0.7rem] font-medium text-forest backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2.5 grid h-9 w-9 place-items-center rounded-lg bg-forest-soft text-forest">
                    <p.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <h3 className="flex items-start justify-between gap-2 font-heading text-base font-semibold text-bark">
                    {p.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-forest/40 transition-all group-hover:text-forest" />
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                    {p.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={products.length * 60}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-forest p-6 text-white shadow-glow">
              <div>
                <span className="rounded-full bg-honey px-2.5 py-0.5 text-[0.7rem] font-semibold text-bark">
                  Export-ready
                </span>
                <h3 className="mt-3.5 font-heading text-xl font-semibold text-white">
                  Authentic Kenyan quality, traceable to source
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Strict quality assurance, sustainable practices and full
                  traceability, built for local and international markets.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-honey transition-all hover:gap-2.5"
              >
                Request a quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
