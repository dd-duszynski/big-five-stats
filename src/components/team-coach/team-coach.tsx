import { CoachType } from '@/lib/models/coach.model';
import { CoachCard } from '../coach-card/coach-card';
import { GradientCard } from '@/components';

type TeamCoachProps = {
  coach: CoachType;
};

export function TeamCoach({ coach }: TeamCoachProps) {
  return (
    <GradientCard
      headerTitle="Coach"
      className="w-full lg:w-[calc(50%-8px)]"
    >
      <div className="flex flex-row flex-wrap gap-2">
        <CoachCard
          key={coach.id}
          coach={coach}
        />
      </div>
    </GradientCard>
  );
}
