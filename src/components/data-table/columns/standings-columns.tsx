'use client';

import { Crest, FormIcon } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const standingsColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'rank',
    header: '#',
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
    accessorKey: 'all.played',
    header: 'MP',
  },
  {
    accessorKey: 'all.win',
    header: 'W',
  },
  {
    accessorKey: 'all.draw',
    header: 'D',
  },
  {
    accessorKey: 'all.lose',
    header: 'L',
  },
  {
    accessorKey: 'all.goals.for',
    header: 'G',
    cell: ({ row }) => {
      return (
        <span>{`${row.original.all.goals.for} : ${row.original.all.goals.against}`}</span>
      );
    },
  },
  {
    accessorKey: 'all.goals.against',
    header: 'GD',
    cell: ({ row }) => {
      return (
        <span>
          {row.original.all.goals.for - row.original.all.goals.against}
        </span>
      );
    },
  },
  {
    accessorKey: 'points',
    header: 'PTS',
  },
  {
    accessorKey: 'form',
    header: 'Form',
    cell: ({ row }) => {
      const formArray = row.original.form.split('');
      if (formArray.length === 0) {
        return null;
      }
      return (
        <div className="flex gap-1">
          {formArray.map((value: string, index: number) => (
            <FormIcon
              key={index}
              value={value}
            />
          ))}
        </div>
      );
    },
  },
];
