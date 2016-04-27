<?php
	session_start();
	
	$_SESSION = array();
	//Scoatem cookie-urile
	if(isset($_COOKIE["cookie_user_id"]) && isset($_COOKIE["cookie_email"]) && isset($_COOKIE["cookie_parola"]) )
	{
		setcookie("cookie_user_id",'',strtotime( '2013-08-16' ), '/' );
		setcookie("cookie_email",'',strtotime( '2013-08-16' ), '/' );
		setcookie("cookie_parola",'',strtotime( '2013-08-16' ), '/' );
	}
	
	session_destroy();
	echo "succes";
	
	if(isset($_SESSION['session_email']))
	{}
	else
	{
		header("location: login.php");
		die();
	}
?>