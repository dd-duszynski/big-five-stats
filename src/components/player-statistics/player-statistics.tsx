import { PlayerStatisticType } from '@/lib/models/player/player-statistic.model';
import { strings } from '@/lib/strings';
import { DataTable, GradientCard } from '..';
import { playerStatisticsColumns } from './player-statistics-columns';

type PlayerStatisticsProps = {
  data: PlayerStatisticType[];
};

export function PlayerStatistics({ data }: PlayerStatisticsProps) {
  return (
    <GradientCard
      className="w-full"
      headerTitle={strings.Statistics}
    >
      <DataTable
        columns={playerStatisticsColumns}
        data={data}
      />
    </GradientCard>
  );
}
