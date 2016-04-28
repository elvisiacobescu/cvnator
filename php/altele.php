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

$getid=sprintf("SELECT * FROM alt_info where user_id=".$userid);
$rezult= $conn ->query($getid);


if ($rezult->num_rows>0){
  $nrexperiente=$rezult->num_rows;
while($row = $rezult->fetch_assoc()) {

  //aici trebuie facut un array
  $arr = array('nrexperiente' => $nrexperiente,'entry_id' => $row["entry_id"] ,'start' => $row["start"],'stop' => $row["stop"],'titlu' => $row["titlu"],'descriere' => $row["descriere"]);
 }
}
echo json_encode($arr);

?>