import { queryOptions } from '@tanstack/react-query';
import { PlayerResponseType } from '../models/player-response.model';
import { fetchAPISports } from './fetch-api-sports';

export const topAssistsOptions = (
  leagueId: number,
  seasonId: number,
  tabName: string
) =>
  queryOptions({
    queryKey: ['top-assists', leagueId, seasonId],
    enabled: tabName === 'top-assists',
    queryFn: async () => {
      /* TODO_DD:  */
      // const response = await fetchAPISports<PlayerResponseType[]>(
      const response = await fetchAPISports<any>(
        `players/topassists?league=${leagueId}&season=${seasonId}`
      );
      return response;
    },
  });
