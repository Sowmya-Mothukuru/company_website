import TeamHeroSection from "./intro";
import TeamIntroSection from "./title";
import TeamMembersSection from "./team-members";
import JoinTeamSection from "./JoinTeam";
export default function TeamPage() {
  return (
    <main>
      <TeamHeroSection />
      <TeamIntroSection/>
      <TeamMembersSection/>
      <JoinTeamSection/>
    </main>
  );
}