<?php 

class Calculator{
    public $x;
    public $y;
    public $operation;

    function __construct($x,$y,$operation){
        $this -> x = $x;
        $this -> y = $y;
        $this -> operation = $operation;

    }

    function calcul(){
        switch ($this -> operation) {
            case '+':
                $this->solution = $this -> x + $this -> y;
                return $this->solution;
                break;
        }

    }
}


// num2
if((isset($_POST['num'])) && (isset($_POST['appendsymbole'])) && ($_POST['appendsymbole'] != "") )
{

    if (isset($_POST['appendNum2'])) {

        $history = $_POST['appendNum2'];

    }

echo "true2";
$_POST['symbole'] = $_POST['appendsymbole'];
$symbole = $_POST['appendsymbole'];
$num1 = $_POST['appendNum1'];
$num2 = $_POST['num'];

if (isset($_POST['appendNum2'])) $num2 = $history.$_POST['num'];

}


// num1
if(isset($_POST['num']) && (empty($_POST['appendsymbole'])))
{

    echo "true1";

    if (isset($_POST['appendNum1'])) {

        $history = $_POST['appendNum1'];

    }

$num1 = $_POST['num'];


if (isset($_POST['appendNum1'])) $num1 = $history.$_POST['num'];

}



// Symbole
if( (isset($_POST['symbole'])))
{
    echo "truesymbol";

    if (isset($_POST['appendNum1'])) $num1 = $_POST['appendNum1'];

    $symbole = $_POST['symbole'];

}


if (isset($_POST['calcul'])) {
    
$symbole = $_POST['appendsymbole'];
$num1 = $_POST['appendNum1'];
$num2 = $_POST['appendNum2'];


$cal = new Calculator($num1,$num2,$symbole);

$num1 = $cal -> calcul();
$symbole = "";
$num2 = "";

}


?>



<!DOCTYP html>
<html>
	<head>
		<title>Calculator- switch</title>
		
	</head>
	<body>
		<form method="post">

    <input type="text" name="appendNum1" value="<?php if(isset($num1)) echo $num1 ?>" hidden>
    <input type="text" name="appendsymbole" value="<?php if( (isset($_POST['symbole'])) && (isset($num1)) )  echo $symbole ?>" hidden>
    <input type="text" name="appendNum2" value="<?php if((isset($_POST['num'])) && (isset($_POST['appendsymbole'])) && ($_POST['appendsymbole'] != "") ) echo $num2 ?>" hidden>
    <input type="text" name="All" value="<?php echo @$num1.@$symbole.@$num2  ?>">
<div id="numbers">
	<input type="submit" value="1" name="num">
    <input type="submit" value="+" name="symbole">
	<input type="submit" value="2" name="num">
    <div>
<input type="submit" value="Calcul" name="calcul">

		</form>
	</body>
</html>