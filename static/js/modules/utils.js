define(function (require, exports) {
	var tpl = require('tpl');
	var url = require('url');
	var lang = require('lang');
	exports.browser = {
		mozilla : /firefox/.test(navigator.userAgent.toLowerCase()),
		webkit : /webkit/.test(navigator.userAgent.toLowerCase()),
		opera : /opera/.test(navigator.userAgent.toLowerCase()),
		msie : /msie/.test(navigator.userAgent.toLowerCase())
	};

	exports.letter = function (inputID, idxID, length) {
		var $inputID = $('#' + inputID);
		var $idxID = $('#' + idxID);
		$inputID.on('change blur', function () {
			if ( !$(this).val() || $idxID.val() ) return;
			$.get(ixdcw.url.ajaxWww, {action : 'sysLetter', input : $(this).val(), length : length}, function (data) {
				var dData = $.parseJSON(data);
				if ( dData.errNo ) {
					alert(dData.errMsg);
				} else {
					$idxID.val(dData.letter);
				}
			})

		})
	};

	exports.makeRequest = function (queryString, targetPhp, method, sucessfun) {
		var methodValue = ((typeof method == "undefined" ) || method == '') ? "post" : 'get';
		if ( targetPhp.indexOf('http://') < 0 ) {
			targetPhp = ixdcw.domain.www + targetPhp;
		}
		$.ajax({
			async : false,
			cache : false,
			type : methodValue,
			url : targetPhp,
			data : queryString,
			success : sucessfun
		});
	};

	exports.brandInit = function (brandId, brandIsMulti, brandDefault) {
		$('#' + brandId).multiselect({
			multiple : brandIsMulti,
			create : this.makeRequest({action : 'autoComboBrands', aDefaults : brandDefault}, url.auto, '', function (data) {
				tpl.html($('#' + brandId), tpl.auto.brandSelection, data);
			}),
			selectedList : 1,
			noneSelectedText : lang.auto.brandSelection,
			header : lang.auto.brandSelection
		}).multiselect('refresh');
	};

	exports.carInit = function (carId, carIsMulit, aBids, carDefaults) {
		$('#' + carId).multiselect({
			multiple : carIsMulit,
			create : this.makeRequest({action : 'autoComboCars', aBids : aBids, aDefaults : carDefaults}, url.auto, '', function (data) {
				tpl.html($('#' + carId), tpl.auto.brandSelection, data);
			}),
			selectedList : 1,
			noneSelectedText : lang.auto.brandSelection,
			header : lang.auto.brandSelection
		}).multiselect('refresh');
	}
});