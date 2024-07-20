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
      className="w-full lg:w-[calc(50%-8px)]"
      headerTitle={strings.Career}
    >
      <DataTable
        className="max-h-[calc(100vh-12rem)]"
        columns={coachCareerColumns}
        data={data}
      />
    </GradientCard>
  );
}
