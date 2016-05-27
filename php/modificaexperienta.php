<?php
$obj = $_GET['obj'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
//conect to the data baze
$arr=array();

$userid=$_COOKIE["cookie_user_id"];
$conn = new mysqli($servername, $username, $password,$dbname);

$json = json_decode($obj, true);// decode the JSON into an associative array

$start=$json["start"];
$stop=$json["stop"];
$nume_companie=$json["nume_companie"];
$domeniu=$json["domeniu"];
$departament=$json["departament"];
$descrierea_jobului=$json["descrierea_jobului"];
$entry_id=$json["entry_id"];

// //
// if($sql=$conn->prepare(
// 	"UPDATE experienta SET 
//  	start =? , stop=? , nume_companie=? , domeniu=? , departament=? , descrierea_jobului=? where user_id=? AND entry_id=? " )
// 	)
// 	{

// $sql->bind_param('ssssssii',$start,$stop,$nume_companie,$domeniu, $departament,$descrierea_jobului,$userid,$entry_id);
// $sql->execute() ;

// echo 'succes';
// } 
// else echo "erruare: " . $conn->error;
// //




// 	if( $sql=$conn->prepare( "UPDATE experienta SET start =? , stop=? , nume_companie=? , domeniu=? , departament=? , descrierea_jobului=? where user_id=? AND entry_id=? " )
// 	)
// 	{

// 	$sql->bind_param('ssssssii', $start, $stop, $nume_companie, $domeniu, 
// 		$departament, $descrierea_jobului, $userid, $entry_id );

// $sql->execute() ;

// echo "succes";
// } 



// else echo "erruare: " . $conn->error;

$sql=sprintf("UPDATE experienta SET 
	start ="."'".$json["start"]."'".
" , stop="."'".$json["stop"]."'".
" , nume_companie="."'".$json["nume_companie"]."'".
" , domeniu="."'".$json["domeniu"]."'".
" , departament="."'".$json["departament"]."'".
" , descrierea_jobului="."'".$json["descrierea_jobului"]."'".
" where user_id=".$userid. " AND entry_id='".$json["entry_id"]."' ");

if ($conn->query($sql) === TRUE) {
		echo "succes";

} else {
    echo "erruare: " . $conn->error;
}

?>