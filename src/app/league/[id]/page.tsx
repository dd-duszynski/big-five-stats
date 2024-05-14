import { Breadcrumbs, DataTable, Text } from '@/components';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import { topAssistsColumns } from '@/components/data-table/columns/top-assists-columns';
import { topScorersColumns } from '@/components/data-table/columns/top-scorers-columns';
import GradientCard from '@/components/gradient-card/gradient-card';
import LeagueTable from '@/components/league-table/league-table';
import { PageHeader } from '@/components/page-header/page-header';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse, StandingsResponse } from '@/models/Standings.model';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';
import { Metadata } from 'next';

async function getData(id: number) {
  const standings = await fetchAPISports<APIResponse<StandingsResponse[]>>(
    `standings?league=${id}&season=2023`
  );
  const topScorers = await fetchAPISports<APIResponse<TopScorerResponse[]>>(
    `players/topscorers?league=${id}&season=2023`
  );
  const topAssists = await fetchAPISports<APIResponse<TopAssistsResponse[]>>(
    `players/topassists?league=${id}&season=2023`
  );
  return {
    standings,
    topScorers,
    topAssists,
  };
}

export const metadata: Metadata = {
  title: 'Big Five - League Stats',
  description: 'Football stats for the league.',
};

export default async function LeaguePage({ params }: any) {
  const data = await getData(params.id);

  if (!data || !data.standings || !data.standings.response.length)
    return <div className="text-black">Data not found</div>;

  const breadcrumbs = [
    {
      link: `/`,
      text: 'Home',
      showSeparator: true,
    },
    {
      link: '',
      text: data.standings.response[0].league.name,
      showSeparator: false,
    },
  ];

  return (
    <div className="h-full w-full">
      <PageHeader
        logo={data.standings.response[0].league.logo}
        logoSize="lg"
        subLogo={data.standings.response[0].league.flag}
        subtitle={data.standings.response[0].league.country}
        title={data.standings.response[0].league.name}
      />
      <div className="px-8">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="mb-2 text-indigo-950"
        />
        <LeagueTable
          columns={standingsColumns}
          data={data.standings.response[0].league.standings[0]}
        />

        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex w-full justify-between gap-4">
            <div className="w-1/2">
              <GradientCard
                headerTitle="Top Scorers"
                className="w-full"
              >
                {data.topScorers && (
                  <DataTable
                    columns={topScorersColumns}
                    data={data.topScorers.response}
                  />
                )}
              </GradientCard>
            </div>

            <div className="w-1/2">
              <GradientCard
                headerTitle="Top Asists"
                className="w-full"
              >
                {data.topAssists && (
                  <DataTable
                    columns={topAssistsColumns}
                    data={data.topAssists.response}
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
