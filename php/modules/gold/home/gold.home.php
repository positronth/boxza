<?php

_::$dbclick=2;
/*
_::$meta['title'] = 'ข่าว ข่าววันนี้ ข่าวเด่น ข่าวการเมือง ข่าวสังคมออนไลน์ ข่าวติดกระแส ข่าวบันเทิง ข่าวเกมส์ ข่าวเทคโนโลยี ข่าวภาพยนตร์ ข่าวกีฬา ข่าวไลฟ์สไตล์ ข่าวหวย';
_::$meta['description'] = 'ข่าว ข่าววันนี้ ข่าวเด่น ข่าวการเมือง ข่าวสังคมออนไลน์ ข่าวติดกระแส  ข่าวบันเทิง เกาะติด ข่าวเด็ดประเด็นข่าวร้อน ใหม่ สด ทันเหตุการณ์ จากทุกสำนักข่าว ถูกรวบรวมไว้ที่นี่';
_::$meta['keywords'] = 'ข่าว, ข่าววันนี้, ข่าวเด่น, ข่าวสังคมออนไลน์, ข่าวติดกระแส, การเมือง, เศรษฐกิจ, บันเทิง, อาชญากรรม, เทศโนโลยี, สังคม, ดารา, กีฬา, ท่องเที่ยว';
*/

//_::$meta['rss']='http://feed.boxza.com/gold/rss';
//_::$meta['google']=array('id'=>'112235668332689047152');

$cache=_::cache();
if(!_::$content=$cache->get('ca1','gold_home'))
{
	//_::link();
	//_::time();
	$db=_::db();

	$template->assign('msg',$db->findone('msg',array('_id'=>'gold')));

	_::$content=$template->fetch('home');


	$cache->set('ca1','gold_home',_::$content,false,300);
}

_::$yengo=array(53880,54000);
?>