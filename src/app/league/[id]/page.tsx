import { DataTable, LeagueCrest } from '@/components';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import { topAssistsColumns } from '@/components/data-table/columns/top-assists-columns';
import { topScorersColumns } from '@/components/data-table/columns/top-scorers-columns';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse, StandingsResponse } from '@/models/Standings.model';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';

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

// export const metadata: Metadata = {
//   title: 'Big Five',
//   description: 'Football stats for the big five leagues.',
// };

export default async function LeaguePage({ params }: any) {
  const data = await getData(params.id);

  if (!data) return <div className="text-black">Data not found</div>;

  return (
    <div>
      {data.standings && data.standings.response.length > 0 && (
        <LeagueCrest
          country={data.standings.response[0].league.country}
          flag={data.standings.response[0].league.flag}
          logo={data.standings.response[0].league.logo}
          name={data.standings.response[0].league.name}
        />
      )}
      <div className="flex flex-row flex-wrap gap-2">
        <div className="w-full">
          <h1 className="mb-2 mt-3">Standings</h1>
          {data.standings && data.standings.response.length > 0 && (
            <DataTable
              columns={standingsColumns}
              data={data.standings.response[0].league.standings[0]}
            />
          )}
        </div>

        <div className="flex w-full justify-between gap-4">
          <div className="w-1/2">
            <h1 className="mb-2 mt-3">Top Scorers</h1>
            {data.topScorers && (
              <DataTable
                columns={topScorersColumns}
                data={data.topScorers.response}
              />
            )}
          </div>

          <div className="w-1/2">
            <h1 className="mb-2 mt-3">Top Asists</h1>
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
