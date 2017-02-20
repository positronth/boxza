<?php require(ROOT.'modules/www/system/www.system.header.php')?>
<div class="container">
	<hgroup class="head-logo">
    	<h1><a href="/" title="เกาหลี">เกาหลี</a></h1>
        <h2>เกาหลี ซีรีย์เกาหลี ดาราเกาหลี นักร้องเกาหลี เพลงเกาหลี</h2>
        <!-- BEGIN - BANNER : A -->
        <?php if($this->_banner['a']):?>
        <div>
            <ul class="_banner _banner-once">
                <?php foreach($this->_banner['a'] as $v):?>
                <li><?php echo $v?></li>
                <?php endforeach?>
            </ul>
        </div>
        <?php endif?>
        <!-- END - BANNER : A -->
    </hgroup>
    <div class="_ct _ct-<?php echo MODULE?>">
        <nav class="navbar hbar">
            <div class="navbar-inner">
                <div class="container">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                    <a class="brand" href="/" title="เกาหลี">เกาหลี</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav">
                            <li><a href="/news" title="ข่าวเกาหลี ข่าวบันเทิงเกาหลี"><span class="kic kic1"></span> ข่าวบันเทิงเกาหลี</a></li>
                            <li><a href="/series" title="ซีรีย์เกาหลี"><span class="kic kic2"></span> ซีรีย์เกาหลี</a></li>
                            <li><a href="/video" title="คลิปเกาหลี"><span class="kic kic3"></span> คลิปเกาหลี</a></li>
                            <li><a href="/photo" title="รูปภาพ"><span class="kic kic4"></span> รูปภาพ</a></li>
                            <li><a href="/music" title="เนื้อเพลง"><span class="kic kic5"></span> เนื้อเพลง</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="row-fluid">
        <?php if(defined('HIDE_SIDEBAR')):?>
        <?php echo _::$content?>
        <?php else:?>
            <article class="span8 col-content"> <?php echo _::$content?> </article>
            <aside class="span4 col-side">
            <!--nipa-->
            
                <div class="fb-like-box" data-href="https://www.facebook.com/BoxzaNetwork" data-width="320" data-height="205" data-show-faces="true" data-stream="false" data-header="false" data-show-border="false" style="overflow:hidden; margin:0px 0px 5px 5px;"></div>
                
                <!-- BEGIN - BANNER : C -->
                <?php if($this->_banner['c']):?>
                <div style="overflow:hidden; margin:5px 0px; text-align:center">
                    <ul class="_banner _banner-once">
                        <?php foreach($this->_banner['c'] as $_bn):?>
                        <li><?php echo $_bn?></li>
                        <?php endforeach?>
                    </ul>
                </div>
                <?php endif?>
                <!-- END - BANNER : C -->
                
               <?php echo $this->service?> 
           	</aside>
        <?php endif?>
        </div>
        <?php require(ROOT.'modules/www/system/www.system.footer.php')?>
    </div>
</div>
