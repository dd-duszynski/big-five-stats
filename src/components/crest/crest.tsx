import { cn } from '@/lib/utils';
import Image from 'next/image';

type CrestProps = {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  size?: 'sm' | 'md' | 'lg';
};

export const Crest = ({ src, alt, height, width, size = 'md' }: CrestProps) => {
  let imgSize;

  if (size === 'sm') {
    imgSize = 'h-[28px] w-[28px]';
  } else if (size === 'md') {
    imgSize = 'h-[50px] w-[50px]';
  } else if (size === 'lg') {
    imgSize = 'h-[60px] w-[60px]';
  }

  return (
    <figure className={cn('relative', imgSize)}>
      <Image
        src={src}
        alt={alt ?? ''}
        fill
        // width={width || 50}
        // height={height || 50}
        loading="eager"
        className="object-contain"
      />
      {/* {alt && <figcaption>{alt}</figcaption>} */}
    </figure>
  );
};
