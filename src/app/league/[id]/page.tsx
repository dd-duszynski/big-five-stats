import { standingsColumns } from '@/app/standings-columns';
import { LeagueCrest, LeagueTable } from '@/components';
import { topAssistsColumns } from '@/components/league-table/top-assists-columns';
import { topScorersColumns } from '@/components/league-table/top-scorers-columns';
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
    <main className="flex min-h-screen flex-col items-start justify-between p-24 ">
      {data.standings && data.standings.response.length > 0 && (
        <LeagueCrest
          country={data.standings.response[0].league.country}
          flag={data.standings.response[0].league.flag}
          logo={data.standings.response[0].league.logo}
          name={data.standings.response[0].league.name}
        />
      )}
      <h1 className="mb-2 mt-3">Standings</h1>
      {data.standings && data.standings.response.length > 0 && (
        <LeagueTable
          columns={standingsColumns}
          data={data.standings.response[0].league.standings[0]}
        />
      )}
      <h1 className="mb-2 mt-3">Top Scorers</h1>
      {data.topScorers && (
        <LeagueTable
          columns={topScorersColumns}
          data={data.topScorers.response}
        />
      )}
      <h1 className="mb-2 mt-3">Top Asists</h1>
      {data.topAssists && (
        <LeagueTable
          columns={topAssistsColumns}
          data={data.topAssists.response}
        />
      )}
    </main>
  );
}
