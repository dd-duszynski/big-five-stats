import { queryOptions } from '@tanstack/react-query';
import { APIResponseType } from '@/lib/models/api/api-response.model';
import { PlayerResponseType } from '@/lib/models/player/player-response.model';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';

export const topScorersQueryOptions = (
  leagueId: number,
  seasonId: number,
  enabled: boolean
) =>
  queryOptions({
    queryKey: ['top-scorers', leagueId, seasonId],
    enabled: enabled,
    queryFn: async () => {
      const response = await fetchAPISports<
        APIResponseType<PlayerResponseType[]>
      >(`players/topscorers?league=${leagueId}&season=${seasonId}`);
      return response;
    },
  });
