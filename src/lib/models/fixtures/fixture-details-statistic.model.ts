import { TeamBasicInfoType } from '../general/team-basic-info.model';

export type FixtureDetailsStatisticType = {
  team: TeamBasicInfoType;
  statistics: {
    type: string;
    value: any;
  }[];
};
