export type Goals = {
  for: For;
  against: Against;
};

export type For = {
  total: Total;
  average: Average;
  minute: Minute;
};

export type Total = {
  home: number;
  away: number;
  total: number;
};

export type Average = {
  home: string;
  away: string;
  total: string;
};

export type Minute = {
  '0-15': N015;
  '16-30': N1630;
  '31-45': N3145;
  '46-60': N4660;
  '61-75': N6175;
  '76-90': N7690;
  '91-105': N91105;
  '106-120': N106120;
};

export type N015 = {
  total: number;
  percentage: string;
};

export type N1630 = {
  total: number;
  percentage: string;
};

export type N3145 = {
  total: number;
  percentage: string;
};

export type N4660 = {
  total: number;
  percentage: string;
};

export type N6175 = {
  total: number;
  percentage: string;
};

export type N7690 = {
  total: number;
  percentage: string;
};

export type N91105 = {
  total: number;
  percentage: string;
};

export type N106120 = {
  total: any;
  percentage: any;
};

export type Against = {
  total: Total2;
  average: Average2;
  minute: Minute2;
};

export type Total2 = {
  home: number;
  away: number;
  total: number;
};

export type Average2 = {
  home: string;
  away: string;
  total: string;
};

export type Minute2 = {
  '0-15': N0152;
  '16-30': N16302;
  '31-45': N31452;
  '46-60': N46602;
  '61-75': N61752;
  '76-90': N76902;
  '91-105': N911052;
  '106-120': N1061202;
};

export type N0152 = {
  total: number;
  percentage: string;
};

export type N16302 = {
  total: number;
  percentage: string;
};

export type N31452 = {
  total: number;
  percentage: string;
};

export type N46602 = {
  total: number;
  percentage: string;
};

export type N61752 = {
  total: number;
  percentage: string;
};

export type N76902 = {
  total: number;
  percentage: string;
};

export type N911052 = {
  total: number;
  percentage: string;
};

export type N1061202 = {
  total: any;
  percentage: any;
};

export type Biggest = {
  streak: Streak;
  wins: Wins2;
  loses: Loses2;
  goals: Goals2;
};

export type Streak = {
  wins: number;
  draws: number;
  loses: number;
};

export type Wins2 = {
  home: string;
  away: string;
};

export type Loses2 = {
  home: string;
  away: string;
};

export type Goals2 = {
  for: For2;
  against: Against2;
};

export type For2 = {
  home: number;
  away: number;
};

export type Against2 = {
  home: number;
  away: number;
};

export type CleanSheet = {
  home: number;
  away: number;
  total: number;
};

export type FailedToScore = {
  home: number;
  away: number;
  total: number;
};

export type Penalty = {
  scored: Scored;
  missed: Missed;
  total: number;
};

export type Scored = {
  total: number;
  percentage: string;
};

export type Missed = {
  total: number;
  percentage: string;
};

export type Lineup = {
  formation: string;
  played: number;
};

export type Cards = {
  yellow: Yellow;
  red: Red;
};

export type Yellow = {
  '0-15': N0153;
  '16-30': N16303;
  '31-45': N31453;
  '46-60': N46603;
  '61-75': N61753;
  '76-90': N76903;
  '91-105': N911053;
  '106-120': N1061203;
  '': GeneratedType;
};

export type N0153 = {
  total: any;
  percentage: any;
};

export type N16303 = {
  total: number;
  percentage: string;
};

export type N31453 = {
  total: number;
  percentage: string;
};

export type N46603 = {
  total: number;
  percentage: string;
};

export type N61753 = {
  total: number;
  percentage: string;
};

export type N76903 = {
  total: number;
  percentage: string;
};

export type N911053 = {
  total: number;
  percentage: string;
};

export type N1061203 = {
  total: any;
  percentage: any;
};

export type GeneratedType = {
  total: number;
  percentage: string;
};

export type Red = {
  '0-15': N0154;
  '16-30': N16304;
  '31-45': N31454;
  '46-60': N46604;
  '61-75': N61754;
  '76-90': N76904;
  '91-105': N911054;
  '106-120': N1061204;
};

export type N0154 = {
  total: any;
  percentage: any;
};

export type N16304 = {
  total: any;
  percentage: any;
};

export type N31454 = {
  total: number;
  percentage: string;
};

export type N46604 = {
  total: number;
  percentage: string;
};

export type N61754 = {
  total: number;
  percentage: string;
};

export type N76904 = {
  total: any;
  percentage: any;
};

export type N911054 = {
  total: number;
  percentage: string;
};

export type N1061204 = {
  total: any;
  percentage: any;
};
