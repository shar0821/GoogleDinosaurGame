//Google Dinosaur Game JS file
/*Functions
->updatescore: updates score while game is running
->jumpsquare:  uses css to move the dino up and brings it down-keyframes
->detect collision: identify if the dino and the obstacle have common boundaries
->change background:changes background after a fixed time interval
->addhighscore :increment score value ,works with updatescore
*/
//Version:1.0
function updatescore(){
     var x=document.querySelector(".scorecard")
     if(x.innerHTML=='')
        x.innerHTML=0;                                  // reset to 0
     else
        x.innerHTML++;                                  //increment score if no collision
}


function jumpSquare(){
  var squarejump=document.querySelector("#dino");
  squarejump.style.animationName="jump";
  squarejump.style.animationDuration="0.5s";
  console.log("message");
  setTimeout(()=>{squarejump.style.animationName=''},600);                   //use css keyframes
}
var x=document.querySelector("#dino");
console.log(x);
document.addEventListener('keydown',()=>{jumpSquare()});
var time=setInterval(()=>{detectCollision()},10);

function detectCollision(){
  var t=document.querySelector("#dino");
  var u=document.querySelector("#obstacle");
  var squarebound=parseInt(window.getComputedStyle(t).getPropertyValue("top"));
  var obstacle=parseInt(window.getComputedStyle(u).getPropertyValue("left"));
  if(squarebound<=120 && squarebound>115 && obstacle>=0 && obstacle<=2)        //collision detection
    {console.log("collision");
      clearInterval(time);                                              //stop detecting
      clearInterval(score);                                             //stop incrementing score
    }

}

function changeBackground()                         //changes background color
{
  
   if(document.body.className=="bodyplain")
    document.body.setAttribute("class","bodychangecolor"); 
   else
    document.body.setAttribute("class","bodyplain");
}
setInterval(()=>{changeBackground()},5000);         //time interval

function addHighScore(){
  var text=document.createElement('text');
  var breakl=document.createElement('br');
  text.innerHTML='New High Score!!!';
  var h=document.querySelector(".highscore");
  var highscore=document.querySelector(".scorecard");
  console.log(highscore.innerHTML);
  text.innerHTML=highscore.innerHTML;
  h.appendChild(text);
  h.appendChild(breakl);                              //add final score of the game
  highscore.innerHTML='';                             //reset to 0
  time=setInterval(()=>{detectCollision()},10);
  score=setInterval(()=>{addScore()},10);             //set interval to check collision and add score
}

// restart button functionality
var x=document.querySelector(".input");
if(x)
 x.addEventListener('click',()=>{addHighScore()});
 function addScore(){
  var x=document.querySelector(".scorecard");
  if(x.innerHTML=='')
     x.innerHTML=0;
  else
     x.innerHTML++;
}
var score=setInterval(()=>{addScore()},10);
