import { PlayerBasicInfoPanel, PlayerImage } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { fetchAPISports } from '@/lib/utils';
import { PlayerResponse } from '@/models/Player.model';
import { APIResponse } from '@/models/Standings.model';

async function getData(playerId: number) {
  const playerResponse = await fetchAPISports<APIResponse<PlayerResponse[]>>(
    `players/?id=${playerId}&season=2023`
  );
  return playerResponse;
}

// export const metadata: Metadata = {
//   title: 'Big Five',
//   description: 'Football stats for the big five leagues.',
// };

export default async function PlayerPage({ params }: any) {
  const data = await getData(params.id);
  const playerData = data?.response[0] || null;

  if (!playerData) return <div className="text-black">Player not found</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Card className="bg mx-3 my-3 flex flex-row items-center rounded-2xl bg-gradient-to-r from-purple-950 to-purple-900 p-2">
        <CardContent className="flex">
          <PlayerImage
            photo={playerData.player.photo}
            name={playerData.player.name}
          />
          <PlayerBasicInfoPanel
            player={playerData.player}
            statistics={playerData.statistics}
          />
        </CardContent>
      </Card>
    </div>
  );
}
