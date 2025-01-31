export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sunrise Hotel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    script: [
      {
        src: 'https://code.jivosite.com/widget/uLYP8Ws96H'
      }
    ],
  },
  target: 'static',
  ssr: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/rate.js', ssr: false },
    { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/backToTop.js', ssr: false },
    { src: '~/plugins/datepicker.js', ssr: false },
    { src: '~/plugins/loader.js', ssr: false },
    { src: "~/plugins/toast.js", ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/
    [
      '@nuxtjs/axios',
      { baseURL: "http://188.225.83.193/api/" },
    ],

    // '@nuxtjs/auth',

    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    [
      "nuxt-i18n",
      {
        lazy: true,
        locales: [
          { code: "en", iso: "us-US", name: "English", file: "en.js" },
          { code: "ru", iso: "ru-RU", name: "Russian", file: "ru.js" },
          { code: "chn", iso: "chi-CHI", name: "Chinese", file: "chn.js" }
        ],
        defaultLocale: "en",
        rootRedirect: "en",
        strategy: "prefix",
        // seo: false,
        // lazy: true,
        langDir: "lang/",
        // By default, custom routes are extracted from page files using acorn parsing,
        // set this to false to disable this
        parsePages: false,
        detectBrowserLanguage: {
          // cookieKey: 'i18n_cookie',
          useCookie: true,
          fallbackLocale: "en"
        }
      }
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  auth: {
    strategies: {
      local: {
        _scheme: 'local',
        endpoints: {
          login: { url: 'token/', method: 'post', propertyName: 'access' },
          user: { url: 'user/profile/', method: 'get', propertyName: false },
          logout: false
        }
      },
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
