export interface APIResponse<T> {
  response: T;
  parameters: ResponseParameters;
}

export interface ResponseParameters {
  league: string;
  season: string;
}

export interface StandingsResponse {
  league: League;
}

export interface League {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
  standings: IStanding[][];
}

export interface IStanding {
  all: All;
  away: Away;
  description: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: Home;
  points: number;
  rank: number;
  status: string;
  team: Team;
  update: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}

export interface Home {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Away {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}
