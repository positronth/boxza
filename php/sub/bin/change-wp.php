<?php


require_once('../../handlers/boxza.php');

# Initialization Application
_::load('bin');


$db=_::db();


$d='games-for-free-online.themarkettingplan.com
games-for-free.tomyseotubes.com
games-download-free.myseovdoes.com
game-online-free.myseoutubes.com
game-free-online.seotowow.com
game-free.seotocome.info
fun-free-games.theseotube.info
free-video-games.seoinbuilder.com
free-solitaire-games.thesehostreviews.com
free-shooting-games.seosbnes.info
free-racing-games.seosabye.info
free-play-games.seointomorrow.com
free-pc-games.sbntoseo.info
free-onlines-games.theseoentertainment.com
free-online-puzzle-games.picturesbybuddhas.info
free-online-game.palunginservices.com
free-internet-games.markettinginprice.info
free-hidden-object-games.markettingutube.info
free-google-games.usaseohostingview.com
free-games-to-download.andravadamahayanas.com
free-games-online.themarkettingathome.info
free-games-free-games.inmarkettingnews.info
free-games-free.buddha-onteaching.com
free-games-for-girls.themarkettingprice.info
free-games-download.themarkettingmix.info
free-games.markettinginsbn.com
free-game-online.buddhisminbeginner.info
free-game.markettinginlove.info
free-free-games.designersbn.info
free-flash-games.ukseohosteviews.info
free-computer-games.webdesign2017.info
free-arcade-games.productssaz.info
download-games-free.fashioninwow.com
best-free-games.theproductshome.info
all-free-games.palunginservices.info
play-music-online.productsmakers.info
online-music-player.themarkettingweb.com
online-music.inproductskey.info
music-videos-online.productinlove.info
music-player-online.productofssbn.com
music-online.productsingood.info
listen-to-music-online.fashioninsbn.info
listen-to-music-free-online.sportintube365.com
listen-to-free-online-music.fashionongood.info
listen-to-free-music-online.fashionsocute.info
listen-music-online.europeseohostviews.com
listen-free-music-online.sportinsbn.info
download-music-online.myservicetoyou.com
play-music-online-free.sportonkey.info
online-free-music.sportonsun.info
music-online-free.palunginseo.com
music-free-online.healthonsbn.info
free-radio-online.healthinseo.info
free-online-rpg.seoinfashion.com
free-online-music-player.healthindee.info
free-online-music-downloads.mydesign2017.com
free-online-music.seoonhealthy.info
free-online-movies.servicewithsbn.info
free-online.serviceonwow.info
free-music-videos-online.servicesutube.info
free-music-online.productsgrouper.com
free-movies-online.serviceondee.info
download-free-music-online.reviewonstree.com
youtube-music-videos.serviceathome.info
watch-music-videos.healthutoo.com
video-music.servicein2012.info
music-videos-for-free.designinbrief.com
music-videos.businessincool.info
music-video.businessonstar.com
free-music-videos.businessonsbn.info
country-music-videos.seoonwow.com
where-to-download-free-music.businessonwow.info
music-free-download.serviceonsun.com
music-downloads-free.businessonsky.info
music-downloads-for-free.businessandsports.info
music-download-free.thebuddhisminsiam.com
free-music-downloads-legally.businesson2024.info
free-music-downloads.sehostingreviews.info
free-music-downloading.reviewstosun.com
free-music-downloader.reviewstocome.info
free-music-download.reviewssbns.info
free-legal-music-downloads.sportinwow.com
free-downloads-music.reviewonsface.info
free-downloadable-music.reviewertogo.info
free-download-music.multisiteblogsnetworks.com
downloading-free-music.reviewsonstar.info
download-music-free.webdesignon2021.com
download-music-for-free.seohostreviews777.info
download-free-music-to-computer.goodonwandays.com
download-free-music.seonetoworkreviews.info
mp3-free-downloads.palungtodesign.info
mp3-free-download.sportonseo.com
mp3-downloads-free.palungjiaseo.info
mp3-download-free.palungtobusiness.info
free-mp3-downloads.buddhismandhistory.com
free-mp3-download.usaseohostinreviews.info
free-download-mp3.serviceontube.com
download-mp3-free.spicyinvegan.info
download-free-mp3.apartmentinsvc.info
free-song-downloads.thepalungdesign.com';

$e=explode("\n",$d);

for($i=0;$i<count($e);$i++)
{
	$db->update('wpbg_domain',array('_id'=>$i+1),array('$set'=>array('d'=>'http://'.trim($e[$i]))));
	echo ($i+1).' - '.$e[$i].'<br>';
}
?>