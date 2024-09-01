import { FixtureDialogLineupsTeamData } from './fixture-dialog-lineups-details';
import { FixtureDialogLineupsPlayer } from './fixture-dialog-lineups-player';
import { organizePlayersByGridType } from './helpers/organizePlayersByGridType';

type FixtureDialogLineupsTeamProps = {
  teamInfo: FixtureDialogLineupsTeamData;
  isAwayTeam?: boolean;
};

export function FixtureDialogLineupsTeam({
  teamInfo,
  isAwayTeam,
}: FixtureDialogLineupsTeamProps) {
  const playersOrganizedByGridType = organizePlayersByGridType({
    teamStartingLineup: teamInfo.lineups.startXI,
    formation: teamInfo.lineups.formation,
    isAwayTeam: isAwayTeam,
  });

  const renderResult = playersOrganizedByGridType.map((typeArr, index) => {
    return (
      <div
        className="flex flex-col gap-2"
        key={index}
      >
        {typeArr.map((player) => {
          const statistics = teamInfo.players.players.find(
            (item) => item.player.id === player.player.id
          )?.statistics;
          return (
            <FixtureDialogLineupsPlayer
              colors={teamInfo.lineups.team.colors}
              key={player.player.id}
              player={player.player}
              statistics={statistics || []}
            />
          );
        })}
      </div>
    );
  });
  return (
    <div className="max-w-1/2 flex flex-row items-center">{renderResult}</div>
  );
}
