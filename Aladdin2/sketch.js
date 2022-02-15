

  var score = 0;

  var Redg, Yellowg, Blueg, Purpleg, Blackg, Necklaceg;
  var plus2, minus2
function preload(){
  aladdin_img = loadImage("images/Aladdinstart.png");
  jafar_img = loadImage("images/Jafarstart.png")
  background_img = loadImage("images/Tunnel.jpg")
  red_img = loadImage("images/Gemred.png")
  blue_img = loadImage("images/Gemblue.png")
  yellow_img = loadImage("images/GemYellow .png")
  purple_img = loadImage("images/Gempurple.png")
  black_img = loadImage("images/Gemblack.png")
  necklace_img = loadImage("images/Necklace.png")
  plus2_img = loadImage("images/+2.png")
  minus2_img = loadImage("images/+2.png")


 
}

function setup() {
  createCanvas(500, 500);

  Background = createSprite(250, 250, 500, 500);
  Background.addImage(background_img);
  Background.velocityX = -2;


  Aladdin = createSprite(50, 100, 10, 10);
  Aladdin.addImage(aladdin_img);
  Aladdin.scale = 0.2;
  Aladdin.setCollider("rectangle", 0, 0, 250, 400)
  Aladdin.debug = true;

  Jafar = createSprite(50, height - 100, 10, 10);
  Jafar.addImage(jafar_img);
  Jafar.scale = 0.3;
  Jafar.setCollider("rectangle", 0, 0, 250, 400)
  Jafar.debug = true;

  plus2 = createSprite(250, 250, 10, 10);
  plus2.addImage(plus2_img);
  plus2.visible = false;
  plus2.scale = 0.1;

  minus2 = createSprite(250, 250, 10, 10);
  minus2.addImage(minus2_img);
  minus2.visible = false;
  minus2.scale = 0.1;
  Redg = new Group(red)
  Yellowg = new Group(yellow)
  Blueg = new Group(blue)
  Purpleg = new Group(purple)
  Blackg = new Group(black)
  Necklaceg = new Group(necklace)
  
 
  edges = createEdgeSprites();
}

function draw(){
  background("black");

  

  Aladdin.collide(edges);
  Jafar.collide(edges);

  if(Background.x<0){

    Background.x = 250;

  }
  
  if(frameCount%150 == 0){
    num1 = Math.round(random(1,2))
    console.log(num1);
    if (num1 == 1){
      
      spawnred();
      spawnblue();
      spawnblack();
    }

    if (num1 == 2){

      spawnyellow();
      spawnpurple();
      spawnnecklace();
    }
  }
  if(keyDown (UP_ARROW)){

    Aladdin.y = Aladdin.y - 9;
  }
  if(keyDown (DOWN_ARROW)){

    Aladdin.y = Aladdin.y + 9;
  }

  if(keyDown (LEFT_ARROW)){

    Aladdin.x = Aladdin.x - 9;
  }
  if(keyDown (RIGHT_ARROW)){

    Aladdin.x = Aladdin.x + 9;
  }

  if(keyDown ("w")){

    Jafar.y = Jafar.y - 9;
  }
  
  if(keyDown ("s")){

    Jafar.y = Jafar.y + 9;
  }

  if(keyDown ("a")){

    Jafar.x = Jafar.x - 9;
  }
  
  if(keyDown ("d")){

    Jafar.x = Jafar.x + 9;
  }

  if(Aladdin.isTouching(Redg)){
    score = score + 5;
    Redg.destroyEach();
    //Redg.visible = false;
    plus2.visible = true;
  }
  if(Aladdin.isTouching(Blueg)){
    score = score + 5;
    Blueg.destroyEach();
    //Redg.visible = false;
    plus2.visible = true;
  }
  if(Aladdin.isTouching(Yellowg)){
    score = score + 5;
    Yellowg.destroyEach();
    //Redg.visible = false;
    plus2.visible = true;
  }
  if(Aladdin.isTouching(Purpleg)){
    score = score + 5;
    Purpleg.destroyEach();
    //Redg.visible = false;
    plus2.visible = true;
  }

  if(Aladdin.isTouching(Blackg)){
    score = score + 5;
    Blackg.destroyEach();
    //Redg.visible = false;
    plus2.visible = true;
  }

  if(Aladdin.isTouching(Necklaceg)){
    score = score + 5;
    Necklaceg.destroyEach();
    //Redg.visible = false;
    plus2.visible = true;
  }
  
  

  
 drawSprites();
 textSize(25);
 fill("light blue");
 text("score: " + score, 400, 50);

}

function spawnred() {
  red = createSprite(Math.round(random(500,800)), Math.round(random(50,450)), 10, 10);
  red.addImage(red_img);
  red.scale = 0.1;
  red.velocityX = -2;
  Redg.add(red);
}

function spawnblue() {
  blue = createSprite(Math.round(random(500,800)), Math.round(random(50,450)), 10, 10);
  blue.addImage(blue_img);
  blue.scale = 0.1;
  blue.velocityX = -2;

}

function spawnyellow() {
  yellow = createSprite(Math.round(random(500,800)), Math.round(random(50,450)), 10, 10);
  yellow.addImage(yellow_img);
  yellow.scale = 0.1;x
  yellow.velocityX = -2;

}

function spawnpurple() {
  purple = createSprite(Math.round(random(500,800)), Math.round(random(50,450)), 10, 10);
  purple.addImage(purple_img);
  purple.scale = 0.1;
  purple.velocityX = -2;

}

function spawnnecklace() {
  necklace = createSprite(Math.round(random(500,800)), Math.round(random(50,450)), 10, 10);
  necklace.addImage(necklace_img);
  necklace.scale = 0.1;
  necklace.velocityX = -2;

}

function spawnblack() {
  black = createSprite(Math.round(random(500,800)), Math.round(random(50,450)), 10, 10);
  black.addImage(red_img);
  black.scale = 0.1;
  black.velocityX = -2;

}