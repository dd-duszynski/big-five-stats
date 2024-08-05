import { APIResponseType } from '@/lib/models/api/api-response.model';
import { FixtureDetailsResponseType } from '@/lib/models/fixtures/fixture-details.model';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { queryOptions } from '@tanstack/react-query';

export const fixtureDetailsQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['fixture', id],
    enabled: !!id,
    queryFn: async () => {
      const response = await fetchAPISports<
        APIResponseType<FixtureDetailsResponseType[]>
      >(`fixtures?id=${id}`);
      return response;
    },
  });
