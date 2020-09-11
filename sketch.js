var monkey_running,bananaImage,stoneImage,backImage;
var monkey,banana,stone,scene,foodGroup,obstaclesGroup;

var score;

function preload(){
monkey_running=loadAnimation("monkey_01.png","monkey_03.png","monkey_05.png");
bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png","stone-1.png");
  backImage=loadImage("jungle.jpg");
}
function setup() {
  createCanvas(500, 600);
  monkey=createSprite=(450,50,20,40);
  monkey.addAnimation(monkey_running);
  
  scene=createsprite(0,0,500,600);
  scene.loadImage(backImage);
  scene.x = scene.width /2;
  scene.velocityX = -4;
  scene.visible=false;
  
  score=0; 
  
}

function draw() {
  background(220);
  
  
  if (scene.x < 0){
    scene.x = ground.width/2;
  }
  
  if(foodGroup.isTouching(monkey)){
  score=score+2;
  } 
  
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.5;
  monkey.velocityX=0;
  scene.velocityX=0;  
  }
  
  food();
  obstacles();
  score();
  drawSprites();
}

function score(){
stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  switch(score){
    case 10 : monkey.scale=0.12;
      break;
    case 20 : monkey.scale=0.14;
      break;
    case 30 : monkey.scale=0.16;
      break;
    case 40 : monkey.scale=0.18;
      break;
    default:break;  
    
  }
  
}

function food(){

  banana=createSprite=(150,300,5,5);
  banana.y = Math.round(random(320,380));
  
  banana.loadImage(bananaImage);
  banana.scale=0.5;
  
  banana.velocityX=-2;
  
  banana.lifetime=250;
  
  banana.depth = trex.depth;
  monkey.depth = trex.depth + 1;
  
  foodGroup.add(banana);

}

function obstacles(){

  stone=createSprite=(150,200,5,5);
  stone.x=Math.round(random(150,450))
  stone.loadImage(stoneImage);
  stone.scale = 0.5;
  stone.velocityX=-2;
  stone.lifetime = 250;
  obstacleGroup.add(stone);

}
