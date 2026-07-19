import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Seedlings", to: "/seedlings" },
  { label: "Orchards", to: "/orchards" },
  { label: "Honey and Bees", to: "/honey-bees" },
  { label: "Training and Visits", to: "/training-visits" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onHome = pathname === "/";
  const solid = scrolled || !onHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-stone/70 bg-sand/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo.jpeg"
            alt="Trans Mau Orchards and Honey"
            className="h-14 w-14 rounded-lg bg-white object-contain p-px ring-1 ring-stone"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span
              className={cn(
                "font-heading text-sm font-semibold tracking-tight",
                solid ? "text-bark" : "text-white"
              )}
            >
              Trans Mau
            </span>
            <span
              className={cn(
                "mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.2em]",
                solid ? "text-forest" : "text-honey"
              )}
            >
              Orchards and Honey
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? solid
                      ? "text-forest"
                      : "text-honey"
                    : solid
                    ? "text-taupe hover:text-forest"
                    : "text-white/80 hover:text-white"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant={solid ? "primary" : "honey"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link to="/contact">Get in touch</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-lg border transition-colors lg:hidden",
              solid
                ? "border-stone bg-white text-bark"
                : "border-white/25 bg-white/10 text-white"
            )}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-stone bg-sand transition-all duration-300 lg:hidden",
          open ? "max-h-[24rem]" : "max-h-0"
        )}
      >
        <div className="container-x flex flex-col gap-0.5 py-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive ? "bg-forest-soft text-forest" : "text-bark hover:bg-linen"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="mt-2">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
