//se adauga campurile unui form care se ocupa cu editarea datelor personale cat si trimiterea datelor la servar ....Date le se autocompleteaza in form daca exista deja aduse din baza de date si puse in html
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
oForm = document.forms[1];
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

//se reincarca javascriptul ca sa poata fi refolosit butonul
 function load_js()
    {
       var head= document.getElementsByTagName('head')[0];
       var script= document.createElement('script');
       script.type= 'text/javascript';
       script.src= 'js/main.js';
       head.appendChild(script);
    }
 //butonul de salvare al datelor peronale-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("save1").addEventListener("click", function (){

  var otext1= document.forms[1].elements[1].value;
  var otext2= document.forms[1].elements[2].value;
  var otext3= document.forms[1].elements[3].value;
  var otext4= document.forms[1].elements[4].value;
  var otext5= document.forms[1].elements[5].value;
  var otext6= document.forms[1].elements[6].value;
  var otext7= document.forms[1].elements[7].value;
  var otext8= document.forms[1].elements[8].value;
  var otext9= document.forms[1].elements[9].value;
  var otext10= document.forms[1].elements[10].value;
var rez=0;
  if(otext10=="Entry-level")
    rez="1";
    else if(otext10=="Mid-level")
        rez="2";
        else if(otext10=="High-level")
            rez="3";
  var otext11= document.forms[1].elements[11].value;
  var otext12= document.forms[1].elements[12].value;
  var otext13= document.forms[1].elements[13].value;
  var otext14= document.forms[1].elements[14].value;
  var otext15= document.forms[1].elements[15].value;

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
 // console.log(otext1);
  var jsonstring=JSON.stringify(infosend);
  var hr=new XMLHttpRequest();
  var url="php/mpd.php?obj="+jsonstring;
  // var url="php/modificapersonaldata.php?obj="+jsonstring;
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
//butonul de logout--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
//butonul de stergere a permiselor-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

