// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GUETSEC',
  tagline: 'Join us. To be what you want to be.',
  url: 'http://guetsec.cn/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
        items: [
          {
            to: 'members',
            label: '团队成员',
            position: 'right'
          },
          {
            to: 'glory',
            label: '荣誉',
            position: 'right'
          },
          // { to: '/about', label: '关于', position: 'right' },
          {
            to: 'docs/intro',
            activeBasePath: 'docs',
            position: 'right',
            label: '文档',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links:
          [
            // {
            //   title: '更多',
            //   items: [
            //     {
            //       label: 'GUETSEC-CTF靶场',
            //       to: 'http://119.91.235.167:8000/',
            //     },
            //   ],
            // },
            {
              title: '友情链接',
              items: [{
                label: '七星瓢虫工作坊',
                to: 'https://guet-ladybug.cn/',
              },
              ],
            },
            {
              title: 'CTF训练平台',
              items: [{
                label: 'CTF-wiki',
                to: 'https://ctf-wiki.org/',
              },
              {
                label: '攻防世界',
                to: 'https://adworld.xctf.org.cn/',
              },
              {
                label: 'BUU',
                to: 'https://buuoj.cn/',
              },
              {
                label: 'Bugku',
                to: 'https://ctf.bugku.com/',
              },
              {
                label: 'CTFshow',
                to: 'https://ctf.show/',
              },
              ],
            },
            {
              title: 'CTF-Tools',
              items: [{
                label: 'CyberChef-解密工具',
                to: 'https://gchq.github.io/CyberChef/',
              },
              {
                label: 'CTF-在线工具',
                to: 'http://www.hiencode.com/',
              },
              {
                label: '千千秀字',
                to: 'https://www.qqxiuzi.cn/',
              }
            ],
            }
          ],
        copyright: `Copyright © ${new Date().getFullYear()} GUETSEC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
