define(function(require, exports, module) {
	// 引入样式
	require('./app.css')
	var Home = require('./home/home');
	var List = require('./list/list');
	var Detail = require('./detail/detail');
	// 第三步 注册组件
	Vue.component('home', Home)
	Vue.component('list', List)
	Vue.component('detail', Detail)

	// vue实例化对象
	module.exports = new Vue({
		el: '#ickt',
		data: {
			// 定义组件视图变量
			view: 'home',
			// 存储路由参数
			query: [],
			// 为搜索框绑定数据
			search: '',
			// 定义点击enter键的时候，search的值
			searchEnterValue: ''
		},
		methods: {
			// 输入enter，进行复制
			gotoSearch: function() {
				// 如果search没有数据，要返回
				if (!this.search) {
					return;
				}
				// 复制数据值
				this.searchEnterValue = this.search;
				// 搜索框清空，就是对search清空
				this.search = '';
			}
		}
	})

})
