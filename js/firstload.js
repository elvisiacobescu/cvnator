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
         document.getElementById('nume-utilizator-helo').innerHTML +=  responce;
         }
     }
   }

  asckname();


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
         mail=responce;
         document.getElementById('eror-respoce').innerHTML +=  responce;
         }
     }
 }

 askpersonaldata();

}
