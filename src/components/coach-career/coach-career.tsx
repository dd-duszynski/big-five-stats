import { CareerType } from '@/lib/models/career.model';
import { strings } from '@/lib/strings';
import { DataTable, GradientCard } from '..';
import { coachCareerColumns } from './coach-career-columns';

type CoachCareerProps = {
  data: CareerType[];
};

export function CoachCareer({ data }: CoachCareerProps) {
  return (
    <GradientCard
      headerTitle={strings.Career}
      className="w-[500px]"
    >
      <DataTable
        columns={coachCareerColumns}
        data={data}
      />
    </GradientCard>
  );
}
