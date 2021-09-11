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

function wordConvert(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"; //if none of the conditions are met, return scissors
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=compScore;
    results_div.innerHTML=`${wordConvert(userChoice)} beats ${wordConvert(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 200)
}

function lose(userChoice, computerChoice){
    compScore++;
    computerScore_span.innerHTML=compScore;
    results_div.innerHTML=`${wordConvert(computerChoice)} beats ${wordConvert(userChoice)}. You Lost!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 200)
}

function draw(userChoice, computerChoice){
    results_div.innerHTML=`You both chose ${wordConvert(computerChoice)}. It's a draw.`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 200)
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
    // if (compScore === 5 || userScore === 5){
    //    reset();
     
    
    

}

function reset(){
    userScore = 0;
    compScore = 0;
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
