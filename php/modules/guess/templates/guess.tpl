<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#">
<head>
<meta charset="UTF-8">
<title><?php echo _::$meta['title']?></title>
<meta name="Description" content="<?php echo _::$meta['description']?>">
<meta name="Keywords" content="<?php echo _::$meta['keywords']?>">
<meta name="Copyright" content="boxza.com">
<meta name="google-site-verification" content="hSfRFCcDswWyu5qloNfX7fM9e7-7ok-Al6KFIyVphJA" />
<meta property="fb:app_id" content="<?php echo _::$config['social']['facebook']['appid']?>">
<?php if(_::$meta['google']):?>
<link rel="author" href="https://plus.google.com/<?php echo _::$meta['google']['id']?>/posts"/>
<?php endif?>
<meta property="og:type" content="<?php echo _::$meta['type']?_::$meta['type']:'website'?>">
<meta property="og:title" content="<?php echo _::$meta['title']?>">
<link rel="image_src" type="image/<?php echo _::$meta['image']?'jpeg':'png'?>" href="<?php echo _::$meta['image']?_::$meta['image']:'http://s0.boxza.com/static/images/global/logo.png'?>">
<meta property="og:image" content="<?php echo _::$meta['image']?_::$meta['image']:'http://s0.boxza.com/static/images/global/logo.png'?>">
<meta property="og:url" content="<?php echo URI?>">
<meta property="og:site_name" content="เกมทายใจ">
<meta property="og:description" content="<?php echo _::$meta['description']?>">
<meta property="og:locale" content="th_TH">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<link rel="stylesheet" type="text/css" href="http://s0.boxza.com/static/js/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="http://s0.boxza.com/static/css/boxza-bootstrap.css">   
<link rel="stylesheet" type="text/css" href="http://s0.boxza.com/static/css/guess.css">
<link rel="icon" type="image/x-icon" href="http://<?php echo HOST?>/favicon.ico">
<?php if(_::$meta['rss']):?>
<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php echo _::$meta['rss']?>">
<?php endif?>
<script type="text/javascript" src="http://s0.boxza.com/static/js/jquery/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="http://s0.boxza.com/static/js/boxza.js"></script>
<script type="text/javascript" src="http://s0.boxza.com/static/js/bootstrap/js/bootstrap.min.js"></script>
<?php if(_::$my):?><script type="text/javascript">_.my=<?php echo json_encode(array('_id'=>_::$my['_id'],
																																									'name'=>_::$my['name'],
																																									'img'=>_::$my['img'],									
																																									'fb'=>(isset(_::$my['sc']['fb']['id'])?array('id'=>_::$my['sc']['fb']['id']):''),
																																									'tw'=>(isset(_::$my['sc']['tw']['id'])?array('id'=>_::$my['sc']['tw']['id']):''),
																																									'ct'=>array(
																																															'fr'=>array(),
																																															'fq'=>array(),
																																															'ig'=>array(),
																																															'bl'=>array(),
																																									)
																																						))?>;<?php if(_::$my['am']):?>_.my.am=<?php echo _::$my['am']?><?php endif?>;</script><?php endif?>

<!--[if lt IE 9]>
<script src="http://s0.boxza.com/static/js/html5shiv/html5shiv.js"></script>
<![endif]-->
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type="text/javascript">
var uid=0,token='',_za={},_clike={},_cur,_me;
function checklogin()
{
	FB.getLoginStatus(function(r)
	{
		if(r.status=='connected')
		{
			var ch,scope=true;token=r.authResponse.accessToken;uid=r.authResponse.userID;
			FB.api('/me/permissions', function (r)
			{
				console.log(r.data);
				var perm=["publish_stream"];
				for(ch in perm)
				{
					if(!r.data[0][perm[ch]])
					{
						scope=false;break;
					}
				};
				if(!scope)
				{
					<?php if(!$_GET['code']):?>
					top.location='https://graph.facebook.com/oauth/authorize?client_id=<?php echo _::$config['social']['facebook']['appid']?>&redirect_uri=<?php echo urlencode(URI)?>&scope=publish_stream';
					<?php else:?>
					FB.login(function(r){token=r.authResponse.accessToken;},{display:'iframe',scope: 'publish_stream'});
					<?php endif?>
				}
			});
		}
		else
		{
			<?php if(!$_GET['code']):?>
			top.location='https://graph.facebook.com/oauth/authorize?client_id=<?php echo _::$config['social']['facebook']['appid']?>&redirect_uri=<?php echo urlencode(URI)?>&scope=publish_stream';
			<?php endif?>
		}
	});
}

</script>
<script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "152d016f-981c-46da-b124-eaad34bdfa3b", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>
</head>
<body>
<?php echo _::$content?>
<div id="fb-root"></div>
<script>
window.fbAsyncInit = function() {FB.init({appId:'<?php echo _::$config['social']['facebook']['appid']?>', cookie:true, status:true, xfbml:true });checklogin();};
(function() {
    var e = document.createElement('script');
    e.src = 'https://connect.facebook.net/en_US/all.js';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
  }());
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-31362918-1', 'boxza.com');
  ga('send', 'pageview');
</script>
<?php
if(count(_::$yengo)):
	foreach(_::$yengo as $v):
		echo '<script type="text/javascript" src="http://www.yengo.com/show.cgi?adp='.$v.'&div=ads_yengo_'.$v.'"></script>';
	endforeach;
endif
?>
</body>
</html>