define(function(require, exports, module) {
	// 引入app
	var app = require('components/app')
	// 定义路由方法
	module.exports = function() {
		// 解析路由
		// 过滤掉#/
		var hash = location.hash.replace(/^#\/?/, '');
		// 对hash切割，得到数组
		hash = hash.split('/');
		// 切割后，第一个部分，表示组件的名称， 后面的部分表示路由的参数
		// 哪些名称可以渲染呢
		// 可以定义一个配置
		var map = {
			home: true,
			list: true,
			detail: true
		}
		// 如果在map配置，渲染该组件，否则渲染默认路由（home）
		if (map[hash[0]]) {
			app.view = hash[0]
		} else {
			// 默认路由
			app.view = 'home'
		}
		// 其余的部分
		app.query = hash.slice(1)
		// console.log(hash)
	}
})