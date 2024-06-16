import { LeagueCard } from '@/components';
import { LEAGUES_ID } from '@/enums/league';
import { RevalidateTime } from '@/enums/time';
import { fetchAPISports } from '@/lib/utils';
import { APIResponseType } from '@/models/api-response.model';
import { PlayerResponseType } from '@/models/player-response.model';
import { StandingsResponseType } from '@/models/standings-response.model';
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
  console.log('standings:', standings);
  console.log('topScorers:', topScorers);
  console.log('topAssists:', topAssists);

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
  );
}
