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
	
	$start=$json["start"];
	$stop=$json["start"];
	$titlu=$json["titlu"];
$descriere=$json["descriere"];
	if($sql=$conn->prepare(
	"UPDATE alt_info SET start= ? , stop = ? , titlu= ? , descriere= ? where user_id= ? AND entry_id= ? ")
	)
	{

$sql->bind_param('ssssii',$start,$stop,$titlu,$descriere, $userid,$entry_id);
$sql->execute() ;

echo 'reusit';
} 
else echo "erruare: " . $conn->error;


?>
