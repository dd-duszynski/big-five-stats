export type FixtureLineupsType = {
  team: FixtureLineupsTeamType;
  coach: LineupCoach;
  formation: string;
  startXI: {
    player: StartSquadPlayerType;
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

export type StartSquadPlayerType = {
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
