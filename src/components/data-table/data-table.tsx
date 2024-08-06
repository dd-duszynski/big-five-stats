'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type DataTableProps<TData, TValue> = {
  className?: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onlyFive?: boolean;
  teamToHighlight?: number;
};

export function DataTable<TData, TValue>({
  className,
  columns,
  data,
  onlyFive,
  teamToHighlight,
}: DataTableProps<TData, TValue>) {
  // const collapsedData = data.slice(0, 5);
  const table = useReactTable({
    data: onlyFive ? data.slice(0, 5) : data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      // TODO: size dosn't work (?)
      size: 200, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
  });

  return (
    <div
      className={joinClassNames(
        'relative w-full overflow-auto rounded-md border',
        className
      )}
    >
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.index}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const teamId = teamToHighlight && (row.original as any).team.id;
              return (
                <TableRow
                  className={joinClassNames(
                    teamToHighlight &&
                      teamToHighlight === teamId &&
                      'bg-emerald-100'
                  )}
                  data-state={row.getIsSelected() && 'selected'}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        className="overflow-hidden text-ellipsis whitespace-nowrap"
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
