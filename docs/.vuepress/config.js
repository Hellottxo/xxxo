module.exports = {
  title: 'XO-UI',
  description: 'A Vue.js 2.0 UI Toolkit',
  base: '/xo-ui/',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/Hellottxo' },
    ],
    sidebar: [
      {
        title: '开发者指南',
        collapsable: false,
        children: [
          '/Development/install',
          '/Development/quick-start',
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/Components/card',
          '/Components/button',
          '/Components/tree',
          '/Components/input',
          '/Components/select',
          '/Components/time-picker',
          '/Components/date-picker',
          '/Components/table',
        ],
      },
    ],
    lastUpdated: 'Last Updated',
  },
};
