import Image from 'next/image';
import { calculateImageCssSize } from '..';

type CrestProps = {
  alt?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  src: string;
};

export const Crest = ({
  alt,
  className = '',
  size = 'md',
  src,
}: CrestProps) => {
  const imageSizeCSS = calculateImageCssSize(size);
  return (
    <figure className={`relative ${imageSizeCSS} ${className}`}>
      <Image
        alt={alt ?? ''}
        className={`object-contain`}
        fill
        src={src}
      />
    </figure>
  );
};
