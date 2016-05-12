<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
$nrexperiente="";
//conect to the data baze
$arr=array();
$userid=$_COOKIE["cookie_user_id"];

$conn = new mysqli($servername, $username, $password,$dbname);

	$json = json_decode($obj, true);// decode the JSON into an associative array
$getid=sprintf("UPDATE altele SET start="." '".$json["start"]."' "." AND stop ="." '".$json["stop"]."' "." AND titlu="." '".$json["titlu"]."' "." AND descriere="." '".$json["descriere"]."' where user_id=".$userid." AND entry_id=".$json["entry_id"]."' ");
$rezult= $conn ->query($getid);

if ($rezult->mysql_affected_rows()>0)

 echo 'succes';
else echo 'eroare';



?>