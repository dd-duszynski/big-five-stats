export type ImageSize = 'xs' | 'sm' | 'md' | 'lg';

export const calculateImageCssSize = (size: ImageSize) => {
  let sizeCSS: string;
  switch (size) {
    case 'xs':
      sizeCSS = 'h-[22px] w-[22px]';
      break;
    case 'sm':
      sizeCSS = 'h-[50px] w-[50px]';
      break;
    case 'md':
      sizeCSS = 'h-[75px] w-[75px]';
      break;
    case 'lg':
      sizeCSS = 'h-[100px] w-[100px]';
      break;
  }
  return sizeCSS;
};

export const calculateImageSize = (size: ImageSize) => {
  const sizeMap = {
    xs: 22,
    sm: 50,
    md: 75,
    lg: 100,
  };

  return sizeMap[size];
};
