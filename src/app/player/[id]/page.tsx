import { Breadcrumbs, PlayerBar } from '@/components';
import GradientCard from '@/components/gradient-card/gradient-card';
import { RevalidateTime } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api-response.model';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings/strings';
import { fetchAPISports } from '@/lib/utils/fetch-api-sports';
import { Metadata } from 'next';

async function getData(playerId: number) {
  const player = await fetchAPISports<APIResponseType<PlayerResponseType[]>>(
    `players/?id=${playerId}&season=2023`,
    {
      revalidate: RevalidateTime.ONE_DAY,
    }
  );
  const trophies = await fetchAPISports<APIResponseType<TrophiesType[]>>(
    `trophies?player=${playerId}`,
    { revalidate: RevalidateTime.ONE_DAY }
  );
  return { player, trophies };
}

export const metadata: Metadata = {
  title: 'Big Five - Player statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function PlayerPage({ params }: any) {
  const data = await getData(params.id);
  const playerData = data.player?.response[0] || null;
  const trophiesData = data.trophies?.response || null;

  if (!playerData || !trophiesData) {
    return <div className="text-black">{strings.Player_not_found}</div>;
  }

  const breadcrumbs = [
    {
      link: `/`,
      text: strings.Home,
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
      <div className="w-[250px] overflow-y-auto overflow-x-hidden bg-gradient-to-t from-emerald-500 to-indigo-500">
        <PlayerBar
          player={playerData.player}
          statistics={playerData.statistics}
        />
      </div>
      <main className="grow overflow-y-auto px-4">
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
              <p>{strings.Appearences} </p>
              <p className="place-self-end">
                {playerData.statistics[0].games.appearences}{' '}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>{strings.Lineups} </p>
              <p className="place-self-end">
                {playerData.statistics[0].games.lineups}{' '}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>{strings.Minutes}</p>
              <p className="place-self-end">
                {playerData.statistics[0].games.minutes}{' '}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>{strings.Rating}:</p>
              <p className="place-self-end">
                {playerData.statistics[0].games.rating?.slice(0, 4)}
              </p>
            </div>
          </GradientCard>
          <GradientCard headerTitle="Goals">
            <div className="grid grid-cols-2 gap-2 pt-2">
              <p>{strings.Goals}: </p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.total}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>{strings.Assists}</p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.assists}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>{strings.Canadian} </p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.total +
                  (playerData.statistics[0].goals.assists || 0)}
              </p>
              <div className="col-span-2 h-[1px] w-full bg-slate-200" />
              <p>{strings.Conceded}</p>
              <p className="place-self-end">
                {playerData.statistics[0].goals.conceded}
              </p>
            </div>
          </GradientCard>
        </div>
        {/* TODO_DD: to unify with coach trophies */}
        <div className="flex flex-wrap gap-4">
          <GradientCard
            headerTitle={strings.Trophies}
            className="w-[450px]"
          >
            <div className="flex flex-col">
              {/* TODO_DD: use table */}
              {trophiesData.map((trophies, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center border-b-2 border-slate-200"
                >
                  <div>
                    <p className="place-self-end">
                      {trophies.league} - {trophies.place}
                    </p>
                    <p className="place-self-end">
                      {trophies.country} - {trophies.season}
                    </p>
                  </div>
                </div>
              ))}
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
