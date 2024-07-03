import { Navigation, Providers } from '@/components';
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
        className={`${noto_sans.className} h-full w-full overflow-hidden`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <Navigation />
          <main className="h-[calc(100vh-3rem)] overflow-y-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
