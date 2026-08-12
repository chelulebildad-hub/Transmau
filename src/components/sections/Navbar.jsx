import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Why Choose Us", to: "/about#why-us" },
  { label: "Contact", to: "/contact" },
  { label: "Honey and Bees", to: "/honey-bees" },
  { label: "Training and Visits", to: "/training-visits" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/about" && !window.location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (window.location.hash === "#why-us") {
      const timer = setTimeout(() => {
        const element = document.getElementById("why-us");

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleAbout = (event) => {
    event.preventDefault();
    setOpen(false);

    if (pathname === "/about") {
      window.history.replaceState(null, "", "/about");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/about");
    }
  };

  const handleWhyChooseUs = (event) => {
    event.preventDefault();
    setOpen(false);

    if (pathname !== "/about") {
      navigate("/about#why-us");
    } else {
      window.history.pushState(null, "", "/about#why-us");

      const element = document.getElementById("why-us");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

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
    <Link
  to="/"
  className="flex h-20 w-36 items-center justify-center overflow-hidden"
>
  <img
    src="/images/logo.jpeg"
    alt="Trans Mau Orchards & Honey"
    className="h-[155%] w-[155%] object-contain"
  />
</Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) =>
            l.label === "About" ? (
              <button
                key={l.to}
                type="button"
                onClick={handleAbout}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  pathname === "/about"
                    ? solid
                      ? "text-forest"
                      : "text-honey"
                    : solid
                    ? "text-taupe hover:text-forest"
                    : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </button>
            ) : l.label === "Why Choose Us" ? (
              <button
                key={l.to}
                type="button"
                onClick={handleWhyChooseUs}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  solid
                    ? "text-taupe hover:text-forest"
                    : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </button>
            ) : (
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
            )
          )}
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

      <div
        className={cn(
          "overflow-hidden border-t border-stone bg-sand transition-all duration-300 lg:hidden",
          open ? "max-h-[24rem]" : "max-h-0"
        )}
      >
        <div className="container-x flex flex-col gap-0.5 py-3">
          {links.map((l) =>
            l.label === "About" ? (
              <button
                key={l.to}
                type="button"
                onClick={handleAbout}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-bark hover:bg-linen"
              >
                {l.label}
              </button>
            ) : l.label === "Why Choose Us" ? (
              <button
                key={l.to}
                type="button"
                onClick={handleWhyChooseUs}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-bark hover:bg-linen"
              >
                {l.label}
              </button>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    isActive
                      ? "bg-forest-soft text-forest"
                      : "text-bark hover:bg-linen"
                  )
                }
              >
                {l.label}
              </NavLink>
            )
          )}

          <Button asChild className="mt-2">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
