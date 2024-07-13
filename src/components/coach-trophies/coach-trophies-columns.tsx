'use client';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export const coachTrophiesColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'place',
    header: 'Place',
    cell: ({ row }) => {
      const place = row.original.place;
      const isSecond = place.includes('2nd');
      const isThird = place.includes('3rd');
      let imageSource = '/trophy1.jpg';
      if (isSecond) imageSource = '/trophy2.jpg';
      if (isThird) imageSource = '/trophy3.jpg';

      return (
        <div className="flex items-center gap-2">
          <Image
            alt={'TrophyImage'}
            className="rounded-lg border-4 border-white bg-white"
            height={45}
            src={imageSource}
            width={45}
          />
          {row.original.place}
        </div>
      );
    },
  },
  {
    accessorKey: 'league',
    header: 'League',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'season',
    header: 'Season',
  },
];
