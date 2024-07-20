'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Crest } from '../crest/crest';

export const playerTransfersColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'teams.out.id',
    header: 'Team Out',
    cell: ({ row }) => {
      return (
        <Link
          className="hover:underline"
          href={`/team/${row.original.teams.out.id}`}
        >
          <div className="flex items-center gap-2">
            <Crest
              alt={row.original.teams.out.name}
              size="sm"
              src={row.original.teams.out.logo}
            />
            {row.original.teams.out.name}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: 'teams.in.name',
    header: '',
    cell: () => {
      return <span>{`>>>`}</span>;
    },
  },
  {
    accessorKey: 'teams.in.id',
    header: 'Team In',
    cell: ({ row }) => {
      return (
        <Link
          className="hover:underline"
          href={`/team/${row.original.teams.in.id}`}
        >
          <div className="flex items-center gap-2">
            <Crest
              alt={row.original.teams.in.name}
              size="sm"
              src={row.original.teams.in.logo}
            />
            {row.original.teams.in.name}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
];
