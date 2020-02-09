var x = 0;
var y = 0;
var number_of_mouse_clicks = 0;

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
    line(x - 15, y, x - 15, y + 50);
    line(x - 15, y, x + 5, y + 50);
    line(x + 25, y, x + 5, y + 50);
    line(x + 25, y, x + 25, y + 50);
  }

  function printA(x, y) {
    line(x, y, x - 20, y + 50);
    line(x, y, x + 10, y);
    line(x + 10, y, x + 30, y + 50);
    line(x - 10, y + 25, x + 20, y + 25);
  }

  function printZ(x, y) {
    noFill();


    line(x, y, x + 30, y);
    line(x + 30, y, x, y + 50);
    line(x, y + 50, x + 30, y + 50);

  }

  function printI(x, y) {
    //noFill();


    line(x + 10, y, x + 10, y + 50);
    // line(x+35, y, x+35, y + 50);
    // line(x+10, y, x +35, y);
    // line(x+10, y + 50, x + 35, y + 50);
    // line(x+10, y + 25, x + 33, y + 25);
    line(x + 5, y, x + 15, y);
    line(x + 5, y + 50, x + 15, y + 50);

  }

  function printN(x, y) {
    noFill();
    line(x - 10, y, x - 10, y + 50);
    line(x - 10, y, x + 25, y + 50);
    line(x + 25, y, x + 25, y + 50);
  }

  function printG(x, y) {
    noFill();
    colorMode(RGB, 255, 255, 255, 1);
    arc(x + 25, y + 25, 45, 50, PI, PI + HALF_PI + QUARTER_PI, );
    arc(x + 25, y + 25, 45, 50, QUARTER_PI, PI);
    line(x + 30, y + 25, x + 50, y + 25);
    line(x + 43, y + 25, x + 43, y + 50);
  }

  function printL(x, y) {
    noFill();

    line(x + 10, y, x + 10, y + 50);
    // line(x+35, y, x+35, y + 50);
    // line(x+10, y, x +35, y);
    // line(x+10, y + 50, x + 35, y + 50);
    // line(x+10, y + 25, x + 33, y + 25);

    line(x + 10, y + 50, x + 30, y + 50);

  }

  function printF(x, y) {
    noFill();

    line(x + 10, y, x + 10, y + 50);
    line(x + 10, y, x + 35, y);
    // line(x+10, y + 50, x + 35, y + 50);
    line(x + 10, y + 25, x + 33, y + 25);

  }

  function printE(x, y) {
    noFill();

    line(x + 10, y, x + 10, y + 50);
    line(x + 10, y, x + 35, y);
    line(x + 10, y + 50, x + 35, y + 50);
    line(x + 10, y + 25, x + 33, y + 25);

  }

  function printS(x, y) {
    noFill();

    arc(x + 10, y + 12.5, 25, 25, 0.5 * PI, 1.75 * PI, );
    arc(x + 10, y + 37.5, 25, 25, -0.5 * PI, 0.75 * PI, );
  }
  background(230, 145, 77);
  strokeWeight(4);
  printA(50, 50);
  printM(100, 50);
  printA(150, 50);
  printZ(185, 50);
  printI(210, 50);
  printN(240, 50);
  printG(270, 50);


  strokeWeight(1);
  printL(80, 200);
  printI(120, 230);
  printF(150, 200);
  printE(190, 170);
  printI(260, 200);
  printS(300, 200);
  //stroke(255, 204, 0);


  strokeWeight(8);
  printA(80, 300);
  printM(130, 420);
  printA(180, 420);
  printZ(215, 420);
  printI(240, 420);
  printN(270, 420);
  printG(300, 420);

 if (mouseIsPressed) {
    number_of_mouse_clicks = number_of_mouse_clicks + 1;
  }   

  if (number_of_mouse_clicks % 2 == 1) {
    stroke(255, 200, 200);
  } else {
    stroke(5, 200, 200);
  }

  // print('hello world')





}
