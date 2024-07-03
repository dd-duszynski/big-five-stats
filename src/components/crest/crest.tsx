import { Avatar, AvatarFallback, AvatarImage } from '@/components';
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
    <Avatar className={`${imageSizeCSS} ${className}`}>
      <AvatarImage src={src} />
      <AvatarFallback>{alt?.substring(0, 3).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
