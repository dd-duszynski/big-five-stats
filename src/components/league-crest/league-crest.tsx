'use client';

import { Crest } from '../crest/crest';
import { CardTitle } from '../ui/card';

type LeagueCardProps = {
  country: string;
  flag: string;
  logo: string;
  name: string;
};

export function LeagueCrest({ country, flag, logo, name }: LeagueCardProps) {
  return (
    <div className={`flex flex-row items-center gap-6`}>
      <Crest
        alt={name}
        src={logo}
        size="sm"
      />
      <div className="flex flex-col gap-1">
        <CardTitle>{name}</CardTitle>
        <div className="flex flex-row items-center">
          <Crest
            alt={name}
            src={flag}
            size="xs"
          />
          <p className="ml-2">{country}</p>
        </div>
      </div>
    </div>
  );
}
