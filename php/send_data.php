<?php
	if(isset($_POST["em"])){
		//include_once("php_files/connect_to_database.php");
		
		$em = $_POST["em"];
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
			$id_user = 1;
			$sql = "SELECT max(user_id) FROM user_data LIMIT 1";
			$query =  mysqli_query($database,$sql);
			if (mysqli_num_rows($query) > 0) {
				while($row = mysqli_fetch_assoc($result)) {
        			$id_user = $row["user_id"];
   			 		}
			}
			
			$id_user = $id_user + 1;
			$sql = "INSERT INTO user_data (user_id, email, parola) VALUES('$id_user','$em','$pass')";
			$query = mysqli_query($db_conx, $sql); 
			$uid = mysqli_insert_id($db_conx);
		}
	}
?>