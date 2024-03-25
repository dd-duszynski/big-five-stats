import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { League } from '@/models/Standings.model';
import { TopAssistsResponse } from '@/models/TopAssists.model';
import { TopScorerResponse } from '@/models/TopScorer.model';
import Link from 'next/link';
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
        <Link href={`/league/${league.id}`}>
          <Button
            variant="outline"
            size="sm"
            disabled={false}
          >
            Show more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
