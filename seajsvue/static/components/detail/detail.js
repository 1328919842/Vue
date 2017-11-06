define(function(require, exports, module) {
	// css, filter, util
	require('./detail.css');
	var filter = require('filter/filter');
	var Util = require('util/util');
	
	module.exports = Vue.extend({
		// 定义模板
		template: '#tpl_detail',
		// 绑定数据
		data: function() {
			return {
				// 绑定数据
				data: {}
			}
		},
		// 请求数据
		created: function() {
			// 缓存this
			var me = this;
			// 发送请求
			Util.ajax('data/product.json?id=' + this.$parent.query[0], function(res) {
				// 请求成功，存储数据
				if (res && res.errno === 0) {
					me.data = res.data;
					console.log(me)
				}
			})
		}
	})
})