// var task1 = {
// 	render: function(){
// 		document.getElementById("screenX").textContent = window.screenX;
// 		document.getElementById("screenY").textContent = window.screenY;
// 		document.getElementById("screenWidth").textContent = window.innerWidth;
// 		document.getElementById("screenHeight").textContent = window.innerHeight;
// 		document.getElementById("location").textContent = window.location;
// 		document.getElementById("lastmod").textContent = document.lastModified

// 		var word = "Web 2 is awesome!";
// 		document.getElementById("string").textContent = word;
// 		if (word.indexOf('awesome') > -1){
// 			var check = "YES";
// 		}
// 		else{
// 			var check = "NO";
// 		}
// 		document.getElementById("stringCheck").textContent = check;

// 		var devName = "Chwis Bijaisoradat";
// 		var devPos = "Cave Dweller";
// 		//document.getElementById('btn btn-info btn-lg btn-block').style.display = 'none';
// 		document.getElementById('showDiv').onclick=function(){
//  		document.getElementById('btn btn-info btn-lg btn-block').style.display='';
// };

// 		document.getElementById("dev-name").textContent = window.devName;
// 		document.getElementById("dev-pos").textContent = window.devPos;
// 		//button.getElementById("link") onclick=window.open('https://chawisb.github.io/ITE220/', '_blank');
// 	}
// }
// task1.render();


window.onload = function() { 
var task1 = {
    render: function(){
        document.getElementById("screenX").textContent = window.screenX;
        document.getElementById("screenY").textContent = window.screenY;
        document.getElementById("screenWidth").textContent = window.innerWidth;
        document.getElementById("screenHeight").textContent = window.innerHeight;
        document.getElementById("location").textContent = window.location.pathname;
        document.getElementById("lastModified").textContent = document.lastModified;  
    var word =" Web 2 is awesome!"
        document.getElementById("word").textContent = word;
    var ans;
        if ( word.indexOf("awesome") > -1 ) {
            ans = "YES!"
        } else {
            ans = "NO!"
        }
        document.getElementById("ans").textContent = ans; 
    },
    resize: function () {
        window.addEventListener("resize", this.render);
    },
    devInfo: function() {
        var ele = document.getElementById("dev-info");
        var info = document.getElementById("myinfo");
        // var pos = document.getElementById("position");
        // var link = document.getElementById("mylink");
        ele.addEventListener("click", function() {
            info.innerHTML = "Chwis Bijaisoradat <br> Cave Dweller <br> <a href ='https://chawisb.github.io/ITE220/' target='_blank' > www.github.com/ChawisB </a>";
        });
    }
};
task1.render();
task1.resize();
task1.devInfo();
}