'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface IPlayerBasicInfo {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: any;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

interface IPlayerBasicInfoPanelProps {
  player: IPlayerBasicInfo;
  statistics: any;
}

export const PlayerBasicInfoPanel = ({
  player,
  statistics,
}: IPlayerBasicInfoPanelProps) => {
  useEffect(() => {}, [statistics]);
  return (
    <div className="ml-2 flex flex-row text-white">
      <div className="mr-4 flex flex-col">
        <p>{player.name}</p>
        <p>Age: {player.age}</p>
        <p>{player.nationality}</p>
        <p>{player.height}</p>
        <p>{player.weight}</p>
        <p>{player.injured && 'Injured'}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="mr-1">{statistics[0].team.name}</p>
          <Image
            src={statistics[0].team.logo}
            alt={statistics[0].team.name}
            width={24}
            height={20}
            className="rounded-sm bg-white"
          />
        </div>
        <p className="mr-1">{`G: ${statistics[0].goals.total} | A: ${statistics[0].goals.assists}`}</p>
        {/* <div className="flex flex-row">
          <p className="mr-1">{statistics[0].league.name}</p>
          <Image
            src={statistics[0].league.logo}
            alt={statistics[0].league.name}
            width={24}
            height={20}
            className="rounded-sm bg-white"
          />
        </div> */}
      </div>
    </div>
  );
};
