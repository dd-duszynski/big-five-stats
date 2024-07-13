'use client';

import { ColumnDef } from '@tanstack/react-table';

export const playerSidelinedColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'type',
    header: 'Type',
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
