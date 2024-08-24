import { Text } from '@/components/text/text';
import { FixtureLineupsType } from '@/lib/models/fixtures/fixture-lineups.model';
import { strings } from '@/lib/strings';
import { FixtureDialogLineupsTeam } from './fixture-dialog-lineups-team';

type FixtureDialogLineupsProps = {
  awayTeamData: FixtureLineupsType;
  homeTeamData: FixtureLineupsType;
};

export const FixtureDialogLineupsDetails = ({
  awayTeamData,
  homeTeamData,
}: FixtureDialogLineupsProps) => {
  console.log('homeTeamData:', homeTeamData);
  console.log('awayTeamData:', awayTeamData);
  return (
    <div>
      <div className="flex w-full justify-between rounded-md bg-slate-100 px-2 py-2">
        <Text
          className="text-xs"
          variant="span"
        >
          {homeTeamData.formation}
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
          {awayTeamData.formation}
        </Text>
      </div>
      <div className="flex w-full">
        <FixtureDialogLineupsTeam
          isAwayTeam={false}
          teamInfo={homeTeamData}
        />
        <FixtureDialogLineupsTeam
          isAwayTeam
          teamInfo={awayTeamData}
        />
      </div>
    </div>
  );
};
