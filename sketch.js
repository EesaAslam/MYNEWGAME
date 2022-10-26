var pokemon,pokemonImg
var climberImg,climber,climbersGroup; 
var invisibleBlockGroup,invisibleBlock; 
var backgroundImg,background; 
var gameState = "play" 



function preload(){
backgroundImg = loadImage("Background.png"); 
climberImg = loadImage("climber.png"); 
pokemonImg = loadImage("Pokemon.png")
crystalSound = loadSound("crystalgems.wav");
}

function setup() {
 createCanvas(600,600) 
 crystalSound.loop(); 
 background = createSprite(300,300); 
 background.addImage("background",backgroundImg); 
 background.velocityY = 1; 

 climbersGroup = new Group(); 
 invisibleBlockGroup = new Group(); 
 
 pokemon = createSprite(200,200,50,50); 
  pokemon.scale = 0.5; 
 pokemon.addImage("pokmeon",pokemonImg);
}

function draw() {
background(200)
 if (gameState === "play" ){
    if (background > 400){
        background.y = 300
    }  

   if (keydown("left_arrow")){
    pokemon.x = pokemon.x - 3
   } 
    
   if (keydown("right_arrow")){
    pokemon.x = pokemon.x + 3; 
   } 

   if (keydown("space")){
    pokemon.velocityY = -5;
   } 

   pokemon.velocityY = pokemon.velocityY + 0.8; 

   if (invisibleBlockGroup.isTouching(pokemon)){
    pokemon.destroy(); 
   } 

   spawnDoors(); 
   drawSprites();

 } 

 if (gameState === "end"){
    stroke("yellow"); 
    Fill("yellow"); 
    textSize(30); 
    text("Game Over", 230,250);
 }
     
} 

function spawnDoors(){
    if (frameCount % 240 === 0){
        var door = createSprite(200,-50); 
        door.addImage(doorImg);  

        var invisibleBlock = createSprite(200,15); 
        invisibleBlock.width = climber.width; 
        invisibleBlock.height = 2; 

        door.x = Math.round(random(120,440)); 
        door.velocityY = 1; 

        invisibleBlock.x = door.x; 
        invisibleBlock.velocityY = 1; 

        pokemon.depth = door.depth; 
         pokemon.depth +- 1; 

        door.lifetime = 800; 
        climber.lifetime = 800; 
        invisibleBlock.lifetime = 800; 

        doorsGroup.add(door); 
        climbersGroup.add(climber); 

        invisibleBlock.debug = true; 
        invisibleBlockGroup.add(invisibleBlock);
         
    } 
}