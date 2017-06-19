//JS for sending the variable to php ---------------------  In Testing
	var SelectOption = document.getElementById('selectChoice')
	if (SelectOption=="name") {     //Combine String from html
		var Stype = "title:";
	}
	else if(SelectOption=="author"){
		var Stype = "author:";
	}
	else if(SelectOption=="isbn"){
		var Stype = "ISBN:";
	}
	var Sname = document.getElementById('input');
	var str = Stype+Sname;
	//Send a combined version of the string recieved in the index.php form
	// $.ajax({
	// 	type: 'POST',
	// 	url: 'result.php',
	// 	data: {'variable': myval},
	// });
	document.write(str);