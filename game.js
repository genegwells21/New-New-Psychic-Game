var letterList = "abcdefghijklmnopqrstuvwxyz"

var wins=0;
var losses=0;
var totalGuesses=10;
var guessedLetters=[];
//console.log(computerChoice)

document.onkeypress = function(event)   {
    if (totalGuesses > 0){
   var userGuess = event.key;
   //var userGuessLetter = String.fromCharCode(userGuess);
   var computerChoice = letterList[Math.floor(Math.random() * letterList.length)]
   if(userGuess === computerChoice)    {
       wins++;
   }
   else {
       losses++;
   }

   guessedLetters.push( userGuess);
   totalGuesses--;
   document.getElementById('wins').innerHTML= wins;
   document.getElementById('losses').innerHTML= losses;
   document.getElementById('guesses').innerHTML= totalGuesses;
   document.getElementById( "letters-guessed").innerHTML=guessedLetters;
    }

    if (totalGuesses=0){
        alert(" Game Over!");
    }
    

}