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
$entry_id =0;
//verificam daca entry_id exista
$getid=sprintf("SELECT count(entry_id) as daca_sunt  FROM educatie where user_id=".$userid);
$rezult= $conn ->query($getid);

if ($rezult->num_rows>0){
if($row = $rezult->fetch_assoc()) {
 	if($row["daca_sunt"]>0){
 			//daca exista entry_id>0
//asignam entry_id max
$getid=sprintf("SELECT max(entry_id) as max_entry  FROM educatie where user_id=".$userid);
$rezult= $conn ->query($getid);
$entry_id =0;
if ($rezult->num_rows>0){
if($row = $rezult->fetch_assoc()) {
 	
  $entry_id = $row["max_entry"]+1;

 }
}

 }
 else $entry_id =0;
	}
}


$json = json_decode($obj, true);// decode the JSON into an associative array
$start=$json["start"];
$stop=$json["stop"];
$nume_institutie=$json["nume_institutie"];
$oras=$json["oras"];
$profil=$json["profil"];
$diploma=$json["diploma"];
ECHO ($entry_id);
$sql=sprintf(
	"INSERT INTO educatie 
	(user_id,entry_id,start,stop,nume_institutie,oras,profil,diploma)
VALUES (
'".$userid."'"."
,"."'".$entry_id."'"."
,'".$start."'"."
,"."'".$stop."'"."
,"."'".$nume_institutie."'"."
,"."'".$oras."'"."
,"."'".$profil."'"."
,"."'".$diploma."')"
	);


if ($conn->query($sql) === TRUE) {
		echo "succes";

} else {
    echo "erruare: " . $conn->error;
}

?>