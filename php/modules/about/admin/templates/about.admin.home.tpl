<style>
.table .i{width:50px; line-height:0px; padding:3px;}
.table .t{width:60px; font-size:18px; color:#666; text-align:center; vertical-align:middle}
.table strong{display:block; font-size:14px; height:26px; line-height:26px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
.table .d{padding:5px 5px 0px 5px}
.table .d p{clear:both}
.table .a{ width:115px; text-align:right;}
.tbpage{padding:5px; text-align:right}
.tbpage .pager{text-align:right}
.table .dropdown-menu{left:auto; right:0px; min-width:100px;}
.table .btn-group{margin-top:8px;}
</style>
<script>
function cdel(i){_.box.confirm({title:'ลบประกาศ',detail:'คุณต้องการลบข่าวเรื่องนี้หรือไม่',click:function(){_.ajax.gourl('/admin','delabout',i)}});}
</script>


<div id="newabout" class="gbox">
<form method="post" onSubmit="_.ajax.gourl('<?php echo URL?>','newabout',this);_.box.close();return false;">
<div class="gbox_header">เพิ่มข้อมูลใหม่</div>
<div class="gbox_content">
<table cellpadding="5" cellspacing="5" border="0" align="center" width="400">
<tr><td align="right">หัวข้อ:</td><td align="left"><input type="text" name="title" size="50" class="tbox" required> * ต้องใส่ให้ถูกต้อง</td></tr>
</table>
<div style="color:#c00; width:390px; margin:5px;">*** ต้องใส่ให้ถูกต้องทุกครั้ง เพื่อตรวจสอบข้อมูลซ้ำ, และใช้สำหรับการสร้าง url ของหน้าบุคคลนั้นด้วยชื่อ-นามสกุล ซึ่งไม่สามารถแก้ไขได้ ***</div>
</div>
<div class="gbox_footer"><input type="submit" class="button blue" value=" ถัดไป "> <input type="button" class="button" value=" ยกเลิก " onClick="_.box.close()"></div>
</form>
</div>

<div>
<ul class="breadcrumb" style="margin-bottom:5px;">
  <li><a href="/" title="แหล่งความรู้"><i class="icon-home"></i> แหล่งความรู้</a></li>
	<span class="divider">&raquo;</span> 
   <li><a href="/admin">แก้ไขข้อมูบ</a></li>
   <li class="pull-right"><a href="javascript:;" onClick="_.box.open('#newabout')"><i class="icon-plus icon-black"></i> เพิ่มหัวข้อใหม่</a></li>
</ul>


<table class="table">
<tr><th>รูปภาพ</th><!--th>ต้องการ</th--><th>รายละเอียด</th><th class="a"></th></tr>
<?php for($i=0;$i<count($this->about);$i++):?>
<tr class="l<?php echo $i%2?>">
<td class="i"><a href="<?php echo $l?>" target="_blank"><img src="http://s3.boxza.com/about/<?php echo $this->about[$i]['fd']?>/s.jpg" style="width:55px;"></a></td>
<td class="d">
<a href="http://about.boxza.com/<?php echo $this->about[$i]['lk']?$this->about[$i]['lk']:$this->about[$i]['_id']?>" target="_blank"><?php echo $this->about[$i]['t']?></a><br>
<?php $u=$this->user->profile($this->about[$i]['u']);?>
โดย: <a href="http://boxza.com/<?php echo $u['link']?>" target="_blank"><?php echo $u['name']?></a>, โพสเมื่อ: <?php echo time::show($this->about[$i]['da'],'datetime',true)?>
</td>
<td class="a">
<a href="/admin/<?php echo $this->about[$i]['_id']?>" class="btn btn-mini"><i class="icon-wrench"></i> แก้ไข</a>
<a href="javascript:;" onClick="cdel(<?php echo $this->about[$i]['_id']?>)" class="btn btn-mini"><i class="icon-remove"></i> ลบ</a>
</td>
</tr>
<?php endfor?>
<?php if(!$this->count):?>
<tr><td colspan="3" style="text-align:center; vertical-align:middle; height:100px; border:1px solid #f7f7f7">ไม่มีข้อมูล</td></tr>
<?php endif?>
</table>
<div align="center"><?php echo $this->pager?></div>
</div>
