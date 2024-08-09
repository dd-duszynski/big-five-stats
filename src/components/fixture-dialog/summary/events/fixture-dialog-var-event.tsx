import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../..';

type FixtureDialogVarEventProps = {
  /* TODO_DD: add name & id - for Link to player */
  detail: string;
  isHomeTeam: boolean;
  player: {
    id: number;
    name: string;
  };
  timeElapsed: number;
};

export const FixtureDialogVarEvent = ({
  detail,
  isHomeTeam,
  player,
  timeElapsed,
}: FixtureDialogVarEventProps) => {
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
        height={18}
        src={'/var.png'}
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
        {` - ${detail}`}
      </Text>
    </div>
  );
};
