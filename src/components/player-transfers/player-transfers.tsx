import { TransfersType } from '@/lib/models/player-transfers.model';
import { strings } from '@/lib/strings';
import { DataTable, GradientCard } from '..';
import { playerTransfersColumns } from './player-transfers-columns';

type PlayerTransfersProps = {
  data: TransfersType[];
};

export function PlayerTransfers({ data }: PlayerTransfersProps) {
  return (
    <GradientCard
      className="w-[650px]"
      headerTitle={strings.Transfers}
    >
      <DataTable
        columns={playerTransfersColumns}
        data={data}
      />
    </GradientCard>
  );
}
