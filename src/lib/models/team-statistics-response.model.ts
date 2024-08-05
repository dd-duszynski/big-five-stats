import { HomeAwayTotalType } from './home-away-total.model';
import { LeagueType } from './league.model';
import { TeamBasicInfoType } from './general/team-basic-info.model';
import { TeamStatisticsBiggestType } from './team-statistics-biggest.model';
import { TeamStatisticsFixturesType } from './team-statistics-fixtures.model';
import { TeamStatisticsGoalsType } from './team-statistics-goals.model';
import { TeamStatisticsLineupType } from './team-statistics-lineup.model';
import { TeamStatisticsCardsType } from './team-statistics-lineup.model copy';
import { TeamStatisticsPenaltyType } from './team-statistics-penalty.model';

export interface TeamStatisticsResponseType {
  biggest: TeamStatisticsBiggestType;
  cards: TeamStatisticsCardsType;
  clean_sheet: HomeAwayTotalType<number>;
  failed_to_score: HomeAwayTotalType<number>;
  fixtures: TeamStatisticsFixturesType;
  form: string;
  goals: TeamStatisticsGoalsType;
  league: LeagueType;
  lineups: TeamStatisticsLineupType[];
  penalty: TeamStatisticsPenaltyType;
  team: TeamBasicInfoType;
}
