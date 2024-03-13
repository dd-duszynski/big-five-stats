import { LeagueCard } from '@/components';
import { LEAGUES_ID } from '@/enums/league';
import { fetchAPISports } from '@/lib/utils';
import { APIResponse } from '@/models/league.model';
import { Metadata } from 'next';
import Link from 'next/link';

async function getData(teamId) {
  const results = await fetchAPISports<APIResponse>(
    `teams/statistics?season=2023&team=${teamId}&league=135`
  );
  return results;
}

// export const metadata: Metadata = {
//   title: 'Big Five',
//   description: 'Football stats for the big five leagues.',
// };

export default async function TeamPage({ params }: any) {
  const data = await getData(params.id);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <p>{data?.response?.team?.name}</p>
      <Link href="/">Home</Link>
    </div>
  );
}
