import Hero from "./components/Hero";
import AiServices from "./components/AiServices";
import SoftwareServices from "./components/SoftwareServices";
import IndustriesSection from "./components/Industries";
import Testimonials from "./components/Testimonials";
import SalonLanding from "./components/Showcase";
import ContactCard from "./components/ContactSection";
export default function Home() {
  return (
    <>
      <Hero />
      <AiServices />
      <SoftwareServices />
       <IndustriesSection />
       <Testimonials/>
       <SalonLanding/>
        {/* CONTACT + FOOTER SECTION */}
      {/*<section className="bg-[#D4D4D4] w-full py-20 px-6 md:px-10 lg:px-16
       xl:px-20 flex flex-col items-center gap-24">*/}
       <section className="bg-[#D4D4D4] w-full py-20">
  <ContactCard />
</section>
       
    </>
  );
}