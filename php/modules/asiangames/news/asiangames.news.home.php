<?php

$db=_::db();

extract(_::split()->get('/',0,array('c','page')));

if(isset($c) && !isset($cate[$c]))
{
	_::move('/#no-cate');
}
if($c)
{
	_::move('/'.$cate[$c]['l'],true);
}
elseif(isset($clink[MODULE_LINK]))
{
	$c=$clink[MODULE_LINK];
}
else
{
	_::move('/#no-set');
}

$_=array('dd'=>array('$exists'=>false),'pl'=>1,'c'=>25,'cs'=>intval($c));

_::$meta['rss']='http://feed.boxza.com/news-25-'.$c.'/rss';

_::$meta['title']=$cate[$c]['t'].' - '._::$meta['title'];
_::$meta['description']=_::$meta['title'].', '._::$meta['description'];

if($count=$db->count('news',$_))
{
	list($pg,$skip)=_::pager()->bootstrap(80,$count,array('/'._::$path[0],'/page-'),$page);
	$news=$db->find('news',$_,array('_id'=>1,'t'=>1,'fd'=>1,'s'=>1,'da'=>1,'c'=>1,'cs'=>1,'exl'=>1,'url'=>1),array('sort'=>array('_id'=>-1),'skip'=>$skip,'limit'=>80));
}

$template->assign('c',$c);
$template->assign('news',$news);
$template->assign('pager',$pg);
_::$content=$template->fetch('news.home');

?>