import { TeamSquadPlayerType } from '@/lib/models/team-squad-player.model';
import GradientCard from '../gradient-card/gradient-card';
import { PlayerCard } from '../player-card/player-card';

type TeamPlayersProps = {
  players: TeamSquadPlayerType[];
};

export function TeamPlayers({ players }: TeamPlayersProps) {
  return (
    <GradientCard
      headerTitle="Players"
      className="mb-2 w-[640px]"
    >
      <div className="flex flex-row flex-wrap gap-2">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </GradientCard>
  );
}
