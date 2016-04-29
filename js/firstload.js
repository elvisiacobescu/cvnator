//DUPA CESA INCARCAT TOATA PAGINA APELEAZA CE
window.onload = function () {
 var mail='';
 var responce='';
 function asckname(){
   var hr=new XMLHttpRequest();
   var url="php/getusername.php";
   hr.open("GET",url,true);
   hr.send();
   hr.onreadystatechange = function()
   {
       if(hr.readyState == 4 && hr.status == 200)
       {
         var responce=hr.responseText;
         mail=responce;
         document.getElementById('nume-utilizator-helo').innerHTML ="HI " +responce;
         }
     }
   }

  asckname();

//first load date personale ... mai trebuie poza :)
   function askpersonaldata(){
   var hr=new XMLHttpRequest();
   var url="php/personaldata.php";
   hr.open("GET",url,true);
   hr.send();
   hr.onreadystatechange = function()
   {
       if(hr.readyState == 4 && hr.status == 200)
       {
         var responce=hr.responseText;
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

         }
     }
 }
 askpersonaldata();
 function educatie(){
 var hr=new XMLHttpRequest();
 var url="php/educatie.php";
 hr.open("GET",url,true);
 hr.send();
 hr.onreadystatechange = function()
 {
     if(hr.readyState == 4 && hr.status == 200)
     {
        var responce=hr.responseText;
        var re = JSON.parse(responce);
        var count= Object.keys(re).length;//vede cate obiecte are
        for (var i=0;i<count;i++){
        var start= re[i].start;
        var stop= re[i].stop;
        var institutie= re[i].nume_institutie;
        var oras= re[i].oras;
        var profil= re[i].profil;
          // console.log(start);
        document.getElementById('studii').innerHTML += "<div id='personal-"+i+"' class='prezentation'><div>";
        document.getElementById('personal-'+i).innerHTML +="<div id='edit-studii-"+i+"' class='edit-studii'><img src='img/edit_ico.png' width='25' height='25' alt='nu EXISTA IMAGINEA' /></div>";
        document.getElementById('personal-'+i).innerHTML +="<div class'time'><span>date:</span><span id='data-stat-"+i+"''>"+start+"</span>  -  <spanid='data-stop-"+i+"''>"+stop+"</span> </br>";
        document.getElementById('personal-'+i).innerHTML +="<span>nume-institutie:</span><span id='institutie-"+i+"''>"+institutie+"</span> </br>";
        document.getElementById('personal-'+i).innerHTML +="<span>oras:</span><span id='oras-"+i+"''>"+oras+"</span></br>";
        document.getElementById('personal-'+i).innerHTML +="<span>Specialitate:</span><span id='specialitate-"+i+"''>"+profil+"</span></br>";
        document.getElementById('personal-'+i).innerHTML +="<spanc class='bold-prezentationtext'>Diploma obtinuta:</span><span id='data-stat-"+i+"''>"+profil+"</span></br>";
        }
       }
   }
 }
  educatie();
  function experienta(){
  var hr=new XMLHttpRequest();
  var url="php/experienta.php";
  hr.open("GET",url,true);
  hr.send();
  hr.onreadystatechange = function()
  {
      if(hr.readyState == 4 && hr.status == 200)
      {
         var responce=hr.responseText;
         var re = JSON.parse(responce);
         var count= Object.keys(re).length;//vede cate obiecte are
         for (var i=0;i<count;i++){
         var start= re[i].start;
         var stop= re[i].stop;
         var institutie= re[i].nume_institutie;
         var oras= re[i].oras;
         var profil= re[i].profil;
           // console.log(start);
         document.getElementById('experienta').innerHTML += "<div id='experienta-"+i+"' class='prezentation'><div>";
         document.getElementById('experienta-'+i).innerHTML +="<div id='edit-studii-"+i+"' class='edit-studii'><img src='img/edit_ico.png' width='25' height='25' alt='nu EXISTA IMAGINEA' /></div>";
         document.getElementById('experienta-'+i).innerHTML +="<div class'time'><span>date:</span><span id='data-stat-"+i+"''>"+start+"</span>  -  <spanid='data-stop-"+i+"''>"+stop+"</span> </br>";
         document.getElementById('experienta-'+i).innerHTML +="<span>nume-institutie:</span><span id='institutie"+i+"''>"+institutie+"</span> </br>";
         document.getElementById('experienta-'+i).innerHTML +="<span>oras:</span><span id='oras"+i+"''>"+oras+"</span></br>";
         document.getElementById('experienta-'+i).innerHTML +="<span>Specialitate:</span><span id='data-stat-"+i+"''>"+profil+"</span></br>";
         }
        }
    }
  }
  experienta();
}
