var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match color
	colorDisplay.textContent = pickedColor; 
	//change colors of squares 
	for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//
	}
	h1.style.background = "#232323";

})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add clickListeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	})
};

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match the given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	//pick a random number ranging from 0 to the last index of the color array
	var random = Math.floor(Math.random() * colors.length);
	//use that number to access the color array
	return colors[random];
}

function generateRandomColors(num) {
	//create an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push it into the arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a redish from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a greenish from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blueish from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return("rgb(" + r + ", " + g + ", " + b + ")");
}