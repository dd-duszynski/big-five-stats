import { Breadcrumbs, DataTable } from '@/components';
import { redCardsColumns } from '@/components/data-table/columns/red-cards-columns';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import { topAssistsColumns } from '@/components/data-table/columns/top-assists-columns';
import { topScorersColumns } from '@/components/data-table/columns/top-scorers-columns';
import { yellowCardsColumns } from '@/components/data-table/columns/yellow-cards-columns';
import Fixtures from '@/components/fixtures/fixtures';
import GradientCard from '@/components/gradient-card/gradient-card';
import LeagueTable from '@/components/league-table/league-table';
import { PageHeader } from '@/components/page-header/page-header';
import { RevalidateTime } from '@/enums/time';
import { strings } from '@/lib/strings';
import { fetchAPISports } from '@/lib/utils';
import { APIResponseType } from '@/models/api-response.model';
import { FixturesType } from '@/models/fixtures.model';
import { PlayerResponseType } from '@/models/player-response.model';
import { StandingsResponseType } from '@/models/standings-response.model';
import { Metadata } from 'next';

async function getData(id: number) {
  const standings = await fetchAPISports<
    APIResponseType<StandingsResponseType[]>
  >(`standings?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_DAY,
  });
  const topScorers = await fetchAPISports<
    APIResponseType<PlayerResponseType[]>
  >(`players/topscorers?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_DAY,
  });
  const topAssists = await fetchAPISports<
    APIResponseType<PlayerResponseType[]>
  >(`players/topassists?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_DAY,
  });
  const yellowCard = await fetchAPISports<
    APIResponseType<PlayerResponseType[]>
  >(`players/topyellowcards?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_DAY,
  });
  const redCard = await fetchAPISports<APIResponseType<PlayerResponseType[]>>(
    `players/topredcards?league=${id}&season=2023`,
    { revalidate: RevalidateTime.ONE_DAY }
  );
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
    topScorers,
    topAssists,
    yellowCard,
    redCard,
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
  if (!data || !data.standings || !data.standings.response.length)
    return <div className="text-black">{strings.Data_not_found}</div>;

  const breadcrumbs = [
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

  return (
    <div className="h-full w-full">
      <PageHeader
        logo={data.standings.response[0].league.logo}
        logoSize="lg"
        subLogo={data.standings.response[0].league.flag}
        subtitle={data.standings.response[0].league.country}
        title={data.standings.response[0].league.name}
      />
      <div className="px-8">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className="mb-2 text-indigo-950"
        />
        <LeagueTable
          columns={standingsColumns}
          data={data.standings.response[0].league.standings[0]}
        />

        <GradientCard
          className="mb-2 w-full"
          headerTitle={strings.Fixtures}
        >
          {data.rounds && data.games && (
            <Fixtures
              rounds={data.rounds.response}
              games={data.games.response}
            />
          )}
        </GradientCard>

        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex w-full justify-between gap-4">
            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Top_Scorers}
                className="w-full"
              >
                {data.topScorers && (
                  <DataTable
                    columns={topScorersColumns}
                    data={data.topScorers.response}
                  />
                )}
              </GradientCard>
            </div>

            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Top_Asists}
                className="w-full"
              >
                {data.topAssists && (
                  <DataTable
                    columns={topAssistsColumns}
                    data={data.topAssists.response}
                  />
                )}
              </GradientCard>
            </div>
          </div>
        </div>
        {/* TODO_DD: discipline */}
        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex w-full justify-between gap-4">
            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Yellow_Cards}
                className="w-full"
              >
                {data.yellowCard && (
                  <DataTable
                    columns={yellowCardsColumns}
                    data={data.yellowCard.response}
                  />
                )}
              </GradientCard>
            </div>

            <div className="w-1/2">
              <GradientCard
                headerTitle={strings.Red_Cards}
                className="w-full"
              >
                {data.redCard && (
                  <DataTable
                    columns={redCardsColumns}
                    data={data.redCard.response}
                  />
                )}
              </GradientCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
