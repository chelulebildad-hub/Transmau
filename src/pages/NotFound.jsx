import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-sand px-6 pt-24">
      <div className="text-center">
        <p className="font-heading text-6xl font-semibold text-forest">404</p>
        <h1 className="mt-3 font-heading text-xl font-semibold">
          This field is fallow
        </h1>
        <p className="mx-auto mt-2.5 max-w-sm text-base text-taupe">
          The page you're looking for doesn't exist, but there's plenty growing
          back home.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" /> Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}
