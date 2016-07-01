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

$categorie=$json["categorie"];
$entry_id=$json["entry_id"];
	if($sql=$conn->prepare(
	"UPDATE permis SET 
	categorie =? where user_id=? AND entry_id=? ")
	)
	{

$sql->bind_param('sii',$categorie,$userid,$entry_id);
$sql->execute() ;

echo 'succes';
} 
else echo "erruare: " . $conn->error;

// $getid=sprintf("UPDATE permis SET 
// 	categorie ="."'".$json["categorie"]."'".
// " where user_id=".$userid. " AND entry_id='".$json["entry_id"]."' ");
// $rezult= $conn ->query($getid);


// if ($conn->query($getid) === TRUE) {
// 		echo "succes";

// } else {
//     echo "erruare: " . $conn->error;
// }



?>