'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Crest } from '../crest/crest';

export const playerStatisticsColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'league.id',
    header: 'League',
    cell: ({ row }) => {
      return (
        <Link
          className="hover:underline"
          href={`/league/${row.original.league.id}`}
        >
          <div className="flex items-center gap-2">
            <Crest
              alt={row.original.league.name}
              size="md"
              src={row.original.league.logo || row.original.league.flag}
            />
            {row.original.league.name}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: 'team.id',
    header: 'Team',
    cell: ({ row }) => {
      return (
        <Link
          className="hover:underline"
          href={`/team/${row.original.team.id}`}
        >
          <div className="flex items-center gap-2">
            <Crest
              alt={row.original.team.name}
              size="md"
              src={row.original.team.logo}
            />
            {row.original.team.name}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: 'games.appearences',
    header: 'Appearences',
  },
  {
    accessorKey: 'games.lineups',
    header: 'Lineups',
  },
  {
    accessorKey: 'games.minutes',
    header: 'Minutes',
  },
  {
    accessorKey: 'games.rating',
    header: 'Rating',
    cell: ({ row }) => {
      const rating = row.original.games.rating || '';
      return <span>{rating.substring(0, 3)}</span>;
    },
  },
  {
    accessorKey: 'goals.total',
    header: 'Goals',
  },
  {
    accessorKey: 'goals.assists',
    header: 'Assists',
  },
  {
    accessorKey: 'passes.total',
    header: 'Passes',
  },
  {
    accessorKey: 'passes.key',
    header: 'Key passes',
  },
  {
    accessorKey: 'passes.accuracy',
    header: 'Accuracy',
  },
];
