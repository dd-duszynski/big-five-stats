import { LEAGUES_ID } from '@/lib/enums/leagues-id';

export const getAllLeaguesId = () =>
  Object.values(LEAGUES_ID).filter((league) => typeof league === 'number');

export const topFiveLeaguesIds = [
  LEAGUES_ID.ENG_PREMIER_LEAGUE,
  LEAGUES_ID.ESP_LA_LIGA,
  LEAGUES_ID.FRA_LIGUE_1,
  LEAGUES_ID.GER_BUNDESLIGA,
  LEAGUES_ID.ITA_SERIE_A,
];
