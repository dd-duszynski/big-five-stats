import { Breadcrumbs, DataTable } from '@/components';
import { redCardsColumns } from '@/components/data-table/columns/red-cards-columns';
import { standingsColumns } from '@/components/data-table/columns/standings-columns';
import { topAssistsColumns } from '@/components/data-table/columns/top-assists-columns';
import { topScorersColumns } from '@/components/data-table/columns/top-scorers-columns';
import { yellowCardsColumns } from '@/components/data-table/columns/yellow-cards-columns';
import GradientCard from '@/components/gradient-card/gradient-card';
import LeagueTable from '@/components/league-table/league-table';
import { PageHeader } from '@/components/page-header/page-header';
import { RevalidateTime } from '@/enums/time';
import { fetchAPISports } from '@/lib/utils';
import { APIResponseType } from '@/models/api-response.model';
import { PlayerResponseType } from '@/models/player.model';
import { StandingsResponseType } from '@/models/standings.model';
import { Metadata } from 'next';

async function getData(id: number) {
  const standings = await fetchAPISports<
    APIResponseType<StandingsResponseType[]>
  >(`standings?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_WEEK,
  });
  const topScorers = await fetchAPISports<
    APIResponseType<PlayerResponseType[]>
  >(`players/topscorers?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_WEEK,
  });
  const topAssists = await fetchAPISports<
    APIResponseType<PlayerResponseType[]>
  >(`players/topassists?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_WEEK,
  });
  const yellowCard = await fetchAPISports<
    APIResponseType<PlayerResponseType[]>
  >(`players/topyellowcards?league=${id}&season=2023`, {
    revalidate: RevalidateTime.ONE_WEEK,
  });
  const redCard = await fetchAPISports<APIResponseType<PlayerResponseType[]>>(
    `players/topredcards?league=${id}&season=2023`,
    { revalidate: RevalidateTime.ONE_WEEK }
  );

  return {
    standings,
    topScorers,
    topAssists,
    yellowCard,
    redCard,
  };
}

export const metadata: Metadata = {
  title: 'Big Five - League Stats',
  description: 'Football stats for the league.',
};

export default async function LeaguePage({ params }: any) {
  const data = await getData(params.id);

  if (!data || !data.standings || !data.standings.response.length)
    return <div className="text-black">Data not found</div>;

  const breadcrumbs = [
    {
      link: `/`,
      text: 'Home',
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

        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex w-full justify-between gap-4">
            <div className="w-1/2">
              <GradientCard
                headerTitle="Top Scorers"
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
                headerTitle="Top Asists"
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
                headerTitle="Yellow Cards"
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
                headerTitle="Red Cards"
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
