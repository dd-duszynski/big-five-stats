'use client';
import { Crest, Text } from '../';

type LeagueCardProps = {
  flag: string;
  logo: string;
  logoSize?: 'xs' | 'sm' | 'md' | 'lg';
  subtitle: string;
  title: string;
};

export function LeagueCrest({
  flag,
  logo,
  logoSize,
  subtitle,
  title,
}: LeagueCardProps) {
  return (
    <div className="mb-2 flex items-center justify-start rounded-md p-4">
      <div className={`flex flex-row items-center gap-6`}>
        <Crest
          alt={title}
          size={logoSize}
          src={logo}
        />
        <div className="flex flex-col gap-1">
          <Text variant="h1">{title}</Text>
          <div className="flex flex-row items-center">
            <Crest
              alt={title}
              size="xs"
              src={flag}
            />
            <Text
              className="ml-2"
              variant="p"
            >
              {subtitle}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
