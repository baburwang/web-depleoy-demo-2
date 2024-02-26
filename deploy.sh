#!/bin/bash

# 构建项目目录的路径
PROJECT_DIR="$(pwd)"

# 启动后端服务
cd "${PROJECT_DIR}/server"
sudo npm install
sudo npm run start

# 前端资源打包
cd "${PROJECT_DIR}/web"
sudo npm install
sudo npm run build

# 启动托管前端资源的服务
cd "${PROJECT_DIR}/web/server"
sudo npm install
sudo npm run start

# 启动 nginx
sudo nginx -s stop
sudo nginx -c "${PROJECT_DIR}/nginx.conf"
sudo service nginx start
