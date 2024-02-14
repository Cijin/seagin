import '../styles/global.css'

import type { AppProps } from 'next/app';
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script defer data-domain="seagin.me" src="http://localhost:8080/js/script.js" />
      <Script defer data-domain="seagin.me" src="http://localhost:8080/js/performance.js" />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
