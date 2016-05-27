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



	$entry_id=$json["entry_id"];
	$skill=$json["skill"];
	if($sql=$conn->prepare(
	"UPDATE abilitati SET  skill = ?
  where user_id= ? AND entry_id= ? ")
	)
	{

$sql->bind_param('sii',$skill, $userid,$entry_id);
$sql->execute() ;

echo 'succes';
} 
else echo 'eroare';



?>