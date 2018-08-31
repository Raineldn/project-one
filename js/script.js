// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
{
	quote: 'You\'re gonna need a bigger boat.', 
	source: 'Brody',
	date: 1975,
	citation: 'Jaws'
},
{
	quote: 'The way to get started is to quit talking and begin doing.',
	source: 'Walt Disney'
},
{
	quote: 'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.',
	source: 'George R.R. Martin',
	date: 1996,
	citation: 'A Game of Thrones'
},
{
	quote: 'A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.',
	source: 'George R. R. Martin',
	date: 2011,
	citation: 'A Dance with Dragons'
},
{
	quote: 'It\'s the possibility of having a dream come true that makes life interesting.',
	source: 'Paulo Coelho',
	date: 1988,
	citation: 'The Alchemist'
},
{
	quote: 'It\’s no use going back to yesterday, because I was a different person then.',
	source: 'Lewis Carroll',
	date: 1865,
	citation: 'Alice\'s Adventures in Wonderland'
},
{
	quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
	source: 'Chinese Proverb'
},
{
	quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
	source: 'Christopher Colombus'
},
{
	quote: 'The best revenge is massive success.',
	source: 'Frank Sinatra'
},
{
	quote: 'Strive not to be a success, but rather to be of value.',
	source: 'Albert Einstein'
},
{
	quote: 'The only way to do great work is to love what you do.',
	source: 'Steve Jobs',
},
{
	quote: 'Choose a job you love, and you will never have to work a day in your life.',
	source: 'Confucius'
},
{
	quote: 'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
	source: 'Roy T. Bennett',
	date: 2016,
	citation: 'The Light in the Heart'
},
{
	quote: 'Wubba Lubba Dub Dub!',
	source: 'Rick',
	citation: 'Rick and Morty'
},
{
	quote: 'Let us be well persuaded that everyone of us possesses happiness in proportion to his virtue and wisdom, and according as he acts in obedience to their suggestion.',
	source: 'Aristotle',
}
]


// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote(array) {
	var randomNumber = Math.floor(Math.random() * quotes.length); // To generate a random number
	var randomQuote = quotes[randomNumber]; // The randomNumber var is then used to generate a random quote.
	return randomQuote;
}



// Create the printQuote function and name it printQuote

function printQuote() {
	var message = ""; // An empty string which will be filled with the next var.
	var quoteString = getRandomQuote(quotes);
	message = '<p class="quote">' + quoteString.quote + '</p>';
	message += '<p class="source">' + quoteString.source;

	if ("citation" in quoteString) { // A conditional for a quote citation.
	message += '<span class="citation">' + quoteString.citation + '</span>';
	} 

	if ("date" in quoteString) { // A conditional for a quote date.
	message += '<span class="year">' + quoteString.date + '</span>' + '</p>';
	}

	document.getElementById('quote-box').innerHTML = message;
}

printQuote();


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

