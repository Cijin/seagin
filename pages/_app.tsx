import '../styles/global.css'

import type { AppProps } from 'next/app';
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script data-domain="seagin.me" src="https://ioignition.com/js/script.js" />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
