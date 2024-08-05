import { APIResponseType } from '@/lib/models/api/api-response.model';
import { FixturesForRoundResponseType } from '@/lib/models/fixtures/fixtures-for-round.model';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { queryOptions } from '@tanstack/react-query';

export const fixturesForRoundQueryOptions = (
  leagueId: number,
  seasonId: number,
  round: string,
  enabled: boolean = true
) =>
  queryOptions({
    queryKey: ['league-fixtures', leagueId, seasonId, round],
    enabled: enabled,
    queryFn: async () => {
      const response = await fetchAPISports<
        APIResponseType<FixturesForRoundResponseType[]>
      >(`fixtures?league=${leagueId}&season=${seasonId}&round=${round}`);
      return response;
    },
  });
