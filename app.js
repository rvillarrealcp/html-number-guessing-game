console.log("HELLO Buffalo PLATOON!");
// Your function(s) should go here that will interact with the webpage or DOM

let answer = Math.floor(Math.random() * 100) + 1 
//math.floor(math.random()*(max-min+1)+1) <-- makes the range inclusive
let uGuessField = document.getElementById('userNumGuess');
const submitButton = document.getElementById('guessButton');
let userFeedback = document.getElementById('guessResult');
let wrong = document.querySelector('.status');
console.log(answer);

function loseOrWin (guessValue){
    oldGuess = guessValue;
    if(guessValue == answer){
        wrong.classList.toggle('correct');
        userFeedback.innerText = `!!!YOU WIN!!! You guessed: ${oldGuess}. !!!YOU WIN!!!`;
        submitButton.addEventListener('click',() => window.location.reload());
        submitButton.innerText = 'New Game';
        
    }else if(guessValue < answer){
        userFeedback.innerText = `Your guess: ${oldGuess} is too low.`;
        wrong.classList.toggle('wrong');
        
    }else{
        userFeedback.innerText = `Your guess: ${oldGuess} is too high.`;
        wrong.classList.toggle('wrong');
    }
    uGuessField.value = null;
    
}

function newGame(){
    submitButton.innerText == "New Game" ?submitButton.addEventListener('click',window.location.reload()) : none;
    //submitButton.addEventListener('click',window.location.reload());
}

grabGuess = submitButton.addEventListener('click',() => {
    let uGuess = uGuessField.value;
    loseOrWin(uGuess);
    setTimeout(() => {
            wrong.classList.toggle('wrong'); // Revert to original color
        }, 2000);
});










