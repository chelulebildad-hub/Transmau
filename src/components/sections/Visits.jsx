import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { TreePine, FlaskConical, Users, Sprout } from "lucide-react";

const activities = [
  { icon: Sprout, label: "Tour fruit orchards and nurseries" },
  { icon: TreePine, label: "Explore bee apiaries" },
  { icon: FlaskConical, label: "Practical demonstrations" },
  { icon: Users, label: "Network with farmers and investors" },
];

const audience = [
  "Farmers",
  "Schools and colleges",
  "Universities",
  "Agricultural institutions",
  "Farmer groups and cooperatives",
  "NGOs",
  "Investors",
  "Families and agritourism",
];

export function Visits() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/farm-visit-group.jpeg"
          alt="Group visiting the farm fields"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/95 to-bark/90" />
      </div>

      <div className="container-x grid gap-9 lg:grid-cols-2 lg:items-center">
        <Reveal className="text-white">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-honey">
            Organized Farm Visits
          </span>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Experience agriculture in one of Kenya's most beautiful landscapes
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-white/80">
            Visitors leave inspired, informed and better equipped to pursue
            agricultural opportunities. Come see nature, knowledge and innovation
            work together at the edge of the Mau.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {activities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur"
              >
                <a.icon className="h-4.5 w-4.5 shrink-0 text-honey" strokeWidth={1.75} />
                <span className="text-sm font-medium text-white">
                  {a.label}
                </span>
              </div>
            ))}
          </div>

          <Button asChild variant="honey" size="lg" className="mt-6">
            <Link to="/contact">Plan your visit</Link>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl bg-sand/95 p-6 shadow-glow backdrop-blur">
            <h3 className="font-heading text-lg font-semibold text-bark">
              Who our visits are for
            </h3>
            <p className="mt-1 text-sm text-taupe">
              Suitable for a wide range of learners and partners:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {audience.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2 text-sm font-medium text-bark"
                >
                  <span className="h-1 w-1 rounded-full bg-forest" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
