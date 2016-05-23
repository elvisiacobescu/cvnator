
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
document.getElementById("iner_form").innerHTML+="<textarea id='oobiectiv' rows='4' cols='50' name='comment'>Your ojectiv... </textarea> </br>";
document.getElementById("iner_form").innerHTML+="<div id='save1'><span class='savetext'>SAVE</span></div>";
document.getElementById("iner_form").innerHTML+="<span style='padding-right: 16px;'>Tipul jobului dorit:</span><select class='celformat' ><option disabled selected value> -- TIPUL -- </option><option>Full-time</option><option >Part-time</option><option >Sezonier</option><option >Temporar</option><option >Project-based</option><select></br>";
oForm = document.forms[0];
oText = oForm.elements[1];
var acnames=document.getElementById("acname");
oText.value=acnames.innerHTML;
oText = oForm.elements[2];
var acprenumes=document.getElementById("acprenume");
oText.value=acprenumes.innerHTML;
oText = oForm.elements[3];
var acvarstas=document.getElementById("acvarsta");
oText.value=acvarstas.innerHTML;
oText = oForm.elements[4];
var acsexs=document.getElementById("acsex");
oText.value=acsexs.innerHTML;
oText = oForm.elements[5];
var actels=document.getElementById("actel");
oText.value=actels.innerHTML;
oText = oForm.elements[6];
var acadres=document.getElementById("acadres");
oText.value=acadres.innerHTML;
oText = oForm.elements[7];
var acorass=document.getElementById("acoras")
oText.value=acorass.innerHTML;
oText = oForm.elements[8];
var acsalarius=document.getElementById("acsalariu");
oText.value=acsalarius.innerHTML;
oText = oForm.elements[9];
var acmails=document.getElementById("acmail");
oText.value=acmails.innerHTML;
oText = oForm.elements[10];
var acnivels=document.getElementById("acnivel");
oText.value=acnivels.innerHTML;
oText = oForm.elements[11];
var academinius=document.getElementById("acadomeniu");
oText.value=academinius.innerHTML;
oText = oForm.elements[12];
var acposturis=document.getElementById("acposturi");
oText.value=acposturis.innerHTML;
oText = oForm.elements[13];
var acrelocares=document.getElementById("acrelocare");
oText.value=acrelocares.innerHTML;
oText = oForm.elements[14];
var acobiectivs=document.getElementById("acobiectiv");
oText.innerHTML=acobiectivs.innerHTML;
oText = oForm.elements[15];
var actipjobs=document.getElementById("actipjob").innerHTML;
oText.value=actipjobs;
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

  var otext1= document.forms[0].elements[1].value;
  var otext2= document.forms[0].elements[2].value;
  var otext3= document.forms[0].elements[3].value;
  var otext4= document.forms[0].elements[4].value;
  var otext5= document.forms[0].elements[5].value;
  var otext6= document.forms[0].elements[6].value;
  var otext7= document.forms[0].elements[7].value;
  var otext8= document.forms[0].elements[8].value;
  var otext9= document.forms[0].elements[9].value;
  var otext10= document.forms[0].elements[10].value;
var rez=0;
  if(otext10=="Entry-level")
    rez="1";
    else if(otext10=="Mid-level")
        rez="2";
        else if(otext10=="High-level")
            rez="3";
  var otext11= document.forms[0].elements[11].value;
  var otext12= document.forms[0].elements[12].value;
  var otext13= document.forms[0].elements[13].value;
  var otext14= document.forms[0].elements[14].value;
  var otext15= document.forms[0].elements[15].value;

  var infosend={
    "nume": otext1,
    "prenume":otext2,
    "sex":otext4,
    "varsta":otext3,
    "nr_telefon":otext5,
    "adresa":otext6,
    "oras":otext7,
    "salariu_dorit":otext8,
    "nivel_cariera":rez,
    "post_dorit":otext12,
    "relocare":otext13,
    "obiectiv":otext14,
    "tip_job":otext15,
    "domeniu":otext11,
    "email":otext9
  }
 console.log(otext1);
  var jsonstring=JSON.stringify(infosend);
   console.log(jsonstring);
  var hr=new XMLHttpRequest();
  var url="php/modificapersonaldata.php?obj="+jsonstring;
  hr.open("GET",url,true);
  hr.send();
   hr.onreadystatechange = function(){
     if(hr.readyState == 4 && hr.status == 200)
     {
         var rezulta1t = hr.responseText;


       if (rezulta1t=="succes"){
         document.getElementById("prezent").className+=" mareste";
         document.getElementById("prezent").classList.remove('micsoreaza');
           var removeble =document.getElementById("de_editat");
         removeble.parentNode.removeChild(removeble);
         var hri=new XMLHttpRequest();
           var url="php/personaldata.php";
         hri.open("GET",url,true);
         hri.send();
         hri.onreadystatechange = function()
         {
             if(hri.readyState == 4 && hr.status == 200)
             {
               var responce=hri.responseText;
               var re = JSON.parse(responce);
               document.getElementById('acname').innerHTML = re.nume;
               document.getElementById('acprenume').innerHTML = re.prenume;
               document.getElementById('actel').innerHTML = re.nr_telefon;
               document.getElementById('acmail').innerHTML = re.email;
               document.getElementById('acadres').innerHTML = re.adresa;
               document.getElementById('acoras').innerHTML = re.oras;
               document.getElementById('acsex').innerHTML = re.sex;
               document.getElementById('acvarsta').innerHTML = re.varsta;
               document.getElementById('acsalariu').innerHTML = re.salariu_dorit;
               var niv=re.nivel_cariera;
               if(niv=='1')
               document.getElementById('acnivel').innerHTML = 'Entry-level';
               else if(niv=='2')
               document.getElementById('acnivel').innerHTML = 'Mid-level';
               else if(niv=='3')
               document.getElementById('acnivel').innerHTML = 'High-level';
               document.getElementById('acadomeniu').innerHTML = re.domeniu;
               document.getElementById('acposturi').innerHTML = re.post_dorit;
               document.getElementById('acrelocare').innerHTML = re.relocare;
               document.getElementById('acobiectiv').innerHTML = re.obiectiv;
               document.getElementById('actipjob').innerHTML = re.tip_job;
               }
           }
         load_js();

       }
       else{
         console.log(rezulta1t);
       }
     }
   }
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


      }

      function modificaeducatie(i,id){

        document.getElementById('studii').innerHTML += "<div id='persona456723' class='prezentation-educatie'><div>";
        document.getElementById('persona456723').innerHTML += ;
        document.getElementById('persona456723').innerHTML +=;
          function saveeducatie(){

          }
      }

      }
