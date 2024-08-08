import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '..';

type FixtureDialogGoalEventProps = {
  isHomeTeam: boolean;
  player: {
    id: number;
    name: string;
  };
  assist: {
    id?: number;
    name?: string;
  };
  timeElapsed: number;
};

export const FixtureDialogGoalEvent = ({
  assist,
  isHomeTeam,
  player,
  timeElapsed,
}: FixtureDialogGoalEventProps) => {
  return (
    <div
      className={joinClassNames(
        'flex',
        'gap-2',
        'mb-2',
        'items-center',
        isHomeTeam ? 'justify-start' : 'justify-end'
      )}
    >
      <Image
        alt="goal icon"
        height={18}
        src={'/ball.png'}
        width={18}
      />
      <Text
        variant="span"
        className="text-xs"
      >
        {`${timeElapsed}' `}
        <Link
          className="hover:underline"
          href={`/player/${player.id}`}
          target="_blank"
        >
          {player.name}
        </Link>
        {assist && assist.name && (
          <Link
            className="hover:underline"
            href={`/player/${assist.id}`}
            target="_blank"
          >{` (${assist.name})`}</Link>
        )}
      </Text>
    </div>
  );
};
