<?php
require('C:\xampp\htdocs\cvnator\php\pdf\fpdf.php');

class PDF extends FPDF
{
	protected $B = 0;
protected $I = 0;
protected $U = 0;
protected $HREF = '';
// Page header
function Header()
{
	// Logo
	$this->Image('logocvnator.png',10,6,30);
	// Arial bold 15
	$this->SetFont('Arial','B',15);
	// Move to the right
	$this->Cell(80);
	// Title
	$this->Cell(30,10,'Cv',1,0,'C');
	// Line break
	$this->Ln(20);
}
function WriteHTML($html)
{
	// HTML parser
	$html = str_replace("\n",' ',$html);
	$a = preg_split('/<(.*)>/U',$html,-1,PREG_SPLIT_DELIM_CAPTURE);
	foreach($a as $i=>$e)
	{
		if($i%2==0)
		{
			// Text
			if($this->HREF)
				$this->PutLink($this->HREF,$e);
			else
				$this->Write(5,$e);
		}
		else
		{
			// Tag
			if($e[0]=='/')
				$this->CloseTag(strtoupper(substr($e,1)));
			else
			{
				// Extract attributes
				$a2 = explode(' ',$e);
				$tag = strtoupper(array_shift($a2));
				$attr = array();
				foreach($a2 as $v)
				{
					if(preg_match('/([^=]*)=["\']?([^"\']*)/',$v,$a3))
						$attr[strtoupper($a3[1])] = $a3[2];
				}
				$this->OpenTag($tag,$attr);
			}
		}
	}
}
function OpenTag($tag, $attr)
{
	// Opening tag
	if($tag=='B' || $tag=='I' || $tag=='U')
		$this->SetStyle($tag,true);
	if($tag=='A')
		$this->HREF = $attr['HREF'];
	if($tag=='BR')
		$this->Ln(5);
}

function CloseTag($tag)
{
	// Closing tag
	if($tag=='B' || $tag=='I' || $tag=='U')
		$this->SetStyle($tag,false);
	if($tag=='A')
		$this->HREF = '';
}

function SetStyle($tag, $enable)
{
	// Modify style and select corresponding font
	$this->$tag += ($enable ? 1 : -1);
	$style = '';
	foreach(array('B', 'I', 'U') as $s)
	{
		if($this->$s>0)
			$style .= $s;
	}
	$this->SetFont('',$style);
}

function PutLink($URL, $txt)
{
	// Put a hyperlink
	$this->SetTextColor(0,0,255);
	$this->SetStyle('U',true);
	$this->Write(5,$txt,$URL);
	$this->SetStyle('U',false);
	$this->SetTextColor(0);
}
// Page footer
function Footer()
{
	// Position at 1.5 cm from bottom
	$this->SetY(-15);
	// Arial italic 8
	$this->SetFont('Arial','I',8);
	// Page number
	$this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

// Instanciation of inherited class
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);


//for($i=1;$i<=40;$i++)
//	$pdf->Cell(0,10,'Printing line number '.$i,0,1);

//aici ne conectam la bd si afisam datele
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
$nrexperiente="";
$userid=$_COOKIE["cookie_user_id"];
//personal data
$pdf->WriteHTML('<b> Informatii Personale: </b>');
$conn = new mysqli($servername, $username, $password,$dbname);
$getid=sprintf("SELECT * FROM date_personale where user_id=".$userid);
$rezult= $conn ->query($getid);


if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {

   $pdf->WriteHTML('<img src="$row["cale_poza"]" alt="poza">');
   $pdf->WriteHTML('<br>');
 $pdf->WriteHTML('<i>Nume: </i>'); $pdf->Cell(190,5,$row["nume"]);
  $pdf->WriteHTML('<br>');
$pdf->WriteHTML('<i>Prenume: </i>'); $pdf->Cell(190,5,$row["prenume"]);
 $pdf->WriteHTML('<i>Sex: </i>'); $pdf->Cell(190,5,$row["sex"]);
  $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Varsta: </i>'); $pdf->Cell(190,5,$row["varsta"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Email: </i>'); $pdf->Cell(190,5,$row["email"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Numar de telefon: </i>'); $pdf->Cell(190,5,$row["nr_telefon"]);
   
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Adresa: </i>'); $pdf->Cell(190,5,$row["adresa"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Oras: </i>'); $pdf->Cell(190,5,$row["oras"]);
   $pdf->WriteHTML('<br>');
      $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<b> Informatii despre locul de munca dorit: </b>');
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Post dorit: </i>'); $pdf->Cell(190,5,$row["post_dorit"]);
   $pdf->WriteHTML('<br>');
    $pdf->WriteHTML('<i>Domeniu: </i>'); $pdf->Cell(190,5,$row["domeniu"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Salariul dorit: </i>'); $pdf->Cell(190,5,$row["salariu_dorit"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Tip job: </i>'); $pdf->Cell(190,5,$row["tip_job"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Nivel cariera: </i>'); $pdf->Cell(190,5,$row["nivel_cariera"]);
   $pdf->WriteHTML('<br>');
  
   
   $pdf->WriteHTML('<i>Relocare: </i>'); $pdf->Cell(190,5,$row["relocare"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Obiectiv: </i>'); $pdf->Cell(190,5,$row["obiectiv"]);

  $pdf->WriteHTML('<br>');
  
 }
}

//experienta
$html='';
$conn = new mysqli($servername, $username, $password,$dbname);
$getid=sprintf("SELECT * FROM experienta where user_id=".$userid);
$rezult= $conn ->query($getid);
 $pdf->WriteHTML('<br>');
$pdf->WriteHTML('<b>Experienta profesionala: </b>');
$pdf->Cell(0,10,'',0,1);
if ($rezult->num_rows>0){
  $nrexperiente=$rezult->num_rows;
while($row = $rezult->fetch_assoc()) {
//
$pdf->Cell(190,5,'De la: '.$row["start"].' pana la: '.$row["stop"]);
 $pdf->WriteHTML('<i>Postul: </i>'); $pdf->Cell(190,5,$row["domeniu"]);
   $pdf->WriteHTML('<br>');
 $pdf->WriteHTML('<i>Nume companie: </i>'); $pdf->Cell(190,5,$row["nume_companie"]);
  $pdf->WriteHTML('<br>');
  
   $pdf->WriteHTML('<i>Departament: </i>'); $pdf->Cell(190,5,$row["departament"]);
   $pdf->WriteHTML('<br>');

$html='<i>Descrierea activitatii :</i> '.$row["descrierea_jobului"];

 }
$pdf->WriteHTML($html);
 $pdf->WriteHTML('<br>');

 
}

//end experienta


//educatie
$pdf->WriteHTML('<br>');
$pdf->WriteHTML('<b> Educatie: </b>');
    $pdf->WriteHTML('<br>');
$conn = new mysqli($servername, $username, $password,$dbname);
$getid=sprintf("SELECT * FROM educatie where user_id=".$userid);
$rezult= $conn ->query($getid);
$ary=array();
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
	$pdf->WriteHTML('<br>');
$pdf->WriteHTML('<i>Institutia de invatamant : </i>'); $pdf->Cell(190,5,$row["nume_institutie"]);
 $pdf->WriteHTML('<i> De la : </i>'); $pdf->Cell(190,5,$row["start"].' pana la: '.$row["stop"]);
  $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Oras: </i>'); $pdf->Cell(190,5,$row["oras"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Profil: </i>'); $pdf->Cell(190,5,$row["profil"]);
   $pdf->WriteHTML('<br>');
   $pdf->WriteHTML('<i>Diploma: </i>'); $pdf->Cell(190,5,$row["diploma"]);
   $pdf->WriteHTML('<br>');
 }
}

//abiliati
$pdf->WriteHTML('<br>');
$pdf->WriteHTML('<b> Abilitati: </b>');
    $pdf->WriteHTML('<br>');
$getid=sprintf("SELECT * FROM abilitati where user_id=".$userid);
$rezult= $conn ->query($getid);
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {

$pdf->Cell(190,5,$row["skill"]);
	$pdf->WriteHTML('<br>');
 }
}
//limbi straine
$pdf->WriteHTML('<br>');
$pdf->WriteHTML('<b>Limbi straine: </b>');
    $pdf->WriteHTML('<br>');
$getid=sprintf("SELECT * FROM limbi_straine where user_id=".$userid);
$rezult= $conn ->query($getid);
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {

	 $pdf->Cell(190,5,'Limba: '.$row["limba"].' - nivel: '.$row["nivel"]);
   $pdf->WriteHTML('<br>');
 }
}
//permis
$pdf->WriteHTML('<br>');
$pdf->WriteHTML('<b>Permis de conducere: </b>');
    $pdf->WriteHTML('<br>');
$getid=sprintf("SELECT * FROM permis where user_id=".$userid);
$rezult= $conn ->query($getid);

if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
	$pdf->Cell(190,5,'Permis de conducere categoria: '.$row["categorie"]);
		$pdf->WriteHTML('<br>');

 }
}
else $pdf->WriteHTML('<i>Nu exista informatii despre permis de conducere. </i>');
//alt_info
$pdf->WriteHTML('<br>');
$pdf->WriteHTML('<b>Alte informatii: </b>');
    $pdf->WriteHTML('<br>');
$getid=sprintf("SELECT * FROM alt_info where user_id=".$userid);
$rezult= $conn ->query($getid);

if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
	$pdf->Cell(190,5,'De la: '.$row["start"].' pana la: '.$row["stop"]);
	  $pdf->WriteHTML('<i>Titlu: </i>'); $pdf->Cell(190,5,$row["titlu"]);
   $pdf->WriteHTML('<br>');
   
   $html='<i>Descriere:</i> '.$row["descriere"];

 
$pdf->WriteHTML($html);
 $pdf->WriteHTML('<br>');
 $pdf->WriteHTML('<br>');
}
 }



$pdf->Output();
?>
