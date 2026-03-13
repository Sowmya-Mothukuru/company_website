import SoftwareServices from "./sofware-service-section";
import CustomSoftware from "./custom-software";
import ProductEng from "./product-eng";
import CloudEng from "./cloud-eng";
import UiUx from "./ui-ux";
import DataEng from "./data-eng";
import DigitalTrans from "./digital-tarns";

export default function ServicesPage() {
  return (
    <main>
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