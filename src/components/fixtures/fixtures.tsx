'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FixturesType } from '@/models/fixtures.model';

interface FixturesProps {
  rounds: string[];
  games: FixturesType[];
}

export default function Fixtures({ rounds, games }: FixturesProps) {
  // console.log('games:', games);
  return (
    <div>
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
            className="flex flex-row"
          >
            <p>{`${game.teams.home.name} ${game.goals.home} - ${game.goals.away} ${game.teams.away.name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
