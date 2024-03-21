import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Five - Top form',
  description: 'Football stats for the big five leagues.',
};

export default async function TopFormPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <p>TopFormPage</p>
    </main>
  );
}
