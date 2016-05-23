<?php
$obj = $_GET['obj'];
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


$getid=sprintf("UPDATE permis SET 
	categorie ="."'".$json["categorie"]."'".
" where user_id=".$userid. " AND entry_id='".$json["entry_id"]."' ");
$rezult= $conn ->query($getid);


if ($conn->query($getid) === TRUE) {
		echo "succes";

} else {
    echo "erruare: " . $conn->error;
}



?>