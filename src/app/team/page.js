import TeamHeroSection from "./intro";
import TeamIntroSection from "./title";
import TeamMembersSection from "./team-members";
import JoinTeamSection from "./JoinTeam";
import Navbar from "../components/Navbar";
export default function TeamPage() {
  return (
       <main>
        <Navbar/>
      <TeamHeroSection />
      <TeamIntroSection/>
      <TeamMembersSection/>
      <JoinTeamSection/>
    </main>
  );
}