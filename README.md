AngularJS简易入门
======

## 介绍AngularJS

* AngularJS是JavaScript前端框架
* 使用MVC架构创建单页应用

> AngularJS是Google开发的纯客户端JavaScript技术的WEB框架,用于扩展、增强HTML功能,它专为构建强大的WEB应用而设计。

## AngularJS的关键概念

### AngularJS核心模块

包含一些对象和实体，用来完成AngularJS应用的基本操作

### angular全局对象

  ```angular``` 全局对象包含一些可以用来创建和启动应用的方法。```angular``` 对象包含了一个精简版的```jQuery``` ，叫做```jqLite``` 。可以使得Angular做一些简单的DOM操作。

### AngularJS 模块

在AngularJS中，一切都被封装在模块之中。AngularJS需要至少一个模块来进行操作。

#### 应用模块

AngularJS需要至少一个模块来启动，这个模块就是应用模块。
使用```angular.module(name, [requires], [configFn])```来创建和获取模块。

* ```name```: 模块的名字
* ```requires```: 模块的依赖
* ```configFN```: 模块注册时调用的方法

传入一个参数，获取对应模块。传入多个参数进行创建。（类似重载，跟是jQuery的setter,getter类似）

#### 附加模块

同样是AngularJS team开发的，但是不包含在核心功能里的模块。

#### 第三方模块

由其他人开发的模块

### 双向数据绑定
双向数据绑定，使AngularJS应用总是保持model和view的一致。

> 单向数据绑定与双向数据绑定

### 依赖注入

示例：使用module的controller方法创建一个controller

```javascript
angular.module('someModule').controller('SomeController',
function($scope){
	... 
});
```

controller方法接收了两个参数，一个是controller的名字，另一个是controller的构造方法。构造方法中被注入了一个AngularJS的对象：$scope。
AngularJS通过方法的参数的名字来进行注入。
当进行压缩（混淆）的时候，会变成

```javascript
angular.module('someModule').controller('SomeController', 
function(a){ 
	... 
});
```

这样AngularJS就懵逼了。
通常采用“注释数组”的方式进行注入

```javascript
angular.module('someModule').controller('SomeController', ['$scope',
   function($scope) {
   ...
}]);
```
###AngularJS指令
AngularJS就是一些标记，一般是属性或者元素名。从根本上讲，AngularJS是通过指令与DOM元素进行交互的。
####核心指令
AngularJS自带了一些必要的指令。
最基本的指令：ng-app 一般写在页面的body或者html标签上。

```html
<body ng-app></body>
```
* ng-controller: 指定哪个contoller来管理这块元素视图
* ng-model: 绑定个哪个值
* ng-show/ng-hide: 根据布尔表达式决定是否显示
* ng-repeat: 迭代数组，重复html元素

> [查看更多](http://docs.angularjs.org/api/)

####自定义指令
自己写指令，可以根据元素或者属性来修改已有的DOM元素。

####启动一个Angluar应用
启动，或者说引导一个AngularJS应用，就是说告诉Angular在哪个DOM元素是根元素以及何时来初始化Angular应用。
#####自动启动
使用ng-app指令，当应用的JavaScript文件加载完成时，AngularJS就会找ng-app所在的元素。ng-app可以没有值，也可有一个名字。
如果有一个名字，则必须创建这个module。
#####手动启动
需要用到以下方法

```javascript
angular. bootstrap(element, [modules], [config]) 
```

* element: 想要启动的DOM元素
* modules: 启动的模块
* config: 启动的配置

方法在jqLite的document-ready事件中进行调用。

##安装AngularJS

* 使用CDN文件
* 下载后使用自己服务器提供

###使用bower管理依赖
```shell
$ npm install -g bower
```
创建bower.json指定依赖

```javascript
{
  "name": "MEAN",
  "version": "0.0.1",
  "dependencies": { }
}
```

###配置bower依赖管理
创建.bowerrc文件指定依赖下载的路径

```javascript
{
  "directory": "public/lib"
}
```
###使用Bower安装AngularJS
```javascript
{
  "name": "MEAN",
  "version": "0.0.1",
  "dependencies": {
    "angular": "~1.2"
  }
}
```

```shell
$ bower install
```

###配置AngluarJS

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <script type="text/javascript" src="/lib/angular/angular.js"></script>
  </body>
</html>
```
> git checkout -f v1

##AngularJS应用结构

* 水平结构
* 垂直结构
* 垂直结构改良（示例采用此种）

##启动（引导）AngularJS应用
我们采用手动启动的方式。
比自动启动更加灵活，更加容易控制，然后而并没有什么卵用。
public 目录中创建application.js

```javascript
var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, []);
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});
```
在index.ejs中引入application.js

```html
<section>
       <input type="text" id="text1" ng-model="name">
       <input type="text" id="text2" ng-model="name">
</section>

<script type="text/javascript" src="/application.js"></script>
```
启动服务，查看效果。（双向数据绑定）
> git checkout -f v3 (忘写v2了)

##AngularJS MVC
MVC design pattern
在public文件中，新建一个名为example的模块文件夹。在example中再建两个子文件夹controllers,views
在example中新建一个文件example.client.module.js
public/example/example.client.module.js中写入以下代码

```javascript
angular.module('example', []);
```
在index.ejs中引入

```html
<script type="text/javascript" src="/example/example.client.module.js"></script>
```
通过依赖注入方式将example模块加入到主应用模块中

```javascript
var mainApplicationModule = angular.module(mainApplicationModuleName, ['example']);
```
> git checkout -f v4

###AngularJS views
example.client.view.html --> public/example/views

```html
<section>
       <input type="text" id="text1" ng-model="name">
       <input type="text" id="text2" ng-model="name">
