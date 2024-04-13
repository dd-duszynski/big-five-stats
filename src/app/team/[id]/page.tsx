import { LeagueCrest, Stadium } from '@/components';
import { leagueIdForTeam } from '@/enums/league';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse } from '@/models/Standings.model';
import { TeamResponse } from '@/models/Team.model';
import { TeamStatisticsResponse } from '@/models/TeamStatistics.model copy';

async function getData(teamId: string) {
  const teamInfo = await fetchAPISports<APIResponse<TeamResponse[]>>(
    `teams?id=${teamId}`
  );
  const leagueId = leagueIdForTeam(Number(teamId));
  const teamStatistics = await fetchAPISports<
    APIResponse<TeamStatisticsResponse>
  >(`teams/statistics?season=2023&team=${teamId}&league=${leagueId}`);
  return {
    teamInfo,
    teamStatistics,
  };
}

// export const metadata: Metadata = {
//   title: 'Big Five',
//   description: 'Football stats for the big five leagues.',
// };

export default async function TeamPage({ params }: any) {
  const data = await getData(params.id);
  const teamInfo = data.teamInfo?.response[0];
  const teamStatistics = data.teamStatistics?.response;

  if (!teamInfo || !teamStatistics) return <div>loading...</div>;

  return (
    <div>
      <LeagueCrest
        country={teamStatistics.league.country}
        flag={teamStatistics.league.flag}
        logo={teamStatistics.team.logo}
        name={teamStatistics.team.name}
      />
      <Stadium
        name={teamInfo.venue.name}
        address={teamInfo.venue.address}
        city={teamInfo.venue.city}
        capacity={teamInfo.venue.capacity}
        image={teamInfo.venue.image}
      />
    </div>
  );
}
