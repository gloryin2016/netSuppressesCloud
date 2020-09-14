var path = require('path')

const ENV = process.env.NODE_ENV
// console.log(ENV)

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //关闭eslint规范
  lintOnSave: false,
  devServer: {
    open: true, //是否自动弹出浏览器页面
    // port: 8089,
    // host: 'localhost',
    https: false,   //是否使用https协议
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }  
  },
  chainWebpack: config => {
    // 参考 https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
    // git: https://github.com/neutrinojs/webpack-chain
    // 通用配置区域

    // 配置别名
    config.resolve.alias
      .set('@src', resolve('src')) // 代码根目录
      .set('@components', resolve('src/components')) // 代码组件目录
      .set('@lib', resolve('src/lib')) // 代码接口层根目录
      .set('@style', resolve('src/style')) // 代码通用样式目录
      .set('@page', resolve('src/pages')) // 业务代码目录
      .set('@assets', resolve('src/assets')) // 资源目录
    // 环境配置区域
    if (ENV == 'development') {
      // 开发环境配置
    } else if (ENV == 'production') {
      // 部署环境配置
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/styles/var.less'),
        resolve('src/styles/mixin.less')
      ]
    }
  }
}
