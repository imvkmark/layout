define(function (require, exports) {
	var utils = require('utils');
	require('easyui');
	require('easyui-css');
	exports.open = function (id, moduleid, source, auth, old) {
		var dialogContent =
			'<div class="easyui-dialog" title="文件上传" style="width:400px;height:200px;padding:10px">' +
			'</div>';
		var formContent =
			'<form id="' + moduleid + '_' + source + '" enctype="multipart/form-data" method="POST">' +
				'<input type="file" name="' + moduleid + '_' + source + '">' +
				'<input type="hidden" name="uModuleid" value="' + moduleid + '" />' +
				'<input type="hidden" name="uSource" value="' + source + '" />' +
				'<input type="hidden" name="uAuth" value="' + auth + '" />' +
				'<input type="hidden" name="uOld" value="' + old + '" />' +
				'<input class="submit" name="uSubmit" type="submit" value="上传" />' +
			'</form>';
		var formObj = $(formContent).form({
			url : ixdcw.domain.www + 'api/upload/thumb.php',
			onSubmit : function () {
				if ( !$(this).find('input[type=file]').val() ) {
					$.messager.alert('提示', '请选择需要上传的文件先!');
					return false;
				}
			},
			success : function (data) {
				// {"errNo":3,"errMsg":"\u6765\u6e90\u4e0d\u6b63\u786e!\n"}
				var deData = $.parseJSON(data);
				if ( deData.errNo ) {
					$.messager.alert('错误信息', deData.errMsg);
				} else {
					$('#'+id).val(deData.url);
					dialogObj.dialog('close');
				}
			}
		});
		var dialogObj = $(dialogContent).dialog({
				modal : true,
				content : formObj
			}
		);
	};
	exports.preview = function (url) {
		if ( $.trim(url) == '' ) {
			$.messager.alert('提示', '预览地址为空!');
		} else {
			$.messager.alert('图像预览', '<img src="' + url + '">');
		}
	};
	exports.uploadThumbSucess = function (file, data, response) {
		var deData = $.parseJSON(data);
		if ( deData.errNo ) {
			alert(deData.errMsg);
		} else {
			console.log(response);
			$('#dpreview').val(deData.url);
		}
	};
	exports.clearUpload = function (formid, params) {
		ixdcw.config.submit = ixdcw.config.submit || false;
		$('#' + formid).on('submit', function () {
			ixdcw.config.submit = true;
		});
		//如果选择离开，触发unload事件
		if ( utils.browser.webkit ) {
			$(window).bind('beforeunload', function () {
				if ( !ixdcw.config.submit ) { //如果用户未提交表单，弹出对话框提示用户是否提交
					return "您的表单还没有提交,您的操作将会导致表单数据丢失.";
				}
			});
		}

		if ( !utils.browser.opera ) {
			$(window).unload(function () {
				if ( !ixdcw.config.submit ) {
					exports.clearUploadHandler(params, ixdcw.url.ajaxUpload);
				}
			});
		} else {
			exports.clearUploadHandler(params, ixdcw.url.ajaxUpload);
		}
	};
	exports.clearUploadHandler = function (queryString, targetPhp, fun, method) {
		var methodValue = (typeof method == "undefined" ) ? "post" : 'get';
		$.ajax({
			async : false,
			cache : false,
			type : methodValue,
			url : targetPhp,
			data : queryString
		});
	}
});