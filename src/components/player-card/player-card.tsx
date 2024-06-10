import { TeamSquadPlayerType } from '@/models/team-squad-player.model';
import Image from 'next/image';
import Link from 'next/link';

interface PlayerCardProps {
  player: TeamSquadPlayerType;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="relative flex h-[200px] w-[170px] flex-col items-center justify-center rounded-md border border-purple-300">
      <div className="relative flex flex-col">
        <Image
          alt={player.name}
          className="rounded-lg"
          height={80}
          src={player.photo}
          width={80}
        />
        <div className="border-purple absolute left-[-6px] top-0 rounded-full border border-white bg-slate-400  p-1 text-xs">
          <span>{player.number || '-'}</span>
        </div>
      </div>
      <Link
        className="hover:underline"
        href={`/player/${player.id}`}
      >
        <p>{player.name}</p>
      </Link>
      <p>Age: {player.age}</p>
      <div className="absolute bottom-0 flex w-full justify-center rounded-b-md bg-slate-400">
        <p>{player.position}</p>
      </div>
    </div>
  );
};
