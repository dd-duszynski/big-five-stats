import { Breadcrumbs, BreadcrumbsItemType, PlayerBar } from '@/components';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { PlayerSidelinedType } from '@/lib/models/player-sidelined.model';
import { TransfersType } from '@/lib/models/player-transfers.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { PlayerSidelined } from '../player-sidelined/player-sidelined';
import { PlayerStatistics } from '../player-statistics/player-statistics';
import { PlayerTransfers } from '../player-transfers/player-transfers';
import { PlayerTrophies } from '../player-trophies/player-trophies';

type PlayerPageComponentProps = {
  breadcrumbs: BreadcrumbsItemType[];
  playerData: PlayerResponseType;
  sidelinedData: PlayerSidelinedType[];
  transfersData: TransfersType[];
  trophiesData: TrophiesType[];
};

export function PlayerPageComponent({
  breadcrumbs,
  playerData,
  sidelinedData,
  transfersData,
  trophiesData,
}: PlayerPageComponentProps) {
  return (
    <div className="flex h-full w-full flex-col md:flex-row md:flex-nowrap">
      <PlayerBar
        player={playerData.player}
        statistics={playerData.statistics}
      />
      <section className="grow px-4 md:overflow-y-auto">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="my-2"
        />
        <div className="flex flex-wrap items-start gap-4 pb-4">
          <PlayerStatistics data={playerData.statistics} />
          <PlayerTransfers data={transfersData} />
          <PlayerTrophies data={trophiesData} />
          <PlayerSidelined data={sidelinedData} />
        </div>
      </section>
    </div>
  );
}
