/* MARQUEE */
var rightJS = {
  init: function(){
    rightJS.Tags = document.querySelectorAll('.rightJS');
    for(var i = 0; i < rightJS.Tags.length; i++){
      rightJS.Tags[i].style.overflow = 'hidden';
    }
    rightJS.Tags = document.querySelectorAll('.rightJS div');
    for(var i = 0; i < rightJS.Tags.length; i++){
      rightJS.Tags[i].style.position = 'relative';
      rightJS.Tags[i].style.right = '-'+rightJS.Tags[i].parentElement.offsetWidth+'px';
    }
    rightJS.loop();
  },
  loop: function(){
    for(var i = 0; i < rightJS.Tags.length; i++){
      var x = parseFloat(rightJS.Tags[i].style.right);
      x ++;
      var W = rightJS.Tags[i].parentElement.offsetWidth;
      var w = rightJS.Tags[i].offsetWidth;
      if((x/100) * W  > w) x = -W;
      if (rightJS.Tags[i].parentElement.parentElement.querySelector(':hover') !== rightJS.Tags[i].parentElement) rightJS.Tags[i].style.right = x + 'px';
    } 
    requestAnimationFrame(this.loop.bind(this));
  }
};
window.addEventListener('load',rightJS.init);



/* PP TEXT */

var x = 0, y = 0;
var stepSize = 0.0;
var letters = "Pause Please. →→→→→ Ant Garden →→→→→ Small is beautiful. ☺☺☺ A study of lifestyle as if ants mattered. ☻☻☻   ";
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

