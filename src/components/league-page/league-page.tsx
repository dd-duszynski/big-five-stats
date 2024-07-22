'use client';

import {
  Breadcrumbs,
  DataTable,
  Fixtures,
  GradientCard,
  LeagueTable,
  PageHeader,
} from '@/components';
import { FixturesType } from '@/lib/models/fixtures.model';
import { StandingsResponseType } from '@/lib/models/standings-response.model';
import { strings } from '@/lib/strings/strings';
import { topAssistsOptions } from '@/lib/utils/top-assists-query';
import { topRedCardOptions } from '@/lib/utils/top-red-card-query';
import { topScorersOptions } from '@/lib/utils/top-scorers-query';
import { topYellowCardOptions } from '@/lib/utils/top-yellow-card-query';
import { useQuery } from '@tanstack/react-query';
import { BreadcrumbsItemType } from '../breadcrumbs/breadcrumbs';
import { redCardsColumns } from '../data-table/columns/red-cards-columns';
import { standingsColumns } from '../data-table/columns/standings-columns';
import { topAssistsColumns } from '../data-table/columns/top-assists-columns';
import { topScorersColumns } from '../data-table/columns/top-scorers-columns';
import { yellowCardsColumns } from '../data-table/columns/yellow-cards-columns';

type LeaguePageComponentProps = {
  breadcrumbs: BreadcrumbsItemType[];
  games: FixturesType[];
  leagueId: number;
  rounds: string[];
  standings: StandingsResponseType[];
};

export function LeaguePageComponent({
  breadcrumbs,
  games,
  leagueId,
  rounds,
  standings,
}: LeaguePageComponentProps) {
  const { data: topScorers, isFetched: isTopScorersFetched } = useQuery(
    topScorersOptions(leagueId, 2023, true)
  );
  const { data: topAssists, isFetched: isTopAssistsFetched } = useQuery(
    topAssistsOptions(leagueId, 2023, true)
  );
  const { data: topRedCard, isFetched: isTopRedCardFetched } = useQuery(
    topRedCardOptions(leagueId, 2023)
  );
  const { data: topYellowCard, isFetched: isTopYellowCardFetched } = useQuery(
    topYellowCardOptions(leagueId, 2023)
  );

  return (
    <div className="h-full w-full">
      <PageHeader
        logo={standings[0].league.logo}
        logoSize="lg"
        subLogo={standings[0].league.flag}
        subtitle={standings[0].league.country}
        title={standings[0].league.name}
      />
      <div className="px-8">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="mb-2 text-indigo-950"
        />
        <LeagueTable
          columns={standingsColumns}
          data={standings[0].league.standings[0]}
        />
        <GradientCard
          className="mb-2 w-full"
          headerTitle={strings.Fixtures}
        >
          {rounds && games && (
            <Fixtures
              rounds={rounds}
              games={games}
            />
          )}
        </GradientCard>

        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex w-full justify-between gap-4">
            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Top_Scorers}
                className="w-full"
              >
                {topScorers && isTopScorersFetched && (
                  <DataTable
                    columns={topScorersColumns}
                    data={topScorers.response}
                  />
                )}
              </GradientCard>
            </div>

            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Top_Asists}
                className="w-full"
              >
                {topAssists && isTopAssistsFetched && (
                  <DataTable
                    columns={topAssistsColumns}
                    data={topAssists.response}
                  />
                )}
              </GradientCard>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex w-full justify-between gap-4">
            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Yellow_Cards}
                className="w-full"
              >
                {topYellowCard && isTopYellowCardFetched && (
                  <DataTable
                    columns={yellowCardsColumns}
                    data={topYellowCard.response}
                  />
                )}
              </GradientCard>
            </div>

            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Red_Cards}
                className="w-full"
              >
                {topRedCard && isTopRedCardFetched && (
                  <DataTable
                    columns={redCardsColumns}
                    data={topRedCard.response}
                  />
                )}
              </GradientCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
