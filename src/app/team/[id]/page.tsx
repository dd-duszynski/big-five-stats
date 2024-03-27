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
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <p>{teamInfo.team.name}</p>
      <p>{teamStatistics.league?.name || ''}</p>
    </div>
  );
}
