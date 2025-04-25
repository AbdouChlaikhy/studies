<?php
  echo '<style>
  *{
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
  }
  
  .container{
    display: flex;
    justify-content: center;
  }

  #navbar{
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    padding: 10px;
  }
  #navbar div{
    margin:10px;
  }
  a{
    text-decoration: none;
    color: black;
    padding: 10px;
    opacity: 80%;
  }
  a:hover{
    cursor: pointer;
    opacity: 100%;
  }
  </style>
  <div class="container">
    <div id="navbar">
      <div><a href="indx.php">Accueil</a></div>
      <div><a href="create.php">Creer un etudiant</a></div>
    </div>
  </div>';
?>
