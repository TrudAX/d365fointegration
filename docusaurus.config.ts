import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'External Integration Module for Dynamics 365 ERP',
  tagline: 'Build reliable and easy to support Dynamics 365 ERP integrations',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  // GitHub Pages: https://trudax.github.io/d365fointegration
  // (if a custom domain is added later, change baseUrl to '/')
  url: 'https://trudax.github.io',
  baseUrl: '/d365fointegration/',

  organizationName: 'TrudAX',
  projectName: 'd365fointegration',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-74S7CMRN5V',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'External Integration',
      logo: {
        alt: 'External Integration Module logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/why-external-integration/summary',
          position: 'left',
          label: 'Why External Integration',
        },
        {
          to: '/docs/support',
          position: 'left',
          label: 'Support',
        },
        {
          href: 'https://github.com/TrudAX/XppTools',
          position: 'right',
          className: 'header-github-cta',
          label: 'Get it on GitHub',
          'aria-label': 'Get it on GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Getting started', to: '/docs/getting-started'},
            {label: 'Why External Integration', to: '/docs/why-external-integration/summary'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Support & feedback', to: '/docs/support'},
            {
              label: 'Report an issue',
              href: 'https://github.com/TrudAX/XppTools/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub (XppTools)', href: 'https://github.com/TrudAX/XppTools'},
            {label: 'Blog (denistrunin.com)', href: 'https://denistrunin.com'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Denis Trunin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ['csharp', 'powershell', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
