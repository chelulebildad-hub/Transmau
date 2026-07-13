import { PageHero } from "@/components/PageHero";
import { About as AboutSection } from "@/components/sections/About";
import { Environment } from "@/components/sections/Environment";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBand } from "@/components/CtaBand";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A partner in your"
        highlight="agricultural success"
        subtitle="Established in 2024 at the edge of the Mau Forest, turning agriculture into a profitable, sustainable enterprise for farmers, investors and communities."
        image="/images/orchard-apples-hero.jpeg"
        crumbs={["About"]}
      />
      <AboutSection />
      <Environment />
      <WhyUs />
      <CtaBand
        title="Come see it for yourself"
        subtitle="Tour our orchards, nurseries and apiaries and experience agriculture at the edge of the Mau."
      />
    </>
  );
}
