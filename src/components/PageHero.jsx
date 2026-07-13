import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, highlight, subtitle, image, crumbs = [] }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/85 via-bark/70 to-bark/40" />
      </div>

      <div className="container-x flex min-h-[42vh] flex-col justify-center pt-28 pb-14">
        <nav className="mb-4 flex items-center gap-1.5 text-xs font-medium text-white/60">
          <Link to="/" className="transition-colors hover:text-honey">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              <span className="text-honey">{c}</span>
            </span>
          ))}
        </nav>

        {eyebrow && (
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-honey">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-2xl font-heading text-3xl font-semibold leading-[1.12] text-white sm:text-4xl">
          {title} {highlight && <span className="text-honey">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="mt-3.5 max-w-xl text-base leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
