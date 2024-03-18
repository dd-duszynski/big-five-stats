'use client';
// TODO only for logs

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Standing } from '@/models/Standings.model';
import { Crest } from './Crest';
import { LeagueTable } from './Table';
import { columns, topAssistsColumns, topPlayerColumns } from './TableColumns';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type LeagueCardProps = {
  league: any;
  // ----
  crestSrc: string;
  name: string;
  standings: Standing[];
  topScorers: any[];
};

export function LeagueCard({
  league,
  crestSrc,
  name,
  standings,
  topScorers,
  topAssists,
}: LeagueCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <Crest
          alt={name}
          src={crestSrc}
          size="md"
        />
        <CardTitle>{name}</CardTitle>
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
              data={standings.slice(0, 5)}
            />
          </TabsContent>

          <TabsContent value="top-scorers">
            <LeagueTable
              columns={topPlayerColumns}
              data={topScorers.slice(0, 5)}
            />
          </TabsContent>

          <TabsContent value="top-assists">
            <LeagueTable
              columns={topAssistsColumns}
              data={topAssists.slice(0, 5)}
            />
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button>Show more</Button>
      </CardFooter>
    </Card>
  );
}
