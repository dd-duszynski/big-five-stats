import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Five - Top form',
  description: 'Football stats for the big five leagues.',
};

export default async function TopFormPage() {
  return (
    <div>
      <p>TopFormPage</p>
    </div>
  );
}
