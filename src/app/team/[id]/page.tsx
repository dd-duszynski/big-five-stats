import { DataTable, LeagueCrest, Stadium, TeamPlayers } from '@/components';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import { leagueIdForTeam } from '@/enums/league';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse, StandingsResponse } from '@/models/Standings.model';
import { TeamResponse } from '@/models/Team.model';
import { TeamSquadResponse } from '@/models/TeamSquad.model';
import { TeamStatisticsResponse } from '@/models/TeamStatistics.model copy';
import { Metadata } from 'next';

async function getData(teamId: string) {
  const teamInfo = await fetchAPISports<APIResponse<TeamResponse[]>>(
    `teams?id=${teamId}`
  );
  const leagueId = leagueIdForTeam(Number(teamId));
  const teamStatistics = await fetchAPISports<
    APIResponse<TeamStatisticsResponse>
  >(`teams/statistics?season=2023&team=${teamId}&league=${leagueId}`);
  const teamSquad = await fetchAPISports<APIResponse<TeamSquadResponse[]>>(
    `players/squads?team=${teamId}`
  );
  const standings = await fetchAPISports<APIResponse<StandingsResponse[]>>(
    `standings?league=${teamStatistics?.response.league.id}&season=2023`
  );

  return {
    teamInfo,
    teamStatistics,
    teamSquad,
    standings,
  };
}

export const metadata: Metadata = {
  title: 'Big Five - Team Statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function TeamPage({ params }: any) {
  const data = await getData(params.id);
  const teamInfo = data.teamInfo?.response[0];
  const teamStatistics = data.teamStatistics?.response;
  const teamSquad = data.teamSquad?.response[0];
  const standings = data.standings?.response[0];

  if (!teamInfo || !teamStatistics || !teamSquad) return <div>loading...</div>;

  return (
    <div>
      <LeagueCrest
        flag={teamStatistics.league.flag}
        logo={teamStatistics.team.logo}
        logoSize="lg"
        subtitle={`${teamStatistics.league.name} - ${teamStatistics.league.country}`}
        title={teamStatistics.team.name}
      />
      {standings && (
        <DataTable
          columns={standingsColumns}
          data={standings.league.standings[0]}
          teamToHighlight={teamStatistics.team.id}
        />
      )}
      <Stadium
        name={teamInfo.venue.name}
        address={teamInfo.venue.address}
        city={teamInfo.venue.city}
        capacity={teamInfo.venue.capacity}
        image={teamInfo.venue.image}
      />
      <TeamPlayers players={teamSquad.players} />
    </div>
  );
}
