import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../data-table/data-table';
import { Text } from '../text/text';
import { Card, CardContent, CardHeader } from '../ui/card';

interface LeagueTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  teamToHighlight?: number;
}

export const LeagueTable = <TData, TValue>({
  columns,
  data,
  teamToHighlight,
}: LeagueTableProps<TData, TValue>) => {
  return (
    <Card className="max-w-full">
      <CardHeader className="flex items-center justify-center gap-3 rounded-t-md bg-gradient-to-r from-indigo-500 to-emerald-500">
        <Text
          className="text-center text-white"
          variant="h2"
        >
          Standings
        </Text>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data}
          teamToHighlight={teamToHighlight}
        />
      </CardContent>
    </Card>
  );
};
