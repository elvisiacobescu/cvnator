<?php
	if(isset($_POST["email"])){
		include_once("php_files/connect_to_database.php");
		
		$email = $_POST['email'];
		$sql = "SELECT user_id FROM user_data WHERE email = '$email' LIMIT 1";
		$query =  mysqli_query($database,$sql);
		$num_rows = mysqli_num_rows($query);
		
		if($num_rows < 1){
			echo 'e bon.';
			die();
		}
		else {
			echo 'e luat.';
			die();
		}
	}
?>