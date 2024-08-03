import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { FixturesType } from '@/lib/models/fixtures.model';
import { strings } from '@/lib/strings';
import { dateFormat } from '@/lib/utils/helpers/date-format';
import { DialogTitle } from '@radix-ui/react-dialog';
import Link from 'next/link';
import { Crest, Tabs, TabsContent, TabsList, TabsTrigger, Text } from '..';

type FixtureDialogProps = {
  data: FixturesType | undefined;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FixtureDialog({
  data,
  isOpen,
  onOpenChange,
}: FixtureDialogProps) {
  if (!data) {
    return null;
  }
  console.log('data:', data);
  return (
    <Dialog
      onOpenChange={onOpenChange}
      open={isOpen}
    >
      <DialogContent className="bg-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex w-full justify-center">
            <Text
              className="text-nowrap block text-base"
              variant="span"
            >
              {dateFormat(data.fixture.date)}
            </Text>
          </DialogTitle>

          <div className="flex items-center justify-between">
            <Link
              className="flex w-full justify-start hover:underline"
              href={`/team/${data.teams.home.id}`}
            >
              <div className="flex items-center gap-2">
                <Crest
                  alt={data.teams.home.name}
                  size="sm"
                  src={data.teams.home.logo}
                />
                {data.teams.home.name}
              </div>
            </Link>

            <div className="flex w-24 items-center justify-center">
              <Text
                className="text-nowrap block text-xl"
                variant="span"
              >
                {`${data.goals.home} - ${data.goals.away}`}
              </Text>
            </div>

            <Link
              className="flex w-full justify-end hover:underline"
              href={`/team/${data.teams.away.id}`}
            >
              <div className="flex items-center gap-2">
                {data.teams.away.name}
                <Crest
                  alt={data.teams.away.name}
                  size="sm"
                  src={data.teams.away.logo}
                />
              </div>
            </Link>
          </div>
          <DialogDescription>{`${data.fixture.venue.city} - ${data.fixture.venue.name}`}</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={strings.Summary}>
          <TabsList>
            <TabsTrigger
              value={strings.Summary}
              className="mr-2 w-[120px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
            >
              {strings.Summary}
            </TabsTrigger>
            <TabsTrigger
              value={strings.Statistics}
              className="mr-2 w-[120px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
            >
              {strings.Statistics}
            </TabsTrigger>
            <TabsTrigger
              value={strings.Lineups}
              className="w-[120px] rounded-lg bg-slate-100 hover:bg-slate-300 aria-selected:bg-slate-300"
            >
              {strings.Lineups}
            </TabsTrigger>
          </TabsList>

          <TabsContent value={strings.Summary}>
            {strings.Summary}
            {/* {data.events?.map((event) => {
              return (
                <div
                  key={event.id}
                  className="flex justify-between"
                >
                  <Text variant="span">{event.type}</Text>
                  <Text variant="span">{`${event.player.name}`}</Text>
                </div>
              );
            })} */}
          </TabsContent>
          <TabsContent value={strings.Statistics}>
            {strings.Statistics}
          </TabsContent>
          <TabsContent value={strings.Lineups}>{strings.Lineups}</TabsContent>
        </Tabs>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="secondary"
              type="button"
            >
              {strings.Close}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
