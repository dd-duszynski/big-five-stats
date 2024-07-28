import { APIResponseType } from '@/lib/models/api-response.model';
import { FixturesType } from '@/lib/models/fixtures.model';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { queryOptions } from '@tanstack/react-query';

export const leagueFixturesQueryOptions = (
  leagueId: number,
  seasonId: number,
  round: string,
  enabled: boolean = true
) =>
  queryOptions({
    queryKey: ['league-fixtures', leagueId, seasonId, round],
    enabled: enabled,
    queryFn: async () => {
      const response = await fetchAPISports<APIResponseType<FixturesType[]>>(
        `fixtures?league=${leagueId}&season=${seasonId}&round=${round}`
      );
      return response;
    },
  });
