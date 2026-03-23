import ContactCard from "./Contact";
import ContactUs from "./Intro";
import Address from "./Contact-us"
import Navbar from "../components/Navbar";
export default function ContactUsPage() {
  return (
    <main>
      <Navbar/>
      <div className="h-[180px] xl:h-[213px]" />
      <ContactUs/>
      <section className="bg-[#F8FBFF] w-full py-20">
  <ContactCard />
</section>
<Address/>
    </main>
  );
}