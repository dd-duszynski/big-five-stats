import { HomeAwayTotalType } from './home-away-total.model';
import { MinutesType } from './minutes.model';

export type TeamStatisticsGoalsType = {
  for: Goals;
  against: Goals;
};

export type Goals = {
  average: HomeAwayTotalType<string>;
  minute: MinutesType;
  total: HomeAwayTotalType<number>;
};
