// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // hiprint: __dirname + '/plugins/js/hiprint.bundle.js',
    index: __dirname + '/index.js'
  },
  mode: 'none',
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },
  // devtool: 'eval-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    port: 8081
  },
  module: {
    rules: [{
      //   test: /(\.jsx|\.js)$/,
      //   use: {
      //     loader: 'babel-loader',
      //   },
      //   exclude: /node_modules/
      // },
      // {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: __dirname + "/example/index.html" //new 一个这个插件的实例，并传入相关的参数
  //   }),
  //   new webpack.HotModuleReplacementPlugin() //热加载插件
  // ]
}
