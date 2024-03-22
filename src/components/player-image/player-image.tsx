import Image from 'next/image';

interface IPlayerImageProps {
  photo: string;
  name: string;
}

export const PlayerImage = ({ photo, name }: IPlayerImageProps) => {
  return (
    <div className="h-24 w-24">
      <Image
        alt={name}
        className="min-h-full min-w-full rounded-2xl"
        height={100}
        priority
        src={photo}
        width={100}
      />
    </div>
  );
};
