import Image from 'next/image';

interface IPlayerImageProps {
  photo: string;
  name: string;
}

export const PlayerImage = ({ photo, name }: IPlayerImageProps) => {
  return (
    <div className="h-24 w-24">
      <Image
        src={photo}
        alt={name}
        width={100}
        height={100}
        className="min-h-full min-w-full rounded-2xl"
      />
    </div>
  );
};
