import { FixturePlayerStatisticsType } from './fixture-player-statistics.model';

export type FixturesPlayersType = {
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
};
