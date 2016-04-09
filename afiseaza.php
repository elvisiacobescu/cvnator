
<?php 
/* Program PHP scufundat intr-un document HTML, 
   folosit la exemplificarea preluarii datelor receptionate 
   via un formular Web -- exemplu de cod de tip spaghetti
   
   Autor: Sabin-Corneliu Buraga - http://www.purl.org/net/busaco
   2014, 2015

   Ultima actualizare: 10 martie 2015 
*/
   
   if (!$_REQUEST["nume"]) { // verificam daca s-a introdus numele

   echo ("<p>Nu ati introdus numele</p>");

   } 
   
   // verificam daca s-a introdus parola
   $parola = $_REQUEST["parola"];
   if (!$parola || strlen($parola) < 4 ) {
	
   echo ("<p>Parola d-voastra e prea scurta!</p>");

   } 
   else if (strlen($parola) > 20)
   { 

	   echo ("<p>Parola d-voastra e prea scurta!</p>");
   }

  
// conectarea la serverul MySQL
$mysql = new mysqli (
	'localhost', // locatia serverului (aici, masina locala)
	'root',       // numele de cont
	'',    // parola (atentie, in clar!)
	'CV'   // baza de date
	);

// verificam daca am reusit
if (mysqli_connect_errno()) {
	die ('Conexiunea a esuat...');
}

// formulam o interogare si o executam  
if (!($rez = $mysql->query ('select * from userdate'))) {
	die ('A survenit o eroare la interogare');
}
$ok=0;
// preluam inregistrarile gasite   
while ($inreg = $rez->fetch_assoc()) {
	if(($inreg['Mail']==$_REQUEST["nume"]) and ($inreg['Parola']==$_REQUEST["parola"]))
	{
		$ok=1;
		echo ("<p>!!! Bine ai venit, v-ati logat cu succes <em>" . $_REQUEST["nume"] . "</em>.</p>");
		
			
			setcookie ($_REQUEST["nume"],$_REQUEST["parola"],time()+4000);
			
		header("Location: cv.html");
	}
	
}
echo ('</ol>');
if ($ok==0)
	{
		echo ("<p>Login/parola gresita, domnule <em>" . $_REQUEST["nume"] . "</em>.</p>");
	}

// inchidem conexiunea cu serverul MySQL
$mysql->close();
?>