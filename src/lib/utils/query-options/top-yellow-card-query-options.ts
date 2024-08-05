import { APIResponseType } from '@/lib/models/api/api-response.model';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { queryOptions } from '@tanstack/react-query';

export const topYellowCardQueryOptions = (
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
