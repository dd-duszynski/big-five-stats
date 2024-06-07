'use client';

import { Crest, PlayerImage } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const redCardsColumns: ColumnDef<any>[] = [
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
          className="hover:underline"
          href={`/player/${row.original.player.id}`}
        >
          <div className="flex items-center gap-2">
            <PlayerImage
              photo={row.original.player.photo}
              name={row.original.player.name}
              size="md"
            />
            {row.original.player.name}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: 'statistics.0.cards.red',
    header: 'Red',
    size: 50,
  },
  {
    accessorKey: 'statistics.0.cards.yellow',
    header: 'Yellow',
    size: 50,
  },
  {
    accessorKey: 'statistics.0.games.rating',
    header: 'Ratings',
    size: 50,
    cell: ({ row }) => {
      const rating = row.original.statistics[0].games.rating;
      return <span>{rating.substring(0, 3)}</span>;
    },
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
              size="md"
              src={row.original.statistics[0].team.logo}
            />
            {row.original.statistics[0].team.name}
          </div>
        </Link>
      );
    },
  },
];
