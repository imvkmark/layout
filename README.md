文件布局
======

文件夹功能
-
	js			存储js文件
	lib			PHP的功能文件
	style		核心样式表
	tpl			模版存储位置
	index.php	入口文件

需要配置的环境
-
需要配置在PHP环境下

语法说明
-
	?frame=default&block=block:index
		加载变量的地址
	{replace 'block'}
		这里的block则是文件中的替换文档.
	{template 'header', 'common'}
		加载tpl 文件夹下的common文件夹中的header部分
	frame		框架
		加载 tpl/frame 下的框架文件

目的
-
将文件做成公共调用的模块化,便于前端的调试使用, 使用less文件做架构
