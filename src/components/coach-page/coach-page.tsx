import { Breadcrumbs, BreadcrumbsItemType, CoachBar } from '@/components';
import { CoachType } from '@/lib/models/coach.model';
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
    <div className="flex h-full w-full flex-row flex-nowrap">
      <div className="w-[250px] overflow-y-auto overflow-x-hidden bg-gradient-to-t from-emerald-500 to-indigo-500">
        <CoachBar coach={coachData} />
      </div>
      <main className="grow overflow-y-auto px-4">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="my-2"
        />
        <div className="flex flex-wrap gap-4">
          <CoachCareer data={coachData.career} />
          <CoachTrophies data={trophiesData} />
        </div>
      </main>
    </div>
  );
}
