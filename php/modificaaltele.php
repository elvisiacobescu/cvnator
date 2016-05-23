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
$sql=sprintf("UPDATE altele SET start="."'".$json["start"]."' "." , stop ="." '".$json["stop"]."' "." , titlu="." '".$json["titlu"]."' "." , descriere="." '".$json["descriere"]."' where user_id=".$userid." , entry_id=".$json["entry_id"]."' ");
$rezult= $conn ->query($sql);

if ($conn->query($sql) === TRUE) {
		echo "succes";

} else {
    echo "erruare: " . $conn->error;
}

?>

