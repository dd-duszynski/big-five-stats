import { Breadcrumbs, BreadcrumbsItemType, CoachBar } from '@/components';
import { CoachType } from '@/lib/models/coach/coach.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { CoachCareer } from '../coach-career/coach-career';
import { CoachTrophies } from '../coach-trophies/coach-trophies';

type CoachPageComponentProps = {
  breadcrumbs: BreadcrumbsItemType[];
  coachData: CoachType;
  trophiesData: TrophiesType[];
};

export function CoachPageComponent({
  breadcrumbs,
  coachData,
  trophiesData,
}: CoachPageComponentProps) {
  return (
    <div className="flex h-full w-full flex-col md:flex-row md:flex-nowrap">
      <CoachBar coach={coachData} />
      <section className="grow px-4 md:overflow-y-auto">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="my-2"
        />
        <div className="flex flex-wrap items-start gap-4 pb-4">
          <CoachCareer data={coachData.career} />
          <CoachTrophies data={trophiesData} />
        </div>
      </section>
    </div>
  );
}
