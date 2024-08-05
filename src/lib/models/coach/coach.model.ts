import { BirthType } from '../general/birth.model';
import { CoachCareerType } from './coach-career.model';
import { TeamBasicInfoType } from '../general/team-basic-info.model';

export type CoachType = {
  age: number;
  birth: BirthType;
  career: CoachCareerType[];
  firstname: string;
  height: number | null;
  id: number;
  lastname: string;
  name: string;
  nationality: string;
  photo: string;
  team: TeamBasicInfoType;
  weight: number | null;
};