//butonul de stergerea a studiilor -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
//butonul de stergere al experientei-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    //butonul de stergere al altor activitati-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
//butonul de modificare al unei educatii precise date prin i fiind indexu de intrare in pagina si id locul din baza de date--------------------------------------------------------------------------------------------------------------------------------------
      function modificaeducatie(i,id){
        document.getElementById('edit_total').className = "";
        document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
        document.getElementById('persona456723').innerHTML +="Start :</br><input id='persona4567231'  class='celformat' type='date' data-date-inline-picker='false' /></br>";
        document.getElementById('persona456723').innerHTML +="Finish :</br><input id='persona4567232'  class='celformat' type='date' data-date-inline-picker='true' /></br>";
        document.getElementById('persona456723').innerHTML +="Numele institutie:</br><input id='persona4567233'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Oras:</br><input id='persona4567234'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Specialitate:</br><input id='persona4567235' class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Diploma obtinuta:</br><input id='persona4567236'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
        document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='saveeducatie("+i+","+id+")'><span class='savetext'>SAVE</span></div>";
        document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
        var texts=document.getElementById('persona4567231');
        var prelude =document.getElementById("data-stat-"+i).innerHTML;
        texts.value=document.getElementById("data-stat-"+i).innerHTML;
         texts=document.getElementById('persona4567232');
        texts.value=document.getElementById("data-stop-"+i).innerHTML;
         texts=document.getElementById('persona4567233');
        texts.value=document.getElementById("institutie-"+i).innerHTML;
         texts=document.getElementById('persona4567234');
        texts.value=document.getElementById("oras-"+i).innerHTML;
         texts=document.getElementById('persona4567235');
        texts.value=document.getElementById("specialitate-"+i).innerHTML;
         texts=document.getElementById('persona4567236');
        texts.value=document.getElementById("data-satus-"+i).innerHTML;
      }
      //face salvarea propriuzisa a modificarii
      function saveeducatie(i,id){
      var text1= document.getElementById('persona4567231').value;
      var text2= document.getElementById('persona4567232').value;
      var text3= document.getElementById('persona4567233').value;
      var text4= document.getElementById('persona4567234').value;
      var text5= document.getElementById('persona4567235').value;
      // var text5= document.forms[0].elements[5].value;
      var text6=document.getElementById('persona4567236').value;
    //  console.log(text5);
      var infosend={
        "start":text1,
        "stop":text2,
        "nume_institutie":text3,
        "oras":text4,
        "profil":text5,
        "diploma":text6,
        "entry_id":id
      }
      var jsonstring=JSON.stringify(infosend);
    //  console.log(jsonstring);
      var hr=new XMLHttpRequest();
      var url="php/modificaeducatie.php?obj="+jsonstring;
      hr.open("GET",url,true);
      hr.send();
      hr.onreadystatechange = function(){
        if(hr.readyState == 4 && hr.status == 200)
        {
            var rezulta1t = hr.responseText;
            if (rezulta1t=="succes"){
            document.getElementById("data-stat-"+i).innerHTML=text1;
            document.getElementById("data-stop-"+i).innerHTML=text2;
            document.getElementById("institutie-"+i).innerHTML=text3;
            document.getElementById("oras-"+i).innerHTML=text4;
            document.getElementById("specialitate-"+i).innerHTML=text5;
            document.getElementById("data-satus-"+i).innerHTML=text6;
            var removeble =document.getElementById("persona456723");
            removeble.parentNode.removeChild(removeble);
            document.getElementById('edit_total').className = "invizible";
            }
          }
        }
      }
      //butonul de adaugare al unei noi educatii----------------------------------------------------------------------------------------------------------
      function addneweducation(){
        document.getElementById('edit_total').className = "";
        document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
        document.getElementById('persona456723').innerHTML +="Start :</br><input id='persona4567231'  class='celformat' type='date' data-date-inline-picker='false' /></br>";
        document.getElementById('persona456723').innerHTML +="Finish :</br><input id='persona4567232'  class='celformat' type='date' data-date-inline-picker='true' /></br>";
        document.getElementById('persona456723').innerHTML +="Numele institutie:</br><input id='persona4567233'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Oras:</br><input id='persona4567234'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Specialitate:</br><input id='persona4567235' class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Diploma obtinuta:</br><input id='persona4567236'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
        document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='saveeducatie1()'><span class='savetext'>SAVE</span></div>";
        document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
      }
      //face salvarea propriuzisa a modificarii
      function saveeducatie1(){
      var text1= document.getElementById('persona4567231').value;
      var text2= document.getElementById('persona4567232').value;
      var text3= document.getElementById('persona4567233').value;
      var text4= document.getElementById('persona4567234').value;
      var text5= document.getElementById('persona4567235').value;
      var text6=document.getElementById('persona4567236').value;
      var infosend={
        "start":text1,
        "stop":text2,
        "nume_institutie":text3,
        "oras":text4,
        "profil":text5,
        "diploma":text6,
      }
      var jsonstring=JSON.stringify(infosend);
      var hr=new XMLHttpRequest();
      var url="php/adaugaeducatie.php?obj="+jsonstring;
      hr.open("GET",url,true);
      hr.send();
      hr.onreadystatechange = function(){
        if(hr.readyState == 4 && hr.status == 200)
        {
            var rezulta1t = hr.responseText;
            if (rezulta1t=="succes"){
            var removeble =document.getElementById("persona456723");
            removeble.parentNode.removeChild(removeble);
            // console.log(rezultat);
            document.getElementById('edit_total').className = "invizible";
               location.reload();
            }
          }
        }

       }
       //face adaugarea unei noi experiente---------------------------------------------------------------------------------------------------------------------
       function addnewexperienta(){
         document.getElementById('edit_total').className = "";
         document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
         document.getElementById('persona456723').innerHTML +="Start :</br><input id='persona4567231'  class='celformat' type='date' data-date-inline-picker='false' /></br>";
         document.getElementById('persona456723').innerHTML +="Finish :</br><input id='persona4567232'  class='celformat' type='date' data-date-inline-picker='true' /></br>";
         document.getElementById('persona456723').innerHTML +="Numele Companiei:</br><input id='persona4567233'  class='celformat' type='text' value=''></br>";
         document.getElementById('persona456723').innerHTML +="Domeniu:</br><input id='persona4567234'  class='celformat' type='text' value=''></br>";
         document.getElementById('persona456723').innerHTML +="Departament:</br><input id='persona4567235' class='celformat' type='text' value=''></br>";
         document.getElementById('persona456723').innerHTML +="Descrierea Jobului:</br><textarea id='persona4567236' rows='4' cols='50' name='comment'>Oscurta descriere a jobului </textarea> </br>";
         document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
         document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='saveexperienta1()'><span class='savetext'>SAVE</span></div>";
         document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";

       }
       //face salvarea propriuzisa a modificarii ----------------------------------------------------------------------------------------------------------------
       function saveexperienta1(){
         var text1= document.getElementById('persona4567231').value;
          var text2= document.getElementById('persona4567232').value;
          var text3= document.getElementById('persona4567233').value;
          var text4= document.getElementById('persona4567234').value;
          var text5= document.getElementById('persona4567235').value;
          var text6=document.getElementById('persona4567236').value;
          var infosend={
            "start":text1,
            "stop":text2,
            "nume_companie":text3,
            "domeniu":text4,
            "departament":text5,
            "descrierea_jobului":text6
          }
          var jsonstring=JSON.stringify(infosend);
          var hr=new XMLHttpRequest();
          var url="php/adaugaexperienta.php?obj="+jsonstring;
          hr.open("GET",url,true);
          hr.send();
          hr.onreadystatechange = function(){
            if(hr.readyState == 4 && hr.status == 200)
            {
                var rezulta1t = hr.responseText;
                if (rezulta1t=="succes"){
                var removeble =document.getElementById("persona456723");
                removeble.parentNode.removeChild(removeble);
                document.getElementById('edit_total').className = "invizible";
                   location.reload();
                }
              }
            }
        }
        //face modificare unei experiente precise prin cei 2 parametri i numaru de intrare in pagina si id numare de pozitie din baza de date ---------------------------
       function modificexperienta(i ,id){
         document.getElementById('edit_total').className = "";
         document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
         document.getElementById('persona456723').innerHTML +="Start :</br><input id='persona4567231'  class='celformat' type='date' data-date-inline-picker='false' /></br>";
         document.getElementById('persona456723').innerHTML +="Finish :</br><input id='persona4567232'  class='celformat' type='date' data-date-inline-picker='true' /></br>";
         document.getElementById('persona456723').innerHTML +="Numele Companiei:</br><input id='persona4567233'  class='celformat' type='text' value=''></br>";
         document.getElementById('persona456723').innerHTML +="Domeniu:</br><input id='persona4567234'  class='celformat' type='text' value=''></br>";
         document.getElementById('persona456723').innerHTML +="Departament:</br><input id='persona4567235' class='celformat' type='text' value=''></br>";
         document.getElementById('persona456723').innerHTML +="Descrierea Jobului:</br><textarea id='persona4567236' rows='4' cols='50' name='comment'>Oscurta descriere a jobului </textarea> </br>";
         document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
         document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='saveexperienta("+i+","+id+")'><span class='savetext'>SAVE</span></div>";
         document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
         var texts=document.getElementById('persona4567231');
         texts.value=document.getElementById("data-stat-expe-"+i).innerHTML;
          texts=document.getElementById('persona4567232');
         texts.value=document.getElementById("data-stop-expe-"+i).innerHTML;
          texts=document.getElementById('persona4567233');
         texts.value=document.getElementById("companie"+i).innerHTML;
          texts=document.getElementById('persona4567234');
         texts.value=document.getElementById("Domeniu"+i).innerHTML;
          texts=document.getElementById('persona4567235');
         texts.value=document.getElementById("Departament"+i).innerHTML;
          texts=document.getElementById('persona4567236');
         texts.innerHTML=document.getElementById("descriere "+i).innerHTML;
       }
       //face salvarea propriuzisa a modificarii
      function saveexperienta(i ,id){
        var text1= document.getElementById('persona4567231').value;
        var text2= document.getElementById('persona4567232').value;
        var text3= document.getElementById('persona4567233').value;
        var text4= document.getElementById('persona4567234').value;
        var text5= document.getElementById('persona4567235').value;
        var text6=document.getElementById('persona4567236').value;
        var infosend={
          "start":text1,
          "stop":text2,
          "nume_companie":text3,
          "domeniu":text4,
          "departament":text5,
          "descrierea_jobului":text6,
          "entry_id":id
        }

        var jsonstring=JSON.stringify(infosend);
      var hr=new XMLHttpRequest();
      var url="php/modificaexperienta.php?obj="+jsonstring;
      hr.open("GET",url,true);
      hr.send();
      hr.onreadystatechange = function(){
        if(hr.readyState == 4 && hr.status == 200)
        {
            var rezulta1t = hr.responseText;
            if (rezulta1t=="succes"){
            document.getElementById("data-stat-expe-"+i).innerHTML=text1;
            document.getElementById("data-stop-expe-"+i).innerHTML=text2;
            document.getElementById("companie"+i).innerHTML=text3;
            document.getElementById("Domeniu"+i).innerHTML=text4;
            document.getElementById("Departament"+i).innerHTML=text5;
            document.getElementById("descriere"+i).innerHTML=text6;
            var removeble =document.getElementById("persona456723");
            removeble.parentNode.removeChild(removeble);
            document.getElementById('edit_total').className = "invizible";
            }
          }
        }
      }
      //adauga o nou activitate-----------------------------------------------------------------------------------------------------------------------------------------------------------
      function addnewalteactivitati(){
        document.getElementById('edit_total').className = "";
        document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
        document.getElementById('persona456723').innerHTML +="Start :</br><input id='persona4567231'  class='celformat' type='date' data-date-inline-picker='false' /></br>";
        document.getElementById('persona456723').innerHTML +="Finish :</br><input id='persona4567232'  class='celformat' type='date' data-date-inline-picker='true' /></br>";
        document.getElementById('persona456723').innerHTML +="Denumirea:</br><input id='persona4567233'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Descrierea Jobului:</br><textarea id='persona4567234' rows='4' cols='50' name='comment'>Oscurta descriere a jobului </textarea> </br>";
        document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
        document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='savealtele1()'><span class='savetext'>SAVE</span></div>";
        document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
      }
      //face salvarea propriuzisa adaugarii--------------------------------------------------------------------------------------------------------------------------------------
      function savealtele1(){
              var text1= document.getElementById('persona4567231').value;
              var text2= document.getElementById('persona4567232').value;
              var text3= document.getElementById('persona4567233').value;
              var text4= document.getElementById('persona4567234').value;
              var infosend={
                "start":text1,
                "stop":text2,
                "titlu":text3,
                "descriere":text4,
              }
              var jsonstring=JSON.stringify(infosend);
              var hr=new XMLHttpRequest();
              var url="php/adaugaaltele.php?obj="+jsonstring;
              hr.open("GET",url,true);
              hr.send();
              hr.onreadystatechange = function(){
            if(hr.readyState == 4 && hr.status == 200)
            {
                var rezulta1t = hr.responseText;
                if (rezulta1t=="succes"){
                var removeble =document.getElementById("persona456723");
                removeble.parentNode.removeChild(removeble);
                document.getElementById('edit_total').className = "invizible";
                   location.reload();
                }
              }
            }

      }
      //face modificarea unei activitati prin cei doi parametri --------------------------------------------------------------------------------------------------------------------------------------
      function modificaaltele(i,id){

        document.getElementById('edit_total').className = "";
        document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
        document.getElementById('persona456723').innerHTML +="Start :</br><input id='persona4567231'  class='celformat' type='date' data-date-inline-picker='false' /></br>";
        document.getElementById('persona456723').innerHTML +="Finish :</br><input id='persona4567232'  class='celformat' type='date' data-date-inline-picker='true' /></br>";
        document.getElementById('persona456723').innerHTML +="Denumirea:</br><input id='persona4567233'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="Descrierea Jobului:</br><textarea id='persona4567234' rows='4' cols='50' name='comment'>Oscurta descriere a jobului </textarea> </br>";
        document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
        document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='saveealtele("+i+","+id+")'><span class='savetext'>SAVE</span></div>";
        document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
        var texts=document.getElementById('persona4567231');
        texts.value=document.getElementById("data-stat-expes-"+i).innerHTML;
         texts=document.getElementById('persona4567232');
        texts.value=document.getElementById("data-stop-expes-"+i).innerHTML;
         texts=document.getElementById('persona4567233');
        texts.value=document.getElementById("titlu-"+i).innerHTML;
         texts=document.getElementById('persona4567234');
        texts.value=document.getElementById("Domeniu-"+i).innerHTML;

      }
      //face salvarea propriuzisa a modificarii--------------------------------------------------------------------------------------------------------------------------------------
      function saveealtele(i,id){
        var text1= document.getElementById('persona4567231').value;
        var text2= document.getElementById('persona4567232').value;
        var text3= document.getElementById('persona4567233').value;
        var text4= document.getElementById('persona4567234').value;
        var infosend={
          "start":text1,
          "stop":text2,
          "titlu":text3,
          "descriere":text4,
          "entry_id":id
        }

        var jsonstring=JSON.stringify(infosend);
        var hr=new XMLHttpRequest();
        var url="php/modificaaltele.php?obj="+jsonstring;
        hr.open("GET",url,true);
        hr.send();
        hr.onreadystatechange = function(){
        if(hr.readyState == 4 && hr.status == 200)
        {
            var  rez = hr.responseText;
            console.log(rez);
            if ( rez=="reusit"){
              console.log(rez);
            document.getElementById("data-stat-expes-"+i).innerHTML=text1;
            document.getElementById("data-stop-expes-"+i).innerHTML=text2;
            document.getElementById("titlu-"+i).innerHTML=text3;
            document.getElementById("Domeniu-"+i).innerHTML=text4;

            var removeble =document.getElementById("persona456723");
            removeble.parentNode.removeChild(removeble);
            document.getElementById('edit_total').className = "invizible";
          }else{
          //  document.getElementById('edit_total').className = "invizible";
          }
         }
        }
      }
     //face stergerea unei limbi--------------------------------------------------------------------------------------------------------------------------------------
     function deletelimba(i,id){
       var delete1={"cat" : id};
       var jsonstring=JSON.stringify(delete1);
       var hr=new XMLHttpRequest();
       var url="php/deletelimbi.php?obj="+jsonstring;
       hr.open("GET",url,true);
       hr.send();
       hr.onreadystatechange = function()
       {
           if(hr.readyState == 4 && hr.status == 200)
           {
             //face primirea de date de la server--------------------------------------------------------------------------------------------------------------------------------------
             var rezultat = hr.responseText;
             if (rezultat=="Record deleted successfully"){
              console.log(rezultat);
              var element=document.getElementById("limba-"+i);
              element.parentNode.removeChild(element);
             }
             else{
               console.log(rezultat);
             }
           }
         }
     }
     //face adaugarea unei limbi(formul)--------------------------------------------------------------------------------------------------------------------------------------
     function addnewelimbi(){
       document.getElementById('edit_total').className = "";
       document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
       document.getElementById('persona456723').innerHTML +="Limba:<input id='persona4567231'  class='celformat' type='text' value=''></br>";
       document.getElementById('persona456723').innerHTML +="<span style='padding-right: 16px;'>Nivel-Limba:</span><select class='celformat'  id='persona4567232'><option disabled selected value> -- LEVEL -- </option><option>Beginer</option><option >Mediu</option><option >Good</option><option >Greate</option><select></br>";
       document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
       document.getElementById('butoane').innerHTML +="<div class='save_buton'  onclick='savelimba()' ><span class='savetext'>SAVE</span></div>";
       document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
     }
     //face salvarea propriuzisa si adaugarea in pagina --------------------------------------------------------------------------------------------------------------------------------------
     function savelimba(){
       var text1= document.getElementById('persona4567231').value;
       var text2= document.getElementById('persona4567232').value;
         console.log(text2);
       var val;
       if(text2=="Beginer"){
         val=1;
       }else if(text2=="Mediu"){
         val=2;
       }
       else if(text2=="Good"){
         val=3;
       }
       else if(text2=="Greate"){
         val=4;
       }
       var infosend={
         "limba":text1,
         "nivel":val
       }
       var jsonstring=JSON.stringify(infosend);
        console.log(jsonstring);
       var hr=new XMLHttpRequest();
       var url="php/adaugalimbi.php?obj="+jsonstring;
       hr.open("GET",url,true);
       hr.send();
       hr.onreadystatechange = function(){
       if(hr.readyState == 4 && hr.status == 200)
       {
           var  rez = hr.responseText;
           if ( rez=="succes"){
           var removeble =document.getElementById("persona456723");
           removeble.parentNode.removeChild(removeble);
           document.getElementById('edit_total').className = "invizible";
           location.reload();
         }
       }
     }
   }
   //face stergerea unui skil--------------------------------------------------------------------------------------------------------------------------------------
      function deleteskil(i,id){
        var delete1={"cat" : id};
        var jsonstring=JSON.stringify(delete1);
        var hr=new XMLHttpRequest();
        var url="php/deleteabilitati.php?obj="+jsonstring;
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
               var element=document.getElementById("skill"+i);
               element.parentNode.removeChild(element);
              }
              else{
                console.log(rezultat);
              }
            }
          }
      }
      //face adaugarea unui nou skil(form)--------------------------------------------------------------------------------------------------------------------------------------
      function addnewskils(){
        document.getElementById('edit_total').className = "";
        document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
        document.getElementById('persona456723').innerHTML +="skill:<input id='persona4567231'  class='celformat' type='text' value=''></br>";
        document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
        document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='saveskills1()'><span class='savetext'>SAVE</span></div>";
        document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";

      }
      //face salvarea noului skil
      function saveskills1(){
        var text1= document.getElementById('persona4567231').value;
        var infosend={
          "skill":text1,}
          var jsonstring=JSON.stringify(infosend);
          var hr=new XMLHttpRequest();
          var url="php/adaugaabilitati.php?obj="+jsonstring;
          hr.open("GET",url,true);
          hr.send();
          hr.onreadystatechange = function(){
            if(hr.readyState == 4 && hr.status == 200)
            {
                var rezulta1t = hr.responseText;
                if (rezulta1t=="succes"){
                var removeble =document.getElementById("persona456723");
                removeble.parentNode.removeChild(removeble);
                // console.log(rezultat);
                document.getElementById('edit_total').className = "invizible";
                   location.reload();
                }
              }
            }
      }
      // /face adaugarea unui nou permis(form)--------------------------------------------------------------------------------------------------------------------------------------
    function addnewepermis(){

      document.getElementById('edit_total').className = "";
      document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
      document.getElementById('persona456723').innerHTML +="<span style='padding-right: 16px;'>Categorie permis:</span><select class='celformat'  id='persona4567231'><option disabled selected value> -- CATEGORE-- </option><option>A1</option><option >A</option><option >B1</option><option >B</option><option >C1</option><option >C</option><option >D1</option><option >D</option><select></br>";
      document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
      document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='savepermiss1()'><span class='savetext'>SAVE</span></div>";
      document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
    }

  //  salveaza permisul in baza de date
  function savepermiss1(){
   var text1= document.getElementById('persona4567231').value;
   var infosend={
     "categorie":text1}
     var jsonstring=JSON.stringify(infosend);
     var hr=new XMLHttpRequest();
     var url="php/adaugapermis.php?obj="+jsonstring;
     hr.open("GET",url,true);
     hr.send();
     hr.onreadystatechange = function(){
       if(hr.readyState == 4 && hr.status == 200)
       {
           var rezulta1t = hr.responseText;
           if (rezulta1t=="succes"){
           var removeble =document.getElementById("persona456723");
           removeble.parentNode.removeChild(removeble);
           // console.log(rezultat);
           document.getElementById('edit_total').className = "invizible";
              location.reload();
           }
         }
       }

 }
    //face modificarea unei limbi specifice cu ajutorul lui i si al id si nivelul de limba (form)--------------------------------------------------------------------------------------------------------------------------------------
   function modificalimbi(i,id,nivel){
     document.getElementById('edit_total').className = "";
     document.getElementById('edit_total1').innerHTML += "<div id='persona456723' class='colosus1' ><div>";
     document.getElementById('persona456723').innerHTML +="Limba:<input id='persona4567231'  class='celformat' type='text' value=''></br>";
     document.getElementById('persona456723').innerHTML +="<span style='padding-right: 16px;'>Nivel-Limba:</span><select class='celformat'  id='persona4567232'><option disabled selected value> -- LEVEL -- </option><option>Beginer</option><option >Mediu</option><option >Good</option><option >Greate</option><select></br>";
     document.getElementById('persona456723').innerHTML +="<div id='butoane'></div>";
     document.getElementById('butoane').innerHTML +="<div class='save_buton' onclick='savelimbi("+i+","+id+","+nivel+")'><span class='savetext'>SAVE</span></div>";
     document.getElementById('butoane').innerHTML +="<div class='exit1' onclick='exit0()'></div>";
     var texts=document.getElementById('persona4567231');
     texts.value=document.getElementById("lenguge-name"+i).innerHTML;
     console.log(nivel);
      texts=document.getElementById('persona4567232');
      if(nivel==1){texts.value="Beginer";}
      else if(nivel==2){texts.value="Mediu";}
      else if(nivel==3){texts.value="Good";}
      else if(nivel==4){texts.value="Greate";}



   }
