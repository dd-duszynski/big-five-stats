import { FixtureDetailsResponseType } from '@/lib/models/fixtures/fixture-details.model';
import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import Image from 'next/image';
import { Text } from '..';
import { FIXTURE_EVENTS } from '@/lib/enums/fixture-events';

type FixtureDialogSummaryProps = {
  data: FixtureDetailsResponseType;
};

export const FixtureDialogSummary = ({ data }: FixtureDialogSummaryProps) => {
  console.log('data:', data);
  const homeTeamId = data.teams.home.id;
  const awayTeamId = data.teams.away.id;

  const events = data.events.map((event, index) => {
    let imageSource = '/ball.png';
    if (event.type === FIXTURE_EVENTS.GOAL) imageSource = '/goal.png';
    if (event.type === FIXTURE_EVENTS.CARD && event.detail === 'Yellow Card')
      imageSource = '/yellow-card.png';
    if (event.type === FIXTURE_EVENTS.CARD && event.detail === 'Red Card')
      imageSource = '/red-card.png';

    return (
      <div
        key={index}
        className={joinClassNames(
          'flex',
          'gap-2',
          'items-center',
          event.team.id === homeTeamId && 'justify-start',
          event.team.id === awayTeamId && 'justify-end'
        )}
      >
        <Image
          alt="goal icon"
          height={20}
          src={imageSource}
          width={20}
        />
        <Text
          variant="span"
          className="text-xs"
        >
          {`${event.time.elapsed}' ${event.player.name}`}
        </Text>
      </div>
    );
  });

  return <div>{events}</div>;
};
