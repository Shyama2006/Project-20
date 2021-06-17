var cat , mouse;

var gardenImg , catImg1 , catImg2 , catImg3 , catImg4, mouseImg1 , mouseImg2 , mouseImg3 , mouseImg4 ;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    catImg4 = loadImage("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addImage(catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.15;


}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catRunning",catImg2);
    cat.x = 300;
    cat.scale = 0.2;
    cat.changeAnimation(catImg1);

    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.scale = 0.15;
    mouse.changeAnimation(mouseImg1);

}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.frameDelay = 25;
      mouse.changeAnimation("mouseTeasing");

      }


}
