import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FixturesType } from '@/lib/models/fixtures.model';

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
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {data.teams.home.name} - {data.teams.away.name}
          </DialogTitle>
          <DialogDescription>Fixture id: + {data.fixture.id}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">Fixture date: {data.fixture.date}</div>
        <DialogFooter>
          <DialogClose>
            <Button
              variant="outline"
              type="button"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
