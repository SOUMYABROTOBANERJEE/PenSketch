function setup() {
  createCanvas(640, 480);
}

function draw() {
  
  if(mouseIsPressed)
  {
    fill(255,80,90);
	}
  else
  {
    fill(0);
  }
  ellipse(mouseX,mouseY,2,2);
}