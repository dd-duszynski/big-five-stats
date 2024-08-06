export type FixturePlayerStatisticsType = {
  games: {
    captain: boolean;
    minutes?: number;
    number: number;
    position: string;
    rating?: string;
    substitute: boolean;
  };
  offsides?: number;
  shots: {
    on?: number;
    total?: number;
  };
  goals: {
    assists?: number;
    conceded: number;
    saves?: number;
    total?: number;
  };
  passes: {
    accuracy?: string;
    key?: number;
    total?: number;
  };
  tackles: {
    blocks?: number;
    interceptions?: number;
    total?: number;
  };
  duels: {
    total?: number;
    won?: number;
  };
  dribbles: {
    attempts?: number;
    past?: number;
    success?: number;
  };
  fouls: {
    committed?: number;
    drawn?: number;
  };
  cards: {
    red: number;
    yellow: number;
  };
  penalty: {
    commited: any;
    missed: number;
    saved?: number;
    scored: number;
    won: any;
  };
};
