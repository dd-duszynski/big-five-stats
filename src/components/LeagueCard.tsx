'use client';
// TODO only for logs

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Standing } from '@/models/league.model';
import { Crest } from './Crest';
import { LeagueTable } from './Table';
import { columns, topPlayerColumns } from './TableColumns';
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
  topPlayers: any[];
};

export function LeagueCard({
  league,
  crestSrc,
  name,
  standings,
  topPlayers,
}: LeagueCardProps) {
  console.log('topPlayers: ', topPlayers);
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
              value="top-players"
              className="w-[200px]"
            >
              Top Players
            </TabsTrigger>
          </TabsList>
          <TabsContent value="table">
            <LeagueTable
              columns={columns}
              data={standings.slice(0, 5)}
            />
          </TabsContent>

          <TabsContent value="top-players">
            <LeagueTable
              columns={topPlayerColumns}
              data={topPlayers.slice(0, 5)}
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
