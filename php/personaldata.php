<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
//conect to the data baze
$arr=array();
$userid=$_COOKIE["cookie_user_id"];
$conn = new mysqli($servername, $username, $password,$dbname);

$getid=sprintf("SELECT * FROM date_personale where user_id=".$userid);
$rezult= $conn ->query($getid);


if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
 
  $arr = array('nume' => $row["nume"] ,'prenume' => $row["prenume"],'sex' => $row["sex"],'varsta' => $row["varsta"],'nr_telefon' => $row["nr_telefon"],'cale_poza' => $row["cale_poza"],'adresa' => $row["adresa"],'oras'
  => $row["oras"],'salariu_dorit' => $row["salariu_dorit"],'tip_job' => $row["tip_job"],'nivel_cariera' => $row["nivel_cariera"],'domeniu' => $row["domeniu"],'post_dorit' => $row["post_dorit"],'relocare' => $row["relocare"],
  'obiectiv' => $row["obiectiv"],'email' => $row["email"] );
 }
}
echo json_encode($arr);

?>
