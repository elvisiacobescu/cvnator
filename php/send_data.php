<?php
	if(isset($_POST["em"])){
		//include_once("php_files/connect_to_database.php");
		
		$em = mysqli_real_escape_string($database,$_POST["em"]);
		$pass = $_POST["p"];
		// mai verificam o data?
		
		if($em == "" || $pass == ""){
			echo "Introduceti date in toate campurile."; die();
		}
		
		$sql = "SELECT user_id FROM user_data WHERE email = '$em' LIMIT 1";
		$query =  mysqli_query($database,$sql);
		$num_rows = mysqli_num_rows($query);
		
		if ($num_rows != 0){
			echo "Email in uz."; die();
		}
		else{
			
			$sql = "INSERT INTO user_data ( email, parola) VALUES('$em','$pass')";
			$query = mysqli_query($database, $sql); 
			echo "Inregistrare efectuata cu succes!";
			header("location: index.php");
			exit();
		}
	}
?>