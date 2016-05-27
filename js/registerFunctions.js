function signup(){
	var em = _("email").value;
	var pass1 = _("pass1").value;
	var pass2 = _("pass2").value;
	var status = _("status");

	if(em == "" || pass1 == "" || pass2 == ""){
		status.innerHTML = "Introduce-ti toate datele.";
	}
	else if(pass1 != pass2){
		status.innerHTML = "Parolele nu sunt identice.";
	}
	else {
		_("signupbtn").style.display = "none";
		status.innerHTML = 'Asteptati ...';
		var ajax = ajaxObj("POST", "register.php");
		//posibil de sch fisierul

		ajax.onreadystatechange = function(){
		  if(ajaxReturn(ajax) == true) {
			if(ajax.responseText != "succes"){
				status.innerHTML = ajax.responseText;
				_("signupbtn").style.display = "block";
			}
			else {
				document.location = "index.php";
			}
		}
		}
		ajax.send("em="+em+"&p="+pass1);
		location.reload();
		//aici arr putea fi creata si linia de informatii personale din bd
	}

}

function emptyElement(x){
	_(x).innerHTML = "";
}

function restrict(element){
	var tf = _(element);
	var rx = new RegExp;
	if(element == "email"){
		rx = /[' "]/gi;
	}
	tf.value = tf.value.replace(rx, "");
}

function checkemail(){
	var em = _("email").value;
	if(em != ""){
	    _("status").innerHTML = "Se verifica email-ul...";
		var ajax = ajaxObj("POST", "register.php");
        ajax.onreadystatechange = function() {
	        if(ajaxReturn(ajax) == true) {
	            _("status").innerHTML = ajax.responseText;
	        }
        }
        ajax.send("email="+em);
	}
}
