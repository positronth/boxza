<?php
if(!_::$my['am'])
{
	_::move('/manage');
}
_::ajax()->register(array('delvideo'),'manage.video');

extract(_::split()->get('/manage/admin/',1,array('page')));

//_::time();
$db=_::db();

$arg = array('dd'=>array('$exists'=>false));
if($count=$db->count('video',$arg))
{
	list($pg,$skip)=_::pager()->bootstrap(50,$count,array('/manage/admin/','page-'),$page);
	$video=$db->find('video',$arg,array('_id'=>1,'t'=>1,'l'=>1,'f'=>1,'c'=>1,'cs'=>1,'n'=>1,'dr'=>1,'u'=>1,'do'=>1,'da'=>1),array('skip'=>$skip,'limit'=>50,'sort'=>array('_id'=>-1)));
}

$template->assign('count',$count);
$template->assign('video',$video);
$template->assign('user',_::user());
$template->assign('pager',$pg);
_::$content=$template->fetch('manage.admin');

/*
# เหนือ
							'5','13','14','23','26','34','37','38','40','41','45','53','54','75','76'
# ออก
							'7','8','9','16','31','50',
# อีสาน
							'4','6','11','20','21','27','28','43','44','46','48','55','56','57','63','69','70','71','73','74','77',
# ตก
							'3','17','30','39','51',
# กลาง
							'2','10','18','19','24','29','33','52','60','61','62','64','65','66','67','72',
# ใต้
							'1','12','15','22','25','32','35','36','42','47','49','58','59','68',
*/