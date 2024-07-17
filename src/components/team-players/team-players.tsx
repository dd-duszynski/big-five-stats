import { GradientCard, Text } from '@/components';
import { PlayerPosition } from '@/lib/enums/player-position';
import { TeamSquadPlayerType } from '@/lib/models/team-squad-player.model';
import { strings } from '@/lib/strings';
import { PlayerCard } from '../player-card/player-card';

type TeamPlayersProps = {
  players: TeamSquadPlayerType[];
};

export function TeamPlayers({ players }: TeamPlayersProps) {
  const goalkeepers = players.filter(
    (player) => player.position === PlayerPosition.Goalkeeper
  );
  const defenders = players.filter(
    (player) => player.position === PlayerPosition.Defender
  );
  const midfielders = players.filter(
    (player) => player.position === PlayerPosition.Midfielder
  );
  const attackers = players.filter(
    (player) => player.position === PlayerPosition.Attacker
  );

  const createSubSection = (title: string, players: TeamSquadPlayerType[]) => (
    <>
      <div className="mb-2 flex justify-center rounded-md bg-gradient-to-r from-indigo-500 to-emerald-500">
        <Text
          variant="h4"
          className="text-white"
        >
          {title}
        </Text>
      </div>
      <div className="mb-4 flex flex-row flex-wrap gap-2">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </>
  );

  return (
    <GradientCard
      cardContentClassName="overflow-y-auto h-[800px]"
      className="mb-2 w-[640px]"
      headerTitle={strings.Players}
    >
      {createSubSection(strings.Goalkeepers, goalkeepers)}
      {createSubSection(strings.Defenders, defenders)}
      {createSubSection(strings.Midfielders, midfielders)}
      {createSubSection(strings.Attackers, attackers)}
    </GradientCard>
  );
}
