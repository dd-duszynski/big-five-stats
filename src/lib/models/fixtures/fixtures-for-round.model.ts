export type FixturesForRoundResponseType = {
  fixture: FixtureBasicInfoType;
  league: FixtureLeagueType;
  teams: FixtureTeamsType;
  goals: FixtureGoalsType;
  score: FixtureScoreType;
};

export type FixtureBasicInfoType = {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
};

export type Periods = {
  first: number;
  second: number;
};

export type Venue = {
  id: number;
  name: string;
  city: string;
};

export type Status = {
  long: string;
  short: string;
  elapsed: number;
};

export type FixtureLeagueType = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
};

export type FixtureTeamsType = {
  home: HomeAwayType;
  away: HomeAwayType;
};

type HomeAwayType = {
  id: number;
  name: string;
  logo: string;
  winner?: boolean;
};

export type FixtureGoalsType = {
  home: number;
  away: number;
};

export type FixtureScoreType = {
  halftime: FixtureScoreTimeType;
  fulltime: FixtureScoreTimeType;
  extratime: FixtureScoreTimeType;
  penalty: FixtureScoreTimeType;
};

export type FixtureScoreTimeType = {
  home: number | null;
  away: number | null;
};
