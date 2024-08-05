'use client';

import { Crest, Text } from '@/components';
import { FixturesForRoundResponseType } from '@/lib/models/fixtures/fixtures-for-round.model';
import { strings } from '@/lib/strings';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

type FixturesColumnsType = {
  resultCallback: (id: number) => void;
};

export const fixturesColumns = ({
  resultCallback,
}: FixturesColumnsType): ColumnDef<FixturesForRoundResponseType>[] => {
  return [
    {
      accessorKey: 'teams.home.id',
      header: () => <div className="text-right">{strings.Home}</div>,
      cell: ({ row }) => {
        return (
          <Link
            className="flex w-full justify-end hover:underline"
            href={`/team/${row.original.teams.home.id}`}
          >
            <div className="flex items-center gap-2">
              {row.original.teams.home.name}
              <Crest
                alt={row.original.teams.home.name}
                size="sm"
                src={row.original.teams.home.logo}
              />
            </div>
          </Link>
        );
      },
    },
    {
      accessorKey: 'goals',
      header: () => <div className="text-center">{strings.Result}</div>,
      cell: ({ row }) => {
        return (
          <div
            className="flex cursor-pointer justify-center hover:underline"
            onClick={() => resultCallback(row.original.fixture.id)}
          >
            <Text variant="span">
              {`${row.original.goals.home} - ${row.original.goals.away}`}
            </Text>
          </div>
        );
      },
    },
    {
      accessorKey: 'teams.away.id',
      header: () => <div className="text-left">{strings.Away}</div>,
      cell: ({ row }) => {
        return (
          <Link
            className="flex w-full justify-start hover:underline"
            href={`/team/${row.original.teams.away.id}`}
          >
            <div className="flex items-center gap-2">
              <Crest
                alt={row.original.teams.away.name}
                size="sm"
                src={row.original.teams.away.logo}
              />
              {row.original.teams.away.name}
            </div>
          </Link>
        );
      },
    },
  ];
};
