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
$sql=sprintf("UPDATE educatie SET 
	start ="."'".$json["start"]."'".
" , stop="."'".$json["stop"]."'".
" , nume_institutie="."'".$json["nume_institutie"]."'".
" , oras="."'".$json["oras"]."'".
" , profil="."'".$json["profil"]."'".
" , diploma="."'".$json["diploma"]."'".
" where user_id=".$userid. " AND entry_id='".$json["entry_id"]."' ");

if ($conn->query($sql) === TRUE) {
		echo "succes";

} else {
    echo "erruare: " . $conn->error;
}

?>