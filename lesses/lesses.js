	// region[lesses.js]
	// author: lesses


	//region[代码]
	(function(symbol) {
		"use strict";
		//region[本库依赖变量]
		var version = "1.0.0";
		var contentTypes = [
			"text/plain;charset=UTF-8",
			"application/x-www-form-urlencoded;charset=utf-8",
			"appliaction/;charset=utf-8",
			"multipart/form-data;charset=utf-8",
			"text/xml;charset=utf-8"
		];
		var w = window.innerWidth;
		var h = window.innerHeight;
		//endregion

		//region[本库依赖函数]
		function extend(t,o) {
			for(var i in o) {
				t[i] = o[i];
			}
		}
		//endregion

		//region[内置方法原型扩展]
		// ------------------------扩展String
		extend(String.prototype,{

		});
		//endregion
	}("lesses"));