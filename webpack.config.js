var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    devtool: 'eval-source-map',
    output: {
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [{
            test: /\.(tsx|ts)?$/,
            exclude: /(node_modules|public\/)/,
            use: ['awesome-typescript-loader']
        }]
    },
    devServer: {
        contentBase: "./mock-api",
        port: 4200,
        // enable HMR
        //hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                js: [ "bundle.js"]
            }
        })
    ]
}