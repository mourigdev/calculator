<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <form method="POST" action="index.php">
        <input type="text" name="num1" id="">
        <input type="text" name="num2" id="">
        <input type="submit" name="egale">
    </form>

<?php

if(isset($_POST['egale'])){
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];



    echo $num1+$num2;
}

?>


</body>
</html>