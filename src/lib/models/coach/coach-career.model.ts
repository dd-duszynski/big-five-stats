import { TeamBasicInfoType } from '../general/team-basic-info.model';

export type CoachCareerType = {
  end: string | null;
  start: string;
  team: TeamBasicInfoType;
};
