// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ['nuxt-time', '@nuxtjs/google-adsense', '@nuxt/content', 'nuxt-icon', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts',],

  googleAdsense: {
    id: 'ca-pub-4653226074613662',
  },

  // publicRuntimeConfig: {
  //   googleAdsense: {
  //     id:  process.env.GOOGLE_ADSENSE_ID,
  //     test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',
  //   },
  // },

  content: {
    // ... options
    experimental: {
      search: true,
    },
  },

  googleFonts: {
    families: {
      Montserrat: true,
      'Croissant One': true,
    }
  },

  purgeCSS: {
    whitelist: ['dark-mode'],
  },

  colorMode: {
    classSuffix: ''
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/fpicon.png' }]
    }
  },
})