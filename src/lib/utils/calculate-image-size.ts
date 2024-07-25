export type ImageSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const calculateImageCssSize = (size: ImageSize) => {
  let sizeCSS: string;
  switch (size) {
    case 'xs':
      sizeCSS = 'h-[20px] w-[20px]';
      break;
    case 'sm':
      sizeCSS = 'h-[30px] w-[30px]';
      break;
    case 'md':
      sizeCSS = 'h-[50px] w-[50px]';
      break;
    case 'lg':
      sizeCSS = 'h-[75px] w-[75px]';
      break;
    case 'xl':
      sizeCSS = 'h-[100px] w-[100px]';
      break;
  }
  return sizeCSS;
};

export const calculateImageSize = (size: ImageSize) => {
  const sizeMap = {
    xs: 20,
    sm: 30,
    md: 50,
    lg: 75,
    xl: 100,
  };

  return sizeMap[size];
};

/* TODO_DD: add to index, or move to lib/utils */
