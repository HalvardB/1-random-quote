/* Summary
- See file named quotes.js for the array of quotes.
- When you first run the script, you will see a random quote. Not the static HTML quote.
- If you click on the button you can see a new random quote.
- If you wait longer than 5 seconds, the page will automatically change the quote for you.
- You can press the pause button, to stop the quote changes. The button will also dissapear if you click it.
- The background color changes to a random color every time the quote changes.
*/

let quoteId;
const quoteOutput = document.getElementsByClassName("quote")[0];
const sourceOutput = document.getElementsByClassName("source")[0];
const categoryOutput = document.getElementsByClassName("category")[0];
const button = document.getElementById('loadQuote');
const pauseButton = document.getElementById('pauseButton');
let newQuoteCountdown = window.setInterval(printQuote, 5000); // Changing the quote automatically after 5 seconds.
const quoteIdArray = [];

// Random quote generator
function getRandomQuote(){
  quoteId = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteId];
  return quote;
}

// Print function
function printQuote(){

  // Calling the getRandomQuote function and storing the value in a variable.
  getRandomQuote();
  const randomQuote = getRandomQuote();

  // Changing the background color
  changeBackgound();

  // Printing the Quote and Category
  quoteOutput.innerHTML = randomQuote.quote;
  categoryOutput.innerHTML = randomQuote.category;

  // Printing Source, Citation and Year
  let text = "";

  if(randomQuote.source !== undefined){
    text += randomQuote.source;
  }
  if(randomQuote.citation !== undefined){
    text += ", <i>" + randomQuote.citation + "</i>";
  }
  if(randomQuote.year !== undefined){
    text += ", " + randomQuote.year;
  }
  sourceOutput.innerHTML = text;
}

// New quote button click
button.addEventListener("click", () =>{
  printQuote();
  pauseButton.style.display = "block";

  // Resets the countdown timer.
  clearCountdown();
  newQuoteCountdown = window.setInterval(printQuote, 5000);
});

// Pause button - stopping the countdown.
pauseButton.addEventListener("click", () =>{
  clearCountdown()
  pauseButton.style.display = "none";
});

// Change background color.
function changeBackgound(){
  document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
}

// To clear the countdown.
function clearCountdown() {
  clearInterval(newQuoteCountdown);
}

// To make sure the visitor see a random quote when first opening the page.
printQuote();
