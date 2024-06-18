import { TeamSquadPlayerType } from './team-squad-player.model';
import { TeamSquadType } from './team-squad.model';

export interface TeamSquadResponseType {
  players: TeamSquadPlayerType[];
  team: TeamSquadType;
}