</section>
```

index.ejs中

```html
<section ng-include="'example/views/example.client.view.html'"></section>
```

###AngularJS controllers and scopes

* scope是连接controller和view的一个对象
* dom层级的关系，所以scope也是有层级的关系.本scope找不到的对象，会向上去查找。
* 一般使用ng-controller来指定view的controller（也可以在路由配置中指定模controller）

```javascript
example.client.controller.js --> public/example/controllers
angular.module('example').controller('ExampleController', ['$scope',
     function($scope) {
       $scope.name = 'MEAN Application';
     }
￼]);
```
index.ejs引入
```html
<script type="text/javascript" src="/example/controllers/example.client.controller.js"></script>
```

```html
example.client.view.html

<section ng-controller=ExampleController>
    <input type="text" id="text1" ng-model="name">
    <input type="text" id="text2" ng-model="name">
</section>
```
> git checkout -f v5

##AngularJS路由

AngularJS主要用于“单页应用”，ngRoute管理整个浏览器中的路由。AngularJS将加载定义的模板，把结果写入DOM，服务器只是用来提供静态文件的加载，不对url变化做响应。这样就使的服务器更像一个“面向API”的后端。（好处：移动应用流行，原生应用可以和网页应用共用同一套API）
###安装ngRoute模块

```javascript
{
  "name": "MEAN",
  "version": "0.0.1",
  "dependencies": {
    "angular": "~1.2",
    "angular-route": "~1.2"
  }
}
```
```shell
$ bower install
```
index.ejs中引入

```html
<script type="text/javascript" src="/lib/angular-route/angular-route.js"></script>
```
application.js注入

```javascript
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'example']);
```

###配置􏰔􏰕􏰖 URL
使用url的hash部分来进行路由，hash部分变化，不向服务器发送请求。（锚点）
（缺点：单页应用不用利于搜索引擎的抓取和SEO。解决：搜索引擎给开发者提供一个标记，来标记应用为单页应用，Hashbangs）
AngluarJS的$locationProvider服务支持这种配置
public/application.js

```javascript
mainApplicationModule.config(['$locationProvider',
     function($locationProvider) {
       $locationProvider.hashPrefix('!');
     }
]);
```
这样搜索引擎就会等待AJAX的请求，来获得网页内容。

###AngluarJS应用路由

使用ngRoute中的$routeProvider对象，这个对象提供了一些方法来定义路由行为。在一个模块中注入$routeProvider对象来进行配置。

```javascript
example.client.routes.js --> public/example
angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'example/views/example.client.view.html'
            }).otherwise({
                redirectTo: '/'
            }); 
    }
]);
```
使用angular.module()获得example这个模块，然后使用config方法，注入$routeProvider对象，进行配置。when(),otherwise()

除了$routeProvider，另一个打包在ngRoute中的是ng-view，ng-view就是告诉DOM元素，在哪里显示路由视图。

```html
app/views/index.ejs
<section ng-view></section>

引入
<script type="text/javascript" src="/example/example.client.routes.js"></script>
```
> git checkout -f v6


##AngularJS服务

单例实体，用于在不同实体中共享信息。可以用来从服务中获取数据，共享缓存数据，注入全局对象等。

###AngularJS自带的一些服务

* $http: 用来处理AJAX请求

```
// Simple GET request example :
$http.get('/someUrl').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  
// Simple POST request example (passing data) :
$http.post('/someUrl', {msg:'hello word!'}).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```

* $resource: 用来处理RESTful APIs，支持一系列的方法和参数。
需要安装angular-resource.js，添加ngResource依赖

```
默认的动作
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
也可以加入自定动作
```

* $location: 用来操作url
* $q: 用来操作promises
* $rootScope: 返回rootScope
* $window: 返回浏览器window对象

###创建AngluarJS服务
一般使用两种方法来创建：

```
//使用service提供数据的返回
angular.module('example').factory('ExampleService', [
     function() {
       return true;
     }
]);

//通过service方法实例化一个单例对象，注意使用了prototype的方式
angular.module('example').service('ExampleService', [
    function () {
        this.someValue = true;
        this.hello = 'world';
        this.firstMethod = function () {
        };
        this.secondMethod = function () {
        };
    }
]);
```
###使用服务

同样是通过注入的方式

```
创建services文件夹 --> example.client.service.js文件
```

index.ejs引入

```
<script type="text/javascript" src="/example/services/example.client.service.js"></script>
```

example.client.controller.js中注入

```
angular.module('example').controller('ExampleController', ['$scope', 'ExampleService',
    function($scope, ExampleService) {
        $scope.name = 'MEAN Application';
        $scope.test = ExampleService.hello;
    }
]);
```
view中加入显示

```
hello {{test}}!!
```

> git checkout -f v7
> 
> git checkout -f v8 增加user模块
> 
> git checkout -f v9 user模块使用service与服务器进行交互
