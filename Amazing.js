function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  
  
function printA(x, y) {
  line(x, y, x - 20, y + 50);
  line(x, y, x + 10, y);
  line(x + 10, y, x + 30, y + 50);
  line(x - 10, y + 25, x + 20, y + 25);
}
  function printM(x, y) {
  noFill();
  line(x-15, y, x-15, y + 50);
  line(x-15, y, x+5, y + 50);
  line(x+25, y, x+5, y + 50);
  line(x+25, y, x+25, y + 50);
}
  function printA(x, y) {
  line(x, y, x - 20, y + 50);
  line(x, y, x + 10, y);
  line(x + 10, y, x + 30, y + 50);
  line(x - 10, y + 25, x + 20, y + 25);
}
  function printZ(x, y) {
  noFill();
  
 
  line( x, y, x+30, y );
  line(x+30, y , x, y+50 );
  line(x , y + 50, x+30, y + 50);
  
}

  function printI(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  // line(x+35, y, x+35, y + 50);
  // line(x+10, y, x +35, y);
  // line(x+10, y + 50, x + 35, y + 50);
  // line(x+10, y + 25, x + 33, y + 25);
  line(x+5, y , x+15, y );
  line(x+5, y+50 , x+15, y+50 );
  
}
  function printN(x, y) {
  noFill();
  line(x-10, y, x-10, y + 50);
  line(x-10, y, x+25, y + 50);
  line(x+25, y, x+25, y + 50);
}
  function printG(x, y) {
  noFill();
  arc(x + 25, y + 25, 45, 50, PI, PI+HALF_PI+QUARTER_PI, );
  arc(x + 25, y + 25, 45, 50, QUARTER_PI, PI);
  line(x+30, y + 25, x + 50, y + 25);
  line(x+43, y + 25, x + 43, y + 50);
}
  background(230,145,77);
  printA(50, 50);
  printM(100, 50);
  printA(150,50);
  printZ(210,50);
  printI(270,50);
  printN(320,50);
  printG(370,50);
}
