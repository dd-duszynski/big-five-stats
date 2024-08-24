import { FIXTURE_LINEUPS_PLAYER_POSITION } from '@/lib/enums/fixture-lineups-player-position';
import {
  FixtureLineupsStartPlayerType,
  FixtureLineupsType,
} from '@/lib/models/fixtures/fixture-lineups.model';
import { FixtureDialogLineupsPlayer } from './fixture-dialog-lineups-player';

type FixtureDialogLineupsTeamProps = {
  teamInfo: FixtureLineupsType;
  isAwayTeam?: boolean;
};

const getPlayerByPosition = (
  position: FIXTURE_LINEUPS_PLAYER_POSITION,
  teamStartingLineup: FixtureLineupsStartPlayerType[]
) => {
  return teamStartingLineup.filter((player) => player.player.pos === position);
};

export function FixtureDialogLineupsTeam({
  teamInfo,
  isAwayTeam,
}: FixtureDialogLineupsTeamProps) {
  const defaultTeamPositionOrder = [
    FIXTURE_LINEUPS_PLAYER_POSITION.GOALKEEPER,
    FIXTURE_LINEUPS_PLAYER_POSITION.DEFENDER,
    FIXTURE_LINEUPS_PLAYER_POSITION.MIDFIELDER,
    FIXTURE_LINEUPS_PLAYER_POSITION.FORWARD,
  ];

  if (isAwayTeam) {
    defaultTeamPositionOrder.reverse();
  }

  const renderResult = defaultTeamPositionOrder.map((position, index) => {
    return (
      <div
        className="flex flex-col"
        key={index}
      >
        {getPlayerByPosition(position, teamInfo.startXI).map((player) => (
          <FixtureDialogLineupsPlayer
            colors={teamInfo.team.colors}
            key={player.player.id}
            player={player.player}
          />
        ))}
      </div>
    );
  });

  return <div className="flex flex-row items-center">{renderResult}</div>;
}
