
<?php
// define variables and set to empty values
function signup(){
$nameErr = $emailErr = $parolaErr = $parola2Err = "";
$name = $email = $parola = $parola2  = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
    echo $emailErr; exit();
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
      echo $emailErr; exit();
    }
  }
    
  if (empty($_POST["parola"])) {
    $parolaErr ="parola necompletata";
  } else 
      if(strlen($_POST["parola"])<5){
        $parolaErr ="parola prea scurta";
        echo $parolaErr; exit();
      }
        else
    $parola = test_input($_POST["parola"]);
        
  
   
    $parola2 =$_POST["parola2"];
  if ($parola2!=$parola) {
    $parola2Err = "a doua parola nu corespunde cu prima";
    echo $parola2Err; exit();
  }



function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";

//conect to the data baze


$conn = new mysqli($servername, $username, $password,$dbname);

$getid=sprintf("SELECT * FROM user_data where email=".$email);
$rezult= $conn ->query($getid);

if ($rezult->num_rows>0){
  {$utexistent="Email deja folosit";
  echo $utexistent;
  exit();
  }

  //aici ar putea fi problema la valoarea result
  $getid=sprintf("SELECT max(user_id) FROM user_data ");
$rezult= $conn ->query($getid);
$id_user= $rezult+1;
//inseram utilizator nou
$getid=sprintf("INSERT INTO user_data values (".$id_user.",".$email.",".$parola.")");


if ($conn ->query($getid) != TRUE) {
    echo "eroare la inserare";
  }
  else {
        $_SESSION['session_user_id'] = $id_user;
        $_SESSION['session_email'] = $email;
        $_SESSION['session_parola'] = $parola;

        setcookie("cookie_user_id",$id_user, time()+3600*24*12,"/");
        setcookie("cookie_email",$email, time()+3600*24*12,"/");
        setcookie("cookie_parola",$parola, time()+3600*24*12,"/");

          echo "inregistrare reusita";
        
  }
}}
}
?>