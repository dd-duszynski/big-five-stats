import Image from 'next/image';
import { GradientCard } from '@/components';

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
    <GradientCard
      headerTitle="Stadium"
      className="w-full lg:w-[calc(50%-8px)]"
    >
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
    </GradientCard>
  );
}
