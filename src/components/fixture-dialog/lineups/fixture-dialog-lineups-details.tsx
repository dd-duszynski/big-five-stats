import { Text } from '@/components/text/text';
import {
  FixtureLineupsType,
  StartSquadPlayerType,
} from '@/lib/models/fixtures/fixture-lineups.model';

type FixtureDialogLineupsProps = {
  awayTeamData: FixtureLineupsType;
  homeTeamData: FixtureLineupsType;
};

export const FixtureDialogLineupsDetails = ({
  awayTeamData,
  homeTeamData,
}: FixtureDialogLineupsProps) => {
  const homeTeamStartingLineup = homeTeamData.startXI;
  const awayTeamStartingLineup = awayTeamData.startXI;
  const getPlayerByPosition = (
    position: 'G' | 'D' | 'M' | 'F',
    team: {
      player: StartSquadPlayerType;
    }[]
  ) => {
    return team.filter((player) => player.player.pos === position);
  };

  return (
    <div>
      <div className="flex w-full justify-between rounded-md bg-slate-100 px-2 py-2">
        <Text
          className="text-xs"
          variant="span"
        >
          {homeTeamData.formation}
        </Text>
        <Text
          className="text-xs"
          variant="span"
        >
          Formation
        </Text>
        <Text
          className="text-xs"
          variant="span"
        >
          {awayTeamData.formation}
        </Text>
      </div>
      <div className="flex items-center">
        {getPlayerByPosition('G', homeTeamStartingLineup).map((player) => (
          <div key={player.player.id}>{player.player.name}</div>
        ))}
        <div className="flex flex-col">
          {getPlayerByPosition('D', homeTeamStartingLineup).map((player) => (
            <div key={player.player.id}>{player.player.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
