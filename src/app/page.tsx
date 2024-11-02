import { LeagueCard, Loader } from '@/components';
import { REVALIDATE_TIME } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api/api-response.model';
import { StandingsResponseType } from '@/lib/models/standings/standings-response.model';
import { currentYear } from '@/lib/utils/const/current-year';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { topFiveLeaguesIds } from '@/lib/utils/helpers/get-all-leagues-id';
import { getQueryClient } from '@/lib/utils/query-options/get-query-client';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

async function getData() {
  const standingsPromises = topFiveLeaguesIds.map((league) => {
    return fetchAPISports<APIResponseType<StandingsResponseType[]>>(
      `standings?league=${league}&season=${currentYear}`,
      { revalidate: REVALIDATE_TIME.ONE_DAY }
    );
  });
  const standings = await Promise.all(standingsPromises);
  return { standings };
}

export const metadata: Metadata = {
  description: 'Football stats for the big five leagues.',
  title: 'Big Five - Football stats',
};

export default async function Home() {
  const { standings } = await getData();
  const standingsData = standings || null;

  if (!standingsData) {
    return <Loader />;
  }

  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex w-full flex-col items-center">
        {standingsData.map((league, index) => {
          if (!league || league.response.length === 0) return null;
          const leagueId = league.response[0].league.id;
          return (
            <LeagueCard
              isInitialyCollapsed={index !== 0}
              key={leagueId}
              leagueId={leagueId}
              standingsLeagueData={league.response[0].league}
            />
          );
        })}
      </div>
    </HydrationBoundary>
  );
}

/* TODO_DD: https://www.youtube.com/watch?v=KAjemAivU24 */
