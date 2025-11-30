// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- A. GENERAL METADATA ---
  title: 'My SDD Homework', // Project ka naam change kiya
  tagline: 'Spec-Driven Documentation for Docusaurus', // Tagline change kiya
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // --- B. GITHUB PAGES DEPLOYMENT CONFIG ---
  // GitHub Pages ke liye URL set kiya
  url: 'https://alishbanasir.github.io', 
  
  // Repository ka naam set kiya (GitHub Pages ke liye zaroori)
  baseUrl: '/myfirst-Docusaurus-pratice-project/', 

  // GitHub pages deployment config.
  organizationName: 'alishbanasir', // Aapka GitHub Username
  projectName: 'myfirst-Docusaurus-pratice-project', // Aapki Repository ka naam

  onBrokenLinks: 'throw',

  // Internationalization settings (unchanged)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Docs edit link ko apne repo se badla
          editUrl:
            'https://github.com/alishbanasir/myfirst-Docusaurus-pratice-project/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Blog edit link ko apne repo se badla
          editUrl:
            'https://github.com/alishbanasir/myfirst-Docusaurus-pratice-project/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'SDD Homework Docs', // Nav bar ka title change kiya
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            // Nav bar ka GitHub link change kiya
            href: 'https://github.com/alishbanasir/myfirst-Docusaurus-pratice-project',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                // Footer ka GitHub link change kiya
                label: 'GitHub',
                href: 'https://github.com/alishbanasir/myfirst-Docusaurus-pratice-project',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My SDD Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;