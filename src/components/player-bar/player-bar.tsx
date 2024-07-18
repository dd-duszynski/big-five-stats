import { strings } from '@/lib/strings';
import Image from 'next/image';
import { Text } from '../text/text';

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
// h-
export const PlayerBar = ({ player, statistics }: IPlayerBarProps) => {
  return (
    <aside className="min-h-[294px] w-full overflow-y-auto overflow-x-hidden bg-gradient-to-t from-emerald-500 to-indigo-500 md:h-full md:w-[250px] md:min-w-[250px]">
      <div className="flex flex-row items-center justify-center gap-2 py-1 text-white [clip-path:border-box] md:flex-col md:items-center md:gap-4 md:py-8">
        {/* <div className="absolute left-[-20px] top-[275px] h-[1px] w-[300px] rotate-[175deg] rounded-lg bg-white opacity-80" /> */}

        <div className="relative flex w-1/2 flex-col items-center gap-4 md:w-full">
          <div className="relative flex flex-col">
            <Image
              src={player.photo}
              alt={player.name}
              width={130}
              height={130}
              className="rounded-lg border-4 border-white bg-white"
            />
            <div className="absolute left-[-20px] top-[-20px] rounded-lg border border-gray-600 bg-white p-1 text-xs">
              <Image
                src={statistics[0].team.logo}
                alt={statistics[0].team.name}
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Text
              className="!text-lg text-indigo-950 md:text-xl"
              variant="h3"
            >
              {player.name}
            </Text>
            <Text
              className="text-sm "
              variant="p"
            >
              {`${player.firstname} - ${player.lastname}`}
            </Text>
          </div>
        </div>

        <div className="flex w-1/2 flex-col items-center gap-3 md:w-full md:gap-4">
          <div className="flex flex-col items-center">
            <Text
              className="!text-lg  text-indigo-950 md:text-xl"
              variant="h3"
            >
              {strings.Position}
            </Text>
            <Text
              className="text-xs md:text-sm"
              variant="p"
            >
              {statistics[0].games.position}
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Text
              className="!text-lg text-indigo-950 md:text-xl"
              variant="h3"
            >
              {strings.Birthdate}
            </Text>

            <Text
              className="text-xs md:text-sm"
              variant="p"
            >{`${player.birth.date} (${player.age}y)`}</Text>
            <Text
              className="text-xs md:text-sm"
              variant="p"
            >{`${player.birth.place} - ${player.birth.country}`}</Text>
          </div>
          <div className="flex flex-col items-center">
            <Text
              className="!text-lg text-indigo-950 md:text-xl"
              variant="h3"
            >
              {strings.Nationality}
            </Text>
            <Text
              className="text-xs md:text-sm"
              variant="p"
            >
              {player.nationality}
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Text
              className="!text-lg text-indigo-950 md:text-xl"
              variant="h3"
            >
              {strings.Height}
            </Text>
            <Text
              className="text-xs md:text-sm"
              variant="p"
            >
              {player.height}
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Text
              className="!text-lg text-indigo-950 md:text-xl"
              variant="h3"
            >
              {strings.Weight}
            </Text>
            <Text
              className="text-xs md:text-sm"
              variant="p"
            >
              {player.weight}
            </Text>
          </div>
        </div>
      </div>
    </aside>
  );
};
