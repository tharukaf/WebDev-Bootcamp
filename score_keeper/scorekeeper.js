var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var p1ScoreView = document.querySelector("#p1CurrentScore");
var p2ScoreView = document.querySelector("#p2CurrentScore");

var scoreLimitShow = document.querySelector("#scoreLimitShow");
var scoreLimitInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore;

var scoreLimit = document.querySelector("#scoreLimit");
let ss = scoreLimit.value;



p1Button.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver= true;
            p1ScoreView.classList.add("winner");
        }
        p1ScoreView.textContent = p1Score;
    }
   
});

p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver= true;
            p2ScoreView.classList.add("winner");
        }
        p2ScoreView.textContent = p2Score;
    }
   
});

resetButton.addEventListener("click", function(){
    reset();
});

scoreLimitInput.addEventListener("change", function(){
    winningScore = Number(this.value);
    scoreLimitShow.textContent = this.value;
    reset();
});

function reset(){
    p1ScoreView.textContent = 0;
    p2ScoreView.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreView.classList.remove("winner");
    p2ScoreView.classList.remove("winner");
    
}