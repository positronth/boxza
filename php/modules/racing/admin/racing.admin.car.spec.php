<?php


//_::ajax()->register(array('newbrand'),'admin.car');

$db=_::db();
if(!$brand=$db->findone('car_brand',array('link'=>_::$path[1])))
{
	_::move('/admin/car');	
}
if(!$spec=$db->findone('car_spec',array('brand'=>$brand['_id'],'link'=>_::$path[2])))
{
	_::move('/admin/car/'.$brand['link']);	
}
define('BRAND_ID',$brand['_id']);

$year=array();
$g=range(date('Y')+5,1980);
foreach($g as $v)
{
	$year[$v]=$v.' ('.($v+543).')';	
}
$template=_::template();
$template->assign('html',_::html());
$template->assign('brand',$brand);
$template->assign('spec',$spec);
$template->assign('year',$year);
$template->assign('spectype',array('0'=>'ไม่มีประเภท','1'=>'รถเก๋ง','2'=>'รถกระบะ','3'=>'รถตู้','4'=>'SUV (CR-V, Fortuner,...)','5'=>'MPV (Wish, Innova,...)'));
$template->assign('canedit',_::$my['am']>=9);


_::ajax()->register(array('newspec','update'),'admin.car');

if(isset($_FILES) && isset($_FILES['thumb']))
{
	$s=array('status'=>'FAIL','message'=>'ไฟล์ไม่ถูกต้อง');
	if($m=$_FILES['thumb']['tmp_name'])
	{
		$s['status']='OK';
		_::upload()->send('s3','racing-spec','@'.$m,array('name'=>$spec['link'],'folder'=>$brand['link']));
		$s['pic']='http://s3.boxza.com/racing/brand/'.$brand['link'].'/'.$spec['link'].'.png?rand='.rand(1,999);
	}
	echo json_encode($s);
	exit;
}

$template->assign('genlist',getgen());

_::$content=$template->fetch('admin.car.spec');


function getgen()
{
	$db=_::db();
	$template=_::template();
	$template->assign('gen',$db->find('car_spec',array('brand'=>BRAND_ID)));
	return $template->fetch('admin.car.spec.gen');
}
?>