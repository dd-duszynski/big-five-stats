import { PLAYER_POSITION } from '@/lib/enums/player-position';

export interface TeamSquadPlayerType {
  age: number;
  id: number;
  name: string;
  number: number;
  photo: string;
  position: PLAYER_POSITION;
}
