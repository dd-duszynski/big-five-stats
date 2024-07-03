import { Breadcrumbs, Stadium, TeamPlayers } from '@/components';
import { CoachType } from '@/lib/models/coach.model';
import { StandingsResponseType } from '@/lib/models/standings-response.model';
import { TeamResponseType } from '@/lib/models/team-response.model';
import { TeamSquadResponseType } from '@/lib/models/team-squad-response.model';
import { TeamStatisticsResponseType } from '@/lib/models/team-statistics-response.model';
import { BreadcrumbsItem } from '../breadcrumbs/breadcrumbs';
import { standingsColumns } from '../data-table/columns/standings-columns';
import LeagueTable from '../league-table/league-table';
import { PageHeader } from '../page-header/page-header';
import { TeamCoach } from '../team-coach/team-coach';

type TeamPageComponentProps = {
  breadcrumbs: BreadcrumbsItem[];
  coach: CoachType;
  standings: StandingsResponseType;
  teamInfo: TeamResponseType;
  teamSquad: TeamSquadResponseType;
  teamStatistics: TeamStatisticsResponseType;
};

export default async function TeamPageComponent({
  breadcrumbs,
  coach,
  standings,
  teamInfo,
  teamSquad,
  teamStatistics,
}: TeamPageComponentProps) {
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
          address={teamInfo.venue.address}
          capacity={teamInfo.venue.capacity}
          city={teamInfo.venue.city}
          image={teamInfo.venue.image}
          name={teamInfo.venue.name}
        />
      </div>
    </div>
  );
}
