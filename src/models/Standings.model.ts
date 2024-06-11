import { StandingResultsType } from './standing-results.model';
import { TeamBasicInfoType } from './team-basic-info.model';

export type StandingsLeagueType = {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
  standings: StandingType[][];
};

export type StandingType = {
  all: StandingResultsType;
  away: StandingResultsType;
  description: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: StandingResultsType;
  points: number;
  rank: number;
  status: string;
  team: TeamBasicInfoType;
  update: string;
};
