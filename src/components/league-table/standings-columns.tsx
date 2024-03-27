'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Crest } from '../crest/crest';

export const standingsColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'rank',
    header: '#',
  },
  {
    accessorKey: 'team.logo',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <Link
          className="hover:underline"
          href={`/team/${row.original.team.id}`}
        >
          <div className="flex items-center gap-2">
            <Crest
              alt={row.original.team.name}
              size="sm"
              src={row.original.team.logo}
            />
            {row.original.team.name}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: 'points',
    header: 'Points',
  },
  {
    accessorKey: 'all.goals.for',
    header: 'Goals For',
  },
  {
    accessorKey: 'all.goals.against',
    header: 'Goals Agains',
  },
  {
    accessorKey: 'all.win',
    header: 'Wins',
  },
  {
    accessorKey: 'all.draw',
    header: 'Draws',
  },
  {
    accessorKey: 'all.lose',
    header: 'Loses',
  },
];
