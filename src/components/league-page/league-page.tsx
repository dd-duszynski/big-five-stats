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
import { addRankPositionMapper } from '@/lib/utils/mappers';
import { topAssistsQueryOptions } from '@/lib/utils/query-options/top-assists-query-options';
import { topRedCardQueryOptions } from '@/lib/utils/query-options/top-red-card-query-options';
import { topScorersQueryOptions } from '@/lib/utils/query-options/top-scorers-query-options';
import { topYellowCardQueryOptions } from '@/lib/utils/query-options/top-yellow-card-query-options';
import { useQuery } from '@tanstack/react-query';
import { BreadcrumbsItemType } from '../breadcrumbs/breadcrumbs';
import { fixturesColumns } from '../data-table/columns/fixtures-columns';
import { redCardsColumns } from '../data-table/columns/red-cards-columns';
import { standingsColumns } from '../data-table/columns/standings-columns';
import { topAssistsColumns } from '../data-table/columns/top-assists-columns';
import { topScorersColumns } from '../data-table/columns/top-scorers-columns';
import { yellowCardsColumns } from '../data-table/columns/yellow-cards-columns';

type LeaguePageComponentProps = {
  breadcrumbs: BreadcrumbsItemType[];
  fixtures: FixturesType[];
  leagueId: number;
  rounds: string[];
  standings: StandingsResponseType[];
};

export function LeaguePageComponent({
  breadcrumbs,
  fixtures,
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

  const playerStatisticsSections = [
    {
      headerTitle: strings.Top_Scorers,
      data: addRankPositionMapper(topScorers?.response),
      isFetched: isTopScorersFetched,
      columns: topScorersColumns,
    },
    {
      headerTitle: strings.Top_Asists,
      data: addRankPositionMapper(topAssists?.response),
      isFetched: isTopAssistsFetched,
      columns: topAssistsColumns,
    },
    {
      headerTitle: strings.Yellow_Cards,
      data: addRankPositionMapper(topYellowCard?.response),
      isFetched: isTopYellowCardFetched,
      columns: yellowCardsColumns,
    },
    {
      headerTitle: strings.Red_Cards,
      data: addRankPositionMapper(topRedCard?.response),
      isFetched: isTopRedCardFetched,
      columns: redCardsColumns,
    },
  ];

  return (
    <div className="h-full w-full">
      <PageHeader
        logo={standings[0].league.logo}
        logoSize="lg"
        subLogo={standings[0].league.flag}
        subtitle={standings[0].league.country}
        title={standings[0].league.name}
      />

      <section className="flex flex-wrap items-start gap-2 px-4 pb-4">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="w-full"
        />
        <div className="flex w-full flex-wrap justify-between gap-4">
          <LeagueTable
            className="w-full lg:w-[calc(50%-0.5rem)]"
            columns={standingsColumns}
            data={standings[0].league.standings[0]}
          />
          <Fixtures
            className="w-full lg:w-[calc(50%-0.5rem)]"
            columns={fixturesColumns}
            data={fixtures}
            rounds={rounds}
            leagueId={leagueId}
          />
          {playerStatisticsSections.map((section) => (
            <div
              className="w-full lg:w-[calc(50%-0.5rem)]"
              key={section.headerTitle}
            >
              <GradientCard
                className=" max-h-fit w-full"
                headerTitle={section.headerTitle}
              >
                {section.data && section.isFetched && (
                  <DataTable
                    className="max-h-[423px]"
                    columns={section.columns}
                    data={section.data}
                  />
                )}
              </GradientCard>
            </div>
          ))}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}
