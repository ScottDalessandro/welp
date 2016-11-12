const webpack = require('webpack');
const fs = require('fs');
const path = require("path");
const {join,resolve} = path;
const getConfig = require('hjs-webpack');

// path variables
const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'node_modules');
const dest = join(root, 'dist');

console.log(root, 'root path using resolve');
console.log(__dirname, '__dirname');
// config using hjs-webpack
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';


var config = getConfig({
  isDev: isDev,
  in: join(__dirname, 'src/app.js'),
  out: join(__dirname, 'dist'),
  clearBeforeBuild: true
});

config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
]);

module.exports = config;


