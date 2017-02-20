<?php
_::session()->logged();
$db=_::db();
$arg=array('_id'=>intval(_::$path[0]),'u'=>_::$my['_id']);
if(_::$my['am'])
{
	unset($arg['u']);
}
if(!$glitter=$db->findone('glitter',$arg))
{
	_::move('/manage');
}
_::ajax()->register('updateglitter');


if(_::$my['am'])
{
	if($f=$_FILES['o']['tmp_name'])
	{
		require_once(__DIR__.'/glitter.update.post.php');
		_::move(URL.'?updated');
	}
}


$template->assign('glitter',$glitter);
_::$content=$template->fetch('update');


function updateglitter($arg)
{
	$ajax=_::ajax();
	$db=_::db();
	if($arg['cate'] && !is_array($arg['cate']))$arg['cate']=array($arg['cate']);
	$arg['detail']=trim(mb_substr(strip_tags($arg['detail']),0,1000,'utf-8'));
	if(mb_strlen($arg['detail'],'utf-8')<10)
	{
		$ajax->alert('กรุณากรอกข้อความของกลิตเตอร์อย่างน้อย 10 ตัวอักษร');
	}
	elseif(!$arg['cate'] || count($arg['cate'])<1)
	{
		$ajax->alert('กรุณาเลือกประเภทของกลิตเตอร์');
	}
	else
	{
		$db->update('glitter',array('_id'=>intval(_::$path[0])),array('$set'=>array('t'=>$arg['detail'],'c'=>array_map('intval',$arg['cate']))));
		_::cache()->delete('ca1','glitter_home',0);
		$ajax->alert('บันทึกข้อมูลกลิตเตอร์เรียบร้อยแล้ว');
		$ajax->script('setTimeout(function(){window.location.href="'.URL.'";},2000);');
	}
}
?>