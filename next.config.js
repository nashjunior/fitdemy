const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
 { reactStrictMode: !isProd},

[withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  }
})]])

