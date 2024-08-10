import { Progress } from '@/components';
import { FixtureDetailsResponseType } from '@/lib/models/fixtures/fixture-details.model';

type FixtureDialogStatisticsProps = {
  data: FixtureDetailsResponseType;
};

export const FixtureDialogStatistics = ({
  data,
}: FixtureDialogStatisticsProps) => {
  const homeTeamId = data.teams.home.id;
  const awayTeamId = data.teams.away.id;

  return (
    <div>
      <Progress
        value={60}
        // className="w-full"
      />
    </div>
  );
};
