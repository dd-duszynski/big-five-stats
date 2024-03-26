'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { League } from '@/models/Standings.model';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';
import Link from 'next/link';
import { useState } from 'react';
import { Crest } from '../crest/crest';
import { LeagueTable } from '../league-table/league-table';
import { standingsColumns } from '../league-table/standings-columns';
import { topAssistsColumns } from '../league-table/top-assists-columns';
import { topScorersColumns } from '../league-table/top-scorers-columns';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

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

  return (
    <Card
      className={`w-full transition delay-150 ease-in-out hover:scale-[1.01] hover:shadow-md ${
        isCollapsed && 'cursor-pointer'
      }`}
      onClick={() => {
        isCollapsed && setIsCollapsed(!isCollapsed);
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <Link href={`/league/${league.id}`}>
          <div className="flex flex-row items-center gap-6">
            <Crest
              alt={league.name}
              src={league.logo}
              size="md"
            />
            <CardTitle>{league.name}</CardTitle>
          </div>
        </Link>
        <div
          className={`cursor-pointer rounded-lg bg-slate-100 p-3 text-2xl hover:bg-slate-300 ${
            isCollapsed ? 'rotate-90' : 'rotate-[270deg]'
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >{`>`}</div>
      </CardHeader>
      {!isCollapsed && (
        <>
          <CardContent>
            <Tabs defaultValue="table">
              <TabsList>
                <TabsTrigger
                  value="table"
                  className="w-[200px]"
                >
                  Table
                </TabsTrigger>
                <TabsTrigger
                  value="top-scorers"
                  className="w-[200px]"
                >
                  Top Scorers
                </TabsTrigger>
                <TabsTrigger
                  value="top-assists"
                  className="w-[200px]"
                >
                  Top Asists
                </TabsTrigger>
              </TabsList>

              <TabsContent value="table">
                <LeagueTable
                  columns={standingsColumns}
                  data={standingsData}
                />
              </TabsContent>

              <TabsContent value="top-scorers">
                <LeagueTable
                  columns={topScorersColumns}
                  data={topScorersData}
                />
              </TabsContent>

              <TabsContent value="top-assists">
                <LeagueTable
                  columns={topAssistsColumns}
                  data={topAssistsData}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="justify-end">
            <Link href={isCollapsed ? '' : `/league/${league.id}`}>
              <Button
                variant="outline"
                size="sm"
                disabled={false}
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
