'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FixturesType } from '@/lib/models/fixtures.model';
import { strings } from '@/lib/strings';
import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import { leagueFixturesQueryOptions } from '@/lib/utils/query-options/league-fixtures-query-options';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { DataTable } from '..';
import { GradientCard } from '../gradient-card/gradient-card';

interface FixturesProps {
  className?: string;
  columns: ColumnDef<FixturesType>[];
  data: FixturesType[];
  leagueId: number;
  rounds: string[];
}

export function Fixtures({
  className,
  columns,
  data,
  leagueId,
  rounds,
}: FixturesProps) {
  const [value, setValue] = useState(rounds[0]);
  const { data: fixturesClientData, isFetched: isFixturesClientDataFetched } =
    useQuery(leagueFixturesQueryOptions(leagueId, 2023, value));
  const fixturesClientDataResponse = fixturesClientData?.response;

  return (
    <GradientCard
      className={joinClassNames(className, 'mb-2 w-full')}
      headerTitle={strings.Fixtures}
    >
      <Select
        value={value}
        onValueChange={setValue}
      >
        <SelectTrigger className="mb-2 w-[180px]">
          <SelectValue placeholder="Select a round" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {rounds.map((round, index) => (
              <SelectItem
                className="cursor-pointer hover:underline"
                key={index}
                value={round}
              >
                {round}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <DataTable
        columns={columns}
        data={fixturesClientDataResponse || data}
      />
    </GradientCard>
  );
}
