<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
//conect to the data baze
$centralstage=array();
$userid=$_COOKIE["cookie_user_id"];
$conn = new mysqli($servername, $username, $password,$dbname);
$getid=sprintf("SELECT * FROM date_peronale where user_id=$userid");
$rezult=$conn-> query($getid);
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
  $nume=$row["nume"];
  $prenume=$row["prenume"];
  $sex=$row["sex"];
  $varsta=$row["varsta"];
  $nr_telefon=$row["nr_telefon"];
  $cale_poza=$row["cale_poza"];

  $adresa=$row["adresa"];
  $oras=$row["oras"];
  $salariu_dorit=$row["salariu_dorit"];

  $tip_job=$row["tip_job"];
  $nivel_cariera=$row["nivel_cariera"];
  $domeniu=$row["domeniu"];

  $post_dorit=$row["post_dorit"];
  $relocare=$row["relocare"];
  $obiectiv=$row["obiectiv"];
  //aici trebuie facut un array
  $arr = array('start' => $start ,'stop' => $stop,'car' => $car,'date' => $date,'name' => $name,'price' => $price );
  array_push($centralstage,$arr);

 }
}
echo json_encode($centralstage);


//$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

//echo json_encode($arr);
?>