<?php

if($_FILES['file'])
{
	if($_POST['data']['name']&&$_FILES['file']['tmp_name'])
	{
		$photo=_::photo();
		$folder=UPLOAD_FOLDER.'racing/brand';
		if($n = $photo->thumb($_POST['data']['name'],$_FILES['file']['tmp_name'],$folder,80,80,'inboth','png'))
		{
			$f = FILES.$folder.'/'.$n;
			$size=@getimagesize($f);
			$status=array('status'=>'OK','data'=>array('n'=>$n,'w'=>$size[0],'h'=>$size[1]));
		}
		else
		{
			$error='file not exists';
		}
	}
	else
	{
		$error='no data';
	}
}
else
{
	$error='file not found';
}

?>