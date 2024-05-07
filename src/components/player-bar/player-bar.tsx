import Image from 'next/image';

interface IPlayerBasicInfo {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

interface IPlayerBarProps {
  player: IPlayerBasicInfo;
  statistics: any;
}

export const PlayerBar = ({ player, statistics }: IPlayerBarProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 pt-8 text-white [clip-path:border-box]">
      <div className="absolute left-[-20px] top-[275px] h-[1px] w-[300px] rotate-[175deg] rounded-lg bg-white opacity-80" />
      <div className="relative flex flex-col">
        <Image
          src={player.photo}
          alt={player.name}
          width={110}
          height={110}
          className="rounded-lg border-4 border-white bg-white"
        />
        <div className="absolute left-[-20px] top-0 rounded-lg border border-white bg-white p-1 text-xs">
          <Image
            src={statistics[0].team.logo}
            alt={statistics[0].team.name}
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <p className="text-xl text-indigo-950">{player.name}</p>
        <p className="text-xs">{`${player.firstname} - ${player.lastname}`}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="text-lg text-indigo-950">Position</p>
        <p className="text-sm">{statistics[0].games.position}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="text-lg text-indigo-950">Birthdate</p>
        <p className="text-sm">{`${player.birth.date} (${player.age}y)`}</p>
        <p className="text-sm">{`${player.birth.place} - ${player.birth.country}`}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="text-lg text-indigo-950">Nationality</p>
        <p className="text-sm">{player.nationality}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="text-lg text-indigo-950">Height</p>
        <p className="text-sm">{player.height}</p>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="text-lg text-indigo-950">Weight</p>
        <p className="text-sm">{player.weight}</p>
      </div>
    </div>
  );
};
