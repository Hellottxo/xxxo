module.exports = {
  title: 'XO-UI',
  description: 'A Vue.js 2.0 UI Toolkit',
  base: '/xo-ui/',
  head: [
    ['link', {rel: 'icon', href: '/logo.svg'}]
  ],
  port: 8686,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Github', link: 'https://github.com/Hellottxo' },
      { text: 'Blog', link: 'http://xo.silenttt.top/xo-blog/' },
    ],
    sidebar: [
      {
        title: '开发者指南',
        collapsable: false,
        children: [
          '/development/install',
          '/development/quick-start',
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/card',
          '/components/button',
          '/components/message',
          '/components/rate',
          '/components/tree',
          '/components/input',
          '/components/table',
        ],
      },
    ],
    lastUpdated: 'Last Updated',
  },
};
