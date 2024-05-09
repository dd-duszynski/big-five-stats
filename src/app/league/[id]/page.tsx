import { Breadcrumbs, DataTable, LeagueCrest, Text } from '@/components';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import { topAssistsColumns } from '@/components/data-table/columns/top-assists-columns';
import { topScorersColumns } from '@/components/data-table/columns/top-scorers-columns';
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
    <div className="h-full w-full px-6">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex items-center justify-between">
        <LeagueCrest
          flag={data.standings.response[0].league.flag}
          logo={data.standings.response[0].league.logo}
          logoSize="lg"
          subtitle={data.standings.response[0].league.country}
          title={data.standings.response[0].league.name}
        />
        <Text
          variant="h1"
          className="text-center"
        >
          #14
        </Text>
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        <div className="mt-2 w-full">
          <div className="mb-2 flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-emerald-500">
            <Text
              variant="h2"
              className="mb-2 mt-3 text-center text-white"
            >
              Standings
            </Text>
          </div>
          <DataTable
            columns={standingsColumns}
            data={data.standings.response[0].league.standings[0]}
          />
        </div>

        <div className="flex w-full justify-between gap-4">
          <div className="w-1/2">
            <div className="mb-2 flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-emerald-500">
              <Text
                variant="h2"
                className="mb-2 mt-3 text-center text-white"
              >
                Top Scorers
              </Text>
            </div>
            {data.topScorers && (
              <DataTable
                columns={topScorersColumns}
                data={data.topScorers.response}
              />
            )}
          </div>

          <div className="w-1/2">
            <div className="mb-2 flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-emerald-500">
              <Text
                variant="h2"
                className="mb-2 mt-3 text-center text-white"
              >
                Top Asists
              </Text>
            </div>
            {data.topAssists && (
              <DataTable
                columns={topAssistsColumns}
                data={data.topAssists.response}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
