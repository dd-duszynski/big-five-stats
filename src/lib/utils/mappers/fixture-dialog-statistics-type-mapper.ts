export const fixtureDialogStatisticsTypeMapper = (typeText: string) => {
  switch (typeText) {
    case 'expected_goals':
      return 'Expected Goals';
    default:
      return typeText;
  }
};

// Available options: ----------------------------------
// "Shots on Goal"
// "Shots off Goal"
// "Total Shots"
// "Blocked Shots"
// "Shots insidebox"
// "Shots outsidebox"
// "Fouls"
// "Corner Kicks"
// "Offsides"
// "Ball Possession"
// "Yellow Cards"
// "Red Cards"
// "Goalkeeper Saves"
// "Total passes"
// "Passes accurate"
// "Passes %"
// "expected_goals"
