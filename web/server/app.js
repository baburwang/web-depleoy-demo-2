const path = require('path');
const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 静态资源托管
app.use(express.static(path.resolve(__dirname, 'dist')));

// 接口代理
// app.use('/api', createProxyMiddleware({
//   target: 'http://43.139.228.197:8080',
//   pathRewrite: {
//     '^/api': '' // 重写路径，去除 /api 前缀
//   },
//   changeOrigin: true
// }));

app.listen(3000, () => {
  console.log(`Server is start, port is 3000`);
});
