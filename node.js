let http = require('http')
//创建HTTP服务器
let app = http.createServer();
//引入url模版
let url = require('url')

//绑定监听事件
app.on("request",(req,res)=>{
	let method = req.method;
	console.log(method);
	//格式化请求链接
	let newUrl = url.parse(req.url);
	//获取pathname
	let path = url.parse(req.url).pathname
	if(method=="GET")
    {
		res.writeHead(200, {
            "content-Type": "text/html;charset=utf8"
        })
		console.log(newUrl)
		console.log(path)
		if (path == "/public/index" || path == "/") {
            console.log("响应首页")
        }
		else {
			res.writeHead(404, {
                "content-Type": "text/html;charset=utf8"
            })
			res.end("<h1>你要找的页面走丢了</h1>")
		}
    }
    else if(method=="POST"){

    }
});

//设置服务器端口
app.listen(3000,function(){
	console.log('服务器已经开启,端口是3000')
})
