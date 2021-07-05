const webpack = require("webpack");
// const { devMiddleware } = require('koa-webpack-middleware')
const koaWebpack = require('koa-webpack');

const config = require('./webpack.config')

const Koa = require('koa');
const app = new Koa();

// 源码目录
const paths = {
  context: process.cwd()
}

// 修改 publicPath

config.context = paths.context

const compilers =  webpack(config)

const start = async () => {
  

  const clientMiddleware = await koaWebpack({
    hotClient: {
      hmr: true,
      logLevel: 'info'
    },
    devMiddleware: {
      publicPath: '/dist',
      writeToDisk: true
    },
    config,
  })


  app.use(clientMiddleware)
  // 启动 nodejs 服务
  app.listen(3000, () => console.log("server app listening on port 3000!"));

}

start()

