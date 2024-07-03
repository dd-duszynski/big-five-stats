import {
  Breadcrumbs,
  BreadcrumbsItemType,
  CoachBar,
  GradientCard,
} from '@/components';
import { CoachType } from '@/lib/models/coach.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings/strings';
import Image from 'next/image';

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
          <GradientCard
            headerTitle={strings.Career}
            className="w-[450px]"
          >
            <div className="flex flex-col">
              {/* TODO_DD: use table */}
              {coachData.career.map((career) => (
                <div
                  key={career.team.id}
                  className="flex flex-row items-center"
                >
                  <Image
                    src={career.team.logo}
                    alt={career.team.name}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="place-self-end">{career.team.name}</p>
                    <p className="place-self-end">
                      {career.start} - {career.end ? career.end : 'Present'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GradientCard>
          {/* TODO_DD: to unify with player trophies */}
          <div className="flex flex-wrap gap-4">
            <GradientCard
              headerTitle={strings.Trophies}
              className="w-[450px]"
            >
              <div className="flex flex-col">
                {/* TODO_DD: use table */}
                {trophiesData.map((trophies, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center border-b-2 border-slate-200"
                  >
                    <div>
                      <p className="place-self-end">
                        {trophies.league} - {trophies.place}
                      </p>
                      <p className="place-self-end">
                        {trophies.country} - {trophies.season}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GradientCard>
          </div>
        </div>
      </main>
    </div>
  );
}
