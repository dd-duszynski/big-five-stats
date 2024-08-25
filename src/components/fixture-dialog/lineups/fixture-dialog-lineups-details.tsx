import { FixtureLineupsType } from '@/lib/models/fixtures/fixture-lineups.model';
import { FixtureDialogFormationBar } from './fixture-dialog-formation-bar';
import { FixtureDialogPitch } from './fixture-dialog-pitch';

type FixtureDialogLineupsProps = {
  awayTeamData: FixtureLineupsType;
  homeTeamData: FixtureLineupsType;
};

export const FixtureDialogLineupsDetails = ({
  awayTeamData,
  homeTeamData,
}: FixtureDialogLineupsProps) => {
  return (
    <div>
      <FixtureDialogFormationBar
        awayTeamText={awayTeamData.formation}
        homeTeamText={homeTeamData.formation}
      />
      <FixtureDialogPitch
        awayTeamData={awayTeamData}
        homeTeamData={homeTeamData}
      />
    </div>
  );
};
