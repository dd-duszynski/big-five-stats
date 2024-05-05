import { TeamSquadPlayer } from '@/models/TeamSquad.model';
import Image from 'next/image';
import Link from 'next/link';

interface PlayerCardProps {
  player: TeamSquadPlayer;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="relative flex h-[200px] w-[170px] flex-col items-center justify-center rounded-md border border-purple-300">
      <div className="relative flex flex-col">
        <Image
          src={player.photo}
          alt={player.name}
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div className="border-purple absolute left-[-6px] top-0 rounded-full border bg-gray-200  p-1 text-xs">
          <span>{player.number}</span>
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
