var x = 0, y = 0;
var stepSize = 0.0;
var letters = "Pause Please. Things you can see only when you pause. All inspiration comes from home. Ordinary life living it day by day like anyone else.";
var fontSize = 30;
var angleDistortion = 0.0;
var counter = 0;




remote console.loglink
"landscape"
remote console.loglink
"correctedWidth=568, correctedHeight=320, w=568, h=320, displayWidth=320, displayHeight=568, window.innerWidth=568, window.innerHeight=320"

window.onresize = function() {
checkOrientation();
};
var checkOrientation = function() {
var w = window.innerWidth;
var h = window.innerHeight;
var dw0 = displayWidth;
var dh0 = displayHeight;
var dw;
var dh;
if ( w > h ) {
console.log('landscape');
// due to bug displayWidth always shows the portrait width so double check the dw0/dh0
if ( dw0 > dh0 ) {
dw = dw0;
dh = dh0;
} else {
dw = dh0;
dh = dw0;
}
} else {
console.log('portrait');
if ( dw0 < dh0 ) {
dw = dw0;
dh = dh0;
} else {
dw = dh0;
dh = dw0;
}
}
console.log('correctedWidth='+dw+', correctedHeight='+dh+', w='+w+', h='+h+', displayWidth='+dw0+", displayHeight="+dh0+", window.innerWidth="+window.innerWidth+", window.innerHeight="+window.innerHeight);
return {width:dw,height:dh};
};


function setup() {
var displaySize = checkOrientation();
createCanvas(displaySize.width, displaySize.height);  background(255);
  smooth();
  cursor(CROSS);
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);

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

