'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { strings } from '@/lib/strings';
import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '..';
import { GradientCard } from '../gradient-card/gradient-card';

interface FixturesProps<TData, TValue> {
  className?: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rounds: string[];
}

export function Fixtures<TData, TValue>({
  className,
  columns,
  data,
  rounds,
}: FixturesProps<TData, TValue>) {
  return (
    <GradientCard
      className={joinClassNames(className, 'mb-2 w-full')}
      headerTitle={strings.Fixtures}
    >
      <Select defaultValue={rounds[0]}>
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
        data={data}
      />
    </GradientCard>
  );
}
