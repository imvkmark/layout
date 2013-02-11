<?php
function getgpc($var){
	if (isset($_REQUEST[$var]) && !empty($_REQUEST[$var])) {
		return $_REQUEST[$var];
	}
	return '';
}

?>