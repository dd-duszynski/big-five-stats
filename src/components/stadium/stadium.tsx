import { GradientCard } from '@/components';
import { strings } from '@/lib/strings';
import Image from 'next/image';
import { Text } from '../text/text';

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
      headerTitle={strings.Stadium}
      className="w-full md:max-w-[500px]"
      cardContentClassName="flex flex-col items-center justify-center"
    >
      <div>
        <Text variant="p">
          {strings.Name}: {name}
        </Text>
        <Text variant="p">
          {strings.Address}: {address}, {city}
        </Text>
        <Text variant="p">
          {strings.Capacity}: {capacity}
        </Text>
      </div>
      <figure className={`relative mt-2 h-[300px] min-h-[250px] w-[600px]`}>
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
