import { FixtureDetailsResponseType } from '@/lib/models/fixtures/fixture-details.model';
import { fixtureDialogStatisticsTypeMapper } from '@/lib/utils/mappers';
import { Progress, Text } from '../..';

type FixtureDialogStatisticsProps = {
  data: FixtureDetailsResponseType;
};

export const FixtureDialogStatistics = ({
  data,
}: FixtureDialogStatisticsProps) => {
  const homeTeamId = data.teams.home.id;
  const awayTeamId = data.teams.away.id;
  const homeTeamStatistics = data.statistics.find(
    (i) => i.team.id === homeTeamId
  )?.statistics;
  const awayTeamStatistics = data.statistics.find(
    (i) => i.team.id === awayTeamId
  )?.statistics;
  const statisticsType = homeTeamStatistics?.map((i) => i.type);

  return (
    <div className="flex w-full flex-col justify-between">
      {statisticsType?.map((type, index) => {
        const progressHomeTypeValue = Number(
          homeTeamStatistics?.find((i) => i.type === type)?.value
        );
        const progressAwayTypeValue = Number(
          awayTeamStatistics?.find((i) => i.type === type)?.value
        );
        const progressHomeTypeValuePercentage =
          (progressHomeTypeValue * 100) /
          (progressHomeTypeValue + progressAwayTypeValue);
        const progressAwayTypeValuePercentage =
          (progressAwayTypeValue * 100) /
          (progressHomeTypeValue + progressAwayTypeValue);

        return (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-between"
          >
            <div className="flex w-full justify-between gap-1">
              <Text
                variant="span"
                className="text-xs"
              >
                {homeTeamStatistics?.find((i) => i.type === type)?.value || 0}
              </Text>
              <Text
                variant="span"
                className="text-xs"
              >
                {fixtureDialogStatisticsTypeMapper(type)}
              </Text>
              <Text
                variant="span"
                className="text-xs"
              >
                {awayTeamStatistics?.find((i) => i.type === type)?.value || 0}
              </Text>
            </div>
            <div className="flex w-full justify-between gap-1">
              <Progress
                value={progressHomeTypeValuePercentage}
                className="-scale-100"
              />
              <Progress value={progressAwayTypeValuePercentage} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
