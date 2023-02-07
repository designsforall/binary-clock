function setup() {
  createCanvas(750, 400);
  textFont('Boo City');
}

function draw() {
  background(0);
  translate(width/2 -270, height/2 +100);

  var colorH = color(255, 0, 0),
      colorM = color(0, 255, 0),
      colorS = color(0, 0, 255);

  var h = hour().toString().split("").map(Number),
      m = minute().toString().split("").map(Number),
      s = second().toString().split("").map(Number);

function drawnum(num, digit, color) {
  for (var i = 0; i < num; i++) {
    var bit = (digit >> i) & 1;
    if (bit) {
      fill(color);
    } else {
      fill(200);
    }
    rect(-30, -(pad) * i -30, dmtr);
  }
  
  translate(pad, 0);
}
  
  function drawline() {
  stroke(255);
  strokeWeight(2);
  line(0, 30, 0, -4 * pad +40);
  noStroke();
  translate(pad, 0);
}

  if (h < 10) {
    drawnum(2, h[1], colorH);
    drawnum(4, h[0], colorH);
    } else {
      drawnum(2, h[0], colorH);
      drawnum(4, h[1], colorH);
    }

  drawline();

  if (m < 10) {
    drawnum(3, m[1], colorM);
    drawnum(4, m[0], colorM);
    } else {
      drawnum(3, m[0], colorM);
      drawnum(4, m[1], colorM);
    }
  
  drawline();

  if (s < 10) {
    drawnum(3, s[1], colorS);
    drawnum(4, s[0], colorS);
    } else {
      drawnum(3, s[0], colorS);
      drawnum(4, s[1], colorS);
    }
  
  fill(200);
  textSize(dmtr/2 +10);
  textAlign(CENTER, CENTER);
  text('BINARY', -314, -275);

  fill(255);
  textSize(dmtr);
  textAlign(CENTER, CENTER);
  text('1', 0, -5);
  text('2', 0, -(pad) -5);
  text('4', 0, -(pad) * 2 -5);
  text('8', 0, -(pad) * 3 -5);
  
  fill(200);
  textSize(dmtr/2);
  textAlign(CENTER, CENTER);
  text('HH', -525, 60);
  text('MM', -313, 60);
  text('SS', -102, 60);

}

var dmtr = 60,
    margin = 10,
    pad = dmtr + margin;
