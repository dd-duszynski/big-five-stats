import { BreadcrumbsItemType, Loader, TeamPageComponent } from '@/components';
import { REVALIDATE_TIME } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api/api-response.model';
import { CoachType } from '@/lib/models/coach/coach.model';
import { StandingsResponseType } from '@/lib/models/standings/standings-response.model';
import { TeamResponseType } from '@/lib/models/team/team-response.model';
import { TeamSquadResponseType } from '@/lib/models/team/team-squad-response.model';
import { TeamStatisticsResponseType } from '@/lib/models/team/team-statistics-response.model';
import { strings } from '@/lib/strings';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { getLeagueIdForTeam } from '@/lib/utils/helpers/get-league-id-for-team';
import { Metadata } from 'next';

async function getData(teamId: string) {
  const leagueId = getLeagueIdForTeam(Number(teamId));
  const teamInfo = await fetchAPISports<APIResponseType<TeamResponseType[]>>(
    `teams?id=${teamId}`,
    { revalidate: REVALIDATE_TIME.ONE_DAY }
  );
  const teamStatistics = await fetchAPISports<
    APIResponseType<TeamStatisticsResponseType>
  >(`teams/statistics?season=2023&team=${teamId}&league=${leagueId}`, {
    revalidate: REVALIDATE_TIME.ONE_DAY,
  });
  const teamSquad = await fetchAPISports<
    APIResponseType<TeamSquadResponseType[]>
  >(`players/squads?team=${teamId}`, { revalidate: REVALIDATE_TIME.ONE_DAY });
  const standings = await fetchAPISports<
    APIResponseType<StandingsResponseType[]>
  >(`standings?league=${leagueId}&season=2023`, {
    revalidate: REVALIDATE_TIME.ONE_DAY,
  });
  const coach = await fetchAPISports<APIResponseType<CoachType[]>>(
    `coachs?team=${teamId}`,
    { revalidate: REVALIDATE_TIME.ONE_DAY }
  );

  return {
    coach,
    standings,
    teamInfo,
    teamSquad,
    teamStatistics,
  };
}

export const metadata: Metadata = {
  title: 'Big Five - Team Statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function TeamPage({ params }: any) {
  const { coach, standings, teamInfo, teamSquad, teamStatistics } =
    await getData(params.id);
  const teamInfoData = teamInfo?.response[0];
  const teamStatisticsData = teamStatistics?.response;
  const teamSquadData = teamSquad?.response[0];
  const standingsData = standings?.response[0];
  const coachData = coach?.response[0];

  if (
    !coachData ||
    !standingsData ||
    !teamInfoData ||
    !teamSquadData ||
    !teamStatisticsData
  ) {
    return <Loader />;
  }

  const breadcrumbs: BreadcrumbsItemType[] = [
    {
      link: `/`,
      text: strings.Home,
      showSeparator: true,
    },
    {
      link: `/league/${teamStatisticsData.league.id}`,
      text: teamStatisticsData.league.name,
      showSeparator: true,
    },
    {
      link: '',
      text: teamStatisticsData.team.name,
      showSeparator: false,
    },
  ];

  return (
    <TeamPageComponent
      breadcrumbs={breadcrumbs}
      coach={coachData}
      standings={standingsData}
      teamInfo={teamInfoData}
      teamSquad={teamSquadData}
      teamStatistics={teamStatisticsData}
    />
  );
}
