import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../..';

type FixtureDialogCardEventProps = {
  eventDetail: string;
  isHomeTeam: boolean;
  player: {
    id: number;
    name: string;
  };
  timeElapsed: number;
};

export const FixtureDialogCardEvent = ({
  eventDetail,
  isHomeTeam,
  player,
  timeElapsed,
}: FixtureDialogCardEventProps) => {
  const isRedCard = eventDetail === 'Red Card';
  let imageSource = '/yellow-card.png';
  if (isRedCard) imageSource = '/red-card.png';

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
        alt="card icon"
        height={20}
        src={imageSource}
        width={20}
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
      </Text>
    </div>
  );
};
