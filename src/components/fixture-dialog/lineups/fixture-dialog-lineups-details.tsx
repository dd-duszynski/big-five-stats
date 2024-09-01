import { FixtureLineupsType } from '@/lib/models/fixtures/fixture-lineups.model';
import { FixturesPlayersType } from '@/lib/models/fixtures/fixture-players.model';
import { FixtureDialogFormationBar } from './fixture-dialog-formation-bar';
import { FixtureDialogPitch } from './fixture-dialog-pitch';

export type FixtureDialogLineupsTeamData = {
  lineups: FixtureLineupsType;
  players: FixturesPlayersType;
};

type FixtureDialogLineupsProps = {
  awayTeamData: FixtureDialogLineupsTeamData;
  homeTeamData: FixtureDialogLineupsTeamData;
};

export const FixtureDialogLineupsDetails = ({
  awayTeamData,
  homeTeamData,
}: FixtureDialogLineupsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <FixtureDialogFormationBar
        awayTeamText={awayTeamData.lineups.formation}
        homeTeamText={homeTeamData.lineups.formation}
      />
      <FixtureDialogPitch
        awayTeamData={awayTeamData}
        homeTeamData={homeTeamData}
      />
    </div>
  );
};
