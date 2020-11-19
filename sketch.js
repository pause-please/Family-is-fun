var x = 0, y = 0;
var stepSize = 0.0;
var letters = "Pause Please. →→→→→ Things you can see only when you pause. All inspiration comes from home. Ordinary life living it day by day like anyone else.";
var fontSize = 30;
var angleDistortion = 0.0;
var counter = 0;



function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  smooth();
  cursor(CROSS);
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




function draw() {
  if (mouseIsPressed) {
    var d = dist(x,y, mouseX,mouseY);
    textFont('Arial');
    textSize(fontSize)
    var newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

