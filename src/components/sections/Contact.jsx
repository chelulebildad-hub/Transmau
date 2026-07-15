import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const specializations = [
  "Fruit Seedlings",
  "Commercial Orchards",
  "Beekeeping",
  "Honey and Bee Products",
  "Bee Hives",
  "Super Napier Pakchong",
  "Farmer Training",
  "Agritourism and Farm Visits",
];

export function Contact() {
  return (
    <section className="section bg-sand">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl border border-stone bg-card shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="bg-forest-deep p-7 text-white lg:p-10">
              <Reveal>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-honey">
                  Get in Touch
                </span>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
                  Let's grow something lasting
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  Whether you're planting your first tree, establishing a
                  commercial orchard, starting a vineyard or venturing into
                  beekeeping, we're ready to help you succeed.
                </p>

                <div className="mt-7 space-y-3">
                  <a
                    href="tel:+254722358564"
                    className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4.5 w-4.5 text-honey" strokeWidth={1.75} />
                    <div>
                      <div className="text-[0.7rem] uppercase tracking-wide text-white/50">
                        Call / WhatsApp
                      </div>
                      <div className="text-base font-semibold">
                        +254 722 358 564
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@transmaufarms.com"
                    className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                  >
                    <Mail className="h-4.5 w-4.5 text-honey" strokeWidth={1.75} />
                    <div>
                      <div className="text-[0.7rem] uppercase tracking-wide text-white/50">
                        Email
                      </div>
                      <div className="text-base font-semibold">
                        info@transmaufarms.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <MapPin className="h-4.5 w-4.5 text-honey" strokeWidth={1.75} />
                    <div>
                      <div className="text-[0.7rem] uppercase tracking-wide text-white/50">
                        Location
                      </div>
                      <div className="text-base font-semibold">
                        Olenguruone, Nakuru County, Kenya
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form side */}
            <div className="p-7 lg:p-10">
              <Reveal delay={100}>
                <h3 className="font-heading text-lg font-semibold text-bark">
                  Send us a message
                </h3>
                <p className="mt-1 text-sm text-taupe">
                  Tell us what you need and we'll get back to you.
                </p>

                <form
                  className="mt-5 space-y-3.5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <Field label="Full name" placeholder="Jane Wanjiru" />
                    <Field label="Phone" placeholder="+254 7xx xxx xxx" type="tel" />
                  </div>
                  <Field label="Email" placeholder="you@email.com" type="email" />
                  <div>
                    <Label>I'm interested in</Label>
                    <select className="h-10 w-full rounded-lg border border-stone bg-sand px-3 text-sm text-bark outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-forest/15">
                      {specializations.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label>Message</Label>
                    <textarea
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full rounded-lg border border-stone bg-sand px-3 py-2.5 text-sm text-bark outline-none transition-colors placeholder:text-taupe/60 focus:border-forest focus:ring-2 focus:ring-forest/15"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4" /> Send message
                  </Button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-bark">
      {children}
    </label>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="h-10 w-full rounded-lg border border-stone bg-sand px-3 text-sm text-bark outline-none transition-colors placeholder:text-taupe/60 focus:border-forest focus:ring-2 focus:ring-forest/15"
      />
    </div>
  );
}
