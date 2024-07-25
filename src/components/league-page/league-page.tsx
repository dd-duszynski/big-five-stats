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
import { strings } from '@/lib/strings';
import { topAssistsQueryOptions } from '@/lib/utils/query-options/top-assists-query-options';
import { topRedCardQueryOptions } from '@/lib/utils/query-options/top-red-card-query-options';
import { topScorersQueryOptions } from '@/lib/utils/query-options/top-scorers-query-options';
import { topYellowCardQueryOptions } from '@/lib/utils/query-options/top-yellow-card-query-options';
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
    topScorersQueryOptions(leagueId, 2023, true)
  );
  const { data: topAssists, isFetched: isTopAssistsFetched } = useQuery(
    topAssistsQueryOptions(leagueId, 2023, true)
  );
  const { data: topRedCard, isFetched: isTopRedCardFetched } = useQuery(
    topRedCardQueryOptions(leagueId, 2023)
  );
  const { data: topYellowCard, isFetched: isTopYellowCardFetched } = useQuery(
    topYellowCardQueryOptions(leagueId, 2023)
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
      <section className="flex flex-wrap items-start gap-4 px-4 pb-4">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="w-full"
        />
        <div className="flex flex-wrap items-start gap-4 pb-4">
          <LeagueTable
            columns={standingsColumns}
            data={standings[0].league.standings[0]}
          />
          <Fixtures
            rounds={rounds}
            games={games}
          />

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
      </section>
    </div>
  );
}
