import { ReactNode } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'RB Gifting Solutions',
  description = 'A Complete Gifting & Event Solution for all your corporate gifting needs',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex min-h-screen bg-background text-white">
        <Sidebar />
        
        <div className="flex flex-col flex-1 pl-0 lg:pl-64">
          <main className="flex-1 min-h-screen">
            {children}
          </main>
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
} 