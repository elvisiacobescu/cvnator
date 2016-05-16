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
          var id=re[i].entry_id;
          // console.log(start);
          document.getElementById('studii').innerHTML += "<div id='personal-"+i+"' class='prezentation-educatie'><div>";
          document.getElementById('personal-'+i).innerHTML +="<div class='exit' onclick='deletestudiu("+i+","+id+")'></div>";
          document.getElementById('personal-'+i).innerHTML +="<div id='edit-studii-"+i+"' class='edit-studii'><img src='img/edit_ico.png' width='25' height='25' alt='nu EXISTA IMAGINEA' class=' edit_buton_style' /></div>";
          document.getElementById('personal-'+i).innerHTML +="<div class='time'><span>From:</span><span id='data-stat-"+i+"''class='time'>"+start+"</span><span class='time'>  -to- </span> <span id='data-stop-"+i+"''class='time'>"+stop+"</span> </br>";
          document.getElementById('personal-'+i).innerHTML +="<span class='bold text-margin'>Numele institutie:</span><span id='institutie-"+i+"''>"+institutie+"</span> </br>";
          document.getElementById('personal-'+i).innerHTML +="<span class='bold text-margin'>oras:</span><span id='oras-"+i+"''>"+oras+"</span></br>";
          document.getElementById('personal-'+i).innerHTML +="<span class='bold text-margin'>Specialitate:</span><span id='specialitate-"+i+"''>"+profil+"</span></br>";
          document.getElementById('personal-'+i).innerHTML +="<span class='bold text-margin'>Diploma obtinuta:</span><span id='data-stat-"+i+"''>"+re[i].diploma+"</span></br>";
          document.getElementById('personal-'+i).innerHTML += "<div  class='space'></div>";
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
         var Numele_Companiei= re[i].Numele_Companiei;
         var Domeniu= re[i].domeniu;
         var Departament= re[i].departament;
         var descriere= re[i].descrierea_jobului;
         var id=re[i].entry_id;
           // console.log(start);
         document.getElementById('experienta').innerHTML += "<div id='experienta-"+i+"' class='prezentation'></div>";
         document.getElementById('experienta-'+i).innerHTML +="<div class='exit' onclick='deletexp("+i+","+id+")'></div>";
         document.getElementById('experienta-'+i).innerHTML +="<div id='edit-experienta-"+i+"' class='edit-experienta'><img src='img/edit_ico.png' width='25' height='25' alt='nu EXISTA IMAGINEA' class=' edit_buton_style'/></div>";
         document.getElementById('experienta-'+i).innerHTML +="<div class='time'><span>From:</span><span id='data-stat-expe-"+i+"''class='time'>"+start+"</span><span class='time'>  -to- </span> <span id='data-stop-expe-"+i+"''class='time'>"+stop+"</span> </br>";;
         document.getElementById('experienta-'+i).innerHTML +="<span class='bold'>Numele Companiei:</span><span id='companie"+i+" >"+Numele_Companiei+"</span> </br>";
         document.getElementById('experienta-'+i).innerHTML +="<span class='bold'>Domeniu:</span><span id='Domeniu"+i+"''>"+Domeniu+"</span></br>";
         document.getElementById('experienta-'+i).innerHTML +="<span class='bold'>Departament:</span><span id='Departament"+i+"''>"+Departament+"</span></br>";
         document.getElementById('experienta-'+i).innerHTML +="<span class='bold'>Descrierea-Jobului:</span><span id='descriere"+i+"''>"+descriere+"</span></br>";
         document.getElementById('experienta-'+i).innerHTML +="<div class='space'></div>";
       }
        }
    }
  }
  experienta();

  function altele(){
  var hr=new XMLHttpRequest();
  var url="php/altele.php";
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
         var titlu= re[i].titlu;
         var descriere= re[i].descriere;

           // console.log(start);
         document.getElementById('altele').innerHTML += "<div id='altele-"+i+"' class='prezentation'></div>";
          document.getElementById('altele-'+i).innerHTML +="<div class='exit'></div>";
         document.getElementById('altele-'+i).innerHTML +="<div id='edit-altele-"+i+"' class='edit-altele'><img src='img/edit_ico.png' width='25' height='25' alt='nu EXISTA IMAGINEA' class=' edit_buton_style'/></div>";
         document.getElementById('altele-'+i).innerHTML +="<div class='time'><span>From:</span><span id='data-stat-expe-"+i+" class='time'>"+start+"</span><span class='time'>  -to- </span> <span id='data-stop-expe-"+i+"''class='time'>"+stop+"</span> </br>";;
         document.getElementById('altele-'+i).innerHTML   +="<span class='bold'>Denumirea:</span><span id='titlu-"+i+"' >"+titlu+"</span> </br>";
        //  console.log(descriere);
         document.getElementById('altele-'+i).innerHTML +="<span class='bold'>Descriere:</span><span id='Domeniu-"+i+"'>"+descriere+"</span></br>";
         document.getElementById('altele-'+i).innerHTML +="<div class='space'></div>";
       }
        }
    }
  }
  altele();
  function skils(){
  var hr=new XMLHttpRequest();
  var url="php/abilitati.php";
  hr.open("GET",url,true);
  hr.send();
  hr.onreadystatechange = function()
  {
      if(hr.readyState == 4 && hr.status == 200)
      {
         var responce=hr.responseText;
         var re = JSON.parse(responce);
         var count= Object.keys(re).length;//vede cate obiecte are
           // console.log(start);
         document.getElementById('skills').innerHTML += "<div id='skills1' class='prezentation'></div>";
          document.getElementById('skills1').innerHTML += "<div  class='space'></div>";
          for (var i =0; i<count;i++)
            {
                var skil= re[i].skill;
                document.getElementById('skills1').innerHTML += "<div id='skill"+i+"' class='tag-skil'> "+skil+"<span id='dels"+i+"' class='delete'> X <span> </div>";
            }
            document.getElementById('skills1').innerHTML += "<div  class='clear space'></div>";
        }
    }
  }

