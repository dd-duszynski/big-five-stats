import { TeamBasicInfoType } from '../general/team-basic-info.model';

export type PlayerTransfersType = {
  transfers: TransfersType[];
};

export type TransfersType = {
  date: string;
  teams: {
    in: TeamBasicInfoType;
    out: TeamBasicInfoType;
  };
  type: string;
};
