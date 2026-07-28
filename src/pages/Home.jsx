import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Mountain } from "lucide-react";

const marquee = [
  "Bee Pollen",
  "Hass Avocado",
  "Pure Natural Honey",
  "Pixie Orange",
  "Beeswax",
  "Grapes",
  "Propolis",
  "Super Napier",
  "Fruit Seedlings",
  "Royal Jelly",
];

function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y border-stone bg-linen py-3.5">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-8">
        {items.map((m, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-wide text-taupe"
          >
            <span className="h-1 w-1 rounded-full bg-honey" />
            {m}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

const perks = [
  {
    icon: Mountain,
    title: "Fertile volcanic soils",
    desc: "Highland conditions at the edge of the Mau produce vigorous, healthy planting materials.",
  },
  {
    icon: Droplets,
    title: "Clean water and rainfall",
    desc: "Abundant clean water and a cool climate for consistent, quality year-round growth.",
  },
  {
    icon: Leaf,
    title: "Rich biodiversity",
    desc: "A thriving ecosystem that supports exceptional fruit, seedlings and honey.",
  },
];

function IntroStrip() {
  return (
    <section className="section bg-sand">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src="/images/crop-rows-field.jpeg"
              alt="Trans Mau orchards"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src="/images/bee-pollen-jar.jpeg"
              alt="TransMau bee pollen"
              className="absolute -bottom-6 -right-4 hidden h-32 w-32 rounded-xl border-4 border-sand object-cover shadow-glow sm:block"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="eyebrow">Rooted in the Mau</span>
            <h2 className="mt-4 h-section">
              A premium, export-ready agricultural brand
            </h2>
            <p className="mt-3.5 text-taupe">
              Trans Mau Orchards and Honey is a sustainable agribusiness
              producing premium fruit seedlings, commercial fruit, natural honey
              and bee products, with quality, traceability and environmental
              stewardship at the core of everything we do.
            </p>
          </Reveal>
          <div className="mt-6 space-y-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex gap-3.5 rounded-xl border border-stone bg-card p-4 shadow-soft">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-forest-soft text-forest">
                    <p.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-bark">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-taupe">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-6">
            <Button asChild variant="soft" size="lg">
              <Link to="/about" className="inline-flex items-center gap-2">
                Learn our story <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
     <Helmet>
        <title>
          Trans Mau Orchards & Honey | Certified Fruit Seedlings, Pure Honey & Bee Products
        </title>

        <meta
          name="description"
          content="Trans Mau Orchards & Honey supplies certified avocado, apple, citrus and grape seedlings, pure natural honey, bee pollen, beeswax, orchard establishment services and farmer training from Olenguruone, Nakuru County, Kenya."
        />

        <meta
          name="keywords"
          content="avocado seedlings Kenya, Hass avocado seedlings, apple seedlings Kenya, citrus seedlings, bee pollen Kenya, pure honey Kenya, beeswax Kenya, orchard establishment, farmer training, Olenguruone, Nakuru"
        />

        <link
          rel="canonical"
          href="https://www.transmaufarms.com/"
        />
      </Helmet>

      <Hero />
      <Marquee />
      <IntroStrip />
      <Products />
      <WhyUs />
      <CtaBand />
      <Hero />
      <Marquee />
      <IntroStrip />
      <Products />
      <WhyUs />
      <CtaBand />
    </>
  );
}
