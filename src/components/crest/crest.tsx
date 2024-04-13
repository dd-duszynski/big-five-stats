import Image from 'next/image';
import { calculateImageCssSize } from '..';

type CrestProps = {
  src: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Crest = ({ src, alt, size = 'md' }: CrestProps) => {
  const imageSizeCSS = calculateImageCssSize(size);

  return (
    <figure className={`relative ${imageSizeCSS}`}>
      <Image
        alt={alt ?? ''}
        className={`object-contain`}
        fill
        src={src}
      />
    </figure>
  );
};
