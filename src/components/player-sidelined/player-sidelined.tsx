import { PlayerSidelinedType } from '@/lib/models/player-sidelined.model';
import { strings } from '@/lib/strings';
import { DataTable, GradientCard } from '..';
import { playerSidelinedColumns } from './player-sidelined-columns';

type PlayerTransfersProps = {
  data: PlayerSidelinedType[];
};

export function PlayerSidelined({ data }: PlayerTransfersProps) {
  return (
    <GradientCard
      className="w-full lg:w-[calc(50%-8px)]"
      headerTitle={strings.Sidelined}
    >
      <DataTable
        className="max-h-[calc(100vh-12rem)]"
        columns={playerSidelinedColumns}
        data={data}
      />
    </GradientCard>
  );
}
