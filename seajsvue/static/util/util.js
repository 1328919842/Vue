define(function(require, exports, module) {
	// 封装工具方法
	var Util = {
		/**
		 * 请求数据方法
		 * @url 	请求地址
		 * @fn 		请求回调函数
		 ***/ 
		ajax: function(url, fn) {
			// 定义小黄人
			var xhr = new XMLHttpRequest();
			// 监听状态事件
			xhr.onreadystatechange = function() {
				// 监听状态
				if (xhr.readyState === 4) {
					// 监听状态码
					if (xhr.status === 200) {
						// 执行回调函数
						fn && fn(JSON.parse(xhr.responseText))
					}
				}
			}
			// 打开
			xhr.open('GET', url, true);
			// 发送数据
			xhr.send(null)
		}
	}



	// 测试
	// Util.ajax('data/home.json', function(res) {
	// 	console.log(res)
	// })
	module.exports = Util;
})
