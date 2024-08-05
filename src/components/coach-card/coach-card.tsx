import { CoachType } from '@/lib/models/coach/coach.model';
import { strings } from '@/lib/strings';
import Image from 'next/image';
import Link from 'next/link';

interface CoachCardProps {
  coach: CoachType;
}

export const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <div className="indigo-500 relative flex h-[200px] w-[170px] flex-col items-center justify-center rounded-md border">
      <div className="relative flex flex-col">
        <Image
          alt={coach.name}
          className="rounded-lg"
          height={100}
          src={coach.photo}
          width={100}
        />
      </div>
      <Link
        className="hover:underline"
        href={`/coach/${coach.id}`}
      >
        <p>{coach.name}</p>
      </Link>
      <p>{`${strings.Age}: ${coach.age}`}</p>
      <p>{`${strings.Since}: ${coach.career[0].start}`}</p>
    </div>
  );
};
