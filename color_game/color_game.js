var numbOfSquares = 6;
var colors = generateRandomColors(numbOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numbOfSquares = 3;
    colors = generateRandomColors(numbOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numbOfSquares = 6;
    colors = generateRandomColors(numbOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0; i< squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});
    

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numbOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent= pickedColor;
    resetButton.textContent = "NEW COLORS";
    messageDisplay.textContent = "";

    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add inital colors to square
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "PLAY AGAIN?";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    
    for(var i=0; i< num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}