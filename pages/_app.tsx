import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // Set background color for main content
  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(3, 3, 60)';
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
} 