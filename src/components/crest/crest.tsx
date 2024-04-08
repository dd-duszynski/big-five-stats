import { cn } from '@/lib/utils';
import Image from 'next/image';

type CrestProps = {
  src: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

export const Crest = ({ src, alt, size = 'md' }: CrestProps) => {
  const sizeMap = {
    xs: 22,
    sm: 50,
    md: 75,
    lg: 100,
  };

  return (
    <figure
      className={`relative h-[${sizeMap[size]}px] w-[${sizeMap[size]}px]`}
    >
      <Image
        src={src}
        alt={alt ?? ''}
        fill
        loading="eager"
        className="object-contain"
      />
    </figure>
  );
};
