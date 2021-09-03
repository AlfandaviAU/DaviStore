<?php
    session_start();
    $_SESSION['username'] = '';
    $_SESSION['array'] = array(0,0,0,0,0,0,0);
    unset($_SESSION['username']);
    unset($_SESSION['array']);
    session_unset();
    session_destroy();
    header("Location: login.php");
?>