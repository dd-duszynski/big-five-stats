import { Stadium, TeamPlayers } from '@/components';
import {
  Breadcrumbs,
  BreadcrumbsItem,
} from '@/components/breadcrumbs/breadcrumbs';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import LeagueTable from '@/components/league-table/league-table';
import { PageHeader } from '@/components/page-header/page-header';
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
  console.log('teamStatistics:', teamStatistics);
  const standings = await fetchAPISports<APIResponse<StandingsResponse[]>>(
    `standings?league=${leagueId}&season=2023`
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

  if (!teamInfo || !teamStatistics || !teamSquad || !standings)
    return <div>loading...</div>;

  const breadcrumbs: BreadcrumbsItem[] = [
    {
      link: `/`,
      text: 'Home',
      showSeparator: true,
    },
    {
      link: `/league/${teamStatistics.league.id}`,
      text: teamStatistics.league.name,
      showSeparator: true,
    },
    {
      link: '',
      text: teamStatistics.team.name,
      showSeparator: false,
    },
  ];

  return (
    <div className="h-full w-full">
      <PageHeader
        logo={teamStatistics.team.logo}
        logoSize="lg"
        subLogo={teamStatistics.league.flag}
        subtitle={`${teamStatistics.league.name} - ${teamStatistics.league.country}`}
        title={teamStatistics.team.name}
      />
      <div className="px-8">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="mb-2 text-indigo-950"
        />
        <LeagueTable
          columns={standingsColumns}
          data={standings.league.standings[0]}
          teamToHighlight={teamStatistics.team.id}
        />
        <TeamPlayers players={teamSquad.players} />
        <Stadium
          name={teamInfo.venue.name}
          address={teamInfo.venue.address}
          city={teamInfo.venue.city}
          capacity={teamInfo.venue.capacity}
          image={teamInfo.venue.image}
        />
      </div>
    </div>
  );
}
