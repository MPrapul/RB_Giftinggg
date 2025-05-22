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
      <head>
        <title>Layout.tsx - SEO Optimized Content for Better Rankings</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      
  <meta name="description" content="Discover Layout.tsx - Optimized for search engines with comprehensive information and solutions. Learn about layout tsx, components, layout tsx and more.">

  <meta name="keywords" content="layout tsx, components, layout tsx, seo optimization, search engine visibility, website improvement">

  <link rel="canonical" href="https://example.com/components/Layout.tsx">
</head>
      
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