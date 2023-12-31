import '@/styles/global.css';
import {ThemeProvider} from '@/components/providers/theme-provider';
import {cn} from '@/lib/utils';
import {Nunito_Sans as FontSans} from 'next/font/google';
import {ThemeWrapper} from '@/components/providers/theme-wrapper';
import {Analytics} from '@vercel/analytics/react';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <ThemeWrapper>{children}</ThemeWrapper>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
