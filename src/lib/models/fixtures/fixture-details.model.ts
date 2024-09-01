import { FixtureDetailsStatisticType } from './fixture-details-statistic.model';
import { FixtureEventsType } from './fixture-events.model';
import { FixtureLineupsType } from './fixture-lineups.model';
import { FixturesPlayersType } from './fixture-players.model';
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
  players: FixturesPlayersType[];
};
