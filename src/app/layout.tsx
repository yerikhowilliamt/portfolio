import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './Providers/ThemeProvider';
import Layout from './(pages)/Layout';
import Template from './template';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yerikho William Tasilima',
  description: 'Yerikho william tasilima portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster
          position='top-center'
          richColors
        />
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Template>
            <Layout>{children}</Layout>
          </Template>
        </ThemeProvider>
      </body>
    </html>
  );
}
