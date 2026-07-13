import { Reveal } from "@/components/ui/reveal";
import { Target, Compass } from "lucide-react";

const values = [
  "Excellence",
  "Integrity",
  "Sustainability",
  "Innovation",
  "Farmer Empowerment",
  "Customer Satisfaction",
];

export function About() {
  return (
    <section className="section bg-sand">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src="/images/highland-landscape.jpeg"
              alt="Green highland farm landscape"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden max-w-[220px] rounded-2xl bg-forest-deep p-5 text-white shadow-glow sm:block">
            <p className="font-heading text-base font-medium italic leading-snug">
              &ldquo;Plant today, harvest prosperity tomorrow.&rdquo;
            </p>
            <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-honey">
              Our promise
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 h-section">
              A fast-growing agribusiness at the edge of the{" "}
              <span className="text-forest">Mau Forest</span>
            </h2>
            <p className="mt-3.5 text-taupe">
              Established in 2024 in the scenic highlands of Olenguruone, Nakuru
              County, beside one of East Africa's most important water towers.
              Fertile volcanic soils, abundant rainfall, cool temperatures and
              clean water let us produce healthy, vigorous seedlings, fruits and
              honey while farming sustainably.
            </p>
            <p className="mt-3 text-taupe">
              We exist to transform agriculture into a profitable, sustainable
              enterprise for farmers, investors and communities, and to serve as
              a centre of excellence for training, innovation and agribusiness
              development.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-stone bg-card p-5 shadow-soft">
                <Target className="h-5 w-5 text-forest" strokeWidth={1.75} />
                <h3 className="mt-2.5 font-heading text-base font-semibold">
                  Our Mission
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                  Superior seedlings, quality bee products, practical training and
                  sustainable solutions that maximise farmer profitability.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl border border-stone bg-card p-5 shadow-soft">
                <Compass className="h-5 w-5 text-forest" strokeWidth={1.75} />
                <h3 className="mt-2.5 font-heading text-base font-semibold">
                  Our Vision
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                  To become the leading orchard, nursery, beekeeping and
                  agribusiness development centre in Kenya and Africa.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-taupe">
              Our Core Values
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {values.map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-forest-soft px-3 py-1 text-sm font-medium text-forest"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
