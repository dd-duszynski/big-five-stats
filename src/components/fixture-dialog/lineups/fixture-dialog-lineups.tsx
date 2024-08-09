import { FixtureDetailsResponseType } from '@/lib/models/fixtures/fixture-details.model';

type FixtureDialogLineupsProps = {
  data: FixtureDetailsResponseType;
};

export const FixtureDialogLineups = ({ data }: FixtureDialogLineupsProps) => {
  const homeTeamId = data.teams.home.id;
  const awayTeamId = data.teams.away.id;

  return <div>FixtureDialogLineups</div>;
};

// {type: 'Shots on Goal', value: 1}
// 1
// :
// {type: 'Shots off Goal', value: 3}
// 2
// :
// {type: 'Total Shots', value: 6}
// 3
// :
// {type: 'Blocked Shots', value: 2}
// 4
// :
// {type: 'Shots insidebox', value: 5}
// 5
// :
// {type: 'Shots outsidebox', value: 1}
// 6
// :
// {type: 'Fouls', value: 11}
// 7
// :
// {type: 'Corner Kicks', value: 6}
// 8
// :
// {type: 'Offsides', value: 0}
// 9
// :
// {type: 'Ball Possession', value: '34%'}
// 10
// :
// {type: 'Yellow Cards', value: null}
// 11
// :
// {type: 'Red Cards', value: 1}
// 12
// :
// {type: 'Goalkeeper Saves', value: 5}
// 13
// :
// {type: 'Total passes', value: 365}
// 14
// :
// {type: 'Passes accurate', value: 290}
// 15
// :
// {type: 'Passes %', value: '79%'}
// 16
// :
// {type: 'expected_goals', value: '0.33'}
