<?php

$obj = $_GET['obj'];
$obj =$_COOKIE['cookie_user_id'];
$obj = trim(preg_replace('/\s\s+/', ' ', $obj));
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
//conect to the data baze
$conn = new mysqli($servername, $username, $password,$dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//else echo "Connected successfully";
//echo $obj;
//$json = json_decode($obj, true);// decode the JSON into an associative array
//echo '<pre>' . print_r($json, true) . '</pre>';
// echo 'what ever '.$obj;
//$iduser=$json['iduser'];


$query = sprintf("SELECT email FROM user_data
    WHERE user_id=". "'".$obj."'");
$rezult=$conn-> query($query);
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
    echo  $row["email"];
}
} else {
echo $obj;
}

?>
