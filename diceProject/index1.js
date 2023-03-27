


var randomNo1=Math.floor(Math.random()*6)+1;
var randomImage1="./diceImages/dice"+randomNo1+".png";
var image1=document.querySelector("img");
image1.setAttribute("src",randomImage1);
var randomNO2=Math.floor(Math.random()*6)+1;
var randomImage2="./diceImages/dice"+randomNO2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if(randomNo1>randomNO2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNO2>randomNo1){
    document.querySelector("h1").innerHTML="player2 wins";
}
else if(randomNO2===randomNo1){
    document.querySelector("h1").innerHTML="Draw";
}









    





























