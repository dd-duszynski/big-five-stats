import { HomeAwayTotalType } from './home-away-total.model';

export type TeamStatisticsFixturesType = {
  draws: HomeAwayTotalType<number>;
  loses: HomeAwayTotalType<number>;
  played: HomeAwayTotalType<number>;
  wins: HomeAwayTotalType<number>;
};
