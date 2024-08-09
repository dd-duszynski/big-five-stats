import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../..';

type FixtureDialogSubsEventProps = {
  /* TODO_DD: add name & id - for Link to player */
  assist: {
    id?: number;
    name?: string;
  };
  isHomeTeam: boolean;
  player: {
    id: number;
    name: string;
  };
  timeElapsed: number;
};

export const FixtureDialogSubsEvent = ({
  assist,
  isHomeTeam,
  player,
  timeElapsed,
}: FixtureDialogSubsEventProps) => {
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
        alt="subs icon"
        height={20}
        src={'/subs.png'}
        width={20}
      />
      <Text
        variant="span"
        className="text-xs"
      >
        {`${timeElapsed}' `}
        {assist && assist.name && (
          <Link
            className="hover:underline"
            href={`/player/${assist.id}`}
            target="_blank"
          >{`${assist.name} `}</Link>
        )}
        <Link
          className="hover:underline"
          href={`/player/${player.id}`}
          target="_blank"
        >
          {` (${player.name})`}
        </Link>
      </Text>
    </div>
  );
};
