<?php
	include_once("php_files/check_status.php");
	if($user_check == true)
	{
		header("location: cv.html?email=".$_SESSION["session_email"]);
		exit();
	}
    include_once("php/verify_email.php");
    include_once("php/send_data.php");
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Sign Up</title>
<script src="php_files/js/aja.js"></script>
<script src="php_files/js/first.js"></script>
<script src="js/registerFunctions.js"></script>
</head>
<body>
<div>
  <h3>Inregistreaza-te aici</h3>
  <form name="signupform" id="signupform" onsubmit="return false;">
    <div>Email:</div>
    <input id="email" type="text" onfocus="emptyElement('status')" onkeyup="restrict('email')" maxlength="88">
    <div>Parola:</div>
    <input id="pass1" type="password" onfocus="emptyElement('status')" maxlength="16">
    <div>Rescrie parola:</div>
    <input id="pass2" type="password" onfocus="emptyElement('status')" maxlength="16">
    <br>
    <button id="signupbtn" onclick="signup()">Create Account</button>
    <span id="status"></span>
  </form>
</div>
</body>
</html>