const Koa = require('koa');
const serve = require('koa-static');
const cors = require('koa2-cors');
const path = require('path');

const app = new Koa();

// 使用cors中间件
app.use(cors({
  origin: function (ctx) { // 设置允许的域，或用正则等方式来指定
    if (ctx.url === '/api/test') {
      return 'http://example.com';
    }
    return '*'; // 允许所有域
  },
  maxAge: 5, // 表示在5秒内不需要再发送预检请求
  credentials: true, // 允许cookies
  allowMethods: ['GET', 'POST', 'PUT'], // 允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], // 允许的HTTP请求头
}));

// 设置静态文件目录
const staticPath = path.join(__dirname, 'public');

// 使用koa-static中间件提供静态文件服务
app.use(serve(staticPath));

const port = 1234; // 服务端口

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



