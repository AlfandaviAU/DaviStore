
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
                <a href="login.php">Please Login First To Use Features</a>
            </li>
            <!-- <li>
                <a href="about.php">About</a>
            </li> -->
            <li>
                <a href="https://github.com/AlfandaviAU">Project</a>
            </li>
            <li>
                <a href="https://www.instagram.com/alfan.davv/">Contact Me</a>
            </li>
            <li>
                <a href="login.php">Me</a>
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
    <div class="cardlogin">
        <h2>Login</h2>
        <form action="" method="post">
            <table align="center" class="content">
                <tr>
                    <td>Username : </td>
                </tr>
                <tr>
                    <td><input type="text" name="username" placeholder="Username"></td>
                </tr>
                <tr>
                    <td>Password : </td>
                </tr>
                <tr>
                    <td><input type="password" name="password" placeholder="Password"></td>
                </tr>
                <tr>
                    <td><input type="submit" name="submit" value="submit" class="button"></td>
                </tr>
            </table>
        </form>
        <div class="errormsg">
        <?php
            session_start();
            $data_login = (file_get_contents('userlogin.json'));
            $data = json_decode($data_login, true);
            $idx = 0;
            if(isset($_POST['submit'])){
                $user = $_POST['username'];
                $pass = $_POST['password'];
                $arr = array(0,0,0,0,0,0,0);
                foreach($data as $uname=>$pass2)
                    if ($user==$uname && $pass==$pass2){
                        session_start();
                        $_SESSION['username'] = $uname;
                        $_SESSION['array'] = $arr;
                        header('Location: app.php');
                    }else{
                        $idx += 1;
                    }
            }
            if ($idx == 3){
                echo 'Wrong username or password';
            }
        ?>
        </div>
    </div>
    <script>
        document.cookie = "array = [0,0,0,0,0,0,0]";
    </script>
</body>
</html>