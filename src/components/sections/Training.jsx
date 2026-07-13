import { Reveal } from "@/components/ui/reveal";

const topics = [
  "Orchard establishment and management",
  "Avocado farming",
  "Citrus production",
  "Apple farming",
  "Vineyard and grape production",
  "Beekeeping and honey production",
  "Nursery management",
  "Fodder production",
  "Sustainable and climate-smart farming",
  "Agribusiness management",
  "Farm profitability and value addition",
];

export function Training() {
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow mx-auto">Training and Development</span>
          <h2 className="mt-4 h-section">
            Building the next generation of{" "}
            <span className="text-forest">successful farmers</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-taupe">
            Practical training that combines theory with hands-on demonstration -
            so you leave with skills you can apply immediately.
          </p>
        </Reveal>

        <div className="mx-auto mt-9 grid max-w-3xl gap-2.5 sm:grid-cols-2">
          {topics.map((t, i) => (
            <Reveal key={t} delay={i * 35}>
              <div className="flex items-center gap-3.5 rounded-xl border border-stone bg-card p-3.5 shadow-soft transition-colors hover:border-forest/30">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-forest-soft font-heading text-sm font-semibold text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-bark">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
