import { queryOptions } from '@tanstack/react-query';
import { APIResponseType } from '@/lib/models/api-response.model';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';

export const topRedCardQueryOptions = (
  leagueId: number,
  seasonId: number,
  enabled: boolean = true
) =>
  queryOptions({
    queryKey: ['top-red-card', leagueId, seasonId],
    enabled: enabled,
    queryFn: async () => {
      const response = await fetchAPISports<
        APIResponseType<PlayerResponseType[]>
      >(`players/topredcards?league=${leagueId}&season=${seasonId}`);
      return response;
    },
  });
