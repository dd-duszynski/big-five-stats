import { LeagueCrest, PlayerBasicInfoPanel, PlayerImage } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { fetchAPISports } from '@/lib/utils';
import { PlayerResponse } from '@/models/Player.model';
import { APIResponse } from '@/models/Standings.model';

async function getData(playerId: number) {
  const playerResponse = await fetchAPISports<APIResponse<PlayerResponse[]>>(
    `players/?id=${playerId}&season=2023`,
    { revalidate: 3600 }
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
    <div>
      <LeagueCrest
        country={playerData.statistics[0].team.name}
        flag={playerData.statistics[0].team.logo}
        logo={playerData.player.photo}
        name={playerData.player.name}
        logoSize="lg"
      />
      <Card className="bg mx-3 my-3 flex flex-row items-center rounded-2xl p-2">
        <CardContent className="flex">
          <PlayerBasicInfoPanel
            player={playerData.player}
            statistics={playerData.statistics}
          />
        </CardContent>
      </Card>
    </div>
  );
}
