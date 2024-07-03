import PlayerPageComponent from '@/components/player-page/player-page';
import { RevalidateTime } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api-response.model';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings/strings';
import { fetchAPISports } from '@/lib/utils/fetch-api-sports';
import { Metadata } from 'next';

async function getData(playerId: number) {
  const player = await fetchAPISports<APIResponseType<PlayerResponseType[]>>(
    `players/?id=${playerId}&season=2023`,
    {
      revalidate: RevalidateTime.ONE_DAY,
    }
  );
  const trophies = await fetchAPISports<APIResponseType<TrophiesType[]>>(
    `trophies?player=${playerId}`,
    { revalidate: RevalidateTime.ONE_DAY }
  );
  return { player, trophies };
}

export const metadata: Metadata = {
  title: 'Big Five - Player statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function PlayerPage({ params }: any) {
  const data = await getData(params.id);
  const playerData = data.player?.response[0] || null;
  const trophiesData = data.trophies?.response || null;

  if (!playerData || !trophiesData) {
    return <div className="text-black">{strings.Player_not_found}</div>;
  }

  const breadcrumbs = [
    {
      link: `/`,
      text: strings.Home,
      showSeparator: true,
    },
    {
      link: `/league/${playerData.statistics[0].league.id}`,
      text: playerData.statistics[0].league.name,
      showSeparator: true,
    },
    {
      link: `/team/${playerData.statistics[0].team.id}`,
      text: playerData.statistics[0].team.name,
      showSeparator: true,
    },
    { link: '', text: playerData.player.name, showSeparator: false },
  ];

  return (
    <PlayerPageComponent
      breadcrumbs={breadcrumbs}
      playerData={playerData}
      trophiesData={trophiesData}
    />
  );
}

/* TODO_DD: 
transfers:  https://www.api-football.com/documentation-v3#tag/Transfers/operation/get-transfers 
trophies: https://www.api-football.com/documentation-v3#tag/Trophies
sidelied: https://www.api-football.com/documentation-v3#tag/Sidelined
*/
