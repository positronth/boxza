<?php
#_::$meta['title'] = 'เลขเด็ด ข่าวหวย เลขเด็ดหวย เลขเด็ดสลากกินแบ่งรัฐบาล';
#_::$meta['description'] = 'เลขเด็ด ข่าวหวย อัพเดทข่าวเกี่ยวกับหวยและเลขเด็ดหวย เลขเด็ดสลากกินแบ่งรัฐบาล เลขเด็ดจากทั่วทุกแหล่งทั่วประเทศ';
#_::$meta['keywords'] = 'เลขเด็ด, ข่าวหวย, เลขเด็ดหวย, หวย, สลากกินแบ่งรัฐบาล, หวยเด็ด';



if(is_numeric(_::$path[0]))
{
	require_once(__DIR__.'/korea.news.view.php');
}
else
{
	require_once(__DIR__.'/korea.news.home.php');
}

?>