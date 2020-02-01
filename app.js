class Brick{

	constructor(color, y){

		this.brickColor = color;
		this.yPos = y;
		this.xPos = 0;
	}

	createBrick(){

		fill(this.brickColor);
		rect(this.xPos,this.yPos, 150,70);
	}

	setSpeed(){

		this.speed = 1;
	}

	moveBrick(){

		this.xPos+=this.speed;
		if(this.xPos+150 >= width || this.xPos <= 0)
			this.speed*= -1;
	}

}

function setup(){

	createCanvas(1000,600);
}

let brick1 = new Brick("white", 200);
let brick2 = new Brick("black", 400);

brick1.setSpeed();
brick2.setSpeed();

function draw(){

	background(0);
	if(mouseIsPressed)
		background(50);

	brick1.createBrick();
	brick1.moveBrick();

	if(!mouseIsPressed)
  		createBars();
  
  	brick2.createBrick();
  	brick2.moveBrick();

}

function createBars() {
  let len = 25;
  for(let i = 0;i<width/len;i++){
    fill("white");
    if(i%2 == 0)
    rect(i*len,height,len,-height);
  }
}

