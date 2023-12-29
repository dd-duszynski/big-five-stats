import { LeagueCard, Navigation } from '@/components';
import { LEAGUES_ID } from '@/enums/league';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse } from '@/models/league.model';
import { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
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

export const metadata: Metadata = {
  title: 'Big Five',
  description: 'Football stats for the big five leagues.',
};

export default async function Home() {
  const data = await getData();
  console.log('data: ', data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-row flex-wrap gap-5">
        {data.map((league) => {
          if (!league) return null;
          return (
            <LeagueCard
              league={league.response[0].league}
              standings={league.response[0].league.standings[0]}
              crestSrc={league.response[0].league.logo}
              name={league.response[0].league.name}
              key={league.response[0].league.id}
            />
          );
        })}
      </div>
      <Link href="/settings">Settings</Link>
    </main>
  );
}
