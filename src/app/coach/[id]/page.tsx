import { Breadcrumbs, PlayerBar } from '@/components';
import GradientCard from '@/components/gradient-card/gradient-card';
import { RevalidateTime } from '@/enums/time';
import { fetchAPISports } from '@/lib/utils';
import { PlayerResponse } from '@/models/Player.model';
import { APIResponse } from '@/models/Standings.model';
import { Metadata } from 'next';

async function getData(playerId: number) {}

// export const metadata: Metadata = {
//   title: 'Big Five - Player statistics',
//   description: 'Football stats for the big five leagues.',
// };

export default async function CoachPage({ params }: any) {
  return (
    <div className="flex h-full w-full flex-row flex-nowrap">
      <main className="grow px-4">Coach Page</main>
    </div>
  );
}

/* TODO_DD: 
https://www.api-football.com/documentation-v3#tag/Coachs/operation/get-coachs
*/
