import { PageHero } from "@/components/PageHero";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/reveal";
import { Clock, MapPin } from "lucide-react";

function MapStrip() {
  return (
    <section className="section bg-sand pt-0">
      <div className="container-x grid gap-5 lg:grid-cols-[2fr_1fr]">
        <Reveal className="overflow-hidden rounded-2xl border border-stone shadow-card">
          <iframe
            title="Trans Mau Orchards and Honey location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=35.6%2C-0.65%2C35.85%2C-0.5&layer=mapnik&marker=-0.6%2C35.73"
            className="h-[340px] w-full"
            loading="lazy"
          />
        </Reveal>
        <div className="space-y-5">
          <Reveal>
            <div className="rounded-2xl border border-stone bg-card p-5 shadow-soft">
              <MapPin className="h-6 w-6 text-forest" strokeWidth={1.75} />
              <h3 className="mt-2.5 font-heading text-base font-semibold">
                Find Us
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                Olenguruone, Nakuru County, in the highlands at the edge of the
                Mau Forest Complex, Kenya.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="rounded-2xl border border-stone bg-card p-5 shadow-soft">
              <Clock className="h-6 w-6 text-forest" strokeWidth={1.75} />
              <h3 className="mt-2.5 font-heading text-base font-semibold">
                Visiting Hours
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-taupe">
                <li className="flex justify-between">
                  <span>Mon to Fri</span>
                  <span className="font-medium text-bark">8:00 to 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-bark">8:00 to 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-bark">By appointment</span>
                </li>
              </ul>
              <p className="mt-2.5 text-xs italic text-taupe/80">
                Farm visits are best booked in advance.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's grow something"
        highlight="lasting together"
        subtitle="Questions, orders, training or a farm visit, reach out and our team will be glad to help."
        image="/images/real-delivery-car.jpeg"
        crumbs={["Contact"]}
      />
      <ContactSection />
      <MapStrip />
    </>
  );
}
