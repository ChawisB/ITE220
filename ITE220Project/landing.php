<html>
<head>
  <meta charset="UTF-8">
  <title>Bootstrap Snippet: Login Form</title>
  
  
  <link rel='stylesheet prefetch' href='http://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css'>
  <link rel="stylesheet" type="text/css" href="css/sweetalert.css">
  <link rel="stylesheet" href="css/style.css">
  <script src="js/sweetalert.min.js"></script>

  
</head>

<body>
    <div class="wrapper">
    <form class="form-signin" method="POST">       
      <h2 class="form-signin-heading">Please login to use database</h2>
      <input type="text" class="form-control" name="username" placeholder="Username" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password" />      
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" name="submitBtn" type="submit">Login</button>   
    </form>
  </div>

 <!-- <?php include('login_action.php') ?>  -->
  
  
</body>
</html>