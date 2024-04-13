import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Five - Statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function StatisticsPage() {
  return (
    <div>
      <p>StatisticsPage</p>
    </div>
  );
}
