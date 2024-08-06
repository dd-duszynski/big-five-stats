import { PlayerStatisticType } from './player-statistic.model';
import { PlayerType } from './player.model';

export type PlayerResponseType = {
  player: PlayerType;
  statistics: PlayerStatisticType[];
};
