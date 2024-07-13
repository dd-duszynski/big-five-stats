import {
  Breadcrumbs,
  BreadcrumbsItemType,
  GradientCard,
  PlayerBar,
} from '@/components';
import { PlayerResponseType } from '@/lib/models/player-response.model';
import { PlayerSidelinedType } from '@/lib/models/player-sidelined.model';
import { TransfersType } from '@/lib/models/player-transfers.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings/strings';
import { PlayerSidelined } from '../player-sidelined/player-sidelined';
import { PlayerTransfers } from '../player-transfers/player-transfers';
import { PlayerTrophies } from '../player-trophies/player-trophies';

type PlayerPageComponentProps = {
  breadcrumbs: BreadcrumbsItemType[];
  playerData: PlayerResponseType;
  sidelinedData: PlayerSidelinedType[];
  transfersData: TransfersType[];
  trophiesData: TrophiesType[];
};

export function PlayerPageComponent({
  breadcrumbs,
  playerData,
  transfersData,
  trophiesData,
  sidelinedData,
}: PlayerPageComponentProps) {
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
        <PlayerTrophies data={trophiesData} />
        <PlayerTransfers data={transfersData} />
        <PlayerSidelined data={sidelinedData} />

        {/* <div className="flex flex-wrap gap-4">
          <GradientCard
            headerTitle={strings.Sidelined}
            className="w-[450px]"
          >
            <div className="flex flex-col">
              {sidelinedData.map((sideline, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center border-b-2 border-slate-200"
                >
                  <div>
                    <p className="place-self-end">{sideline.type}</p>
                    <p className="place-self-end">
                      {sideline.start} - {sideline.end}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GradientCard>
        </div> */}

        <div className="flex flex-wrap gap-4">
          <GradientCard
            headerTitle={strings.Career}
            className="w-[450px]"
          >
            <div className="flex flex-col">
              {/* TODO_DD: use table */}
              {playerData.statistics.map((playerStatistic, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center border-b-2 border-slate-200"
                >
                  <div>
                    <p className="place-self-end">
                      {playerStatistic.team.name} -{' '}
                      {playerStatistic.league.season}
                    </p>
                    <p className="place-self-end">
                      {playerStatistic.games.appearences} -{' '}
                      {playerStatistic.goals.total || 0} -{' '}
                      {playerStatistic.goals.assists || 0}
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
