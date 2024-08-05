import { PlayerCardsType } from './player-cards.model';
import { PlayerDribblesType } from './player-dribbles.model';
import { PlayerDuelsType } from './player-duels.model';
import { PlayerFoulsType } from './player-fouls.model';
import { PlayerGamesType } from './player-games.model';
import { PlayerGoalsType } from './player-goals.model';
import { LeagueType } from './league.model';
import { PlayerPassesType } from './player-passes.model';
import { PlayerPenaltyType } from './player-penalty.model';
import { PlayerShotsType } from './player-shots.model';
import { PlayerSubstitutesType } from './player-substitutes.model';
import { PlayerTacklesType } from './player-tackles.model';
import { TeamBasicInfoType } from './general/team-basic-info.model';

export type PlayerStatisticType = {
  cards: PlayerCardsType;
  dribbles: PlayerDribblesType;
  duels: PlayerDuelsType;
  fouls: PlayerFoulsType;
  games: PlayerGamesType;
  goals: PlayerGoalsType;
  league: LeagueType;
  passes: PlayerPassesType;
  penalty: PlayerPenaltyType;
  shots: PlayerShotsType;
  substitutes: PlayerSubstitutesType;
  tackles: PlayerTacklesType;
  team: TeamBasicInfoType;
};
