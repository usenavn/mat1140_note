module.exports = {
    title: 'MAT1140',
    description: 'gangsters paradise',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],
    themeConfig: {
      logo: '/logo.png',
      nav: [
        { text: '🏠 Home', link: 'https://lianjie.fun' },
        { text: '📚 MAT1140', link: '/mat1140/' },
      ],
      sidebar: [
        {
          title: 'MAT1140',   // required
          path: '/mat1140/',      // optional, which should be a absolute path.
          collapsable: true, // optional, defaults to true
          children: [
            '/mat1140/',
          ],
        },
        {
          title: 'Notater',
          path: '/notater/notat1/',
          collapsable: true,
          children: [
            '/notater/notat1/',
            '/notater/notat2/',
            '/notater/notat3/',
            '/notater/notat4/',
            '/notater/notat5/',
            '/notater/notat6/',
            '/notater/notat7/',
          ]
        },
        {
          title: 'Good to know',
          path: '/ressurs/set-theory-axioms/',
          collapsable: true,
          children: [
            '/ressurs/set-theory-axioms/',
            '/ressurs/functions/',
          ]
        }
      ],
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