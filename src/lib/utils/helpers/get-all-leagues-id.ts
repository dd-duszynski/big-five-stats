import { LEAGUES_ID } from '@/lib/enums/leagues-id';

export const getAllLeaguesId = () =>
  Object.values(LEAGUES_ID).filter((league) => typeof league === 'number');
