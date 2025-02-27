import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@bb-styles/global.css';
import { Providers } from '@bb-shared/providers/Providers';
import { lightThemeClass } from '@bb-styles/theme.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'BarBar',
  description: 'A social platform for sharing restaurant experiences with friends'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lightThemeClass}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
