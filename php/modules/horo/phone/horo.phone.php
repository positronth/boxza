<?php
if(is_numeric(_::$path[0]))
{
	_::move('/phone/'._::$path[0].'.html',true);
}
elseif(preg_match('/^(\d+)\.html$/',_::$path[0],$url))
{
	require_once(__DIR__.'/horo.phone.view.php');
}
elseif(_::$path[0])
{
	_::move('/phone',true);
}
else
{
	require_once(__DIR__.'/horo.phone.home.php');
}

?>