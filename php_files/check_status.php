<?php
	session_start();
	include_once("connect_to_database.php");
	
	$user_check = false;
	$logat_user_id = ""; $logat_email = ""; $logat_parola = "";
	
	
	function verificaUser($database,$local_user_id,$local_email,$local_parola)
	{
		
		$text_interogare = "SELECT user_id FROM  user_data WHERE user_id = '$local_user_id' AND email = '$local_email' AND parola = '$local_parola'";
		/*if (!($query = mysqli_query($connect_to_database,$text_interogare)))
		{
			die ('A survenit o eroare la interogare');
		}*/
		$query = mysqli_query($database,$text_interogare);
		$numar_randuri = mysqli_num_rows($query);
		if( $numar_randuri > 0 )
			{ return true; }
	}
	
	//Verificam daca sesiunea nu a expirat
	if(isset($_SESSION['session_user_id']) && isset($_SESSION['session_email']) && isset($_SESSION['session_parola'])) 
	{
		$logat_user_id = $_SESSION['session_user_id'];
		$logat_email = $_SESSION['session_email'];
		$logat_parola = $_SESSION['session_parola'];
		
		$user_check = verificaUser($database,$logat_user_id,$logat_email,$logat_parola);
	}//Else: scoatem din cookie-uri datele
	else if(isset($_COOKIE['cookie_user_id']) && isset($_COOKIE['cookie_email']) && isset($_COOKIE['cookie_parola']) )
	{
	    $_SESSION['session_user_id'] =  $_COOKIE['cookie_user_id'];
		$_SESSION['session_email'] =  $_COOKIE['cookie_email'];
		$_SESSION['session_parola'] =  $_COOKIE['cookie_parola'];
		
		$logat_user_id = $_SESSION['session_user_id'];
		$logat_email = $_SESSION['session_email'];
		$logat_parola = $_SESSION['parola'];
		
		$user_check = verificaUser($database,$logat_user_id,$logat_email,$logat_parola);
	}
	
?>