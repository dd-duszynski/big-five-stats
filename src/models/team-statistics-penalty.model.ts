export type TeamStatisticsPenaltyType = {
  missed: {
    total: number;
    percentage: string;
  };
  scored: {
    total: number;
    percentage: string;
  };
  total: number;
};
