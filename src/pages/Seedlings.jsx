import SEO from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Seedlings as SeedlingsSection } from "@/components/sections/Seedlings";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/reveal";
import { ShieldCheck, Sprout, TrendingUp, Check } from "lucide-react";

const quality = [
  {
    icon: Sprout,
    title: "Selected parent stock",
    desc: "Every seedling begins from carefully chosen, proven parent material.",
  },
  {
    icon: ShieldCheck,
    title: "Strict quality control",
    desc: "Nurtured for strong roots, healthy growth and disease resistance.",
  },
  {
    icon: TrendingUp,
    title: "Optimal field performance",
    desc: "Vigorous, productive seedlings built for high yields and long-term profit.",
  },
];

const napierBenefits = [
  "Exceptional biomass production",
  "High nutritional value",
  "Improved milk yields",
  "Reduced feed costs",
  "Good drought tolerance",
  "Ideal for cut-and-carry systems",
];

function Napier() {
  return (
    <section className="section bg-sand">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Super Napier Pakchong</span>
          <h2 className="mt-4 h-section">
            Quality fodder for{" "}
            <span className="text-forest">dairy and livestock</span>
          </h2>
          <p className="mt-3.5 text-taupe">
            Recognising the importance of livestock farming in Kenya, we produce
            and supply high-performing Super Napier Pakchong, one of the most
            valuable fodder options for dairy and livestock farmers.
          </p>
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {napierBenefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-bark">
                <Check className="h-3.5 w-3.5 shrink-0 text-forest" strokeWidth={2.5} />
                <span className="font-medium">{b}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <img
            src="/images/napier-fodder.jpeg"
            alt="Super Napier Pakchong fodder grass"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default function Seedlings() {
  return (
    <>
     <SEO
        title="Certified Fruit Seedlings in Kenya"
        description="Buy certified disease-free Hass avocado, Fuerte avocado, Wambugu apple, Washington Navel orange, Pixie orange, grape, passion fruit, lemon, guava, pear, plum, peach and other premium fruit seedlings from Trans Mau Farms in Olenguruone, Nakuru County. Healthy planting materials for productive orchards across Kenya."
        url="/seedlings"
        image="/images/real-seedlings-bench.jpeg"
      />
      <PageHero
        eyebrow="Premium Fruit Seedlings"
        title="Strong seedlings,"
        highlight="stronger orchards"
        subtitle="Professionally propagated planting materials engineered for vigour, disease resistance and profitable field performance."
        image="/images/real-seedlings-bench.jpeg"
        crumbs={["Seedlings"]}
      />

      {/* Quality assurance strip */}
      <section className="section bg-sand">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-3">
            {quality.map((q, i) => (
              <Reveal key={q.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-stone bg-card p-6 shadow-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-forest-soft text-forest">
                    <q.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-3.5 font-heading text-base font-semibold">
                    {q.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                    {q.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SeedlingsSection />
      <Napier />
      <CtaBand
        title="Order seedlings for your farm"
        subtitle="Tell us the varieties and quantities you need, we'll help you plan a productive, profitable orchard."
        secondaryLabel="See Our Orchards"
        secondaryTo="/orchards"
      />
    </>
  );
}
