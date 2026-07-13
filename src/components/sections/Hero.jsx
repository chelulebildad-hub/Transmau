import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Fruit varieties" },
  { value: "6", label: "Bee products" },
  { value: "2024", label: "Established" },
];

const slides = [
  { src: "/images/orchard-apples-hero.jpeg", alt: "Apple orchard laden with fruit" },
  { src: "/images/hero-orchard-mau.jpeg", alt: "Citrus orchard at the edge of the Mau Forest" },
  { src: "/images/highland-landscape.jpeg", alt: "Green highland farm landscape" },
  { src: "/images/apiary-meadow.jpeg", alt: "Beehives in a flowering meadow" },
  { src: "/images/grapes-vine.jpeg", alt: "Ripe grapes on the vine" },
  { src: "/images/seedling-nursery.jpeg", alt: "Fruit seedling nursery" },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      10000 // change image every 10 seconds
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            aria-hidden={i !== active}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-bark/55 via-bark/35 to-bark/70" />
        <div className="absolute inset-0 bg-bark/25" />
      </div>

      <div className="container-x flex min-h-[92vh] flex-col items-center justify-center pt-24 pb-16 text-center">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Where orchards bloom
            <br />
            and <span className="italic text-honey">honey flows</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Premium fruit seedlings, commercial orchards and pure natural honey,
            grown sustainably on fertile volcanic soils at the edge of East
            Africa's great water tower. Export-ready quality, rooted in Kenya.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="honey" size="lg" className="h-13 px-8 text-base">
              <Link to="/seedlings" className="inline-flex items-center gap-2">
                Explore our products <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-13 border border-white/40 bg-white/10 px-8 text-base text-white backdrop-blur hover:bg-white hover:text-bark"
            >
              <Link to="/training-visits">Visit the farm</Link>
            </Button>
          </div>

          <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-12 flex items-center justify-center gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-honey" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
