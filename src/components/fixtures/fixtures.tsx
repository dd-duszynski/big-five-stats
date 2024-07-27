'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FixturesType } from '@/lib/models/fixtures.model';
import { strings } from '@/lib/strings';
import { joinClassNames } from '@/lib/utils/helpers/join-class-names';
import Link from 'next/link';
import { Crest, Text } from '..';
import { GradientCard } from '../gradient-card/gradient-card';

interface FixturesProps {
  games: FixturesType[];
  rounds: string[];
  className?: string;
}

export function Fixtures({ rounds, games, className }: FixturesProps) {
  return (
    <GradientCard
      className={joinClassNames(className, 'mb-2 w-full')}
      headerTitle={strings.Fixtures}
    >
      <Select defaultValue={rounds[0]}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a round" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {rounds.map((round, index) => (
              <SelectItem
                key={index}
                value={round}
                className="cursor-pointer hover:underline"
              >
                {round}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex flex-col">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-center gap-2"
          >
            <Link
              className="hover:underline"
              href={`/team/${game.teams.home.id}`}
            >
              <div className="flex items-center gap-2">
                <Crest
                  alt={game.teams.home.name}
                  size="sm"
                  src={game.teams.home.logo}
                />
                {game.teams.home.name}
              </div>
            </Link>

            <Text variant="span">
              {`${game.goals.home} - ${game.goals.away}`}
            </Text>

            <Link
              className="hover:underline"
              href={`/team/${game.teams.away.id}`}
            >
              <div className="flex items-center gap-2">
                <Crest
                  alt={game.teams.away.name}
                  size="sm"
                  src={game.teams.away.logo}
                />
                {game.teams.away.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </GradientCard>
  );
}
