import { Navigation } from '@/components';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const noto_sans = Noto_Sans({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.className}`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="flex min-h-screen flex-col items-start justify-between p-6 pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}
