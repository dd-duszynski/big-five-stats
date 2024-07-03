import {
  Breadcrumbs,
  BreadcrumbsItemType,
  LeagueTable,
  PageHeader,
  Stadium,
  TeamCoach,
  TeamPlayers,
} from '@/components';
import { CoachType } from '@/lib/models/coach.model';
import { StandingsResponseType } from '@/lib/models/standings-response.model';
import { TeamResponseType } from '@/lib/models/team-response.model';
import { TeamSquadResponseType } from '@/lib/models/team-squad-response.model';
import { TeamStatisticsResponseType } from '@/lib/models/team-statistics-response.model';
import { standingsColumns } from '../data-table/columns/standings-columns';

type TeamPageComponentProps = {
  breadcrumbs: BreadcrumbsItemType[];
  coach: CoachType;
  standings: StandingsResponseType;
  teamInfo: TeamResponseType;
  teamSquad: TeamSquadResponseType;
  teamStatistics: TeamStatisticsResponseType;
};

export function TeamPageComponent({
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
