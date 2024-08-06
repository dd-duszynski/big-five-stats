import { TeamStatisticsHomeAwayType } from './team-statistics-home-away.model';
import { TeamStatisticsStreakType } from './team-statistics-streak.model';

export type TeamStatisticsBiggestType = {
  streak: TeamStatisticsStreakType;
  wins: TeamStatisticsHomeAwayType<string>;
  loses: TeamStatisticsHomeAwayType<string>;
  goals: {
    against: TeamStatisticsHomeAwayType<number>;
    for: TeamStatisticsHomeAwayType<number>;
  };
};
