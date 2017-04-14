var quotes = [
"Waiting for other players to make their move...", 
"Tap PLAY to bust a move!", 
"Have you ever noticed how the King of Diamonds stares at the Queen of Hearts?", 
"Do you ever wonder what people do when they are waiting for your move?", 
"Knock, knock...", 
"My name is McLaugh. Jack McLaugh...", 
"Why six was scared of seven? Because seven 'ate' nine.", 
"How do you count cows? With a cowculator.", 
"How astronomers organise their parties? They planet.", 
"Why do leopards hate hide and seek? Because they are always spotted.", 
"What do you call a bear with no teeth? A gummy bear.", 
"Did you ever notice that your nose runs but your feet smell?", 
"Why do shrimps never donate to charity? They are shellfish.", 
"Why are cows so noisy? Because they have horns."
]


function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

var chooser = randomNoRepeats(quotes);


function newQuote() {

document.getElementById('quoteDisplay').innerHTML = chooser();
}