'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { League } from '@/models/Standings.model';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';
import Link from 'next/link';
import { useState } from 'react';
import { standingsColumns } from '../data-table/columns/standings-columns';
import { topAssistsColumns } from '../data-table/columns/top-assists-columns';
import { topScorersColumns } from '../data-table/columns/top-scorers-columns';
import { DataTable } from '../data-table/data-table';
import { LeagueCrest } from '../league-crest/league-crest';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type LeagueCardProps = {
  isInitialyCollapsed?: boolean;
  league: League;
  topAssists: TopAssistsResponse[] | undefined;
  topScorers: TopScorerResponse[] | undefined;
};

export function LeagueCard({
  isInitialyCollapsed = false,
  league,
  topAssists,
  topScorers,
}: LeagueCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(isInitialyCollapsed);
  const standingsData = league.standings[0];
  const topAssistsData = topAssists
    ? topAssists.map((player, index) => ({
        ...player,
        rank: index + 1,
      }))
    : [];
  const topScorersData = topScorers
    ? topScorers.map((player, index) => ({
        ...player,
        rank: index + 1,
      }))
    : [];

  const leagueCrestWithName = (
    <LeagueCrest
      country={league.country}
      flag={league.flag}
      logo={league.logo}
      name={league.name}
    />
  );

  return (
    <Card
      className={`w-full transition delay-75 ease-in-out hover:scale-[1.003] hover:shadow-md ${
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
          <Link href={isCollapsed ? '' : `/league/${league.id}`}>
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
                  Standings
                </TabsTrigger>
                <TabsTrigger
                  value="top-scorers"
                  className="mr-2 w-[160px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
                >
                  Top Scorers
                </TabsTrigger>
                <TabsTrigger
                  value="top-assists"
                  className="w-[160px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
                >
                  Top Asists
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
                <DataTable
                  columns={topScorersColumns}
                  data={topScorersData}
                  onlyFive
                />
              </TabsContent>
              <TabsContent value="top-assists">
                <DataTable
                  columns={topAssistsColumns}
                  data={topAssistsData}
                  onlyFive
                />
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="justify-end">
            <Link href={`/league/${league.id}`}>
              <Button
                size="lg"
                className={`cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-300`}
              >
                Show more
              </Button>
            </Link>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
