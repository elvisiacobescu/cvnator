

document.getElementById("edit1").addEventListener("click",function (){
document.getElementById("prezent").className+=" micsoreaza";
document.getElementById("personaldate").innerHTML+= "<div id='de_editat'></div>";
document.getElementById("de_editat").innerHTML+="<form id='se_editeaza' action='index.html' method='post'></form>";
document.getElementById("se_editeaza").innerHTML+="<fieldset id='iner_form'></fieldset>";
document.getElementById("iner_form").innerhtml+="";
// de ce nu imi ia primul element pus in dom ?
document.getElementById("iner_form").innerHTML+="<legend>date personale:</legend>";
document.getElementById("iner_form").innerHTML+="nume:<br><input type='text' value='elvis2'/></br>";
document.getElementById("iner_form").innerHTML+="prenume:<br><input type='text' value='iacobescu'/></br>";
document.getElementById("iner_form").innerHTML+="varsta:<br><input type='number' value='5' min='5' max='102'/></br>";
document.getElementById("iner_form").innerHTML+="sex: <br><input type='radio' name='sex' value='masculin' checked /> Masculin</br>"
document.getElementById("iner_form").innerHTML+="<input type='radio' name='sex' value='feminin' checked/> Feminin</br>";
document.getElementById("iner_form").innerHTML+="numartelefon: <br><input type='number' value='07' ></br>";
document.getElementById("iner_form").innerHTML+="adresa:</br><input type='text' value='stefan cortez nr.21'></br>";
document.getElementById("iner_form").innerHTML+="oras:</br><input type='text' value='iasi'></br>";
document.getElementById("iner_form").innerHTML+="salariu dorit in euro:<br><input type='number'></br>";
document.getElementById("iner_form").innerHTML+="";
document.getElementById("iner_form").innerHTML+="<div id='save1'><span class='savetext'>SAVE</span></div>";

document.getElementById("save1").addEventListener("click", function (){
  document.getElementById("prezent").className+=" mareste";
  document.getElementById("prezent").className.replace('micsoreaza','');

});

});
var buton=document.getElementById("save1");





// document.getElementById('profile_picture').addEventListener("click",function(){
// //trebuie facuta aploudul unei poze
// }
// )
