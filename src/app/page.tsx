import { LeagueCard } from '@/components';
import { LEAGUES_ID } from '@/lib/enums/league';
import { RevalidateTime } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api-response.model';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { StandingsResponseType } from '@/lib/models/standings-response.model';
import { fetchAPISports } from '@/lib/utils/fetch-api-sports';
import { getQueryClient } from '@/lib/utils/get-query-client';
import { pokemonOptions } from '@/lib/utils/top-scorers-query';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

async function getData() {
  const leaguesId = Object.values(LEAGUES_ID).filter(
    (league) => typeof league === 'number'
  );
  const standingsPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponseType<StandingsResponseType[]>>(
      `standings?league=${league}&season=2023`,
      { revalidate: RevalidateTime.ONE_DAY }
    );
  });
  const topScorersPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponseType<PlayerResponseType[]>>(
      `players/topscorers?league=${league}&season=2023`,
      { revalidate: RevalidateTime.ONE_DAY }
    );
  });
  const topAssistsPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponseType<PlayerResponseType[]>>(
      `players/topassists?league=${league}&season=2023`,
      { revalidate: RevalidateTime.ONE_DAY }
    );
  });

  const standings = await Promise.all(standingsPromises);
  const topScorers = await Promise.all(topScorersPromises);
  const topAssists = await Promise.all(topAssistsPromises);

  return {
    standings,
    topScorers,
    topAssists,
  };
}

export const metadata: Metadata = {
  description: 'Football stats for the big five leagues.',
  title: 'Big Five - Football stats',
};

export default async function Home() {
  const data = await getData();
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(pokemonOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex w-full flex-col items-center">
        {data.standings.map((league, index) => {
          if (!league || league.response.length === 0) return null;
          const leagueId = league.response[0].league.id;
          const topScorers = data.topScorers.find(
            (topScorersItem) =>
              Number(topScorersItem?.parameters.league) === leagueId
          );
          const topAssists = data.topAssists.find(
            (topAssistsItem) =>
              Number(topAssistsItem?.parameters.league) === leagueId
          );
          return (
            <LeagueCard
              isInitialyCollapsed={index !== 0}
              key={leagueId}
              league={league.response[0].league}
              topAssists={topAssists?.response}
              topScorers={topScorers?.response}
            />
          );
        })}
      </div>
    </HydrationBoundary>
  );
}
