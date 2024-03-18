export interface TeamResponse {
  league: League;
  team: Team;
  form: string;
  fixtures: Fixtures;
  goals: Goals;
  biggest: Biggest;
  clean_sheet: CleanSheet;
  failed_to_score: FailedToScore;
  penalty: Penalty;
  lineups: Lineup[];
  cards: Cards;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Fixtures {
  played: Played;
  wins: Wins;
  draws: Draws;
  loses: Loses;
}

export interface Played {
  home: number;
  away: number;
  total: number;
}

export interface Wins {
  home: number;
  away: number;
  total: number;
}

export interface Draws {
  home: number;
  away: number;
  total: number;
}

export interface Loses {
  home: number;
  away: number;
  total: number;
}

export interface Goals {
  for: For;
  against: Against;
}

export interface For {
  total: Total;
  average: Average;
  minute: Minute;
}

export interface Total {
  home: number;
  away: number;
  total: number;
}

export interface Average {
  home: string;
  away: string;
  total: string;
}

export interface Minute {
  '0-15': N015;
  '16-30': N1630;
  '31-45': N3145;
  '46-60': N4660;
  '61-75': N6175;
  '76-90': N7690;
  '91-105': N91105;
  '106-120': N106120;
}

export interface N015 {
  total: number;
  percentage: string;
}

export interface N1630 {
  total: number;
  percentage: string;
}

export interface N3145 {
  total: number;
  percentage: string;
}

export interface N4660 {
  total: number;
  percentage: string;
}

export interface N6175 {
  total: number;
  percentage: string;
}

export interface N7690 {
  total: number;
  percentage: string;
}

export interface N91105 {
  total: number;
  percentage: string;
}

export interface N106120 {
  total: any;
  percentage: any;
}

export interface Against {
  total: Total2;
  average: Average2;
  minute: Minute2;
}

export interface Total2 {
  home: number;
  away: number;
  total: number;
}

export interface Average2 {
  home: string;
  away: string;
  total: string;
}

export interface Minute2 {
  '0-15': N0152;
  '16-30': N16302;
  '31-45': N31452;
  '46-60': N46602;
  '61-75': N61752;
  '76-90': N76902;
  '91-105': N911052;
  '106-120': N1061202;
}

export interface N0152 {
  total: number;
  percentage: string;
}

export interface N16302 {
  total: number;
  percentage: string;
}

export interface N31452 {
  total: number;
  percentage: string;
}

export interface N46602 {
  total: number;
  percentage: string;
}

export interface N61752 {
  total: number;
  percentage: string;
}

export interface N76902 {
  total: number;
  percentage: string;
}

export interface N911052 {
  total: number;
  percentage: string;
}

export interface N1061202 {
  total: any;
  percentage: any;
}

export interface Biggest {
  streak: Streak;
  wins: Wins2;
  loses: Loses2;
  goals: Goals2;
}

export interface Streak {
  wins: number;
  draws: number;
  loses: number;
}

export interface Wins2 {
  home: string;
  away: string;
}

export interface Loses2 {
  home: string;
  away: string;
}

export interface Goals2 {
  for: For2;
  against: Against2;
}

export interface For2 {
  home: number;
  away: number;
}

export interface Against2 {
  home: number;
  away: number;
}

export interface CleanSheet {
  home: number;
  away: number;
  total: number;
}

export interface FailedToScore {
  home: number;
  away: number;
  total: number;
}

export interface Penalty {
  scored: Scored;
  missed: Missed;
  total: number;
}

export interface Scored {
  total: number;
  percentage: string;
}

export interface Missed {
  total: number;
  percentage: string;
}

export interface Lineup {
  formation: string;
  played: number;
}

export interface Cards {
  yellow: Yellow;
  red: Red;
}

export interface Yellow {
  '0-15': N0153;
  '16-30': N16303;
  '31-45': N31453;
  '46-60': N46603;
  '61-75': N61753;
  '76-90': N76903;
  '91-105': N911053;
  '106-120': N1061203;
  '': GeneratedType;
}

export interface N0153 {
  total: any;
  percentage: any;
}

export interface N16303 {
  total: number;
  percentage: string;
}

export interface N31453 {
  total: number;
  percentage: string;
}

export interface N46603 {
  total: number;
  percentage: string;
}

export interface N61753 {
  total: number;
  percentage: string;
}

export interface N76903 {
  total: number;
  percentage: string;
}

export interface N911053 {
  total: number;
  percentage: string;
}

export interface N1061203 {
  total: any;
  percentage: any;
}

export interface GeneratedType {
  total: number;
  percentage: string;
}

export interface Red {
  '0-15': N0154;
  '16-30': N16304;
  '31-45': N31454;
  '46-60': N46604;
  '61-75': N61754;
  '76-90': N76904;
  '91-105': N911054;
  '106-120': N1061204;
}

export interface N0154 {
  total: any;
  percentage: any;
}

export interface N16304 {
  total: any;
  percentage: any;
}

export interface N31454 {
  total: number;
  percentage: string;
}

export interface N46604 {
  total: number;
  percentage: string;
}

export interface N61754 {
  total: number;
  percentage: string;
}

export interface N76904 {
  total: any;
  percentage: any;
}

export interface N911054 {
  total: number;
  percentage: string;
}

export interface N1061204 {
  total: any;
  percentage: any;
}
