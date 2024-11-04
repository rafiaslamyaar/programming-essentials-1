// Verzin een willekeurig nummer tussen 1 en 10
let randomNumber = GenerateRandomNumber();
console.log(randomNumber);



// Grab elements from the DOM
const userGuessInput = document.getElementById('userGuess');
const feedback = document.getElementById('feedback');

// Hoe kunnen we de guessButton en playAgainButton selecteren?
const guessButton = document.getElementById('guessButton');
const playAgainButton = document.getElementById('playAgainButton');

// Function to handle guesses
guessButton.onclick = () => {

    if (userGuessInput.value === '') {
        feedback.textContent = 'Please enter a number!';
        return;
    }

    // zet de input om naar een getal
    var userGuess = parseInt(userGuessInput.value);
    

    // vergelijk het getal met het random getal welke 3 dingen moeten we checken?
    // Hint: is het getal te hoog, te laag of gelijk?
    if(userGuess === randomNumber){
        feedback.textContent = 'youwon!';
        playAgainButton.style.display = 'inline';

    }
    else if (userGuess < randomNumber ){
        feedback.textContent = 'too low';

    }
    else if (userGuess > randomNumber){
        feedback.textContent = 'too high';
    }
        
    // dit toont de play again button en verbergt de guess button
        // guessButton.style.display = 'none';
        // playAgainButton.style.display = 'inline';
};

// Function to reset the game
playAgainButton.onclick = () => {
    randomNumber = GenerateRandomNumber();
    feedback.textContent = '';
    userGuessInput.value = '';
    guessButton.style.display = 'inline';
    playAgainButton.style.display = 'none';
};

// dit is een functie om een willekeurig getal te genereren
// tussen 1 en 10
function GenerateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
