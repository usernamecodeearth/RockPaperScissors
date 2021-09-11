let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 
//DOM variable because of the underscore. added the span because it's from a span tag
const scoreBoard_div = document.querySelector(".score-board");
//classes use querySelector and id's use getElementById 
const results_div = document.querySelector(".results");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s");
const actionMessage_p = document.getElementById("action-message")

function getComputerChoice(){
    const choices = [ 'r','p','s'];
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber];
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=compScore;
    results_div.innerHTML=userChoice +" beats "+computerChoice+". You win!";

}

function lose(userChoice, computerChoice){
    compScore++;
    computerScore_span.innerHTML=compScore;
    results_div.innerHTML=computerChoice +" beats "+userChoice+". You Lost!";
}

function draw(userChoice, computerChoice){
    console.log("draw");
    results_div.innerHTML="You both chose " +computerChoice+". It's a draw.";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
           win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice); 
        break;
        case "rr":
        case "pp":
        case "ss":
           draw(userChoice, computerChoice);
        break;
    }
}

 


function main(){

    rock_div.addEventListener('click', function(){
        game("r");
    })  
    paper_div.addEventListener('click', function(){
        game("p");
    })  
    scissors_div.addEventListener('click', function(){
        game("s");
    })   
}

main();
