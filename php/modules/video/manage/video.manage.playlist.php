<?php


_::ajax()->register(array('delvideo'),'manage.video');

extract(_::split()->get('/manage/playlist/',2,array('page')));

//_::time();
$db=_::db();

$arg = array('u'=>_::$my['_id'],'dd'=>array('$exists'=>false));
if($count=$db->count('video_playlist',$arg))
{
	list($pg,$skip)=_::pager()->page(20,$count,array('/manage/playlist/','page-'),$page);
	$playlist=$db->find('video_playlist',$arg,array('_id'=>1,'t'=>1,'l'=>1,'f'=>1,'c'=>1,'cs'=>1,'n'=>1,'dr'=>1),array('skip'=>$skip,'limit'=>20,'sort'=>array('ds'=>-1)));
}

$template->assign('count',$count);
$template->assign('playlist',$playlist);
$template->assign('pager',$pg);
_::$content=$template->fetch('manage.playlist');

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