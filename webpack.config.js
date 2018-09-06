const path = require("path");

const webpack = require("webpack");


const HtmlWebpackPlugin = require('html-webpack-plugin');//引入html-webpack-plugin

const CleanWebpackPlugin = require('clean-webpack-plugin');//引入
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
/*注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。*/
module.exports = {

  entry:{
    index:resolve('./scripts/index.js')
  },
  output: {
    filename: "bundle.js",
    path:  path.join(__dirname, "./dist")//输出文件路径


  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[{
          loader:'url-loader',
          options:{
            outputPath:'images/',//输出到images文件夹
            limit:500  //是把小于500B的文件打成Base64的格式，写入JS
          }
        }]
      },
      {
        test: /\.(js|jsx)$/, //处理以.js结尾的文件
        exclude: path.join(__dirname, 'node_modules'), //处理除了nodde_modules里的js文件
        loader: 'babel-loader', //用babel-loader处理

      },


    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',//输出文件名
      template: './index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
    }),
   /* new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录*/
    new webpack.HotModuleReplacementPlugin()


  ],
  devServer: {
    //inline:true,
    //hot:true,
    //contentBase:path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录

   // port:8080,
    compress: true,//开发服务器是否启动gzip等压缩

    inline: true//实时刷新

  },
  /*optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {  // 抽离自己写的公代码
          chunks: "initial",
          name: "common", // 打包后的文件名，任意命名
          minChunks: 2,//最小引用2次
          minSize: 0 // 只要超出0字节就生成一个新包
        },
        vendor: {   // 抽离第三方插件
          test: /node_modules/,   // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        },
      }
    }
  },*/

}
