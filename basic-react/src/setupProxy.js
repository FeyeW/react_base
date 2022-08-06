const proxy = request('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', {//遇见/api前缀的请求，就会触发该代理配置
            target: 'http://localhost:5001',//请求转发给谁
            changeOrigin: true,//控制服务器收到的请求头中Host的值
            pathRewrite: { '/api': '' }//请求重写路径
        }),
        proxy('/api2', {
            target: 'http://localhost:5002',
            changeOrigin: true,
            pathRewrite: { '/api': '' }
        }),
    )
}