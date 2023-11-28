// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ['@nuxt/content', 'nuxt-icon', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts',],

  content: {
    // ... options
    experimental: {
      search: true
    }
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
})