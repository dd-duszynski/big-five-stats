import { APIResponseType } from '@/lib/models/api-response.model';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { queryOptions } from '@tanstack/react-query';

export const topAssistsQueryOptions = (
  leagueId: number,
  seasonId: number,
  enabled: boolean
) =>
  queryOptions({
    queryKey: ['top-assists', leagueId, seasonId],
    enabled: enabled,
    queryFn: async () => {
      const response = await fetchAPISports<
        APIResponseType<PlayerResponseType[]>
      >(`players/topassists?league=${leagueId}&season=${seasonId}`);
      return response;
    },
  });
