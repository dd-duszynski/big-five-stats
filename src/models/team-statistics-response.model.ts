import { FixturesType } from './fixtures.model';
import { HomeAwayTotalType } from './home-away-total.model';
import { LeagueType } from './league.model';
import { TeamBasicInfoType } from './team-basic-info.model';
import { TeamStatisticsBiggestType } from './team-statistics-biggest.model';
import { TeamStatisticsGoalsType } from './team-statistics-goals.model';
import { TeamStatisticsLineupType } from './team-statistics-lineup.model';
import { TeamStatisticsCardsType } from './team-statistics-lineup.model copy';
import { TeamStatisticsPenaltyType } from './team-statistics-penalty.model';

export interface TeamStatisticsResponseType {
  biggest: TeamStatisticsBiggestType;
  cards: TeamStatisticsCardsType;
  clean_sheet: HomeAwayTotalType<number>;
  failed_to_score: HomeAwayTotalType<number>;
  fixtures: FixturesType;
  form: string;
  goals: TeamStatisticsGoalsType;
  league: LeagueType;
  lineups: TeamStatisticsLineupType[];
  penalty: TeamStatisticsPenaltyType;
  team: TeamBasicInfoType;
}
