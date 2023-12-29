import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components';

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
        className={noto_sans.className}
        suppressHydrationWarning={true}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
