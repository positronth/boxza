<?php

$db=_::db();

$app=array();
if(_::$path[0]!='new')
{
	$arg=array('u'=>_::$my['_id'],'_id'=>intval(_::$path[0]));
	if(_::$my['_id']==1)
	{
		unset($arg['u']);
	}
	if((!$app=$db->findOne('sticker',$arg)))
	{
		_::move('/manage',false);
	}
}
if($_POST)
{
	require_once(__DIR__.'/sticker.manage.view.post.php');
}

$template=_::template();
$template->assign('app',$app);
$template->assign('icon',$db->find('sticker_icon',array('p'=>$app['_id'],'dd'=>array('$exists'=>false))));
$template->assign('error',$error);


_::$content=$template->fetch('manage.view');

?>