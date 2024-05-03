import { TeamSquadPlayer } from '@/models/TeamSquad.model';
import Image from 'next/image';

interface PlayerCardProps {
  player: TeamSquadPlayer;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="flex h-[200px] w-[170px] flex-col items-center justify-center rounded-md border border-purple-300">
      <div className="relative flex flex-col">
        <Image
          src={player.photo}
          alt={player.name}
          width={80}
          height={80}
          className="rounded-lg "
        />
        <div className="border-purple absolute left-[-6px] top-0 rounded-full border bg-gray-200  p-1 text-xs">
          <span>{player.number}</span>
        </div>
      </div>
      <p>{player.name}</p>
      <p>Age: {player.age}</p>
      <p>{player.position}</p>
    </div>
  );
};
