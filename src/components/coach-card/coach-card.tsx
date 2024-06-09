import { TCoach } from '@/models/Coach.model';
import Image from 'next/image';
import Link from 'next/link';

interface CoachCardProps {
  coach: TCoach;
}

export const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <div className="relative flex h-[200px] w-[170px] flex-col items-center justify-center rounded-md border border-purple-300">
      <div className="relative flex flex-col">
        <Image
          src={coach.photo}
          alt={coach.name}
          width={80}
          height={80}
          className="rounded-lg"
        />
      </div>
      <Link
        className="hover:underline"
        href={`/coach/${coach.id}`}
      >
        <p>{coach.name}</p>
      </Link>
      <p>Age: {coach.age}</p>
      <p>Since: {coach.career[0].start}</p>
      <div className="absolute bottom-0 flex w-full justify-center rounded-b-md bg-slate-400">
        <p>Coach</p>
      </div>
    </div>
  );
};
