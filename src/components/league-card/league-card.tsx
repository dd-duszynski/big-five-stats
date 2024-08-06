'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayerResponseType } from '@/lib/models/player/player-response.model';
import { StandingsLeagueType } from '@/lib/models/standings/standings.model';
import { strings } from '@/lib/strings';
import { topAssistsQueryOptions } from '@/lib/utils/query-options/top-assists-query-options';
import { topScorersQueryOptions } from '@/lib/utils/query-options/top-scorers-query-options';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { standingsColumns } from '../data-table/columns/standings-columns';
import { topAssistsColumns } from '../data-table/columns/top-assists-columns';
import { topScorersColumns } from '../data-table/columns/top-scorers-columns';
import { DataTable } from '../data-table/data-table';
import { LeagueCrest } from '../league-crest/league-crest';
import { Loader } from '../loader/loader';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { addRankPositionMapper } from '@/lib/utils/mappers';

type LeagueCardProps = {
  isInitialyCollapsed?: boolean;
  leagueId: number;
  standingsLeagueData: StandingsLeagueType;
};

export function LeagueCard({
  isInitialyCollapsed = false,
  leagueId,
  standingsLeagueData,
}: LeagueCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(isInitialyCollapsed);
  const {
    data: topScorers,
    isLoading: isTopScorersLoading,
    isError: isErrorTopScorers,
  } = useQuery(topScorersQueryOptions(leagueId, 2023, !isCollapsed));
  const {
    data: topAssists,
    isLoading: isTopAssistsLoading,
    isError: isErrorTopAssists,
  } = useQuery(topAssistsQueryOptions(leagueId, 2023, !isCollapsed));

  const standingsData = standingsLeagueData.standings[0];
  const topAssistsData = addRankPositionMapper(topAssists?.response);
  const topScorersData = addRankPositionMapper(topScorers?.response);

  const leagueCrestWithName = (
    <LeagueCrest
      flag={standingsLeagueData.flag}
      logo={standingsLeagueData.logo}
      logoSize="md"
      subtitle={standingsLeagueData.country}
      title={standingsLeagueData.name}
    />
  );

  return (
    <Card
      className={`my-3 w-full max-w-6xl transition delay-75 ease-in-out hover:scale-[1.003] hover:shadow-md ${
        isCollapsed && 'cursor-pointer'
      }`}
      onClick={() => {
        isCollapsed && setIsCollapsed(!isCollapsed);
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        {isCollapsed ? (
          leagueCrestWithName
        ) : (
          <Link
            href={isCollapsed ? '' : `/league/${standingsLeagueData.id}`}
            className="hover:underline"
          >
            {leagueCrestWithName}
          </Link>
        )}
        <Button
          size="lg"
          className={`cursor-pointer rounded-lg bg-slate-100 text-xl hover:bg-slate-300 ${
            isCollapsed ? 'hidden' : 'rotate-[270deg]'
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {`>`}
        </Button>
      </CardHeader>

      {!isCollapsed && (
        <>
          <CardContent>
            <Tabs defaultValue="table">
              <TabsList>
                <TabsTrigger
                  value="table"
                  className="mr-2 w-[160px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
                >
                  {strings.Standings}
                </TabsTrigger>
                <TabsTrigger
                  value="top-scorers"
                  className="mr-2 w-[160px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
                >
                  {strings.Top_Scorers}
                </TabsTrigger>
                <TabsTrigger
                  value="top-assists"
                  className="w-[160px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
                >
                  {strings.Top_Asists}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="table">
                <DataTable
                  columns={standingsColumns}
                  data={standingsData}
                  onlyFive
                />
              </TabsContent>
              <TabsContent value="top-scorers">
                {isTopScorersLoading || isErrorTopScorers ? (
                  <Loader />
                ) : (
                  <DataTable
                    columns={topScorersColumns}
                    data={topScorersData}
                    onlyFive
                  />
                )}
              </TabsContent>
              <TabsContent value="top-assists">
                {isTopAssistsLoading || isErrorTopAssists ? (
                  <Loader />
                ) : (
                  <DataTable
                    columns={topAssistsColumns}
                    data={topAssistsData}
                    onlyFive
                  />
                )}
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="justify-end">
            <Link href={`/league/${leagueId}`}>
              <Button
                size="lg"
                className={`cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-300`}
              >
                {strings.Show_more}
              </Button>
            </Link>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
