import Image from 'next/image';
import { Text } from '../text/text';

type InfoSectionDetails = {
  title: string;
  value: string;
};

type AsideBarProps = {
  fullName: string;
  infoSection: InfoSectionDetails[];
  name: string;
  photo: string;
  teamLogo: string;
  teamName: string;
};

export function AsideBar({
  fullName,
  infoSection,
  name,
  photo,
  teamLogo,
  teamName,
}: AsideBarProps) {
  return (
    <aside className="min-h-[294px] w-full overflow-y-auto overflow-x-hidden bg-gradient-to-t from-emerald-500 to-indigo-500 md:h-full md:w-[250px] md:min-w-[250px]">
      <div className="flex h-full flex-row items-center justify-center gap-2 py-1 text-white [clip-path:border-box] md:flex-col md:justify-start md:gap-4 md:py-8">
        <div className="relative flex w-1/2 flex-col items-center gap-4 md:w-full">
          <div className="relative flex flex-col">
            <Image
              src={photo}
              alt={name}
              width={130}
              height={130}
              className="rounded-lg border-4 border-white bg-white"
            />
            <div className="absolute left-[-20px] top-[-20px] rounded-lg border border-gray-600 bg-white p-1 text-xs">
              <Image
                src={teamLogo}
                alt={teamName}
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Text
              className="!text-lg text-gray-200 md:text-xl"
              variant="h3"
            >
              {name}
            </Text>
            <Text
              className="text-sm "
              variant="p"
            >
              {fullName}
            </Text>
          </div>
        </div>

        <div className="flex w-1/2 flex-col items-center gap-3 md:w-full md:gap-4">
          {infoSection.map((details) => (
            <div
              className="flex flex-col items-center"
              key={details.title}
            >
              <Text
                className="!text-lg  text-indigo-950 md:text-xl"
                variant="h3"
              >
                {details.title}
              </Text>
              <Text
                className="text-xs md:text-sm"
                variant="p"
              >
                {details.value}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
