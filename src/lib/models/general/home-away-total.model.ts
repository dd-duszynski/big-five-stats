export type HomeAwayTotalType<T extends number | string> = {
  home: T;
  away: T;
  total: T;
};
