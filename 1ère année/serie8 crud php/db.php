<!DOCTYPE html>
<html>
<head>
  <title>Document</title>
</head>
<style>
  *{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
  }
</style>
<body>
<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database="mydb";
  try{
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
  catch(Exception $e){
    echo "Erreur<br>" . $e->getMessage();
  }
?>
</body>
</html>