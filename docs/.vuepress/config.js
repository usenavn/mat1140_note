module.exports = {
    title: ' ',
    description: 'gangsters paradise',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],
    themeConfig: {
      logo: '/logo.png',
      nav: [
        { text: '🏠 Home', link: '/' },
        { text: '📚 MAT1140', link: '/mat1140/' },
        { text: '🎈 pipro', link: 'https://pipro.no' },
      ],
      sidebar: 'auto',
      searchMaxSuggestions: 10,
      lastUpdated: 'Last Updated',
      smoothScroll: true,
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/search', 
        'vuepress-plugin-mathjax',
        {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  }