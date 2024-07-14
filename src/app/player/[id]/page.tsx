import { Loader, PlayerPageComponent } from '@/components/';
import { RevalidateTime } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api-response.model';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { PlayerSidelinedType } from '@/lib/models/player-sidelined.model';
import { PlayerTransfersType } from '@/lib/models/player-transfers.model';
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

  const transfers = await fetchAPISports<
    APIResponseType<PlayerTransfersType[]>
  >(`transfers?player=${playerId}`, { revalidate: RevalidateTime.ONE_DAY });

  const sidelined = await fetchAPISports<
    APIResponseType<PlayerSidelinedType[]>
  >(`sidelined?player=${playerId}`, { revalidate: RevalidateTime.ONE_DAY });

  return { player, trophies, transfers, sidelined };
}

export const metadata: Metadata = {
  title: 'Big Five - Player statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function PlayerPage({ params }: any) {
  const data = await getData(params.id);
  const playerData = data.player?.response[0];
  const trophiesData = data.trophies?.response;
  const transfersData = data.transfers?.response[0]?.transfers;
  const sidelinedData = data.sidelined?.response;

  if (!playerData || !trophiesData || !transfersData || !sidelinedData) {
    return <Loader />;
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
      sidelinedData={sidelinedData}
      transfersData={transfersData}
      trophiesData={trophiesData}
    />
  );
}
