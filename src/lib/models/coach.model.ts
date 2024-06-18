import { BirthType } from './birth.model';
import { CareerType } from './career.model';
import { TeamBasicInfoType } from './team-basic-info.model';

export type CoachType = {
  age: number;
  birth: BirthType;
  career: CareerType[];
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
