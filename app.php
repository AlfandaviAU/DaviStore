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
    <link rel="stylesheet" href="style.css">
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
                <a href="logout.php" class="button">Logout</a>
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
        <h2>Keranjang Belanja Anda</h2>
        <div id="main">
        </div>
        <button onclick="sumharga();" >Submit</button>
        <button onclick="window.location.reload()" >Reload to previous cookie</button>
        <div id="sumtotal">
        </div>
    </div>
    <script>        
        document.cookie = "username = "+"<?php echo $_SESSION['username'] ?>"+"";
        // console.log(document.cookie);
        generateTableBatch();  
        // COOKIE
        
        // console.log(getCookie("price") != null);
    </script>
</body>
</html>