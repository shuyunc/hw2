function setup() {
  createCanvas(800, 800);

}

function printA(x, y) {
  line(x, y, x - 20, y + 50);
  line(x, y, x + 10, y);
  line(x + 10, y, x + 30, y + 50);
  line(x - 10, y + 25, x + 20, y + 25);
}

function printB(x, y) {
  noFill();
  arc(x + 10, y + 25, 45, 50, 0, HALF_PI, OPEN);
  arc(x + 10, y + 25, 45, 50, PI + HALF_PI, TWO_PI);
  line(x, y, x, y + 50);
  line(x, y, x + 10, y);
  line(x, y + 50, x + 10, y + 50);
  line(x, y + 25, x + 33, y + 25);
}

function printC(x, y) {
  noFill();
  arc(x + 25, y + 25, 45, 50, PI, PI+HALF_PI+QUARTER_PI, );
  arc(x + 25, y + 25, 45, 50, QUARTER_PI, PI);
  
}

function printD(x, y) {
  noFill();
  arc(x + 20, y + 25, 45, 50, 0, HALF_PI, OPEN);
  arc(x + 20, y + 25, 45, 50, PI + HALF_PI, TWO_PI);
  line(x+10, y, x+10, y + 50);
  line(x+10, y, x+20, y);
  line(x+10, y + 50, x+20, y + 50);
  
}

function printE(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  line(x+10, y, x +35, y);
  line(x+10, y + 50, x + 35, y + 50);
  line(x+10, y + 25, x + 33, y + 25);
  
}

function printF(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  line(x+10, y, x +35, y);
  // line(x+10, y + 50, x + 35, y + 50);
  line(x+10, y + 25, x + 33, y + 25);
  
}

function printG(x, y) {
  noFill();
  arc(x + 25, y + 25, 45, 50, PI, PI+HALF_PI+QUARTER_PI, );
  arc(x + 25, y + 25, 45, 50, QUARTER_PI, PI);
  line(x+30, y + 25, x + 50, y + 25);
  line(x+43, y + 25, x + 43, y + 50);
}

function printH(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  line(x+35, y, x+35, y + 50);
  // line(x+10, y, x +35, y);
  // line(x+10, y + 50, x + 35, y + 50);
  line(x+10, y + 25, x + 33, y + 25);
  
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

function printJ(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 30);
  // line(x+35, y, x+35, y + 50);
  // line(x+10, y, x +35, y);
  // line(x+10, y + 50, x + 35, y + 50);
  // line(x+10, y + 25, x + 33, y + 25);
  line(x+5, y , x+15, y );
  // line(x+5, y+50 , x+15, y+50 );
  arc(x-13 , y + 30, 45, 40, 0, HALF_PI, OPEN);
  
}

function printK(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  // line(x+35, y, x+35, y + 50);
  // line(x+10, y, x +35, y);
  // line(x+10, y + 50, x + 35, y + 50);
  // line(x+10, y + 25, x + 33, y + 25);
  line(x+5, y , x+15, y );
  line(x+5, y+50 , x+15, y+50 );
  line(x+10, y+25 , x+30, y );
  line(x+10, y+25 , x+30, y+50 );
  
}
function printL(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  // line(x+35, y, x+35, y + 50);
  // line(x+10, y, x +35, y);
  // line(x+10, y + 50, x + 35, y + 50);
  // line(x+10, y + 25, x + 33, y + 25);
  
  line(x+10, y+50 , x+30, y+50 );
  
}

function printM(x, y) {
  noFill();
  line(x-15, y, x-15, y + 50);
  line(x-15, y, x+5, y + 50);
  line(x+25, y, x+5, y + 50);
  line(x+25, y, x+25, y + 50);
}

function printN(x, y) {
  noFill();
  line(x-10, y, x-10, y + 50);
  line(x-10, y, x+25, y + 50);
  line(x+25, y, x+25, y + 50);
}

function printO(x, y) {
  noFill();
  arc(x + 25, y + 25, 45, 50, 0, 2 * PI, );
}

function printP(x, y) {
  noFill();
  line(x-10, y, x-10, y + 50);
  arc(x -10, y + 12.5, 45, 28, -PI/2, PI/2, );
}

function printQ(x, y) {
  noFill();
  arc(x + 25, y + 25, 45, 50, 0, 2 * PI, );
  line(x + 34, y + 34, x + 50, y + 50); 
}

function printR(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  arc(x +10, y + 12.5, 50, 25, -PI/2, PI/2, );
  line(x+10, y + 25, x +35, y+50);
  // line(x+10, y + 50, x + 35, y + 50);
  //line(x+10, y + 25, x + 33, y + 25);
}

function printS(x, y) {
  noFill();
  
  arc(x +10, y + 12.5, 25, 25,  0.5 * PI, 1.75 * PI, );
  arc(x +10, y + 37.5, 25, 25,  -0.5 * PI, 0.75 * PI, );
}

function printT(x, y) {
  noFill();
  
  line(x+5, y , x+35, y );
  line(x+20, y, x+20, y + 50);
}

function printU(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 25);
  line(x+35, y, x+35, y + 25);
  arc(x +22.5, y + 25, 25, 50, 0,  PI, );
  
}

function printV(x, y) {
  noFill();
  
  line(x-15, y, x+5, y + 50);
  line(x+25, y, x+5, y + 50);
  
}

function printW(x, y) {
  noFill();
  
  line(x-15, y, x, y + 50);
  line(x, y+50, x+5, y );
  line(x+5, y, x+20, y + 50);
  line(x+20, y+50, x+25, y );
  
  
}
function printK(x, y) {
  noFill();
  
  line(x+10, y, x+10, y + 50);
  // line(x+35, y, x+35, y + 50);
  // line(x+10, y, x +35, y);
  // line(x+10, y + 50, x + 35, y + 50);
  // line(x+10, y + 25, x + 33, y + 25);
  line(x+5, y , x+15, y );
  line(x+5, y+50 , x+15, y+50 );
  line(x+10, y+25 , x+30, y );
  line(x+10, y+25 , x+30, y+50 );
  
}

function printX(x, y) {
  noFill();
  
 
  line(x+10, y+50 , x+30, y );
  line(x+10, y , x+30, y+50 );
  
}
function printY(x, y) {
  noFill();
  
 
  line( x+30, y, x+20, y+25 );
  line(x+10, y , x+20, y+25 );
  line(x + 20, y + 25, x + 20, y + 50);
  
}

function printZ(x, y) {
  noFill();
  
 
  line( x, y, x+30, y );
  line(x+30, y , x, y+50 );
  line(x , y + 50, x+30, y + 50);
  
}



function draw() {
  background(200);
  printA(50, 50);
  printB(100, 50);
  printC(150,50);
  printD(210,50);
  printE(270,50);
  printF(320,50);
  printG(370,50);
  printH(440,50);
  printI(500,50);
  printJ(550,50);
  printK(600,50); 
  printL(650,50); 
  printM(50,150); 
  printN(110,150); 
  printO(150, 150);
  printP(230, 150);
  printQ(260, 150);
  printR(320, 150);
  printS(380, 150);
  printT(420, 150);
  printU(470, 150);
  printV(540, 150);
  printW(590, 150);
  printX(630, 150);
  printY(660, 150);
  printZ(50, 250);
//   printZ(420, 150);
}
