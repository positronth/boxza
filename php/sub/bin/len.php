<?php

$str =' ลองงงงงงงงงงงงไ็วยยยยยยยยยยย ้้้้้้้้้้้้้้้้้้้้้้้';

  preg_match_all('!(.)\\1*!', $str, $m);


print_r($m);  
 ?>