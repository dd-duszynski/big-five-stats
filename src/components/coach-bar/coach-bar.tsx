import { CoachType } from '@/lib/models/coach/coach.model';
import { strings } from '@/lib/strings';
import { AsideBar } from '..';

type CoachBarProps = {
  coach: CoachType;
};

export const CoachBar = ({ coach }: CoachBarProps) => {
  const infoSection = [
    {
      title: strings.Role,
      value: strings.Coach,
    },
    {
      title: strings.Birthdate,
      value: `${coach.birth.date} (${coach.age}y)`,
    },
    {
      title: strings.Birthplace,
      value: `${coach.birth.place} - ${coach.birth.country}`,
    },
    {
      title: strings.Nationality,
      value: coach.nationality,
    },
  ];

  return (
    <AsideBar
      fullName={`${coach.firstname} - ${coach.lastname}`}
      infoSection={infoSection}
      name={coach.name}
      photo={coach.photo}
      teamLogo={coach.team.logo}
      teamName={coach.team.name}
    />
  );
};
