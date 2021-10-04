const path = require("path");

module.exports = {  devServer: {
    disableHostCheck: false
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      }
    }
  }
}