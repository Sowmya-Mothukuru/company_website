import AiServices from "./AiSection";
import AIStrategySection from "./AIStrategySection";
import GenerativeAi from "./GenerativeAi";
import AdvancedAnalytics from "./AdvancedAnalytics";
import IntelligenceAuto from "./IntelligentAutomation";
import Aimodel from "./Aimodel";
import AiSecurity from "./AiSecurity";

export default function AIServicesPage() {
  return (
    <main>
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