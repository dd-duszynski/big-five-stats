import { Breadcrumbs, PlayerBar } from '@/components';
import GradientCard from '@/components/gradient-card/gradient-card';
import { RevalidateTime } from '@/enums/time';
import { fetchAPISports } from '@/lib/utils';
import { PlayerResponse } from '@/models/Player.model';
import { APIResponse } from '@/models/Standings.model';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

async function getData(playerId: number) {
  const playerResponse = await fetchAPISports<APIResponse<PlayerResponse[]>>(
    `players/?id=${playerId}&season=2023`,
    { revalidate: RevalidateTime.ONE_WEEK }
  );
  /* TODO_DD: move this to helper function */
  // if (playerResponse && playerResponse.response.length > 0) {
  //   fs.writeFile(
  //     path.resolve(`./data/players/player-${playerId}.json`),
  //     JSON.stringify(playerResponse.response),
  //     (err) => {
  //       if (err) {
  //         console.error('Error writing data to file:', err);
  //       } else {
  //         console.log(`Data for player ${playerId} saved to file.`);
  //       }
  //     }
  //   );
  // }
  console.log('playerResponse:', playerResponse);
  return playerResponse;
}

export const metadata: Metadata = {
  title: 'Big Five - Player statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function PlayerPage({ params }: any) {
  const data = await getData(params.id);
  const playerData = data?.response[0] || null;

  if (!playerData) return <div className="text-black">Player not found</div>;

  const breadcrumbs = [
    {
      link: `/`,
      text: 'Home',
      showSeparator: true,
    },
    {
      link: `/league/${playerData.statistics[0].league.id}`,
      text: playerData.statistics[0].league.name,
      showSeparator: true,
    },
    {
      link: `/team/${playerData.statistics[0].team.id}`,
      text: playerData.statistics[0].team.name,
      showSeparator: true,
    },
    { link: '', text: playerData.player.name, showSeparator: false },
  ];

  return (
    <div className="flex h-full w-full flex-row flex-nowrap">
      <div className="w-[250px] bg-gradient-to-t from-emerald-500 to-indigo-500">
        <PlayerBar
          player={playerData.player}
          statistics={playerData.statistics}
        />
      </div>
      <main className="grow px-4">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="my-2"
        />
        <div className="flex flex-wrap gap-4">
          <GradientCard
            headerTitle="Games"
            className="w-[350px]"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              <p>Appearences </p>
              <p className="place-self-end">
                {playerData.statistics[0].games.appearences}{' '}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>Lineups </p>
              <p className="place-self-end">
                {playerData.statistics[0].games.lineups}{' '}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>Minutes </p>
              <p className="place-self-end">
                {playerData.statistics[0].games.minutes}{' '}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>Rating:</p>
              <p className="place-self-end">
                {playerData.statistics[0].games.rating?.slice(0, 4)}
              </p>
            </div>
          </GradientCard>
          <GradientCard headerTitle="Goals">
            <div className="grid grid-cols-2 gap-2 pt-2">
              <p>Goals: </p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.total}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>Assists</p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.assists}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>Canadian </p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.total +
                  (playerData.statistics[0].goals.assists || 0)}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>Conceded:</p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.conceded}
              </p>
            </div>
          </GradientCard>
        </div>
      </main>
    </div>
  );
}

/* TODO_DD: 
transfers:  https://www.api-football.com/documentation-v3#tag/Transfers/operation/get-transfers 
trophies: https://www.api-football.com/documentation-v3#tag/Trophies
sidelied: https://www.api-football.com/documentation-v3#tag/Sidelined
*/
