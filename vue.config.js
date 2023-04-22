const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 避免Eslint报错
  lintOnSave: false
})
