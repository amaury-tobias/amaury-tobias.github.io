const path = require('path')
const articles = require('./content/articles.json')

const dynamicRoutes = generateDynamicRoutes(articles)

module.exports = {
  server: {
    port: 3001
  },
  generate: {
    routes: dynamicRoutes
  },
  mode: 'universal',
  router: {
    linkActiveClass: 'is-active'
  },
  head: {
    htmlAttrs: { lang: 'es', class: 'has-navbar-fixed-bottom' },
    title: 'AMAURY.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: {
    color: '#000000',
    height: '3px'
  },
  css: [
    '~/assets/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue2-animate/dist/vue2-animate.min.css'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/axios.js',
    '~/plugins/lazyload.js',
    '~/plugins/lazyImage.js',
    '~/plugins/inlineCode.js',
    '~/plugins/vueGithubActivity.js'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],
  axios: {},
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content/articles'),
        options: {
          vue: {
            root: 'dynamicContent'
          }
        }
      })
    }
  }
}

function generateDynamicRoutes(articles) {
  return ['/404'].concat(articles.map(article => `/blog/${article.slug}`))
}
