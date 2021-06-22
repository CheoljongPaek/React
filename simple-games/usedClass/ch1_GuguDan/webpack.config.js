const path = require('path');
// const webpack = require('webpack');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development',
  devtool: 'eval', // production: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'], // browserslist
            },
            debug: true,
          }],
          ['@babel/preset-react', {

          }]
        ],
        plugins: [],
      },
    }],
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false,
    //   options: {
    //     context: __dirname
    //   }
    // }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
}