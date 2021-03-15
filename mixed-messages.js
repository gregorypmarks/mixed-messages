// Quote array that contains wise quotes
const quotes = [
    "Marcus Aurelius: Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", 
    "Einstein: If you can't explain it simply, you don't understand it well enough.", "Steve Jobs: I'm as proud of what we don't do as I am of what we do.", 
    "Nietzsche: That which does not kill us makes us stronger.", 
    "Plato: Wise men talk because they have something to say; fools, because they have to say something.", 
    "Socrates: An unexamined life is not worth living.", 
    "Cicero: Any man can make mistakes, but only an idiot persists in his error."
];

// Random element selected from the array
const randomQuote = (array) => Math.floor(Math.random() * array.length);

// Selects the quote
const selectedQuote = quotes[randomQuote(quotes)];

// Dispalys the Quote
console.log(`Your quote for the day: ${selectedQuote}`);