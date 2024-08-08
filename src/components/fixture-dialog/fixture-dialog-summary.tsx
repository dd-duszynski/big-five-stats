import { FIXTURE_EVENTS } from '@/lib/enums/fixture-events';
import { FixtureDetailsResponseType } from '@/lib/models/fixtures/fixture-details.model';
import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import Image from 'next/image';
import { Text } from '..';
import { FixtureDialogCardEvent } from './fixture-dialog-card-event';
import { FixtureDialogGoalEvent } from './fixture-dialog-goal-event';
import { FixtureDialogSubsEvent } from './fixture-dialog-subs-event';
import { FixtureDialogVarEvent } from './fixture-dialog-var-event';

type FixtureDialogSummaryProps = {
  data: FixtureDetailsResponseType;
};

export const FixtureDialogSummary = ({ data }: FixtureDialogSummaryProps) => {
  console.log('data:', data);
  const homeTeamId = data.teams.home.id;
  const awayTeamId = data.teams.away.id;

  const events = data.events.map((event, index) => {
    let imageSource = '/ball.png';
    if (event.type === FIXTURE_EVENTS.GOAL) {
      return (
        <FixtureDialogGoalEvent
          assist={event.assist}
          isHomeTeam={event.team.id === homeTeamId}
          key={index}
          player={event.player}
          timeElapsed={event.time.elapsed}
        />
      );
    }
    if (event.type === FIXTURE_EVENTS.CARD) {
      return (
        <FixtureDialogCardEvent
          eventDetail={event.detail}
          isHomeTeam={event.team.id === homeTeamId}
          key={index}
          player={event.player}
          timeElapsed={event.time.elapsed}
        />
      );
    }
    if (event.type === FIXTURE_EVENTS.SUBST) {
      return (
        <FixtureDialogSubsEvent
          assist={event.assist}
          isHomeTeam={event.team.id === homeTeamId}
          key={index}
          player={event.player}
          timeElapsed={event.time.elapsed}
        />
      );
    }
    if (event.type === FIXTURE_EVENTS.VAR) {
      return (
        <FixtureDialogVarEvent
          detail={event.detail}
          isHomeTeam={event.team.id === homeTeamId}
          key={index}
          player={event.player}
          timeElapsed={event.time.elapsed}
        />
      );
    }
    return (
      <div
        key={index}
        className={joinClassNames(
          'flex',
          'gap-2',
          'mb-2',
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
