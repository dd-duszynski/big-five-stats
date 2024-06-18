import { Stadium, TeamPlayers } from '@/components';
import {
  Breadcrumbs,
  BreadcrumbsItem,
} from '@/components/breadcrumbs/breadcrumbs';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import LeagueTable from '@/components/league-table/league-table';
import { PageHeader } from '@/components/page-header/page-header';
import { TeamCoach } from '@/components/team-coach/team-coach';
import { RevalidateTime } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api-response.model';
import { CoachType } from '@/lib/models/coach.model';
import { StandingsResponseType } from '@/lib/models/standings-response.model';
import { TeamResponseType } from '@/lib/models/team-response.model';
import { TeamSquadResponseType } from '@/lib/models/team-squad-response.model';
import { TeamStatisticsResponseType } from '@/lib/models/team-statistics-response.model';
import { strings } from '@/lib/strings/strings';
import { fetchAPISports } from '@/lib/utils/fetch-api-sports';
import { getLeagueIdForTeam } from '@/lib/utils/get-league-id-for-team';
import { getQueryClient } from '@/lib/utils/get-query-client';
import { pokemonOptions } from '@/lib/utils/top-scorers-query';
import { Metadata } from 'next';

async function getData(teamId: string) {
  const leagueId = getLeagueIdForTeam(Number(teamId));
  const teamInfo = await fetchAPISports<APIResponseType<TeamResponseType[]>>(
    `teams?id=${teamId}`,
    { revalidate: RevalidateTime.ONE_DAY }
  );
  const teamStatistics = await fetchAPISports<
    APIResponseType<TeamStatisticsResponseType>
  >(`teams/statistics?season=2023&team=${teamId}&league=${leagueId}`, {
    revalidate: RevalidateTime.ONE_DAY,
  });
  const teamSquad = await fetchAPISports<
    APIResponseType<TeamSquadResponseType[]>
  >(`players/squads?team=${teamId}`, { revalidate: RevalidateTime.ONE_DAY });
  const standings = await fetchAPISports<
    APIResponseType<StandingsResponseType[]>
  >(`standings?league=${leagueId}&season=2023`, {
    revalidate: RevalidateTime.ONE_DAY,
  });
  const coach = await fetchAPISports<APIResponseType<CoachType[]>>(
    `coachs?team=${teamId}`,
    { revalidate: RevalidateTime.ONE_DAY }
  );

  return {
    teamInfo,
    teamStatistics,
    teamSquad,
    standings,
    coach,
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
  const coach = data.coach?.response[0];

  if (!teamInfo || !teamStatistics || !teamSquad || !standings || !coach) {
    /* TODO_DD: loader component */
    return <div>{strings.Loading}</div>;
  }

  const breadcrumbs: BreadcrumbsItem[] = [
    {
      link: `/`,
      text: strings.Home,
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
        <TeamCoach coach={coach} />
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
