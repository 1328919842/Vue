define(function(require, exports, module) {
	// 样式，过滤器，util
	require('./home.css')
	require('./items.css')
	var filter = require('filter/filter');
	var Util = require('util/util');
	// 第二步 定义组件类
	module.exports = Vue.extend({
		template: '#tpl_home',
		// 绑定数据
		data: function() {
			// 返回绑定的数据
			return {
				// 通过闭包创建
				types: [
					{id: '1', img: '01.png', text: '美食'},
					{id: '2', img: '02.png', text: '电影'},
					{id: '3', img: '03.png', text: '酒店'},
					{id: '4', img: '04.png', text: '休闲'},
					{id: '5', img: '05.png', text: '外卖'},
					{id: '6', img: '06.png', text: 'ktv'},
					{id: '7', img: '07.png', text: '周边游'},
					{id: '8', img: '08.png', text: '丽人'},
					{id: '9', img: '09.png', text: '小吃'},
					{id: '10', img: '10.png', text: '火车票'}
				],
				// 绑定请求的数据
				ad: [],
				list: []
			}
		},
		// 页面加载完成，请求数据
		created: function() {
			// 缓存this
			var me = this;
			// 请求数据
			Util.ajax('data/home.json', function(res) {
				// 请求成功，将异步数据存储，
				if (res && res.errno === 0) {
					// 存储数据, 作用域不是实例化对象，要缓存this
					me.ad = res.data.ad;
					me.list = res.data.list;
				}
			})
		}
		// beforeCreate: function() {
		// 	console.log(111, arguments, this)
		// },
		// created: function() {
		// 	console.log(222, arguments, this)
		// },
		// beforeMount: function() {
		// 	console.log(333, arguments, this)
		// },
		// mounted: function() {
		// 	console.log(444, arguments, this)
		// }
	})
})
