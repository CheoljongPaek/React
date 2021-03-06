const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
}