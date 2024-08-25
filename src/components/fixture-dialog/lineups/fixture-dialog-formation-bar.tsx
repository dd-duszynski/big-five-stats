import { Text } from '@/components/text/text';
import { strings } from '@/lib/strings';

type FixtureDialogFormationBarProps = {
  awayTeamText: string;
  homeTeamText: string;
};

export function FixtureDialogFormationBar({
  awayTeamText,
  homeTeamText,
}: FixtureDialogFormationBarProps) {
  return (
    <div className="flex w-full justify-between rounded-md bg-slate-100 px-2 py-2">
      <Text
        className="text-xs"
        variant="span"
      >
        {homeTeamText}
      </Text>
      <Text
        className="text-xs"
        variant="span"
      >
        {strings.Formation}
      </Text>
      <Text
        className="text-xs"
        variant="span"
      >
        {awayTeamText}
      </Text>
    </div>
  );
}
