var myGamePiece;
var myGameMover;
var xOffset=20;
var xOffsetCopy=xOffset;
var canva;
function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
    myGameMover=new component(20,20,"blue",10,120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 720;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        canva=this.canvas;
        document.body.insertBefore(this.canvas, document.body.childNodes[6]);
        this.interval = setInterval(updateGameArea, 100);
        this.fillStyle='color';
        this.context.fillRect(0, 0, this.width, this.height);      

    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = 50;
    this.y = 225;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX*0.01;
        this.y += this.speedY*0.01;        
    }    
}
function jump(){
    var tempY=myGamePiece.y;
    for(let i=0;i<50;i++)
{   myGamePiece.speedY-=3; 
    myGamePiece.newPos();           }
for(let i=0;i<100;i++)
{
}
  myGamePiece.speedY=tempY;
  myGamePiece.newPos();
}
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    
}

function moveup() {
    myGamePiece.speedY -= 1; 
}

function movedown() {
    myGamePiece.speedY += 1; 
}

function moveleft() {
    myGamePiece.speedX -= 1; 
}

function moveright() {
    myGamePiece.speedX += 1; 
}
var a=document.querySelector(".startGame");
if(a)
 a.addEventListener('click',()=>{startGame()});
/*window.addEventListener('keydown',(e)=>{if(e.key=='ArrowLeft') moveright()});
window.addEventListener('keydown',(e)=>{if(e.key=='ArrowRight') moveright()});*/
window.addEventListener('keydown',(e)=>{if(e.key=='ArrowUp') jump()});
//window.addEventListener('keydown',(e)=>{if(e.key=='ArrowDown') movedown()});

for(var i =0; i < Math.random()*4; i++){
    this.x+=Math.random()*5;
    this.x = xOffsetCopy+(i * (xOffset+Math.random()*30+1)) + (5*i)//Math.random()* tryCanvas.clientWidth;
    this.y = 0;
    this.w = 20+Math.random()*3;
    this.h = Math.random()*60+10;
    myGameArea.ctx.beginPath();
    myGameArea.ctx.rect(this.x, this.y, this.w, this.h)
    myGameArea.ctx.fill();
    for(let i=0;i<10000;i++){}
    xOffsetCopy--;
    if(xOffsetCopy==0)
       xOffsetCopy=xOffset;
  }
var t=document.createElement("div");
t.setAttribute("class","square");
var h=document.querySelector(".display");
h.appendChild(t);
console.log(document.body.childNodes[5]);
console.log(t);