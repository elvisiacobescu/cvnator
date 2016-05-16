<?
$obj = $_GET['obj'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
$nrexperiente="";
$conn = new mysqli($servername, $username, $password,$dbname);
$arr=array();
$userid=$_COOKIE["cookie_user_id"];
$json = json_decode($obj, true);
//aici trebuie facuta eliminarea elementului din baza de date

echo "ok".$json['categoria'];
?>
