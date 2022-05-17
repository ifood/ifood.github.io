// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iFood Open Source',
  tagline: 'iFood Open Source',
  url: 'https://ifood.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iFood', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  customFields: {
    githubUrl: 'https://github.com/login/oauth',
    githubClientId: 'bb7a22269b61fc8ca5bd',
    claUrl: 'https://raw.githubusercontent.com/ifood/.github/main/CLA.md',
    ifoodServiceUrl: 'https://infra-api.ifoodcorp.com.br/opensource/app/v1/api'
  },
  themes: [
    '@ifood/docusaurus-theme'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ifood/ifood.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ifood/ifood.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Open Source',
        logo: {
          alt: 'Go to home',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About',
          },
          {
            to: '/projects',
            position: 'left',
            label: 'Projects',
          },
          {
            href: 'https://github.com/ifood',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Map',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Information',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ifood',
              },
              {
                label: 'Blog',
                href: 'https://medium.com/ifood-engineering',
              },
              {
                label: 'Careers',
                href: 'https://carreiras.ifood.com.br/en',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iFood. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
