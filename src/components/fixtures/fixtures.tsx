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
import { useState } from 'react';
import { DataTable } from '..';
import { fixturesColumns } from '../data-table/columns/fixtures-columns';
import { FixtureDialog } from '../fixture-dialog/fixture-dialog';
import { GradientCard } from '../gradient-card/gradient-card';

interface FixturesProps {
  className?: string;
  data: FixturesType[];
  leagueId: number;
  rounds: string[];
}

export function Fixtures({ className, data, leagueId, rounds }: FixturesProps) {
  const [value, setValue] = useState(rounds[0]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedFixtureId, setSelectedFixtureId] = useState(0);

  const { data: fixturesClientData } = useQuery(
    leagueFixturesQueryOptions(leagueId, 2023, value)
  );
  const fixturesClientDataResponse = fixturesClientData?.response;

  const columns = fixturesColumns({
    resultCallback: (id) => {
      setSelectedFixtureId(id);
      setDialogOpen(true);
    },
  });

  const dataToRender = fixturesClientDataResponse || data;

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

      <FixtureDialog
        data={dataToRender.find(
          (fixture) => fixture.fixture.id === selectedFixtureId
        )}
        isOpen={isDialogOpen}
        onOpenChange={setDialogOpen}
      />

      <DataTable
        columns={columns}
        data={dataToRender}
      />
    </GradientCard>
  );
}
