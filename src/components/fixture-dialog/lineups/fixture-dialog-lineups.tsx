import { FixtureDetailsResponseType } from '@/lib/models/fixtures/fixture-details.model';
import { FixtureDialogLineupsDetails } from './fixture-dialog-lineups-details';

type FixtureDialogLineupsProps = {
  data: FixtureDetailsResponseType;
};

export const FixtureDialogLineups = ({ data }: FixtureDialogLineupsProps) => {
  const homeTeamId = data.teams.home.id;
  const awayTeamId = data.teams.away.id;
  const homeTeamLineups = data.lineups.find((i) => i.team.id === homeTeamId);
  const awayTeamLineups = data.lineups.find((i) => i.team.id === awayTeamId);
  if (!homeTeamLineups || !awayTeamLineups) return null;
  return (
    <FixtureDialogLineupsDetails
      homeTeamData={homeTeamLineups}
      awayTeamData={awayTeamLineups}
    />
  );
};
