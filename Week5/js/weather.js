window.onload = function() {
  var weather = {
    render: function() {
      var bangkok = document.getElementById("bangkok");
      bangkok.addEventListener("click", function(){
        //alert("bangkok is clicked");
        $.ajax({
          type: "GET",
          url: "http://api.openweathermap.org/data/2.5/weather?q=bangkok&units=metric&appid=40003c174995e082b6051b071d97ca8d",
          success: function(data) {
            console.log(data);
            var city = document.getElementById("city");
            city.textContent = data.name;
            var icon = document.getElementById("icon");
            icon.src = "https://openweathermap.org/img/w/" +data.weather[0].icon +".png";
            var status = document.getElementById("status");
            status.textContent = data.weather[0].main +" - " +data.weather[0].description;
            var temp = document.getElementById("temperature");
            temp.innerHTML = data.main.temp +"&degC";
          }
        });
      });
      var london = document.getElementById("london");
      london.addEventListener("click", function(){
        //alert("bangkok is clicked");
        $.ajax({
          type: "GET",
          url: "http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=40003c174995e082b6051b071d97ca8d",
          success: function(data) {
            console.log(data);
            var city = document.getElementById("city");
            city.textContent = data.name;
            var icon = document.getElementById("icon");
            icon.src = "https://openweathermap.org/img/w/" +data.weather[0].icon +".png";
            var status = document.getElementById("status");
            status.textContent = data.weather[0].main +" - " +data.weather[0].description;
            var temp = document.getElementById("temperature");
            temp.innerHTML = data.main.temp +"&degC";
          }
        });
      });
      var seoul = document.getElementById("seoul");
      seoul.addEventListener("click", function(){
        //alert("bangkok is clicked");
        $.ajax({
          type: "GET",
          url: "http://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=40003c174995e082b6051b071d97ca8d",
          success: function(data) {
            console.log(data);
            var city = document.getElementById("city");
            city.textContent = data.name;
            var icon = document.getElementById("icon");
            icon.src = "https://openweathermap.org/img/w/" +data.weather[0].icon +".png";
            var status = document.getElementById("status");
            status.textContent = data.weather[0].main +" - " +data.weather[0].description;
            var temp = document.getElementById("temperature");
            temp.innerHTML = data.main.temp +"&degC";
          }
        });
      });
    }

  };
  weather.render();
};