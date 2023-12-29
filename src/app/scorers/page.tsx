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

async function getData<T>(key: T, host: T) {
  const myHeaders = new Headers();
  if (typeof key === 'string') {
    myHeaders.append('x-apisports-key', key);
  }

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const res = await fetch(
    'https://v3.football.api-sports.io/players/topscorers?league=135&season=2022',
    requestOptions
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const metadata: Metadata = {
  title: 'Big Five',
  description: 'Football stats for the big five leagues.',
};

export default async function Home() {
  const key = process.env.X_APISPORTS_KEY;
  const host = process.env.X_RAPIDAPI_HOST;
  const data = await getData(key, host);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="asdasd">
        {data.response.map((i: any) => (
          <Card
            key={i.player.id}
            className="bg mx-3 my-3 flex flex-row items-center rounded-2xl bg-gradient-to-r from-purple-950 to-purple-900 p-2"
          >
            <CardContent className="flex">
              <PlayerImage
                photo={i.player.photo}
                name={i.player.name}
              />
              <PlayerBasicInfoPanel
                player={i.player}
                statistics={i.statistics}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href="/">Home</Link>
    </main>
  );
}
