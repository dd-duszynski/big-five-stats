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

type PlayersOrganizedByGridType = {
  [key: string]: FixtureLineupsStartPlayerType[];
};

const organizePlayersByGridObj = (
  teamStartingLineup: FixtureLineupsStartPlayerType[],
  formation: string
): PlayersOrganizedByGridType => {
  const formationLength = formation.split('-').length + 1;
  let formationLengthArray = [];
  for (let i = 1; i <= formationLength; i++) {
    formationLengthArray.push(`${i}`);
  }

  const playersOrganizedByGridType: PlayersOrganizedByGridType =
    formationLengthArray.reduce((prev, current) => {
      prev[current] = teamStartingLineup
        .filter((player) => player.player.grid.charAt(0) === current)
        .sort((a, b) => {
          return +a.player.grid.charAt(2) - +b.player.grid.charAt(2);
        });
      return prev;
    }, {} as PlayersOrganizedByGridType);

  return playersOrganizedByGridType;
};

const organizePlayersByGridArr = (
  teamStartingLineup: FixtureLineupsStartPlayerType[],
  formation: string
): FixtureLineupsStartPlayerType[][] => {
  const formationLength = formation.split('-').length + 1;
  let formationLengthArray = [];
  let playersOrganizedByGridType = [];
  for (let i = 1; i <= formationLength; i++) {
    formationLengthArray.push(`${i}`);
  }

  for (const formationValue of formationLengthArray) {
    playersOrganizedByGridType.push(
      teamStartingLineup
        .filter((player) => player.player.grid.charAt(0) === formationValue)
        .sort((a, b) => {
          return +a.player.grid.charAt(2) - +b.player.grid.charAt(2);
        })
    );
  }

  // const playersOrganizedByGridType =
  //   formationLengthArray.reduce((prev, current) => {
  //     teamStartingLineup
  //       .filter((player) => player.player.grid.charAt(0) === current)
  //       .sort((a, b) => {
  //         return +a.player.grid.charAt(2) - +b.player.grid.charAt(2);
  //       });
  //     return prev;
  //   }, [];
  console.log('playersOrganizedByGridTypeArr:', playersOrganizedByGridType);

  return playersOrganizedByGridType;
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
  /* TODO_DD: finish organizePlayersByGrid */
  organizePlayersByGridObj(teamInfo.startXI, teamInfo.formation);
  organizePlayersByGridArr(teamInfo.startXI, teamInfo.formation);

  return <div className="flex flex-row items-center">{renderResult}</div>;
}
