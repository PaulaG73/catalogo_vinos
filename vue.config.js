const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Catálogo Vinos',
    },
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
  },
})
