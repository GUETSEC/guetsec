// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GUETSEC',
  tagline: 'Join us. To be what you want to be.',
  url: 'https://guetsec.cn/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/CodeSandbox.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GUETSEC', // Usually your GitHub org/user name.
  projectName: 'GUETSEC-website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
        title: '桂林电子科技大学-信息安全协会',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        // { to: '/about', label: '关于', position: 'right' },
        items: [
          {
            to: 'docs/intro',
            activeBasePath: 'docs',
            position: 'left',
            label: '文档',
          },
          {
            to: 'members',
            label: '团队成员',
            position: 'left'
          },
          {
            to: 'glory',
            label: '荣誉与奖项',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'light',
        links:
          [
            {
              title: '相关站点',
              items: [
                {
                  label: '工具站（仅限校内访问）',
                  href: 'https://alist.guetsec.cn/',
                },
                {
                  label: '靶场（仅限校内访问）',
                  href: 'https://ctf.guetsec.cn/',
                },
                {
                  label: '招新靶场（互联网可访问）',
                  href: 'https://public.guetsec.cn/',
                },
              ],
            },
            {
              title: '友情链接',
              items: [
                {
                  label: '网络与信息技术中心',
                  href: 'https://www.guet.edu.cn/xjzx/',
                },
                {
                  label: '三院信息安全维护小组',
                  href: 'https://www.cnblogs.com/xinanxiaozu/',
                },
              ],
            },
          ],
        copyright: `<p>Copyright © ${new Date().getFullYear()} GUETSEC</p>`,
        //
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
