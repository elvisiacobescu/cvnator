window.onload = function() {
//pune style shetul in head
  var head = document.head
  , link = document.createElement('link')

link.type = 'text/css'
link.rel = 'stylesheet'
link.href = 'style.css'

head.appendChild(link)
//creaza formularul si butoaneles
document.getElementById('bookingsystem').innerHTML += "<form id='bookingform' action='index.html' method='post'></form>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 43px 10px 5px;'>Name:</span><input class='celformat' name='name' type='text' value=''/></br>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 51px  10px 5px;'>Date:</span><input class='celformat'type='date' data-date-inline-picker='true' /></br>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 52px  10px 5px;'>Start:</span><select class='celformat' id='start'></select></br>";
document.getElementById('start').innerHTML += " <option disabled selected value> -- select a city -- </option>";
document.getElementById('start').innerHTML += "<option value='iasi'>Iasi</option>";
document.getElementById('start').innerHTML += "<option value='bacau'>Bacau</option>";
document.getElementById('start').innerHTML += "<option value='suceava'>Suceava</option>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 10px 10px 5px;'>Destination:</span><select class='celformat' id='stop'></select></br>";
document.getElementById('stop').innerHTML += " <option disabled selected value> -- select a city -- </option>";
document.getElementById('stop').innerHTML += "<option value='iasi'>Iasi</option>";
document.getElementById('stop').innerHTML += "<option value='bacau'>Bacau</option>";
document.getElementById('stop').innerHTML += "<option value='suceava'>Suceava</option>";
document.getElementById('stop').innerHTML += "<option value='pascani'>Pascani</option>";
document.getElementById('stop').innerHTML += "<option value='roman'>Roman</option>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 29px 10px 5px;'>Car type:</span><select  class='celformat' id='car'></select></br>";
document.getElementById('car').innerHTML += " <option disabled selected value> -- select a car -- </option>";
document.getElementById('car').innerHTML += "<option value='vip'>Vip</option>";
document.getElementById('car').innerHTML += "<option value='salon'>Salon</option>";
document.getElementById('car').innerHTML += "<option value='8-seater'>8-seater</option>";
document.getElementById('bookingsystem').innerHTML += "<p id='showproce'></P></br>";
document.getElementById('bookingsystem').innerHTML += "<div id='buton1' class='buton1'>BOOCK</div>";
document.getElementById('bookingsystem').innerHTML += "<div id='buton2' class='buton2'>BOOCKINGS</div>";
document.getElementById('bookingsystem').innerHTML += "<div  class='clear'></div>";
document.getElementById('bookingsystem').innerHTML += "<p id='show-error'></P></br>";
//aici se termina formul
//---incep functiile---------------------------------------------------------
//aici se trimite apeleaza o functie la un interval de o secunda
var start='';
var stop='';
var car='';
var name='';
var date='';
var pret='';
var price='';
//e un timer care cheama o functie o data la o secunda
var auto_refresh = setInterval(function() { asckprice(); }, 1000);//testata si functioneaza
//functia asta trebuie sa faca afisare automata a pretului
  function asckprice(){
    //document.getElementById('showproce').innerHTML ="test"
    //----aici am luat datele din form si am facut json din ele--
    oForm = document.forms[0];
    var start1=oForm.elements[2].value;
    var stop1=oForm.elements[3].value;
    var car1=oForm.elements[4].value;
    var price={
      "start" : start1,
      "stop" : stop1,
      "car" : car1
    }
    //testeaza daca sa schimbat vreo casuta
    if(start != start1 || stop != stop1 || car != car1  ){
      start=start1;
      stop=stop1;
      car=car1;
      //testeaza daca este scris ceva
      if(start !='' && stop != '' && car != ''){
        var jsonstring=JSON.stringify(price);
        //--aici trebuie sa facem legatura cu back endul si sa aducem datele
        var hr=new XMLHttpRequest();
        var url="php/qoutes.php?obj="+jsonstring;
        hr.open("GET",url,true);
        hr.send();
        hr.onreadystatechange = function()
        {
            if(hr.readyState == 4 && hr.status == 200)
            {
              //face primirea de date de la server
              pret=hr.responseText;
              var rezultat ="Price :" + pret+"$";
              document.getElementById('showproce').innerHTML =rezultat;
            }
          }
    }
    }
  }
  //functionalitate butonului de booking
  document.getElementById('buton1').addEventListener("click",function(){
      oForm = document.forms[0];
      name=oForm.elements[0].value;
      date=oForm.elements[1].value;
      document.getElementById('show-error').innerHTML =price;
      //ifurile intreaba daca sunt completate campurile
        if(name == ''){
            document.getElementById('show-error').innerHTML ="please enter your name";
            }
            else if(date == ''){
              document.getElementById('show-error').innerHTML ="please enter a date";
            }  else if(start == ''){
                document.getElementById('show-error').innerHTML ="please choose a starting loction";
              }  else if(stop == ''){
                  document.getElementById('show-error').innerHTML ="please choose a destination";
                }  else if(car == ''){
                    document.getElementById('show-error').innerHTML ="please choose a car";
                  }else{
                      var register={
                        "name" : name,
                        "date" : date,
                        "start" : start,
                        "stop" : stop,
                        "car" : car,
                        "price" : pret
                      }
                  var jsonstring=JSON.stringify(register);
                //  document.getElementById('show-error').innerHTML =jsonstring;
                  var hr=new XMLHttpRequest();
                  var url="php/register.php?obj="+jsonstring;
                  hr.open("GET",url,true);
                  hr.send();
                  hr.onreadystatechange = function()
                  {
                      if(hr.readyState == 4 && hr.status == 200)
                      {
                        //face primirea de date de la server
                        var rezultat = hr.responseText;
                        document.getElementById('show-error').innerHTML =rezultat;
                        //se reseteaza formul
                        oForm.reset();
                      }
                    }
                }
  })
  //functionalitatea butonulu deafisare a ezervariolor
    document.getElementById('buton2').addEventListener("click",function(){
      var hr=new XMLHttpRequest();
      var url="php/all.php";
      hr.open("GET",url,true);
      hr.send();
      hr.onreadystatechange = function(){
        var jsontext=hr.responseText;
        var obj = JSON.parse(jsontext);
      //asta e functia care numara cate obecte avem.
        var count= Object.keys(obj).length;
      //  var count=Object.keys(obj).length;
        document.getElementById('show-error').innerHTML ="" ;
      for (var i=0;i<count;i++){
        document.getElementById('show-error').innerHTML +="<div class ='name floter'>"+obj[i].name+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='start floter'>"+obj[i].start+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='stop floter'>"+obj[i].stop+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='date floter'>"+obj[i].date+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='car  floter'>"+obj[i].car+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='price floter'>"+obj[i].price+"</div>" ;
      }
    }
    })
}
