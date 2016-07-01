<?php
$obj = $_GET['obj'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
//conect to the data baze
$arr=array();

$userid=$_COOKIE["cookie_user_id"];
$conn = new mysqli($servername, $username, $password,$dbname);

$json = json_decode($obj, true);// decode the JSON into an associative array


$limba=$json["limba"];
$nivel=$json["nivel"];
$entry_id=$json["entry_id"];
	if($sql=$conn->prepare(
	"UPDATE limbi_straine SET limba =? , nivel=? where user_id=? AND entry_id=? ")
	)
	{

$sql->bind_param('siii',$limba,$nivel,$userid,$entry_id);
$sql->execute() ;

echo 'succes';
} 
else echo "erruare: " . $conn->error;

?>