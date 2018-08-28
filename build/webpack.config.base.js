const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
//process 可以读取换变量

const config = {
  mode: process.env.NODE_ENV || 'production', //development || production
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: [{
          loader: 'url-loader', //可以转成base64
          options: {
            limit: 1024, //这里设置字节数最大值小于1024就会转成base64,
            name: 'resources/[path][name].[hash:8].[ext]' //定义图片名称
          }
        }]
      }
    ]
  }
}
module.exports = config