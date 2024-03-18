import { LeagueCard, Navigation } from '@/components';
import { LEAGUES_ID } from '@/enums/league';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse } from '@/models/Standings.model';
import { cx } from 'class-variance-authority';
import { Metadata } from 'next';
import Link from 'next/link';

async function getTablesData() {
  const leaguesId = Object.values(LEAGUES_ID).filter(
    (league) => typeof league === 'number'
  );
  const leaguesPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponse>(
      `standings?league=${league}&season=2023`
    );
  });
  const results = await Promise.all(leaguesPromises);
  return results;
}

async function getTopScorersData() {
  const leaguesId = Object.values(LEAGUES_ID).filter(
    (league) => typeof league === 'number'
  );
  const leaguesPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponse>(
      `players/topscorers?league=${league}&season=2023`
    );
  });
  const results = await Promise.all(leaguesPromises);
  return results;
}

async function getTopAssistsData() {
  const leaguesId = Object.values(LEAGUES_ID).filter(
    (league) => typeof league === 'number'
  );
  const leaguesPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponse>(
      `players/topassists?league=${league}&season=2023`
    );
  });
  const results = await Promise.all(leaguesPromises);
  return results;
}

export const metadata: Metadata = {
  description: 'Football stats for the big five leagues.',
  title: 'Big Five',
};

export default async function Home() {
  const tablesData = await getTablesData();
  const topPlayersData = await getTopScorersData();
  const topAssistsData = await getTopAssistsData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-row flex-wrap gap-5">
        {tablesData.map((league) => {
          if (!league) return null;
          const topScorers = topPlayersData.find(
            (element) =>
              element.parameters.league == league.response[0].league.id
          );
          const topAssists = topAssistsData.find(
            (element) =>
              element.parameters.league == league.response[0].league.id
          );
          return (
            <LeagueCard
              crestSrc={league.response[0].league.logo}
              key={league.response[0].league.id}
              league={league.response[0].league}
              name={league.response[0].league.name}
              standings={league.response[0].league.standings[0]}
              topScorers={topScorers?.response}
              topAssists={topAssists?.response}
            />
          );
        })}
      </div>
      <Link href="/settings">Settings</Link>
    </main>
  );
}
