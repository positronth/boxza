<?php
_::session()->logged();

if(_::$my['am'])
{
	if(is_numeric(_::$path[0]))
	{
		require_once(__DIR__.'/game.admin.update.php');
	}
	else
	{
		require_once(__DIR__.'/game.admin.home.php');
	}
}
else
{
	_::$content=$template->fetch('admin.permission');
}
?>