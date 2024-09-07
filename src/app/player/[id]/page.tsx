import { Loader, PlayerPageComponent } from '@/components/';
import { REVALIDATE_TIME } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api/api-response.model';
import { TrophiesType } from '@/lib/models/general/trophies.model';
import { PlayerResponseType } from '@/lib/models/player/player-response.model';
import { PlayerSidelinedType } from '@/lib/models/player/player-sidelined.model';
import { PlayerTransfersType } from '@/lib/models/player/player-transfers.model';
import { strings } from '@/lib/strings';
import { currentYear } from '@/lib/utils/const/current-year';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { Metadata } from 'next';

async function getData(playerId: number) {
  const player = await fetchAPISports<APIResponseType<PlayerResponseType[]>>(
    `players/?id=${playerId}&season=${currentYear}`,
    {
      revalidate: REVALIDATE_TIME.ONE_DAY,
    }
  );

  const trophies = await fetchAPISports<APIResponseType<TrophiesType[]>>(
    `trophies?player=${playerId}`,
    { revalidate: REVALIDATE_TIME.ONE_DAY }
  );

  const transfers = await fetchAPISports<
    APIResponseType<PlayerTransfersType[]>
  >(`transfers?player=${playerId}`, { revalidate: REVALIDATE_TIME.ONE_DAY });

  const sidelined = await fetchAPISports<
    APIResponseType<PlayerSidelinedType[]>
  >(`sidelined?player=${playerId}`, { revalidate: REVALIDATE_TIME.ONE_DAY });

  return { player, trophies, transfers, sidelined };
}

export const metadata: Metadata = {
  title: 'Big Five - Player information',
  description: 'Football stats for the big five leagues.',
};

export default async function PlayerPage({ params }: any) {
  const { player, trophies, transfers, sidelined } = await getData(params.id);
  const playerData = player?.response[0];
  const trophiesData = trophies?.response;
  const transfersData = transfers?.response[0]?.transfers;
  const sidelinedData = sidelined?.response;

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
