/**
 * @description
 * @author 康慧怡
 * @Date 2022/10/06
 */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    resolve: {
      extensions: ['.ts', '.js', '.less']
    },
    optimization: {
        nodeEnv: false
    },
    // 入口文件
    entry: path.join(__dirname, './src/index.js'),
    // 出口文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png|jpg|gif|svg$/,
                use: {
                    loader: 'url-loader',
                //    少于多少转base64
                    options: {
                        limit: 7 * 1024,
                        outputPath: 'image'
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            },
            // 兼容
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.ts$/,
                exclude: /node_modules/,
                loader: 'tslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                // include: /\.(ts | tsx)$/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    // 更准确清楚错误发生的位置
    devtool: 'inline-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: process.env.NODE_ENV
                // ...env
            }
        })
    ]
}