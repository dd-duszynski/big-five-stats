'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { Crest } from '../crest/crest';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = any;

export const standingsColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'rank',
    header: '#',
  },
  {
    accessorKey: 'team.logo',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <Link href={`/team/${row.original.team.id}`}>
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

export const topScorersColumns: ColumnDef<Payment>[] = [
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
    accessorKey: 'statistics.0.goals.total',
    header: 'Goals',
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

export const topAssistsColumns: ColumnDef<Payment>[] = [
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
