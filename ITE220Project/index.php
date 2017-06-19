<!--
	session_start();
	
	$_SESSION["user"]=isset($_POST["username"]);

 -->
<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="css/index.css">
<!-- <?php 
	//$username = $_POST["$username"];
	//echo "Welcome $username";
?> -->

<!-- echo "Hello ".$_SESSION["user"];
-->
<?php 
session_start();
$user=$_SESSION['varName'];
echo"Hello ".$user; 
?>
<center>
<div class="container container-table">
    <div class="row vertical-center-row">
        <div class="text-center col-md-4 col-md-offset-4">  <!-- Sends form data to result.php -->
        	<h1><b>Book database</b></h1>
			<form class="getInput" action="result.php" method="POST">
				<select class="btn dropdown-toggle btn-large" name="bookSearch" id="selectChoice">
					<option value="name">Name</option>
					<option value="author">Author</option>
					<option value="isbn">ISBN</option>
				</select>

				<input type="text" placeholder="Input text here" name="Tbox">

				<input class="btn btn-primary" type="submit" name="submit">
			</form>
			<p>Enter a value to search in Google Books database</p>
			<p>When using ISBN search please input ISBN10</p>
			<br><br><br>
			<h4> If an error appears on the results screen means that value is nonexistent, you may have to specify your search</h4>
			<a href="clearSession.php">Logout</a>

		</div>
	</div>
</center>

<!---<script type="text/javascript" src="js/searchCondition.js">  -->