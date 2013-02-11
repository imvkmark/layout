<?php 
class tpl{
	private $_frameDir;
	private $_tplDir;
	private $_ext;
	public function __construct()
	{
		$this->_tplDir	 = ROOT_DIR . 'tpl' . DS;
		$this->_frameDir = $this->_tplDir . 'frame' . DS;
		$this->_ext = '.htm';
	}

	// parse Frame file
	public function _parseFrame($frameFile)
	{
		// {replace '__BLOCK__'}
		$pattern = "/\{replace \'(.*?)\'\}/is";
		$content = file_get_contents($frameFile);
		preg_match_all($pattern, $content, $matches);
		if ($matches[1]) {
			foreach ($matches[1] as $key => $value) {
				// $value = 'BLOCK'
				$valKey = 'tpl_'.strtolower($value);
				if (isset($GLOBALS[$valKey])) {
					$vars = explode(':', $GLOBALS['tpl_'.strtolower($value)]);
					$str = "{template '{$vars[1]}', '{$vars[0]}'}";
					$content = str_replace($matches[0][$key], $str, $content);
				}
			}
		}
		return $content;
	}

	// parse insert block file
	public function _parseTpl($tplStr)
	{
		// {template 'header', 'common'}
		$pattern = "/\{template \'(.*?)\', \'(.*?)\'\}/is";
		preg_match_all($pattern, $tplStr, $matches);
		if ($matches[1]) {
			foreach ($matches[1] as $key => $value) {
				$file = $this->_tplDir . $matches[2][$key]. DS . $matches[1][$key] . $this->_ext;
				if ($this->_checkFileExist($file)) {
					$str = file_get_contents($file);
					$tplStr = str_replace($matches[0][$key], $str, $tplStr);
				}
				
			}
		}
		return $tplStr;
	}
	private function _checkFileExist($filePath){
		if (file_exists($filePath)) {
			return true;
		} else {
			exit('Unexist File : ' . $filePath);
		}
	}
	public function display($frame = 'default')
	{
		$frameFile = $this->_frameDir . $frame . $this->_ext;
		if ($this->_checkFileExist($frameFile)){
			$frameStr = $this->_parseFrame($frameFile);
			$tplStr = $this->_parseTpl($frameStr);
			echo $tplStr;
		}
		
	}

}
?>