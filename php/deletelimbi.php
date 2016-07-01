<?php
$obj = $_GET['obj'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
$nrexperiente="";
$conn = new mysqli($servername, $username, $password,$dbname);
$json = json_decode($obj, true);
$userid=$_COOKIE["cookie_user_id"];
$catid=$json['cat'];
$sql = "DELETE FROM limbi_straine WHERE user_id='".$userid."' and entry_id='".$catid."'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}


?>
