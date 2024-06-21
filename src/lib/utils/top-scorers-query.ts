import { queryOptions } from '@tanstack/react-query';
import { PlayerResponseType } from '../models/player-response.model';
import { fetchAPISports } from './fetch-api-sports';

export const topScorersOptions = (
  leagueId: number,
  seasonId: number,
  tabName: string
) =>
  queryOptions({
    queryKey: ['top-scorers', leagueId, seasonId],
    enabled: tabName === 'top-scorers',
    queryFn: async () => {
      /* TODO_DD:  */
      // const response = await fetchAPISports<PlayerResponseType[]>(
      const response = await fetchAPISports<any>(
        `players/topscorers?league=${leagueId}&season=${seasonId}`
      );
      return response.response;
    },
  });
