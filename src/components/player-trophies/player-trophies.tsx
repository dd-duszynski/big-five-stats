import { TrophiesType } from '@/lib/models/general/trophies.model';
import { strings } from '@/lib/strings';
import { DataTable, GradientCard } from '..';
import { playerTrophiesColumns } from './player-trophies-columns';

type PlayerTrophiesProps = {
  data: TrophiesType[];
};

export function PlayerTrophies({ data }: PlayerTrophiesProps) {
  return (
    <GradientCard
      className="w-full lg:w-[calc(50%-8px)]"
      headerTitle={strings.Trophies}
    >
      <DataTable
        className="max-h-[calc(100vh-12rem)]"
        columns={playerTrophiesColumns}
        data={data}
      />
    </GradientCard>
  );
}
