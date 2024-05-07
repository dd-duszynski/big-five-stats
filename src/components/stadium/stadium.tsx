import Image from 'next/image';
import { Text } from '@/components';
import { Card, CardContent, CardHeader } from '../ui/card';

type StadiumProps = {
  name: string;
  address: string;
  city: string;
  capacity: number;
  image: string;
};

export function Stadium({
  name,
  address,
  capacity,
  city,
  image,
}: StadiumProps) {
  return (
    <Card className="max-w-[640px]">
      <CardHeader className="flex items-center justify-center gap-3 rounded-t-md bg-gradient-to-r from-indigo-500 to-emerald-500">
        <Text
          variant="h2"
          className="text-center text-white"
        >
          Stadium
        </Text>
      </CardHeader>

      <CardContent>
        <div>
          <p>Name: {name} </p>
          <p>
            Address: {address}, {city}{' '}
          </p>
          <p>Capacity: {capacity} </p>
        </div>
        <figure className={`relative mt-2 h-[300px] w-[600px]`}>
          <Image
            alt={name || ''}
            className={`object-contain`}
            fill
            src={image}
          />
        </figure>
      </CardContent>
    </Card>
  );
}
