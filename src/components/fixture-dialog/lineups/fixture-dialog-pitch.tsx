import { FixtureLineupsType } from '@/lib/models/fixtures/fixture-lineups.model';
import { FixtureDialogLineupsTeam } from './fixture-dialog-lineups-team';

type FixtureDialogPitchProps = {
  awayTeamData: FixtureLineupsType;
  homeTeamData: FixtureLineupsType;
};

export function FixtureDialogPitch({
  awayTeamData,
  homeTeamData,
}: FixtureDialogPitchProps) {
  return (
    <div className="flex w-full justify-between bg-green-800 p-4">
      <FixtureDialogLineupsTeam teamInfo={homeTeamData} />
      <FixtureDialogLineupsTeam
        isAwayTeam
        teamInfo={awayTeamData}
      />
    </div>
  );
}
