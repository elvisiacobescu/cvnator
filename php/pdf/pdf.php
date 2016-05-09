<?php
require('..pdf/fpdf.php');

class PDF extends FPDF
{
// Page header
function Header()
{
	// Logo
	$this->Image('logo.png',10,6,30);
	// Arial bold 15
	$this->SetFont('Arial','B',15);
	// Move to the right
	$this->Cell(80);
	// Title
	$this->Cell(30,10,'Title',1,0,'C');
	// Line break
	$this->Ln(20);
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

 $userid=$_COOKIE["cookie_email"];
// Instanciation of inherited class
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
//for($i=1;$i<=40;$i++)
//	$pdf->Cell(0,10,'Printing line number '.$i,0,1);
//$pdf->Output();
//

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvnator";
//conect to the data baze
$arr=array();
$userid=$_COOKIE["cookie_user_id"];
$conn = new mysqli($servername, $username, $password,$dbname);

$getid=sprintf("SELECT * FROM date_personale where user_id=".$userid);
$rezult= $conn ->query($getid);


if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
 
  $arr = array('nume' => $row["nume"] ,'prenume' => $row["prenume"],'sex' => $row["sex"],'varsta' => $row["varsta"],'nr_telefon' => $row["nr_telefon"],'cale_poza' => $row["cale_poza"],'adresa' => $row["adresa"],'oras'
  => $row["oras"],'salariu_dorit' => $row["salariu_dorit"],'tip_job' => $row["tip_job"],'nivel_cariera' => $row["nivel_cariera"],'domeniu' => $row["domeniu"],'post_dorit' => $row["post_dorit"],'relocare' => $row["relocare"],
  'obiectiv' => $row["obiectiv"],'email' => $row["email"] );
 }
 	$pdf->Cell(40,10,'Hello World!');
 	$pdf->Output();
}
//
?>
