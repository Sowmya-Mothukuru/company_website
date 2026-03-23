import SoftwareServices from "./sofware-service-section";
import CustomSoftware from "./custom-software";
import ProductEng from "./product-eng";
import CloudEng from "./cloud-eng";
import UiUx from "./ui-ux";
import DataEng from "./data-eng";
import DigitalTrans from "./digital-tarns";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  return (
    <main>
      <Navbar/>
      <div className="h-[180px] xl:h-[213px]" />
      <SoftwareServices/>
      <CustomSoftware/>
      <ProductEng/>
      <CloudEng/>
      <UiUx/>
      <DataEng/>
      <DigitalTrans/>
    </main>
  );
}