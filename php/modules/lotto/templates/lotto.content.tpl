<?php require(ROOT.'modules/www/system/www.system.header.php')?>

<div class="container">
    <hgroup class="head-logo">
        <h1><a href="/" title="หวย ตรวจหวย">หวย ตรวจหวย</a></h1>
        <h2>หวย ตรวจหวย เลขเด็ด ตรวจสลากกินแบ่งรัฐบาล สลากกินแบ่ง หวยหุ้น</h2>
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
        <nav class="navbar navbar-inverse hbar">
            <div class="navbar-inner">
                <div class="container">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                    <a class="brand" href="/" title="หวย ตรวจหวย">ตรวจหวย</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav">
                            <li><a href="/live" title="ถ่ายทอดหวย ตรวจหวยออนไลน์ ถ่ายทอดหวนออนไลน์"> ถ่ายทอดหวย</a></li>
                            <li><a href="/list" title="ตรวจหวยย้อนหลัง"> ตรวจหวยย้อนหลัง</a></li>
                            <li><a href="/set" title="หวยหุ้น หวยหุ้นไทย"> หวยหุ้น</a></li>
                            <li><a href="/lucky" title="ข่าวหวย เลขเด็ดหวย เลขเด็ดหวยหุ้น"> เลขเด็ด</a></li>
                            <li><a href="/forum" title="กระทู้สนทนาเกี่ยวกับหวย"><i class="ic5"></i> กระทู้หวย</a></li>
                            <?php if(_::$my && _::$my['am']):?>
                            <li class="pull-right"><a href="/admin">ระบบจัดการ(Admin)</a></li>
                            <?php endif?>
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
