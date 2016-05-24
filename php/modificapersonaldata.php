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

// inseram daca nu exista

//verificam daca entry_id exista
$getid=sprintf("SELECT count(nume) as daca_sunt  FROM date_personale where user_id=".$userid);
$rezult= $conn ->query($getid);

if ($rezult->num_rows>0){
if($row = $rezult->fetch_assoc()) {
 	if($row["daca_sunt"]=0){
 			//daca nu exista , inseram in baza de date

$json = json_decode($obj, true);// decode the JSON into an associative array

$sql=sprintf(
	"INSERT INTO alt_info 
	(user_id,nume,prenume,sex,varsta,nr_telefon,email,cale_poza,adresa,oras,salariu_dorit,tip_job,nivel_cariera,domeniu,post_dorit,relocare,obiectiv)
VALUES (
'".$userid."'"."
,"."'".$json["nume"]."'"."
,'".$json["prenume"]."'"."
,"."'".$json["sex"]."'"."
,"."'".$json["varsta"]."'"."
,"."'".$json["nr_telefon"]."'"."
,'".$json["email"]."'"."
,"."'".$json["cale_poza"]."'"."
,'".$json["adresa"]."'"."
,"."'".$json["oras"]."'"."
,"."'".$json["salariu_dorit"]."'"."
,"."'".$json["tip_job"]."'"."
,'".$json["nivel_cariera"]."'"."
,"."'".$json["domeniu"]."'"."
,"."'".$json["post_dorit"]."'"."
,"."'".$json["relocare"]."'"."
,"."'".$json["obiectiv"]."')"
	);



 }
 else 
// daca exista, facem update
{
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
}
//$rezult= $conn ->query($getid);


	}
}
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