skils();
function permis(){
var hr=new XMLHttpRequest();
var url="php/permis.php";
hr.open("GET",url,true);
hr.send();
hr.onreadystatechange = function()
{
    if(hr.readyState == 4 && hr.status == 200)
    {
       var responce=hr.responseText;
       var re = JSON.parse(responce);
       var count= Object.keys(re).length;
       //vede cate obiecte are
         // console.log(start);
         if(count!=0){
       document.getElementById('permis').innerHTML += "<div id='permis1' class='prezentation'></div>";
        document.getElementById('permis1').innerHTML += "<div  class='space'></div>";
        for (var i=0; i<count;i++)
          {
              var skil= re[i].categorie;
              var id=re[i].id;
              document.getElementById('permis1').innerHTML += "<div id='permi"+i+"' class='tag-skil'> "+skil+"<span id='delp"+i+"' class='delete' onclick='deletepermis("+i+","+id+")' > X <span> </div>";
          }
          document.getElementById('permis1').innerHTML += "<div  class='clear space'></div>";
      }
      else{
        document.getElementById('permis').innerHTML += "<div  class='space'></div>";
        document.getElementById('permis').innerHTML += "<div id='permis1' class='prezentation'> nu are permis </div>";
        document.getElementById('permis').innerHTML += "<div  class='space'></div>";
      }
    }

  }
}

permis();

function lenguge(){
  var hr=new XMLHttpRequest();
  var url="php/limbi.php";
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
         var limba= re[i].limba;
         var nivel= re[i].nivel;
           // console.log(start);
         document.getElementById('limbi').innerHTML += "<div id='limba-"+i+"'  ></div>";
                 document.getElementById('limba-'+i).innerHTML +="<div class='exit' ></div>";
         document.getElementById('limba-'+i).innerHTML +="<div id='edit-limba-"+i+"' class='edit-altele'><img src='img/edit_ico.png' width='25' height='25' alt='nu EXISTA IMAGINEA' class=' edit_buton_style'/></div>";
         document.getElementById('limba-'+i).innerHTML +="<div class='lenguge-name'>"+limba+"</div> </br>";
         document.getElementById('limba-'+i).innerHTML +="<div id='lenguge-lvl' class='lenguge-lvl'></div> </br>";
         document.getElementById('limba-'+i).innerHTML +="<div class='space'></div>";
         if(nivel==1){document.getElementById('lenguge-lvl').innerHTML +="<div class='white-bar bar_poz1'> </div>";}
         else if(nivel==2){document.getElementById('lenguge-lvl').innerHTML +="<div class='white-bar bar_poz2'> </div>";}
         else if(nivel==3){document.getElementById('lenguge-lvl').innerHTML +="<div class='white-bar bar_poz3'> </div>";}
         else if(nivel==4){document.getElementById('lenguge-lvl').innerHTML +="<div class='white-bar bar_poz4'> </div>";}
       }
        }
    }

}
lenguge();

}
