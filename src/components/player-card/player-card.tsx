import { TeamSquadPlayerType } from '@/lib/models/team/team-squad-player.model';
import Image from 'next/image';
import Link from 'next/link';

type PlayerCardProps = {
  player: TeamSquadPlayerType;
};

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="indigo-500 relative flex h-[180px] w-[170px] flex-col items-center justify-center rounded-md border">
      <div className="relative flex flex-col">
        <Image
          alt={player.name}
          className="rounded-lg"
          height={100}
          src={player.photo}
          width={100}
        />
        <div className="border-purple absolute left-[-6px] top-0 rounded-full border border-white bg-slate-400  p-1 text-xs">
          <span>{player.number || '-'}</span>
        </div>
      </div>
      <Link
        className="text-center hover:underline"
        href={`/player/${player.id}`}
      >
        <p>{player.name}</p>
      </Link>
      <p>Age: {player.age}</p>
    </div>
  );
};
