import { BreadcrumbsItemType, LeaguePageComponent } from '@/components';
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
  if (
    !data ||
    !data.standings ||
    !data.rounds ||
    !data.games ||
    !data.standings.response.length
  ) {
    return <div className="text-black">{strings.Data_not_found}</div>;
  }

  const breadcrumbs: BreadcrumbsItemType[] = [
    {
      link: `/`,
      text: strings.Home,
      showSeparator: true,
    },
    {
      link: '',
      text: data.standings.response[0].league.name,
      showSeparator: false,
    },
  ];
  const leagueId = data.standings.response[0].league.id;

  return (
    <LeaguePageComponent
      breadcrumbs={breadcrumbs}
      games={data.games.response}
      leagueId={leagueId}
      rounds={data.rounds.response}
      standings={data.standings.response}
    />
  );
}
