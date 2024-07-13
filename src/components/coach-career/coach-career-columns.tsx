'use client';

import { Crest } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const coachCareerColumns: ColumnDef<any>[] = [
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
    accessorKey: 'start',
    header: 'Start',
  },
  {
    accessorKey: 'end',
    header: 'End',
  },
];
