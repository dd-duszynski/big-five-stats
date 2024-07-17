import { PlayerPosition } from '../enums/player-position';

export interface TeamSquadPlayerType {
  age: number;
  id: number;
  name: string;
  number: number;
  photo: string;
  position: PlayerPosition;
}
