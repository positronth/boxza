<?php
define('HIDE_REQUEST',1);

$pp=50;
extract(_::split()->get('/fbimage/ref/'._::$path[1],1,array('page')));

if(!$page || $page<1)$page=1;

$db=_::db();
if($count=$db->count('fbimage',array('fb'=>_::$path[1],'dd'=>array('$exists'=>false))))
{
	list($pg,$skip)=_::pager()->bootstrap($pp,$count,array($url,'page-'),$page);
	$image=$db->find('fbimage',array('fb'=>_::$path[1],'dd'=>array('$exists'=>false)),array(),array('sort'=>array('_id'=>-1),'skip'=>$skip,'limit'=>$pp));
}

$template=_::template();
$template->assign('c',_::$path[1]);
$template->assign('parent','/fbimage');
$template->assign('page',$page);
$template->assign('maxpage',ceil($count/$pp));
$template->assign('image',$image);
$template->assign('cur','?parent='.urlencode(URL));
_::$content=$template->fetch('fbimage.ref');

?>