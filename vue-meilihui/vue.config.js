module.exports = {
  
    devServer: {
      // port:'9999',修改端口号
      overlay: {
        warnings: false,
        errors: false
      },
    //   axios 请求解决跨域 案例
    //   proxy: {
    //     '/kerwin': {
    //       target: 'http://m.maoyan.com',
    //       changeOrigin: true,
    //       pathRewrite:{
    //         "^/kerwin":""
    //       }
  
    //     },
        
    //   }
  
    },
    lintOnSave: false // 关了eslint 检查
  }
  