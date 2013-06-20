define(function (require, exports) {
	var mastache = require('mustache');

	/**
	 * 模版添加方法
	 * @param $obj
	 * @param tpl
	 * @param jsonStr
	 */
	exports.html = function ($obj, tpl, jsonStr) {
		var html = mastache.to_html(tpl, $.parseJSON(jsonStr));
//		console.log(html);
		$obj.html(html);
	};

	exports.auto = {
		brandSelection:
			'{{#brandGroup}}' +
				'<optgroup label="{{index}}">'+
				'{{#brands}}' +
					'<option value="{{brandId}}"{{#sel}} selected="selected"{{/sel}}>{{brandName}}</option>' +
				'{{/brands}}'+
				'</optgroup>'+
			'{{/brandGroup}}',
		carSelection:
			'{{#carGroup}}' +
				'<optgroup label="{{manufactor}}">'+
				'{{#cars}}' +
				'<option value=\"{{carId}}\">{{carName}}</option>' +
				'{{/cars}}'+
				'</optgroup>'+
			'{{/carGroup}}',
		modelSelection:
			'{{#models}}' +
				'<option value=\"{{modelId}}\">{{modelName}}</option>' +
			'{{/models}}'
	}
});