/* Documentation
- See file named quotes.js for the array of quotes.
- When you first open the html, you will see a random quote. Not the static HTML quote.
- If you click on the button you can see a new random quote.
- If you wait longer than 5 seconds, the page will automatically change the quote for you.
- The background color changes to a random color every time the quote changes.
*/

let quoteId;
const quoteOutput = document.getElementsByClassName("quote")[0];
const sourceOutput = document.getElementsByClassName("source")[0];
const categoryOutput = document.getElementsByClassName("category")[0];
const button = document.getElementById('loadQuote');
let newQuoteCountdown = window.setInterval(loading, 5000); //

// Random quote generator
function getRandomQuote(){
  quoteId = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteId];
  return quote;
}

// Print function
function printQuote(randomQuote){

  // Printing the Quote and Category
  quoteOutput.innerHTML = randomQuote.quote;
  categoryOutput.innerHTML = randomQuote.category;

  // I added on purpuse only quotes that had both citiation and year, or none of them.
  if(randomQuote.citation !== undefined && randomQuote.year !== undefined){
    sourceOutput.innerHTML = randomQuote.source + ", <i>" + randomQuote.citation + "</i>, " + randomQuote.year;
  } else {
    sourceOutput.innerHTML = randomQuote.source;
  }
}

// Button click actions
button.addEventListener("click", () =>{
  const randomQuote = getRandomQuote()
  printQuote(randomQuote);
  changeBackgound();

  // Resets the countdown timer.
  clearCountdown();
  newQuoteCountdown = window.setInterval(loading, 5000);
});

// Change background color. Function is called on button click and in the loading function.
function changeBackgound(){
  document.body.style.backgroundColor = randomColor();
}

// Create a random color code
function randomColor() {
  const color = "#"+((1<<24)*Math.random()|0).toString(16); // Thank you Stackoverflow!
  return color;
}

// To clear the countdown. Only called when the button is clicked.
function clearCountdown() {
  clearInterval(newQuoteCountdown);
}

// To make sure the visitor see a random quote when first loading the page.
function loading(){
  const randomQuote = getRandomQuote()
  printQuote(randomQuote);
  changeBackgound();
}

// Calling the loading() function.
loading();
