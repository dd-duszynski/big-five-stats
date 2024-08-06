import { TeamType } from './team.model copy';
import { TeamVenueType } from './team-venue.model';

export type TeamResponseType = {
  team: TeamType;
  venue: TeamVenueType;
};
