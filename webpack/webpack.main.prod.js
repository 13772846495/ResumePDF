const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const prodConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
  devtool: 'inline-source-map',
  mode: 'production',
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);