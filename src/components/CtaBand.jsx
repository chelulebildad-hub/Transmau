import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  title = "Ready to grow with us?",
  subtitle = "From your first seedling to a thriving orchard or apiary, we're your partner every step of the way.",
  primaryLabel = "Get in touch",
  primaryTo = "/contact",
  secondaryLabel = "Plan a farm visit",
  secondaryTo = "/training-visits",
}) {
  return (
    <section className="bg-sand py-16">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-forest-deep px-6 py-12 text-center lg:px-14">
          <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-honey/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-8 h-48 w-48 rounded-full bg-leaf/25 blur-3xl" />

          <h2 className="relative mx-auto max-w-xl font-heading text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-base leading-relaxed text-white/75">
            {subtitle}
          </p>
          <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="honey" size="lg">
              <Link to={primaryTo} className="inline-flex items-center gap-2">
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-transparent text-white hover:bg-white hover:text-forest-deep"
            >
              <Link to={secondaryTo}>{secondaryLabel}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
