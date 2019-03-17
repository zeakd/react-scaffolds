const HtmlWebpackPlugin = require('html-webpack-plugin');
const __DEV__ = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.js',
  mode: __DEV__ ? 'development' : 'production',
  module: {
    rules: [
      { 
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}