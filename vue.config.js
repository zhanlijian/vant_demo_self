const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem') // 将单位转化为rem
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5, // vant官方使用的是37.5
            propList: ['*'],
            selectorBlackList: ['van'] // 忽略转换正则匹配项
          })
        ]
      }
    }
  },
  devServer: {
    hot: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  }
}
