'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Crest } from './Crest';
import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = any;

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'rank',
    header: '#',
  },
  {
    accessorKey: 'team.logo',
    header: 'Name',
    cell: ({ row }) => {
      console.log('row: ', row);
      return (
        <div className="flex items-center gap-2">
          <Crest
            alt={row.original.team.name}
            size="sm"
            src={row.original.team.logo}
          />
          <Link href={`/team/${row.original.team.id}`}>
            {row.original.team.name}
          </Link>
        </div>
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
