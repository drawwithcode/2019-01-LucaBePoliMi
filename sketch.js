function preload(){

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(27,40,56);
  angleMode(DEGREES);

  push();

translate(width / 2, height / 2);
  fill(0, 0, 0);
  ellipse(0, 0, width/3, width/3);

  pop();

}

function draw() {

push();

translate(width / 2, height / 2);




push();

rotate(frameCount * 4);

 stroke(lerpColor(color('#f45942'), color('#2600ff'), frameCount/400));
line(width/6,0,(cos (frameCount*3)*width/6),(sin (frameCount*3)*width/6));

if (frameCount == 360 ) {
  noLoop()
}

pop();

push();

stroke(255, 200, 30);
line(width/22, 0, (cos(frameCount * 4) * width/22), (sin(frameCount * 4) * width/22 ));

pop();

pop();



push();

stroke(80, 152, 192);

push();

push();
translate(width/7, height/2);
line(width/80, 0, (cos(frameCount * 4) * width/80), (sin(frameCount * 4) * width/80 ));

pop();

push();
translate(width*6/7, height/2);
line(width/80, 0, (cos(frameCount * 4) * width/80), (sin(frameCount * 4) * width/80 ));

pop();

pop();



}
