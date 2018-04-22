'use strict'; // eslint-disable-line

const webpack = require('webpack');
const mode = require('yargs').argv.mode;
const pkg = require('./package.json');

const libraryName = 'createReducer';

const banner = `${pkg.name}
${pkg.description}\n
@version v${pkg.version}
@author ${pkg.author}
@homepage ${pkg.homepage}
@repository ${pkg.repository.url}`;

const plugins = [
  new webpack.BannerPlugin(banner)
];

module.exports = {
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: mode === 'development' ? `${libraryName}.js` : `${libraryName}.min.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: plugins
};
