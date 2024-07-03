import { BreadcrumbsItemType } from '@/components/breadcrumbs/breadcrumbs';
import CoachPageComponent from '@/components/coach-page/coach-page';
import { RevalidateTime } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api-response.model';
import { CoachType } from '@/lib/models/coach.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings/strings';
import { fetchAPISports } from '@/lib/utils/fetch-api-sports';
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Big Five - Coach',
  description: 'Football stats for the league.',
};

export default async function CoachPage({ params }: any) {
  const data = await getData(params.id);
  const coachData = data.coach?.response[0] || null;
  const trophiesData = data.trophies?.response || null;

  if (!coachData || !trophiesData) {
    return <div className="text-black">{strings.Coach_not_found}</div>;
  }

  const breadcrumbs: BreadcrumbsItemType[] = [
    {
      link: `/`,
      text: strings.Home,
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
    <CoachPageComponent
      breadcrumbs={breadcrumbs}
      coachData={coachData}
      trophiesData={trophiesData}
    />
  );
}
