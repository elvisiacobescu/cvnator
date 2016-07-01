<?php
	if(isset($_POST["em"])){
		//include_once("php_files/connect_to_database.php");

		$em = mysqli_real_escape_string($database,$_POST["em"]);
		$pass = $_POST["p"];


		if($em == "" || $pass == ""){
			echo "Introduceti date in toate campurile."; die();
		}
		if (!filter_var($em, FILTER_VALIDATE_EMAIL)) {
      			$emailErr = "Invalid email format";
      			echo $emailErr; exit();
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

			$sql = "SELECT user_id FROM user_data WHERE email = '$em' LIMIT 1";
			$query = mysqli_query($database, $sql);
			$row = mysqli_fetch_row($query);
			$id_user = $row[0];

			$_SESSION['session_email'] = $em;
			$_SESSION['session_parola'] = $pass;
			$_SESSION['session_user_id'] = $id_user;

			setcookie("cookie_email",$email, time()+3600*24*12,"/");
			setcookie("cookie_parola",$pass, time()+3600*24*12,"/");
			setcookie("cookie_user_id",$id_user, time()+3600*24*12,"/");

			header("location: cv.html?email=".$_SESSION["session_email"]);
			echo "Inregistrare efectuata cu succes!";
			exit();
		}
	}
?>
