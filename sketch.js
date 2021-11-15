var bg, bgImg;
var rocket, rocketImg;
var fuel, fuelImg;
var asteroid, asteroidImg;
var END =0;
var PLAY =1;
var gameState = PLAY;
var gameover, gameoverImg ;
var fuelNum=900



function preload(){
    bgImg = loadImage("background.jpg");
    rocketImg = loadImage("rocket.png");
    fuelImg = loadImage("fuel.png");
    asteroidImg = loadImage("asteroid.png");
    gameoverImg = loadImage("gameOver.png");

}

function setup() {
    createCanvas(600,900);
    bg = createSprite(300,450,600,900);
    bg.addImage(bgImg);
    bg.scale = 1.8;
    bg.velocityY = 6;

    rocket = createSprite(300,800);
    rocket.addImage(rocketImg);
    rocket.scale = 0.5;
    rocket.setCollider("circle",0,0,150)

    asteroid = createSprite(150,150);
    asteroid.addImage(asteroidImg);
    asteroid.scale = 0.2;
    asteroid.velocityY = 6;

    gameover = createSprite(300,450,100,100);
    gameover.addImage(gameoverImg);
    gameover.visible = false;

    fuel = createSprite(400,450,50,50);
    fuel.addImage(fuelImg);
    fuel.scale = 0.4;
    fuel.velocityY = 6;




    
 
}

function draw() {
    background("black");
    if(bg.y>500){
       bg.y = 400
    }
    if (asteroid.y > 900){
        asteroid.y = Math.round(random(1,3)*100 + random(4,6)*50);
        asteroid.x = Math.round(random(1,3)*50 + random(4,6)*50);

    }

    if (fuel.y > 900){
        fuel.y = Math.round(random(4,6)*100);
        fuel.x = Math.round(random(4,6)*100);

    }

    
    if(gameState===PLAY){
        rocket.x = mouseX
        fuelNum = fuelNum - Math.round(getFrameRate()/50);
        
    }

    if (rocket.isTouching(asteroid)){
        gameState = END;
        asteroid.velocityY = 0;
        bg.velocityY = 0;
        fuel.velocityY = 0;
        gameover.visible = true

      }
      if (rocket.isTouching(fuel)){
        fuelNum = fuelNum + 100;
        fuel.y = Math.round(random(4,6)*100);
        fuel.x = Math.round(random(4,6)*100);

      }

      if (fuelNum<1){
        gameState = END;
        asteroid.velocityY = 0;
        bg.velocityY = 0;
        fuel.velocityY = 0;  
        gameover.visible = true

      }


    drawSprites();
    textSize(20);
    fill(255);
    text("fuelNum:"+ fuelNum,470,50);
 
}