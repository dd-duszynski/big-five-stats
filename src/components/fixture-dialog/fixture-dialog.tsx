'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { strings } from '@/lib/strings';
import { dateFormat } from '@/lib/utils/helpers/date-format';
import { fixtureDetailsQueryOptions } from '@/lib/utils/query-options/fixture-details-query-options';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Crest, Tabs, TabsContent, TabsList, TabsTrigger, Text } from '..';
import { FixtureDialogLineups } from './lineups/fixture-dialog-lineups';
import { FixtureDialogStatistics } from './statistics/fixture-dialog-statistics';
import { FixtureDialogSummary } from './summary/fixture-dialog-summary';

type FixtureDialogProps = {
  fixtureId: number;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FixtureDialog({
  fixtureId,
  isOpen,
  onOpenChange,
}: FixtureDialogProps) {
  const { data: fixtureDetailsData, isFetched } = useQuery(
    fixtureDetailsQueryOptions(fixtureId)
  );

  if (
    !isFetched ||
    !fixtureDetailsData ||
    fixtureDetailsData.response.length === 0
  ) {
    return null;
  }

  const dataToRender = fixtureDetailsData.response[0];

  return (
    <Dialog
      onOpenChange={onOpenChange}
      open={isOpen}
    >
      <DialogContent className="bg-white sm:max-h-[900px] sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex w-full justify-center">
            <Text
              className="text-nowrap block text-base"
              variant="span"
            >
              {dateFormat(dataToRender.fixture.date)}
            </Text>
          </DialogTitle>

          <div className="flex items-center justify-between">
            <Link
              className="flex w-full justify-start hover:underline"
              href={`/team/${dataToRender.teams.home.id}`}
            >
              <div className="flex items-center gap-2">
                <Crest
                  alt={dataToRender.teams.home.name}
                  size="sm"
                  src={dataToRender.teams.home.logo}
                />
                {dataToRender.teams.home.name}
              </div>
            </Link>

            <div className="flex w-24 items-center justify-center">
              <Text
                className="text-nowrap block text-xl"
                variant="span"
              >
                {`${dataToRender.goals.home} - ${dataToRender.goals.away}`}
              </Text>
            </div>

            <Link
              className="flex w-full justify-end hover:underline"
              href={`/team/${dataToRender.teams.away.id}`}
            >
              <div className="flex items-center gap-2">
                {dataToRender.teams.away.name}
                <Crest
                  alt={dataToRender.teams.away.name}
                  size="sm"
                  src={dataToRender.teams.away.logo}
                />
              </div>
            </Link>
          </div>
          <DialogDescription>{`${dataToRender.fixture.venue.city} - ${dataToRender.fixture.venue.name}`}</DialogDescription>
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
            <FixtureDialogSummary data={dataToRender} />
          </TabsContent>
          <TabsContent value={strings.Statistics}>
            <FixtureDialogStatistics data={dataToRender} />
          </TabsContent>
          <TabsContent value={strings.Lineups}>
            <FixtureDialogLineups data={dataToRender} />
          </TabsContent>
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
