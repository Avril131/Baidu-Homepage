//引入http模块
//require:需要
let http = require('http')
//创建HTTP服务器

let server = http.createServer(function(req,res){
	//设置响应头
	res.writeHead(200,{
		'content-type':'text/plain'
	})
	//设置响应数据
	res.end('Hello Node.js')
})
//设置服务器端口
server.listen(3000,function(){
	console.log('服务器已经开启,端口是3000')
})
