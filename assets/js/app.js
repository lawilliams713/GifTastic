$(document).ready(function () {//I need jquery to run!

	var searchTerms = ['Dogs', 'Puppies', 'Cats', 'Kittens', 'Birds', 'Horses', 'Hamsters', 'Goats', 'Rabbits', 'Pigs', 'Squirrels', 'Elephants', 'Lions', 'Sea Turtles'];

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

	var gifQuery = function (term) {
		var apiKey = "wPQTc8oMTExY2ckk2VvtQKr3s2oEwnxa";
		var queryURL = "https://api.giphy.com/v1/gifs/search?apiKey="
			+ apiKey
			+ "&q=" + term;
		console.log(queryURL);

		$.ajax({
			method: "GET",
			url: queryURL,
		}).then(function (result) {
			displayGif(result);

		});
	}
	function displayGif(result) {
		$('#animals').empty();
		for (var i = 0; i < result.data.length; i++) {
			var rating = "<div class='ratings'> Rating:  " + (result.data[i].rating) + " </div>";
			var image = rating + '<img src= " ' + result.data[i].images.fixed_height_still.url +
				'" data-still=" ' + result.data[i].images.fixed_height_still.url +
				' " data-animate=" ' + result.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';
			$('#animals').append(image);
		}

		$("img").on("click", function () {
			var state = $(this).attr("data-state");
			var animateImage = $(this).attr("data-animate");
			var stillImage = $(this).attr("data-still");

			if (state == "still") {
				$(this).attr("src", animateImage);
				$(this).attr("data-state", "animate");
			}

			else if (state == "animate") {
				$(this).attr("src", stillImage);
				$(this).attr("data-state", "still");
			}
		}
		);
		$("img").on("click", function () {
			console.log("click worked!");
		});

		$(document).on("click", ".gif");
	}

	createButtonsFromArr(searchTerms);

});
