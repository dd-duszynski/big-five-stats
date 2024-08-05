import {
  FixtureGoalsType,
  FixtureLeagueType,
  FixtureScoreType,
  FixtureTeamsType,
  FixtureBasicInfoType,
} from './fixtures-for-round.model';

export type FixtureDetailsResponseType = {
  fixture: FixtureBasicInfoType;
  league: FixtureLeagueType;
  teams: FixtureTeamsType;
  goals: FixtureGoalsType;
  score: FixtureScoreType;
  events: FixtureEventsType[];
  lineups: FixtureLineupsType[];
  statistics: FixtureDetailsStatisticType[];
  players: {
    team: {
      id: number;
      name: string;
      logo: string;
      update: string;
    };
    players: {
      player: {
        id: number;
        name: string;
        photo: string;
      };
      statistics: FixturePlayerStatisticsType[];
    }[];
  }[];
};

type FixtureEventsType = {
  time: {
    elapsed: number;
    extra: any;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: number;
    name: string;
  };
  assist: {
    id?: number;
    name?: string;
  };
  type: string;
  detail: string;
  comments?: string;
};

type FixtureLineupsType = {
  team: FixtureLineupsTeamType;
  coach: LineupCoach;
  formation: string;
  startXI: {
    player: StartSquadPlayer;
  }[];
  substitutes: FixtureLineupsSubstitutesType[];
};

type FixtureLineupsTeamType = {
  id: number;
  name: string;
  logo: string;
  colors: {
    player: PlayerColors;
    goalkeeper: PlayerColors;
  };
};

type PlayerColors = {
  primary: string;
  number: string;
  border: string;
};

type LineupCoach = {
  id: number;
  name: string;
  photo: string;
};

type StartSquadPlayer = {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string;
};

type FixtureLineupsSubstitutesType = {
  player: {
    id: number;
    name: string;
    number: number;
    pos: string;
    grid: any;
  };
};

type FixtureDetailsStatisticType = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  statistics: {
    type: string;
    value: any;
  }[];
};

type FixturePlayerStatisticsType = {
  games: {
    minutes?: number;
    number: number;
    position: string;
    rating?: string;
    captain: boolean;
    substitute: boolean;
  };
  offsides?: number;
  shots: {
    total?: number;
    on?: number;
  };
  goals: {
    total?: number;
    conceded: number;
    assists?: number;
    saves?: number;
  };
  passes: {
    total?: number;
    key?: number;
    accuracy?: string;
  };
  tackles: {
    total?: number;
    blocks?: number;
    interceptions?: number;
  };
  duels: {
    total?: number;
    won?: number;
  };
  dribbles: {
    attempts?: number;
    success?: number;
    past?: number;
  };
  fouls: {
    drawn?: number;
    committed?: number;
  };
  cards: {
    yellow: number;
    red: number;
  };
  penalty: {
    won: any;
    commited: any;
    scored: number;
    missed: number;
    saved?: number;
  };
};
