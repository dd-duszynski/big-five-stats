import Image from 'next/image';

interface IPlayerImageProps {
  photo: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PlayerImage = ({
  photo,
  name,
  size = 'lg',
}: IPlayerImageProps) => {
  const sizeMap = {
    sm: 50,
    md: 75,
    lg: 100,
  };

  return (
    <div className={`h-[${sizeMap[size]}px] w-[${sizeMap[size]}px]`}>
      <Image
        alt={name}
        className="min-h-full min-w-full rounded-md"
        height={sizeMap[size]}
        priority
        src={photo}
        width={sizeMap[size]}
      />
    </div>
  );
};
