import { CoachCard, GradientCard, Text } from '@/components';
import { PlayerPosition } from '@/lib/enums/player-position';
import { CoachType } from '@/lib/models/coach.model';
import { TeamSquadPlayerType } from '@/lib/models/team-squad-player.model';
import { strings } from '@/lib/strings';
import { PlayerCard } from '../player-card/player-card';

type TeamSquadProps = {
  players: TeamSquadPlayerType[];
  coach: CoachType;
};

export function TeamSquad({ coach, players }: TeamSquadProps) {
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

  const createSubSection = ({
    coach,
    players,
    title,
  }: {
    coach?: CoachType;
    players?: TeamSquadPlayerType[];
    title: string;
  }) => (
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
        {players &&
          players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
            />
          ))}
        {coach && <CoachCard coach={coach} />}
      </div>
    </>
  );

  return (
    <GradientCard
      cardContentClassName="overflow-y-auto h-[1000px]"
      className="mb-2 w-full"
      headerTitle={strings.Players}
    >
      {createSubSection({ title: strings.Goalkeepers, players: goalkeepers })}
      {createSubSection({ title: strings.Defenders, players: defenders })}
      {createSubSection({ title: strings.Midfielders, players: midfielders })}
      {createSubSection({ title: strings.Attackers, players: attackers })}
      {createSubSection({ title: strings.Coach, coach: coach })}
    </GradientCard>
  );
}
