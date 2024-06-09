import { StandingGoalsType } from './standing-goals.model';

export type StandingResultsType = {
  draw: number;
  goals: StandingGoalsType;
  lose: number;
  played: number;
  win: number;
};
