import { FixtureDialogLineupsTeamData } from './fixture-dialog-lineups-details';
import { FixtureDialogLineupsTeam } from './fixture-dialog-lineups-team';

type FixtureDialogPitchProps = {
  awayTeamData: FixtureDialogLineupsTeamData;
  homeTeamData: FixtureDialogLineupsTeamData;
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
