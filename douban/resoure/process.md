#douban movie process
## 2017-5-10
#### 1.使用vue-cli框架
```
    vue init webpack dbmovie
```
#### 2.安装框架，必备的node包
```
    npm i
    npm run dev
```
#### 3.修改了默认端口号
默认端口号修改在```config/index.js```中的dev方法中，我修改成了1010，防止冲突。
#### 4.mook数据
按着网页版的豆瓣电影mook数据
#### 5.模拟服务器请求数据
引入json
```
    var appData = require('../data.json')
```
使用express的Router()方法分配路由
```
    var apiRouters = express.Router();
    apiRouters.get('/movie',function(req,res){
        res.json({
        errno: 0,
        data: appData
        })
    })
    app.use('/api',apiRouters)
```
