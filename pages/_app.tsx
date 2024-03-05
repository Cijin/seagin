import '../styles/global.css'

import type { AppProps } from 'next/app';
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { generateFeeds } from '../utils/feed'

export const getStaticProps = async () => {
  if (process.env?.VERCEL) {
    await generateFeeds();
  }
};

// ...

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script defer data-domain="seagin.me" src="https://www.ioignition.com/js/script.js" />
      <Script defer data-domain="seagin.me" src="https://www.ioignition.com/js/performance.js" />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
