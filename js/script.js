// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
{
	quote: '"Only I can change my life. No one can do it for me."', 
	source: 'Carol Burnett'
},
{
	quote: '"The way to get started is to quit talking and begin doing."',
	source: 'Walt Disney'
}
]


// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote(array) {
	var randomNumber = Math.floor(Math.random() * quotes.length); // To generate a random number
	var randomQuote = quotes[randomNumber]; // The randomNumber var is then used to generate a random quote.
	return randomQuote;
}



// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);