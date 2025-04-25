<!DOCTYPE html>
<html>
<head>
  <title>Document</title>
</head>
<style>
  *{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .body{
    margin: 0px;
    background-color: rgb(37, 124, 206);
    height: 90.8vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .table{
    background-color: white;
    height: 550px;
    width: 600px;
  }
  h1{
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-bottom: 1px solid rgb(224, 224, 224);
    background-color: rgb(189, 189, 189,0.5);
  }
  table{
    margin: 40px auto;
    width: 490px;
  }
  input{
    margin: 3px;
    padding: 6px;
    border: 0px;
    border-radius: 8px;
    cursor: pointer;
  }
  .btn1{
    background-color: rgb(37, 124, 206);
    color: white;
  }
  .btn2{
    background-color: red;
    color: white;
  }
  table,
  td,
  tr,
  th,
  thead{
    border: 2px solid black;
    border-collapse:collapse;
    padding: 5px;
    text-align: center;
  }
  .link{
    padding: 2px;
    opacity: 100%;
    color: white;
    background-color: red;
    border-radius: 4px;
  }
</style>
<body>
  <?php 
    require_once("./head.php");
  ?>
  <div class="body">
    <div class="table">
      <h1>Tous les étudiants </h1>
      <form action="<?php echo $_SERVER["PHP_SELF"];?>" method="POST" enctype="multipart/form-data">
        <table>
        <thead>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
  <?php
    require './db.php';
    $Etudiant = $conn->prepare('SELECT * FROM etudiant');
    $Etudiant->execute();
    while($ligne = $Etudiant->fetch()){
      echo 
        "<tr>
          <td>".$ligne['id']."</td>
          <td>".$ligne['nom']."</td>
          <td>".$ligne['email']."</td>
          <td>
            <a class='link' href='delete.php?delete=".$ligne['id']."'>Delete</a>
            <a class='link' href='edit.php?edit=".$ligne['id']."'>Edit</a>
          </td>
        </tr>";
    }
    
    $Etudiant->closeCursor();
    
  ?>
  
    </table>
      </form>
    </div>
  </div>
</body>
</html>