var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.mjs']
  },
  module: {
    rules: [
      {
        test: /(\.m?js|\.jsx?)$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
