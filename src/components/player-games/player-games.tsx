import { PlayerResponseType } from '@/lib/models/player-response.model';
import { strings } from '@/lib/strings';
import { GradientCard } from '..';

type PlayerGamesProps = {
  data: PlayerResponseType;
};

export function PlayerGames({ data }: PlayerGamesProps) {
  return (
    <GradientCard
      headerTitle={strings.Games}
      className="w-[350px]"
    >
      <div className="grid grid-cols-2 gap-2 pt-2">
        <p>{strings.Appearences} </p>
        <p className="place-self-end">
          {data.statistics[0].games.appearences}{' '}
        </p>
        <div className="col-span-2 h-[1px] w-full bg-slate-200" />
        <p>{strings.Lineups} </p>
        <p className="place-self-end">{data.statistics[0].games.lineups} </p>
        <div className="col-span-2 h-[1px] w-full bg-slate-200" />
        <p>{strings.Minutes}</p>
        <p className="place-self-end">{data.statistics[0].games.minutes} </p>
        <div className="col-span-2 h-[1px] w-full bg-slate-200" />
        <p>{strings.Rating}:</p>
        <p className="place-self-end">
          {data.statistics[0].games.rating?.slice(0, 4)}
        </p>
      </div>
    </GradientCard>
  );
}
