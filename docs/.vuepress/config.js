module.exports = {
  title: 'XO-UI',
  description: 'A Vue.js 2.0 UI Toolkit',
  base: '/xo-ui/',
  head: [
    ['link', {rel: 'icon', href: '/public/logo.png'}]
  ],
  port: 8686,
  themeConfig: {
    logo: '/public/logo.png',
    nav: [
      { text: 'Github', link: 'https://github.com/Hellottxo' },
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
          '/components/card',
          '/components/button',
          '/components/tree',
          '/components/input',
          '/components/table',
        ],
      },
    ],
    lastUpdated: 'Last Updated',
  },
};
