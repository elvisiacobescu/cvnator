
document.getElementById("edit1").addEventListener("click",function (){
document.getElementById("prezent").className+=" micsoreaza";
document.getElementById("prezent").classList.remove('mareste');
document.getElementById("personaldate").innerHTML+= "<div id='de_editat'></div>";
document.getElementById("de_editat").innerHTML+="<form id='se_editeaza' action='index.html' method='post'></form>";
document.getElementById("se_editeaza").innerHTML+="<fieldset id='iner_form'></fieldset>";
document.getElementById("iner_form").innerhtml+="";
document.getElementById("iner_form").innerHTML+="<legend>date personale:</legend>";
document.getElementById("iner_form").innerHTML+="nume:<br><input name='nume' type='text' value='elvis2'/></br>";
document.getElementById("iner_form").innerHTML+="prenume:<br><input type='text' value='iacobescu'/></br>";
document.getElementById("iner_form").innerHTML+="varsta:<br><input type='number' value='5' min='5' max='102'/></br>";
document.getElementById("iner_form").innerHTML+="sex: <br><input type='radio' name='sex' value='masculin' checked /> Masculin</br>"
document.getElementById("iner_form").innerHTML+="<input type='radio' name='sex' value='feminin' checked/> Feminin</br>";
document.getElementById("iner_form").innerHTML+="numartelefon: <br><input type='number' value='07' ></br>";
document.getElementById("iner_form").innerHTML+="adresa:</br><input type='text' value='bla bla'></br>";
document.getElementById("iner_form").innerHTML+="oras:</br><input type='text' value='bacau'></br>";
document.getElementById("iner_form").innerHTML+="salariu dorit in euro:<br><input type='number' value=''></br>";
document.getElementById("iner_form").innerHTML+="";
document.getElementById("iner_form").innerHTML+="<div id='save1'><span class='savetext'>SAVE</span></div>";
oForm = document.forms[0];
oText = oForm.elements[1];
oText.value=document.getElementById("acname").innerHTML;
oText = oForm.elements[2];
oText.value=document.getElementById("acprenume").innerHTML;
oText = oForm.elements[3];
oText.value=document.getElementById("acvarsta").innerHTML;
oText = oForm.elements[6];
oText.value=document.getElementById("actel").innerHTML;
oText = oForm.elements[7];
oText.value=document.getElementById("acadres").innerHTML;
oText = oForm.elements[8];
oText.value=document.getElementById("acoras").innerHTML;
oText = oForm.elements[9];
oText.value=document.getElementById("acsalariu").innerHTML;

 function load_js()
    {
       var head= document.getElementsByTagName('head')[0];
       var script= document.createElement('script');
       script.type= 'text/javascript';
       script.src= 'js/main.js';
       head.appendChild(script);
    }

  document.getElementById("save1").addEventListener("click", function (){
  document.getElementById("prezent").className+=" mareste";
  document.getElementById("prezent").classList.remove('micsoreaza');
  var removeble =document.getElementById("de_editat");
  removeble.parentNode.removeChild(removeble);
 load_js();
 });
});

document.getElementById("logout").addEventListener("click",function (){
  var hr=new XMLHttpRequest();
  var url="php/logout.php";
  hr.open("GET",url,true);
  hr.send();
  hr.onreadystatechange = function()
  {
      if(hr.readyState == 4 && hr.status == 200)
      {
        //face primirea de date de la server
        var responce=hr.responseText;
        if(responce=="succes")
         {
          window.location = "http://localhost/cvnator/";

         }
         else document.getElementById('eror-respoce').innerHTML = " logout fail ";
       }else  document.getElementById('eror-respoce').innerHTML = " logout fail ";
  }
});
