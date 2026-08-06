import SEO from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Beekeeping as BeekeepingSection } from "@/components/sections/Beekeeping";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/reveal";
import { Flower2, Droplets, Recycle } from "lucide-react";

const pillars = [
  {
    icon: Flower2,
    title: "Forest-edge forage",
    desc: "Abundant flowering plants around the Mau give our honey its distinctive purity and depth.",
  },
  {
    icon: Recycle,
    title: "Pollination partnership",
    desc: "Our apiaries pollinate crops, linking productive agriculture with conservation.",
  },
  {
    icon: Droplets,
    title: "Careful handling",
    desc: "Harvested and processed with care to preserve purity, nutrition and quality.",
  },
];

function Pillars() {
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow mx-auto">Why our honey is different</span>
          <h2 className="mt-4 h-section">
            Purity you can taste, quality you can trust
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-honey/25 bg-card p-6 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-honey-soft text-honey">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-3.5 font-heading text-base font-semibold">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoneyBanner() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/honey-pour.jpeg"
          alt="Golden honey pouring"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bark/75" />
      </div>
      <div className="container-x text-center">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-heading text-2xl font-semibold italic text-white sm:text-3xl">
            &ldquo;Where orchards bloom and honey flows&rdquo;
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-white/80">
            Pure natural honey, bee pollen, beeswax, propolis and royal jelly -
            straight from the Mau to you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function HoneyBees() {
  return (
    <>
    <SEO
  title="Pure Honey, Beeswax & Beekeeping"
  description="Discover premium natural honey, bee pollen, beeswax, propolis and professional beekeeping services from Trans Mau Farms. We also provide apiary establishment and management training."
  url="/honey-bees"
  image="/images/honey-hero.jpeg"
/>
      <PageHero
        eyebrow="Beekeeping and Honey Production"
        title="Honey as pure as the"
        highlight="Mau itself"
        subtitle="Natural honey and premium bee products, plus quality hives, equipment and technical guidance for every beekeeper."
        image="/images/beekeeper-honey.jpeg"
        crumbs={["Honey and Bees"]}
      />
      <Pillars />
      <BeekeepingSection />
      <HoneyBanner />
      <CtaBand
        title="Order honey and bee products"
        subtitle="Retail, wholesale or export, get in touch for pricing and availability."
        secondaryLabel="Start Beekeeping"
        secondaryTo="/training-visits"
      />
    </>
  );
}
