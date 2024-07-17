import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings';
import { DataTable, GradientCard } from '..';
import { coachTrophiesColumns } from './coach-trophies-columns';

type CoachTrophiesProps = {
  data: TrophiesType[];
};

export function CoachTrophies({ data }: CoachTrophiesProps) {
  return (
    <GradientCard
      headerTitle={strings.Trophies}
      className="w-[650px]"
    >
      <DataTable
        columns={coachTrophiesColumns}
        data={data}
        className="max-h-[calc(100vh-12rem)]"
      />
    </GradientCard>
  );
}
