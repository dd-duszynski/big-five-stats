import { fetchAPISports } from '@/lib/utils';
import { APIResponse } from '@/models/Standings.model';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';

async function getData(id: number) {
  const topScorers = await fetchAPISports<APIResponse<TopScorerResponse[]>>(
    `players/topscorers?league=${id}&season=2023`
  );
  const topAssists = await fetchAPISports<APIResponse<TopAssistsResponse[]>>(
    `players/topassists?league=${id}&season=2023`
  );
  return {
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
    <div className="flex min-h-screen flex-row items-center justify-around p-24 ">
      <div>
        <h1>Top Scorers:</h1>
        {data.topScorers?.response.map((player) => (
          <p key={player.player.id}>
            {player.player.name} - {player.statistics[0].goals.total}
          </p>
        ))}
      </div>
      <div>
        <h1>Top Assistants:</h1>
        {data.topAssists?.response.map((player) => (
          <p key={player.player.id}>
            {player.player.name} - {player.statistics[0].goals.assists}
          </p>
        ))}
      </div>
    </div>
  );
}
