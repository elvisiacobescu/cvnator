<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
$nrexperiente="";
$arr=array();
$userid=$_COOKIE["cookie_user_id"];
$conn = new mysqli($servername, $username, $password,$dbname);
$getid=sprintf("SELECT * FROM experienta where user_id=".$userid);
$rezult= $conn ->query($getid);
$ary=array();

if ($rezult->num_rows>0){
  $nrexperiente=$rezult->num_rows;
while($row = $rezult->fetch_assoc()) {
  $arr = array('nrexperiente' => $nrexperiente,'entry_id' => $row["entry_id"] ,'start' => $row["start"],'stop' => $row["stop"],'nume_companie' => $row["nume_companie"],'domeniu' => $row["domeniu"],'departament' => $row["departament"],'descrierea_jobului' => $row["descrierea_jobului"]);

  array_push($ary,$arr);
 }
}
echo json_encode($ary);

?>
