# IRONBURGERS

## Description
Ironburgers is a game where the chef (player) must catch 6 ingredients to make a burger (Two buns, a burger, cheese, tomato and lettuce). The player serves burgers to gain points and has two minutes to make and serve as many burgers as possible. If the chef tries to serve a burger containing the wrong ingredients, they must start making the burger again from scratch. The game is over when the chef serves 3 wrong burgers, or after two minutes. 


</br>

## MVP (DOM - CANVAS)
A Canvas game where the player catches burger ingredients and serves the burgers.

</br>

## Backlog
False Ingredients </br>
Burger must be in a particular order </br>
Serve the burger </br>
Levels </br>

</br>

## Data structure
Main.js


createSplashScreen(){
} </br>
createGameScreen(){
} </br>
createGameOverScreen(){
}

</br>

Game.js

Game(){
  
  this.canvas; </br>
  this.ctx; </br>
  this.ingredients; </br>
  this.player; </br>
  this.gameIsOver; </br>
  this.gameScreen; </br>
  this.score; </br>
  this.burger; </br>

}

Game.prototype.start(){

}

Game.prototype.startLoop(){

}

Game.prototype.checkCollision(){

}

Game.prototype.checkBurger(){

}

Game.prototype.checkIngredients(){

}

Game.prototype.updateGameStats(){

}

Game.prototype.gameOver(){

}

Game.prototype.passGameOverCallback(){

}

Game.prototype.removeGameScreen(){

}

Game.prototype.drawCanvas(){ 
}

</br>

Player.js

Player() {

    this.canvas; 
    this.ctx;
    this.size;
    this.x;
    this.y;
    this.speed;
    this.direction;
    this.lives
}


Player.prototype.setDirection(){

}

Player.prototype.caughtIngredient(){

}

Player.prototype.serveBurger(){

}

Player.prototype.removeLife() {
  

}

Player.prototype.playerImage() {

}

</br>

Ingredients.js

Ingredients() {

    this.canvas; 
    this.ctx;
    this.size;
    this.x;
    this.y;
    this.speed;
    this.images;
}


Ingredients.prototype.updatePosition() {

}

Ingredients.prototype.isInsideScreen () {
    

}

Ingredients.prototype.ingredientsImage () {

}

</br>

## States y States Transitions


- createSplashScreen()
     - addEventListener(startGame)
  
  
- startGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - createGameOverScreen()
  - addEventListener(startGame)


</br>


## Task

Main - buildDom </br>
Main - createSplashScreen </br>
Main - addEventListener </br>
Main - createGameScreen </br>
Game - createdGameOverScreen </br>
Game - start </br>
Game - removeGameScreen </br>
Game - updateGameStats </br>
Game - drawCanvas </br>
Game - gameOver </br>
Game - checkCollision </br>
Game - checkIngredients </br>
Game - checkBurger </br>
Player - setDirection </br>
Player - caughtIngredient </br>
Player - serveBurger </br>
Player - removeLife </br>
Player - playerImage </br>
Ingredients - updatePosition </br>
Ingredients - isInsideScrren </br>
Ingredients - ingredientsImage </br>


</br>

## Links


### Trello
https://trello.com/invite/b/xTLLCaOx/d77ae65958d049690f5a47848254994d/ironburgers

<br/>

### Git

<br/>

### Slides


