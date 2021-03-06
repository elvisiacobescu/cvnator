<?php
$target_dir = "pdf/aploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      $servername = "localhost";
      $username = "root";
      $password = "";
      $dbname = "cvnator";
      $userid=$_COOKIE["cookie_user_id"];
      $conn = new mysqli($servername, $username, $password,$dbname);
      $path = "aploads/".$_FILES["fileToUpload"]["name"];

      $sql=sprintf("UPDATE date_personale SET cale_poza ='" . $path .  "' where user_id=".$userid);
      if ($conn->query($sql) === TRUE) {
        echo "    succes   " .$path;
        // aici ar trebui sa se faca redirect
      } else {
        echo "erruare: " . $conn->error."   ".$path;
      }

      // echo "The file ". base  name( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
header("Location:http://localhost/cvnator/cv.html");
die();
?>
