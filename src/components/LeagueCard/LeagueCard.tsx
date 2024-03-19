'use client';
// TODO only for logs

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { League, Standing } from '@/models/Standings.model';
import { Crest } from '../Crest';
import { LeagueTable } from '../Table';
import { columns, topAssistsColumns, topScorersColumns } from '../TableColumns';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';

type LeagueCardProps = {
  league: League;
  topAssists: TopAssistsResponse[] | undefined;
  topScorers: TopScorerResponse[] | undefined;
};

export function LeagueCard({
  league,
  topAssists,
  topScorers,
}: LeagueCardProps) {
  const standingsData = league.standings[0];
  const topAssistsData = topAssists ? topAssists : [];
  const topScorersData = topScorers ? topScorers : [];
  // console.log('standingsData: ', standingsData);
  // console.log('topAssistsData: ', topAssistsData);
  // console.log('topScorersData: ', topScorersData);
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <Crest
          alt={league.name}
          src={league.logo}
          size="md"
        />
        <CardTitle>{league.name}</CardTitle>
      </CardHeader>

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
              columns={columns}
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
    </Card>
  );
}
