module.exports = {
    devServer: {
      host: 'localhost',
      port: 8081,
      autoOpenBrowser: true,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxyTable: {
        '/api': {
          target: 'http://localhost:5000',// 要跨域的域名
          changeOrigin: true, // 是否开启跨域
          pathRewrite: {
              '^/api': '/'
          }
        },
      },
    },
  }
  