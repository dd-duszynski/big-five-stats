import { TeamBasicInfoType } from '../general/team-basic-info.model';
import { TeamSquadPlayerType } from './team-squad-player.model';

export type TeamSquadResponseType = {
  players: TeamSquadPlayerType[];
  team: TeamBasicInfoType;
};
