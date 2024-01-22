import Image from 'next/image';
import Footer from './components/footer'
import logoSvg from "./public/seagin.svg";

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Seagin" />
      <meta property="og:description" content="Striving for deep understanding" />
      <script data-domain="seagin.me" src="https://ioignition.com/js/script.js" />

    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: 'Seagin | %s',
      defaultTitle: 'Seagin',
      description: "Join me on Seagin as I embark on building unique projects like a Golang interpreter and an analytics app. Discover insights and stories from an indie hacker's journey of building in public.",
      canonical: "https://www.seagin.me/",
      openGraph: {
        url: 'https://www.seagin.me/',
        title: 'Seagin - Building Golang Projects in Public',
        description: "Join me on Seagin as I embark on building unique projects like a Golang interpreter and an analytics app. Discover insights and stories from an indie hacker's journey of building in public.",
        siteName: 'Seagin',
      },
      robotsProps: {
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      },
      twitter: {
        handle: '@cijincherian',
        site: '@cijincherian',
        cardType: 'summary_large_image',
      },
      additionalMetaTags: [{
        property: 'dc:creator',
        content: 'seagin'
      }, {
        name: 'application-name',
        content: 'Seagin'
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }],
      additionalLinkTags: [
        {
          rel: 'icon',
          href: 'https://www.seagin.me/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: 'https://www.seagin.me/touch-icon-ipad.jpg',
          sizes: '76x76'
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        },
      ],
    }
  },
  logo: (
    <div>
      <Image
        width={150}
        height={150}
        priority
        src={logoSvg}
      />
    </div>
  ),
  project: {
    link: 'https://github.com/cijin/seagin'
  },
  footer: { component: Footer },
  feedback: {
    content: null
  },
  toc: {
    backToTop: true
  },
  editLink: {
    component: null
  },
  search: {
    placeholder: 'Search'
  },
  project: {
    link: 'https://github.com/cijin'
  },
  chat: {
    link: 'https://twitter.com/cijincherian',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    )
  }
}
