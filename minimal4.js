var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}
function random2(min, max) {
  return (fxrand() * (max - min + 1)) + min;
}
function randomFromList(items){
  return items[Math.floor(fxrand()*items.length)];
  }




  const inY = canvas.height/8
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  

const x = Math.floor(random(100,600))
const y = Math.floor(random(100,600))
const radius = Math.floor(random(100,200))
const q = Math.floor(random(1,1.3))




const colors1 = ["#ffcbf2"]
const colors2 = ["#ecbcfd"]
const colors3 = ["#e2afff"] 
const colors4 = ["#eabaf6"]
const colors5 = ["#e9edc9"]
const colors6 = ["#d8b1ff"]
const colors7 = ["#ffcae9"]
const colors8 = ["#cdf5b7"]
const colors9 = ["#f4ccff"] 
const colors10 = ["#e9edc9"]
const colors11 = ["#fdcec6"]
const colors12 = ["#d8bfff"]

const colorTronco = `#212529`
const colorNieve = "#ced4da"

const coloresCirculos = [colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10,colors11,colors12]
const colorCirculos = randomFromList(coloresCirculos)
const colorCirculos2 = "#e5d9f2"

let a = random(150,350)
let b =random (200,400)
let c =random (200,400)
let d =random (400,550)
let e =random (400,550)
let f =random (350,590)

ctx.beginPath();
ctx.fillStyle = colorCirculos
ctx.arc(d, e,a,0 , 2* Math.PI)
ctx.fill()
ctx.strokeStyle = colorCirculos;

ctx.beginPath()
ctx.rect(b,c,f,f)
ctx.lineWidth=2;
ctx.strokeStyle = "#000";
ctx.stroke();
drawTree(centerX,900,85, -Math.PI / 2, 17,8);




fxpreview();





function drawTree(centerX, inY, length, angle, depth, branchWidth) {

  
 
  var newLength, newAngle, newDepth, maxBranch = 2,
      endX, endY, maxAngle = 2 * Math.PI / 5, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX + length * Math.cos(angle);
  endY = inY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);
  if (depth <= 1) {
   
    ctx.strokeStyle = colorTronco;
  }
  else if (depth <= 2) {
   
    ctx.strokeStyle = colorTronco;
  }
  else {
    ctx.strokeStyle =colorTronco;
  }
 
  ctx.stroke();
  newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch -q)) +q;
  if(fxrand()<0.3){
  branchWidth *=0.6 ;}
  else{
    branchWidth *=0.7;
  }
  //0.6

  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + fxrand() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + fxrand() * 0.3);
    
    drawTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}








