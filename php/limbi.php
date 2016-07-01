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

$getid=sprintf("SELECT * FROM limbi_straine where user_id=".$userid);
$rezult= $conn ->query($getid);
$ary=array();

if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
  $arr = array('entry_id' => $row["entry_id"] ,'limba' => $row["limba"],'nivel' => $row["nivel"]);
  array_push($ary,$arr);
 }
}
echo json_encode($ary);

?>