'use client';

import { Crest } from '../crest/crest';
import { Text } from '../text/text';

type PageHeaderProps = {
  logo: string;
  logoSize?: 'xs' | 'sm' | 'md' | 'lg';
  subLogo: string;
  subtitle: string;
  title: string;
};

export function PageHeader({
  logo,
  logoSize,
  subLogo,
  subtitle,
  title,
}: PageHeaderProps) {
  return (
    <div className="mb-2 flex flex-col items-start justify-between bg-gradient-to-t  from-emerald-500 to-indigo-500 px-8">
      <div className="flex w-full flex-row justify-between py-4">
        <div className="flex flex-row items-center justify-center gap-2">
          <Crest
            alt={title}
            size={logoSize}
            src={logo}
          />
          <div>
            <Text
              variant="h1"
              className="text-white"
            >
              {title}
            </Text>
            <div className="flex flex-row items-center">
              <Crest
                alt={title}
                size="xs"
                src={subLogo}
              />
              <Text
                className="ml-2 text-white"
                variant="p"
              >
                {subtitle}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
