export interface TeamSquadResponse {
  team: TeamSquadTeam;
  players: TeamSquadPlayer[];
}

export interface TeamSquadTeam {
  id: number;
  name: string;
  logo: string;
}

export interface TeamSquadPlayer {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}
