<?php

_::session()->logged();

if(_::$path[0]=='playlist')
{
	if(is_numeric(_::$path[1]))
	{
		require_once(__DIR__.'/video.manage.playlist.update.php');
	}
	else
	{
		require_once(__DIR__.'/video.manage.playlist.list.php');
	}
}
elseif(_::$path[0]=='admin')
{
	require_once(__DIR__.'/video.manage.admin.php');
}
else
{
	require_once(__DIR__.'/video.manage.video.php');
}
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