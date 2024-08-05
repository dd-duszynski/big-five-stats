import { BreadcrumbsItemType, CoachPageComponent, Loader } from '@/components';
import { REVALIDATE_TIME } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api/api-response.model';
import { CoachType } from '@/lib/models/coach/coach.model';
import { TrophiesType } from '@/lib/models/trophies.model';
import { strings } from '@/lib/strings';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { Metadata } from 'next';

async function getData(coachId: number) {
  const coach = await fetchAPISports<APIResponseType<CoachType[]>>(
    `coachs?id=${coachId}`,
    { revalidate: REVALIDATE_TIME.ONE_DAY }
  );
  const trophies = await fetchAPISports<APIResponseType<TrophiesType[]>>(
    `trophies?coach=${coachId}`,
    { revalidate: REVALIDATE_TIME.ONE_DAY }
  );
  return { coach, trophies };
}

export const metadata: Metadata = {
  title: 'Big Five - Coach',
  description: 'Football stats for the league.',
};

export default async function CoachPage({ params }: any) {
  const { coach, trophies } = await getData(params.id);
  const coachData = coach?.response[0];
  const trophiesData = trophies?.response;

  if (!coachData || !trophiesData) {
    return <Loader />;
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
