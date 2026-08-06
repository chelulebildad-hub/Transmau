import SEO from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/reveal";

const gallery = [
  { src: "/images/real-avocado-tree.jpeg", label: "Hass Avocado", span: "row-span-2" },
  { src: "/images/fruits.png", label: "Citrus, Navel and Pixie", span: "" },
  { src: "/images/vineyard-grapes.jpeg", label: "Vineyard and Grapes", span: "" },
  { src: "/images/apple-orchard.jpeg", label: "Apple Orchards", span: "col-span-2" },
  { src: "/images/pears.jpeg", label: "Pears and Stone Fruit", span: "" },
  { src: "/images/real-young-tree.jpeg", label: "Young Trees Established", span: "" },
];

function Gallery() {
  return (
    <section className="section bg-linen">
      <div className="container-x">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow mx-auto">In the Field</span>
          <h2 className="mt-4 h-section">A closer look at what we grow</h2>
          <p className="mx-auto mt-3 max-w-md text-taupe">
            Healthy, high-quality fruit produced with modern, sustainable
            practices, and models you can replicate on your own farm.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3.5 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal
              key={g.label}
              delay={i * 60}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/70 to-transparent" />
              <span className="absolute bottom-3.5 left-3.5 font-heading text-sm font-semibold text-white">
                {g.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Orchards() {
  return (
    <>
    <SEO
  title="Commercial Fruit Orchards in Kenya"
  description="Explore Trans Mau Farms' commercial fruit orchards in Olenguruone, Nakuru County. We grow Hass avocados, apples, citrus, grapes and other fruits using sustainable farming practices for high productivity and quality."
  url="/orchards"
  image="/images/orchard-apples-hero.jpeg"
/>
      <PageHero
        eyebrow="Commercial Fruit Production"
        title="Working orchards that"
        highlight="teach as they produce"
        subtitle="Production and demonstration in one, showcasing profitable, sustainable fruit-farming models at the edge of the Mau."
        image="/images/orchard-wide.jpeg"
        crumbs={["Orchards"]}
      />
      <Gallery />
      <CtaBand
        title="Establish your own orchard"
        subtitle="From seedling selection to orchard management, we'll help you build a productive, profitable orchard."
        primaryLabel="Talk to Us"
        secondaryLabel="Browse Seedlings"
        secondaryTo="/seedlings"
      />
    </>
  );
}
