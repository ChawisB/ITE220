<?php
	session_start();
	if(!isset($_SESSION["count"])){
		$_SESSION["count"] = 0;
	}
	else{
		$_SESSION["count"]++;
	}
	echo "Count is ".$_SESSION["count"];
	echo "</br>";
	echo "<a href='clearSession.php'> Clear Session"
 ?>