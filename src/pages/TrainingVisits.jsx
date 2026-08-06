import SEO from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Training } from "@/components/sections/Training";
import { Visits } from "@/components/sections/Visits";
import { CtaBand } from "@/components/CtaBand";

export default function TrainingVisits() {
  return (
    <>
    <SEO
  title="Farmer Training & Farm Visits"
  description="Visit Trans Mau Farms for practical training in fruit farming, orchard management, beekeeping, azolla production and sustainable agribusiness."
  url="/training-visits"
  image="/images/training-hero.jpeg"
/>
      <PageHero
        eyebrow="Training and Agritourism"
        title="Learn, tour and"
        highlight="grow with us"
        subtitle="Practical farmer training and organized farm visits, combining hands-on demonstration with the beauty of agriculture at the edge of the Mau."
        image="/images/visit-students.jpeg"
        crumbs={["Training and Visits"]}
      />
      <Training />
      <Visits />
      <CtaBand
        title="Book training or a farm visit"
        subtitle="Tell us your group size and interests and we'll tailor a session for you."
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
