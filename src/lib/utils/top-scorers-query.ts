import { queryOptions } from '@tanstack/react-query';
import { fetchAPISports } from './fetch-api-sports';
import { APIResponseType } from '../models/api-response.model';
import { PlayerResponseType } from '../models/player-response.model';

export const pokemonOptions = queryOptions({
  queryKey: ['pokemon'],
  queryFn: async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');

    return response.json();
  },
});

export const topScorersOptions = queryOptions({
  queryKey: ['top-scorers'],
  queryFn: async () => {
    const response = await fetchAPISports<
      APIResponseType<PlayerResponseType[]>
    >(`players/topscorers?league=135&season=2023`);
    console.log('process.env.X_APISPORTS_KEY:', process.env.X_APISPORTS_KEY);
    return response;
  },
});

// ver server
// const queryClient = getQueryClient()
// void queryClient.prefetchQuery(pokemonOptions)

// ver client
// const queryClient = getQueryClient()
// void queryClient.prefetchQuery(pokemonOptions)
