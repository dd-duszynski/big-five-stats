import { queryOptions } from '@tanstack/react-query';
import { APIResponseType } from '../models/api-response.model';
import { PlayerResponseType } from '../models/player-response.model';
import { fetchAPISports } from './fetch-api-sports';

export const topScorersOptions = (
  leagueId: number,
  seasonId: number,
  isCollapsed: boolean
) =>
  queryOptions({
    queryKey: ['top-scorers', leagueId, seasonId],
    enabled: !isCollapsed,
    queryFn: async () => {
      const response = await fetchAPISports<
        APIResponseType<PlayerResponseType[]>
      >(`players/topscorers?league=${leagueId}&season=${seasonId}`);
      return response;
    },
  });
