/**
 * @description
 * @author 康慧怡
 * @Date 2022/10/06
 */
const fs = require('fs');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');

const dotenvFiles = ['.env', '.env.development']
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile
    })
  }
})

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.ts', '.js', '.less', '.vue']
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
    static: path.join(__dirname, './dist'),
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
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, './src'),
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
      'process.env': JSON.stringify(process.env)
    })
  ]
}