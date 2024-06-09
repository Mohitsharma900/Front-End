let randomNumber = Math.floor(Math.random() * 100 )+1;
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')

const P = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess =parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a Valid Number')
    }else if(guess<1){
        alert('Please enter a Number greater then 1')
    }else if(guess> 100){
        alert('Please enter a Number smaller then 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
         displayMessage(`You Guessed it Right!`)
         endGame()
    }else if (guess < randomNumber){
        displayMessage(`Ahh!Number is too low..`);
    }else if (guess> randomNumber){
        displayMessage(`Ahh! Number is much greater..`)
    }   
}
 
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    P.classList.add('button')
    P.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    StartOver.appendChild(P)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton =  document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
    randomNumber = Math.floor(Math.random() * 100 )+1;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled');
    StartOver.removeChild(P)


    playGame = true;

   })
}