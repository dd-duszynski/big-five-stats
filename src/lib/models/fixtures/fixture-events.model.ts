import { FIXTURE_EVENTS } from '@/lib/enums/fixture-events';
import { TeamBasicInfoType } from '../general/team-basic-info.model';

export type FixtureEventsType = {
  time: {
    elapsed: number;
    extra: any;
  };
  team: TeamBasicInfoType;
  player: {
    id: number;
    name: string;
  };
  assist: {
    id?: number;
    name?: string;
  };
  type: FIXTURE_EVENTS;
  detail: string;
  comments?: string;
};
