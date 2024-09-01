import { Text } from '@/components/text/text';
import {
  StartSquadPlayerType,
  TeamColors,
} from '@/lib/models/fixtures/fixture-lineups.model';
import { FixturePlayerStatisticsType } from '@/lib/models/fixtures/fixture-player-statistics.model';
import Link from 'next/link';

type FixtureDialogLineupsPlayerProps = {
  player: StartSquadPlayerType;
  colors: TeamColors;
  statistics: FixturePlayerStatisticsType[];
};

export function FixtureDialogLineupsPlayer({
  player,
  colors,
  statistics,
}: FixtureDialogLineupsPlayerProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center hover:underline"
      href={`/player/${player.id}`}
    >
      <div
        style={{
          background: `#${colors.player.primary}`,
          border: `1px solid #${colors.player.border}`,
          color: `#${colors.player.number}`,
        }}
        className="flex h-5 w-5 items-center justify-center rounded-full outline-1 outline-slate-300"
      >
        <Text
          className="whitespace-nowrap text-[9px]"
          variant="span"
        >
          {player.number}
        </Text>
      </div>
      <Text
        className="whitespace-nowrap text-[10px]"
        variant="span"
      >
        {player.name}
      </Text>
      {/* TODO_DD: Rating box */}
      <div className="absolute bg-yellow-800 text-[7px]">
        {statistics[0].games.rating || ''}
      </div>
    </Link>
  );
}
