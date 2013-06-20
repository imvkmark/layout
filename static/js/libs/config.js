// sea.js config base
// From https://statics.dnspod.cn/yantai/js/config.js
// 配置 jquery 并放入预加载项中

var alias = {
	// sea module
	'jquery': 'libs/jquery/1.10.0/jquery',
	'json': 'libs/json/1.0.2/json',
	'swfobject': 'libs/swfobject/2.3.0/swfobject',
	'd3':'libs/d3/3.1.10/d3',
	'xChart' : 'libs/xcharts/0.1.3/xcharts',
	'mustache' : 'libs/mustache/0.4.0/mustache',
	'md5' : 'libs/md5/2.2/md5',
	'_' : 'libs/underscore/1.4.4/underscore',

	// editor
	'ke': 'libs/kindeditor/4.1.7/kindeditor',

	// jquery Plugin
	'ui': 'libs/ui/1.10.1/jquery.ui',
	'uploadify': 'libs/uploadify/3.2.0/jquery.uploadify',
	'easyui': 'libs/easyui/1.3.3/jquery.easyui.min',
	'ms': 'libs/multiselect/1.13/jquery.multiselect',
	'ms-filter': 'libs/multiselect/1.13/jquery.multiselect.filter.min',
	'kinslideshow': 'libs/kinslideshow/1.2.1/kinslideshow',
	'jd': 'libs/jDiaporama/2.0.0/jquery.jDiaporama',
	'raty': 'libs/raty/2.5.2/jquery.raty',

	// css
	'uploadify-css': 'libs/uploadify/3.2.0/uploadify.css',
	'ke-css': 'libs/kindeditor/4.1.7/themes/default/default.css',
	'ui-css': 'libs/ui/1.10.1/style.css',
	'easyui-css': 'libs/easyui/1.3.3/themes/metro/easyui.css',
	'easyui-icon-css': 'libs/easyui/1.3.3/themes/icon.css',
	'xchart-css': 'libs/xcharts/0.1.3/xcharts.min.css',
	'ms-css': 'libs/multiselect/1.13/jquery.multiselect.css',
	'ms-filter-css': 'libs/multiselect/1.13/jquery.multiselect.filter.css',
	'jd-css': 'libs/jDiaporama/2.0.0/style.css',
	// lang
	'ke-zh_CN':'libs/kindeditor/4.1.7/lang/zh_CN.js',

	// project
	'upload' : 'modules/upload',
	'utils' : 'modules/utils',
	'lang' : 'modules/lang',
	'tpl' : 'modules/tpl',
	'url' : 'modules/url',

	// admin
	'a-common' :'admin/common'



};
for (var a in alias) {
	alias[a] = mk.seajsBase + alias[a];
}

seajs.config({
	alias: alias,
	preload:['jquery'],
	debug:2
});

