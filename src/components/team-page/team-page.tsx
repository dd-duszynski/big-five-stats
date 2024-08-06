import {
  Breadcrumbs,
  BreadcrumbsItemType,
  LeagueTable,
  PageHeader,
  Stadium,
  TeamSquad,
} from '@/components';
import { CoachType } from '@/lib/models/coach/coach.model';
import { StandingsResponseType } from '@/lib/models/standings/standings-response.model';
import { TeamResponseType } from '@/lib/models/team/team-response.model';
import { TeamSquadResponseType } from '@/lib/models/team/team-squad-response.model';
import { TeamStatisticsResponseType } from '@/lib/models/team/team-statistics-response.model';
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
      <section className="flex flex-wrap items-start gap-2 px-4 pb-4">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="w-full"
        />
        <div className="flex flex-wrap items-start gap-4">
          <TeamSquad
            players={teamSquad.players}
            coach={coach}
          />
          <LeagueTable
            columns={standingsColumns}
            data={standings.league.standings[0]}
            teamToHighlight={teamStatistics.team.id}
          />
          <Stadium
            address={teamInfo.venue.address}
            capacity={teamInfo.venue.capacity}
            city={teamInfo.venue.city}
            image={teamInfo.venue.image}
            name={teamInfo.venue.name}
          />
        </div>
      </section>
    </div>
  );
}
