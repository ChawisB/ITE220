<?php
	session_start();
	if (isset($_POST['submitBtn'])) {
		$username = $_POST["username"];
	$password = $_POST["password"];
	
	if ($username == "" || $password == ""){
		echo "<script>sweetAlert('Oops...', 'Something went wrong!', 'error');</script>";
	}else {
	if ($username == "admin" && $password == "1234"){
		$_SESSION["varName"] = $username;
		header("location: index.php");
	}
	
	else{
		header("location: login_error.php");
	}
	}
}
?>