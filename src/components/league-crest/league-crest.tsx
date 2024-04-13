'use client';

import { Crest } from '../crest/crest';
import { Text } from '../text/text';

type LeagueCardProps = {
  country: string;
  flag: string;
  logo: string;
  name: string;
  logoSize?: 'xs' | 'sm' | 'md' | 'lg';
};

export function LeagueCrest({
  country,
  flag,
  logo,
  name,
  logoSize,
}: LeagueCardProps) {
  return (
    <div className="mb-2 flex items-center justify-start rounded-md p-4">
      <div className={`flex flex-row items-center gap-6`}>
        <Crest
          alt={name}
          src={logo}
          size={logoSize}
        />
        <div className="flex flex-col gap-1">
          <Text variant="h1">{name}</Text>
          <div className="flex flex-row items-center">
            <Crest
              alt={name}
              src={flag}
              size="xs"
            />
            <Text
              variant="p"
              className="ml-2"
            >
              {country}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
