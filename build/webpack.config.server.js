const path = require('path');

const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base");
const isDev = process.env.NODE_ENV == 'development';
const config  =webpackMerge(webpackBaseConfig, {
    target: 'node',//服务端
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2'
    }
});
if(isDev) {
    config.mode = 'development';
};
module.exports = config;
