import { FixtureDetailsStatisticType } from './fixture-details-statistic.model';
import { FixtureEventsType } from './fixture-events.model';
import { FixtureLineupsType } from './fixture-lineups.model';
import { FixturePlayerStatisticsType } from './fixture-player-statistics.model';
import {
  FixtureBasicInfoType,
  FixtureGoalsType,
  FixtureLeagueType,
  FixtureScoreType,
  FixtureTeamsType,
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
