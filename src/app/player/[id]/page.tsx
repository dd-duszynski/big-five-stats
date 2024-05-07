import { PlayerBar, Text } from '@/components';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { fetchAPISports } from '@/lib/utils';
import { PlayerResponse } from '@/models/Player.model';
import { APIResponse } from '@/models/Standings.model';
import { Metadata } from 'next';

async function getData(playerId: number) {
  const playerResponse = await fetchAPISports<APIResponse<PlayerResponse[]>>(
    `players/?id=${playerId}&season=2023`,
    { revalidate: 3600 }
  );
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

  return (
    <div className="flex h-full w-full flex-row flex-nowrap">
      <div className="w-[250px] bg-gradient-to-t from-emerald-500 to-indigo-500">
        <PlayerBar
          player={playerData.player}
          statistics={playerData.statistics}
        />
      </div>
      <main className="grow">
        <div className="p-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/league/${playerData.statistics[0].league.id}`}
                >
                  {playerData.statistics[0].league.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/team/${playerData.statistics[0].team.id}`}
                >
                  {playerData.statistics[0].team.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{playerData.player.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-wrap gap-4 p-1">
          <Card className="w-[300px]">
            <CardHeader className="flex items-center justify-center gap-3 rounded-t-md bg-gradient-to-r from-indigo-500 to-emerald-500">
              <Text
                variant="h3"
                className="text-center text-white"
              >
                Games
              </Text>
            </CardHeader>

            <CardContent>
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
            </CardContent>
          </Card>

          <Card className="w-[300px]">
            <CardHeader className="flex items-center justify-center gap-3 rounded-t-md bg-gradient-to-r from-indigo-500 to-emerald-500">
              <Text
                variant="h3"
                className="text-center text-white"
              >
                Numbers
              </Text>
            </CardHeader>

            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
