<?php
	include_once("php_files/check_status.php");
	if($user_check == true)
	{
		header("location: cv.html?email=".$_SESSION["session_email"]);
		exit();
	}
<<<<<<< HEAD:register.php
    include_once("php/verify_email.php");
    include_once("php/send_data.php");
=======
	include_once("php/register.php")
>>>>>>> origin/test:register.html
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
  <h3>Sign Up Here</h3>
  <form name="signupform" id="signupform" onsubmit="return false;">
    <div>Email Address:</div>
    <input id="email" type="text" onfocus="emptyElement('status')" onkeyup="restrict('email')" maxlength="88">
    <div>Create Password:</div>
    <input id="parola" type="password" onfocus="emptyElement('status')" maxlength="16">
    <div>Confirm Password:</div>
    <input id="parola2" type="password" onfocus="emptyElement('status')" maxlength="16">
    <br>
    <button id="signupbtn" onclick="signup()">Create Account</button>
    <span id="status"></span>
  </form>
</div>
</body>
</html>