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