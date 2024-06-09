import { TCoach } from '@/models/Coach.model';
import Image from 'next/image';

interface ICoachBarProps {
  coach: TCoach;
}

/* TODO_DD: unify with PlayerBar */
export const CoachBar = ({ coach }: ICoachBarProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 pt-8 text-white [clip-path:border-box]">
      <div className="relative flex flex-col">
        <Image
          src={coach.photo}
          alt={coach.name}
          width={110}
          height={110}
          className="rounded-lg border-4 border-white bg-white"
        />
        <div className="absolute left-[-20px] top-0 rounded-lg border border-white bg-white p-1 text-xs">
          <Image
            src={coach.team.logo}
            alt={coach.team.name}
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <p className="text-xl text-indigo-950">{coach.name}</p>
        <p className="text-xs">{`${coach.firstname} - ${coach.lastname}`}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="text-lg text-indigo-950">Birthdate</p>
        <p className="text-sm">{`${coach.birth.date} (${coach.age}y)`}</p>
        <p className="text-sm">{`${coach.birth.place} - ${coach.birth.country}`}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="text-lg text-indigo-950">Nationality</p>
        <p className="text-sm">{coach.nationality}</p>
      </div>
    </div>
  );
};
