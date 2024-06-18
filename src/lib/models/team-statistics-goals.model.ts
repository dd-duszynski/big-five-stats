import { HomeAwayTotalType } from './home-away-total.model';
import { PerMinutesType } from './minutes.model';

export type TeamStatisticsGoalsType = {
  for: Goals;
  against: Goals;
};

export type Goals = {
  average: HomeAwayTotalType<string>;
  minute: PerMinutesType;
  total: HomeAwayTotalType<number>;
};
