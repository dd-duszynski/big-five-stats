import { CardsType } from './cards.model';
import { DribblesType } from './dribbles.model';
import { DuelsType } from './duels.model';
import { FoulsType } from './fouls.model';
import { GamesType } from './games.model';
import { GoalsType } from './goals.model';
import { LeagueType } from './league.model';
import { PassesType } from './passes.model';
import { PlayerPenaltyType } from './player-penalty.model';
import { ShotsType } from './shots.model';
import { SubstitutesType } from './substitutes.model';
import { TacklesType } from './tackles.model';
import { TeamBasicInfoType } from './team-basic-info.model';

export type PlayerStatisticType = {
  cards: CardsType;
  dribbles: DribblesType;
  duels: DuelsType;
  fouls: FoulsType;
  games: GamesType;
  goals: GoalsType;
  league: LeagueType;
  passes: PassesType;
  penalty: PlayerPenaltyType;
  shots: ShotsType;
  substitutes: SubstitutesType;
  tackles: TacklesType;
  team: TeamBasicInfoType;
};
