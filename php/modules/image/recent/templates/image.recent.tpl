<style>
.recent{margin:5px 0px 0px 0px;}
.recent li{line-height:0px;margin-bottom:3px;text-align:center; padding:5px 0px; border:1px solid #f0f0f0; overflow:hidden;}
.recent li img{max-width:120px;}
</style>


<div style="padding:5px 0px 5px 5px;">
<h2 style="padding:5px; margin:0px 0px 5px; border-bottom:1px solid #f0f0f0;">รูปภาพทั้งหมด - ล่าสุด</h2>
<div style="padding:5px; border:1px solid #f0f0f0;">image.boxza.com - เว็บฝากรูปภาพฟรี ให้คุณฝากรูปฟรีสูงสุด 10MB ต่อรูปฟรี!! ไม่มีวันหมดอายุ</div>

<div style="margin:5px 0px"><?php require(HANDLERS.'ads/ads.yengo.body2.php');?></div>

<ul class="recent thumbnails row-count-4">
<?php for($i=0;$i<count($this->image);$i++):?>
<li class="span3">
<a href="/v/<?php echo $this->image[$i]['f'].'.'.$this->image[$i]['ty']?>" target="_blank"><img src="http://i.boxza.com/<?php echo $this->image[$i]['fd'].'/s.'.$this->image[$i]['ty']?>"></a>
</li>
<?php endfor?>
</ul>

</div>