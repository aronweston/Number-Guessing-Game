
//Game values
let min = 1,
    max = 10,
    win = random(min, max),
    guessLeft = 3;

//UI
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    btn = document.querySelector("#guess-btn"),
    reset = document.querySelector("#reset-btn"),
    input = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

//Assign UI Min/Max
minNum.textContent = min;
maxNum.textContent = max;


//play again
game.addEventListener("mousedown", function (e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
})

//Event listener
btn.addEventListener("click", function () {
    let guess = parseInt(input.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} & ${max}`, "red");
        guess = " ";
    } else if (guessLeft > 0) {
        guessLeft = guessLeft - 1;
        if (guess === win) {
            gameOver(true, `Good job! The correct number is ${win}`);
        } else {
            setMessage(`${guess} is incorrect. You have ${guessLeft} more attempts remaining`, "red");
        }
    } else {
        gameOver(false, `Sorry, you lose. The correct number was ${win}`);
    }
    input.value = "";
});


//game over 
function gameOver(won, msg) {
    let color;
    won === true ? color = "green" : color = "red";

    input.disabled = true;
    input.style.borderColor = color;
    message.style.color = color;
    
    setMessage(msg);

    //Play again
    btn.value = "Play again";
    btn.className += "play-again";
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

//Set message
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}
