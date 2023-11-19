export interface APIResponse {
  response: Response[];
}

export interface Response {
  league: League;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standing[][];
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: All;
  home: Home;
  away: Away;
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
