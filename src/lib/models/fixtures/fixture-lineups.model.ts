import { FIXTURE_LINEUPS_PLAYER_POSITION } from '@/lib/enums/fixture-lineups-player-position';

export type FixtureLineupsType = {
  team: FixtureLineupsTeamType;
  coach: LineupCoach;
  formation: string;
  startXI: FixtureLineupsStartPlayerType[];
  substitutes: FixtureLineupsSubstitutesType[];
};

export type FixtureLineupsStartPlayerType = {
  player: StartSquadPlayerType;
};

type FixtureLineupsTeamType = {
  id: number;
  name: string;
  logo: string;
  colors: TeamColors;
};

export type TeamColors = {
  player: PlayerColors;
  goalkeeper: PlayerColors;
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
  pos: FIXTURE_LINEUPS_PLAYER_POSITION;
  grid: string;
};

type FixtureLineupsSubstitutesType = {
  player: StartSquadPlayerType;
};
