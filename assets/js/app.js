$(document).ready(function () {//I need jquery to run!

	var searchTerms = ['Dogs', 'Puppies', 'Cats', 'Kittens', 'Birds', 'Horses', 'Hamsters', 'Goats'];

	var createButton = function (name) {
		var button = $('<button>');
		button.text(name);

		button.click(function () {
			gifQuery($(this).text());
		});

		$('.button-container').append(button);
	}

	var createButtonsFromArr = function (arr) {
		for (var i = 0; i < arr.length; i++) {
			createButton(arr[i]);
		}
	}

	var gifQuery = function(term){
		var apiKey = "wPQTc8oMTExY2ckk2VvtQKr3s2oEwnxa";
		var queryURL = "https://api.giphy.com/v1/gifs/search?apiKey="
			+apiKey 
			+"&q="+term;
		console.log(queryURL);

		$.ajax({
			method:"GET",
			url:queryURL,
		}).then(function(result){

		})
	}


	createButtonsFromArr(searchTerms);

});