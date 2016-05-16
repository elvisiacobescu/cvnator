
document.getElementById("edit1").addEventListener("click",function (){
document.getElementById("prezent").className+=" micsoreaza";
document.getElementById("prezent").classList.remove('mareste');
document.getElementById("personaldate").innerHTML+= "<div id='de_editat'></div>";
document.getElementById("de_editat").innerHTML+="<form id='se_editeaza' action='index.html' method='post'></form>";
document.getElementById("se_editeaza").innerHTML+="<fieldset id='iner_form'></fieldset>";
document.getElementById("iner_form").innerhtml+="";
document.getElementById("iner_form").innerHTML+="<legend>date personale:</legend>";
document.getElementById("iner_form").innerHTML+="nume:<br><input class='celformat' name='nume' type='text' value=''/></br>";
document.getElementById("iner_form").innerHTML+="prenume:<br><input class='celformat' type='text' value=''/></br>";
document.getElementById("iner_form").innerHTML+="<span>varsta:</span><input class='celformat' type='number' value='5' min='5' max='102'/></br>";
document.getElementById("iner_form").innerHTML+="<span style='padding-right: 16px;'>sex:</span><select class='celformat' id='start'><option disabled selected value> -- M/F -- </option><option>M</option><option >F</option><select></br>"
document.getElementById("iner_form").innerHTML+="";
document.getElementById("iner_form").innerHTML+="Numar-telefon: <br><input class='celformat' type='number' value='07' ></br>";
document.getElementById("iner_form").innerHTML+="Adresa:</br><input class='celformat' type='text' value=''></br>";
document.getElementById("iner_form").innerHTML+="Oras:</br><input class='celformat' type='text' value=''></br>";
document.getElementById("iner_form").innerHTML+="Salariu dorit in euro:<br><input class='celformat' type='number' value=''></br>";
document.getElementById("iner_form").innerHTML+="Emil:</br><input class='celformat' type='text' value=''></br>";
document.getElementById("iner_form").innerHTML+="<span style='padding-right: 16px;'>Nivel-Cariera:</span><select class='celformat' id='start'><option disabled selected value> -- LEVEL -- </option><option>Entry-level</option><option >Mid-level</option><option >High-level</option><select></br>";
document.getElementById("iner_form").innerHTML+="Domeniu-cautat:</br><input class='celformat' type='text' value=''></br>";
document.getElementById("iner_form").innerHTML+="Pozitia-cautata:</br><input class='celformat' type='text' value=''></br>";
document.getElementById("iner_form").innerHTML+="<span style='padding-right: 16px;'>Relocare:</span><select class='celformat' id='start'><option disabled selected value> -- LEVEL -- </option><option>Da</option><option >Nu</option><select></br>";
document.getElementById("iner_form").innerHTML+="<textarea id='oobiectiv' rows='4' cols='50' name='comment' form='usrform'>Your ojectiv... </textarea>";
document.getElementById("iner_form").innerHTML+="<div id='save1'><span class='savetext'>SAVE</span></div>";

oForm = document.forms[0];
oText = oForm.elements[1];
oText.value=document.getElementById("acname").innerHTML;
oText = oForm.elements[2];
oText.value=document.getElementById("acprenume").innerHTML;
oText = oForm.elements[3];
oText.value=document.getElementById("acvarsta").innerHTML;
oText = oForm.elements[4];
oText.value=document.getElementById("acsex").innerHTML;
oText = oForm.elements[5];
oText.value=document.getElementById("actel").innerHTML;
oText = oForm.elements[6];
oText.value=document.getElementById("acadres").innerHTML;
oText = oForm.elements[7];
oText.value=document.getElementById("acoras").innerHTML;
oText = oForm.elements[8];
oText.value=document.getElementById("acsalariu").innerHTML;
oText = oForm.elements[9];
oText.value=document.getElementById("acmail").innerHTML;
oText = oForm.elements[10];
oText.value=document.getElementById("acnivel").innerHTML;
oText = oForm.elements[11];
oText.value=document.getElementById("acadomeniu").innerHTML;
oText = oForm.elements[12];
oText.value=document.getElementById("acposturi").innerHTML;
oText = oForm.elements[13];
oText.value=document.getElementById("acrelocare").innerHTML;
oText = document.getElementById("oobiectiv");
oText.innerHTML=document.getElementById("acobiectiv").innerHTML;
//oText.value=document.getElementById("acsalariu").innerHTML;

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
       document.getElementById('eror-respoce').innerHTML += responce;
         if(responce=="succes")
         {
          window.location = "http://localhost/cvnator/";
         }
         else document.getElementById('eror-respoce').innerHTML += " logout fail ";
       }
  }
});

function deletepermis(i,id){
  var delete1={"cat" : id};
  var jsonstring=JSON.stringify(delete1);
  var hr=new XMLHttpRequest();
  var url="php/deletepermis.php?obj="+jsonstring;
  hr.open("GET",url,true);
  hr.send();
  hr.onreadystatechange = function()
  {
      if(hr.readyState == 4 && hr.status == 200)
      {
        //face primirea de date de la server
        var rezultat = hr.responseText;
        if (rezultat=="Record deleted successfully"){
         console.log(rezultat);
         var element=document.getElementById("permi"+i);
         element.parentNode.removeChild(element);
        }
        else{
          console.log(rezultat);
        }
      }
    }
}
function deletestudiu (i,id){
  var delete1={"cat" : id};
  var jsonstring=JSON.stringify(delete1);
  var hr=new XMLHttpRequest();
  var url="php/deletestudiu.php?obj="+jsonstring;
  hr.open("GET",url,true);
  hr.send();
  hr.onreadystatechange = function()
  {
      if(hr.readyState == 4 && hr.status == 200)
      {
        //face primirea de date de la server
        var rezultat = hr.responseText;
        if (rezultat=="Record deleted successfully"){
         console.log(rezultat);
         var element=document.getElementById("personal-"+i);
         element.parentNode.removeChild(element);
        }
        else{
          console.log(rezultat);
        }
      }
    }
  }

  function deletexp (i,id){
    var delete1={"cat" : id};
    var jsonstring=JSON.stringify(delete1);
    var hr=new XMLHttpRequest();
    var url="php/deleteexp.php?obj="+jsonstring;
    hr.open("GET",url,true);
    hr.send();
    hr.onreadystatechange = function()
    {
        if(hr.readyState == 4 && hr.status == 200)
        {
          //face primirea de date de la server
          var rezultat = hr.responseText;
          console.log(rezultat);
          if (rezultat=="Record deleted successfully"){
           console.log(rezultat);
           var element=document.getElementById("experienta-"+i);
           element.parentNode.removeChild(element);
          }
          else{
            console.log(rezultat);
          }
        }
      }

    }
    function deletaltele (i,id){
      var delete1={"cat" : id};
      var jsonstring=JSON.stringify(delete1);
      var hr=new XMLHttpRequest();
      var url="php/deletaltele.php?obj="+jsonstring;
      hr.open("GET",url,true);
      hr.send();
      hr.onreadystatechange = function()
      {
          if(hr.readyState == 4 && hr.status == 200)
          {
            //face primirea de date de la server
            var rezulta = hr.responseText;
            if (rezulta=="Record deleted successfully"){
             console.log(rezulta);
             var element=document.getElementById('altele-'+i);
             element.parentNode.removeChild(element);
            }
            else{
              console.log(rezulta);
            }
          }
        }
  function modificaeducatie(i,id){
    
  }

      }