//salveaza propriuzs modificare facuta--------------------------------------------------------------------------------------------------------------------------------------
   function savelimbi(i,id,nivel){
     var text1= document.getElementById('persona4567231').value;
     var text2= document.getElementById('persona4567232').value;
       console.log(text2);
     var val;
     if(text2=="Beginer"){
       val=1;
     }else if(text2=="Mediu"){
       val=2;
     }
     else if(text2=="Good"){
       val=3;
     }
     else if(text2=="Greate"){
       val=4;
     }
     var infosend={
       "limba":text1,
       "nivel":val,
       "entry_id":id
     }
     var jsonstring=JSON.stringify(infosend);
      console.log(jsonstring);
     var hr=new XMLHttpRequest();
     var url="php/modificalimbi.php?obj="+jsonstring;
     hr.open("GET",url,true);
     hr.send();
     hr.onreadystatechange = function(){
     if(hr.readyState == 4 && hr.status == 200)
     {
         var  rez = hr.responseText;
         if ( rez=="succes"){
             location.reload();
       }
     }
   }

   }
   //face previev pt cv voluntariat--------------------------------------------------------------------------------------------------------------------------------------
   function redirectpreviuvoluntariat(){
     window.location="php/pdf/pdf2.php"
   }
   //face previev pt cv job--------------------------------------------------------------------------------------------------------------------------------------
   function redirectpreviujob(){
     window.location="php/pdf/pdf.php"
   }
  function exit0(){
    var removeble =document.getElementById("persona456723");
    removeble.parentNode.removeChild(removeble);
    document.getElementById('edit_total').className = "invizible";

  }
