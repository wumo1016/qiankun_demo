# qiankun_demo
微前端框架qiankun使用示例

# 针对父子项目在同一个端口下的nginx配置

```
# qiankun_demo 项目
server {
  listen 8003;
  server_name localhost;

  location / {
    root html/qiankun;
    index  index.html;
    try_files $uri $uri/ /index.html;
  }
	location /qiankun_vue1 {
    alias html/qiankun_vue1;
    index index.html;
    try_files $uri $uri/ /qiankun_vue1/index.html;
  }
}	
server {
  listen 8004;
  server_name  localhost;
  location / {
    root   html/qiankun_vue1;
    index  index.html;
    try_files $uri $uri/ /index.html;
    add_header Access-Control-Allow-Origin *;
  }
}
```

