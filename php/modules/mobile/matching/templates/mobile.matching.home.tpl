
<div id="waiting"><div>กรุณารอซักครู่..</div></div>

<ul id="menu">
<li id="menu_fb"></li>
<li id="menu_game"><a href="/matching/game">เริ่มเกม</a></li>
<li id="menu_score"><a href="/matching/score">คะแนนสะสม</a></li>
<li><a href="javascript:;" onclick="relogin()">เปลี่ยนบัญชี Facebook</a></li>
<li><a href="/matching/top">อันดับผู้เล่น</a></li>
<li><a href="/matching/help">วิธีการเล่น</a></li>
<li><a href="/matching/apps">แอพแนะนำ</a></li>
</ul>


<script>
function onlogged()
{
	$('#waiting_text').html('กำลังดึงข้อมูล Facebook');
	FB.api('/me', function(response) {
 		_.ajax.gourl('<?php echo URL?>','getmenu',response);
		$('#waiting_text').html('กำลังดึงข้อมูลสมาชิก');
        //response.name       - User Full name
        //response.link       - User Facebook URL
        //response.username   - User name
        //response.id         - id
        //response.email      - User email
 
        });
}
function showmenu(u)
{
	$('#menu_game>a').attr('href','/matching/game/'+u._id);
	$('#menu_score>a').attr('href','/matching/score/'+u._id);
 	$('#menu_fb').html('<img src="http://graph.facebook.com/'+u.fb+'/picture?type=square"><div>'+u.name+'</div><p>เลเวล: '+u.lv+'</p>');
	$('#waiting').css('display','none');
	$('#menu').css('display','block');
}
</script>