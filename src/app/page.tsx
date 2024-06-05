import { LeagueCard } from '@/components';
import { LEAGUES_ID } from '@/enums/league';
import { RevalidateTime } from '@/enums/time';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse, StandingsResponse } from '@/models/Standings.model';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';
import { Metadata } from 'next';

async function getData() {
  const leaguesId = Object.values(LEAGUES_ID).filter(
    (league) => typeof league === 'number'
  );
  const standingsPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponse<StandingsResponse[]>>(
      `standings?league=${league}&season=2023`,
      { revalidate: RevalidateTime.ONE_WEEK }
    );
  });
  const topScorersPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponse<TopScorerResponse[]>>(
      `players/topscorers?league=${league}&season=2023`,
      { revalidate: RevalidateTime.ONE_WEEK }
    );
  });
  const topAssistsPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponse<TopAssistsResponse[]>>(
      `players/topassists?league=${league}&season=2023`,
      { revalidate: RevalidateTime.ONE_WEEK }
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
  return (
    <div className="flex w-full flex-col items-center">
      {data.standings.map((league, index) => {
        if (!league || league.response.length === 0) return <p>No League</p>;
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
  );
}
