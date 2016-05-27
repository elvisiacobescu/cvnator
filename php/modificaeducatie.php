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

$start=$json["start"];
$stop=$json["stop"];
$nume_institutie=$json["nume_institutie"];
$oras=$json["oras"];
$profil=$json["profil"];
$diploma=$json["diploma"];
$entry_id=$json["entry_id"];
	if($sql=$conn->prepare(
	"UPDATE educatie SET 
 	start =? , stop=? , nume_institutie= ? , oras= ? , profil= ? , diploma=? where user_id= ? AND entry_id= ? " )
	)
	{

$sql->bind_param('ssssssii',$start,$stop,$nume_institutie,$oras, $profil,$diploma,$userid,$entry_id);
$sql->execute() ;

echo 'succes';
} 
else echo "erruare: " . $conn->error;


?>