import { CoachType } from '@/lib/models/coach.model';
import { CoachCard } from '../coach-card/coach-card';
import GradientCard from '../gradient-card/gradient-card';

type TeamCoachProps = {
  coach: CoachType;
};

export function TeamCoach({ coach }: TeamCoachProps) {
  return (
    <GradientCard
      headerTitle="Coach"
      className="mb-2 w-[640px]"
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
