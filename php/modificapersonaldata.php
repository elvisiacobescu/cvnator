<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
//conect to the data baze
$arr=array();
$userid=$_COOKIE["cookie_user_id"];
$conn = new mysqli($servername, $username, $password,$dbname);
	$json = json_decode($obj, true);// decode the JSON into an associative array

$getid=sprintf("UPDATE date_personale SET nume="." '".$json["nume"]."' "." AND prenume ="." '".$json["prenume"]."' "." AND sex="." '".$json["sex"]."' "." AND varsta="." '".$json["varsta"]."' "." AND nr_telefon="." '".$json["nr_telefon"]."' "." AND cale_poza="." '".$json["cale_poza"]."' "." AND adresa="." '".$json["adresa"]."' "." AND oras="." '".$json["oras"]."' "." AND salariu_dorit="." '".$json["salariu_dorit"]."' "." AND tip_job="." '".$json["tip_job"]."' "." AND nivel_cariera="." '".$json["nivel_cariera"]."' "." AND domeniu="." '".$json["domeniu"]."' "." AND post_dorit="." '".$json["post_dorit"]."' "." AND relocare="." '".$json["relocare"]."' "." AND obiectiv="." '".$json["obiectiv"]."' "." AND email="." '".$json["email"]."' "." where user_id=".$userid);
$rezult= $conn ->query($getid);


if ($rezult->num_rows>0)

 echo 'succes';
else echo 'eroare';
 



?>