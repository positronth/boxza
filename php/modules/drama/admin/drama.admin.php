<?php
_::session()->logged();
if(!_::$my['am'])
{
	_::move('/');
}
if(is_numeric(_::$path[0]))
{
	require_once(__DIR__.'/drama.admin.update.php');
}
elseif(in_array(_::$path[0],array('upload','report')))
{
	require_once(__DIR__.'/drama.admin.'._::$path[0].'.php');
}
else
{
	require_once(__DIR__.'/drama.admin.home.php');
}

?>