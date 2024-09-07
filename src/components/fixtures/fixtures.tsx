'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FixturesForRoundResponseType } from '@/lib/models/fixtures/fixtures-for-round.model';
import { strings } from '@/lib/strings';
import { currentYear } from '@/lib/utils/const/current-year';
import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import { fixturesForRoundQueryOptions } from '@/lib/utils/query-options/fixtures-for-round-query-options';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { DataTable } from '..';
import { fixturesColumns } from '../data-table/columns/fixtures-columns';
import { FixtureDialog } from '../fixture-dialog/fixture-dialog';
import { GradientCard } from '../gradient-card/gradient-card';

type FixturesProps = {
  className?: string;
  data: FixturesForRoundResponseType[];
  leagueId: number;
  rounds: string[];
};

export function Fixtures({ className, data, leagueId, rounds }: FixturesProps) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedFixtureId, setSelectedFixtureId] = useState(0);
  const [selectedRound, setSelectedRound] = useState(rounds[0]);

  const { data: leagueFixturesForRound } = useQuery(
    fixturesForRoundQueryOptions(leagueId, currentYear, selectedRound)
  );
  const leagueFixturesForRoundResponse = leagueFixturesForRound?.response;

  const columns = fixturesColumns({
    resultCallback: (id) => {
      setSelectedFixtureId(id);
      setDialogOpen(true);
    },
  });

  const dataToRender = leagueFixturesForRoundResponse || data;

  return (
    <GradientCard
      className={joinClassNames(className, 'mb-2 w-full')}
      headerTitle={strings.Fixtures}
    >
      <Select
        value={selectedRound}
        onValueChange={setSelectedRound}
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
        fixtureId={selectedFixtureId}
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
