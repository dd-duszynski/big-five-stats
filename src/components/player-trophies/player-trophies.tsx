import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings';
import { DataTable, GradientCard } from '..';
import { playerTrophiesColumns } from './player-trophies-columns';

type PlayerTrophiesProps = {
  data: TrophiesType[];
};

export function PlayerTrophies({ data }: PlayerTrophiesProps) {
  return (
    <GradientCard
      className="w-[650px]"
      headerTitle={strings.Trophies}
    >
      <DataTable
        columns={playerTrophiesColumns}
        data={data}
      />
    </GradientCard>
  );
}
