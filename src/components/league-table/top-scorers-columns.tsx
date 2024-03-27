'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Crest } from '../crest/crest';

export const topScorersColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'rank',
    header: '#',
    size: 200,
    enableResizing: true,
  },
  {
    accessorKey: 'player.name',
    header: 'Name',
    size: 150,
    cell: ({ row }) => {
      return (
        <Link
          href={`/player/${row.original.player.id}`}
          className="hover:underline"
        >
          {row.original.player.name}
        </Link>
      );
    },
  },
  {
    accessorKey: 'statistics.0.goals.total',
    header: 'Goals',
    size: 50,
  },
  {
    accessorKey: 'statistics.0.goals.assists',
    header: 'Assists',
    size: 50,
  },
  {
    accessorKey: 'statistics.0.team.name',
    header: 'Team',
    size: 150,
    cell: ({ row }) => {
      return (
        <Link
          href={`/team/${row.original.statistics[0].team.id}`}
          className="hover:underline"
        >
          <div className="flex items-center gap-2">
            <Crest
              alt={row.original.statistics[0].team.name}
              size="sm"
              src={row.original.statistics[0].team.logo}
            />
            {row.original.statistics[0].team.name}
          </div>
        </Link>
      );
    },
  },
];
