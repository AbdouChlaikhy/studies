<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    require_once("./head.php");
    $servername ="localhost";
    $username = "root";
    $password ="";
    $dbname = "mydb";
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $id = $_GET['delete'];
    $sql = "DELETE FROM etudiant WHERE id =" . $id;
    $conn->exec($sql);
    echo "deleted";
    header('location:indx.php')
  ?>
</body>
</html>