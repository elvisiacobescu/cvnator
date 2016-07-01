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

$getid=sprintf("SELECT * FROM abilitati where user_id=".$userid);
$rezult= $conn ->query($getid);
$ary=array();

if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
  $arr = array('entry_id' => $row["entry_id"] ,'skill' => $row["skill"]);
  array_push($ary,$arr);
 }
}
echo json_encode($ary);

?>