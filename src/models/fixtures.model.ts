import { HomeAwayTotalType } from './home-away-total.model';

export type FixturesType = {
  draws: HomeAwayTotalType<number>;
  loses: HomeAwayTotalType<number>;
  played: HomeAwayTotalType<number>;
  wins: HomeAwayTotalType<number>;
};
