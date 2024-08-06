import { HomeAwayTotalType } from '../general/home-away-total.model';
import { PerMinutesType } from '../general/minutes.model';

export type TeamStatisticsGoalsType = {
  for: Goals;
  against: Goals;
};

type Goals = {
  average: HomeAwayTotalType<string>;
  minute: PerMinutesType;
  total: HomeAwayTotalType<number>;
};
