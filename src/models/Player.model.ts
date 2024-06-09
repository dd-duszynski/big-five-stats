import { BirthType } from './birth.model';
import { PlayerStatisticType } from './player-statistic.model';

export type PlayerResponseType = {
  player: PlayerType;
  statistics: PlayerStatisticType[];
};

export type PlayerType = {
  age: number;
  birth: BirthType;
  firstname: string;
  height: string;
  id: number;
  injured: boolean;
  lastname: string;
  name: string;
  nationality: string;
  photo: string;
  weight: string;
};
