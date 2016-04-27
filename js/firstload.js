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
         else if(niv=='2')
         document.getElementById('acnivel').innerHTML = 'High-level';
         document.getElementById('acadomeniu').innerHTML = re.domeniu;
         document.getElementById('acposturi').innerHTML = re.post_dorit;
         document.getElementById('acrelocare').innerHTML = re.relocare;
         document.getElementById('acobiectiv').innerHTML = re.obiectiv;

         }
     }
 }
 askpersonaldata();

}
