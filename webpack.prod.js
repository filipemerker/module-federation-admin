const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: 'https://filipemerker.github.io/module-federation-admin/',
    path: path.join(__dirname, 'docs')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.production.html",
    }),
  ],
})