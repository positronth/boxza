<?php

_::$meta['title'] = 'เกมส์แฟลช เกมส์ทําอาหาร เกมส์แต่งตัว เกมส์จับคู่ เกมส์ต่อสู้ เกมส์รถแข่ง เกมส์แข่งรถ เกมส์เต้น และเกมส์อื่นๆอีกมากมาย';
_::$meta['description'] = 'เล่นเกม เกมส์แฟลช เกมส์ทําอาหาร เกมส์แต่งตัว, เกมส์จับคู่ เกมส์ต่อสู้ เกมส์รถแข่ง เกมส์แข่งรถ เกมส์เต้น และเกมส์อื่นๆอีกมากมาย ฟรี';
_::$meta['keywords'] = 'เกมส์, เกม, เกมส์ออนไลน์, เกมส์ทําอาหาร, เกมส์แต่งตัว เกมส์จับคู่, เกมส์ต่อสู้, เกมส์รถแข่ง, เกมส์แข่งรถ, เกมส์เต้น';

list($id,$link)=explode('-',_::$path[0],2);

if(is_numeric($id))
{
	require_once(__DIR__.'/game.flash.view.php');
}
elseif(_::$path[0])
{
	require_once(__DIR__.'/game.flash.list.php');
}
else
{
	require_once(__DIR__.'/game.flash.home.php');
}

?>