import TeamHeroSection from "./intro";
import TeamIntroSection from "./title";
import TeamMembersSection from "./team-members";
import JoinTeamSection from "./JoinTeam";
import Navbar from "../components/Navbar";
import { TeamBottomStrip } from "./bottomstrip";
export default function TeamPage() {
  return (
       <main>
        <Navbar/>
        <div className="h-[180px] xl:h-[213px]" />
      <TeamHeroSection />
      <TeamBottomStrip/>
      <TeamIntroSection/>
      <TeamMembersSection/>
      <JoinTeamSection/>
    </main>
  );
}