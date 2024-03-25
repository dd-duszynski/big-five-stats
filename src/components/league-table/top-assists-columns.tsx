'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Crest } from '../crest/crest';

export const topAssistsColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'rank',
    header: '#',
  },
  {
    accessorKey: 'player.name',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <Link href={`/player/${row.original.player.id}`}>
          {row.original.player.name}
        </Link>
      );
    },
  },
  {
    accessorKey: 'statistics.0.goals.assists',
    header: 'Assists',
  },
  {
    accessorKey: 'statistics.0.team.name',
    header: 'Team',
    cell: ({ row }) => {
      return (
        <Link href={`/team/${row.original.statistics[0].team.id}`}>
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
