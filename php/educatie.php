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
$getid=sprintf("SELECT * FROM educatie where user_id=".$userid);
$rezult= $conn ->query($getid);
$ary=array();
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
<<<<<<< HEAD
  //aici trebuie facut un array
  $arr = array('nrexperiente' => $nrexperiente,'entry_id' => $row["entry_id"] ,'start' => $row["start"],'stop' => $row["stop"],'nume_institutie' => $row["nume_institutie"],'oras' => $row["oras"],'profil' => $row["profil"]);
=======
  $arr = array('entry_id' => $row["entry_id"] ,'start' => $row["start"],'stop' => $row["stop"],'nume_institutie' => $row["nume_institutie"],'oras' => $row["oras"],'profil' => $row["profil"]);
>>>>>>> origin/test
array_push($ary,$arr);
 }
}
echo json_encode($ary);
  
?>
