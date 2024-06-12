import { Breadcrumbs } from '@/components';
import { CoachBar } from '@/components/coach-bar/coach-bar';
import GradientCard from '@/components/gradient-card/gradient-card';
import { RevalidateTime } from '@/enums/time';
import { fetchAPISports } from '@/lib/utils';
import { APIResponseType } from '@/models/api-response.model';
import { CoachType } from '@/models/coach.model';
import Image from 'next/image';
import { TrophiesType } from '@/models/trophies.model';

async function getData(coachId: number) {
  const coach = await fetchAPISports<APIResponseType<CoachType[]>>(
    `coachs?id=${coachId}`,
    { revalidate: RevalidateTime.ONE_DAY }
  );
  const trophies = await fetchAPISports<APIResponseType<TrophiesType[]>>(
    `trophies?coach=${coachId}`,
    { revalidate: RevalidateTime.ONE_DAY }
  );
  return { coach, trophies };
}

export default async function CoachPage({ params }: any) {
  const data = await getData(params.id);
  const coachData = data.coach?.response[0] || null;
  const trophiesData = data.trophies?.response || null;

  if (!coachData || !trophiesData) {
    return <div className="text-black">Coach not found</div>;
  }

  const breadcrumbs = [
    {
      link: `/`,
      text: 'Home',
      showSeparator: true,
    },
    {
      link: `/team/${coachData.team.id}`,
      text: coachData.team.name,
      showSeparator: true,
    },
    { link: '', text: coachData.name, showSeparator: false },
  ];

  return (
    <div className="flex h-full w-full flex-row flex-nowrap">
      <div className="w-[250px] bg-gradient-to-t from-emerald-500 to-indigo-500">
        <CoachBar coach={coachData} />
      </div>
      <main className="grow overflow-y-auto px-4">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="my-2"
        />
        <div className="flex flex-wrap gap-4">
          <GradientCard
            headerTitle="Career"
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
              headerTitle="Trophies"
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
