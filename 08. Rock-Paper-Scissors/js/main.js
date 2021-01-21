// Cached DOM constants
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    });

    paper_div.addEventListener('click', function(){
        game("p");
    });

    scissors_div.addEventListener('click', function(){
        game("s");
    });
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice+compChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    
        default:
            alert("[ERROR]")
            break;
    }
}

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userMove, compMove){
    userScore++;
    userScore_span.textContent = userScore;
    compScore_span.textContent = compScore;
    result_p.textContent = userMove + " beats " + compMove;
}

// function lose(){
//     alert("User loses");
// }

// function draw(){
//     alert("Draw");
// }


// Function that converts r, p, s to rock paper and scissors
function convertToWord(letter){
    if (letter === 'r') {
        return "Rock";
    }
    if (letter === 'p') {
        return "Paper";
    }
    if (letter === 'r') {
        return "Scissors";
    }
}