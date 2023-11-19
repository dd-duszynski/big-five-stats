import { PlayerBasicInfoPanel, PlayerImage } from '@/components';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';
import { fetchAPISports } from '@/lib/utils';
import Image from 'next/image';
import { LEAGUES_ID } from '@/enums/league';
import { APIResponse } from '@/models/league.model';

async function getData() {
  const leaguesId = Object.values(LEAGUES_ID).filter(
    (league) => typeof league === 'number'
  );
  const leaguesPromises = leaguesId.map((league) => {
    return fetchAPISports<APIResponse>(
      `standings?league=${league}&season=2023`
    );
  });

  const results = await Promise.all(leaguesPromises);
  return results;
}

export const metadata: Metadata = {
  title: 'Big Five',
  description: 'Football stats for the big five leagues.',
};

export default async function Home() {
  const data = await getData();
  const eng = data[0]?.response[0];
  const esp = data[1]?.response[0];
  const fra = data[2]?.response[0];
  const ger = data[3]?.response[0];
  const ita = data[4]?.response[0];
  const por = data[5]?.response[0];
  const pol = data[6]?.response[0];

  console.log('data: ', data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>
        {data.map((league) => {
          if (!league) return null;
          return (
            <div key={league.response[0].league.id}>
              <Image
                src={league.response[0].league.logo}
                alt="league logo"
                width={50}
                height={50}
              />
              <div>
                {league.response[0].league.standings[0].map((team) => {
                  return (
                    <div
                      key={team.team.id}
                      className="flex gap-1"
                    >
                      <Image
                        src={team.team.logo}
                        alt="team logo"
                        width={20}
                        height={20}
                      />
                      <p>{team.rank}</p>
                      <p>{team.team.name}</p>
                      <p>{team.points}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/settings">Settings</Link>
    </main>
  );
}
