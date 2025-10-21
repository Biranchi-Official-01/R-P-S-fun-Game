let choices = document.querySelectorAll(".choice");
let you = document.querySelector(".you-div");
let computer = document.querySelector(".computer-div");
let result = document.querySelector(".result");
let winSound=new Audio("win.mp3")
let loseSound=new Audio("lose.mp3")
let drawSound=new Audio("draw.mp3")




function StartShake(){
    you.style="animation: shake 1s linear 3;"
    computer.style="animation: shake 1s linear 3;"
}
function stopShake(){
    you.style="animation: none;"
    computer.style="animation: none;"
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        result.classList.remove("draw")
        result.classList.remove("win")
        result.classList.remove("lose")
        result.innerText=""
        you.innerText="👊"
        computer.innerText="👊"
        winSound.pause()
        loseSound.pause()
        drawSound.pause()
        let userChoice = choice.getAttribute("id");
        let options = ["Rock", "Paper", "Scissor"];
        let compindex = Math.floor(Math.random() * 3);
        let computerChoice = options[compindex];
        StartShake()

        setTimeout(()=>{
            stopShake()
            
            playGame(userChoice, computerChoice);
        },3000)
        
    });
});

function playGame(userChoice, computerChoice) {
    // Remove old styles first
    result.classList.remove("win", "lose", "draw");

    // Set your emoji
    if (userChoice === "Rock") {
        you.innerText = "👊";
    } else if (userChoice === "Paper") {
        you.innerText = "✋";
    } else {
        you.innerText = "✌️";
    }

    // Set computer emoji
    if (computerChoice === "Rock") {
        computer.innerText = "👊";
    } else if (computerChoice === "Paper") {
        computer.innerText = "✋";
    } else {
        computer.innerText = "✌️";
    }

    // Determine result
    if (userChoice === computerChoice) {
        drawSound.play();
        result.innerText = "Draw";
        result.classList.add("draw");
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ) {
        winSound.play();
        result.innerText = "You win";
        result.classList.add("win");
    } else {
        loseSound.play();
        result.innerText = "You lose";
        result.classList.add("lose");
    }
}
