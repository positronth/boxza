<?php

require_once('../../handlers/boxza.php');



$gift = array(
							'furby11'=>array(
													'n'=>'Furby (Pink)',
													'pr'=>25,
													'ex'=>30,
							),
							'furby12'=>array(
													'n'=>'Furby (Black)',
													'pr'=>25,
													'ex'=>30,
							),
							'furby13'=>array(
													'n'=>'Furby (Purple)',
													'pr'=>25,
													'ex'=>30,
							),
							'furby14'=>array(
													'n'=>'Furby (Orange)',
													'pr'=>25,
													'ex'=>30,
							),
							'furby15'=>array(
													'n'=>'Furby (Yellow)',
													'pr'=>25,
													'ex'=>30,
							),
							'furby16'=>array(
													'n'=>'Furby (White)',
													'pr'=>25,
													'ex'=>30,
							),
							'furby17'=>array(
													'n'=>'Furby (Dark Purple)',
													'pr'=>25,
													'ex'=>30,
							),
							
							'furby01'=>array(
													'n'=>'Furby (Pink/Teal)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby02'=>array(
													'n'=>'Furby (Teal/Purple)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby03'=>array(
													'n'=>'Furby (Orange/Blue)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby04'=>array(
													'n'=>'Furby (Blue/Yellow)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby05'=>array(
													'n'=>'Furby (Black/Pink)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby06'=>array(
													'n'=>'Furby (White/Grey/Teal)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby07'=>array(
													'n'=>'Furby (Pink/Yellow)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby08'=>array(
													'n'=>'Furby (Teal/Pink)',
													'pr'=>20,
													'ex'=>30,
							),
							'furby09'=>array(
													'n'=>'Furby (Red/Black)',
													'pr'=>20,
													'ex'=>30,
							),
							
							
							
							
							'candy2'=>array(
													'n'=>'อมยิ้ม [1]',
													'pr'=>10,
													'ex'=>30,
							),
							'candy3'=>array(
													'n'=>'อมยิ้ม [2]',
													'pr'=>10,
													'ex'=>30,
							),
							'candy4'=>array(
													'n'=>'อมยิ้ม [3]',
													'pr'=>10,
													'ex'=>30,
							),
							
							'heart1'=>array(
													'n'=>'หัวใจ [1]',
													'pr'=>15,
													'ex'=>30,
							),
							'heart2'=>array(
													'n'=>'หัวใจ [2]',
													'pr'=>15,
													'ex'=>30,
							),
							'heart3'=>array(
													'n'=>'หัวใจ [3]',
													'pr'=>15,
													'ex'=>30,
							),
							'heart4'=>array(
													'n'=>'หัวใจ [4]',
													'pr'=>15,
													'ex'=>30,
							),
							'heart5'=>array(
													'n'=>'หัวใจ [5] - Be My Valentine',
													'pr'=>30,
													'ex'=>30,
							),
							'book1'=>array(
													'n'=>'หนังสือ รวมสาวสวยน่ารัก',
													'pr'=>15,
													'ex'=>30,
							),
							'book2'=>array(
													'n'=>'หนังสือ หนุ่มหล่อลล่ำ',
													'pr'=>15,
													'ex'=>30,
							),
							'book3'=>array(
													'n'=>'หนังสือ ชายรักชาย',
													'pr'=>15,
													'ex'=>30,
							),
							'book4'=>array(
													'n'=>'หนังสือ สวยเซ็กส์ซี่',
													'pr'=>15,
													'ex'=>30,
							),
							'book5'=>array(
													'n'=>'หนังสือ การ์ตูนโป๊',
													'pr'=>15,
													'ex'=>30,
							),
							'book6'=>array(
													'n'=>'หนังสือ หญิงรักหญิง',
													'pr'=>15,
													'ex'=>30,
							),
							'book7'=>array(
													'n'=>'หนังสือ ขายหัวเราะ',
													'pr'=>15,
													'ex'=>30,
							),
							'book9'=>array(
													'n'=>'หนังสือ FHM Magazine',
													'pr'=>15,
													'ex'=>30,
							),
							
							
							
							'alcohal1'=>array(
													'n'=>'100 Pipers',
													'pr'=>20,
													'ex'=>30,
							),
							'alcohal2'=>array(
													'n'=>'แสงโสม',
													'pr'=>20,
													'ex'=>30,
							),
							'alcohal3'=>array(
													'n'=>'เหล้าขาว 40 ดีกรี',
													'pr'=>20,
													'ex'=>30,
							),
							'alcohal4'=>array(
													'n'=>'ยาผงยาแผ่นดองเหล้าตราเสือ 11 ตัว',
													'pr'=>20,
													'ex'=>30,
							),
							'alcohal5'=>array(
													'n'=>'เบียร์',
													'pr'=>20,
													'ex'=>30,
							),
							'alcohal6'=>array(
													'n'=>'ไวน์',
													'pr'=>20,
													'ex'=>30,
							),


							'balloon1'=>array(
													'n'=>'ลูกโป่งรูปหัวใจ',
													'pr'=>15,
													'ex'=>30,
							),
							'box1'=>array(
													'n'=>'กล่องของขวัญ1',
													'pr'=>15,
													'ex'=>30,
							),
							'box2'=>array(
													'n'=>'กล่องของขวัญ2',
													'pr'=>15,
													'ex'=>30,
							),
							'box3'=>array(
													'n'=>'กล่องของขวัญ3',
													'pr'=>15,
													'ex'=>30,
							),
							'box4'=>array(
													'n'=>'กล่องของขวัญคู่',
													'pr'=>30,
													'ex'=>30,
							),
							'bear1'=>array(
													'n'=>'ตุ๊กตาหมี',
													'pr'=>15,
													'ex'=>30,
							),
							'dog1'=>array(
													'n'=>'ตุ๊กตาสุนัข',
													'pr'=>15,
													'ex'=>30,
							),
							'bouquet1'=>array(
													'n'=>'ช่อดอกไม้',
													'pr'=>15,
													'ex'=>30,
							),
							'rose1'=>array(
													'n'=>'กุหลาบสีแดง',
													'pr'=>15,
													'ex'=>30,
							),
							'rose2'=>array(
													'n'=>'กุหลาบสีชมพู',
													'pr'=>15,
													'ex'=>30,
							),
							'cake1'=>array(
													'n'=>'เค้กวันเกิด',
													'pr'=>20,
													'ex'=>30,
							),
							'cake2'=>array(
													'n'=>'เค้กช็อกโกแลต',
													'pr'=>20,
													'ex'=>30,
							),
							'candy1'=>array(
													'n'=>'ลูกอมช็อกโกแลต',
													'pr'=>15,
													'ex'=>30,
							),
							'ring1'=>array(
													'n'=>'แหวนคู่',
													'd'=>'แหวนที่บ่งบอกถึงการมีคู่ ถูกจับจอง',
													'pr'=>30,
													'ex'=>30,
							),
							'ring2'=>array(
													'n'=>'แหวน',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							'word1'=>array(
													'n'=>'น่ารัก(กระต่าย)',
													'd'=>'บ่งบอกถึงความน่ารัก :)',
													'pr'=>20,
													'ex'=>30,
							),
							'word2'=>array(
													'n'=>'น่ารัก(ลูกเจี๊ยบ)',
													'd'=>'บ่งบอกถึงความน่ารัก :)',
													'pr'=>20,
													'ex'=>30,
							),
							'animal1'=>array(
													'n'=>'ช้าง',
													'd'=>'',
													'pr'=>15,
													'ex'=>30,
							),
							'animal2'=>array(
													'n'=>'เพนกวิน',
													'd'=>'',
													'pr'=>15,
													'ex'=>30,
							),
							'animal3'=>array(
													'n'=>'ไก่',
													'd'=>'',
													'pr'=>15,
													'ex'=>30,
							),
							'animal4'=>array(
													'n'=>'กระต่าย',
													'd'=>'',
													'pr'=>15,
													'ex'=>30,
							),
							'animal5'=>array(
													'n'=>'หมู',
													'd'=>'',
													'pr'=>15,
													'ex'=>30,
							),
							'tim1'=>array(
													'n'=>'ไอติม(กลัว)',
													'd'=>'',
													'pr'=>10,
													'ex'=>30,
							),
							'tim2'=>array(
													'n'=>'ไอติม(ยิ้ม)',
													'd'=>'',
													'pr'=>10,
													'ex'=>30,
							),
							'tim3'=>array(
													'n'=>'ไอติม(เศร้า)',
													'd'=>'',
													'pr'=>10,
													'ex'=>30,
							),
							'tim4'=>array(
													'n'=>'ไอติม(มึน)',
													'd'=>'',
													'pr'=>10,
													'ex'=>30,
							),
							'tim5'=>array(
													'n'=>'ไอติม(เจ้าเล่ห์)',
													'd'=>'',
													'pr'=>10,
													'ex'=>30,
							),
							'car1'=>array(
													'n'=>'Citroën 2CV',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							'car2'=>array(
													'n'=>'Volkswagen Beetle',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							'car3'=>array(
													'n'=>'Chevrolet Corvette',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							'car4'=>array(
													'n'=>'Crowler',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							'car5'=>array(
													'n'=>'Fiat Topolino',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							'car6'=>array(
													'n'=>'Mini',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							'car7'=>array(
													'n'=>'Volkswagen Type 2',
													'd'=>'',
													'pr'=>20,
													'ex'=>30,
							),
							
							
							'condom1'=>array(
													'n'=>'Durex สตรอเบอร์รี่',
													'd'=>'สำหรับเพิ่มรสชาติและสร้างความสนุกตื่นเต้นแก่กิจกรรมรักของคุณ',
													'pr'=>15,
													'ex'=>30,
													'pl'=>0,
							),
							'condom2'=>array(
													'n'=>'Durex เซนเซชั่น',
													'd'=>'ปุ่มบนถุงยางอนามัยกว่า 500 ปุ่ม ทำให้คุณมั่นใจได้ว่า เร้าใจแน่นอน',
													'pr'=>15,
													'ex'=>30,
													'pl'=>0,
							),
							'condom3'=>array(
													'n'=>'Durex คอนทูรา',
													'd'=>'ถุงยางอนามัยผิวไม่เรียบ เพิ่มสัมผัสพิเศษ',
													'pr'=>15,
													'ex'=>30,
													'pl'=>0,
							),
							'condom4'=>array(
													'n'=>'Durex เฟเธอร์ไลท์',
													'd'=>'ให้ความรู้สึกที่แนบชิดขึ้นระหว่างคุณกับคู่รักด้วยถุงยางอนามัยที่บางที่สุด',
													'pr'=>15,
													'ex'=>30,
													'pl'=>0,
							),
							'condom5'=>array(
													'n'=>'Durex คอมฟอร์ท',
													'd'=>'สำหรับผู้ที่มีขนาดพิเศษโดยแฉพาะ',
													'pr'=>15,
													'ex'=>30,
													'pl'=>0,
							),
							'condom6'=>array(
													'n'=>'Durex คอมฟอร์ท',
													'd'=>'ผิวเรียบ หลากสีสรร ให้ความแปลกใหม่ ในทุกสัมผัสทั้งกลิ่น รส และสีสัน',
													'pr'=>15,
													'ex'=>30,
													'pl'=>0,
							),
							'condom7'=>array(
													'n'=>'Durex เพลย์ มาสสาจ ทูอินวัน',
													'd'=>'ดูเร็กซ์ เพลย์ มาสสาจ ทูอินวัน เป็นทั้งเจลหล่อลื่นและนวดตัว',
													'pr'=>15,
													'ex'=>30,
													'pl'=>0,
							),
							
							'medal1'=>array(
													'n'=>'เหรียญสมาชิกแนะนำ',
													'd'=>'เหรียญที่ถูกมอบให้กับสมาชิกพิเศษ',
													'pr'=>1,
													'ex'=>150,
							),
							'police1'=>array(
													'n'=>'หมวกตำรวจอันทรงเกียรติ',
													'd'=>'หมวกที่เป็นสัญลักษณ์ถึงผู้ดูแลช่วยเหลือสมาชิกอื่นๆภายใน boxza.com',
													'pr'=>1,
													'ex'=>150,
							)
);

# Initialization Application
_::load('bin');


$db=_::db();

$time=time();

foreach($gift as $k=>$v)
{
	$v['_id']=$k;
	$time--;
	$v['u']=1;
	if(!isset($v['pl']))
	{
		$v['pl']=1;	
	}
	$v['da']=new MongoDate($time);
	//$db->_command('gift_shop','insert',array($v,array('safe'=>false)));
}
?>