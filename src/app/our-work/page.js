import OurWorkHero from "./intro";
import Navbar from "../components/Navbar";
import WorkTitleSection from "./title";
import WorkShowcase from "./our-work-section";
import WorkCTA from "./our-work-bottom";

export default function AIServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[120px] xl:pt-[213px]">
       <OurWorkHero/>
       <WorkTitleSection/>
       <WorkShowcase/>
        <WorkCTA/>
      </main>
    </>
  );
}