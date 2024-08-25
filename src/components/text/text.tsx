type TextProps = {
  className?: string;
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
};

export function Text({ className, children, variant }: TextProps) {
  const Tag = variant;
  const specificClasses = {
    h1: 'text-3xl font-bold tracking-tight',
    h2: 'text-2xl font-bold tracking-tight',
    h3: 'text-xl font-bold tracking-tight',
    h4: 'text-lg font-medium tracking-tight',
    p: 'text-base font-medium tracking-tight',
    span: 'font-medium tracking-tight',
  };

  return (
    <Tag className={`${specificClasses[variant]} ${className}`}>{children}</Tag>
  );
}
