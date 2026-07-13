import { Reveal } from "@/components/ui/reveal";

export function Orchards() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-orchard-mau.jpeg"
          alt="Commercial fruit orchard"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bark/80" />
      </div>

      <div className="container-x">
        <Reveal className="max-w-xl text-white">
          <h2 className="font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Production and demonstration, side by side
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-white/80">
            Our commercial orchards serve both production and demonstration -
            showcasing modern fruit farming so farmers and investors can observe
            practical establishment and management techniques, then replicate
            profitable, sustainable models across the region.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Demonstration", v: "See modern orchard practices in the field" },
            { k: "High-quality fruit", v: "Healthy, market-grade produce" },
            { k: "Replicable models", v: "Profitable systems you can copy" },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 80}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white backdrop-blur">
                <div className="font-heading text-base font-semibold text-honey">
                  {c.k}
                </div>
                <p className="mt-1.5 text-sm text-white/75">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
