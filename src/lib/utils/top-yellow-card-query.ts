import { queryOptions } from '@tanstack/react-query';
import { APIResponseType } from '../models/api-response.model';
import { PlayerResponseType } from '../models/player-response.model';
import { fetchAPISports } from './fetch-api-sports';

export const topYellowCardOptions = (
  leagueId: number,
  seasonId: number,
  enabled: boolean = true
) =>
  queryOptions({
    queryKey: ['top-yellow-card', leagueId, seasonId],
    enabled: enabled,
    queryFn: async () => {
      const response = await fetchAPISports<
        APIResponseType<PlayerResponseType[]>
      >(`players/topyellowcards?league=${leagueId}&season=${seasonId}`);
      return response;
    },
  });
