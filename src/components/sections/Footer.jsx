import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const cols = [
  {
    title: "Explore",
    links: [
      ["Fruit Seedlings", "/seedlings"],
      ["Commercial Orchards", "/orchards"],
      ["Honey and Bee Products", "/honey-bees"],
      ["Training and Visits", "/training-visits"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Why Choose Us", "/about"],
      ["Farm Visits", "/training-visits"],
      ["Contact", "/contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-bark text-sand/90">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_2fr_1.2fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/logo.jpeg"
              alt="Trans Mau Orchards and Honey"
              className="h-10 w-10 rounded-lg bg-white object-contain p-px"
            />
            <div className="leading-none">
              <div className="font-heading text-sm font-semibold text-white">
                Trans Mau
              </div>
              <div className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-honey">
                Orchards and Honey
              </div>
            </div>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/60">
            A sustainable agribusiness at the edge of the Mau Forest, premium
            seedlings, fruit, honey and bee products, and practical farmer
            training.
          </p>
          <p className="mt-4 font-heading text-sm italic text-honey">
            &ldquo;Plant today, harvest prosperity tomorrow.&rdquo;
          </p>
        </div>

        {/* Explore + Company as two side-by-side columns */}
        <div className="grid grid-cols-2 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sand/50">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-sand/75 transition-colors hover:text-honey"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sand/50">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-sand/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              Olenguruone, Nakuru County, Kenya
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-honey" />
              <a href="tel:+254722358564" className="hover:text-honey">
                +254 722 358 564
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-honey" />
              <a href="mailto:info@transmaufarms.com" className="hover:text-honey">
                info@transmaufarms.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-sand/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Trans Mau Orchards and Honey. All
            rights reserved.
          </p>
          <p>Where orchards bloom and honey flows.</p>
        </div>
      </div>
    </footer>
  );
}
