const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem') // 将单位转化为rem
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
  }
}
