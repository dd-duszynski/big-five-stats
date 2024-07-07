import { BreadcrumbsItemType, LeaguePageComponent, Loader } from '@/components';
import { RevalidateTime } from '@/lib/enums/revalidate-time';
import { APIResponseType } from '@/lib/models/api-response.model';
import { FixturesType } from '@/lib/models/fixtures.model';
import { StandingsResponseType } from '@/lib/models/standings-response.model';
import { strings } from '@/lib/strings';
import { fetchAPISports } from '@/lib/utils/fetch-api-sports';
import { Metadata } from 'next';

async function getData(id: number) {
  const standings = await fetchAPISports<
    APIResponseType<StandingsResponseType[]>
  >(`standings?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_DAY,
  });
  const rounds = await fetchAPISports<APIResponseType<string[]>>(
    `fixtures/rounds?league=${id}&season=2023`,
    { revalidate: RevalidateTime.ONE_DAY }
  );
  const games = await fetchAPISports<APIResponseType<FixturesType[]>>(
    `fixtures?league=${id}&season=2023&round=Regular Season - 1`,
    { revalidate: RevalidateTime.ONE_DAY }
  );

  return {
    standings,
    rounds,
    games,
  };
}

export const metadata: Metadata = {
  title: 'Big Five - League Stats',
  description: 'Football stats for the league.',
};

export default async function LeaguePage({ params }: any) {
  const data = await getData(params.id);
  const standingsData = data.standings?.response;
  const dataGames = data.games?.response;
  const dataRounds = data.rounds?.response;

  if (!data || !standingsData || !dataGames || !dataRounds) {
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
      games={dataGames}
      leagueId={leagueId}
      rounds={dataRounds}
      standings={standingsData}
    />
  );
}
