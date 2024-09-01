import { FixtureLineupsStartPlayerType } from '@/lib/models/fixtures/fixture-lineups.model';

type OrganizePlayersByGridTypeParams = {
  teamStartingLineup: FixtureLineupsStartPlayerType[];
  formation: string;
  isAwayTeam?: boolean;
};

export const organizePlayersByGridType = ({
  teamStartingLineup,
  formation,
  isAwayTeam,
}: OrganizePlayersByGridTypeParams) => {
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
          if (isAwayTeam) {
            return +b.player.grid.charAt(2) - +a.player.grid.charAt(2);
          }
          return +a.player.grid.charAt(2) - +b.player.grid.charAt(2);
        })
    );
  }

  if (isAwayTeam) {
    playersOrganizedByGridType.reverse();
  }

  return playersOrganizedByGridType;
};
