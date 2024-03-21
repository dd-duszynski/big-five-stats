import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Five - Statistics',
  description: 'Football stats for the big five leagues.',
};

export default async function StatisticsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <p>StatisticsPage</p>
    </main>
  );
}
