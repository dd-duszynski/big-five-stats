import { TeamBasicInfoType } from '../general/team-basic-info.model';
import { StandingResultsType } from './standing-results.model';

export type StandingsLeagueType = {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
  standings: {
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
  }[][];
};
