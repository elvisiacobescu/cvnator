<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
$nrexperiente="";
//conect to the data baze
$arr=array();
$userid=$_COOKIE["cookie_user_id"];

$conn = new mysqli($servername, $username, $password,$dbname);



$getid=sprintf("SELECT * FROM educatie where user_id=".$userid."and entry_id=");
$rezult= $conn ->query($getid);
if ($rezult->num_rows>0){
  $nrexperiente=$rezult->num_rows;
  for ($i=1;$i<=2;$i++)
  {

while($row = $rezult->fetch_assoc()) {

  //aici trebuie facut un array
  $arr= array('nr' => $i,'entry_id' => $row["entry_id"] ,'start' => $row["start"],'stop' => $row["stop"],'nume_institutie' => $row["nume_institutie"],'oras' => $row["oras"],'profil' => $row["profil"]);
 		} //while
	} //for
}
echo json_encode($arr);

?>