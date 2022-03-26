const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	// proxy第一个参数为要代理的路由
    app.use(createProxyMiddleware("/api1", {
        target: "http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html ",
        pathRewrite: {'^/api1': ''},
        changeOrigin: true,
    })),

    app.use(createProxyMiddleware("/data", {
        target: "https://sp0.baidu.com", //配置你要请求的服务器地址，代理后的请求网址
        pathRewrite: {'^/data': ''}, //路径重写
        changeOrigin: true, // 是否改变请求头
    })),
    app.use(createProxyMiddleware("/api2", {
        target: "https://api.geekzwzs.cn/resou", 
        pathRewrite: {'^/api2': ''}, 
        changeOrigin: true, 
    })),
    app.use(createProxyMiddleware("/api3", {
        target: "http://127.0.0.1:3000", 
        pathRewrite: {'^/api3': ''}, 
        changeOrigin: true, 
    }))
};
