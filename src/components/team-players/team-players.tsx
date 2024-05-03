import { TeamSquadPlayer } from '@/models/TeamSquad.model';
import { PlayerCard } from '../player-card/player-card';
import { Text } from '../text/text';
import { Card, CardContent, CardHeader } from '../ui/card';

type TeamPlayersProps = {
  players: TeamSquadPlayer[];
};

export function TeamPlayers({ players }: TeamPlayersProps) {
  return (
    <Card className="max-w-[640px]">
      <CardHeader className="flex items-center justify-center gap-3 rounded-t-md bg-gradient-to-r from-indigo-500 to-emerald-500">
        <Text
          variant="h2"
          className="text-center text-white"
        >
          Players
        </Text>
      </CardHeader>

      <div className="mb-2 flex items-center justify-center  "></div>

      <CardContent>
        <div className="flex flex-row flex-wrap gap-2">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
