import { PlayerResponseType } from '@/lib/models/player-response.model';
import { strings } from '@/lib/strings';
import { GradientCard } from '../gradient-card/gradient-card';

type PlayerGoalsProps = {
  data: PlayerResponseType;
};

export function PlayerGoals({ data }: PlayerGoalsProps) {
  return (
    <GradientCard headerTitle="Goals">
      <div className="grid grid-cols-2 gap-2 pt-2">
        <p>{strings.Goals}: </p>
        <p className="place-self-end">{data.statistics[0].goals.total}</p>
        <div className="col-span-2 h-[1px] w-full bg-slate-200" />
        <p>{strings.Assists}</p>
        <p className="place-self-end">{data.statistics[0].goals.assists}</p>
        <div className="col-span-2 h-[1px] w-full bg-slate-200" />
        <p>{strings.Canadian} </p>
        <p className="place-self-end">
          {data.statistics[0].goals.total +
            (data.statistics[0].goals.assists || 0)}
        </p>
        <div className="col-span-2 h-[1px] w-full bg-slate-200" />
        <p>{strings.Conceded}</p>
        <p className="place-self-end">{data.statistics[0].goals.conceded}</p>
      </div>
    </GradientCard>
  );
}
