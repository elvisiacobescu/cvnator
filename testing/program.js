//document.writeln('Hello, world!');
//variable declaraation
var mamamia='aceasta e ste o variabila globala care poate fi schimbata';
//object declaration
var car ={
  type:"fiat",
  model:"500",
  color:"white",
//  myArr:["argument1","argument2","argument2"]
};
var jsonstring=jstringifai(car);

function jstringifai(a){
var string=

// var stringg='{'+'"'+"type"+'"'+":"+'"'+ a.type+'"'+','+'"'+"model"+'"'+":" +'"'+a.model + '"' + ',' + '"' + "color" + '"' + ":" ;
// stringg=stringg + '"'+ a.color +'"' +'}';
  return stringg;
}
//face din tr-un json un obiect pe cre pot eu sa il manipulez
function jsparser(text){
  obj = JSON.parse(text);
  document.writeln(obj.type);
}
//frontul face doar reques inca nu am reusit sa trimit date si sa aduc
// function senddata(){
//   var hr=new XMLHttpRequest();
//   var url="hel.php?x=";
//    hr.open("POST",url,true);
//    hr.setRequestHeader("Content-type", url , true);
//    hr.send();
//      document.writeln( "intra aici");
//    hr.onreadystatechange = function(){
//     if(hr.readyState == 4 && hr.status == 200) {
//       //face parsarea aici :)
//      document.writeln( hr.responseText);
//
//      }
//      }
//   }
//   senddata();
//am reusit sa trimit si date restul experimentelor vor fi facute impreuna cu vitalie !! azi sau maine !!
  function senddata(){
      var hr=new XMLHttpRequest();
      var url="hel.php?x="+jsonstring;
       hr.open("POST",url,true);
      // hr.setRequestHeader("Content-type", url , true);
       hr.send();
      //   document.writeln( "intra aici");
       hr.onreadystatechange = function()
     {
        if(hr.readyState == 4 && hr.status == 200)
     {

         //face primirea de date de la server  :)
          var test=hr.responseText;
        //  jsparser(test);
         document.getElementById("severrespoce").innerHTML= test;
         //nu fasce parsarea cum trebuie da o eruare si nu afiseaza aici

         // document.writeln( hr.responseText);
     }
    }
  }
 senddata();
function merge (){
  //document.writeln('merge si asa se  scri eo functie ');
  //document.writeln(mamamia);
  //mamamia='parametru schimbat';
  //document.writeln(mamamia);
  //document.writeln("type :"+car.type+"\nmodel :"+car.model + "\ncolor :"+car.color);
  //printcar(car);
  //var plein=new car();
//  newcar(plein,"nokia","1110","purupuriu");
//  printcar(plein);
   document.writeln(jsonstring);
   //jsparser(jsonstring);

}
merge();

function printcar(carty){
document.writeln("type :"+carty.type+"\nmodel :"+carty.model + "\ncolor :"+carty.color);
 }


//function newcar(obj,name,type,color){document.writeln(mamamia);
// var plein=new car ();
//obj.type=name;
//  document.writeln(mamamia);
//obj.model=type;
//obj.color=color;
//}
