<?php
    session_start();
    if (!isset($_SESSION['username'])){
        header("Location: login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="card.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>Davi Store</title>
</head>
<body>
    <nav>
        <div class="logo">
            <h4>Davi Store</h4>
        </div>
    
        <ul class="nav-links">
            <li>
                <a href="index.php">Home</a>
            </li>
            <li>
                <a href="about.php">About</a>
            </li>
            <li>
                <a href="https://github.com/AlfandaviAU">Project</a>
            </li>
            <li>
                <a href="https://www.instagram.com/alfan.davv/">Contact Me</a>
            </li>
            <li>
                <a href="app.php">Me</a>
            </li>
        </ul>
        <div class="triplebar" onclick = "navSlide()">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    <script src="app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
    <div class="main">
        <img src="logo.svg" width="150px" height="150px">
        <h1>Davi Store by Alfandavi 13519211</h1>
        <!-- <button class="buttonBoi" onclick="buttonBois()">Sort</button> -->
    </div>
    
    <section class="card-list">
      <div id="card-batch">
          
      </div>
      <!-- <article class="card">
        <header class="card-header">
          <p>Arcana Monkey King</p>
          <h2>Great Sage's Reckoning</h2>
          <img src="logo-mk.png">
        </header>
        <div class="arcana">
          <div class="arcana-price-prefix">Rp 270.000,-</div>
          <div class="tags">
            <a href="#">Buy Now</a>
        </div>
      </article> -->
      <!-- <article id="card2"></article> -->
      <!-- <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p>
      <article class="card"></p> -->
 
    </section>
    
    <script>
      descBook(5);
      // generateArticleBatch();
      // generateArticle("card2");
      // generateArticle("card");
      // generateArticle("card");
      // generateArticle("card");
      // generateArticle("card");
      // generateArticle("card");
      // generateArticle("card");
      // generateArticle("card");
    </script>
</body>
</html>