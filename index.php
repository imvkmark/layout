<?php
define('DS', DIRECTORY_SEPARATOR);
define('ROOT_DIR', dirname(__FILE__) . DS);
require_once ROOT_DIR . 'lib' . DS . 'utils.fun.php';
require_once ROOT_DIR . 'lib' . DS . 'tpl.class.php';
$frame   = getgpc('frame') ? getgpc('frame') : 'default';
$project = getgpc('project') ? getgpc('project') : '';
unset($_REQUEST['frame']);
extract($_REQUEST, EXTR_PREFIX_ALL, 'tpl');
$tpl = new tpl($project);
$tpl->display($frame);