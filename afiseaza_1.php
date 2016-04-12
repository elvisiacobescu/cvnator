<?php 
	session_start();
	$cod=0;
	if(count($_POST)>0) {
		$database = mysqli_connect ('localhost','root','','cvnator');
		if (mysqli_connect_errno()) { die ('Conexiunea a esuat...'); }
   
		if (!$_REQUEST["nume"]) 
		{
			$cod=1;
			header("Location:index.html?cod=$cod");
			die();
		} 
		$email = mysqli_real_escape_string($database,$_POST['nume']);
		
		$parola = mysqli_real_escape_string($database,$_POST['parola']);
		if (!$parola || strlen($parola) < 4 || strlen($parola) > 20) 
		{ 
			$cod=1;
			header("Location:index.html?cod=$cod");
			die();
		}
		
		
		

		$query = " SELECT user_id FROM user_data WHERE email = '$email' AND parola = '$parola' ";
		if (!($rez = mysqli_query($database,$query))) {
			die ('A survenit o eroare la interogare');
		}
	  
		$row = mysqli_fetch_array($rez,MYSQLI_ASSOC);
		$count = mysqli_num_rows($rez);
		
		if($count == 1) 
		{ 
			$_SESSION["user_id"] = $row[user_id];
			$_SESSION["user_name"] = $email;
		}
		else 
		{
			$cod=0;
		}
		$database->close();
	}
	
	if(isset($_SESSION["user_id"])) 
	{
		header("Location:cv.html");
	}
	else
	{	
		header("Location:index.html?cod=$cod");
	}
?>