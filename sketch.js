var r;
var g;
var b;
var sound;
var randomColor;

function preload(){
  sound=loadSound('popsound.wav')
}
function setup() {
  createCanvas(900, 900);
  //newDraw();
  newDraw2()
}



function newDraw2(){
  
   r=random(0,255);
  g=random(0,255);
  b=random(0,250);
  
 
  randomColor=random(0,255);
  for (var x=0; x<width; x+=100)
for (var y=0; y<=height; y +=150 )
{
  
   //fill(random(100,255),r,random(0,255));
  let randColor=random(5);
      
      if(randColor<1){
        fill('white');
      } else if (randColor<2){
        fill('red');
      } else if (randColor<3){
        fill('blue');
      } else if (randColor<4){
        fill('yellow');
      } else if (randColor<5){
        fill('black');
      }
      
   stroke('black');
   strokeWeight(8);
  rect(x,y,random(50,600),random(0,600));
}
}
function mousePressed(){
 // newDraw();
  newDraw2();
 {
  sound.play();/*the letter cannot be capital*/
  
  } /* color for newDraw*/

}


