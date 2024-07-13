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
      className="w-[650px]"
      headerTitle={strings.Sidelined}
    >
      <DataTable
        columns={playerSidelinedColumns}
        data={data}
      />
    </GradientCard>
  );
}
