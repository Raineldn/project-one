// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
{
	quote: 'You\'re gonna need a bigger boat.', 
	source: 'Brody',
	date: 1975,
	citation: 'Jaws',
	tag: 'Movies'
},
{
	quote: 'The way to get started is to quit talking and begin doing.',
	source: 'Walt Disney',
	tag: 'Famous People'
},
{
	quote: 'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.',
	source: 'George R.R. Martin',
	date: 1996,
	citation: 'A Game of Thrones',
	tag: 'TV'
},
{
	quote: 'A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.',
	source: 'George R. R. Martin',
	date: 2011,
	citation: 'A Dance with Dragons',
	tag: 'Literature'
},
{
	quote: 'It\'s the possibility of having a dream come true that makes life interesting.',
	source: 'Paulo Coelho',
	date: 1988,
	citation: 'The Alchemist',
	tag: 'Literature'
},
{
	quote: 'It\’s no use going back to yesterday, because I was a different person then.',
	source: 'Lewis Carroll',
	date: 1865,
	citation: 'Alice\'s Adventures in Wonderland',
	tag: 'Literature'
},
{
	quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
	source: 'Chinese Proverb',
	tag: 'Proverbs'
},
{
	quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
	source: 'Christopher Colombus',
	tag: 'Famous People'
},
{
	quote: 'The best revenge is massive success.',
	source: 'Frank Sinatra',
	tag: 'Famous People'
},
{
	quote: 'Strive not to be a success, but rather to be of value.',
	source: 'Albert Einstein',
	tag: 'Famous People'
},
{
	quote: 'The only way to do great work is to love what you do.',
	source: 'Steve Jobs',
	tag: 'Famous People'
},
{
	quote: 'Choose a job you love, and you will never have to work a day in your life.',
	source: 'Confucius',
	tag: 'Famous People'
},
{
	quote: 'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
	source: 'Roy T. Bennett',
	date: 2016,
	citation: 'The Light in the Heart',
	tag: 'Literature'
},
{
	quote: 'Wubba Lubba Dub Dub!',
	source: 'Rick',
	citation: 'Rick and Morty',
	tag: 'TV'
},
{
	quote: 'Let us be well persuaded that everyone of us possesses happiness in proportion to his virtue and wisdom, and according as he acts in obedience to their suggestion.',
	source: 'Aristotle',
	tag: 'Famous People'
}
]


// Create the getRandomQuote function and name it getRandomQuote



function getRandomQuote(array) {
	var randomNumber = Math.floor(Math.random() * quotes.length); // To generate a random number
	var randomQuote = quotes[randomNumber]; // The randomNumber var is then used to generate a random quote.
	return randomQuote;
}

// Create random number var for the background color

function randomNumber(color) {
	return Math.floor(Math.random() * color);
}


// Create a random RGB color to be used for the background

function randomBackgroundColor() {
	var ranColor = 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
	return ranColor;
}

// Create a random RGBA color to be used for the button

function randomButtonColor() {
	var ranBtnColor = 'rgba(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ',' + 0.5 + ')';
	return ranBtnColor;
}

// Create the printQuote function and name it printQuote

// An empty string which will be filled with the next var.

function printQuote() {
	var message = ""; 
	var randomBackground = randomBackgroundColor();
	var randomButton = randomButtonColor();
	var quoteString = getRandomQuote(quotes);
	message = '<p class="quote">' + quoteString.quote + '</p>';
	message += '<p class="source">' + quoteString.source;

	// A conditional for a quote citation.

	if ("citation" in quoteString) {
	message += '<span class="citation">' + quoteString.citation + '</span>';
	} 

	// A conditional for a quote date.

	if ("date" in quoteString) { 
	message += '<span class="year">' + quoteString.date + '</span>';
	}

	// A conditional for a quote tag (CSS added to styles.css)

	if ("tag" in quoteString) { 
	message += '<span class="tag">' + quoteString.tag + '</p>';
	}	

	document.getElementById('quote-box').innerHTML = message;
	document.body.style.backgroundColor = randomBackground;
	document.getElementById('loadQuote').style.backgroundColor = randomButton;
}

printQuote();


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

