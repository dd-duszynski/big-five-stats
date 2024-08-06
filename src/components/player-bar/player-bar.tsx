import { PlayerStatisticType } from '@/lib/models/player/player-statistic.model';
import { PlayerType } from '@/lib/models/player/player.model';
import { strings } from '@/lib/strings';
import { AsideBar } from '..';

type PlayerBarProps = {
  player: PlayerType;
  statistics: PlayerStatisticType[];
};

export const PlayerBar = ({ player, statistics }: PlayerBarProps) => {
  const infoSection = [
    {
      title: strings.Position,
      value: statistics[0].games.position,
    },
    {
      title: `${strings.Height} / ${strings.Weight}`,
      value: `${player.height} / ${player.weight}`,
    },
    {
      title: strings.Birthdate,
      value: `${player.birth.date} (${player.age}y)`,
    },
    {
      title: strings.Birthplace,
      value: `${player.birth.place} - ${player.birth.country}`,
    },
    {
      title: strings.Nationality,
      value: player.nationality,
    },
  ];

  return (
    <AsideBar
      fullName={`${player.firstname} - ${player.lastname}`}
      infoSection={infoSection}
      name={player.name}
      photo={player.photo}
      teamLogo={statistics[0].team.logo}
      teamName={statistics[0].team.name}
    />
  );
};
