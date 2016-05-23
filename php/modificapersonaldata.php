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
$sql=sprintf("UPDATE date_personale SET nume="."'".$json["nume"]."'".
" , prenume ="."'".$json["prenume"]."'".
" , sex="."'".$json["sex"]."'".
" , varsta="."'".$json["varsta"]."'".
" , nr_telefon="."'".$json["nr_telefon"]."'".
" , adresa="."'".$json["adresa"]."'".
" , oras="."'".$json["oras"]."'".
" , salariu_dorit="."'".$json["salariu_dorit"]."'".
" , tip_job="."'".$json["tip_job"]."'".
" , nivel_cariera="."'".$json["nivel_cariera"]."'".
" , domeniu="."'".$json["domeniu"]."'".
" , post_dorit="."'".$json["post_dorit"]."'".
" , relocare="."'".$json["relocare"]."'".
" , obiectiv="."'".$json["obiectiv"]."'".
" , email="."'".$json["email"]."'".
" where user_id=".$userid);
//$rezult= $conn ->query($getid);

if ($conn->query($sql) === TRUE) {
		echo "succes";
//		echo "succes".$json["nume"];
} else {
    echo "erruare: " . $conn->error;
}



// echo "succes";
//aici nu e bine deloc ce e comentat dedesupt
// if ($rezult->mysql_affected_rows()>0)
//
//  echo 'succes';
// else echo 'eroare';




?>
