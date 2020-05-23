//Dice 1 Roll

var randomNumber1 = Math.floor(Math.random() * 6)+1; // random number generator
var randomDiceImage = "dice" +randomNumber1 +".png"; // change string

var randomImageSource="images/" + randomDiceImage; // change string based on random number we get back
var image1=document.querySelectorAll("img")[0]; // create variable for first image

image1.setAttribute("src", randomImageSource); // set from to - from src to random img var


//Dice 2 Roll with shorter steps
var randomNumber2 = Math.floor(Math.random() * 6)+1; // random number generator
var randomImageSource2 ="images/dice" +randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//Dice Logic

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
 else {
   document.querySelector("h1").innerHTML="Draw";
 }
