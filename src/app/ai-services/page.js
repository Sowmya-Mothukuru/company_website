import AiServices from "./AiSection";
import AIStrategySection from "./AIStrategySection";
import GenerativeAi from "./GenerativeAi";
import AdvancedAnalytics from "./AdvancedAnalytics";
import IntelligenceAuto from "./IntelligentAutomation";
import Aimodel from "./Aimodel";
import AiSecurity from "./AiSecurity";
import Navbar from "../components/Navbar";

export default function AIServicesPage() {
  return (
    <main>
      <Navbar/>
<div className="h-[180px] xl:h-[213px]" />
      <AiServices />
      <AIStrategySection/>
      <GenerativeAi/>
      <AdvancedAnalytics/>
      <IntelligenceAuto/>
      <Aimodel/>
      <AiSecurity/>
    </main>
  );
}