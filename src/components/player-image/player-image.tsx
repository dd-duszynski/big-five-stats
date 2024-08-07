import {
  calculateImageCssSize,
  calculateImageSize,
} from '@/lib/utils/helpers/calculate-image-size';
import Image from 'next/image';

type IPlayerImageProps = {
  photo: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const PlayerImage = ({
  photo,
  name,
  size = 'lg',
}: IPlayerImageProps) => {
  const imageSizeCSS = calculateImageCssSize(size);
  const imageSize = calculateImageSize(size);

  return (
    <figure className={imageSizeCSS}>
      <Image
        alt={name}
        className="min-h-full min-w-full rounded-md"
        height={imageSize}
        priority
        src={photo}
        width={imageSize}
      />
    </figure>
  );
};
