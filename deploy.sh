#!/bin/bash

# 构建项目目录的路径
PROJECT_DIR="${pwd}"

# 启动后端服务
cd "${PROJECT_DIR}/server"
npm install
npm run start

# 前端资源打包
cd "${PROJECT_DIR}/web"
npm install
npm run build

# 启动托管前端资源的服务
cd "${PROJECT_DIR}/web/server"
npm install
npm run start

# 启动 nginx
sudo nginx -s stop
sudo nginx -c "${PROJECT_DIR}/nginx.conf"
sudo service nginx start
