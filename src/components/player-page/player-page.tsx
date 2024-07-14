import {
  Breadcrumbs,
  BreadcrumbsItemType,
  GradientCard,
  PlayerBar,
} from '@/components';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { PlayerSidelinedType } from '@/lib/models/player-sidelined.model';
import { TransfersType } from '@/lib/models/player-transfers.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings/strings';
import { PlayerGames } from '../player-games/player-games';
import { PlayerGoals } from '../player-goals/player-goals';
import { PlayerSidelined } from '../player-sidelined/player-sidelined';
import { PlayerTransfers } from '../player-transfers/player-transfers';
import { PlayerTrophies } from '../player-trophies/player-trophies';
import { PlayerStatistics } from '../player-statistics/player-statistics';

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
  transfersData,
  trophiesData,
  sidelinedData,
}: PlayerPageComponentProps) {
  return (
    <div className="flex h-full w-full flex-row flex-nowrap">
      <div className="w-[250px] overflow-y-auto overflow-x-hidden bg-gradient-to-t from-emerald-500 to-indigo-500">
        <PlayerBar
          player={playerData.player}
          statistics={playerData.statistics}
        />
      </div>
      <main className="grow overflow-y-auto px-4">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="my-2"
        />
        <PlayerGames data={playerData} />
        <PlayerGoals data={playerData} />
        <PlayerTrophies data={trophiesData} />
        <PlayerTransfers data={transfersData} />
        <PlayerSidelined data={sidelinedData} />
        <PlayerStatistics data={playerData.statistics} />
      </main>
    </div>
  );
}
