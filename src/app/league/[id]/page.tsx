import { BreadcrumbsItemType, LeaguePageComponent, Loader } from '@/components';
import { REVALIDATE_TIME } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api/api-response.model';
import { FixturesForRoundResponseType } from '@/lib/models/fixtures/fixtures-for-round.model';
import { StandingsResponseType } from '@/lib/models/standings/standings-response.model';
import { strings } from '@/lib/strings';
import { currentYear } from '@/lib/utils/const/current-year';
import { fetchAPISports } from '@/lib/utils/helpers/fetch-api-sports';
import { Metadata } from 'next';

async function getData(id: number) {
  const standings = await fetchAPISports<
    APIResponseType<StandingsResponseType[]>
  >(`standings?league=${id}&season=${currentYear}`, {
    revalidate: REVALIDATE_TIME.ONE_DAY,
  });
  const rounds = await fetchAPISports<APIResponseType<string[]>>(
    `fixtures/rounds?league=${id}&season=${currentYear}`,
    { revalidate: REVALIDATE_TIME.ONE_DAY }
  );
  const fixtures = await fetchAPISports<
    APIResponseType<FixturesForRoundResponseType[]>
  >(`fixtures?league=${id}&season=${currentYear}&round=Regular Season - 1`, {
    revalidate: REVALIDATE_TIME.ONE_DAY,
  });

  return {
    standings,
    rounds,
    fixtures,
  };
}

export const metadata: Metadata = {
  title: 'Big Five - League Stats',
  description: 'Football stats for the league.',
};

export default async function LeaguePage({ params }: any) {
  const { standings, fixtures, rounds } = await getData(params.id);
  const standingsData = standings?.response;
  const gamesData = fixtures?.response;
  const roundsData = rounds?.response;

  if (!standingsData || !gamesData || !roundsData) {
    return <Loader />;
  }

  const breadcrumbs: BreadcrumbsItemType[] = [
    {
      link: `/`,
      text: strings.Home,
      showSeparator: true,
    },
    {
      link: '',
      text: standingsData[0].league.name,
      showSeparator: false,
    },
  ];

  const leagueId = standingsData[0].league.id;

  return (
    <LeaguePageComponent
      breadcrumbs={breadcrumbs}
      fixtures={gamesData}
      leagueId={leagueId}
      rounds={roundsData}
      standings={standingsData}
    />
  );
}
