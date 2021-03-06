module.exports = {
  title: 'web-larning',
  tagline: 'The tagline of my site',
  url: 'https://nagatani.github.io/',
  baseUrl: '/web-learning-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Nagatani',
  projectName: 'web-learning-doc',
  themeConfig: {
    navbar: {
      title: 'web-larning',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
      },
    ],
  ],
};
