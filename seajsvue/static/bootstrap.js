define(function(require, exports, module) {
	require('reset.css')
	// 首先引入路由
	var router = require('router/router')
	// 监听hash的改变
	window.addEventListener('hashchange', router)
	// 加载完成，或者直接执行
	// window.addEventListener('load', router)
	router()
})