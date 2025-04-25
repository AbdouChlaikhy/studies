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
  .form{
    background-color: white;
    height: 400px;
    width: 540px;
  }
  .form h1{
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-bottom: 1px solid rgb(224, 224, 224);
    background-color: rgb(189, 189, 189,0.5);
  }
  .myForm{
    padding: 30px;
    margin-top: 10px;
  }
  .p-email{
    margin-top: 30px;
  }
  .myForm button{
    padding: 5px;
    border: 0px;
    background-color:rgb(37, 124, 206);
    color: white;
    height: 37px;
    width: 130px;
    border-radius: 7px;
    font-weight: 600;
    margin-top: 18px;
  }
  .myForm input{
    margin-top: 5px;
    height: 35px;
    width: 230px;
    border-radius: 10px;
    border: 1px solid black;
    text-indent: 6px;
  }
</style>
<?php 
  require_once("./head.php");
?>
<body>
  <div class="body">
  <div class="form">
      <h1>Créer un étudiant :</h1>
      <form class="myForm" action="<?php echo $_SERVER["PHP_SELF"];?>" method="POST" enctype="multipart/form-data">
        <p>Nom :</p>
        <input type="text" name="nom">
        <p class="p-email">E-mail :</p>
        <input type="text" name="email">
        <br><br>
        <button name="creer" type="submit">Créer un étudiant</button>
      </form>
    </div>
  </div>
  <?php
    if(isset($_POST['creer'])){
      // Ajouter le nom et l'email a la table etudiant ;
      $servername = "localhost";
      $username="root";
      $password="";
      $dbname = "mydb";
      try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $nom = htmlspecialchars($_POST['nom']);
        $email= htmlspecialchars($_POST['email']);
        $insert= $conn->prepare('INSERT INTO etudiant(nom,email) VALUES(?,?)');
        $insert->execute(array($nom,$email));
      }
      catch(PDOException $e) {
        echo "Erreur " . $e->getMessage();
      }
    }
  ?>
</body>
</html>