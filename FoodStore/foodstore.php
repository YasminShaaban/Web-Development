<?php
#generating xml file , this will communicate with
#the js file
 header('Content-Type:text/xml');
 echo'<?xml  version="1.0" encoding="UTF-8" standalone="yes" ?>';
 echo'<response>'; #beginning xml tag
 $food=$_GET['food'];
 $foodArray=array('tuna','bacon','beef','loaf','ham');
 if(in_array($food, $foodArray))
    echo 'We do have'.$food.'!';
 elseif($food=='')
    echo ' Enter a food ';
 else
     echo 'sorry we dont have '.$food.'!';
 echo'</response>'; #end xml tag

?>