<?php
	include_once("php_files/check_status.php");
	// Acum trebuie sa verificam daca e logat.
	if($user_check == true)
	{
		header("location: cv.html?email=".$_SESSION["session_email"]);
		exit();
		//~!cauta diferenta intre exit si die
	}
?>
<?php
	//ajax apeleaza codul
	if(isset($_POST["email"]))
	{
		include_once("php_files/connect_to_database.php");
		//Ne-am conectat la BD.
		$email = mysqli_real_escape_string($database,$_POST['email']);
		$parola = mysqli_real_escape_string($database,$_POST['parola']);
		
		if($email == "" || $parola == "")
		{
			echo("eroare_date");
			die();
		}
		else
		{
			$bd_user_id = "";
			$bd_email = "";
			$bd_parola = "";
			//Creeaza cookie-uri cu user_id,email,parola
			//Parola trebuie criptata? N-o bagam in query, verificam in php.
			//Scoatem user_id &parola din BD.
			$query = "SELECT * FROM user_data WHERE email = '$email' AND parola = '$parola'";
			if ($result = mysqli_query($database,$query)) 
			{
    				while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
    			    			$bd_user_id = $row[user_id];
								$bd_email = $row[email];
								$bd_parola = $row[parola];
   						}
    				//$result->close();
			}
			else
			{
				die("Eroare la interogare");
			}
			
			
			
			if( $parola != $bd_parola )
			{
				echo("eroare_date");
				die();
			}
			else
			{
				$_SESSION['session_user_id'] = $bd_user_id;
				$_SESSION['session_email'] = $bd_email;
				$_SESSION['session_parola'] = $bd_parola;
				
				setcookie("cookie_user_id",$bd_user_id, time()+3600*24,"/");
				setcookie("cookie_email",$bd_email, time()+3600*24,"/");
				setcookie("cookie_parola",$bd_parola, time()+3600*24,"/");
				
				die();
			}
			
		}
		die();
	}
?>

<!DOCTYPE html>
<html>
<head><title>Login page</title>
  	<link href="style/log-in.css" rel="stylesheet" type="text/css" >
    <!--Include-uri OuO-->
    <script src = "php_files/js/aja.js"></script>
    <script src = "php_files/js/first.js"></script>
    <script>
		function emptyElement(x)
		{
			_(x).innerHTML = "";
		}
		function login()
		{
			var em = _("email").value;
			var pass = _("parola").value;
			
			<!--Verificam daca nu a introdus datele de autentif:-->
			
			if( em == "" || pass == "" )
			{
				_("status").innerHTML = "Ai uitat sa introduci <u>toate</u> datele de autentificare.";
			}
			else
			{
				//_("buton_login").style.display = "none"; ignoraaaaa
				_("status").innerHTML = "Asteptati...";
				var n_parola = pass.length;
				
				<!--Verificam lungimea parolei:-->
				if(n_parola < 4 ) {_("status").innerHTML = "Parola prea mica. Parola trebuie sa aiba cel putin 4 caractere.";}
				else 
					if(n_parola > 20 ) {_("status").innerHTML = "Parola prea mare. Parola trebuie sa aiba cel mult 20 de caractere.";}
				var ajax = ajaxObj("POST","login.php");
				ajax.onreadystatechange = function()
				{
					if(ajaxReturn(ajax) == true )
					{
						if(ajax.responseText == "eroare_date" )
						{
							_("status").innerHTML = "Conectare esuata.";
							//_("buton_login").style.display = "block"; ignoraaaaa
						}
						else
						{
							window.location = "cv.html?email=" + ajax.responseText;
						}
					}
				}
				ajax.send("email="+em+"&parola="+pass);
			}
		}
		
	</script>
</head>

<body>
 	 <div class="white-opacity"></div>
 	 <div class="content">
		<div Id="head" class="head" style="height:30px;background-color:red">
  		<span><img src="img/edit_ico.png" alt="logo"height="25" width="25" /></span>
	</div >
	<div class="baground-log">
		<div class="log-in">
			<form id="loginform">
				<p>
                <span class="textitineration">Email-ul:</span> <input class="cell-format" onfocus="emptyElement('status')" type="text" id="email" size="20" placeholder="Email-ul d-voastra" /></br>
      			<span class="textitineration">Parola:</span> <input class="cell-format" onfocus="emptyElement('status')" style="margin-left: 10px;" type="text" id="parola" size="20" placeholder="Parola d-voastra" /> 
                </p>
   				<button id="buton_login" onclick="login()" value="Trimite">Logare</button> 
                <!--<input type="submit" value="Trimite" title="Apasati butonul pentru a expedia datele spre server" onclick="this.style.display='none'"/>-->
                
                <!--Aici vom afisa erorileee:-->
                <p id="status"></p>
			</form>
			<!--<div id="register">Register</div>-->
		</div>
</div>
</div>
</body>
</html>
