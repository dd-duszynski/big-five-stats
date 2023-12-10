'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Crest } from './Crest';
import { Standing } from '@/models/league.model';
import { Button } from './ui/button';
import { LeagueTable } from './Table';
import { columns } from './TableColumns';

type LeagueCardProps = {
  league: any;
  // ----
  crestSrc: string;
  name: string;
  standings: Standing[];
};

export function LeagueCard({
  league,
  crestSrc,
  name,
  standings,
}: LeagueCardProps) {
  console.log('league: ', league);

  return (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-row items-center gap-3">
        <Crest
          alt={name}
          src={crestSrc}
          size="md"
        />
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <LeagueTable
          columns={columns}
          data={standings.slice(0, 5)}
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Show more</Button>
      </CardFooter>
    </Card>
  );
}
