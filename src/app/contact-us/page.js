import ContactCard from "./Contact";
import ContactUs from "./Intro";
import Address from "./Map";
export default function ContactUsPage() {
  return (
    <main>
      <ContactUs/>
      <section className="bg-[#D4D4D4] w-full py-20">
  <ContactCard />
</section>
<Address/>
    </main>
  );
}